/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.mdl-layout__header' ),
		resultheader = document.querySelector( '.result-header' ),
		carouselresult = document.querySelector( '.carousel-date-result' ),
		searchbar = document.querySelector( '.search-bar' ),
		didScroll = false,
		changeHeaderOn = 100;

	function init() {
		scrollPage();
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 0 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'header-animated' );
			$('.result-header').addClass('header-animated');
			$('.carousel-date-result').addClass('header-animated');
			$('.search-bar').addClass('header-animated');
		}
		else {
			classie.remove( header, 'header-animated' );
			classie.remove( resultheader, 'header-animated' );
			classie.remove( carouselresult, 'header-animated' );
			classie.remove( searchbar, 'header-animated' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
