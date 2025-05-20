let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);

        if (window.location.href.indexOf('/on-demand-mdr-demo') > -1 || window.location.href.indexOf('/mdr-packages') > -1 || window.location.href.indexOf('/contact') > -1) {
            waitForElm('.mktoForm input[name="Email"]').then(function () {
                if (document.querySelector('.mktoForm input[name="Email"]')) {
                    if (sessionStorage.getItem('marketoEmailSPZ')) {
                        document.querySelector('.mktoForm input[name="Email"]').value = sessionStorage.getItem('marketoEmailSPZ');
                    }
                }
            });

            waitForElm('.spz-hero .spz-hero__form .spz-hero__input-wrapper input[name*="email"]').then(function () {
                if (document.querySelector('.spz-hero .spz-hero__form .spz-hero__input-wrapper input[name*="email"]')) {
                    if (sessionStorage.getItem('marketoEmailSPZ')) {
                        document.querySelector('.spz-hero .spz-hero__form .spz-hero__input-wrapper input[name*="email"]').value = sessionStorage.getItem('marketoEmailSPZ');
                    }
                }
            });
        }
        else if (!body.classList.contains('spz_9001')) {
            body.classList.add('spz_9001');
            waitForElm('#hero-section .hero-buttons .blue-button').then(function () {
                addEmailPlusCTA();
            });
        }

        function addEmailPlusCTA() {
            if (document.querySelectorAll('#hero-section .hero-buttons #spzEmail').length == 0) {
                document.querySelector('#hero-section .hero-buttons').insertAdjacentHTML('afterbegin', `<div class="input-container">
                        <input type="email" id="spzEmail" name="spzEmail" placeholder=" ">
                        <label for="spzEmail">Business Email</label>
                        </div>`);

                const emailInput = document.getElementById('spzEmail');

                if (emailInput) {
                    emailInput.addEventListener('focus', () => {
                        sessionStorage.setItem('marketoEmailSPZ', emailInput.value);
                    });

                    emailInput.addEventListener('blur', () => {
                        sessionStorage.setItem('marketoEmailSPZ', emailInput.value);
                    });

                    emailInput.addEventListener('onchange', () => {
                        sessionStorage.setItem('marketoEmailSPZ', emailInput.value);
                    });
                }
            }
        }

        // Do not touch below hidden field code for any Experiment (Set Hidden Filed Value)
        function hiddenValue(currentExperimentName, currentExperimentValue) {
            function setCookie(name, value, days) {
                var expires = "";
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = "; expires=" + date.toUTCString();
                }
                document.cookie = name + "=" + (value || "") + expires + "; path=/";
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

            var ExistingExperimentName = getCookie('ExperimentName');
            var ExistingExperimentValue = getCookie('ExperimentValue');

            if (!ExistingExperimentName) {

                setCookie('ExperimentName', currentExperimentName, 1);
                setCookie('ExperimentValue', currentExperimentValue, 1);

            } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {

                setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
                setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

            } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {

                var existingNames = ExistingExperimentName.split(',');
                var existingValues = ExistingExperimentValue.split(',');

                var index = existingNames.indexOf(currentExperimentName);
                existingValues[index] = currentExperimentValue;

                setCookie('ExperimentName', existingNames.join(','), 1);
                setCookie('ExperimentValue', existingValues.join(','), 1);
            }
        }
        // Do not touch below hidden field code for any Experiment over (Set Hidden Filed Value)

        // Use this and change value according to the experiment
        hiddenValue('#9001 | Expel | Solutions | Email Plus CTA', 'variant_#9001');
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
});
