let pathstocheck = [
    {
        path: '/',
        page: 'home'
    },
    {
        path: '/demo',
        page: 'demo'
    }
];

var url = location.href;
urlCheck(url);

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
    urlCheck(url);
});

function urlCheck(url) {
    var allblogsurlstring = '';
    const pathstocheckurls = pathstocheck.map(function (pth) {
        return pth.path;
    });
    if (pathstocheckurls.indexOf(window.location.pathname) >= 0) {
        allblogsurlstring = window.location.href;
    }

    if (isSameUrl(url, allblogsurlstring, true)) {
        // Create Test
        add2006();
    } else {
        // Remove Test
        remove2006();
    }
}

function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#") ?
        currentUrl.slice(0, currentUrl.indexOf("#")) :
        currentUrl;
    specifiedUrl = specifiedUrl.includes("#") ?
        specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
        specifiedUrl;
    if (!includeQueryParams)
        currentUrl = currentUrl.includes("?") ?
            currentUrl.slice(0, currentUrl.indexOf("?")) :
            currentUrl;
    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
        return true;
    return false;
}

function remove2006() {
    if (document.querySelectorAll('.spz-sp-2006').length > 0) {
        document.querySelector('body').classList.remove('spz-sp-2006');
    }
    if (document.querySelectorAll('.spz-hero').length > 0) {
        document.querySelector('.spz-hero').remove();
    }
    if (document.querySelectorAll('.spz-company-logo').length > 0) {
        document.querySelector('.spz-company-logo').remove();
    }
}

function add2006() {
    var checkbody = setInterval(function () {
        if (document.querySelectorAll('body').length > 0) {
            clearInterval(checkbody);
            // Access infor like below
            let currentInfo = pathstocheck.find(function (ptc) {
                return ptc.path === window.location.pathname;
            });
            hiddenValue('SPZ_2006', 'SPZ_2006_variant');
            if (currentInfo.page == 'demo') {
                initdemo2006();
            }
            if (currentInfo.page == 'home') {
                init2006();
            }
        }
    });
}

function initdemo2006() {
    let checkform = setInterval(function () {
        if (document.querySelectorAll('form#mktoForm_1018 #Email').length > 0) {
            if (localStorage.getItem('spz_email') != null) {
                document.querySelector('form#mktoForm_1018 #Email').value = localStorage.getItem('spz_email');
                // localStorage.removeItem('spz_email');
            }
        }
    });

    // change the name of the hidden field & the value to what the PM puts in the specs
    window.onload = function () {
        const waitForHiddenInput = setInterval(function () {
            if (document.querySelector('input[name="intellimize1"]')) {
                clearInterval(waitForHiddenInput);
                var hiddenInputValue = document.querySelector('input[name="intellimize1"]').value;
                hiddenInputValue = hiddenInputValue ? hiddenInputValue + ',SPZ_2006_variant' : 'SPZ_2006_variant';
                console.log(hiddenInputValue);
                document.querySelector('input[name="intellimize1"]').setAttribute('value', hiddenInputValue);
            }
        });
    };
}

