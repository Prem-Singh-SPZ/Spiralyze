//check if current url has _vis_test_id query parameter in the url then get the value of the query parameter
var urlParams = new URLSearchParams(window.location.search);
var vis_test_id = urlParams.get('_vis_test_id');
if (vis_test_id) {
    var vis_opt_random = urlParams.get('_vis_opt_random');
    var vis_hash = urlParams.get('_vis_hash');
    var vis_opt_preview_combination = urlParams.get('_vis_opt_preview_combination');
    var urlQuery = `_vis_test_id=${vis_test_id}&_vis_opt_random=${vis_opt_random}&_vis_hash=${vis_hash}&_vis_opt_preview_combination=${vis_opt_preview_combination}`;
}

// iFrame Code
function formPage() {
    var iframebodyInterval = setInterval(function () {
        var iframebodyEle = document.querySelector('body');
        if (iframebodyEle) {
            if (!iframebodyEle.classList.contains('spz-2003-iframe')) {
                clearInterval(iframebodyInterval);

                iframebodyEle.classList.add('spz-2003-iframe');

                function check_spzdevicewidth_fun() {
                    var check_spzdevicewidth = setInterval(() => {
                        const storedData = getCookie('spzdevicewidth');
                        if (storedData != '' || storedData != null) {
                            clearInterval(check_spzdevicewidth);
                            iframebodyEle.classList.remove('device-mobile');
                            iframebodyEle.classList.remove('device-desktop');
                            iframebodyEle.classList.add(storedData);
                        }
                    }, 100);
                }
                check_spzdevicewidth_fun();
                window.addEventListener('resize', () => {
                    check_spzdevicewidth_fun();
                });
                checkFormSubmit();

                waitForElm('body #pardot-form').then(function () {
                    var formAction = document.querySelector('body #pardot-form').action;
                    //check if url has query params
                    if (formAction.includes('?')) {
                        document.querySelector('body #pardot-form').action = formAction + '&spz=2003' + '&' + urlQuery;
                    } else {
                        document.querySelector('body #pardot-form').action = formAction + '?spz=2003' + '&' + urlQuery;
                    }
                });

                waitForElm('.spz-2003-iframe form#pardot-form .submit input').then(function () {
                    document.querySelector(".spz-2003-iframe form#pardot-form").insertAdjacentHTML("beforebegin", `<div class="form-heading" style="display: none;">Get a Demo</div>`);
                    hiddenValue();
                    var all_inputs = document.querySelectorAll('.spz-2003-iframe form#pardot-form input, .spz-2003-iframe form#pardot-form select');
                    all_inputs.forEach(function (element) {
                        element.removeAttribute('placeholder');
                        if (element.tagName == 'SELECT' && element.selectedIndex !== 0 && element.closest('.form-field') !== null) {
                            element.closest('.spz-2003-iframe form#pardot-form .form-field').classList.add('filled');
                        }
                        if (element.tagName !== 'SELECT' && element.value != '' && element.closest('.form-field') !== null) {
                            element.closest('.spz-2003-iframe form#pardot-form .form-field').classList.add('filled');
                        }
                    });
                    var selector = '.spz-2003-iframe form#pardot-form .form-field input, .spz-2003-iframe form#pardot-form .form-field select';
                    document.addEventListener('focus', function (event) {
                        if (event.target.matches && event.target.matches(selector)) {
                            event.target.closest('.spz-2003-iframe form#pardot-form .form-field').classList.add('active', 'typing');
                        }
                    }, true);
                    var eventList = ["focusin", "blur", "focusout", "keyup", "change"];
                    for (let s_event of eventList) {
                        document.addEventListener(s_event, function (event) {
                            if (event.target.matches && event.target.matches(selector)) {
                                if (event.target.value == null || event.target.value == '') {
                                    event.target.closest('.spz-2003-iframe form#pardot-form .form-field').classList.remove('filled');
                                } else {
                                    if (event.target.tagName == 'SELECT' && event.target.selectedIndex !== 0) {
                                        event.target.closest('.spz-2003-iframe form#pardot-form .form-field').classList.add('filled');
                                    }
                                    if (event.target.tagName !== 'SELECT') {
                                        event.target.closest('.spz-2003-iframe form#pardot-form .form-field').classList.add('filled');
                                    }
                                }
                            }
                        });
                    }
                    document.addEventListener('focusout', function (event) {
                        document.querySelectorAll('.spz-2003-iframe form#pardot-form .form-field.typing').forEach(function (elem) {
                            elem.classList.remove('active', 'typing');
                        })
                    }, true);

                    var formID = "#pardot-form";
                    var retryFormSearch = true;
                    var form = document.querySelector(formID);
                    addFormListener();
                    var count = 1;
                    function addFormListener() {
                        count++;
                        if (form) {
                            form.addEventListener("submit", submitHandler);
                            return;
                        } else if ((typeof retryFormSearch !== "undefined" ? retryFormSearch : true) && count < 10) {
                            setTimeout(() => {
                                form = document.querySelector(formID);
                                addFormListener();
                            }, 1000);
                        }
                    }
                    function submitHandler(event) {
                        checkFormSubmit();
                    }

                });
                function checkFormSubmit() {
                    var countNew = 1;
                    var chekFormSubmit = setInterval(function () {
                        if (document.querySelector('.spz-2003-iframe form#pardot-form .submit input') == null) {
                            clearInterval(chekFormSubmit);
                            document.querySelectorAll('.spz-2003-iframe form#pardot-form > p').forEach((PEle) => {
                                if (PEle.textContent == 'We look forward to speaking with you soon!') {
                                    if (document.querySelector('.spz-2003-iframe .form-heading')) {
                                        document.querySelector('.spz-2003-iframe .form-heading').style.display = "none";
                                    }
                                }
                            });
                        }
                        if (countNew < 10) {
                            clearInterval(chekFormSubmit);
                        }
                        countNew++;
                    }, 100);
                }
            }
        }
    });
}

