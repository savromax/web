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
                        case 'potolok_area':
                            val = 10;
                            break;
                        case 'kolvo_osveshenie':
                            val = 1;
                            break;                        
                        default:
                            break;
                    }
                    $(this).val(val);
                }
                calcInputs[name] = val;
            });
 
            total = 0;
 
            switch (calcInputs.potolok_type) {
                case 'Стандартный':
            total += calcInputs.potolok_area * 500;
            break;
                case 'Натяжной':
            total += calcInputs.potolok_area * 1000;
            break;
                case 'Подвесной':
            total += calcInputs.potolok_area * 1500;
            break;
                case 'Гипсокартонный':
            total += calcInputs.potolok_area * 2000;
            break;
                case 'Реечный':
            total += calcInputs.potolok_area * 2500;
            break;
            default:
            break;
            }
 
            // каждый угол
                total += calcInputs.kolvo_osveshenie * 400;
 
        install = calcInputs.potolok_area * 0;
        total += install;
             
            jQuery(this).find('.calc__total').val(total);
      });
        }
 
    });
})(jQuery);
;