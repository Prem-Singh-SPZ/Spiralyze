
let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz-2004')) {
            body.classList.add('spz-2004');

            waitForElm('.spz-2004 .row-number-1 .widget-type-rich_text .hs_cos_wrapper.hs_cos_wrapper_widget').then(function () {
                if (document.querySelector('.spz-2004 .row-number-1 .widget-type-rich_text .hs_cos_wrapper.hs_cos_wrapper_widget .spz-social-count')) return;
                document.querySelector('.spz-2004 .row-number-1 .widget-type-rich_text .hs_cos_wrapper.hs_cos_wrapper_widget').insertAdjacentHTML('afterend', '<div class="spz-social-count desk-only"><div class="social-count-inner"><div class="social-dark"><img src="//res.cloudinary.com/spiralyze/image/upload/v1723752765/varicent/2004/icon.svg">In high demand!</div><div class="social-light">Downloaded 342 times in the last week.</div></div></div>');
            });

            waitForElm('.spz-2004 .widget-type-form form.hs-form.hs-custom-form .hs-form-field input').then(function () {

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
