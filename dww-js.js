/* dWW js V1.6 */

/* Detect if Javascript is enabled */
document.documentElement.classList.add("has-js")

/* Detect if device is tounch */
window.ONE = window.ONE || {};
ONE.isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
document.documentElement.className += ONE.isTouch ? ' touch' : ' no-touch';

/* Detect if Safari */
/* Bron: https://www.geeksforgeeks.org/how-to-detect-the-user-browser-safari-chrome-ie-firefox-and-opera-using-javascript/ */
let userAgentString = navigator.userAgent;
let chromeAgent = userAgentString.indexOf("Chrome") > -1;
let safariAgent = userAgentString.indexOf("Safari") > -1;
if ((chromeAgent) && (safariAgent)) safariAgent = false;
if (safariAgent) { document.documentElement.classList.add("is-safari") };

/* Detect class change */
function onClassChange(element, callback) {
	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
				callback(mutation.target);
			}
		});
	});
	observer.observe(element, { attributes: true });
	return observer.disconnect;
}

$(document).ready(function() {

	/* Site search to GA */
	$('.search input[type=search]').each(function(index) {

		let searchTimeout = false;

		$(this).on('input', function(){

			let _this = $(this);

			if (searchTimeout) {
				clearTimeout(searchTimeout);
			}

			searchTimeout = setTimeout(function() {
				let searchTerms = '/script/search.php?q=' + _this.val();

				/* Bron: https://stackoverflow.com/questions/15744042/events-not-being-tracked-in-new-google-analytics-analytics-js-setup */
				if ("ga" in window) {
					tracker = ga.getAll()[0];
					if (tracker) {
						tracker.send('pageview', searchTerms);
					}
				}
			}, 500);
		});
	});

	/* Form submit to GA */
	$('form:not([data-form_type="search"])').each(function(index) {
		$(this).on('submit', function(event){

			event.preventDefault();

			let succesUrl = window.location + '?dwwform=succes';
			let succesUrlPathname = window.location.pathname + '?dwwform=succes';

			if ("ga" in window) {
				tracker = ga.getAll()[0];
				if (tracker) {
					tracker.send('pageview', succesUrlPathname);
				}
        	}

			dataLayer.push({
				'event': 'virtualPageview',
				'pageUrl': succesUrl
			});
		});
	});
});

/* ---- dWW Functies ---- */
/* @type {object} Contains references to frequently used DOM elements */
var dwwElements = {};


/* @type {object} Contains classnames and id's to set or read */
var dwwClasses = {
    atFixedSidebar: 'at-sidebar--fixed',
    atSidebarIsFixed: 'at-sidebar--isFixed',
    atSidebarIsSticky: 'at-sidebar--isSticky',
    atSidebarIsHigher: 'at-sidebar--isHigher',

    ipPage: 'page',
    ipWrapper: 'dww-6515-1-0',
    ipSidebar: 'dww-infopagina-sidebar',
    ipSidebarReviews: 'dww-6517-1-0',
    ipSidebarIsFixed: 'infopagina-sidebar--isFixed',
    ipSidebarIsSticky: 'infopagina-sidebar--isSticky'
};

/* @type {object} Contains stored properties that are used across multiple functions */
var dwwStore = {
    headerHeight: 90,
    isFixed: false,
    isSticky: false,

    ipSidebarFirstElementIndex: 3,
    ipSidebarFirstElementHeight: 0,
    ipSidebarSecondElementHeight: 0,
    ipSidebarCardPadding: 0,
    ipIsFixed: false,
    ipIsSticky: false
};

