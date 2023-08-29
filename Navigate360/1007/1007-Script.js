history.pushState = (function (f) {
    return function pushState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("pushstate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
    };
})(history.pushState);

history.replaceState = (function (f) {
    return function replaceState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("replacestate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
    };
})(history.replaceState);

window.addEventListener("popstate", function () {
    window.dispatchEvent(new Event("locationchange"));
});

window.addEventListener("locationchange", function () {
    url = location.href;
    load1007();
});

load1007();

function load1007() {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-1007')) {
            clearInterval(bodyInterval);
            bodyEle.classList.add('spz-1007');

            waitForElm('#et-main-area #hero-section .hero-container').then(function (elm) {
                document.querySelector('#et-main-area #hero-section .hero-container').insertAdjacentHTML('beforeend', `<div class="spz-hero-img"></div>`);

                document.querySelector('#et-main-area #hero-section .hero-container .hero-content p.pre-header.small').textContent = `SCHOOL SAFETY SOLUTIONS`;

                document.querySelector('#et-main-area #hero-section .hero-container .hero-content h1.hero-title').innerHTML = `Navigate360 is the Leader <br>in School Safety Initiatives`;

                document.querySelector('#et-main-area #hero-section .hero-container .hero-content p.hero-body').textContent = `Safety training, services, and solutions for K12 schools, healthcare, workplaces and public safety agencies. `;

                document.querySelector('#et-main-area #hero-section .hero-container .hero-content a.hero-cta.ga4_button').textContent = `get a demo`;
            });

        }
    });
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) { return resolve(document.querySelector(selector)); }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector)); observer.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });
}


// function hiddenFieldsValue() {
//     if (document.querySelector('form.hs-form-private .hs_spz_cro1 .input .hs-input')) {
//         document.querySelector('form.hs-form-private .hs_spz_cro1 .input .hs-input').setAttribute('value', '#1007_Solution_Navbar_CTA_Scroll');
//         document.querySelector('form.hs-form-private .hs_spz_cro2 .input .hs-input').setAttribute('value', 'Variant');
//     }
// }