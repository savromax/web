(function ($) {
  $(function () {
 
        calculate();
 
        jQuery('.calc__form input').keyup(function() {
            this.value = this.value.replace(/[^0-9\.,]/g, '');
            this.value = this.value.replace(/[,]/, '.');
        });
        jQuery('.calc__form input, .calc__form select').change(function() {
            calculate();
        });
        jQuery('.calc__form input').keyup(function() {
            calculate();
        });
        function calculate() {
      $('.calc__form').each(function(key, val){
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
            total += calcInputs.area * 1000;
            break;
                case 'natyagnoy':
            total += calcInputs.area * 2000;
            break;
                case 'podvesnoy':
            total += calcInputs.area * 4000;
            break;
                case 'gipsokarton':
            total += calcInputs.area * 8000;
            break;
                case 'reechniy':
            total += calcInputs.area * 16000;
            break;
            default:
            break;
            }
 
            // каждый угол
                total += calcInputs.corners * 500;
 
        install = calcInputs.area * 200;
        total += install;
 
            total += ' ₽';
            jQuery(this).find('span.calc__total').html(total);
      });
        }
 
    });
})(jQuery);
;