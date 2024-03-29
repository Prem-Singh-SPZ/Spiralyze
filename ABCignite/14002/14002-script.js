let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        document.body.classList.add('spz-14002');

        waitForElm(`.pricing-hero__form .marketo-form .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])`).then((elm) => {
            code_inject();
        });
    }
});

function code_inject() {
    if (document.querySelectorAll(".pricing-hero__form .logo-btn").length == 0) {
        document.querySelector(".pricing-hero__form .pricing-hero__form-title").insertAdjacentHTML("beforebegin", `<div class="abc-logo"><a class="" href="/"><img class="logo-btn" src="//res.cloudinary.com/spiralyze/image/upload/v1710253735/abcfitness/14002/frame_1000003327.svg" alt="fitness-logo"/></a></div>`);
    }

    document.querySelector(".pricing-hero__form .pricing-hero__form-title").textContent = "Get a Demo";

    focusFields();
}

window.addEventListener("click", function (e) {
    if (e.target.classList.contains("mktoButton")) {
        document.querySelectorAll('.mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {
            checkError(el);
        });
    }
});

// On input focus add class on closest parent field class
function focusFields() {
    document.querySelectorAll('.mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {
        el.addEventListener('focus', function () {
            el.closest('.mktoFormCol').classList.add('field-focus');
            checkError(el);
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
function checkError() {
    let timeBuffer = setInterval(() => {
        document.querySelectorAll('.mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (elem) {
            if (elem.closest('.mktoFormCol ').querySelector('.mktoError') && elem.closest('.mktoFormCol').querySelector('.mktoInvalid')) {
                elem.closest('.mktoFormCol').classList.add('field-error');
            } else {
                elem.closest('.mktoFormCol').classList.remove('field-error');
            }

            if (elem && elem.value && (elem.value != '')) {
                elem.closest('.mktoFormCol').classList.add('input-filled');
            } else {
                elem.closest('.mktoFormCol').classList.remove('input-filled');
            }
        });
    }, 100);

    setTimeout(() => {
        clearInterval(timeBuffer);
    }, 500);
}

function waitForElm(selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
}