let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz_4003')) {
            body.classList.add('spz_4003');
            document.querySelector('.spz_4003 .body-wrapper').insertAdjacentHTML('beforebegin', `<div class="form-over-model">
          <div class="form-over-box">
            <a href="/" aria-label="Varicent Logo" class="site-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1717795338/varicent/4003/white_logo.svg" alt="Varicent Logo"></a>
            <span class="divider"></span>
            <h2 class="form-over-heading">Get <span class="highlight-text">an Interactive</span> Product Tour</h2>
            <div class="form-choice-step">
              <h6 class="choice-heading">Which product(s) do you want to tour first?</h6>
              <div class="choice-option">
                <input type="radio" id="Incentives" name="form-choice" value="Incentives">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1718782450/varicent/4003/icm.svg" class="choice-label-icon" alt="Incentives">
                <h4 class="choice-label">Incentives</h4>
              </div>
              <div class="choice-option">
                <input type="radio" id="Sales_Planning" name="form-choice" value="Sales_Planning">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1718782450/varicent/4003/plan.svg" class="choice-label-icon" alt="Incentives">
                <h4 class="choice-label">Sales<br>Planning</h4>
              </div>
            </div>
            <div class="form-step"></div>
          </div>  
        </div>`);

            waitForElm('.spz_4003 .form-over-model .form-step form.hs-form').then(function () {
                setTimeout(() => {
                    const formFields = document.querySelectorAll('.spz_4003 .form-over-model .form-step form.hs-form.hs-custom-form .hs-form-field .hs-input');
                    formFields.forEach(function (field) {
                        if (field.value == null || field.value == '') {
                            field.closest('.hs-form-field').classList.remove('filled');
                        } else {
                            field.closest('.hs-form-field').classList.add('filled');
                        }
                    });
                }, 750);
            });

            let value_of_radio = '';
            // Function to handle form swapping logic
            function handleFormSwap(rowNumber) {
                document.querySelector(`.${rowNumber} .btn`).click();
                waitForElm(`.${rowNumber} form`).then(function () {
                    const form = document.querySelector(`.${rowNumber} .hs_cos_wrapper_type_form`);
                    const target = document.querySelector('.form-choice-step');
                    const wrapper = document.createElement('div');
                    wrapper.className = 'form-step';
                    form.parentNode.insertBefore(wrapper, form);
                    wrapper.appendChild(form);
                    document.querySelector('.form-over-model').classList.add('hidden-step');
                    target.after(wrapper);

                    form_modify();

                    // HubSpot form submission event listener
                    window.addEventListener('message', event => {
                        if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
                            document.querySelector(`.${rowNumber} .hs_cos_wrapper_type_module`).classList.add('fadeOut');
                            document.body.classList.add('get_access');
                            if (rowNumber === 'row-number-11') {
                                document.querySelector('.row-number-7').scrollIntoView({ behavior: 'smooth' });
                            } else {
                                document.querySelector('.row-number-12').scrollIntoView({ behavior: 'smooth' });
                            }
                        }
                    });
                });
            }

            // Function to handle radio button click
            function handleRadioClick() {
                value_of_radio = this.value;
                const formStep = document.querySelector(".spz_4003 .form-over-model .form-step");
                if (formStep) {
                    formStep.remove();
                }
                if (value_of_radio === 'Incentives') {
                    handleFormSwap('row-number-11');
                } else {
                    handleFormSwap('row-number-16');
                }
            }

            document.querySelectorAll('.spz_4003 .form-over-model .form-choice-step .choice-option input').forEach(radio => {
                radio.addEventListener('click', handleRadioClick);
            });

            waitForElm('.spz_4003.get_access').then(function () {
                document.querySelectorAll(`.spz_4003.get_access .row-fluid-wrapper a.btn[data-bs-toggle="modal"]`).forEach(access_button => {
                    access_button.addEventListener('click', function () {
                        document.body.classList.remove('get_access');
                        const formStep = document.querySelector(".spz_4003 .form-over-model .form-step");
                        if (formStep) {
                            formStep.remove();
                        }
                        const rowWrapper = this.closest('.row-fluid-wrapper');
                        if (rowWrapper) {
                            const classes = Array.from(rowWrapper.classList);
                            const rowNumberClass = classes.find(cls => cls.startsWith('row-number-'));
                            if (rowNumberClass) {
                                const rowNumber = rowNumberClass.split('-')[2];
                                handleFormSwap(`row-number-${rowNumber}`);
                            }
                        }
                    });
                });
            });
        }
    }
});