// Main Page Code
function demoPage() {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-2003')) {
            clearInterval(bodyInterval);
            document.cookie = "spzdevicewidth=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.maxio.com";
            bodyEle.classList.add('spz-2003');

            let mainPageBodyWidth = document.body.clientWidth;
            setIframeBodyClass(mainPageBodyWidth);

            window.addEventListener('resize', () => {
                mainPageBodyWidth = document.body.clientWidth;
                setIframeBodyClass(mainPageBodyWidth);
            });

            cookieValue('#2003', '#2003_variant1');

            if (!document.querySelector('body.spz-2003 #page .site-content .blocks-page .hero-form .container .spz-form-wrap')) {
                document.querySelector('body.spz-2003 #page .site-content .blocks-page .hero-form .container').insertAdjacentHTML('beforeend', `<div class="spz-form-wrap"><div class="form-heading">Get a Demo</div></div><div class="spz-2003-right-section">
                <div class="rs-inner">
                    <div class="rs-copy-container">
                        <div class="rs-quote"><img src="//res.cloudinary.com/spiralyze/image/upload/v1731524871/maxio/2003/quotemark_3.svg" alt="quote"></div>
                        <div class="rs-copy">
                            <p>Since implementing Maxio, our ARR has <b>grown 237%.</b></p>
                            <p>We&#8217;ve been able to automate billings and subscription renewals. Plus it provides us with SaaS-based metrics at a push of a button.</p>
                        </div>
                    </div>
                    <div class="rs-profile">
                        <div class="rs-p-img">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/2003/ciccone_img_4.webp" alt="Antonietta Ciccone">
                        </div>
                        <div class="rs-p-details">
                            <p class="p-name">Antonietta Ciccone</p>
                            <p class="p-desg">Director of Corporate Revenue Accounting</p>
                        </div>
                    </div>
                    <div class="rs-footer-icon">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1731524874/maxio/2003/extensiv_logo_1444.svg" alt="Extensive">
                    </div>
                </div>
            </div>`);
            }

            let formLoaded = setInterval(() => {
                if (document.querySelector(`.hero-form iframe[id*="form"]`)) {
                    clearInterval(formLoaded);
                    document.querySelector(".spz-form-wrap").appendChild(document.querySelector(`.hero-form iframe[id*="form"]`));
                }
            })

            //check if form is submitted using iframe height and setinterval
            var spz_2003_Interval = setInterval(function () {
                var spz_2003_iframe = document.querySelector('.spz-form-wrap iframe');
                if (spz_2003_iframe) {
                    let formHeight = spz_2003_iframe.getAttribute('style');
                    //check once the formHeight is less than 100px
                    //add null check for formHeight
                    if (formHeight) {
                        if (formHeight.includes('height: 40.3958px') || formHeight.includes('height: 62.7917px') || formHeight.includes('height: 22.3958px') || formHeight.includes('height: 44.7917px')) {
                            clearInterval(spz_2003_Interval);
                            document.querySelector('.spz-2003 .spz-form-wrap .form-heading').style.display = "none";
                        }
                    }
                }
            }, 200);

            waitForElm('.spz-form-wrap iframe').then(function () {
                setTimeout(() => {
                    var iframeSrc = document.querySelector('.spz-form-wrap iframe').src;
                    //check if url has query params
                    if (iframeSrc.includes('?')) {
                        //replace question mark string with "?spz=2003&" in the url
                        document.querySelector('.spz-form-wrap iframe').src = iframeSrc.replace('?', '?spz=2003&');
                    } else {
                        document.querySelector('.spz-form-wrap iframe').src = iframeSrc + '?spz=2003' + '&' + urlQuery;
                    }

                    var iframeLazrSrc = document.querySelector('.spz-form-wrap iframe').getAttribute('data-lazy-src');
                    //check if url has query params
                    if (iframeLazrSrc.includes('?')) {
                        //replace question mark string with "?spz=2003&" in the url
                        document.querySelector('.spz-form-wrap iframe').setAttribute('data-lazy-src', iframeLazrSrc.replace('?', '?spz=2003&'));
                    } else {
                        document.querySelector('.spz-form-wrap iframe').setAttribute('data-lazy-src', iframeLazrSrc + '?spz=2003');
                    }
                }, 2000);
            });

            waitForElm('.theme-white style').then(function () {
                document.querySelector('.theme-white style').remove();
            });
        }
    });
}

