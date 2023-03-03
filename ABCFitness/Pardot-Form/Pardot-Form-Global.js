console.warn("Pardot Form");
waitForElm("p.submit").then(function () {
    document.querySelector("p.submit input").setAttribute("value", "Get a Demo");
    if (document.querySelector("#pardot-form > p > span > span").textContent == "*Required") {
        document.querySelector("#pardot-form > p").style.display = 'none';
    }
    document
        .querySelector("p.submit")
        .insertAdjacentHTML(
            "afterend",
            `<div class="privacy-policy"><p>By completing the form and submitting your information above, you are agreeing to our </a> <a href="/privacy-policy">Privacy Policy.</a></div>`
        );
    document
        .querySelectorAll(".form-container .form-field-item")
        .forEach(function (v, i) {
            if (
                v.querySelectorAll("input").length > 0 &&
                v.querySelectorAll(".field-label").length > 0
            ) {
                let placeHolderValue = v
                    .querySelector(".form-field .field-label")
                    .textContent.replace(" *", "");
                v.querySelector("input").setAttribute("placeholder", placeHolderValue);
            } else if (
                v.querySelectorAll("select").length > 0 &&
                v.querySelectorAll(".field-label").length > 0
            ) {
                let placeHolderValue = v
                    .querySelector(".form-field .field-label")
                    .textContent.replace(" *", "");
                v.querySelector(
                    'select.select option[selected="selected"]'
                ).textContent = placeHolderValue;
            }
        });
});

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
