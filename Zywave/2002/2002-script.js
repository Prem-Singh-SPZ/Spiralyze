document.body.classList.add('spz-2002');

document.head.insertAdjacentHTML('beforeend', `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/2002/Triangle_SVG.svg" as="image">`);

//Test code
waitForElm('body .zy-homepage-hero-container .zy-hero-line').then(function () {
    pageModify();
});

function pageModify() {
    if (document.querySelectorAll('.zy-homepage-hero-container .zy-homepage-hero-container-inner .spz-hero-section').length == 0) {
        document.querySelector('.zy-homepage-hero-container .zy-homepage-hero-container-inner').insertAdjacentHTML('beforeend', `<div class="spz-hero-section">
        <div class="hero-title-wrapper">
         <h1 class="h-title">Streamline operations and <br>maximize revenue.</h1>
         <p class="h-subtitle">Improve efficiency of prospecting and selling. Make smarter decisions with data-driven insights. Increase productivity and achieve profitable growth. </p>
        </div>
        <div class="hero-email-cta">
         <form class="form-spz" id="">
          <div class="hero-get-demo">
           <div class="spz-2002-email">
            <input class="spz-email" name="email" type="email" placeholder="Email address">
            <div class="mktoError">
             <div class="mktoErrorMsg">Must be a valid email. <span class="mktoErrorDetail">example@yourdomain.com</span>
             </div>
            </div>
           </div>
           <button type="submit" class="get-demo-cta btn">Get a demo</button>
          </div>
         </form>
        </div>
        <div class="hero-banner-img">
         <picture>
          <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2002/interface_desktop.webp">
          <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2002/interface_tablet.webp">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2002/mobile_interface.webp" alt="Qualified Prospects" class="hb-img">
         </picture>
        </div>
       </div>`);

        document.querySelector('.zy-homepage-hero-container').insertAdjacentHTML('afterend', `<div class="spz-brands-section">
        <div class="brand-section-wrapper">
         <h6 class="bs-title">Join 18,000+ <br>insurers, agencies, and service providers using Zywave.</h6>
         <picture>
          <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2002/frame_1000003341.webp">
          <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2002/frame_1000003562.webp">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2002/frame_1000003561.webp" alt="Brand Logos" class="bs-logos">
         </picture>
        </div>
       </div>`);
    }
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
                document.querySelector('.get-demo-cta').click();
            }

            validateEmailField();
        });
    });


    // Validate email input present in '.hero-section-CTA' on '.get-demo-cta' click
    document.querySelector('.get-demo-cta').addEventListener('click', function (e) {
        e.preventDefault();
        validateEmailField();
    });
});


function hover(element, className) {
    element.addEventListener('mouseenter', e => element.closest('.hero-get-demo').classList.add(className))
    element.addEventListener('mouseleave', e => element.closest('.hero-get-demo').classList.remove(className))
}

// Validate email field
function validateEmailField() {
    // Get email value
    const email = document.querySelector('.spz-hero-section .form-spz .spz-email');
    // Check if email is valid
    if (!validateEmail(email.value)) {
        // Add class 'input-error' to '.hero-get-demo' on error
        email.closest('.hero-get-demo').classList.add('input-error');
        return false;
    } else {
        email.closest('.hero-get-demo').classList.remove('input-error');
        return true;
    }
}

// Email validation to block email domains like gmail, yahoo, etc.\
function validateEmail(email) {
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegex.test(email)) {
        return true;
    }
    return false;
}

//All click events
window.addEventListener("click", function (e) {
    if (e.target.classList.contains('get-demo-cta')) {
        let emailValue = this.document.querySelector('.spz-email').value;

        if (validateEmailField()) {
            document.querySelector('.zy-header-bottom-inner .zy-header-bottom-demo>a').click();
            document.querySelector('.zy-demo-form-section-container .zy-marketo-form-container input[type=email]').value = emailValue;
            document.querySelector('.zy-demo-form-section-container .zy-marketo-form-container form').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                document.querySelector('.zy-demo-form-section-container .zy-marketo-form-container input[type=email]').closest('.mktoFieldWrap ').classList.add('filled');
            }, 500);
        }
    }
});

//Add hidden fields
function setHiddenFields() {
    if (document.querySelector('.mktoFormRow [name="cR02"]')) {
        document.querySelector('.mktoFormRow [name="cR02"]').setAttribute('value', '#2002_variant');
    }
}

waitForElm('.zy-demo-form-section-container .zy-marketo-form-container .mktoForm input[name="cR02"]').then(function (elm) {
    setHiddenFields();
});

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