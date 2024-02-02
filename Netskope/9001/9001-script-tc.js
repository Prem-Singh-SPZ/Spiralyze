document.body.classList.add('spz-9001-tc');

//Form internal code
waitForElm('body form.mktoForm .mktoFormCol .mktoFieldWrap').then(function () {
    formModify();
    debugger;
});

function formModify() {
    waitForElm('.mktoFormRow [name="Company"]').then(function () {
        MktoForms2.whenReady(function (form) {
            // Add hidden fields
            setHiddenFields();
            debugger;
        });
    });
};

//Add hidden fields
function setHiddenFields() {
    debugger;
    if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
        document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#9001_spz_control');
    } else if (!document.querySelector('#mktoForm_1169 .mktoFormRow [name="utm_location__c"]')) {
        // If [name="utm_location__c"] doesn't exist, add hidden field
        debugger;
        document.querySelector('#mktoForm_1169').insertAdjacentHTML('beforeend', '<input type="hidden" name="utm_location__c" value="#9001_spz_control">');
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