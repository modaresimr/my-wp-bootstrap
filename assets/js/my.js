$(document).ready(function(){
	$.fn.select2.defaults.set("theme", "bootstrap");

	$('.select2').each(function () {
		$(this).select2({});
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

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.getElementsByClassName('needs-validation');
	
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
		form.setAttribute('novalidate', true);
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();