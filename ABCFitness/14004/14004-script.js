(function () {
    const TEST_ENV = {
        name: 'spz-pricing-testimonials-14004',
        class: 'spz-14004',
        date: '03-10-2024',
        test_url: 'https://abcfitness.com/pricing/',
        main_class: 'main#main',
    }

    function loadTest() {
        var cookieName = TEST_ENV.name + "-" + TEST_ENV.date;
        var cookieValue = "1";
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;

        // Set test class
        document.body.classList.add(TEST_ENV.class);
        waitForElm(TEST_ENV.main_class).then(function () {
            document.querySelector(TEST_ENV.main_class).classList.add('spz-14004-testimonial');

            document.querySelector('.pricing-new__form-title').textContent = 'Get a Demo';
            appendTestimonial();
            focusFields();
        });
        document.body.classList.add("loaded");
    }

    function appendTestimonial() {
        document.querySelector('.pricing-new__form').insertAdjacentHTML('afterend', `
            <div class="spz-testimonial-wrapper">
                <div class="spz-testimonial__content">
                    <div class="spz-testimonial__content__quote">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/abcfitness/14004/quote.svg" alt="Quote">
                    </div>
                    <div class="spz-testimonial__content__text">ABC Fitness's daily reports help me tremendously. They paint a daily picture for me of what is going on and what is needed by location. Without the certainty from those numbers, I would not have opened two more gyms.</div>
                    <div class="spz-testimonial__content__author">
                        <span class="st-name">Deuce Robertson</span>
                        <span class="st-position">CEO, 4:13 Fitness Center</span>
                    </div>
                </div>
            </div>`);
    }

    // Generic
    let url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        let testURL = TEST_ENV.test_url;
        if (window.location.pathname.indexOf(TEST_ENV.test_url) > -1) {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, false)) {
            waitForElm(TEST_ENV.main_class).then(function () {
                loadTest();
            });
        } else {
            removeTest();
        }
    }

    function removeTest() {
        document.body.classList.remove(TEST_ENV.class);
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

    // Add class 'safari' (used for cart scrollbar)
    if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
        document.body.classList.add('safari');
    }

    // On input focus add class on closest parent field class
    function focusFields() {
        document.querySelectorAll('.marketo-form.pricing-form .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {
            el.addEventListener('focus', function () {
                el.closest('.mktoFormCol').classList.add('field-focus');
            });
            el.addEventListener('blur', function () {
                el.closest('.mktoFormCol').classList.remove('field-focus');
                checkError(el);
            });

            // add event listeners to the input element
            el.addEventListener('keypress', () => {
                checkError(el);
            });

            el.addEventListener('change', () => {
                checkError(el);
            });

            el.addEventListener('keydown', () => {
                checkError(el);
            });

            el.addEventListener('keyup', () => {
                checkError(el);
            });
        });
    }

    // Function to add .field-error class on closest parent .field class if .error is exist on input
    function checkError(elem) {
        document.querySelectorAll('.marketo-form.pricing-form .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (elem) {
            let timeBuffer = setInterval(() => {
                if (elem.closest('.mktoFieldWrap').querySelector('.mktoError') && elem.closest('.mktoFieldWrap').querySelector('.mktoError').style.display != 'none' && elem.closest('.mktoFieldWrap').querySelector('.mktoInvalid')) {
                    elem.closest('.mktoFormCol').classList.add('field-error');
                } else {
                    elem.closest('.mktoFormCol').classList.remove('field-error');
                }
                if (elem && elem.value && (elem.value != '')) {
                    // console.log(elem.value)
                    elem.closest('.mktoFormCol').classList.add('input-filled');
                    // elem.closest('.mktoFormCol').classList.remove('field-error');
                } else {
                    elem.closest('.mktoFormCol').classList.remove('input-filled');
                    // elem.closest('.mktoFormCol').classList.add('field-error');
                }

            }, 100);

            setTimeout(() => {
                clearInterval(timeBuffer);
            }, 1000);
        });


    }

    window.addEventListener("click", function (e) {
        if (e.target.classList.contains("mktoButton")) {
            checkError();
            // document.querySelectorAll('.marketo-form.pricing-form .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {
            // });
        }
    });
})();
