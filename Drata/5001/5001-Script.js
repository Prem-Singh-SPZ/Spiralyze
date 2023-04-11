
window.addEventListener("click", function (e) {
    if (e.target.classList.contains("goto-hero-form")) {
        let scrollOffset = window.innerWidth > 992 ? 100 : 120;
        scrollToElement('.form-wrapper-spz', scrollOffset);
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

const formInt = setInterval(() => {
    if (document.querySelectorAll('.hbspt-form form').length > 0) {
        clearInterval(formInt);

        appendInputLabel();

        // Set input label
        document.querySelector('[name="source__inbound_demo_"] + .hs-label-spz').innerHTML = 'How did you hear about us?*';

        // Set chekbox label
        document.querySelector('.hs_demo_product_of_interest >  legend.hs-field-desc').innerHTML = 'What product(s) are you interested in?';

        // Set SOC-2 checkbox checked
        document.querySelector('[name="demo_product_of_interest"]').setAttribute('checked', 'checked');

        // Set button label
        document.querySelector('.hs-button.primary').innerHTML = 'Get Started';
        document.querySelector('.hs-button.primary').setAttribute('value', 'Get Started');

        // hs-button
        document.querySelector('.hs-button').addEventListener('click', function () {
            const err = setInterval(() => {
                checkError();
                clearInterval(err);
            }, 100);
        });

        moveElement('.hs_source__inbound_demo_', '.hbspt-form .form-columns-1');

        // Set focus on input
        focusFields();
    }
}, 100);


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

// Add class 'safari' (used for cart scrollbar)
if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari')
}