function form_modify() {
    // Add class in each elements of type hidden
    var hiddenFields = document.querySelectorAll('.spz_4003 .form-over-model .form-step form.hs-form.hs-custom-form input[type="hidden"].hs-input');
    hiddenFields.forEach(function (hiddenField) {
        var parentDiv = hiddenField.closest('.hs-form-field');
        if (parentDiv) {
            parentDiv.classList.add('hidden-field');
        }
    });

    let form_CTA = setInterval(() => {
        let textChng = document.querySelector('.spz_4003 .form-over-model .form-step form.hs-form.hs-custom-form .hs-submit .hs-button');
        if (textChng && !textChng.classList.contains('updated')) {
            textChng.value = "Instant Access";
            textChng.classList.add('updated');

            const observer = new MutationObserver((mutationsList) => {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
                        if (textChng.value !== "Instant Access") {
                            textChng.value = "Instant Access";
                        }
                    }
                }
            });
            observer.observe(textChng, { attributes: true });

            clearInterval(form_CTA);
        }
    }, 100);

    document.querySelector('.spz_4003 .form-over-model .form-step form.hs-form .hs_firstname').before(document.querySelector('.spz_4003 .form-over-model .form-step form.hs-form .hs_email'));

    var selector = '.spz_4003 .form-over-model .form-step form.hs-form.hs-custom-form .hs-form-field .hs-input';

    // Function to handle custom error class
    function handleCustomErrorClass(target) {
        var closestError = target.parentNode.parentNode.querySelector('.hs-error-msgs');
        if (closestError) {
            target.closest('body form.hs-form.hs-custom-form .hs-form-field').classList.add('error');
        } else {
            target.closest('body form.hs-form.hs-custom-form .hs-form-field').classList.remove('error');
        }
    }

    // Set up MutationObserver
    var observer = new MutationObserver(function (mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                let target = mutation.target;
                if (target.matches(selector)) {
                    handleCustomErrorClass(target);
                }
            }
        }
    });

    // Observer configuration
    var config = { attributes: true, attributeFilter: ['class'] };

    document.addEventListener('focus', function (event) {
        if (event.target.matches(selector)) {
            event.target.closest('body form.hs-form.hs-custom-form .hs-form-field').classList.add('active', 'typing');
        }
    }, true);

    var eventList = ["focusin", "blur", "focusout", "keyup", "change"];
    for (let s_event of eventList) {
        document.addEventListener(s_event, function (event) {
            if (event.target.matches(selector)) {
                if (event.target.value == null || event.target.value == '') {
                    event.target.closest('body form.hs-form.hs-custom-form .hs-form-field').classList.remove('filled');
                } else {
                    event.target.closest('body form.hs-form.hs-custom-form .hs-form-field').classList.add('filled');
                }
                if (event.type == "change") {
                    if (event.target.value == "") {
                        event.target.closest('body form.hs-form.hs-custom-form .hs-form-field').classList.add('error');
                    } else {
                        event.target.closest('body form.hs-form.hs-custom-form .hs-form-field').classList.remove('error');
                    }
                } else {
                    handleCustomErrorClass(event.target);
                }
            }
        });
    }

    document.addEventListener('focusout', function (event) {
        document.querySelectorAll('body form.hs-form.hs-custom-form .hs-form-field.typing').forEach(function (elem) {
            elem.classList.remove('active', 'typing');
        })
    }, true);

    // Observe all input elements initially
    document.querySelectorAll(selector).forEach((elem) => {
        observer.observe(elem, config);
    });

    document.querySelector('.spz_4003 .form-over-model .form-step form .hs-button').addEventListener('click', function () {
        const err = setInterval(() => {
            document.querySelectorAll(".spz_4003 .form-over-model .form-step form .hs-input").forEach((function (e) {
                null != e.closest(".field").querySelector(".error") ? e.closest(".field").classList.add("error") : e.closest(".field").classList.remove("error")
            }))
            clearInterval(err);
        }, 100);
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
