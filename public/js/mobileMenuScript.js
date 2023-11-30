(function ($) {

	"use strict";

	//Mobile Nav Hide Show
	if ($('.mobile-menu').length) {

		$('.mobile-menu .menu-box').mCustomScrollbar();

		var mobileMenuContent = $('.main-header .menu-area .main-menu').html();
		var languageMenuContent = $('.main-header .nav-right').html();
		// $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		// $('.mobile-menu .menu-box .menu-outer').append('<br><br>' + languageMenuContent);

		// $('.sticky-header .main-menu').append(mobileMenuContent);
		// $('.sticky-header .nav-right').append('<nav id="nav-right" class="main-menu nav-right">' + languageMenuContent + '  </nav>');
		if (window.matchMedia("(max-width: 991px)").matches) {
			$('#nav-right').remove()
		} /*else {
			$("#header-box").append('<div id="nav-right" class="nav-right"></div>')
		}*/
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
			$(this).prev('.megamenu').slideToggle(900);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function () {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});

		//Close mobile sideBar when clicking contact button
		$('.toggle-contact').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});

		$('.toggle-services').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});

	}

})(window.jQuery);