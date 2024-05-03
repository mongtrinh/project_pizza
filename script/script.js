$('#gnb').hover(
	function () {
		$(this).find('.submenu').stop().slideDown();
		$('.bgGnb').stop().animate({ height: '150px' });
	},
	function () {
		$(this).find('.submenu').stop().slideUp();
		$('.bgGnb').stop().animate({ height: '0px' });
	}
);

$('.btnCall').click(function () {
	$('.menuMo').addClass('on');
});
$('.close').click(function () {
	$('.menuMo').removeClass('on');
});

$('#gnb > li').hover(
	function () {
		$(this).children('.submenu').stop().slideDown();
	},
	function () {
		$(this).children('.submenu').stop().slideUp();
	}
);

let offset = $('header').offset();
console.log(offset.top);
$(window).scroll(function () {
	if ($(document).scrollTop() > offset.top) {
		$('header').addClass('on');
	} else {
		$('header').removeClass('on');
	}
});

$('#slide .container').prepend($('#slide .container .slide7'));
var width = 1200;
var slide;
slide = setInterval(function () {
	$('#slide .container > li:nth-child(1)').animate(
		{
			'margin-left': width * -1 + 'px',
		},
		1000,
		function () {
			$('#slide .container').append($('#slide .container > li:nth-child(1)'));
			$('#slide .container > li:nth-child(7)').css('margin-left', '0px');
		}
	);
}, 8400);

var swiper = new Swiper('.pizza', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 0,
		modifier: 1,
		slideShadows: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	loop: true,
	spaceBetween: 0,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	speed: 1000,
	navigator: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
var swiper = new Swiper('.pasta', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 0,
		modifier: 1,
		slideShadows: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	loop: true,
	spaceBetween: 0,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	speed: 1000,
	navigator: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
