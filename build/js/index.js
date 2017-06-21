$(function() {
	var navLock = $('nav').offset().top;
	var navHeight = $('nav').height();
	var navToggle = false;

	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();

		$('.main-hero--video').css({
			'transform' : 'translate(0, -' + wScroll / 20 + '%)'
		});

		/*$('.about-me div').css({
			'transform' : 'translate(0, -' + wScroll / 20 + '%)'
		});*/

		if (wScroll > navLock) {
			if (navToggle == false) {
				navToggle = true;
				$('nav').css({
					'position' : 'fixed',
					'top' : 0,
					'left' : 0,
					'height': '60px',
					'transition' : 'all 0.5s'
				});
				$('nav').next().css({
					'margin-top' : '60px'
				});
			}
		} else if (wScroll < navLock) {
			if (navToggle == true) {
				navToggle = false;
				$('nav').css({
					'position' : 'static',
					'transition': 'none',
					'height': '75px'
				});
				$('nav').next().css({
					'margin-top' : '0',
				});
			}
		}
	});
});