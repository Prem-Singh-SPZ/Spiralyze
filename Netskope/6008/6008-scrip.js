let bodyLoaded = setInterval(function () {
    const body = document.querySelector("body");
    if (body) {
        clearInterval(bodyLoaded);

        if (!body.classList.contains("netskope_6008")) {
            body.classList.add("netskope_6008");

            waitForElm(".netskope_6008 #wrapper .v3.landing-page-v3__container").then(function () {
                var sub_heading = document.querySelector(
                    ".netskope_6008 #wrapper .v3.landing-page-v3__container .landing-page-v3__subheadline"
                ).innerHTML;

                // Hero Fom Content
                document
                    .querySelector(".netskope_6008 #wrapper .v3.landing-page-v3__container .landing-page-v3__form")
                    .insertAdjacentHTML(
                        "afterbegin",
                        `<div class="hero_left">
            <h2 class="form-content-heading">Highest<br> in Execution. Furthest<br> in <span>Vision</span>.</h2>
            ` +
                        sub_heading +
                        `
            <picture class="hero-form-img">
              <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1701081122/netskope/6001/hero-desktop.svg">
              <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1701081123/netskope/6001/hero-tablet.svg">
              <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1701081122/netskope/6001/hero-mobile.svg">
              <img src="//res.cloudinary.com/spiralyze/image/upload/v1701081122/netskope/6001/hero-desktop.svg" alt="Highest in Execution. Furthest in Vision." title="Highest in Execution. Furthest in Vision.">
            </picture>
          </div>`
                    );

                document
                    .querySelector(".netskope_6008 #wrapper .landing-page-v3__form .landing-page-v3__form-content")
                    .insertAdjacentHTML(
                        "afterend",
                        `<h2 class="form-content-heading">Highest<br> in Execution. Furthest<br> in <span>Vision</span>.</h2>`
                    );

                document
                    .querySelector(".netskope_6008 .landing-page-v3__logo")
                    .insertAdjacentHTML(
                        "afterend",
                        `<h2 class="form-content-heading">Highest in Execution. Furthest in <span>Vision</span>.</h2>`
                    );

                document
                    .querySelector(".netskope_6008 .landing-page-v3__content")
                    .insertAdjacentHTML(
                        "beforebegin",
                        `<h2 class="form-content-heading">Highest in Execution. Furthest in <span>Vision</span>.</h2><h4 class="ta-content-heading">Netskope recognized as a Leader in the 2023 GartnerÂ® Magic Quadrant<sup>TM</sup> for SSE.</h4>`
                    );

                // var target = document.querySelector(".v3-quotes-flip");
                // var wrap = document.createElement("div");
                // wrap.appendChild(target.cloneNode(true));

                //     document.querySelector(".netskope_6008 .v3-quotes-flip").insertAdjacentHTML(
                //         "beforebegin",
                //         `<div class="hero-form-bg"><div class="container"><div class="hero-form-bg-container"><div class="hero-form-img__wrapper"><div class="hero-form-img-picture"><picture class="hero-form-img">
                //   <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1706515940/netskope/6003/desktop_report.webp">
                //   <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1706515940/netskope/6003/tablet_report.webp">
                //   <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1700667411/netskope/6002/mobile_image.webp">
                //   <img src="//res.cloudinary.com/spiralyze/image/upload/v1706515940/netskope/6003/desktop_report.webp" alt="Highest in Execution. Furthest in Vision." title="Highest in Execution. Furthest in Vision.">
                // </picture></div><div class="slider-wrap">` +
                //         wrap.innerHTML +
                //         `</div></div></div></div></div>`
                //     );

                document.querySelectorAll(".v3-quotes-flip__quote-text").forEach((item) => {
                    let arrow = document.createElement("span");
                    arrow.textContent = '"';
                    arrow.setAttribute("class", "ta-quote");
                    item.prepend(arrow);
                });

                //Form internal code
                waitForElm("body form.mktoForm .mktoFormCol .mktoFieldWrap input").then(function () {
                    formModify();
                    setHiddenFields();
                });
            });

            waitForElm('.v3-quotes-flip.slick-initialized').then(function () {

                document.querySelectorAll('.v3-quotes-flip_container:not(.v3-quotes-flip_container.v3-quotes-flip__quote-container)').forEach((item) => {
                    item.innerHTML = `<div class="hero-form-img-picture"><picture class="hero-form-img">
                    <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1706515940/netskope/6003/desktop_report.webp">
                    <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1706515940/netskope/6003/tablet_report.webp">
                    <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1700667411/netskope/6002/mobile_image.webp">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/v1706515940/netskope/6003/desktop_report.webp" alt="Highest in Execution. Furthest in Vision." title="Highest in Execution. Furthest in Vision.">
                  </picture></div>`;
                });

                let checkjQuery = setInterval(function () {
                    if (typeof jQuery != "undefined" && jQuery.fn) {
                        clearInterval(checkjQuery);
                        // YOUR CODE HERE
                        console.log("Jquery loaded");

                        setTimeout(() => {

                            $(".v3-quotes-flip").slick('unslick');
                            jQuery(".v3-quotes-flip__quote-text", ".v3-quotes-flip").sameHeight(); let blocked = false; let blockTimeout = null; let prevDeltaY = 0; let id = "v3-quotes-flip"; let $object = $("." + id); let slider = jQuery('.v3-quotes-flip'); slider.slick({ dots: true, arrows: false, infinite: false, fade: true, speed: 1000, swipe: true,autoplay: true,
                                autoplaySpeed: 1500, responsive: [{ breakpoint: 1025, settings: {  swipe: true, infinite: true }, }], }); slider.on('mousewheel DOMMouseScroll wheel mouseOver', (function (e) {
                                if ($(document).width() < 1024) { return; }
                                let currentSlide = $(this).slick('slickCurrentSlide'); let slideCount = $(this)[0].slick.slideCount; let deltaY = e.originalEvent.deltaY; if ($(window).scrollTop() < $object.offset().top && $object.offset().top - $(window).scrollTop() < $object.height()) { } else { return }
                                if (currentSlide === 0 && deltaY < 0 || currentSlide === slideCount - 1 && deltaY > 0) { return; }
                                e.preventDefault(); e.stopPropagation(); clearTimeout(blockTimeout); blockTimeout = setTimeout(function () { blocked = false; }, 50); if (deltaY > 0 && deltaY > prevDeltaY || deltaY < 0 && deltaY < prevDeltaY || !blocked) { blocked = true; prevDeltaY = deltaY; if (deltaY > 0) { $(this).slick('slickNext'); } else { $(this).slick('slickPrev'); } }
                            }));
                        }, 100);
                    }
                });
            });

        }
    }
});


