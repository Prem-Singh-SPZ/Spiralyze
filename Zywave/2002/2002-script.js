document.body.classList.add('spz-2002');

//Test code
waitForElm('body .zy-demo-form-section-container form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField[id]').then(function () {
    pageModify();
});

function pageModify() {
    document.querySelector('.zy-homepage-hero-container .zy-homepage-hero-container-inner').insertAdjacentHTML('beforeend', `<div class="spz-hero-section"><div class="hero-title-wrapper"><h1 class="title">Automate insurance sales <br>and retention. Boost revenue. </h1> <p class="subtitle">Find qualified prospects. Send instant quotes. Let clients manage plans from an online portal. Generate benefit booklets, compliance guides and more.</p></div><div class="hero-email-cta"><form class="form-spz" id="mktoForm_1031">
    <div class="hero-get-demo">
        <div class="spz-2002-email">
            <input class="spz-email" type="email" placeholder="Email address">
                <div class="mktoError">
                    <div class="mktoErrorMsg">Must be valid email. <span class="mktoErrorDetail">example@yourdomain.com</span></div>
                </div>
        </div>
            <button type="submit" class="get-demo-cta btn">Get a demo</button>
        </div>
    </form> </div><div class="hero-banner-img"> </div> 
    </div><div class="spz-brands-section"> </div>`);

}

//on focus of .spz-email addClass to .hero-get-demo
waitForElm('.spz-email').then(function (elm) {
    document.querySelectorAll('.spz-email').forEach(element => {
        element.addEventListener('focus', function (event) {
            element.closest('.hero-get-demo').classList.add('i-focused');
        });

        element.addEventListener('blur', function (event) {
            element.closest('.hero-get-demo').classList.remove('i-focused');
        });

        hover(element, "i-hover");

        // On enter key pressed in 'spz-email' field click on 'hero-get-demo-button'
        element.addEventListener('keyup', function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.querySelector('.hero-get-demo-button').click();
            }

            validateEmailField(false);
        });

    });


    // Validate email input present in '.hero-section-CTA' on '.get-demo-cta' click
    document.querySelector('.get-demo-cta').addEventListener('click', function (e) {
        e.preventDefault();
        validateEmailField();
    });
});

// Validate email field
function validateEmailField(redirect = true) {
    // Get email value
    const email = document.querySelector('.hero-section-CTA .form-spz .spz-email');
    // Check if email is valid
    if (!validateEmail(email.value)) {
        // Add class 'input-error' to '.hero-get-demo' on error
        email.closest('.hero-get-demo').classList.add('input-error');
        return false;
    } else {
        setCookieForEmail('userEmailSPZ', email.value);
        email.closest('.hero-get-demo').classList.remove('input-error');
        if (redirect) {
            location.href = "https://www.netskope.com/get-started";
        }
        return true;
    }
}

// Email validation to block email domains like gmail, yahoo, etc.\
function validateEmail(email) {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const disallowDomains = ['gmail', 'yahoo', 'hotmail', 'outlook', 'aol', 'icloud', 'msn', 'live', 'me', 'inbox', 'zoho', 'yandex', 'protonmail', 'gmx', 'mail', 'aol', 'icloud', 'msn', 'live', 'me', 'inbox', 'zoho', 'yandex', 'protonmail', 'gmx', 'mail', 'test', 'sample'];
    const domain = email.split('@')[1];
    if (emailRegex.test(email) && !disallowDomains.includes(domain.split('.')[0])) {
        return true;
    }
    return false;
}

//All click events
window.addEventListener("click", function (e) {
    if (e.target.classList.contains('hero-get-demo-button')) {
        let emailValue = this.document.querySelector('.spz-email').value || this.document.querySelector('.spz-email.mobile').value;
        setCookieForEmail('userEmailSPZ', emailValue);
    }

    if (e.target.classList.contains('v3-reports__reports-report')) {
        if (e.target.querySelector('a.ga__cta')) {
            e.target.querySelector('a.ga__cta').click();
        }
    }
});

//Add hidden fields
function setHiddenFields() {
    if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
        document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#2002_variant');
    }
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

//write a picture tag HTML  


