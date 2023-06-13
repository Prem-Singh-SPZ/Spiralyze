const formInt = setInterval(() => {
    if (document.querySelectorAll('.hbspt-form form').length > 0) {
        clearInterval(formInt);

        appendInputLabel();

        // Set input label
        document.querySelector('[name="source__inbound_demo_"] + .hs-label-spz').innerHTML = 'How did you hear about Drata?*';
        document.querySelector('[name="source__inbound_demo_"]').setAttribute('placeholder', 'How did you hear about Drata?*');
        document.querySelector('label#label-demo_product_of_interest-429140d2-bd90-4a8b-a561-5d732c9bd514 + .hs-field-desc').innerHTML = 'What product(s) are you interested in?';
        
        // Change Email Field Position
        let email_el = document.querySelector('.hs_email');
        let company_el = document.querySelector('.hs_company_name');
        company_el.before(email_el);

        // hs-button
        document.querySelector('.hs-button').addEventListener('click', function () {
            const err = setInterval(() => {
                checkError();
                clearInterval(err);
            }, 100);
        });

        // Set focus on input
        focusFields();
        document.body.classList.add('spz-8001');
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
        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1681206084/drata/6001/Checkmark.svg" as="image">`
    );
}

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
    document.querySelectorAll('.hs-input:not([type="checkbox"])').forEach(function (el) {
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
        el.addEventListener('focus', function () {
            el.closest('.field').classList.add('field-focus');
        });
        el.addEventListener('blur', function () {
            el.closest('.field').classList.remove('field-focus');
            checkError();
        });
    });
}

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
    if (e.target.classList.contains("get-started-btn")) {
        let scrollOffset = window.innerWidth > 1199 ? 100 : 120;
        if (window.innerWidth > 1199) {
            scrollToElement('.form-wrapper-spz', scrollOffset);
        } else {
            document.querySelector('.form-wrapper-spz').scrollIntoView({ behavior: "smooth" });
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

// Load again if device rotate 
window.onorientationchange = function () {
    var orientation = window.orientation;
    switch (orientation) {
        case 0:
        case 90:
        case -90: initSwiper();
            break;
    }
};