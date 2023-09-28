(function () {
    console.log('2205 test ready..');
    waitForElm('.off-canvas-wrapper .off-canvas-content .overlayText').then(function (elm) {
        loadTest();
    });

    function loadTest() {
        document.body.classList.add('spz-2205');

        //Add email field
        document.querySelector('.off-canvas-wrapper .off-canvas-content .overlayText .longHero__content .button-container').insertAdjacentHTML('beforebegin', '<div class="spz-custom-email"><input type="email" name="email" id="email" class="email-input"><label for="email" class="email-label">Enter Email Address</label><p class="spz-error-msg">Email Address is Required</p></div>');


        validateEmailFieldReview();

    }

    // Generic
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

    // Open modal on click of 'btn-demo-spz'
    function validateEmailFieldReview() {
        const secondaryEmail = document.querySelector('.longHero__content .spz-custom-email input[name="email"]');

        // secondaryEmail.addEventListener('focus', () => {
        //     validateEmailField();
        // });

        secondaryEmail.addEventListener('blur', () => {
            validateEmailField();
        });

        // secondaryEmail.addEventListener('keydown', () => {
        //     validateEmailField();
        // });

        // secondaryEmail.addEventListener('keyup', () => {
        //     validateEmailField();
        // });
    }

    // Validate email field
    function validateEmailField() {
        // Get email value
        const email = document.querySelector('.longHero__content .spz-custom-email input[name="email"]');
        // Check if email is valid
        if (email.value != '' && email.value != null && email.value != undefined) {
            email.closest('.spz-custom-email').classList.add('input-filled');
        }
        else {
            email.closest('.spz-custom-email').classList.remove('input-filled');
        }

        if (!validateEmail(email.value)) {
            email.closest('.spz-custom-email').classList.add('input-error');
            return false;
        } else {
            email.closest('.spz-custom-email').classList.remove('input-error');
            return true;
        }
    }

    // Email validation function
    function validateEmail(email) {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }
})();