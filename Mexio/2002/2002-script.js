//check if current url has _vis_test_id query parameter in the url then get the value of the query parameter
var urlParams = new URLSearchParams(window.location.search);
var vis_test_id = urlParams.get('_vis_test_id');
if (vis_test_id) {
    var vis_opt_random = urlParams.get('_vis_opt_random');
    var vis_hash = urlParams.get('_vis_hash');
    var vis_opt_preview_combination = urlParams.get('_vis_opt_preview_combination');
    var urlQuery = `_vis_test_id=${vis_test_id}&_vis_opt_random=${vis_opt_random}&_vis_hash=${vis_hash}&_vis_opt_preview_combination=${vis_opt_preview_combination}` || '';
}

// iFrame Code
function formPage() {
    var iframebodyInterval = setInterval(function () {
        var iframebodyEle = document.querySelector('body');
        if (iframebodyEle) {
            if (!iframebodyEle.classList.contains('spz-2002-iframe')) {
                clearInterval(iframebodyInterval);

                iframebodyEle.classList.add('spz-2002-iframe');

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
                        document.querySelector('body #pardot-form').action = formAction + '&spz=2002' + '&' + urlQuery;
                    } else {
                        document.querySelector('body #pardot-form').action = formAction + '?spz=2002' + '&' + urlQuery;
                    }
                });

                waitForElm('.spz-2002-iframe form#pardot-form .submit input').then(function () {
                    document.querySelector(".spz-2002-iframe form#pardot-form").insertAdjacentHTML("beforebegin", `<div class="form-heading" style="display: none;">Get a Demo</div>`);
                    hiddenValue();

                    document.querySelector('.spz-2002-iframe form#pardot-form .country').classList.add('spz-hidden');
                    document.querySelector('.spz-2002-iframe form#pardot-form .Employee_Count').classList.add('spz-hidden');
                    document.querySelector('.spz-2002-iframe form#pardot-form .pd-checkbox').classList.add('spz-hidden');

                    var all_inputs = document.querySelectorAll('.spz-2002-iframe form#pardot-form input, .spz-2002-iframe form#pardot-form select');
                    all_inputs.forEach(function (element) {
                        element.removeAttribute('placeholder');
                        if (element.tagName == 'SELECT' && element.selectedIndex !== 0 && element.closest('.form-field') !== null) {
                            element.closest('.spz-2002-iframe form#pardot-form .form-field').classList.add('filled');
                        }
                        if (element.tagName !== 'SELECT' && element.value != '' && element.closest('.form-field') !== null) {
                            element.closest('.spz-2002-iframe form#pardot-form .form-field').classList.add('filled');
                        }
                    });
                    var selector = '.spz-2002-iframe form#pardot-form .form-field input, .spz-2002-iframe form#pardot-form .form-field select';
                    document.addEventListener('focus', function (event) {
                        if (event.target.matches && event.target.matches(selector)) {
                            event.target.closest('.spz-2002-iframe form#pardot-form .form-field').classList.add('active', 'typing');
                        }
                    }, true);

                    checkFilledVisibility();

                    var eventList = ["focusin", "blur", "focusout", "keyup", "change"];
                    for (let s_event of eventList) {
                        document.addEventListener(s_event, function (event) {
                            checkFilledVisibility();

                            if (event.target.matches && event.target.matches(selector)) {
                                if (event.target.value == null || event.target.value == '') {
                                    event.target.closest('.spz-2002-iframe form#pardot-form .form-field').classList.remove('filled');
                                } else {
                                    if (event.target.tagName == 'SELECT' && event.target.selectedIndex !== 0) {
                                        event.target.closest('.spz-2002-iframe form#pardot-form .form-field').classList.add('filled');
                                    }
                                    if (event.target.tagName !== 'SELECT') {
                                        event.target.closest('.spz-2002-iframe form#pardot-form .form-field').classList.add('filled');
                                    }
                                }
                            }
                        });
                    }
                    document.addEventListener('focusout', function (event) {
                        document.querySelectorAll('.spz-2002-iframe form#pardot-form .form-field.typing').forEach(function (elem) {
                            elem.classList.remove('active', 'typing');
                            checkFilledVisibility();
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
                        if (document.querySelector('.spz-2002-iframe form#pardot-form .submit input') == null) {
                            clearInterval(chekFormSubmit);
                            document.querySelectorAll('.spz-2002-iframe form#pardot-form > p').forEach((PEle) => {
                                if (PEle.textContent == 'We look forward to speaking with you soon!') {
                                    if (document.querySelector('.spz-2002-iframe .form-heading')) {
                                        document.querySelector('.spz-2002-iframe .form-heading').style.display = "none";
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

                function checkFilledVisibility() {
                    if (document.querySelector('.spz-2002-iframe form#pardot-form .form-field.first_name').classList.contains('filled') && document.querySelector('.spz-2002-iframe form#pardot-form .form-field.last_name').classList.contains('filled') && document.querySelector('.spz-2002-iframe form#pardot-form .form-field.email').classList.contains('filled') && document.querySelector('.spz-2002-iframe form#pardot-form .form-field.company').classList.contains('filled')) {

                        document.querySelectorAll('.form-field.spz-hidden').forEach(function (elem) {
                            elem.classList.remove('spz-hidden');
                        })

                        document.querySelector('.spz-2002-iframe form#pardot-form ').classList.add('spz-full-form');
                    }
                }
            }
        }
    });
}

// Main Page Code
function demoPage() {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-2002')) {
            clearInterval(bodyInterval);
            document.cookie = "spzdevicewidth=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.maxio.com";
            bodyEle.classList.add('spz-2002');

            let mainPageBodyWidth = document.body.clientWidth;
            setIframeBodyClass(mainPageBodyWidth);

            window.addEventListener('resize', () => {
                mainPageBodyWidth = document.body.clientWidth;
                setIframeBodyClass(mainPageBodyWidth);
            });

            cookieValue('#2002', '#2002_variant1');

            if (!document.querySelector('body.spz-2002 #page .site-content .blocks-page .hero-form .container .spz-form-wrap')) {
                document.querySelector('body.spz-2002 #page .site-content .blocks-page .hero-form .container').insertAdjacentHTML('beforeend', `<div class="spz-form-wrap"><div class="form-heading">Get a Demo</div></div>`);
            }

            let formLoaded = setInterval(() => {
                if (document.querySelector(`.hero-form iframe[id*="form"]`)) {
                    clearInterval(formLoaded);
                    document.querySelector(".spz-form-wrap").appendChild(document.querySelector(`.hero-form iframe[id*="form"]`));
                }
            })

            //check if form is submitted using iframe height and setinterval
            var spz_2002_Interval = setInterval(function () {
                var spz_2002_iframe = document.querySelector('.spz-form-wrap iframe');
                if (spz_2002_iframe) {
                    let formHeight = spz_2002_iframe.getAttribute('style');
                    //check once the formHeight is less than 100px
                    //add null check for formHeight
                    if (formHeight) {
                        if (formHeight.includes('height: 40.3958px') || formHeight.includes('height: 62.7917px') || formHeight.includes('height: 22.3958px') || formHeight.includes('height: 44.7917px')) {
                            clearInterval(spz_2002_Interval);
                            document.querySelector('.spz-2002 .spz-form-wrap .form-heading').style.display = "none";
                        }
                    }
                }
            }, 200);

            waitForElm('.spz-form-wrap iframe').then(function () {
                setTimeout(() => {
                    var iframeSrc = document.querySelector('.spz-form-wrap iframe').src;
                    //check if url has query params
                    if (iframeSrc.includes('?')) {
                        //replace question mark string with "?spz=2002&" in the url
                        document.querySelector('.spz-form-wrap iframe').src = iframeSrc.replace('?', '?spz=2002&');
                    } else {
                        document.querySelector('.spz-form-wrap iframe').src = iframeSrc + '?spz=2002' + '&' + urlQuery;
                    }
                }, 500);
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
if (location.href.indexOf('spz=2002') > -1) {
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
