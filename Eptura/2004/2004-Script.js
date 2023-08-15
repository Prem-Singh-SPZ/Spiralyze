(function () {
    document.body.classList.add('spz-2004');
    waitForElm('#bodyId #twocol_form .mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-2004');

        // Hide form initially
        // document.querySelector('#twocol_form').style.opacity = 0;

        //main function call
        loadTest();
    });

    function loadTest() {
        // show form once loaded
        // waitForElm('[spz_fname="Country"][style*="display"]').then(function () {
        //     document.querySelector('#twocol_form').style.opacity = 1;
        // });

        testimonials();
        formUpdate();
        focusFields();
        modalSpecific();

        // Add class 'safari' (used for cart scrollbar)
        if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            document.querySelector('body').classList.add('safari')
        }

        window.addEventListener("click", function (e) {
            if (e.target.classList.contains("show-comment-dynamic")) {
                e.target.parentElement.classList.add('spz-hidden');
                this.document.querySelector('#Lead_Notes__c').focus();
            }
            if (e.target.classList.contains("mktoButton")) {
                document.querySelectorAll('#twocol_form .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {
                    checkError(el);
                });
            }
            if (e.target.classList.contains("spz-trigger-modal")) {
                document.querySelector('#twocol_form .col-md.order-1.order-md-2').classList.add('show-modal');
                this.document.body.classList.add('modal-open');
            }
            if (e.target.classList.contains("close-modal")) {
                document.querySelector('#twocol_form .col-md.order-1.order-md-2').classList.remove('show-modal');
                this.document.body.classList.remove('modal-open');
            }
        });
        document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691500370/eptura/2004/assets/close-icon-hovered.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-hover.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-checked.svg" as="image">`
        );
    }

    //controls testimonial section
    function testimonials() {
        document.querySelector('#testimonials .testimonial_container#TestimonialImg').innerHTML = `<img src="https://lp.eptura.com/rs/267-JUP-120/images/customer-logo-1.png" alt=""> <img src="https://lp.eptura.com/rs/267-JUP-120/images/customer-logo-2.png" alt=""> <img src="https://lp.eptura.com/rs/267-JUP-120/images/customer-logo-3.png" alt=""> <img src="https://lp.eptura.com/rs/267-JUP-120/images/customer-logo-4.png" alt=""> <img src="https://lp.eptura.com/rs/267-JUP-120/images/customer-logo-5.png" alt=""> <img src="https://lp.eptura.com/rs/267-JUP-120/images/customer-logo-6.png" alt=""> <img src="https://lp.eptura.com/rs/267-JUP-120/images/customer-logo-7.png" alt=""> <img src="https://lp.eptura.com/rs/267-JUP-120/images/customer-logo-8.png" alt=""> <img src="https://lp.eptura.com/rs/267-JUP-120/images/customer-logo-9.png" alt=""> <img src="https://lp.eptura.com/rs/267-JUP-120/images/customer-logo-10.png" alt="">`;
    }

    //Modal specific code
    function modalSpecific() {
        document.querySelector('#NavButton .btn.btn-primary').setAttribute('href', 'javascript:void(0)');
        document.querySelector('#NavButton .btn.btn-primary').classList.add('spz-trigger-modal');
        document.querySelector('#HeroBtn .btn.btn-primary').setAttribute('href', 'javascript:void(0)');
        document.querySelector('#HeroBtn .btn.btn-primary').removeAttribute('target');
        document.querySelector('#HeroBtn .btn.btn-primary').classList.add('spz-trigger-modal');

        document.querySelector('#twocol_form .lpContentsItem.formSpan').insertAdjacentHTML('afterbegin', '<div class="form-close"><a href="javascript:void(0)" class="close-modal"></a></div><div class="spz-form-title"><h6>Contact us <span>today</span></h6></div>');

    }

    //Marketo form update
    function formUpdate() {
        //Remove first options from dropdown
        document.querySelector('#Country option:first-child').textContent = '';
        document.querySelector('#I_am__c option:first-child').textContent = '';

        document.querySelector('#twocol_form .mktoForm em').closest('.mktoFormRow').classList.add('spz-email');
        document.querySelector('#twocol_form .mktoForm em').innerHTML = `Trouble submitting? <br class="mobile-only"> Email us at <a href="mailto:info@eptura-marketing.com" target="_blank" id="">info@eptura-marketing.com</a>`;

        document.querySelector('#twocol_form .mktoForm .spz-email').before(document.querySelector('#twocol_form .mktoForm .mktoButtonRow'));

        document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').insertAdjacentHTML(`beforebegin`, `<div class="spz-anchor"><a href="javascript:void(0);" class="show-comment-dynamic">+ Comment</a></div>`);

        document.querySelector('#I_am__c').addEventListener('change', function () {
            dropdownFunctionality(this.value);
        });

        document.querySelector('#LblI_am__c').textContent = 'I am...*';

        document.querySelectorAll('#form .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {

            let fieldName = el.getAttribute('name');
            el.closest('.mktoFormCol').setAttribute('spz_fname', fieldName);

        });
    }

    //On value change of "I am.." field switch label od comment button
    function dropdownFunctionality(val) {
        let setBuffer = setInterval(() => {
            if (document.querySelector('#Lead_Notes__c')) {
                if (document.querySelector('.spz-anchor').classList.contains('spz-hidden')) {
                    document.querySelector('.spz-anchor').classList.remove('spz-hidden');
                }
            }
            else {
                document.querySelector('.spz-anchor').classList.add('spz-hidden');
            }

            if (val == 'Other' || val == 'A current client' || val == 'A current Partner') {
                document.querySelector('.show-comment-dynamic').textContent = '+ Please let us know how we may assist you';
            }
            else {
                document.querySelector('.show-comment-dynamic').textContent = '+ Comment';
            }
            focusFields();
        }, 5);

        setTimeout(() => {
            clearInterval(setBuffer);
        }, 50);

        waitForElm('#Solution_Type__c').then(function () {
            document.querySelector('#Solution_Type__c option:first-child').textContent = '';
            let fieldName = document.querySelector('#Solution_Type__c').getAttribute('name');
            document.querySelector('#Solution_Type__c').closest('.mktoFormCol').setAttribute('spz_fname', fieldName);
        });
    }

    // On input focus add class on closest parent field class
    function focusFields() {
        document.querySelectorAll('#form .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {

            blockChar();

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
        let timeBuffer = setInterval(() => {
            if (elem.closest('.mktoFormCol ').querySelector('.mktoError') && elem.closest('.mktoFormCol').querySelector('.mktoInvalid')) {
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
    }

    //Block "e" from number of employees field
    function blockChar() {
        var inputBox = document.getElementById("NumberOfEmployees");

        var invalidChars = ["e",];

        inputBox.addEventListener("input", function () {
            this.value = this.value.replace(/[e\+\-]/gi, "");
        });

        inputBox.addEventListener("keydown", function (e) {
            if (invalidChars.includes(e.key)) {
                e.preventDefault();
            }
        });
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
})();
