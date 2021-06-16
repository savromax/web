$(document).ready(function() {

/*-- Reviews Slider--*/
$('.reviews__wrapper').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	centerMode: true,
	variableWidth: true,
	arrows: true,
	dots: false,
	infinite: false,
	draggable: false,
	appendArrows: $('.review__nav'),
	appendDots: $('.review__nav'),
	responsive: [
	  {
	    breakpoint: 768,
	    settings: {     
	      dots: true,
	      variableWidth: false,
	      centerMode: false,
	      adaptiveHeight: true
	    }
	  }
	]
});

(function( $ ){
	var slider = $('.reviews__wrapper');
		total = slider.slick("getSlick").slideCount;
		currentSlide = $('.reviews__wrapper').slick('slickCurrentSlide');
		slide = currentSlide + 1;
	if ( total > 1 ) {
		$(slider).siblings().find('.review__count_current').text(slide);
		$(slider).siblings().find('.review__count_total').text('/' + total);
	}
	$('.reviews__wrapper').on('afterChange', function(event, slick, currentSlide, nextSlide){
		var currentSl = currentSlide + 1;
		$(slider).siblings().find('.review__count_current').text(currentSl);
	});
})( jQuery );



/*-- Tabs --*/
$('.tab__content').slick({
	lazyLoad: 'progressive',
	slidesToShow: 1,
	slidesToScroll: 1,
	centerMode: true,
	variableWidth: true,
	arrows: true,
	dots: false,
	infinite: false,
	draggable: false,
	
	responsive: [
	  {
	    breakpoint: 768,
	    settings: {     
	      dots: true,
	    }
	  }
	]
});

(function( $ ){
	var slider = $('.tab__content');
		total = slider.slick("getSlick").slideCount;
		currentSlide = $('.tab__content').slick('slickCurrentSlide');
		slide = currentSlide + 1;
	if ( total > 1 ) {
		$('.tab__content').siblings().find('.review__count_current').text(slide);
		$('.tab__content').siblings().find('.review__count_total').text('/' + total);
	}	
	$('.tab__content').on('afterChange', function(event, slick, currentSlide, nextSlide){
		var currentSl = currentSlide + 1;
		$('.tab__content.active').siblings().find(".review__count_current").text(currentSl);
	});
})( jQuery );

$('.tabs__menu').on('click', 'li:not(.active)', function() {
	$(this)
	  .addClass('active').siblings().removeClass('active')
	  .closest('.works__tabs').find('.tab__content').removeClass('active').siblings('.tab__nav-box').removeClass('active');
	$(this)  
	  .closest('.works__tabs').find('.tab__content').eq($(this).index()).addClass('active')
	  .siblings('.tab__nav-box').addClass('active');
	  //$('.slick-track').css('transform','translate3d(0px, 0px, 0px)');
});

$('.tab__content').on("lazyLoaded", function(e, slick, image, imageSource) {
  parentSlide = $(image).parent('.slick-slide');
  imageSource.src = image.attr("src"); //get source
  parentSlide.css("background-image", 'url("' + imageSource + '")'); //replace with background instead
  image.remove(); // remove source
});



/*-- Phone Mask --*/
$('.phone-mask').mask('+7(999)999-99-99').click(function () {
	$(this).get(0).setSelectionRange(3, 3);
});



/*-- Форма в шапке --*/
$('#header_form').submit(function() {
    $.ajax({
        type: "POST",
        url: "rest.php",
        data: $(this).serialize()
    }).done(function() {
        $('#header_form .success-msg').show().delay(3000).fadeOut(500);
        $('#header_form')[0].reset();
        return true;
    });
    return false;
});

/*-- Форма рассчета стоимости --*/
$('#calc_form').submit(function() {
    $.ajax({
        type: "POST",
        url: "rest.php",
        data: $(this).serialize()
    }).done(function() {
        $('#calc_form .success-msg').show().delay(3000).fadeOut(500);
        $('.calc__phone').val('');
        return true;
    });
    return false;
});

/*-- Форма с таймером --*/
$('#timer_form').submit(function() {
    $.ajax({
        type: "POST",
        url: "rest.php",
        data: $(this).serialize()
    }).done(function() {
        $('.timer__form .success-msg').show().delay(3000).fadeOut(500);
        $('#timer_form')[0].reset();
        return true;
    });
    return false;
});



/* Яндекс карта */
YaMapsShown = false;

$(document).ready(function () {
  var target = $('#map');
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;
 $(window).scroll(function() {
    var winScrollTop = $(this).scrollTop();
    if (!YaMapsShown){
     if (winScrollTop > scrollToElem) {      
      showYaMaps();
      YaMapsShown = true;
     }
    }
 });
});

function showYaMaps() {
 var script   = document.createElement("script");
 script.type  = "text/javascript";
 script.src   = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=c420b7f9-1b5e-4318-b7e8-fb80dee38383&onload=getYaMap";
 document.body.appendChild(script);
}


});