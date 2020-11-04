$( document ).ready(function() {
	
	$('.smoothScroll').click(function(event) {
            event.preventDefault();
            var href=$(this).attr('href');
            var target=$(href);
            var top=target.offset().top;
            $('html,body').animate({
              scrollTop: top
        }, 1000);
			var w=$(window).width();
			if (w<768) $('nav').slideUp();
	});
	
	$('.faq-item-title').click(function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.faq-item-content').slideUp();			
			$(this).parent().find('.faq-item-content').slideUp();
		} else {
			$('.faq-item-title').removeClass('active');
			$('.faq-item-content').slideUp();
			$(this).addClass('active');
			$(this).parent().find('.faq-item-content').slideDown();
		}
	});
	
	$('.mob-nav').click(function() {
		$('nav').slideToggle();
	});
	
});


/*YaMapsShown = false;

$(document).ready(function () {
  var target = $('.block3-block');
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;
 $(window).scroll(function() {
    var winScrollTop = $(this).scrollTop();
    if (!YaMapsShown){
     if (winScrollTop > scrollToElem) {      
      $('.block3-image-image-fix').addClass('slideInDown');
     }
    }
 });
});*/



$(window).scroll(function(){
	var el = $('.block3-item-title');
    if ($(this).scrollTop() > el.offset().top - 200 ) {
        el.addClass('bounceIn');
    }
});


var element_point_about = $('.about').offset().top; // положение элемента относительно начала страницы
var element_animated_about = false; // чтобы анимация происходила только один раз, используем эту переменную-флаг
var animate_delay_about = 100; // задержка анимации (через 100 пикселей)
 
$(window).scroll(function() {
  // проверяем, прокрутили ли страницу до элемента
  if (!element_animated_about && $(window).scrollTop() + window.innerHeight > element_point_about + animate_delay_about) {
    element_animated_about = true; // отмечаем, что анимация выполнена
 
    $(".scroll_about1").paroller({ factor: 0.1, factorXs: 0.2, type: 'foreground', direction: 'vertical' });
	$(".scroll_about2").paroller({ factor: 0.2, factorXs: 0.2, type: 'foreground', direction: 'vertical' });
	$(".scroll_about3").paroller({ factor: 0.3, factorXs: 0.2, type: 'foreground', direction: 'vertical' });
     
  }
});


var element_point_sub = $('.sub').offset().top; // положение элемента относительно начала страницы
var element_animated_sub = false; // чтобы анимация происходила только один раз, используем эту переменную-флаг
var animate_delay_sub = 100; // задержка анимации (через 100 пикселей)

$(window).scroll(function() {
  // проверяем, прокрутили ли страницу до элемента
  if (!element_animated_sub && $(window).scrollTop() + window.innerHeight > element_point_sub + animate_delay_sub) {
    element_animated_sub = true; // отмечаем, что анимация выполнена
 
    $(".scroll_sub1").paroller({ factor: 0.1, factorXs: 0.2, type: 'foreground', direction: 'vertical' });
	$(".scroll_sub2").paroller({ factor: 0.2, factorXs: 0.2, type: 'foreground', direction: 'vertical' });
	$(".scroll_sub3").paroller({ factor: 0.3, factorXs: 0.2, type: 'foreground', direction: 'vertical' });
     
  }
});