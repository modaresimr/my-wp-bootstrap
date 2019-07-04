function matchStart(params, data) {
	// If there are no search terms, return all of the data
	if ($.trim(params.term) === '') {
	  return data;
	}
  
	// Skip if there is no 'children' property
	if (typeof data.element === 'undefined') {
	  return null;
	}
	
	
	if (removeSpaceAndUppercase(data.element.outerText).indexOf(removeSpaceAndUppercase(params.term.toUpperCase())) >= 0) 
		  return data;
	if(data.element.attributes['data-tokens']!=undefined && removeSpaceAndUppercase(data.element.attributes['data-tokens'].textContent).indexOf(removeSpaceAndUppercase(params.term.toUpperCase())) >= 0) 
	  		return data;
	return null;
  }
  function removeSpaceAndUppercase(str){
	  return (''+str).replace(' ','').toUpperCase();
  }
  

$(document).ready(function () {
	$.fn.select2.defaults.set("theme", "bootstrap");

	$('select.select2').each(function () {
		$(this).select2({
			matcher: matchStart,
			templateResult: function (data) {
				// We only really care if there is an element to pull classes from
				if (!data.element) {
					return data.text;
				}

				var $element = $(data.element);

				var $wrapper = $('<span></span>');
				$wrapper.addClass($element[0].className);

				$wrapper.text(data.text);

				return $wrapper;
			}


		});
	});

	/*$('.select2').select2({
		
		width: 'style',
		placeholder: $(this).attr('placeholder'),
		allowClear: Boolean($(this).data('allow-clear')),
	});
	$('.select2.select2-tags').select2({
			
		width: 'style',
		placeholder: $(this).attr('placeholder'),
		allowClear: Boolean($(this).data('allow-clear')),
		tags:true
	});
*/
});

(function () {
	'use strict';
	window.addEventListener('load', function () {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');

		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.setAttribute('novalidate', true);
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();