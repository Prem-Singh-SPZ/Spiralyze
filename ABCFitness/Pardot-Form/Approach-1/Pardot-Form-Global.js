/******/ (function () { // webpackBootstrap
    var __webpack_exports__ = {};
    function getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) return null;
        }
        else {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) {
                end = dc.length;
            }
        }
        // because unescape has been deprecated, replaced with decodeURI
        //return unescape(dc.substring(begin + prefix.length, end));
        return decodeURI(dc.substring(begin + prefix.length, end));
    }

    getCookie('COOKIE_NAME');
    console.log(getCookie('COOKIE_NAME'));

    if (getCookie('COOKIE_NAME') && location.href == 'https://go.abcfitness.com/l/570002/2023-03-02/v11qsc?') {
        // console.log('inside main function');
        console.log(location.href); waitForElm("p.submit").then(function () {
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
    /******/
})()
    ;