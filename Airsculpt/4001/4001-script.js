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

url = location.href;
urlCheck(url);

function urlCheck(url) {
    var allblogsurlstring = "";
    if (window.location.pathname.indexOf("/vc-started") > -1) { // Add " / " to run on all urls
        allblogsurlstring = window.location.href;
    }
    if (isSameUrl(url, allblogsurlstring, true)) {
        load_4001();
    } else {
        /*------remove test ---------*/
        if (document.body.classList.contains('spz_4001')) {
            document.querySelector("body").classList.remove("spz_4001");
        }
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

function load_4001() {
    if (!document.body.classList.contains('spz_4001')) {
        document.body.classList.add('spz_4001');
    }

    detectVisibleStep();

    waitForElm('.jotform-form .form-all .cont').then(function () {
        if (document.querySelectorAll(".spz_title_wrap").length == 0) {
            document.querySelector('.jotform-form .form-all .cont').insertAdjacentHTML('beforebegin', '<div class="spz_header_wrap"></div>');
            document.querySelector('.spz_header_wrap').insertAdjacentElement('beforeend', document.querySelector('.jotform-form .form-all .cont'));
            document.querySelector('.spz_header_wrap .cont').insertAdjacentHTML('afterbegin', '<div class="spz_title_wrap"><img src="//res.cloudinary.com/spiralyze/image/upload/v1730814779/airsculpt/4001/airsculpt_logosvg.svg" alt="Logo" class="spz-logo"></div>');

            document.querySelector('.jotform-form .form-all').setAttribute('id', 'spz-form');

            //check if current url has some query params
            if (window.location.search) {
                const urlParams = new URLSearchParams(window.location.search);
                const myParam = urlParams.get('email') || urlParams.get('postalCode') || urlParams.get('nationalPhoneNumber') || urlParams.get('name[first]') || urlParams.get('phoneCountrySelect');
                if (myParam) {
                    document.body.classList.add('spz-with-query-param');

                    let fname = urlParams.get('name[first]') || '';
                    let lname = urlParams.get('name[last]') || '';
                    let email = urlParams.get('email') || '';
                    let phone = urlParams.get('nationalPhoneNumber') || '';
                    let zip = urlParams.get('postalCode') || '';
                    let country = urlParams.get('tlprefill') || '';
                    let consultationType;
                    //add  null check for consultationType query selectoe
                    if (document.querySelector('.jotform-form .form-all .form-section.page-section #id_264[data-type="control_radio"] input:checked')) {
                        consultationType = document.querySelector('.jotform-form .form-all .form-section.page-section #id_264[data-type="control_radio"] input:checked').value;
                    }
                    else {
                        consultationType = '';
                    }


                    //create a new div after .badge-wrapper to show all the fields with values inside it
                    document.querySelector('.jotform-form .form-all .badge-wrapper').insertAdjacentHTML('afterend', `<div class="spz-form-prefilled-section"><div class="form-pf-wrapper"><div class="spz_form_title_wrap"><div class="spz_form_title">Get Started</div><div class="spz_form_desc">Get your virtual consultation and pricing in 24-48 hours by providing us a few details.</div></div><div class="form-pf-values-wrapper"><div class="values-container"><div class="values-title-bar"><p class="v-title">Personal Info </p><a href="javascript:;" class="edit-values-spz as-link">Edit</a></div><div class="values-item-line"><p class="v-item-title">Name</p><p class="v-item-value">${fname}, ${lname}</p></div><div class="values-item-line"><p class="v-item-title">Phone number</p><p class="v-item-value">${phone}</p></div><div class="values-item-line"><p class="v-item-title">Email</p><p class="v-item-value">${email}</p></div><div class="values-item-line"><p class="v-item-title">Clinic location</p><p class="v-item-value">${country}</p></div><div class="values-item-line"><p class="v-item-title">ZIP code</p><p class="v-item-value">${zip}</p></div><div class="values-item-line"><p class="v-item-title">Preferred consultation type</p><p class="v-item-value">${consultationType}</p></div><div class="spz-button-wrapper"><button type="button" class="spz-next-btn spz-btn">Next</button></div></div></div><div class="spz-help-bubble">Issues submitting? <a href="https://airsculpt.com/vc-backup" target="_blank" class="as-link" rel="nofollow">Click here</a></div></div></div>`);

                    waitForElm('.spz-help-bubble').then(function () {
                        document.querySelector('.jotform-form .form-all#spz-form .form-section.page-section.spz-step-1').classList.add('spz-hidden');
                        document.querySelector('.jotform-form .form-all#spz-form .form-section.page-section.spz-step-1 [data-type="control_pagebreak"]').classList.add('spz-hidden');
                        //add null check
                        if (document.querySelectorAll('.jotform-form .form-all#spz-form .form-section.page-section.spz-step-1 .spz-button-wrapper').length == 0) {
                            document.querySelector('.jotform-form .form-all#spz-form .form-section.page-section.spz-step-1').insertAdjacentHTML('beforeend', '<div class="spz-button-wrapper"><button type="button" class="spz-save-btn spz-btn">Save</button></div>');
                            document.querySelector('.jotform-form .form-all .form-section.page-section').insertAdjacentHTML('afterbegin', '<div class="v_title_wrap"><div class="spz_back_arrow"><a href="javascript:;" class="spz-back-btn"><img src="//res.cloudinary.com/spiralyze/image/upload/v1730814779/airsculpt/4001/arrow-back.svg"></a></div><div class="v_form_title">Edit Personal Info</div></div>');
                        }
                    });
                }
            }
            else {
                document.querySelector('.jotform-form .form-all .form-section.page-section').insertAdjacentHTML('afterbegin', '<div class="spz_form_title_wrap"><div class="spz_form_title">Get Started</div><div class="spz_form_desc">Get your virtual consultation and pricing in 24-48 hours by providing us a few details.</div></div>');

                document.querySelector('.jotform-form .form-all .form-section.page-section').insertAdjacentHTML('beforeend', '<div class="spz-help-bubble">Issues submitting? <a href="https://airsculpt.com/vc-backup" target="_blank" class="as-link" rel="nofollow">Click here</a></div>');
            }


            document.querySelector('.jotform-form .form-all .form-section.page-section #id_264[data-type="control_radio"]').insertAdjacentElement('beforebegin', document.querySelector('.jotform-form .form-all .form-section.page-section #id_10'));
            document.querySelector('.jotform-form .form-all .form-section.page-section #id_264[data-type="control_radio"]').insertAdjacentElement('beforebegin', document.querySelector('.jotform-form .form-all .form-section.page-section #id_184'));
            document.querySelector('.jotform-form .form-all .form-section.page-section #sublabel_input_5').textContent = 'Email';
            document.querySelector('.jotform-form .form-all .form-section.page-section #input_184').setAttribute('placeholder', '');
            document.querySelector('.jotform-form .form-all .form-section.page-section #input_255 option[value=""]').setAttribute('disabled', 'true');
            document.querySelector('.jotform-form .form-all .form-section.page-section #input_10').insertAdjacentHTML('afterend', '<label class="form-sub-label">Clinic location</label>');
            document.querySelector('.jotform-form .form-all .form-section.page-section #input_184').insertAdjacentHTML('afterend', '<label class="form-sub-label">ZIP code</label>');

            //convert above code to html select dropdown
            document.querySelector('.jotform-form .form-all .form-section.page-section #id_264[data-type="control_radio"]').insertAdjacentHTML('afterbegin', '<div class="form-sub-label-container"><select class="spz-dropdown form-dropdown validate[required]"><option value="">Please Select</option><option value="Virtual">Virtual</option><option value="In Person">In Person</option></select><label class="form-sub-label">Preferred consultation type</label></div>');

            waitForElm('.spz-dropdown').then(function () {
                document.querySelector('.spz-dropdown option[value=""]').setAttribute('disabled', 'true');
                //check if the value is already selected in the form and update the dropdown selected value
                if (document.querySelector('.jotform-form .form-all .form-section.page-section #id_264[data-type="control_radio"] input:checked')) {
                    document.querySelector('.spz-dropdown').value = document.querySelector('.jotform-form .form-all .form-section.page-section #id_264[data-type="control_radio"] input:checked').value;
                }

                //onclick of dropdown option select the radio option in the form
                document.querySelector('.spz-dropdown').addEventListener('change', function () {
                    document.querySelector('.jotform-form .form-all .form-section.page-section #id_264[data-type="control_radio"] input[value="' + this.value + '"]').click();
                });
            });

            waitForElm('.jotform-form .form-all .form-section.page-section .form-textbox').then(function () {
                focusFields();
            });
        }

        checkHidden4001();
    });
}

//detect all click events on the document
document.addEventListener('click', function (e) {
    //check if the clicked element is edit button
    if (e.target && e.target.classList.contains('edit-values-spz')) {
        document.querySelector('.spz-form-prefilled-section').classList.add('spz-hidden');
        document.querySelector('.jotform-form .form-all#spz-form .form-section.page-section.spz-step-1').classList.remove('spz-hidden');
    }

    //check if the clicked element is next button
    if (e.target && e.target.classList.contains('spz-next-btn')) {
        document.querySelector('#form-pagebreak-next_36').click();
    }

    //check if the clicked element is back button
    if (e.target && e.target.classList.contains('spz-back-btn')) {
        document.querySelector('.spz-form-prefilled-section').classList.remove('spz-hidden');
        document.querySelector('.jotform-form .form-all#spz-form .form-section.page-section.spz-step-1').classList.add('spz-hidden');
    }

    //check if the clicked element is save button
    if (e.target && e.target.classList.contains('spz-save-btn')) {
        document.querySelector('.spz-form-prefilled-section').classList.remove('spz-hidden');
        document.querySelector('.jotform-form .form-all#spz-form .form-section.page-section.spz-step-1').classList.add('spz-hidden');

        //update the values of .spz-form-prefilled-section with the new values of the form
        let phoneState = document.querySelector('select[name="q255_phoneCountrySelect"]').value || '';
        let fname = document.querySelector('input[name="q9_name[first]"]').value || '';
        let lname = document.querySelector('input[name="q9_name[last]"]').value || '';
        let email = document.querySelector('input[name="q5_email"]').value || '';
        let phone = phoneState == "US" ? document.querySelector('input[name="q202_nationalPhoneNumber[full]"]').value : phoneState == "UK" ? document.querySelector('input[name="q256_ukNationalPhone[full]"]').value : phoneState == "Other" ? document.querySelector('input[name="q6_phoneNumber[country]"]').value + document.querySelector('input[name="q6_phoneNumber[area]"]').value + document.querySelector('input[name="q6_phoneNumber[phone]"]').value : '';
        let zip = document.querySelector('input[name="q184_postalCode"]').value || '';
        let country = document.querySelector('#input_10').value || '';
        let consultationType = document.querySelector('.spz-dropdown.form-dropdown').value || '';


        document.querySelector('.jotform-form .form-all .spz-form-prefilled-section').innerHTML = `<div class="form-pf-wrapper"><div class="spz_form_title_wrap"><div class="spz_form_title">Get Started</div><div class="spz_form_desc">Get your virtual consultation and pricing in 24-48 hours by providing us a few details.</div></div><div class="form-pf-values-wrapper"><div class="values-container"><div class="values-title-bar"><p class="v-title">Personal Info </p><a href="javascript:;" class="edit-values-spz as-link">Edit</a></div><div class="values-item-line"><p class="v-item-title">Name</p><p class="v-item-value">${fname}, ${lname}</p></div><div class="values-item-line"><p class="v-item-title">Phone number</p><p class="v-item-value">${phone}</p></div><div class="values-item-line"><p class="v-item-title">Email</p><p class="v-item-value">${email}</p></div><div class="values-item-line"><p class="v-item-title">Clinic location</p><p class="v-item-value">${country}</p></div><div class="values-item-line"><p class="v-item-title">ZIP code</p><p class="v-item-value">${zip}</p></div><div class="values-item-line"><p class="v-item-title">Preferred consultation type</p><p class="v-item-value">${consultationType}</p></div><div class="spz-button-wrapper"><button type="button" class="spz-next-btn spz-btn">Next</button></div></div></div><div class="spz-help-bubble">Issues submitting? <a href="https://airsculpt.com/vc-backup" target="_blank" class="as-link" rel="nofollow">Click here</a></div></div>`;
    }

    if (e.target && e.target.classList.contains('error-navigation-next-button')) {
        if (document.querySelector('.jotform-form .form-all#spz-form .form-section.page-section.spz-step-1').classList.contains('spz-hidden')) {
            document.querySelector('.jotform-form .form-all#spz-form .form-section.page-section.spz-step-1').classList.remove('spz-hidden');
            document.querySelector('.spz-form-prefilled-section').classList.add('spz-hidden');
        }
    }

    if (document.querySelector('#input_language').value == 'English (US)' || document.querySelector('#input_language').value == 'English (UK)') {
        document.querySelector('.jotform-form .form-all .form-section.page-section #sublabel_input_5').textContent = 'Email';
    }
});

function detectVisibleStep(selector = '.jotform-form .form-all .form-section.page-section') {
    // Add observer for all four 'selector' if the display is none then remove the class from body and add to the current visible step
    const targetNodes = document.querySelectorAll(selector);
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function (mutationsList, observer) {
        for (var mutation of mutationsList) {
            if (mutation.type == 'attributes') {
                updateStepClass();
            }
        }
    };
    var observer = new MutationObserver(callback);
    targetNodes.forEach(function (el) {
        observer.observe(el, config);
    });

    // Add unique class to each step
    function addStepClass() {
        var currentStep = 1;
        var steps = document.querySelectorAll(selector);
        steps.forEach(function (step, index) {
            document.querySelector(`${selector}:nth-of-type(${index + 1})`).classList.add(`spz-step-${index + 1}`);
            if (step.style.display != 'none') {
                currentStep = index + 1;
                document.body.classList.add('spz-step-' + currentStep);
            }
        });
        return currentStep;
    }

    // Update class
    function updateStepClass() {
        var steps = document.querySelectorAll(selector);
        steps.forEach(function (step, index) {
            if (step.style.display != 'none') {
                document.body.classList.add('spz-step-' + (index + 1));
            } else {
                document.body.classList.remove('spz-step-' + (index + 1));
            }
        });
    }

    // Initialize 
    waitForElm('.jotform-form .form-all .cont').then(function () {
        addStepClass();
    });
}

function focusFields() {
    //check on change for all once the value is selected in html select add i-filled class to the closest form-sub-label-container
    document.querySelectorAll('.jotform-form .form-all .form-section.page-section .form-dropdown').forEach(function (el) {
        el.addEventListener('change', function () {
            checkError(el);
        });
        el.addEventListener('blur', function () {
            checkError(el);
        });
        el.addEventListener('keypress', function () {
            checkError(el);
        });
        el.addEventListener('keyup', function () {
            checkError(el);
        });
        checkError(el);
    });

    //check validation for input fields as well for blur keypress and keyup
    document.querySelectorAll('.jotform-form .form-all .form-section.page-section .form-textbox').forEach(function (el) {
        el.addEventListener('blur', function () {
            checkError(el);
        });
        el.addEventListener('keypress', function () {
            checkError(el);
        });
        el.addEventListener('keyup', function () {
            checkError(el);
        });
        checkError(el);
    });
}

function checkError(params) {
    if (params.value) {
        params.classList.add('i-filled');
    } else {
        if (params.classList.contains('i-filled')) {
            params.classList.remove('i-filled');
        }
    }
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector)); observer.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });
}

function checkHidden4001() {
    let checkHiddenInput = setInterval(function () {
        if (document.querySelectorAll(`input[name="q288_spz_test_1"]`).length > 0) {
            clearInterval(checkHiddenInput);
            document.querySelector(`input[name="q288_spz_test_1"]`).value = 'variant_4001';
        }
    });
}