/*
 * Initialize common dWW optimizations
*/
function dwwFunctions () {

    // Fixed 3/1
	dwwElements.atFixedSidebars = document.querySelectorAll('.' + dwwClasses.atFixedSidebar);

    // Infopagina 2.023
    dwwElements.ipSidebars = document.querySelectorAll('.' + dwwClasses.ipSidebar);
    dwwElements.ipSections = document.querySelector('.' + dwwClasses.ipPage).children;
    for (var i = 0; i < dwwElements.ipSections.length; i++) {
        if (dwwElements.ipSections[i].classList.contains(dwwClasses.ipWrapper)) {
            dwwStore.ipSidebarFirstElementIndex = i + 2;
        }
    }

    var headerBlocks = document.querySelectorAll('header');
    var lastHeaderBlock = headerBlocks.length - 1;
    dwwStore.headerHeight = headerBlocks[lastHeaderBlock] ? Math.ceil(headerBlocks[lastHeaderBlock].getBoundingClientRect().height) : 0;

	// Call functions
    dwwHandleOnResizeWindow(); // make sure they are called at least once

    // Event handlers
	if (window.addEventListener) {
		// Initialize Event handler for window size changes.
		window.addEventListener('resize', dwwHandleOnResizeWindow, false);
		window.addEventListener('scroll', dwwHandleOnScroll, false);
	}

    // Update IP sidebar bij review slide
    var ipSidebarReviews = document.querySelectorAll('.' + dwwClasses.ipSidebarReviews + 'article');
    for (var i = 0; i < ipSidebarReviews.length; i++) {
	    onClassChange(ipSidebarReviews[i], (node) => {
		    node.classList.contains('active')
			    ? positionFixedIpSidebar()
			    : positionFixedIpSidebar();
	    });
    }

    isATSidebarHigher();
    positionFixedATSidebar();
    positionFixedIpSidebar();
	dwwHandleOnScroll();
}

/* ---- Event handling ---- */

/*
 * Handle on resize window to move mobile navigation
*/
function dwwHandleOnResizeWindow () {
	// First of all, create a timer to prevent this function firing hundreds of times during the resize event
	if (typeof (dwwStore.resizeTo) === 'number') {
		window.clearTimeout(dwwStore.resizeTo);
		delete dwwStore.resizeTo;
	}

	dwwStore.resizeTo = setTimeout(function(){
        isATSidebarHigher();
        positionSidebarWhenIsFixedOrSticky();
        positionIpSidebarWhenIsFixedOrSticky();
	}, 100);
}

/*
 * Handle on scroll events.
 */
function dwwHandleOnScroll () {
    positionFixedATSidebar();
    positionFixedIpSidebar();
}

/* ---- Fixed sidebar ---- */
function positionFixedATSidebar() {
    if (!isMediumViewport()) {
        return;
    }

    var sidebars = dwwElements.atFixedSidebars;

    for (var i = 0; i < sidebars.length; i++) {
        var sidebar = sidebars[i];
        var sidebarTop = sidebar.getBoundingClientRect().top;
        var sidebarBottom = sidebar.getBoundingClientRect().height + dwwStore.headerHeight;
        var wrapper = sidebar.parentNode;

        var wrapperPaddingTop = Number(getComputedStyle(wrapper).getPropertyValue('padding-top').replace('px',''));
        var wrapperPaddingBottom = Number(getComputedStyle(wrapper).getPropertyValue('padding-bottom').replace('px',''));
        var wrapperTop = Number(wrapper.getBoundingClientRect().top + wrapperPaddingTop);
        var wrapperBottom = Number(wrapper.getBoundingClientRect().bottom - wrapperPaddingBottom);

        var isFixed = sidebar.classList.contains(dwwClasses.atSidebarIsFixed);
        var isSticky = sidebar.classList.contains(dwwClasses.atSidebarIsSticky);
        var isHigher = sidebar.classList.contains(dwwClasses.atSidebarIsHigher);

        var setSidebarSticky = !isSticky && sidebarBottom >= wrapperBottom && !isHigher;
        var setSidebarFixedOnTheWayBack = !isFixed && isSticky && sidebarTop >= dwwStore.headerHeight && !isHigher;
        var resetSidebar = (isFixed && wrapperTop >= dwwStore.headerHeight) || isHigher;
        var setSidebarFixed = !isFixed && !isSticky && sidebarTop <= dwwStore.headerHeight && !isHigher;

        if (setSidebarSticky) {
            sidebar.classList.remove(dwwClasses.atSidebarIsFixed);
            sidebar.classList.add(dwwClasses.atSidebarIsSticky);
            addAbsoluteSidebarStyles(sidebar);
            continue;
        }

        if (setSidebarFixedOnTheWayBack) {
            sidebar.classList.remove(dwwClasses.atSidebarIsSticky);
            sidebar.classList.add(dwwClasses.atSidebarIsFixed);
            addFixedSidebarStyles(sidebar);
            continue;
        }

        if (resetSidebar) {
            sidebar.classList.remove(dwwClasses.atSidebarIsFixed);
            sidebar.classList.remove(dwwClasses.atSidebarIsSticky);
            sidebar.removeAttribute('style');
            continue;
        }

        if (setSidebarFixed) {
            sidebar.classList.add(dwwClasses.atSidebarIsFixed);
            addFixedSidebarStyles(sidebar);
        }
    }
}

