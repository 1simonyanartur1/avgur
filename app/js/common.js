(function ($) {
	$(document).ready(function () {

		$('.popup-link').magnificPopup({
			type: 'inline',
			focus: 'input',
			showCloseBtn: true,
			alignTop: true,
			fixedContentPos: true
		});

		if($(document).innerWidth() < 1200) {

			var headerH = $('.header').innerHeight();
			$('.sidebar').css('top',headerH + 15)

			$('.show-catalog').on('click', function() {
				$('.sidebar').toggleClass('show');
				if($('.sidebar').hasClass('show')) {
					$(this).html('Скрыть');
				} else {
					$(this).html('Каталог');
				}
			});
			$('.sidebar-inner2').on('click', function() {
				$('.sidebar').toggleClass('show');
				if($('.sidebar').hasClass('show')) {
					$('.show-catalog').html('Скрыть');
				} else {
					$('.show-catalog').html('Каталог');
				}
			});
		}

		if($(document).innerWidth() < 1200) {
			$(document).on('click', '.burger', function () {
				if (!$(this).hasClass('active')) {
					$('.header .menu').slideDown();
					$(this).addClass('active');
				} else {
					$('.header .menu').slideUp();
					$(this).removeClass('active');
				}
			});
			$(document).on('click', '.header .menu a', function () {
				$('.header .menu').slideUp();
				$('.burger').removeClass('active');
			});
		}


		$('.catalog-links > li > ul').hide();
		$(document).on('click', '.catalog-links .icon-down-open-mini', function () {
			$(this).toggleClass('active').parent().find('ul').slideToggle();
		});

		$('.catalog-links > li').each(function () {
			var submenu = $(this).find('ul');
			if ($(submenu).length) {} else {
				$(this).find('.icon-down-open-mini').hide();
			}
		});

		$('input[type="tel"]').inputmask({
			mask: "+99 (999) 999-99-99",
			greedy: false
		});


		function basketCounter() {
			var btnMinus = $('.counter__btn.minus');
			var btnPlus = $('.counter__btn.plus');
			var counterField = $('.counter__num');
			$(btnMinus).click(function () {
				var $input = $(this).parent().find(counterField);
				var count = parseInt($input.val()) - 1;
				count = count < 1 ? 1 : count;
				$input.val(count);
				$input.change();
				return false;
			});
			$(btnPlus).click(function () {
				var $input = $(this).parent().find(counterField);
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;
			});
		}
		basketCounter();

		$('select').niceSelect();


		var $minInput = $(".price-block__input[name='min-price']");
		var $maxInput = $(".price-block__input[name='max-price']");

		var minPrice = 0;
		var maxPrice = 500;

		$("#slider-range").slider({
			range: true,
			min: minPrice,
			max: maxPrice,
			values: [minPrice, maxPrice],
			slide: function (event, ui) {
				$minInput.val(ui.values[0]);
				$maxInput.val(ui.values[1]);
			}
		});
		$minInput.val($("#slider-range").slider("values", 0));
		$maxInput.val($("#slider-range").slider("values", 1));

		function changeMin() {
			$(document).on('keyup, change', $minInput, function () {
				$('#slider-range').slider("option", "values", [parseInt($($minInput).val()), parseInt($($maxInput).val())]);
			});
		}
		changeMin();

		function changeMax() {
			$(document).on('keyup, change', $maxInput, function () {
				$('#slider-range').slider("option", "values", [parseInt($($minInput).val()), parseInt($($maxInput).val())]);
			});
		}
		changeMin();


		$('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<button class="icon-down-open-mini left"></button>',
			nextArrow: '<button class="icon-down-open-mini right"></button>',
			arrows: true,
			fade: true,
			asNavFor: '.slider-nav'
		});
		$('.slider-nav').slick({
			asNavFor: '.slider-for',
			slidesToShow: 3,
			dots: false,
			slidesToScroll: 1,
			focusOnSelect: true,
			prevArrow: '<button class="icon-down-open-mini left"></button>',
			nextArrow: '<button class="icon-down-open-mini right"></button>'
		});

		$('.mainslider .slider').slick({
			arrows: true,
			dots: false,
			prevArrow: '<button class="icon-down-open-mini left"></button>',
			nextArrow: '<button class="icon-down-open-mini right"></button>',
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false
		});

		$('.popular-products .slider').slick({
			arrows: true,
			dots: false,
			prevArrow: '<button class="icon-down-open-mini left"></button>',
			nextArrow: '<button class="icon-down-open-mini right"></button>',
			slidesToShow: 5,
			slidesToScroll: 1,
			infinite: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				}
			]
		});

		var $status = $('.mainslider .slider-counter');
		var $slickElement = $('.mainslider .slider');

		var $total = $slickElement.slick("getSlick").slideCount;
		$('.slider-counter__all').html($total);
		var $current = $slickElement.slick("getSlick").currentSlide+1;
		$('.slider-counter__curr').html($current);
		
		$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$status.find('.slider-counter__curr').html(i);
		});

		$(".tabs").tabs();

		// Initialize and add the map
		function initMap() {
			// The location
			const centerMap = {
				lat: 48.015500,
				lng: 37.751331
			};
			// The map
			const map = new google.maps.Map(document.getElementById("map"), {
				zoom: 15,
				center: centerMap,
			});
			// The marker
			var marker = new google.maps.Marker({
				position: {
					lat: 48.015500,
					lng: 37.751331
				},
				map: map,
			});
			var marker = new google.maps.Marker({
				position: {
					lat: 48.017591,
					lng: 37.752336
				},
				map: map,
			});
		}

		if ($('#map').length) {
			initMap();
		}

	});
})(jQuery);