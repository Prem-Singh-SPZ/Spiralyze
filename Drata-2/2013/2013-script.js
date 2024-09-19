var css_2013 = `
.spz-drata-prefill-2013 .css-fvfd6o-Modal-styledReactPlayer video { pointer-events: none; }
.spz-drata-2013 main section:first-child [data-csk-entry-field="actions"] a[data-csk-entry-type="link"] { display: none; }
.spz-drata-2013 .spz-dt-email .spz-dt-email-wrap { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; }
.spz-drata-2013 .spz-dt-email .spz-dt-email-wrap .spz-dt-email-field-wrap { position: relative; }
.spz-drata-2013 .spz-dt-email .spz-dt-email-label { position: absolute; top: 20px; left: 20px; color: #697586; /* font-family: '__Inter_aaf875','__Inter_Fallback_aaf875'; */ font-size: 16px; font-style: normal; font-weight: 500; line-height: 24px; pointer-events: none; cursor: text; -webkit-transition: all .2s ease-in-out; -moz-transition: all .2s ease-in-out; -o-transition: all .2s ease-in-out; -ms-transition: all .2s ease-in-out; transition: all .2s ease-in-out; }
.spz-drata-2013 .spz-dt-email .spz-dt-email-submit { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; text-decoration: none; height: 64px; color: #FFF; /*font-family: '__Inter_aaf875','__Inter_Fallback_aaf875';*/ font-size: 16px; font-style: normal; font-weight: 600; line-height: 24px; background-color: #0C131A; padding: 10px 20px; border-radius: 0 8px 8px 0; -webkit-transition: all .2s ease-in-out; -moz-transition: all .2s ease-in-out; -o-transition: all .2s ease-in-out; -ms-transition: all .2s ease-in-out; transition: all .2s ease-in-out; }
.spz-drata-2013 .spz-dt-email .spz-dt-email-submit span { padding: 0 12px; }
.spz-drata-2013 .spz-dt-email .spz-dt-email-submit svg { margin-left: 12px; }

.spz-drata-2013 .spz-dt-email .spz-dt-email-field { display: block; height: 64px; min-width: 366px; margin: 0; padding: 20px 12px; border-radius: 8px 0 0 8px; border: 1px solid #DDE3EB; background: #FFFFFF; color: #0C131A; /*font-family: '__Inter_aaf875','__Inter_Fallback_aaf875';*/ font-size: 16px; font-style: normal; font-weight: 500; line-height: 24px; outline: none !important; -webkit-transition: all .2s ease-in-out; -moz-transition: all .2s ease-in-out; -o-transition: all .2s ease-in-out; -ms-transition: all .2s ease-in-out; transition: all .2s ease-in-out; }

/* Hover */

/* Focus */
.spz-drata-2013 .spz-dt-email .focus .spz-dt-email-field { border-color: #0C131A; }
.spz-drata-2013 .spz-dt-email .focus .spz-dt-email-label { color: #293642; font-size: 12px; line-height: 18px; top: 4px; left: 12px; }

/* Filled */
.spz-drata-2013 .spz-dt-email .filled .spz-dt-email-field { border-color: #0C131A; }
.spz-drata-2013 .spz-dt-email .filled .spz-dt-email-label { font-size: 12px; line-height: 18px; top: 4px; left: 12px; }

@media(min-width: 641px) {
    .spz-drata-2013 .spz-dt-email .spz-dt-email-field { border-right: 0; }
    /* Hover */
    .spz-drata-2013 .spz-dt-email .spz-dt-email-wrap:hover .spz-dt-email-field { border-color: #96A1B2; }
    .spz-drata-2013 .spz-dt-email .spz-dt-email-wrap:hover .spz-dt-email-submit { background-color: #293642; }
}
@media(max-width: 640.98px) {
    .spz-drata-2013 .spz-dt-email .spz-dt-email-submit:hover { background-color: #293642; }
    .spz-drata-2013 .spz-dt-email .spz-dt-email-field:hover { border-color: #96A1B2; }
}
@media(max-width: 640.98px) {
    .spz-drata-2013 .spz-dt-email { padding: 0; }
    .spz-drata-2013 .spz-dt-email .spz-dt-email-submit { width: 100%; border-radius: 12px; margin-top: 16px; height: 68px; }
    .spz-drata-2013 .spz-dt-email .spz-dt-email-submit svg { position: relative; left: -11px; width: 25px; height: 25px; margin-right: -5px; }
    .spz-drata-2013 .spz-dt-email .spz-dt-email-wrap .spz-dt-email-field-wrap { width: 100%; }
    .spz-drata-2013 .spz-dt-email .spz-dt-email-field { width: 100%; border-radius: 8px; min-width: 100%; }
    .spz-drata-2013 .spz-dt-email .spz-dt-email-label { left: 12px; }
}
`;
head_2013 = document.head || document.getElementsByTagName('head')[0],
    style_2013 = document.createElement('style');
head_2013.appendChild(style_2013);
style_2013.type = 'text/css';
style_2013.appendChild(document.createTextNode(css_2013));

history.pushState = (function (f) {
    return function pushState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };
})(history.pushState);
history.replaceState = (function (f) {
    return function replaceState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };
})(history.replaceState);
window.addEventListener('popstate', function () {
    window.dispatchEvent(new Event('locationchange'));
});
window.addEventListener('locationchange', function () {
    url = location.href;
    urlCheck(url);
});
var url = location.href;
urlCheck(url);

