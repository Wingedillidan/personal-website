$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.main-hero--video').css({
		'transform' : 'translate(0, ' + wScroll / 20 + '%)'
	});
});