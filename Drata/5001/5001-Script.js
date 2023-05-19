const formInt = setInterval(() => {
    if (document.querySelectorAll('.hbspt-form form').length > 0) {
        clearInterval(formInt);

        appendInputLabel();

        // Set input label
        document.querySelector('[name="source__inbound_demo_"] + .hs-label-spz').innerHTML = 'How did you hear about us?*';

        // Set checkbox label
        document.querySelector('.hs_demo_product_of_interest >  legend.hs-field-desc').innerHTML = 'What product(s) are you interested in?';

        // Set SOC-2 checkbox checked
        // document.querySelector('[name="demo_product_of_interest"]').setAttribute('checked', 'checked');

        // hs-button
        document.querySelector('.hs-button').addEventListener('click', function () {
            const err = setInterval(() => {
                checkError();
                clearInterval(err);
            }, 100);
        });

        // Add field-untouched class on select element
        document.querySelectorAll('select.hs-input').forEach(function (el) {
            if (el.options.length > 0) {
                el.closest('.field').classList.add('field-untouched');
            }
        });

        moveElement('.hs_source__inbound_demo_', '.hbspt-form .form-columns-1');

        // Set focus on input
        focusFields();

        removeStyleTags()

        // initSwiper();

        document.body.classList.add('spz-5001');
    }
}, 100);

function appendFavicon() {
    document.querySelector('head').insertAdjacentHTML("afterbegin", `
        <link rel="shortcut icon" href="https://drata.com/images/favicon.ico">
        <link rel="icon" type="image/png" sizes="256x256" href="https://drata.com/images/favicon-256x256.png">
        <link rel="icon" type="image/png" sizes="48x48" href="https://drata.com/images/favicon-48x48.png">
        <link rel="icon" type="image/png" sizes="32x32" href="https://drata.com/images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="https://drata.com/images/favicon-16x16.png">

        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1681388733/drata/4001/System_Icons_open.svg" as="image">
        <link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1682065639/drata/5001/Checkmark-hover.svg" as="image">
        <link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1682065639/drata/5001/Checkmark-bg.svg" as="image">`
    );
}

function appendGTM() {
    document.body.insertAdjacentHTML("afterbegin", `
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5K4ZZ96"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->`);
}
appendGTM();
appendFavicon();


// Remove all style tags without id in header
function removeStyleTags() {
    document.querySelectorAll('style:not([id])').forEach(function (el) {
        el.remove();
    });

    // Remove link tag which contains main.min.css or Social_follow.min.css in href attribute
    document.querySelectorAll('link').forEach(function (el) {
        if (el.href.indexOf('main.min.css') > -1 || el.href.indexOf('Social_follow.min.css') > -1) {
            el.remove();
        }
    });
}

// Create input label with placeholder text
function appendInputLabel() {
    document.querySelectorAll('.hs-input').forEach(function (el) {
        const label = document.createElement("label");
        label.innerHTML = el.placeholder;
        if (!el.hasAttribute('type') && el.options.length > 0) {
            label.innerHTML = el.options[0].text;
        }
        label.setAttribute('for', el.id);
        label.classList.add('hs-label-spz');
        el.parentNode.insertBefore(label, el.nextSibling);
    });
}


// On input focus add class on closest parent .field class
function focusFields() {
    document.querySelectorAll('.hs-input').forEach(function (el) {
        // On input focus add .field-focus class on closest parent .field class
        el.addEventListener('focus', function () {
            el.closest('.field').classList.add('field-focus');
            setTimeout(function () {
                el.closest('.field').classList.remove('field-error');
                el.closest('.field').classList.remove('field-untouched');
            }, 100);
        });

        // On input blur remove .field-focus class on closest parent .field class
        el.addEventListener('blur', function () {
            el.closest('.field').classList.remove('field-focus');
            setTimeout(function () {
                checkError();
            }, 100);
        });

        // On select element change remove .field-error class on closest parent .field class
        if (el.tagName == 'SELECT') {
            el.addEventListener('change', function () {
                el.closest('.field').classList.remove('field-error');
            });

            // el.addEventListener('focus', function () {
            //     el.closest('.field').classList.add('field-focus');
            //     setTimeout(function () {
            //         el.closest('.field').classList.remove('field-untouched');
            //     }, 100);
            // });
        }
    });
}

// Click on 'did you know email address' link in error message
document.addEventListener("click", function (e) {
    const target = e.target.closest(".inputs-list label a");

    if (target) {
        checkError();
    }
});

// Function to add .field-error class on closest parent .field class if .error is exist on .hs-input
function checkError() {
    document.querySelectorAll('.hs-input').forEach(function (el) {
        if (el.closest('.field').querySelector('.error') != null) {
            el.closest('.field').classList.add('field-error');
        } else {
            el.closest('.field').classList.remove('field-error');
        }
    });
}

// Scroll to element on click
window.addEventListener("click", function (e) {
    if (e.target.classList.contains("goto-hero-form")) {
        let scrollOffset = window.innerWidth > 992 ? 80 : 25;
        scrollToElement('.hero-right-section', scrollOffset);
    }

    if (e.target.classList.contains("cookie-preferences-button")) {
        if (document.querySelectorAll('.osano-cm-widget').length > 0) {
            document.querySelector('.osano-cm-widget').click();            
        }
    }
});

// Function to Scroll to position using smooth scroll vanilla JS
// target: Element to scroll to
// offset: Offset from the top of the element
function scrollToElement(target, offset) {
    const targetElm = document.querySelector(target);
    const targetElmOffset = targetElm.offsetTop - offset;
    window.scrollTo({
        top: targetElmOffset,
        behavior: 'smooth'
    });
}

// init Swiper slider
function initSwiper() {
    const swiper = new Swiper('#cust-review-slider', {
        // loop: true,
        width: 255,

        breakpoints: {
            320: {
                slidesPerView: 0.85,
                width: 245,
                spaceBetween: 20,
                
            },
            340: {
                slidesPerView: 1,
                width: 269,
                spaceBetween: 24,
                
            },
            768: {
                slidesPerView: 1,
                width: 255,
            },
            1280: {
                slidesPerView: 1,
                width: 254,
            },

        }
    });
    
    if (window.innerWidth <= 1280) {
        swiper.enable()
    } else {
        swiper.disable()
    }
}

// Load again if device rotate 
// window.onorientationchange = function () {
//     var orientation = window.orientation;
//     switch (orientation) {
//         case 0:
//         case 90:
//         case -90: initSwiper();
//             break;
//     }
// };

// Move element
// sourceElm: Element which we have to move
// targetLoc: New location of an element 
function moveElement(sourceElm, targetLoc) {
    const f = document.createDocumentFragment();
    if (document.querySelector(sourceElm) != null) {
        f.appendChild(document.querySelector(sourceElm));
        document.querySelector(targetLoc).appendChild(f);
    }
}

// Add class 'safari' on body if browser is safari
if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari')
}
