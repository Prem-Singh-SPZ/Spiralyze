document.body.classList.add('spz-2002');

//Test code
waitForElm('body .zy-demo-form-section-container form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField[id]').then(function () {
    pageModify();
});

function pageModify() {
    document.querySelector('.zy-homepage-hero-container .zy-homepage-hero-container-inner').insertAdjacentHTML('beforeend',``);

}

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
