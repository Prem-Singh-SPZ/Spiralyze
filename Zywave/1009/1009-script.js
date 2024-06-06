let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);

        const heroImages = {
            page1: {
                two_k: '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/1002/1920.webp',
                desk: '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/1002/1440.webp',
                tab: '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/1002/768.webp',
                mob: '//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/1002/375.webp',
            },
        };

        // Keep images in cache to avoid loading delay (according to the device resolution)
        for (const key in heroImages) {
            const img = new Image();
            img.src = window.innerWidth > 1600 ? heroImages[key].two_k : window.innerWidth > 1023 ? heroImages[key].desk : window.innerWidth > 767 ? heroImages[key].tab : heroImages[key].mob;
        }

        if (!body.classList.contains('spz-1009')) {
            body.classList.add('spz-1009');
            waitForElm('.spz-1009 #zy-demo-form-section .zy-col-form form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
                var demo_form = document.querySelector('.spz-1009 #zy-demo-form-section');
                var footer = document.querySelector('.spz-1009 .zy-subfooter');
                footer.after(demo_form);

                if (document.querySelectorAll('.spz-1009 #zy-demo-form-section .zy-container .zy-col-form .close-icon').length == 0) {
                    document.querySelector(".spz-1009 #zy-demo-form-section .zy-container .zy-col-form").insertAdjacentHTML('afterbegin', `<div class="close-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="#0F2D52" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M6 6L18 18" stroke="#0F2D52" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    </div>`);

                    document.querySelector(".spz-1009 #zy-demo-form-section .zy-container > .row").insertAdjacentHTML('beforeend', `<div class="t-product-img-parent">
                <div class="t-product-wrapper">
                    <div class="t-text-wrapper">
                        <div class="t-text">“We doubled our sales the year after implementing Zywave, and our sales have only
                            continued to grow.”</div>
                    </div>
                    <div class="t-content-parent">
                        <div class="t-avatar-parent">
                            <div class="t-avatar">
                                <picture>
                                    <source media="(min-width:1025px)"
                                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/1009/avatar_2.webp">
                                    <source media="(min-width:768px)"
                                        srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/1009/avatar_1.webp">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/1009/avatar.webp"
                                        alt="Roland Barrera">
                                </picture>
                            </div>
                            <div class="t-details">
                                <div class="t-name">Roland Barrera</div>
                                <div class="t-designation">Owner</div>
                            </div>
                        </div>
                        <div class="t-footer-logo">
                            <picture>
                                <source media="(min-width:1025px)"
                                    srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/1009/frame_1171275511.webp">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/1009/frame_1171275512.webp"
                                    alt="Copany Logo">
                            </picture>
                        </div>
                    </div>
                </div>
                    </div>`);
                }

                var headerCTA = document.querySelectorAll('.spz-1009 .zy-header-container .zy-top-demo-container a, .spz-1009 .zy-header-bottom-inner .zy-header-bottom-demo a, .spz-1009 .zy-mobile-nav-container .zy-mobile-nav-footer a');
                headerCTA.forEach(function (element) {
                    element.addEventListener('click', function (e) {
                        e.preventDefault();
                        document.body.classList.add('show-popup');
                        document.querySelector('html').classList.add('show-popup');
                    });
                });
                document.querySelectorAll('.spz-1009 #zy-demo-form-section .close-icon, .spz-1009 #zy-demo-form-section').forEach((ec) => {
                    ec.addEventListener("click", () => {
                        document.body.classList.remove('show-popup');
                        document.querySelector('html').classList.remove('show-popup');
                    });
                });
                document.querySelector('.spz-1009 #zy-demo-form-section .zy-container').addEventListener("click", (ev) => {
                    ev.stopPropagation();
                })
                formModify();
            });
        }
    }
});
function formModify() {

    // Add class in mktoFormRow using count
    var form_fields = document.querySelectorAll('.spz-1009 #zy-demo-form-section .zy-col-form form.mktoForm .mktoFormRow fieldset.mktoFormCol .mktoFormRow');
    for (var i = 0; i < form_fields.length; i++) {
        var dynamicClass = 'field-' + (i + 1);
        form_fields[i].classList.add(dynamicClass);
    }
    var formDiv = document.querySelector('.spz-1009 #zy-demo-form-section form.mktoForm');
    // Form Extra Titles
    if (formDiv && document.querySelectorAll('.form_title').length == 0) {
        formDiv.insertAdjacentHTML('beforebegin', `<h3 class="form_title">Get a demo</h3>`);
    }
    // form CTA Update
    var form_button = setInterval(() => {
        var textChng = document.querySelector('.spz-1009 #zy-demo-form-section form.mktoForm .mktoButtonRow .mktoButton');
        if (textChng) {
            textChng.innerText = 'Submit';
            clearInterval(form_button);
        }
    }, 100);
    // Updating Form Labels
    document.querySelector('#LblFirstName').textContent = "First name";
    document.querySelector('#LblLastName').textContent = "Last name";
    document.querySelector('#LblEmail').textContent = "Business email";
    document.querySelector('#LblCompany').textContent = "Company";
    document.querySelector('#LblwebsiteFormJobDescription').textContent = "Job category";
    document.querySelector('select#websiteFormJobDescription').options[0].textContent = 'Job category';
    document.querySelector('#LblPhone').textContent = "Phone";
    document.querySelector('#Lblringdna100__ProductInterest__c').textContent = "I want to discuss";
    document.querySelector('select#ringdna100__ProductInterest__c').options[0].textContent = 'I want to discuss';
    // Change Field Position
    var email_field = document.querySelector('.spz-1009 .mktoForm .mktoFormRow.field-7');
    var lname_field = document.querySelector('.spz-1009 .mktoFormRow.field-2');
    lname_field.after(email_field);
    var all_inputs = document.querySelectorAll('.spz-1009 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz-1009 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap select');
    all_inputs.forEach(function (element) {
        element.removeAttribute('placeholder');
    });
    // form state
    var selector = '.spz-1009 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz-1009 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap select';
    document.addEventListener('focus', function (event) {
        if (event.target.matches(selector)) {
            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
        }
    }, true);
    var eventList = ["focusin", "blur", "focusout", "keyup", "change"];
    for (s_event of eventList) {
        document.addEventListener(s_event, function (event) {
            if (event.target.matches(selector)) {
                if (event.target.value == null || event.target.value.trim() == '') {
                    event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('filled');
                } else {
                    event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('filled');
                }
                if (event.type == "change") {
                    if (event.target.value == "") {
                        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
                    } else {
                        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
                        if (event.target.parentNode.querySelector('.mktoError')) {
                            event.target.parentNode.querySelector('.mktoError').style.display = 'none';
                        }
                    }
                } else {
                    if (event.target.classList.contains('mktoInvalid')) {
                        var closestError = event.target.parentNode.querySelector('.mktoError');
                        if (closestError && closestError.style.display == '') {
                            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
                        } else {
                            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
                        }
                    } else {
                        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
                    }
                }
            }
        });
    }

    document.addEventListener('focusout', function (event) {
        document.querySelectorAll('body form .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
            elem.classList.remove('active', 'typing');
        })
    }, true);
    // Form Progressive Code Here...
    // document.addEventListener('focusin', function (event) {
    //     if (event.target.matches(selector)) {
    //         var fname = document.querySelector('input#FirstName').value.trim();
    //         var lname = document.querySelector('input#LastName').value.trim();
    //         var email = document.querySelector('input#Email').value.trim();
    //         var jobcategory = document.querySelector('select#websiteFormJobDescription').value;
    //         var i = 0;
    //         if (fname != '') {
    //             i = i + 1;
    //         }
    //         if (lname != '') {
    //             i = i + 1;
    //         }
    //         if (email != '') {
    //             i = i + 1;
    //         }
    //         if (jobcategory != '') {
    //             i = i + 1;
    //         }
    //         if (i >= 3 && (event.target.value == '' || event.target.value == null || event.target.value == 'undefined')) {
    //             document.body.classList.add('form-expand');
    //         }
    //     }
    // });
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
