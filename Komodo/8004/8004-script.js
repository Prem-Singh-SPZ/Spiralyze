function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(function () {
    if (!document.querySelector('.spz-8004')) {
        document.querySelector('body').classList.add('spz-8004')

        waitForElm('#main-content .dnd_area-row-0-hidden > .row-fluid > .span12 .row-number-4 .widget-span').then(() => {
            if (document.querySelectorAll('.spz-hero-copy-wrapper').length == 0) {
                document.querySelector('#main-content .dnd_area-row-0-hidden > .row-fluid > .span12 .row-number-4 .widget-span').insertAdjacentHTML('afterbegin', `<div class="spz-hero-copy-wrapper"><div class="eyebrow-title">On Demand: WEBINAR FOR LIFE SCIENCES</div><h1 class="h-title">One Year of MapLab: Unveiling MapAI and MapExplorer</h1><div class="bullet-container desk-only"><ul class="bullet-wrapper"><li class="bullet-item"><span>MapAI™.</span> Use natural language to generate actionable insights with MapAI™</li><li class="bullet-item"><spanMapExplorer™.</span>  Easily explore patient-centric data using MapExplorer™</li><li class="bullet-item"><span>MapView™.</span>  Accelerate data analytics with MapView™ and customizable dashboards</li></ul></div><div class="spz-btn-wrapper desk-only"><a class="spz-btn" href="#tmpwidget_1721318819360" rel="modal:open">REQUEST A CUSTOM DEMO</a></div></div>`);

                document.querySelector('#main-content .dnd_area-row-0-hidden > .row-fluid > .span12 .row-number-4 .widget-span').insertAdjacentHTML('beforeend', `<div class="spz-hero-copy-wrapper tab-mob"><div class="bullet-container"><ul class="bullet-wrapper"><li class="bullet-item"><span>MapAI™.</span> Use natural language to generate actionable insights with MapAI™</li><li class="bullet-item"><spanMapExplorer™.</span>  Easily explore patient-centric data using MapExplorer™</li><li class="bullet-item"><span>MapView™.</span>  Accelerate data analytics with MapView™ and customizable dashboards</li></ul></div><div class="spz-btn-wrapper"><a class="spz-btn" href="#tmpwidget_1721318819360" rel="modal:open">REQUEST A CUSTOM DEMO</a></div></div>`);

            }
        });
    }
})

function waitForElm(selector) {
    return new Promise(function (resolve) {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(function (mutations) {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document, { attributes: true, childList: true, subtree: true, characterData: true });
    });
}