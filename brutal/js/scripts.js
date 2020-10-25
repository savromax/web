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
		$('.faq-item-title').removeClass('active');
		$('.faq-item-content').slideUp();
		$(this).addClass('active');
		$(this).parent().find('.faq-item-content').slideDown();
	});
	
	$('.mob-nav').click(function() {
		$('nav').slideToggle();
	});
	
});

wow = new WOW(
  {
	animateClass: 'animate__animated',
	offset:       0,
	mobile: 0
  }
);
wow.init();

// ANIMATE
var icon1 = document.querySelector('.about-icon1');
var icon2 = document.querySelector('.about-icon2');
var icon4 = document.querySelector('.about-icon4');
var icon5 = document.querySelector('.about-icon5');
var icon6 = document.querySelector('.about-icon6');
var icon7 = document.querySelector('.about-icon7');
var iicon1 = document.querySelector('.info-icon1');
var iicon2 = document.querySelector('.info-icon2');
var sicon1 = document.querySelector('.sub-icon1');
var sicon2 = document.querySelector('.sub-icon2');
var sicon3 = document.querySelector('.sub-icon3');
var sicon4 = document.querySelector('.sub-icon4');
var sicon5 = document.querySelector('.sub-icon5');
var sicon6 = document.querySelector('.sub-icon6');
window.addEventListener('mousemove', function(e) {
	var x = e.clientX / window.innerWidth;
	var y = e.clientY / window.innerHeight;  
	icon1.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
	icon2.style.transform = 'translate(+' + x * 50 + 'px, -' + y * 50 + 'px)';
	icon4.style.transform = 'translate(-' + x * 50 + 'px, +' + y * 50 + 'px)';
	icon5.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
	icon6.style.transform = 'translate(-' + x * 0 + 'px, -' + y * 50 + 'px)';
	iicon1.style.transform = 'translate(-' + x * 0 + 'px, -' + y * 50 + 'px)';
	iicon2.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
	sicon1.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
	sicon2.style.transform = 'translate(+' + x * 15 + 'px, -' + y * 15 + 'px)';
	sicon3.style.transform = 'translate(+' + x * 15 + 'px, +' + y * 15 + 'px)';
	sicon4.style.transform = 'translate(-' + x * 15 + 'px, +' + y * 15 + 'px)';
	sicon5.style.transform = 'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)';
	sicon6.style.transform = 'translate(-' + x * 15 + 'px, +' + y * 15 + 'px)';
});

