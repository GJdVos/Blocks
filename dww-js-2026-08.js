/* dWW js V2026.08 */

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

document.addEventListener('DOMContentLoaded', function() {	
    // Form submit to GA
    document.querySelectorAll('form:not([data-form_type="search"])').forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const succesUrl = window.location + '?dwwform=succes';
            const succesUrlPathname = window.location.pathname + '?dwwform=succes';

            // Google Analytics tracking
            if ("ga" in window) {
                const tracker = ga.getAll()[0];
                if (tracker) {
                    tracker.send('pageview', succesUrlPathname);
                }
            }

            // DataLayer push
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'virtualPageview',
                'pageUrl': succesUrl
            });
        });
    });
});