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


/*-- Блок с формой "" --*/
$("#header__form").submit(function() {
    $.ajax({
        type: "POST",
        url: "rest.php",
        data: $(this).serialize()
    })/*.done(function() {
        $(".success").show().fadeOut(2000);
        yaCounter46502676.reachGoal('successRemontGetPrice');
        ga('send', 'pageview', '/successRemontGetPrice');
        return true;
    })*/;
    return false;
});

/*$("#form_raschet, #form_gift, #form_metrazh, #form_rassrochka, #form_zvonok1, #form_zvonok2").submit(function() {
	$.ajax({
		type: "POST",
		url: "rest.php",
		data: $(this).serialize()
	});
	return false;
});*/

});