function isATSidebarHigher() {
    if (!isMediumViewport()) {
        return;
    }

    var sidebars = dwwElements.atFixedSidebars;

    for (var i = 0; i < sidebars.length; i++) {
        var sidebar = sidebars[i];
        var sidebarHeight = sidebar.offsetHeight;
        var wrapper = sidebar.parentNode;
		var wrapperPaddingTop = Number(getComputedStyle(wrapper).getPropertyValue('padding-top').replace('px',''));
        var wrapperPaddingBottom = Number(getComputedStyle(wrapper).getPropertyValue('padding-bottom').replace('px',''));
        var wrapperHeight = Number(Math.floor(wrapper.getBoundingClientRect().height) - wrapperPaddingTop - wrapperPaddingBottom);
        var windowHeight = window.innerHeight;

        var isHigher = sidebar.classList.contains(dwwClasses.atSidebarIsHigher);

        if (isHigher && sidebarHeight < wrapperHeight && sidebarHeight + dwwStore.headerHeight < windowHeight) {
            sidebar.classList.remove(dwwClasses.atSidebarIsHigher);
            continue;
        }

        if (sidebarHeight >= wrapperHeight && !isHigher) {
            sidebar.classList.add(dwwClasses.atSidebarIsHigher);
        }

        if (sidebarHeight + dwwStore.headerHeight >= windowHeight && !isHigher) {
            sidebar.classList.add(dwwClasses.atSidebarIsHigher);
        }
    }
}

function positionSidebarWhenIsFixedOrSticky() {
    var sidebars = dwwElements.atFixedSidebars;

    for (var i = 0; i < sidebars.length; i++) {
        var sidebar = sidebars[i];

        if (!isMediumViewport()) {
            sidebar.classList.remove(dwwClasses.atSidebarIsFixed);
            sidebar.removeAttribute('style');
            return;
        }

        var isFixed = sidebar.classList.contains(dwwClasses.atSidebarIsFixed);
        var isSticky = sidebar.classList.contains(dwwClasses.atSidebarIsSticky);

        if (isSticky) {
            addAbsoluteSidebarStyles(sidebar);
        }

        if (isFixed) {
            addFixedSidebarStyles(sidebar);
        }
    }
}

function addFixedSidebarStyles(sidebar) {
    var container = sidebar.parentNode;
    var containerPaddingLeft = Number(getComputedStyle(container).getPropertyValue('padding-left').replace('px',''));
    var containerPaddingRight = Number(getComputedStyle(container).getPropertyValue('padding-right').replace('px',''));
    var containerWidth = container.getBoundingClientRect().width - containerPaddingLeft - containerPaddingRight;
    var right = document.body.clientWidth - container.getBoundingClientRect().right + containerPaddingRight;

    var styles = [
        'width: ' + containerWidth + 'px;' +
        'right: ' + right + 'px;' +
        'top: ' + dwwStore.headerHeight + 'px;'
    ];
    sidebar.setAttribute('style', styles);
}