// Generic Code
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
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

function formModify() {
    // Add class in mktoFormRow using count
    var parentDiv = document.querySelector(
        ".netskope_6008 .landing-page-v3__form .landing-page-v3__form-content .mktoForm"
    );
    var childElements = parentDiv.children;
    for (var i = 0; i < childElements.length; i++) {
        var dynamicClass = "field-" + (i + 1);
        childElements[i].classList.add(dynamicClass);
    }

    var formDiv = document.querySelector(
        ".netskope_6008 .landing-page-v3__form .landing-page-v3__form-content .mktoForm"
    );
    // Form Extra Titles
    if (formDiv && document.querySelectorAll(".form_title").length == 0) {
        formDiv.insertAdjacentHTML("beforebegin", `<h2 class="form_title">Get Gartner report</h2>`);
    }
    // form CTA Update
    var form_button = setInterval(() => {
        var textChng = document.querySelector(
            ".netskope_6008 .landing-page-v3__form .landing-page-v3__form-content .mktoForm .mktoButtonRow .mktoButton"
        );
        if (textChng) {
            textChng.innerText = "Get the report";
            clearInterval(form_button);
        }
    }, 100);

    // Updating Form Labels
    document.querySelector("#LblFirstName").textContent = "First Name";
    document.querySelector("#LblLastName").textContent = "Last Name";
    document.querySelector("#LblEmail").textContent = "Business Email";
    document.querySelector("#LblCompany").textContent = "Company";
    document.querySelector("#LblTitle").textContent = "Job title";
    document.querySelector("#LblPhone").textContent = "Phone";
    document.querySelector("#Country option:first-child").textContent = "";
    document.querySelector("#LblCountry").textContent = "Country";

    // Change Field Position
    var email_field = document.querySelector(".netskope_6008 .landing-page-v3__form .mktoForm .mktoFormRow.field-3");
    var lastname_field = document.querySelector(".netskope_6008 .landing-page-v3__form .mktoForm .mktoFormRow.field-5");
    lastname_field.after(email_field);

    var optout_field = document.querySelector(".netskope_6008 .landing-page-v3__form .mktoForm .mktoFormRow.field-11");
    var form_footer = document.querySelector(".netskope_6008 .landing-page-v3__form .mktoForm .mktoFormRow.field-10");
    form_footer.before(optout_field);

    var zip_row = document.createElement("div");
    zip_row.innerHTML = '<div class="mktoPlaceholder mktoPlaceholderPostalCode"></div>';
    zip_row.classList.add("mktoFormRow");
    zip_row.classList.add("mktoZipRow");

    var extraRow = document.querySelectorAll(".netskope_6008 .landing-page-v3__form-content .mktoFormRow")[7];
    insertAfter(extraRow, zip_row);

    const zip_row_old = document.querySelector(".mktoPlaceholderPostalCode");
    const zip_row_new = document.querySelector(".mktoZipRow");
    zip_row_new.appendChild(zip_row_old);

    // form state
    var selector =
        "body form.mktoForm .mktoFormCol .mktoFieldWrap input, body form.mktoForm .mktoFormCol .mktoFieldWrap select";

    document.addEventListener(
        "focus",
        function (event) {
            if (event.target.matches(selector)) {
                event.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.add("active", "typing");
            }
        },
        true
    );

    var eventList = ["blur", "focusout", "keyup", "change"];
    for (s_event of eventList) {
        document.addEventListener(s_event, function (event) {
            if (event.target.matches(selector)) {
                if (event.target.value == null || event.target.value == "") {
                    event.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.remove("filled");
                } else {
                    event.target.closest("body form.mktoForm .mktoFormCol .mktoFieldWrap").classList.add("filled");
                }
            }
        });
    }

    document.addEventListener(
        "focusout",
        function (event) {
            document.querySelectorAll("body form.mktoForm .mktoFormCol .mktoFieldWrap.typing").forEach(function (elem) {
                elem.classList.remove("active", "typing");
            });
        },
        true
    );
}

function setHiddenFields() {
    waitForElm('.mktoFormRow [name="utm_location__c"]').then(function () {
        const field_int = setInterval(function () {
            if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
                if (
                    document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute("value") == "#6001_SPZ_Variant"
                ) {
                    clearInterval(field_int);
                }
                document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute("value", "#6001_SPZ_Variant");
            }
        }, 100);
    });
}