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
    load3002();
});
load3002();
function load3002() {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-3002')) {
            clearInterval(bodyInterval);
            var current_url = window.location.href.split('?')[0];
            var extraOffset = 0;
            /*---------for other forms------*/
            waitForElm('#main-content #hsForm_a731afcb-bf2f-4b68-b0a7-ccfb196a3780').then(function (elm) {
                document.querySelector('#main-content #hsForm_a731afcb-bf2f-4b68-b0a7-ccfb196a3780').closest('.et_section_regular').classList.add('spz-form-section');
                if (document.querySelector('.spz-form-section #fsm_hubspot_form')) {
                    document.querySelector('.spz-form-section #fsm_hubspot_form').classList.add('spz-form-container');
                } else if (document.querySelector('.spz-form-section .et_pb_code_inner')) {
                    if (current_url == 'https://navigate360.com/solutions/') {
                        document.querySelector('.spz-form-section .et_pb_column').classList.add('spz-form-container');
                    } else {
                        document.querySelector('.spz-form-section .et_pb_code_inner').classList.add('spz-form-container');
                        if (current_url == 'https://navigate360.com/safety-solutions/social-emotional-learning-for-schools/') {
                            if (window.scrollY == 0) {
                                if ((window.innerWidth >= 768) && (window.innerWidth <= 1024)) {
                                    if (document.querySelector('.spz-form-container').getBoundingClientRect().top > 15000) {
                                        extraOffset = 0;
                                    } else {
                                        extraOffset = 1060;
                                    }
                                } else if (window.innerWidth <= 767) {
                                    if (document.querySelector('.spz-form-container').getBoundingClientRect().top > 17000) {
                                        extraOffset = 0;
                                    } else {
                                        if (window.innerWidth <= 450) { extraOffset = 850; }
                                        if (window.innerWidth <= 390) { extraOffset = 780; }
                                        if (window.innerWidth <= 375) { extraOffset = 740; }
                                    }
                                }
                            }
                        }
                    }
                } else { }
                submitTestDetails(extraOffset);
                hiddenFieldsValue();
            });
            /*---------for gravity form------*/
            waitForElm('#main-content .gform_wrapper').then(function (elm) {
                document.querySelector('#main-content .gform_wrapper').classList.add('spz-form-container');
                submitTestDetails(extraOffset);
            });
            /*---------for demo form------*/
            waitForElm('#main-content #hsForm_0d42ac7d-7996-41d0-aae0-7ab9f9b98f97').then(function (elm) {
                document.querySelector('#main-content #hsForm_0d42ac7d-7996-41d0-aae0-7ab9f9b98f97').closest('.et_pb_column').classList.add('spz-form-container');
                submitTestDetails(extraOffset);
            });
            /*------------add to iframe-----*/
            var run_test = 0;
            waitForElm('#main-content iframe.hs-form-iframe').then(function (elm) {
                if (current_url == 'https://navigate360.com/schedule-a-consultation/') {
                    waitForElm('#main-content .et_pb_css_mix_blend_mode_passthrough.et_pb_column_7').then(function (elm2) {
                        document.querySelectorAll('#main-content iframe.hs-form-iframe')[1].closest('.et_pb_css_mix_blend_mode_passthrough.et_pb_column_7').classList.add('spz-form-container');
                        run_test = 1;
                    });
                } else {
                    if (current_url != 'https://navigate360.com/company/navigate360-partnerships/') {
                        document.querySelector('#main-content iframe.hs-form-iframe').closest('.et_pb_column').classList.add('spz-form-container');
                        run_test = 1;
                    }
                }
                if (run_test == 1) { submitTestDetails(extraOffset); }
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
function submitTestDetails(extraOffset) {
    document.body.classList.add('spz-3002');
    console.log("extraOffset:" + extraOffset);
    document.querySelectorAll('#page-container #main-header .header_button').forEach(element => {
        element.setAttribute('href', 'javascript:void(0)');
        element.addEventListener('click', function () {
            let form = document.querySelector('.spz-form-container');
            let headerOffset;
            window.innerWidth < 1024 ? headerOffset = 0 : headerOffset = 140;
            let elementPosition = form.getBoundingClientRect().top;
            let offsetPosition = elementPosition + window.scrollY - headerOffset + extraOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            extraOffset = 0;
        });
    });
}

function hiddenFieldsValue() {
    if (document.querySelector('form.hs-form-private .hs_spz_cro1 .input .hs-input')) {
        document.querySelector('form.hs-form-private .hs_spz_cro1 .input .hs-input').setAttribute('value', '#3002_Solution_Navbar_CTA_Scroll');
        document.querySelector('form.hs-form-private .hs_spz_cro2 .input .hs-input').setAttribute('value', 'Variant');
    }
}