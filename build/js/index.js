$(function() {
	var navLock = $('nav').offset().top;
	var navHeight = $('nav').height();

	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();

		$('.main-hero--video').css({
			'transform' : 'translate(0, -' + wScroll / 20 + '%)'
		});

		if (wScroll > navLock) {
			$('nav').css({
				'position' : 'fixed',
				'top' : 0,
				'left' : 0,
				'height': '60px'
			});
		} else if (wScroll < navLock - 10) {
			$('nav').css({
				'position' : 'static',
				'height': '75px'
			});
		}
	});
});