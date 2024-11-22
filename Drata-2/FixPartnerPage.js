//append css in head
let css = `
body .hero-section-15001 .hero-right-section .form-wrapper-spz{display:none;}
body .hero-section-15001 .hero-right-section {margin-top: 45px;display: flex;
    align-items: center;
    justify-content: center;
}
    body .hero-section-15001 .hero-right-section .msg-wrapper-spz{    display: flex;
    flex-direction: column;
    align-items: center;}
body .hero-section-15001 .hero-right-section .msg-wrapper-spz .msg-copy{
    color:#0c131a;
    font-family: Inter,sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: 36px;
    margin-bottom: 16px;}
body .hero-section-15001 .hero-right-section .msg-wrapper-spz .msg-cta{
       -webkit-appearance: none;
    background: #0c131a;
    border: 2px solid #0c131a;
    border-radius: 12px;
    -webkit-border-radius: 12px;
    color: #fff;
    cursor: pointer;
    font-family: Inter,sans-serif;
    font-size: 16px;
    font-weight: 600;
    height: 56px;
    letter-spacing: 0;
    line-height: 24px;
    outline: none;
    padding: 16px  30px;
    position: relative;
    text-align: center;
    transition-duration: .1s;
    width: 136px;
    display: flex;
    align-items: center;
    justify-content: center;
}
    body .hero-section-15001 .hero-right-section .msg-wrapper-spz .msg-cta:hover{
    background: #293642;
    border: 2px solid #293642;
    color: #fff;
}
      body .hero-section-15001 .hero-right-section .msg-wrapper-spz .msg-cta:active{
       background: var(--neutral-700,#293642);
    border: 2px solid var(--neutral-500,#697586);
    color: #fff;
}
    
    @media screen and (max-width: 1280px) {
    body .hero-section-15001 .hero-right-section .msg-wrapper-spz{
        align-items: flex-start;
    }
    body .hero-section-15001 .hero-container {
        justify-content: flex-start;
    }
    body .hero-section-15001 .hero-right-section {
        margin-top: 0;
        position: relative;
        width: auto;
    }
}
    @media (max-width: 767.98px) {
    body .hero-section-15001 .hero-right-section .msg-wrapper-spz .msg-cta{
        width: 100%;
    }
}
`
let head = document.head || document.getElementsByTagName('head')[0];
let style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
    style.styleSheet.cssText = css;
}
else {
    style.appendChild(document.createTextNode(css));
}
head.appendChild(style);

let bodyInterval = setInterval(() => {
    if (document.querySelector('body') && location.href.includes('deel')) {
        clearInterval(bodyInterval);
        waitForElm('body .hero-section-15001 .hero-right-section').then(() => {
            //add null check for the element
            if (document.querySelectorAll('body .hero-section-15001 .hero-right-section .msg-wrapper-spz').length == 0) {
                document.querySelector('body .hero-section-15001 .hero-right-section').insertAdjacentHTML('beforeend', `<div class="msg-wrapper-spz"><p class="msg-copy">log in and make the connection</p><a href="https://app.drata.com/" class="hs-button msg-cta" target="_blank">Login</a></div>`);
            }
        });
    }
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
        observer.observe(document, {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true,
        });
    });
}