function urlCheck(url) {
    var targetTestURL = 'https://drata.com/';

    if (isSameUrl(url, targetTestURL, true)) {
        load2013();
    }
    else if (window.location.pathname.indexOf("/demo") > -1) {
        loadfilled2013();
    }
    else {
        removeTest();
    }
}

function removeTest() {
    setTimeout(() => {
        document.body.classList.remove("spz-drata-2013");
        if (document.querySelector('.spz-dt-email')) {
            document.querySelector('.spz-dt-email').remove();
        }
    }, 2000);
    waitForElm('.spz-dt-email').then(function () {
        document.querySelector('.spz-dt-email').remove();
    });
}

function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#") ?
        currentUrl.slice(0, currentUrl.indexOf("#")) :
        currentUrl;
    specifiedUrl = specifiedUrl.includes("#") ?
        specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
        specifiedUrl;
    if (includeQueryParams)
        currentUrl = currentUrl.includes("?") ?
            currentUrl.slice(0, currentUrl.indexOf("?")) :
            currentUrl;
    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
        return true;
    return false;
}

function load2013() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-drata-2013')) {
        bodyEle.classList.add('spz-drata-2013');
    }

    let emailHtml = `
        <div class="spz-dt-email">
            <div class="spz-dt-email-wrap">
                <div class="spz-dt-email-field-wrap">
                    <label class="spz-dt-email-label">Work Email</label>
                    <input type="email" class="spz-dt-email-field">
                </div>
                <a href="/demo" class="spz-dt-email-submit"><span>Get Started</span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 4L10 8L6 12" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg></a>
            </div>
        </div>
    `;
    let timerCount = 0;
    let checkDemoCta = setInterval(function () {
        if (document.querySelectorAll('main section:first-child [data-csk-entry-field="actions"] a').length > 0) {
            if (timerCount >= 100) {
                clearInterval(checkDemoCta);
            }
            if (document.querySelectorAll('main section [data-csk-entry-field="actions"] .spz-dt-email').length == 0) {
                document.querySelector('main section [data-csk-entry-field="actions"] a').insertAdjacentHTML('beforebegin', emailHtml);
                emailStates();
                submitEventHandle();
            }
        }
        timerCount++;
    }, 100);
}

function loadfilled2013() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-drata-prefill-2013')) {
        bodyEle.classList.add('spz-drata-prefill-2013');
    }

    waitForElm('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video').then(function () {
        if (document.querySelector('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video')) {
            document.querySelector('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video').setAttribute('playsinline', '');
        }
    });

    let autoFillEmail = window.localStorage.getItem('spz-drata-email');
    let isError = window.localStorage.getItem('spz-drata-email-validation');
    setTimeout(function () {
        if (autoFillEmail) {
            let checkEmailField = setInterval(function () {
                if (document.querySelectorAll('[class*="Modal-modalContentContainer"] form input[type="email"]').length == 1) {
                    clearInterval(checkEmailField);
                    let emailField = document.querySelector('[class*="Modal-modalContentContainer"] form input[type="email"]');
                    emailField.value = autoFillEmail;
                    setTimeout(function () {
                        emailField.focus();
                        emailField.blur();
                    }, 500);
                    // Set hidden field value
                    if (document.querySelectorAll('[name="cro_test_2"]').length > 0) {
                        document.querySelector('[name="cro_test_2"]').value = 'Variant_2013';
                    }
                }
            });
        }
    }, 1500);
}

function submitEventHandle() {
    let checkSubmit = setInterval(function () {
        if (document.querySelectorAll('.spz-dt-email-submit').length > 0) {
            clearInterval(checkSubmit);
            let emailField = document.querySelector('.spz-dt-email-field');
            emailField.addEventListener('keyup', function (e) {
                if (e.key === 'Enter') {
                    submitBtn.click();
                }
            });
            let submitBtn = document.querySelector('.spz-dt-email-submit');
            submitBtn.addEventListener('click', function (e) {
                e.preventDefault();
                let submitUrl = this.getAttribute('href');
                let emailValue = '';
                let $this = this;
                if (emailField.value.length > 0) {
                    emailValue = emailField.value;
                    let emailValid = validateEmail(emailValue);
                    if (emailValid) {
                        window.localStorage.removeItem('spz-drata-email-validation');
                    } else {
                        window.localStorage.setItem('spz-drata-email-validation', 'error');
                        emailField.parentNode.classList.add('error');
                    }
                } else {
                    window.localStorage.setItem('spz-drata-email-validation', 'error');
                    emailField.parentNode.classList.add('error');
                }
                window.localStorage.setItem('spz-drata-email', emailValue);
                $this.closest('.spz-dt-email').parentNode.querySelector('a[data-csk-entry-type="link"]').click();
                // window.location.href = submitUrl;
            });
        }
    });
}

function validateEmail(email) {
    var filter = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
    return String(email).search(filter) != -1;
}

function emailStates() {
    let checkInput = setInterval(function () {
        if (document.querySelectorAll('.spz-dt-email-field').length > 0) {
            clearInterval(checkInput);
            let inputField = document.querySelector('.spz-dt-email-field');

            inputField.addEventListener('focus', function () {
                let $this = this;
                this.parentNode.classList.add('focus');
            });

            inputField.addEventListener('blur', function () {
                let $this = this;
                this.parentNode.classList.remove('focus');
                if ($this.value.length > 0) {
                    this.parentNode.classList.add('filled');
                } else {
                    this.parentNode.classList.remove('filled');
                }
            });
        }
    });
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}