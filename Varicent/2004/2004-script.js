
let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz-2004')) {
            body.classList.add('spz-2004');

            waitForElm('.spz-2004 .row-number-1 .widget-type-rich_text .hs_cos_wrapper.hs_cos_wrapper_widget').then(function () {
                if (document.querySelector('.spz-2004 .row-number-1 .widget-type-rich_text .hs_cos_wrapper.hs_cos_wrapper_widget .spz-social-count')) return;
                document.querySelector('.spz-2004 .row-number-1 .widget-type-rich_text .hs_cos_wrapper.hs_cos_wrapper_widget').insertAdjacentHTML('afterend', '<div class="spz-social-count"><div class="social-count-inner"><div class="social-dark"><img src="//res.cloudinary.com/spiralyze/image/upload/v1723752765/varicent/2004/icon.svg"><span class="d-md-block d-none">In high demand!</span><span class="d-md-none">High demand!</span></div><div class="social-light"><span class="d-md-block d-none">Downloaded 342 times in the last week.</span><span class="d-md-none">342 downloads last week.</span></div></div></div>');
                document.querySelector('body.spz-2004 #main-content .row-number-1 > .row-fluid > .widget-type-cell:last-child .row-number-4 > .row-fluid > .span12').insertAdjacentHTML('beforeend', '<div class="spz-tab-copy tablet-only"><div class="copy-inner"></div></div>');

                document.querySelectorAll('body.spz-2004 #main-content .row-number-1 > .row-fluid > .widget-type-cell:first-child .widget-type-rich_text .hs_cos_wrapper_type_rich_text > p').forEach(function (elm) {
                    document.querySelector('body.spz-2004 #main-content .row-number-1 > .row-fluid > .widget-type-cell:last-child .row-number-4 > .row-fluid .spz-tab-copy .copy-inner').insertAdjacentHTML('beforeend',elm.outerHTML);
                    elm.classList.add('desk-only');
                });

            });

            waitForElm('.spz-2004 .widget-type-form form.hs-form.hs-custom-form .hs-form-field input').then(function () {
                const formParent = 'body.spz-2004 #main-content .row-number-1 > .row-fluid > .widget-type-cell:last-child .row-number-4 div[data-hs-forms-root="true"]';

                if (document.querySelectorAll(formParent + ' .spz-form-title').length == 0) {
                    document.querySelector(formParent).insertAdjacentHTML('afterbegin', '<div class="spz-form-title">Download Report</div>');
                }

                // let txtChange = setInterval(function () {
                document.querySelector(formParent + ' .hs-form.hs-custom-form .hs-button').setAttribute('value', 'INSTANT ACCESS');
                // }, 100);
            });
        }
    }
});


// Generic Code
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
