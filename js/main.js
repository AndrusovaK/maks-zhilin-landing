$(function() {
	$('#images-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
			{
				breakpoint: 479,
				settings: {
					dots: false
				}
			}
		]
	});
});