function setIframeBodyClass(screenwidth) {
    let iframeLoaded = setInterval(() => {
        if (document.querySelector('.spz-form-wrap iframe')) {
            clearInterval(iframeLoaded);
            if (screenwidth > 767) {
                setCookie('spzdevicewidth', 'device-desktop', 7);
            } else {
                setCookie('spzdevicewidth', 'device-mobile', 7);
            }
        }
    })
}

if (location.href.indexOf('/demo') > -1) {
    demoPage();
}
if (location.href.indexOf('spz=2003') > -1) {
    formPage();
}

function hiddenValue() {
    var spz_cro_Interval = setInterval(function () {
        var cro_primary = document.querySelector('form#pardot-form .form-field.cro_primary input');
        if (cro_primary) {
            clearInterval(spz_cro_Interval);
            var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');
            cro_primary.value = ExistingHiddenFieldValue;
        }
    });
}

function cookieValue(currentHiddenFieldName, currentHiddenFieldValue) {
    var ExistingHiddenFieldName = getCookie('HiddenFieldName');
    var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');

    if (!ExistingHiddenFieldName) {
        setCookie('HiddenFieldName', currentHiddenFieldName, 1);
        setCookie('HiddenFieldValue', currentHiddenFieldValue, 1);
    } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
        setCookie('HiddenFieldName', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
        setCookie('HiddenFieldValue', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
    }
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=maxio.com;";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Delete cookie
function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=maxio.com;';
}

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
