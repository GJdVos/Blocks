(function() {
    "use strict";

    class PageController {
        constructor() {
            this.DOM = {
                sessionLottie: ".js-session-lottie",
                defaultTransition: ".js-default-transition",
                defaultOverlay: ".js-default-transition-overlay"
            };
            
            this.sessionLottie = document.querySelector(this.DOM.sessionLottie);
            this.defaultTransition = document.querySelector(this.DOM.defaultTransition);
            this.defaultOverlay = document.querySelector(this.DOM.defaultOverlay);
            
            this.init();
        }

        init() {
            // Check of de intro al is afgespeeld in deze sessie
            const introDone = sessionStorage.getItem("introAnimationFinished");
            
            if (this.sessionLottie && introDone !== "true") {
                this.runSessionAnimation();
            } else {
                if (this.sessionLottie) this.sessionLottie.remove();
                this.initBarba();
            }
        }

        runSessionAnimation() {
            sessionStorage.setItem("introAnimationFinished", "false");
            const lottiePath = this.sessionLottie.dataset.lottie;

            // Laad de Lottie animatie
            const animation = lottie.loadAnimation({
                container: this.sessionLottie,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: lottiePath
            });

            animation.addEventListener('complete', () => {
                gsap.to(this.sessionLottie, {
                    autoAlpha: 0,
                    duration: 0.5,
                    onComplete: () => {
                        this.sessionLottie.remove();
                        this.initBarba();
                    }
                });
            });
        }

        initBarba() {
            if (typeof barba !== 'undefined') {
                barba.init({
                    transitions: [{
                        name: 'default-transition',
                        leave(data) {
                            return gsap.to(data.current.container, { opacity: 0 });
                        },
                        enter(data) {
                            return gsap.from(data.next.container, { opacity: 0 });
                        }
                    }]
                });
            }
        }
    }

    // Start de controller als de DOM geladen is
    window.addEventListener('DOMContentLoaded', () => {
        new PageController();
    });
})();