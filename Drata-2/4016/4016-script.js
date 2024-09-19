const lottieLib = document.createElement('script');
lottieLib.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-player/2.0.4/lottie-player.js';
document.head.appendChild(lottieLib);
let player = document.querySelector("lottie-player");

// Set test class
document.body.classList.add("spz-4016");

waitForElm('.hero-section .hc-title').then(function () {
    loadTest()
});

function setHiddenFields() {
    waitForElm('form.hs-form-private .hs_cro_test_1 .input .hs-input').then(function () {
        let setValue = setInterval(() => {
            if (document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').getAttribute('value') == 'Variant_4016') {
                clearInterval(setValue);
            }
            document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', 'Variant_4016');
        }, 100);
    });
}

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


function loadTest() {
    let loaderAnimJSON;

    if (window.location.href.includes('//try.drata.com/product/soc-2')) {
        loaderAnimJSON = '//res.cloudinary.com/spiralyze/raw/upload/f_auto/drata/4016/Typewriter_Animation.json';
    }

    else if (window.location.href.includes('//try.drata.com/product/iso-27001')) {
        loaderAnimJSON = '//res.cloudinary.com/spiralyze/raw/upload/f_auto/drata/4016/Get_ISO_27001_Compliant.json';
        document.body.classList.add("iso-27001-spz");
    }

    else if (window.location.href.includes('//try.drata.com/product/gdpr')) {
        loaderAnimJSON = '//res.cloudinary.com/spiralyze/raw/upload/f_auto/drata/4016/Get_GDPR_Compliant.json';
    }

    else if (window.location.href.includes('//try.drata.com/product/hipaa')) {
        loaderAnimJSON = '//res.cloudinary.com/spiralyze/raw/upload/f_auto/drata/4016/Get_HIPAA_Compliant.json';
    }

    if (document.querySelectorAll('lottie-player').length == 0) {
        document.querySelector('body .hero-section .hc-title').outerHTML = `<div class="loader-wrapper-spz"><lottie-player class="loader-lot-spz" autoplay
         loop src="${loaderAnimJSON}">
        </lottie-player></div>`;
        player = document.querySelector("lottie-player");

        player.addEventListener('play', (event) => {
            event.target.shadowRoot.querySelector('svg').style.transform = '';
        });
    }

    waitForElm('lottie-player').then(function () {
        player.addEventListener("ready", () => {
            player.play();
        });
    });

    setHiddenFields();

}