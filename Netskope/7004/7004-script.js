let bodyLoaded = setInterval(function () {
    const body = document.querySelector("body");
    if (body) {
        clearInterval(bodyLoaded);

        var intr = setInterval(function () {
            if (
                document.querySelector(".landing-page-v3__container-inner") &&
                !document.querySelector("body").classList.contains("spz-7004")
            ) {
                clearInterval(intr);
                document.body.classList.add("spz-7004");
                code_inject();
            }
        }, 100);

        function code_inject() {
            var is_opera = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
            var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
            var is_chrome = !!window.chrome && !is_opera && !is_Edge;
            var is_firefox = typeof window.InstallTrigger !== "undefined";
            var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            if (is_chrome) {
                document.body.classList.add("chrome");
            } else if (is_safari) {
                document.body.classList.add("safari");
            } else if (is_firefox) {
                document.body.classList.add("firefox");
            }

            // document.querySelector(".landing-page-v3__content-container .plus-orange").insertAdjacentHTML(
            //         "afterend",
            //         '<div class="spz-gartner-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/netskope/7001/grtner_wrapper_1.svg" alt="Gartner Logo"></div>'
            //     );

            if (document.querySelector(".landing-page-v3__content-container .plus-orange img")) {
                document.querySelector(".landing-page-v3__content-container .plus-orange img").src = '//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/netskope/7004/plus_green.svg';
            }

            const node = document.querySelector(".landing-page-v3__form-image").cloneNode(true);
            document.querySelector(".landing-page-v3__title").after(node);

            document.querySelector(".landing-page-v3__form-container .landing-page-v3__form-content").insertAdjacentHTML(
                "afterend",
                `<div class="spz-form-logos">
                    <div class="credential-logos">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/netskope/7004/cloud100_4.svg" alt="Cloud 100-2023" title="Cloud 100-2023" class="credential-logo-img"/>
                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/netskope/7004/tmcnet_6.svg" alt="Excellence Award-2022" title="Excellence Award-2022" class="credential-logo-img"/>
                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/netskope/7004/crn_cloud100.svg" alt="CRN Award-2022" title="CRN Award-2022" class="credential-logo-img">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/netskope/7004/forbs100_3.svg" alt="Globle Infosec Award-2022" title="Globle Infosec Award-2022" class="credential-logo-img"/>
                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/netskope/7004/cloud_4.svg" alt="Forbes 2022" title="Forbes 2022" class="credential-logo-img">
                    </div>
                </div>`);

            const formInt = setInterval(() => {
                if (document.querySelector("form #FirstName")) {
                    clearInterval(formInt);
                    document.querySelector("#FirstName").closest(".mktoFormRow").classList.add("spz-field", "spz-field-fname");
                    document.querySelector("#LastName").closest(".mktoFormRow").classList.add("spz-field", "spz-field-lname");
                    document.querySelector("#Email").closest(".mktoFormRow").classList.add("spz-field", "spz-field-email");
                    document.querySelector("#Company").closest(".mktoFormRow").classList.add("spz-field", "spz-field-company");
                    document.querySelector("#Title").closest(".mktoFormRow").classList.add("spz-field", "spz-field-title");
                    document.querySelector("#Phone").closest(".mktoFormRow").classList.add("spz-field", "spz-field-phone");
                    document.querySelector("#Country").closest(".mktoFormRow").classList.add("spz-field", "spz-field-country");

                    // document.querySelector("form .form-heading").closest(".mktoFormRow").classList.add("spz-hide");
                    document
                        .querySelector(".mktoPlaceholderConsent_to_Processing__c")
                        ?.closest(".mktoFormRow")
                        .classList.add("spz-field-privacy", "spz-hidden");
                    document
                        .querySelector(".mktoPlaceholderHtmlText_2022-06-22T14")
                        ?.closest(".mktoFormRow")
                        .classList.add("spz-field-netinfo", "spz-hidden");
                    document.querySelector(".spz-field-email").before(document.querySelector(".spz-field-fname"));
                    document.querySelector(".spz-field-email").before(document.querySelector(".spz-field-lname"));

                    // if html [lang="en-US"]
                    if (document.querySelector("html").getAttribute("lang") == "en-US") {
                        document.querySelector("#LblFirstName").textContent = "First Name";
                        document.querySelector("#LblLastName").textContent = "Last Name";
                        document.querySelector("#LblEmail").textContent = "Business Email";
                        document.querySelector("#LblCompany").textContent = "Company";
                        document.querySelector("#LblTitle").textContent = "Job Title";
                        document.querySelector("#LblPhone").textContent = "Phone";
                        document.querySelector("#LblCountry").textContent = "Country";
                    } else {
                        // Other languages
                        // Get the text from '#Country option' and set it to '#LblCountry'
                        let countryLbl = document.querySelector("#Country option:first-child").textContent;
                        document.querySelector("#LblCountry").textContent = countryLbl;
                    }

                    // Disable option in 'Country' field where value is null
                    let countryOpt = document.querySelector("#Country option:first-child");
                    if (countryOpt.value == "" || countryOpt.value == null) {
                        countryOpt.setAttribute('disabled', 'disabled');
                        countryOpt.setAttribute('style', 'color: #ccc');
                    }

                    document.querySelector(".spz-7004 form.mktoForm .mktoFormRow.spz-field.spz-field-title").classList.add("spz-hidden");
                    document.querySelector(".spz-7004 form.mktoForm .mktoFormRow.spz-field.spz-field-phone").classList.add("spz-hidden");
                    document.querySelector(".spz-7004 form.mktoForm .mktoFormRow.spz-field.spz-field-country").classList.add("spz-hidden");

                    let allInputs = document.querySelectorAll(".spz-field .mktoField");
                    var eventfocus = new Event("focus");
                    var eventblur = new Event("blur");
                    allInputs.forEach(function (inp) {
                        inp.addEventListener("blur", function () {
                            inp.dispatchEvent(eventfocus);
                        });
                    });

                    document.addEventListener("visibilitychange", (event) => {
                        if (document.activeElement.tagName == "A") {
                            document.activeElement.blur();
                        }
                    });

                    setHiddenFields();
                }
            }, 100);


            waitForElm("html[lang='en-US'] form .mktoButtonRow button.mktoButton").then(function () {
                document.querySelector("form .mktoButtonRow button.mktoButton").textContent = "Instant access";
                setTimeout(() => {
                    document.querySelector("form .mktoButtonRow button.mktoButton").textContent = "Instant access";
                }, 100);
            });

            waitForElm("html[lang='en-US'] .kerrytown .landing-page-v3__form-content .form-heading").then(function () {
                setTimeout(() => {
                    document.querySelector(".kerrytown .landing-page-v3__form-content .form-heading").innerHTML = `Get <span> Gartner </span> report`;
                }, 100);
            });

            setTimeout(() => {
                document.querySelector("body").classList.add("variant-loaded");

                // Remove p tags which are empty or contains only '&nbsp;'
                document.querySelectorAll(".landing-page-v3__content p:last-child").forEach((p) => {
                    if (p.textContent.trim() == "" || p.textContent.trim() == "&nbsp;") {
                        p.remove();
                    }
                });
            }, 4000);

            // form state
            var selector = "body form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField";
            var eventList = ["blur", "focusout", "keyup"];
            for (s_event of eventList) {
                document.addEventListener(s_event, function (event) {
                    if (event.target.matches(selector)) {
                        if (event.target.value == null || event.target.value == "") {
                            event.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.remove("filled", "active", "labActive");
                        } else {
                            event.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.add("filled", "active");
                            checkValidFields();
                        }
                    }
                });
            }
        }
    }
});

function checkValidFields() {
    let validFields = document.querySelectorAll(".mktoFormCol:not(.spz-hidden) .mktoRequiredField.filled").length;
    if (validFields >= 4) {
        document.querySelectorAll(".spz-hidden").forEach(function (elem) {
            elem.classList.remove("spz-hidden");
        });
        if (document.querySelector(".gated-content__form.js-gated-form")) {
            document.querySelector(".gated-content__form.js-gated-form").classList.add("spz-full-form");
        }
    }
}

function waitForElm(selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
}

function setHiddenFields() {
    // waitForElm('.mktoFormRow [type="hidden"]').then(function () {
        const field_int = setInterval(function () {
            if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
                if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute("value") == "#7004_spz_variant") {
                    clearInterval(field_int);
                }
                document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute("value", "#7004_spz_variant");
            } else {
                document.querySelector('.landing-page-v3__form .mktoForm').insertAdjacentHTML('beforeend', '<input type="hidden" name="utm_location__c" value="#7004_spz_variant">');
                clearInterval(field_int);
            }
        }, 100);
    // });
}