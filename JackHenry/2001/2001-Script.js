(function () {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-2003')) {
            clearInterval(bodyInterval);
            bodyEle.classList.add('spz-2001');

            //Hero section content feeding
            waitForElm('.hs-content-path-contact-us form.hs-form-private .hs-form-field').then(function (elm) {
                document.querySelector('#hs_cos_wrapper_flexible_column .contact-form-section .container').insertAdjacentHTML('beforeend', `<div class="spz-hero-section d-flex justify-content-between">
                <div class="spz-hero-content">
                    <div class="logo-section">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1689088504/jackhenry/2001/jack-henry-logo_2.svg" alt="Jack Henry">
                    </div>
            
                    <div class="overhead">
                        <div class="financial-services-solutions">
                            Financial Services Solutions
                        </div>
                        <div class="financial-subtitle">
                            <h3>future-ready financial technology</h3>
                        </div>
                    <div class="bullets">
                        <div class="bullet">
                                   <span>Next-gen financial tech </span>that helps community and regional financial institutions innovate and scale.
                        </div>
                        <div class="bullet">
                                <span>Open platform </span>and open APIs so you can integrate with your current tech stack on your terms.
                        </div>
                        <div class="bullet">
                                <span> 8,000+ financial institutions</span> benefit from our experience working with community and regional banks and credit unions and fintechs.
                        </div>
                    </div>
                    </div>
                    <div class="social-proof" >
                    <div class="proud-to-be-recognized-as-an-industry-leader" >
                    Proud to Be Recognized as an Industry Leader
                    </div>
                    <div class="awards" >
                    <div class="badge" >
                    <img  src="https://res.cloudinary.com/spiralyze/image/upload/v1689088597/jackhenry/2001/badge-1.webp" />
                    </div>
                    <div class="badge" >
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/v1689088597/jackhenry/2001/badge-2.webp" />
                    </div>
                    <div class="badge" >
                    <img  src="https://res.cloudinary.com/spiralyze/image/upload/v1689088597/jackhenry/2001/badge-3.webp" />
                    </div>
                    </div> </div>
                </div>
                <div class="spz-form-wrapper"></div>
            </div>
            `);

                appendInputLabel();
                focusFields();
                checkboxDropdown();

                //Form title set
                document.querySelector('.hs_cos_wrapper_type_form > h3.form-title').textContent = 'contact sales';
                document.querySelector('.hs_cos_wrapper_type_form form.hs-form-private .hs_comment .hs-label-spz span').textContent = 'Comment (Optional)';
                document.querySelector('.hs_cos_wrapper_type_form form.hs-form-private .hs-dependent-field .hs-form-booleancheckbox span').textContent = 'Subscribe to Jack Henry™ news and updates.';

                document.querySelector('form.hs-form-private .hs_capability_types legend.hs-field-desc').insertAdjacentHTML('afterend', ` <button class="spz-btn custom-input-btn" type="button" ></button>`);
                if (document.querySelector('.contact-form-section .container .row.mt-5 .col-lg-4.pt-4.flex-column')) {
                    document.querySelector('.contact-form-section .container .row.mt-5 .col-lg-4.pt-4.flex-column').classList.add('four-cards-container');
                    document.querySelector('.contact-form-section .container .row.mt-5 .col-lg-4.pt-4.flex-column').classList.remove('col-12', 'col-lg-4', 'd-flex', 'flex-column', 'pt-4');
                }
                //Moving form and card elements
                document.querySelector('#hs_cos_wrapper_flexible_column').insertAdjacentHTML('afterend', `<div class="spz-four-cards"></div>
                <div class="spz-two-card-slider">
                    <div class="two-card-slider">
                        <div class="two-card-title">
                            <h5>don't just take our word for it</h5></div>
                        <div class="testimonials">
                            <div class="testimonials_card">
                                <div class="quote-testimonial">
                                    <div class="quote-text"> The technology has helped position us to compete and level the playing field. We don&#8217;t have to hire more staff. It&#8217;s made our teams&#8217; jobs so much easier.
                                        <br/> </div>
                                </div>
                                <div class="divider"> </div>
                                <div class="author">
                                    <div class="auther-name"> Cindy Blackstone </div>
                                    <div class="auther-title"> Chief Retail Officer, Southside Bank </div>
                                </div>
                            </div>
                            <div class="testimonials_card">
                                <div class="quote-testimonial">
                                    <div class="quote-text"> Having all accounts on one core system makes everyone&#8217;s lives easier and provides a better member experience. Integrating home banking and automated transfers is easier to manage. </div>
                                </div>
                                <div class="divider"> </div>
                                <div class="author">
                                    <div class="auther-name"> Mark Schuiling </div>
                                    <div class="auther-title"> Chief Technology Officer, Wildfire Credit Union </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `);
                waitForElm('.hs-content-path-contact-us .spz-hero-section .spz-form-wrapper').then(function (elm) {
                    moveElement('.contact-form-section .container .row.mt-5 .col-lg-6.pe-lg-5 .hs_cos_wrapper_type_form', '.spz-hero-section .spz-form-wrapper');
                    moveElement('.contact-form-section .container .row.mt-5 .four-cards-container ', '.spz-four-cards');

                    window.addEventListener("click", function (e) {
                        if (e.target.classList.contains("spz-btn")) {
                            e.target.parentElement.classList.toggle('field-focus');
                            dropdownFunctionality();
                        }
                        if (e.target.classList.contains("hs-button")) {
                            checkError();
                        }
                    });
                });
            });
        }
    });

    function checkboxDropdown() {
        document.querySelectorAll('.hs-form-checkbox').forEach(function (elem, i) {
            elem.querySelector('.hs-input').addEventListener("click", function () {
                var title = elem.querySelector('span').textContent + ",";

                if (elem.querySelector('input[type="checkbox"]').checked) {
                    var html = '<span title="' + title + '">' + title + '</span>';
                    document.querySelector('.spz-btn').insertAdjacentHTML('beforeend', html);
                }
                else {
                    document.querySelector('span[title="' + title + '"]').remove();
                }
            });
        })
    }

    function dropdownFunctionality() {
        if (!document.querySelector('.hs_capability_types').classList.contains('field-focus')) {
            if (document.querySelector(".spz-btn > span")) {
                document.querySelector('.hs_capability_types').classList.add('input-filled');
            }
            else {
                document.querySelector('.hs_capability_types').classList.remove('input-filled');
            }
        }
    }

    // $('.hs-form-checkbox .hs-input').on('click', function () {
    //     var title = $(this).closest('.hs-form-checkbox').find('span').text(),
    //         title = $(this).closest('.hs-form-checkbox').find('span').text() + ",";
    //     console.log('hello')
    //     if ($(this).closest('.hs-form-checkbox').find('input[type="checkbox"]').is(':checked')) {
    //         var html = '<span title="' + title + '">' + title + '</span>';
    //         $('.spz-btn').append(html);
    //         $(".dropdown-text").hide();
    //     } else {
    //         $('span[title="' + title + '"]').remove();
    //         var ret = $(".dropdown-text");
    //         $('.spz-btn').append(ret);
    //     }
    //     showLabel();
    // });

    // function showLabel() {
    //     if (!$('.hs_capability_types .input .hs-form-checkbox input').is(':checked')) {
    //         $(".dropdown-text").show();
    //     }
    // }


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

    // Move element
    // sourceElm: Element which we have to move
    // targetLoc: New location of an element 
    function moveElement(sourceElm, targetLoc) {
        const f = document.createDocumentFragment();
        if (document.querySelector(sourceElm) != null) {
            f.appendChild(document.querySelector(sourceElm));
            document.querySelector(targetLoc).appendChild(f);
        }
    }

    // Create input label with placeholder text
    function appendInputLabel() {
        document.querySelectorAll('.hs-form-field:not(.smart-field)').forEach(function (el) {
            el.querySelector('label').classList.add('hs-label-spz');
        });
    }

    // On input focus add class on closest parent .field class
    function focusFields() {
        document.querySelectorAll('.hs-input').forEach(function (el) {
            el.addEventListener('focus', function () {
                el.closest('.field').classList.add('field-focus');
            });
            el.addEventListener('blur', function () {
                el.closest('.field').classList.remove('field-focus');
                checkError();
            });
        });
    }

    // Function to add .field-error class on closest parent .field class if .error is exist on .hs-input
    function checkError() {
        let timeBuffer = setInterval(() => {
            document.querySelectorAll('.hs-input').forEach(function (el) {
                if (el.closest('.field').querySelector('.error') != null) {
                    el.closest('.field').classList.add('field-error');
                } else {
                    el.closest('.field').classList.remove('field-error');
                }
            });
            document.querySelectorAll('.hs-input:not(.hs-fieldtype-textarea):not([type="checkbox"])').forEach(function (el) {
                if (el && el.value) {
                    el.closest('.field').classList.add('input-filled');
                } else {
                    el.closest('.field').classList.remove('input-filled');
                }
            });
        },);

        setTimeout(() => {
            clearInterval(timeBuffer);
        }, 1000);
    }
})();