function addAbsoluteSidebarStyles(sidebar) {
    var container = sidebar.parentNode;
    var containerPaddingLeft = Number(getComputedStyle(container).getPropertyValue('padding-left').replace('px',''));
    var containerPaddingRight = Number(getComputedStyle(container).getPropertyValue('padding-right').replace('px',''));
    var containerPaddingBottom = Number(getComputedStyle(container).getPropertyValue('padding-bottom').replace('px',''));
    var containerWidth = container.getBoundingClientRect().width - containerPaddingLeft - containerPaddingRight;

    var styles = [
        'width: ' + containerWidth + 'px;' +
		'bottom: ' + containerPaddingBottom + 'px;'
    ];
    sidebar.setAttribute('style', styles);
}

/* ---- Infopagina fixed sidebar ---- */
function positionFixedIpSidebar() {
    if (!isMediumViewport()) {
        return;
    }

    var ipSidebars = dwwElements.ipSidebars;

    if (ipSidebars.length == 0) {
        return;
    }

    var lastIpSidebar = ipSidebars.length - 1;
    var ipSidebarTop = ipSidebars[0].getBoundingClientRect().top;
    var ipSidebarBottom = ipSidebars[lastIpSidebar].getBoundingClientRect().bottom;

    dwwStore.ipSidebarCardPadding = Number(getComputedStyle(ipSidebars[lastIpSidebar].parentNode).getPropertyValue('padding-top').replace('px',''));

    var ipWrapper = document.querySelector('.dww-infopagina-wrapper');
    var ipWrapperTop = ipWrapper.getBoundingClientRect().top;
    var ipWrapperBottom = ipWrapper.getBoundingClientRect().bottom;

    var ipIsFixed = ipSidebars[0].classList.contains(dwwClasses.ipSidebarIsFixed);
    var ipIsSticky = ipSidebars[0].classList.contains(dwwClasses.ipSidebarIsSticky);

    var setSidebarSticky = !ipIsSticky && ipSidebarBottom >= ipWrapperBottom;
    var setSidebarFixedOnTheWayBack = !ipIsFixed && ipIsSticky && ipSidebarTop >= dwwStore.headerHeight;
    var resetSidebar = ipIsFixed && ipWrapperTop >= dwwStore.headerHeight;
    var setSidebarFixed = !ipIsFixed && !ipIsSticky && ipSidebarTop <= dwwStore.headerHeight;

    for (var i = 0; i < ipSidebars.length; i++) {
        var ipSidebar = ipSidebars[i];

        if (i == 0) {
            dwwStore.ipSidebarFirstElementHeight = ipSidebar.getBoundingClientRect().height;
        } else if (i == 1) {
            dwwStore.ipSidebarSecondElementHeight = ipSidebar.getBoundingClientRect().height;
        }

        if (setSidebarSticky) {
            ipSidebar.classList.remove(dwwClasses.ipSidebarIsFixed);
            ipSidebar.classList.add(dwwClasses.ipSidebarIsSticky);
            ipSidebar.parentNode.parentNode.parentNode.parentNode.classList.add(dwwClasses.ipSidebarIsSticky);
            ipSidebar.removeAttribute('style');
            addAbsoluteIpSidebarStyles(ipSidebar, i, ipSidebars.length);
            continue;
        }

        if (setSidebarFixedOnTheWayBack) {
            ipSidebar.classList.remove(dwwClasses.ipSidebarIsSticky);
            ipSidebar.classList.add(dwwClasses.ipSidebarIsFixed);
            ipSidebar.parentNode.parentNode.parentNode.parentNode.classList.remove(dwwClasses.ipSidebarIsSticky);
            ipSidebar.parentNode.parentNode.parentNode.parentNode.removeAttribute('style');
            addFixedIpSidebarStyles(ipSidebar, i);
            continue;
        }

        if (resetSidebar) {
            ipSidebar.classList.remove(dwwClasses.ipSidebarIsFixed);
            ipSidebar.classList.remove(dwwClasses.ipSidebarIsSticky);
            ipSidebar.removeAttribute('style');
            ipSidebar.parentNode.parentNode.parentNode.parentNode.removeAttribute('style');
            ipSidebar.parentNode.parentNode.parentNode.parentNode.classList.remove(dwwClasses.ipSidebarIsSticky);
            continue;
        }

        if (setSidebarFixed) {
            ipSidebar.classList.add(dwwClasses.ipSidebarIsFixed);
            ipSidebar.parentNode.parentNode.parentNode.parentNode.removeAttribute('style');
            addFixedIpSidebarStyles(ipSidebar, i);
        }
    }
}

