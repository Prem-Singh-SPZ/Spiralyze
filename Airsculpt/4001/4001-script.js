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

    waitForElm('.jotform-form .form-all .cont').then(function () {
        if (document.querySelectorAll(".spz_title_wrap").length == 0) {
            document.querySelector('.jotform-form .form-all .cont').insertAdjacentHTML('beforebegin', '<div class="spz_header_wrap"></div>');
            document.querySelector('.spz_header_wrap').insertAdjacentElement('beforeend', document.querySelector('.jotform-form .form-all .cont'));
            document.querySelector('.spz_header_wrap .cont').insertAdjacentHTML('afterbegin', '<div class="spz_title_wrap"><img src="//res.cloudinary.com/spiralyze/image/upload/v1730814779/airsculpt/4001/airsculpt_logosvg.svg" alt="Logo" class="spz-logo"></div>');

            document.querySelector('.jotform-form .form-all').setAttribute('id', 'spz-form');

            //check if current url has some query params
            if (window.location.search) {
                const urlParams = new URLSearchParams(window.location.search);
                const myParam = urlParams.get('email');
                if (myParam) {
                }
            }
            document.querySelector('.jotform-form .form-all .form-section.page-section').insertAdjacentHTML('afterbegin', '<div class="spz_form_title_wrap"><div class="spz_form_title">Get Started</div><div class="spz_form_desc">Get your virtual consultation and pricing in 24-48 hours by providing us a few details.</div></div>');

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

            focusFields();
        }

        checkHidden4001();
    });
}

function focusFields() {
    //check on change for all once the value is selected in html select add i-filled class to the closest form-sub-label-container
    document.querySelectorAll('.jotform-form .form-all .form-section.page-section .form-dropdown').forEach(function (el) {
        el.addEventListener('change', function () {
            if (this.value) {
                this.classList.add('i-filled');
            } else {
                if (this.classList.contains('i-filled')) {
                    this.classList.remove('i-filled');
                }
            }
        });
        el.addEventListener('blur', function () {
            if (this.value) {
                this.classList.add('i-filled');
            } else {
                if (this.classList.contains('i-filled')) {
                    this.classList.remove('i-filled');
                }
            }
        });
        el.addEventListener('keypress', function () {
            if (this.value) {
                this.classList.add('i-filled');
            } else {
                if (this.classList.contains('i-filled')) {
                    this.classList.remove('i-filled');
                }
            }
        });
        el.addEventListener('keyup', function () {
            if (this.value) {
                this.classList.add('i-filled');
            } else {
                if (this.classList.contains('i-filled')) {
                    this.classList.remove('i-filled');
                }
            }
        });
    });

    //check validation for input fields as well for blur keypress and keyup
    document.querySelectorAll('.jotform-form .form-all .form-section.page-section .form-textbox').forEach(function (el) {
        el.addEventListener('blur', function () {
            if (this.value) {
                this.classList.add('i-filled');
            } else {
                if (this.classList.contains('i-filled')) {
                    this.classList.remove('i-filled');
                }
            }
        });
        el.addEventListener('keypress', function () {
            if (this.value) {
                this.classList.add('i-filled');
            } else {
                if (this.classList.contains('i-filled')) {
                    this.classList.remove('i-filled');
                }
            }
        });
        el.addEventListener('keyup', function () {
            if (this.value) {
                this.classList.add('i-filled');
            } else {
                if (this.classList.contains('i-filled')) {
                    this.classList.remove('i-filled');
                }
            }
        });
    });
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
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function checkHidden4001() {
    let checkHiddenInput = setInterval(function () {
        if (document.querySelectorAll("#SPZ_test").length > 0) {
            clearInterval(checkHiddenInput);
            document.querySelector("#SPZ_test").value = 'variant1_3001';
        }
    });
}