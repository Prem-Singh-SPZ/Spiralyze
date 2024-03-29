(function () {
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
    console.log(getCookie('COOKIE_NAME').split(';')[0] == 'true');

    if (getCookie('COOKIE_NAME') && location.href.indexOf('v11qsc') > -1) {
        // console.log('inside main function');
        // console.log(location.href);
        const slickLib = document.createElement('script');
        slickLib.src = 'https://res.cloudinary.com/spiralyze/raw/upload/v1678368768/ABCFitnessSolutions/Pardot-Form-Global/Approach%202%20%28Form%20Builder%29/Form.js';
        document.head.appendChild(slickLib);
    
        waitForElm("p.submit").then(function () {
            if (document.querySelector('form#pardot-form').getAttribute('action') == 'https://go.abcfitness.com/l/570002/2023-03-02/v11qsc') {
                document.body.classList.add('custom-spz');
                if (document.querySelector("#pardot-form > p > span > span").textContent == "*Required") {
                    document.querySelector("#pardot-form > p").style.display = 'none';
                }
                document.querySelector('p.submit').innerHTML = `<button type="submit" accesskey="s" value="Get a Demo" class="spz-submit-btn">Get a Demo</button>`
                document
                    .querySelector("p.submit")
                    .insertAdjacentHTML(
                        "afterend",
                        `<div class="privacy-policy"><p>By completing the form and submitting your information above, you are agreeing to our </a> <a href="/privacy-policy">Privacy Policy.</a></div>`
                    );
                adjustForm();
                document.querySelector("p.submit button").addEventListener('click', function () {
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

            document.querySelector('.country.pd-select select.select option:first-child').textContent = "Country";
            document.querySelector('.state.pd-select select.select option:first-child').textContent = "State/Province";
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
                            if (v.querySelector(".form-field").classList.contains('typing')) {
                                v.querySelector(".form-field").classList.remove('typing');
                            }
                            if (v.querySelector("input").value) {
                                removeTypingAddFilled(v);
                            } else {
                                removeTypingAndFilled(v);
                            }
                        });
                        if (v.querySelector("input").value) {
                            removeTypingAddFilled(v);
                        } else {
                            removeTypingAndFilled(v);
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
                            if (v.querySelector(".form-field").classList.contains('typing')) {
                                v.querySelector(".form-field").classList.remove('typing');
                            }
                            if (v.querySelector('.country')) {
                                if (v.querySelector(".country select.select").value != '1214035') {
                                    removeTypingAddFilled(v);
                                    if (v.querySelector(".country select.select").value == '1214038' || v.querySelector(".country select.select").value == '1214041') {
                                        document.querySelector(".state.pd-select").parentElement.style.display = 'block';
                                    }
                                    else {
                                        document.querySelector(".state.pd-select").parentElement.style.display = 'none';
                                    }
                                } else {
                                    removeTypingAndFilled(v);
                                    document.querySelector(".state.pd-select").parentElement.style.display = 'none';
                                }
                            }
                            if (v.querySelector('.state')) {
                                if (v.querySelector(".state select.select").value != '1214764') {
                                    removeTypingAddFilled(v);
                                } else {
                                    removeTypingAndFilled(v);
                                }
                            }
                        });
                        v.querySelector("select").addEventListener('change', () => {
                            if (v.querySelector('.country')) {
                                if (v.querySelector(".country select.select").value != '1214035') {
                                    removeTypingAddFilled(v);
                                    if (v.querySelector(".country select.select").value == '1214038' || v.querySelector(".country select.select").value == '1214041') {
                                        document.querySelector(".state.pd-select").parentElement.style.display = 'block';
                                    }
                                    else {
                                        document.querySelector(".state.pd-select").parentElement.style.display = 'none';
                                    }
                                } else {
                                    removeTypingAndFilled(v);
                                    document.querySelector(".state.pd-select").parentElement.style.display = 'none';
                                }
                            }
                            if (v.querySelector('.state')) {
                                if (v.querySelector(".state select.select").value != '1214764') {
                                    removeTypingAddFilled(v);
                                } else {
                                    removeTypingAndFilled(v);
                                }
                            }
                        });
                        if (v.querySelector('.country')) {
                            if (v.querySelector(".country select.select").value != '1214035') {
                                removeTypingAddFilled(v);
                                if (v.querySelector(".country select.select").value == '1214038' || v.querySelector(".country select.select").value == '1214041') {
                                    document.querySelector(".state.pd-select").parentElement.style.display = 'block';
                                }
                                else {
                                    document.querySelector(".state.pd-select").parentElement.style.display = 'none';
                                }
                            } else {
                                removeTypingAndFilled(v);
                                document.querySelector(".state.pd-select").parentElement.style.display = 'none';
                            }
                        }
                        if (v.querySelector('.state')) {
                            if (v.querySelector(".state select.select").value != '1214764') {
                                removeTypingAddFilled(v);
                            } else {
                                removeTypingAndFilled(v);
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

    function removeTypingAndFilled(elem) {
        if (elem.querySelector(".form-field").classList.contains('filled')) {
            elem.querySelector(".form-field").classList.remove('filled');
            if (elem.querySelector(".form-field").classList.contains('email')) {
                checkValidEmail();
            }
            else {
                elem.classList.remove('input-filled');
            }
        }
    }

    function removeTypingAddFilled(elem) {
        elem.querySelector(".form-field").classList.add('filled');
        if (elem.querySelector(".form-field").classList.contains('email')) {
            checkValidEmail();
        }
        else {
            elem.classList.add('input-filled');
        }
    }

    function checkValidEmail() {
        let uEmail = document.querySelector('.form-field.email input.text').value;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(uEmail).toLowerCase())) {
            document.querySelector('.form-field.email').parentElement.classList.add('input-filled');
            document.querySelector('.form-field.email').classList.add('valid-email');
        }
        else {
            if (document.querySelector('.form-field.email').parentElement.classList.contains('input-filled')) {
            document.querySelector('.form-field.email').classList.remove('valid-email');
            document.querySelector('.form-field.email').parentElement.classList.remove('input-filled');
            }
        }
    }
})()
    ;