function init2006() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-sp-2006')) {
        bodyEle.classList.add('spz-sp-2006');
    }

    // change the name of the hidden field & the value to what the PM puts in the specs
    window.onload = function () {
        const waitForHiddenInput = setInterval(function () {
            if (document.querySelector('input[name="intellimize1"]')) {
                clearInterval(waitForHiddenInput);
                var hiddenInputValue = document.querySelector('input[name="intellimize1"]').value;
                hiddenInputValue = hiddenInputValue ? hiddenInputValue + ',SPZ_2006_variant' : 'SPZ_2006_variant';
                document.querySelector('input[name="intellimize1"]').setAttribute('value', hiddenInputValue);
            }
        });
    };

    let hero_html = `
        <section class="spz-hero">
            <div class="spz-hero-wrap">
                <div class="spz-hero-header">
                    <h2 class="spz-hero-title">The core of enterprise security is identity</h2>
                    <p class="spz-hero-sub-title">Put unified identity security at the core of your modern enterprise</p>
                    <div class="spz-hero-emailcap">
                        <div class="form-field">
                            <label class="form-field-label">Email</label>
                            <input type="email" name="user_email" class="spz-emailcap">
                            <span class="form-field-error"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/sailpoint/2006/frame.svg">Please enter a valid Email.</span>
                        </div>
                        <button type="button" class="spz-hero-emailcap-submit">Get a demo</button>
                    </div>
                    <span class="form-field-error"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/sailpoint/2006/frame.svg">Please enter a valid Email.</span>
                </div>
                <div class="spz-hero-graphic">
                    <picture>
                        <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2006/image_tablet_and_desktops.webp">
                        <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2006/tablet_image.png">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2006/mobile_image.webp" alt="Identity Security Platform">
                    </picture>
                </div>
            </div>
        </section>

        <section class="spz-company-logo">
            <div class="spz-company-logo-wrap">
                <h2>Trusted by 48% of the Fortune 500</h2>
                <div class="spz-company-logo-slider">
                    <div class="spz-company-logo-slider-track">
                        <div class="track1 track-list">
                            <div class="spz-company-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1733305267/sailpoint/2006/logo01.svg" draggable="false" alt="gm"></div>
                            <div class="spz-company-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1733305267/sailpoint/2006/logo02.svg" draggable="false" alt="Hershey"></div>
                            <div class="spz-company-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1733305267/sailpoint/2006/logo03.svg" draggable="false" alt="Paccar"></div>
                            <div class="spz-company-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1733305267/sailpoint/2006/logo04.svg" draggable="false" alt="Philips"></div>
                            <div class="spz-company-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1733305267/sailpoint/2006/logo05.svg" draggable="false" alt="RWE"></div>
                            <div class="spz-company-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1733305267/sailpoint/2006/logo06.svg" draggable="false" alt="T Mobile"></div>
                            <div class="spz-company-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1733305267/sailpoint/2006/logo07.svg" draggable="false" alt="The Home Depot"></div>
                            <div class="spz-company-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1733305267/sailpoint/2006/logo08.svg" draggable="false" alt="Toyota"></div>
                        </div>

                        <div class="track2 track-list spz-loop-logos">
                            <div class="spz-company-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1733305267/sailpoint/2006/logo01.svg" draggable="false" alt="gm"></div>
                            <div class="spz-company-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1733305267/sailpoint/2006/logo02.svg" draggable="false" alt="Hershey"></div>
                            <div class="spz-company-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1733305267/sailpoint/2006/logo03.svg" draggable="false" alt="Paccar"></div>
                            <div class="spz-company-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1733305267/sailpoint/2006/logo04.svg" draggable="false" alt="Philips"></div>
                            <div class="spz-company-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1733305267/sailpoint/2006/logo05.svg" draggable="false" alt="RWE"></div>
                            <div class="spz-company-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1733305267/sailpoint/2006/logo06.svg" draggable="false" alt="T Mobile"></div>
                            <div class="spz-company-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1733305267/sailpoint/2006/logo07.svg" draggable="false" alt="The Home Depot"></div>
                            <div class="spz-company-logo-item"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1733305267/sailpoint/2006/logo08.svg" draggable="false" alt="Toyota"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    let check_hero = setInterval(function () {
        if (document.querySelectorAll('section.hero').length > 0) {
            clearInterval(check_hero);
            if (document.querySelectorAll('.spz-hero').length == 0) {
                document.querySelector('section.hero').insertAdjacentHTML('beforebegin', hero_html);

                if (document.querySelectorAll('input[name="user_email"]').length > 0) {
                    let user_email = document.querySelector('input[name="user_email"]');

                    // blur event
                    user_email.addEventListener('blur', function () {
                        user_email.closest('.spz-hero-emailcap').classList.remove('p-focused');
                        user_email.parentNode.classList.remove('focused');
                        if (user_email.value.trim() == '') {
                            user_email.closest('.spz-hero-emailcap').classList.add('p-error');
                            user_email.parentNode.classList.add('error');
                            user_email.closest('.spz-hero-emailcap').classList.remove('p-filled');
                            user_email.parentNode.classList.remove('filled');
                        } else {
                            user_email.closest('.spz-hero-emailcap').classList.add('p-filled');
                            user_email.parentNode.classList.add('filled');
                            if (validateEmail(user_email.value.trim())) {
                                user_email.closest('.spz-hero-emailcap').classList.remove('p-error');
                                user_email.parentNode.classList.remove('error');
                            } else {
                                user_email.closest('.spz-hero-emailcap').classList.add('p-error');
                                user_email.parentNode.classList.add('error');
                            }
                        }
                    });

                    // focus event
                    user_email.addEventListener('focus', function () {
                        user_email.closest('.spz-hero-emailcap').classList.add('p-focused');
                        user_email.parentNode.classList.add('focused');
                        user_email.closest('.spz-hero-emailcap').classList.remove('p-error');
                        user_email.parentNode.classList.remove('error');
                    });

                    // keyup event
                    user_email.addEventListener('keyup', function (event) {
                        if (event.key === 'Enter') {
                            // if (user_email.value.trim() == '') {
                            //     user_email.closest('.spz-hero-emailcap').classList.add('p-error');
                            //     user_email.parentNode.classList.add('error');
                            // } else {
                            //     if (validateEmail(user_email.value.trim())) {
                            //         user_email.closest('.spz-hero-emailcap').classList.add('p-filled');
                            //         user_email.parentNode.classList.add('filled');
                            //         user_email.closest('.spz-hero-emailcap').classList.remove('p-error');
                            //         user_email.parentNode.classList.remove('error');
                            //         document.querySelector('.spz-hero-emailcap-submit').click();
                            //     } else {
                            //         user_email.closest('.spz-hero-emailcap').classList.add('p-error');
                            //         user_email.parentNode.classList.add('error');
                            //     }
                            // }
                            document.querySelector('.spz-hero-emailcap-submit').click();
                        }
                    });

                    // CTA click event
                    document.querySelector('.spz-hero-emailcap .spz-hero-emailcap-submit').addEventListener('click', function (e) {
                        // if (user_email.value.trim() == '') {
                        //     user_email.closest('.spz-hero-emailcap').classList.add('p-error');
                        //     user_email.parentNode.classList.add('error');
                        // } else {
                        //     if (validateEmail(user_email.value.trim())) {
                        //         user_email.closest('.spz-hero-emailcap').classList.add('p-filled');
                        //         user_email.parentNode.classList.add('filled');
                        //         user_email.closest('.spz-hero-emailcap').classList.remove('p-error');
                        //         user_email.parentNode.classList.remove('error');

                        //         // Set email value to local storage
                        //         localStorage.setItem('spz_email', user_email.value.trim());
                        //         window.location.href = 'https://www.sailpoint.com/demo/';
                        //     } else {
                        //         user_email.closest('.spz-hero-emailcap').classList.add('p-error');
                        //         user_email.parentNode.classList.add('error');
                        //     }
                        // }

                        // Set email value to local storage
                        localStorage.setItem('spz_email', user_email.value.trim());
                        window.location.href = 'https://www.sailpoint.com/demo/';
                    });
                }
            }

            // Change section position
            let company_cards = document.querySelector('section.hero + section');
            company_cards.classList.add('spz-company-cards');

            if (document.querySelectorAll('section#interactive-demo + section.spz-company-cards').length == 0) {
                document.querySelector('section#interactive-demo').insertAdjacentElement('afterend', company_cards);
                let display_counter = 0;
                let interval_display = setInterval(function () {
                    document.querySelector('.spz-company-cards').style.display = 'block';
                    if (display_counter == 60) {
                        clearInterval(interval_display);
                    }
                    display_counter++;
                }, 1000);
            }
        }
    });
}

function validateEmail(e) {
    var filter = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
    return String(e).search(filter) != -1;
}

// Do not touch below hidden field code for any Experiment Start
function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
    var ExistingHiddenFieldName = getCookie('HiddenFieldName');
    var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');

    if (!ExistingHiddenFieldName) {
        setCookie('HiddenFieldName', currentHiddenFieldName, 1);
        setCookie('HiddenFieldValue', currentHiddenFieldValue, 1);
    } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
        setCookie('HiddenFieldName', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
        setCookie('HiddenFieldValue', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
    }

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=sailpoint.com;";
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
    function setHiddenFieldValue() {
        var spz_cro_Interval = setInterval(function () {
            var intellimize1 = document.querySelector('form.mktoForm input[name="intellimize1"]');
            if (intellimize1) {
                clearInterval(spz_cro_Interval);
                var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');
                intellimize1.value = ExistingHiddenFieldValue;
            }
        });
    }
    setHiddenFieldValue();
}
// Do not touch below hidden field code for any Experiment over