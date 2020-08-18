(function ($) {
  $(function () {
 
        calculate();
 
        jQuery('#calculator input').keyup(function() {
            this.value = this.value.replace(/[^0-9\.,]/g, '');
            this.value = this.value.replace(/[,]/, '.');
        });
        jQuery('#calculator input, #calculator select').change(function() {
            calculate();
        });
        jQuery('#calculator input').keyup(function() {
            calculate();
        });
        function calculate() {
      $('.calculator').each(function(key, val){
        calcInputs = {};
            $(this).find('input, select').each(function(key, val){
                name = $(this).attr('name');
                val = $(this).val();
                if (!$.isNumeric(val)) {
                    switch (name) {
                        case 'area':
                            val = 10;
                            break;
                        case 'corners':
                            val = 1;
                            break;
                        case 'lamp':
                            val = '';
                            break;
                        default:
                            break;
                    }
                    $(this).val(val);
                }
                calcInputs[name] = val;
            });
 
            total = 0;
 
            switch (calcInputs.type) {
                case 'standart':
            total += calcInputs.area * 500;
            break;
                case 'natyagnoy':
            total += calcInputs.area * 1000;
            break;
                case 'podvesnoy':
            total += calcInputs.area * 1200;
            break;
                case 'gipsokarton':
            total += calcInputs.area * 1300;
            break;
                case 'reechniy':
            total += calcInputs.area * 1500;
            break;
            default:
            break;
            }
 
            // каждый угол
                total += calcInputs.corners * 500;
 
        install = calcInputs.area * 170;
        total += install;
 
            total += ' руб.';
            jQuery(this).find('span.total').html(total);
      });
        }
 
    });
})(jQuery);
;