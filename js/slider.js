/* Слайдер */

$(function () {

	$('.slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		speed: 800,
		infinite: true,
		variableWidth: true,
		/* autoplay: true,
		autoplaySpeed: 1000 */
		/* pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true, */
	});

});