function positionIpSidebarWhenIsFixedOrSticky() {

    var ipSidebars = dwwElements.ipSidebars;

    for (var i = 0; i < ipSidebars.length; i++) {
        var sidebar = ipSidebars[i];

        if (!isMediumViewport()) {
            sidebar.classList.remove(dwwClasses.ipSidebarIsFixed);
            sidebar.removeAttribute('style');
            return;
        }

        var ipIsFixed = sidebar.classList.contains(dwwClasses.ipSidebarIsFixed);
        var ipIsSticky = sidebar.classList.contains(dwwClasses.ipSidebarIsSticky);

        if (ipIsSticky) {
            addAbsoluteIpSidebarStyles(sidebar, i, ipSidebars.length);
        }

        if (ipIsFixed) {
            addFixedIpSidebarStyles(sidebar, i);
        }
    }
}

function addFixedIpSidebarStyles(ipSidebar, i) {
    var container = ipSidebar.parentNode;
    var containerPaddingLeft = Number(getComputedStyle(container).getPropertyValue('padding-left').replace('px',''));
    var containerPaddingRight = Number(getComputedStyle(container).getPropertyValue('padding-right').replace('px',''));
    var containerWidth = container.getBoundingClientRect().width - containerPaddingLeft - containerPaddingRight;
    var right = document.body.clientWidth - container.getBoundingClientRect().right + containerPaddingRight;
    var top = dwwStore.headerHeight;

    if (i == 1) {
        top += dwwStore.ipSidebarFirstElementHeight;
        top += dwwStore.ipSidebarCardPadding;
    } else if (i == 2) {
        top += dwwStore.ipSidebarFirstElementHeight;
        top += dwwStore.ipSidebarSecondElementHeight;
        top += dwwStore.ipSidebarCardPadding * 2;
    }

    var styles = [
        'width: ' + containerWidth + 'px;' +
        'right: ' + right + 'px;' +
        'top: ' + top + 'px;'
    ];
    ipSidebar.setAttribute('style', styles);
}

function addAbsoluteIpSidebarStyles(sidebar, i, length) {
	if (length == 1) {
		var sidebarGridRow = dwwStore.ipSidebarFirstElementIndex + i + 2;
	} else if (length == 2) {
		var sidebarGridRow = dwwStore.ipSidebarFirstElementIndex + i + 1;
	} else {
    	var sidebarGridRow = dwwStore.ipSidebarFirstElementIndex + i;
	}

    var sectionStyles = [
        'grid-row: ' + sidebarGridRow
    ];
    sidebar.parentNode.parentNode.parentNode.parentNode.setAttribute('style', sectionStyles)
}

/** ---- Generic helper functions ---- */

/*
 * Check on if large viewport
 */
function isMediumViewport () {
	return window.matchMedia && window.matchMedia('(min-width: 768px)').matches;
}

/** ---- Fix for older versions ---- */
function fixedSidebar () {
    dwwFunctions();
}

if($.isReady) {
	dwwFunctions();
}