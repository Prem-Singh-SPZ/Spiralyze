
// const getVariantFile = document.createElement('script');
// getVariantFile.src = 'https://res.cloudinary.com/spiralyze/raw/upload/v1678686664/ABCFitnessSolutions/Pardot-Form-Global/Form%20Layout/Form-Layout.js';
// document.head.appendChild(getVariantFile);


const seamlessFS = document.createElement('script');
seamlessFS.src = 'https://res.cloudinary.com/spiralyze/raw/upload/v1678688502/ABCFitnessSolutions/Pardot-Form-Global/lib/seamless.child.min.js';
document.head.appendChild(seamlessFS);

seamlessFS.onload = function () {
    var PERMITTED_DOMAIN = "https://go.abcfitness.com/";

    // Connect to the parent page.
    var toParent = window.seamless.connect();

    // Enable cookie for Safari
    window.seamless.options.requireCookies = true;


    // Receive a message
    toParent.receive(function (data, event) {

        console.log(data);
        return {
            myresponse: "Loaded"
        };
    });


    waitForElm("p.submit").then(function () {
        if (document.querySelector('form#pardot-form').getAttribute('action') == 'https://go.abcfitness.com/l/570002/2023-03-02/v11qsc') {
            document.body.classList.add('custom-spz');
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
            adjustForm();
            document.querySelector("p.submit input").addEventListener('click', function () {
                let isFormUpdate = setInterval(() => {
                    adjustForm();
                }, 100);
                setTimeout(() => {
                    clearInterval(isFormUpdate);
                }, 2000);
            })
        }
    });

    function adjustForm() {
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
                    v
                        .querySelector(".form-field .field-label")
                        .textContent = placeHolderValue;
                    // v.querySelector("input").setAttribute("placeholder", placeHolderValue);
                    v.querySelector("input").addEventListener('focus', () => {
                        v.querySelector(".form-field").classList.add('typing');
                    });
                    v.querySelector("input").addEventListener('blur', () => {
                        if (v.querySelector("input").value) {
                            v.querySelector(".form-field").classList.add('typing');
                        } else {
                            if (v.querySelector(".form-field").classList.contains('typing')) {
                                v.querySelector(".form-field").classList.remove('typing');
                            }
                        }
                    });
                    if (v.querySelector("input").value) {
                        v.querySelector(".form-field").classList.add('typing');
                    } else {
                        if (v.querySelector(".form-field").classList.contains('typing')) {
                            v.querySelector(".form-field").classList.remove('typing');
                        }
                    }
                } else if (
                    v.querySelectorAll("select").length > 0 &&
                    v.querySelectorAll(".field-label").length > 0
                ) {
                    let placeHolderValue = v
                        .querySelector(".form-field .field-label")
                        .textContent.replace(" *", "");
                    v
                        .querySelector(".form-field .field-label")
                        .textContent = placeHolderValue;
                    // v.querySelector(
                    //     'select.select option[selected="selected"]'
                    // ).textContent = placeHolderValue;
                    v.querySelector("select").addEventListener('focus', () => {
                        v.querySelector(".form-field").classList.add('typing');
                    });
                    v.querySelector("select").addEventListener('blur', () => {
                        if (v.querySelector('.country')) {
                            if (v.querySelector(".country select.select").value != '1214035') {
                                v.querySelector(".form-field").classList.add('typing');
                            } else {
                                if (v.querySelector(".form-field").classList.contains('typing')) {
                                    v.querySelector(".form-field").classList.remove('typing');
                                }
                            }
                        }
                        if (v.querySelector('.state')) {
                            if (v.querySelector(".state select.select").value != '1214764') {
                                v.querySelector(".form-field").classList.add('typing');
                            } else {
                                if (v.querySelector(".form-field").classList.contains('typing')) {
                                    v.querySelector(".form-field").classList.remove('typing');
                                }
                            }
                        }
                    });
                    if (v.querySelector('.country')) {
                        if (v.querySelector(".country select.select").value != '1214035') {
                            v.querySelector(".form-field").classList.add('typing');
                        } else {
                            if (v.querySelector(".form-field").classList.contains('typing')) {
                                v.querySelector(".form-field").classList.remove('typing');
                            }
                        }
                    }
                    if (v.querySelector('.state')) {
                        if (v.querySelector(".state select.select").value != '1214764') {
                            v.querySelector(".form-field").classList.add('typing');
                        } else {
                            if (v.querySelector(".form-field").classList.contains('typing')) {
                                v.querySelector(".form-field").classList.remove('typing');
                            }
                        }
                    }
                }
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
            observer.observe(document, {
                attributes: true,
                childList: true,
                subtree: true,
                characterData: true,
            });
        });
    }
}
