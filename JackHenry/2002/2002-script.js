// Preview link
// https://www.jackhenry.com/contact-us?mutiny_preview=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI2NDAzZWJlMC1lMGIwLTRmYTUtYWViOS1mNzYwODM0ZTkyZWIiLCJpc3MiOiJmYTcwYzcyMzFhN2YxNDgwIiwiY29tcGFueV9pZCI6ImZhNzBjNzIzMWE3ZjE0ODAiLCJleHBlcmllbmNlX2lkIjoiMjEzMmRlZjQtYTkyOC00ODc1LThiOWUtOGVhNjI2Y2Y1MjhjIiwidmFyaWF0aW9uX2lkIjoiNzhjMTRkZjUtZjcxZC00ZDczLTlmZjAtNGU3N2Y5YTc5Y2ViIiwiZXhwIjoxNjk5ODg4MDAyLCJ2YXJpYWJsZV9vdmVycmlkZXMiOnt9fQ.h2LcksLSLZYOZqJmxubih9cULI2EvQ9-3DBqIpBeSTs

(function () {
    const swiperJS = document.createElement('script');
    swiperJS.src = '//cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/js/swiper.js';
    swiperJS.type = 'text/javascript';
    document.head.appendChild(swiperJS);

    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-2002')) {
            clearInterval(bodyInterval);
            bodyEle.classList.add('spz-2002');

            //Hero section content feeding
            waitForElm(' form.hs-form-private .hs-form-field').then(function (elm) {
                document.querySelector('#hs_cos_wrapper_flexible_column .contact-form-section .container').insertAdjacentHTML('beforeend', `
                <div class="spz-hero-section d-flex align-items-center justify-content-between flex-column">
                    <div class="spz-hero-content">
                        <div class="logo-section">
                            <a href="/">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/v1689088504/jackhenry/2001/jack-henry-logo_2.svg" alt="Jack Henry">
                            </a>
                        </div>
                    </div>
                    <div class="spz-form-wrapper"></div>
                    <div class="social-proof desktop">
                    <div class="rating">
                        <div class="stars">
                        <img class="stars-child" alt="" src="//res.cloudinary.com/dxprfaxf3/image/upload/v1695371989/jackhenry/2002/rating.svg">
                        </div>
                        <div class="ratings">
                        <b>4.8 </b>
                        <span>(2588 Ratings)</span>
                        </div>
                        </div>
                        <div class="proud-to-be-recognized-as-an-industry-leader">
                            Proud to Be Recognized as an Industry Leader
                        </div>
                        <div class="awards">
                            <div class="badge">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/Jack%20Henry/2001/assets/badge-1.png" alt="Linkedin top companies 2022"/>
                            </div>
                            <div class="badge">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/Jack%20Henry/2001/assets/badge-2.png" alt="IDC Fintech rankings 2022"/>
                            </div>
                            <div class="badge">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/Jack%20Henry/2001/assets/badge-3.png" alt="Fintech breakthrough award 2023"/>
                            </div>
                        </div>
                    </div>`);

                spzTest2002();
                appendPreload();
                appendInputLabel();
                focusFields();
                submitTestDetails();

                // Progressive starts
                document.querySelector('.hs_zip').classList.add('hidden-spz');
                document.querySelector('.hs_company').classList.add('hidden-spz');
                if (document.querySelector('.hs_capability_types')) {
                    document.querySelector('.hs_capability_types').classList.add('hidden-spz');
                }
                if (document.querySelector('.hs-dependent-field')) {
                    document.querySelector('.hs-dependent-field').classList.add('hidden-spz');
                }
                document.querySelector('.hs_comment').classList.add('hidden-spz');
                // Progressive ends

                // Set form stepper
                document.querySelector('.hs_cos_wrapper_type_form > h3.form-title').insertAdjacentHTML('beforebegin', `
                    <div class="form-stepper">
                        <img class="step-progress-img" id="progress-step-1" src="//res.cloudinary.com/spiralyze/image/upload/v1694524072/jackhenry/2002/progress-1.svg" />
                        <img class="step-progress-img d-none" id="progress-step-2" src="//res.cloudinary.com/spiralyze/image/upload/v1694524072/jackhenry/2002/progress-2.svg" />
                        <img class="step-progress-img d-none" id="progress-step-3" src="//res.cloudinary.com/spiralyze/image/upload/v1694771647/jackhenry/2002/progress_bar_-_checked.svg" />
                    </div>
                    <button class="back-btn" id="step-back-btn" data-prev-step="1"></button>
                `);

                // Set form title
                document.querySelector('.hs_cos_wrapper_type_form > h3.form-title').textContent = 'What banking solution(s) are you most interested in?';
                document.querySelector('.hs_cos_wrapper_type_form form.hs-form-private .hs_comment .hs-label-spz span').textContent = 'Comment (Optional)';

                if (document.querySelector('.spz-step-2 .form-checkboxes') && document.querySelectorAll('spz-load-more').length == 0) {
                    // Hide 7th+ checkboxes by default
                    document.querySelector('.spz-step-2 .form-checkboxes').classList.add('hide-checkboxes');

                    // Add load more button
                    document.querySelector('.spz-step-2 .form-checkboxes').insertAdjacentHTML('afterend', `<div class="load-more-checkboxes"><button class="spz-load-more" id="spz-load-more">Load more</button></div>`);

                    document.querySelector('#spz-load-more').addEventListener('click', () => {
                        document.querySelector('.spz-step-2 .form-checkboxes').classList.remove('hide-checkboxes');
                        document.querySelector('.load-more-checkboxes').remove();
                    });
                }

                if (document.querySelector('.hs_cos_wrapper_type_form form.hs-form-private .hs-dependent-field .hs-form-booleancheckbox span')) {
                    document.querySelector('.hs_cos_wrapper_type_form form.hs-form-private .hs-dependent-field .hs-form-booleancheckbox span').textContent = 'Subscribe to Jack Henry™ news and updates.';
                }
                else if (document.querySelector('.hs_cos_wrapper_type_form form.hs-form-private .hs_connecting_possibilities_newsletter .hs-form-booleancheckbox span')) {
                    document.querySelector('.hs_cos_wrapper_type_form form.hs-form-private .hs_connecting_possibilities_newsletter .hs-form-booleancheckbox span').textContent = 'Subscribe to Jack Henry™ news and updates.';
                }

                // document.querySelector('form.hs-form-private .hs-fieldtype-checkbox.field.hs-form-field legend.hs-field-desc').insertAdjacentHTML('afterend', ` <button class="spz-btn custom-input-btn" type="button"><span class="value-container"></span></button>`);
                if (document.querySelector('.contact-form-section .container .row.mt-5 .col-lg-4.pt-4.flex-column')) {
                    document.querySelector('.contact-form-section .container .row.mt-5 .col-lg-4.pt-4.flex-column .contact-card-wrapper:nth-child(2) .contact-card-inner h5.mb-3').textContent = 'Join Jack Henry';
                    document.querySelector('.contact-form-section .container .row.mt-5 .col-lg-4.pt-4.flex-column .contact-card-wrapper:nth-child(1) .contact-card-inner div:last-child p').innerHTML = '<span>Give us a call. Our corporate call center is open 24 hours a day:</span> <a href="tel:+1800-299-4222" rel="noopener" target="_blank" class="spz-tel"><span>1-800-299-4222.</span></a>';
                    document.querySelector('.contact-form-section .container .row.mt-5 .col-lg-4.pt-4.flex-column').classList.add('four-cards-container');
                    document.querySelector('.contact-form-section .container .row.mt-5 .col-lg-4.pt-4.flex-column').classList.remove('col-12', 'col-lg-4', 'd-flex', 'flex-column', 'pt-4');
                }
                //Moving form and card elements
                document.querySelector('#hs_cos_wrapper_flexible_column').insertAdjacentHTML('afterend', `<div class="spz-four-cards"></div>
                <div class="spz-two-card-slider ">
                    <div class="two-card-slider swiper-container ">
                        <div class="two-card-title">
                            <h5>don't just take our word for it</h5></div>
                        <div class="testimonials swiper-wrapper">
                            <div class="testimonials_card swiper-slide">
                            <div>
                                <div class="quote-testimonial">
                                <div class="quote"><img src="//res.cloudinary.com/spiralyze/image/upload/v1689167488/jackhenry/2001/qoute_2.svg" alt="quote"> </div>
                                    <div class="quote-text"> The technology has helped position us to compete and level the playing field. We don&#8217;t have to hire more staff. It&#8217;s made our teams&#8217; jobs so much easier.
                                        <br/> </div>
                                </div>
                                <div class="divider"> </div>
                                <div class="author">
                                    <div class="auther-name"> Cindy Blackstone </div>
                                    <div class="auther-title"> Chief Retail Officer, Southside Bank </div>
                                </div>
                                </div>
                            </div>
                            <div class="testimonials_card swiper-slide">
                            <div>
                                <div class="quote-testimonial">
                                <div class="quote"><img src="//res.cloudinary.com/spiralyze/image/upload/v1689167488/jackhenry/2001/qoute_2.svg" alt="quote"> </div>
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
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
                `);

                waitForElm(' .spz-hero-section .spz-form-wrapper').then(function (elm) {
                    moveElement('.contact-form-section .container .row.mt-5 .col-lg-6.pe-lg-5 .hs_cos_wrapper_type_form', '.spz-hero-section .spz-form-wrapper');
                    moveElement('.contact-form-section .container .row.mt-5 .four-cards-container ', '.spz-four-cards');

                    window.addEventListener("click", function (e) {
                        if (e.target.classList.contains("spz-btn")) {
                            e.target.parentElement.classList.toggle('field-focus');
                            // dropdownFunctionality();
                        }
                        if (e.target.classList.contains("hs-button")) {
                            checkError();
                        }
                        if (e.target.closest('ul')) {
                            if (e.target.closest('ul').classList.contains('hs-error-msgs')) {
                                checkError();
                            }
                        }
                    });

                    stepTwoCheckboxes();
                    formPrevStep();
                });
            });
        }
    });

    swiperJS.onload = function () {
        if (window.innerWidth < 990) {
            let intSlider = setInterval(() => {
                if (document.querySelector('.two-card-slider.swiper-container.swiper-container-horizontal')) {
                    clearInterval(intSlider);
                }
                init_Slider();
            }, 100);
        }
        window.addEventListener('resize', function (event) {
            init_Slider();
        }, true);
    }

    function init_Slider() {
        var Swipes = new Swiper('.swiper-container', {
            // loop: true,
            // autoplay: true,
            centeredSlides: true,
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        if (window.innerWidth > 990) {
            if (Swipes !== undefined) {
                Swipes.destroy(true, true);
            }
        }
    }

    // Check if thank you section is present
    function checkThankYouSec() {
        const subInt = setInterval(() => {
            if (document.querySelector('.submitted-message')) {
                clearInterval(subInt);
                document.querySelector('#step-back-btn').setAttribute('data-prev-step', '1');
                document.querySelector('#progress-step-1').classList.add('d-none');
                document.querySelector('#progress-step-2').classList.add('d-none');
                document.querySelector('#progress-step-3').classList.remove('d-none');
            }
        }, 500);
    }

    // Test 2002 (Main) Starts
    function spzTest2002() {
        appendFormSteps();
    }

    function appendFormSteps() {
        // Append content above the [id*="hs_form_target_form"]
        document.querySelector('[id*="hs_form_target_form"]').insertAdjacentHTML('beforebegin', `
            <div class="spz-step-2 active">
                <div class="d-flex flex-wrap justify-content-between form-checkboxes"></div>
                <div class="d-flex align-items-center justify-content-center next-step-cta step-2">
                    <button class="btn btn-vibrant-cobalt nav-contact" data-step="2">Next</button>
                </div>
            </div>            
        `);

        document.querySelector('[id*="hs_form_target_form"]').classList.add('spz-step-3');

        // checkboxEvents();
        formNextStep();
    }

    function stepTwoCheckboxes() {
        // Get all the text from '.hs-fieldtype-checkbox .inputs-list.multi-container label span' and append to '.spz-step-2 .custom-checkbox-spz .ccs-label'
        let checkboxes = document.querySelectorAll('.hs-fieldtype-checkbox .inputs-list.multi-container label');
        let checkboxesArr = Array.from(checkboxes);
        let checkboxesText = checkboxesArr.map((item) => {
            return { label: item.textContent, for: item.getAttribute('for') };
        });
        let checkboxesTextArr = checkboxesText.filter((item) => {
            return item != '';
        });
        let checkboxesTextArrUnique = [...new Set(checkboxesTextArr)];
        checkboxesTextArrUnique.forEach((item) => {
            // Convert to lowercase and replace space with underscore
            let lci = item.label.toLowerCase().replace(/\s/g, '_');

            document.querySelector('.spz-step-2 .form-checkboxes').insertAdjacentHTML('beforeend', `
                <label class="custom-checkbox-spz with-icons" for="${item.for}" data-for="${item.for}">
                    <div class="ccs-icon-wrap">
                        <img src="${getIconByLabel(item.label)}" alt="${item.label}" class="ccs-icon">
                    </div>
                    <div class="ccs-label">${item.label}</div>
                    <div class="ccs-checkbox">
                        <input type="checkbox" id="${lci}" name="${lci}">
                        <span class="ccs-box"></span>
                    </div>
                </label>`);
        });

        checkboxEvents();

        const cbLength = document.querySelectorAll('.spz-step-2 .custom-checkbox-spz').length;
        if (cbLength % 2 != 0) {
            document.querySelector('.spz-step-2 .custom-checkbox-spz:last-child').classList.add('full-width');
        } else {
            document.querySelector('.spz-step-2 .custom-checkbox-spz:last-child').classList.remove('full-width');
        }
    }

    function checkboxEvents() {
        // document.querySelectorAll('.spz-step-1 .custom-checkbox-spz').forEach((checkbox) => {
        //     checkbox.addEventListener('click', () => {
        //         // Remove active class and checked attribute
        //         checkbox.classList.remove('active');
        //         checkbox.querySelector('input').removeAttribute('checked');

        //         // Remove any active class and checked attribute from other checkboxes
        //         if (document.querySelector('.spz-step-1 .custom-checkbox-spz.active') && !checkbox.classList.contains('active')) {
        //             document.querySelector('.spz-step-1 .custom-checkbox-spz.active input').removeAttribute('checked');
        //             document.querySelector('.spz-step-1 .custom-checkbox-spz.active').classList.remove('active');
        //         }

        //         // Add active class and checked attribute to clicked checkbox
        //         if (!checkbox.classList.contains('active')) {
        //             checkbox.classList.add('active');
        //             checkbox.querySelector('input').setAttribute('checked', true);
        //         }
        //     });
        // });

        document.querySelectorAll('.spz-step-2 .custom-checkbox-spz').forEach((checkbox) => {
            checkbox.addEventListener('click', () => {
                // Add active class and checked attribute to clicked checkbox
                if (!checkbox.classList.contains('active') && checkbox.getAttribute('for')) {
                    checkbox.querySelector('input').setAttribute('checked', true);
                    document.querySelector(`[data-for='${checkbox.getAttribute('for')}']`).classList.toggle('active');
                } else {
                    // Remove active class and checked attribute from clicked checkbox
                    checkbox.classList.remove('active');
                    checkbox.querySelector('input').removeAttribute('checked');
                }
            });
        });
    }

    function formPrevStep() {

        document.querySelector('.form-title').innerHTML = 'What banking solution(s) are you most interested in?';
        document.querySelector('.spz-form-wrapper .hs_cos_wrapper').classList.add('form-step-2');
        document.querySelector('.back-btn').setAttribute('data-prev-step', '2');

        // on .step-back-btn click go to previous step given in data-prev-step attribute
        document.querySelector('.back-btn').addEventListener('click', () => {
            let prevStep = +document.querySelector('.back-btn').getAttribute('data-prev-step');
            document.querySelector(`.spz-step-${prevStep}`).classList.remove('active');
            document.querySelector(`.spz-step-${prevStep - 1}`).classList.add('active');
            // document.querySelector('.form-stepper .current-step').innerHTML = prevStep - 1;

            if ((prevStep - 1) == 1) {
                document.querySelector('.form-title').innerHTML = 'What type of organization are you?';
                document.querySelector('.spz-form-wrapper .hs_cos_wrapper').classList.remove('form-step-2');
                document.querySelector('.back-btn').setAttribute('data-prev-step', '1');
            } else if ((prevStep - 1) == 2) {
                // document.querySelector('.final-step').remove();
                document.querySelector('#progress-step-1').classList.remove('d-none');
                document.querySelector('#progress-step-2').classList.add('d-none');
                // document.querySelector('.form-stepper').classList.remove('d-none');
                document.querySelector('.form-title').innerHTML = 'What banking solution(s) are you most interested in?';
                document.querySelector('.spz-form-wrapper .hs_cos_wrapper').classList.add('form-step-2');
                document.querySelector('.spz-form-wrapper .hs_cos_wrapper').classList.remove('form-step-3');
                document.querySelector('.back-btn').setAttribute('data-prev-step', '2');
            }
            // else if ((prevStep - 1) == 3) {
            //     document.querySelector('.form-title').innerHTML = 'What banking solution(s) are you most interested in?';
            //     document.querySelector('.spz-form-wrapper .hs_cos_wrapper').classList.add('form-step-2');
            //     document.querySelector('.spz-form-wrapper .hs_cos_wrapper').classList.remove('form-step-3');
            //     document.querySelector('.back-btn').setAttribute('data-prev-step', '2');
            // }
        });
    }

    function formNextStep() {
        document.querySelectorAll('.nav-contact').forEach((button) => {
            button.addEventListener('click', () => {
                let step = +button.getAttribute('data-step');

                if (document.querySelector(`.spz-step-${step}`).classList.contains('active')) {
                    // Check if at least one checkbox is checked else append error message

                    // let checkboxes = document.querySelectorAll('.spz-step-2 .custom-checkbox-spz');
                    // let checkboxesArr = Array.from(checkboxes);
                    // let checked = checkboxesArr.filter((item) => {
                    //     return item.classList.contains('active');
                    // });

                    if (document.querySelectorAll(`.spz-step-${step} .custom-checkbox-spz.active`).length == 0) {
                        if (document.querySelectorAll(`.spz-step-${step} .error-message`).length == 0) {
                            document.querySelector(`.spz-step-${step} .next-step-cta`).insertAdjacentHTML('beforebegin', `
                                <div class="error-message">Please select at least one option</div>
                            `);
                        }
                        return false;
                    } else if (document.querySelectorAll(`.spz-step-${step} .error-message`).length > 0) {
                        document.querySelector(`.spz-step-${step} .error-message`).remove();
                    }
                }

                document.querySelector(`.spz-step-${step}`).classList.remove('active');
                document.querySelector(`.spz-step-${step + 1}`).classList.add('active');
                // document.querySelector('.form-stepper .current-step').innerHTML = step + 1;

                if ((step + 1) == 2) {
                    document.querySelector('.form-title').innerHTML = 'What banking solution(s) are you most interested in?';
                    document.querySelector('.spz-form-wrapper .hs_cos_wrapper').classList.add('form-step-2');
                    document.querySelector('.back-btn').setAttribute('data-prev-step', '2');
                } else if ((step + 1) == 3) {
                    document.querySelector('.form-title').innerHTML = 'contact sales';
                    document.querySelector('.form-step-2').classList.replace('form-step-2', 'form-step-3');
                    document.querySelector('.back-btn').setAttribute('data-prev-step', '3');
                    // document.querySelector('.form-stepper').classList.add('d-none');
                    document.querySelector('#progress-step-1').classList.add('d-none');
                    document.querySelector('#progress-step-2').classList.remove('d-none');
                    // document.querySelector('.form-stepper').insertAdjacentHTML('afterend', '<div class="form-stepper final-step">Final Step</div>');
                }

                // smooth scroll to .contact-form-section
                document.querySelector('.contact-form-section').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    function getIconByLabel(label) {
        const baseURl = 'https://res.cloudinary.com/spiralyze/image/upload/';
        const icons = [
            {
                ico: 'v1690277503/jackhenry/2002/digital_banking_1.svg',
                label: 'Digital Banking'
            },
            {
                ico: 'v1690277430/jackhenry/2002/payments.svg',
                label: 'Payments'
            },
            {
                ico: 'v1690277429/jackhenry/2002/operations.svg',
                label: 'Operations'
            },
            {
                ico: 'v1690277430/jackhenry/2002/commercial_banking.svg',
                label: 'Commercial Banking'
            },
            {
                ico: 'v1690277443/jackhenry/2002/information_security_technology_1.svg',
                label: 'Information Security & Technology'
            },
            {
                ico: 'v1690277465/jackhenry/2002/lending.svg',
                label: 'Lending'
            },
            {
                ico: 'v1690277430/jackhenry/2002/financial_crimes_fraud_risk.svg',
                label: 'Financial Crimes & Fraud Risk'
            },
            {
                ico: 'v1690277488/jackhenry/2002/customer_member_relationship_1.svg',
                label: 'Customer & Member Relationship'
            },
            {
                ico: 'v1690277496/jackhenry/2002/financial_health_solutions_1.svg',
                label: 'Financial Health Solutions'
            },
            {
                ico: 'v1690277430/jackhenry/2002/commercial_banking.svg',
                label: 'Commercial Banking'
            },
        ];

        let icon = icons.find((item) => {
            return item.label == label;
        });

        if (icon == undefined) {
            return false;
        }

        return baseURl + icon.ico;

    }
    // Test 2002 (Main) Ends

    function appendPreload() {
        document.querySelector('head').insertAdjacentHTML("afterbegin", `
            <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1689675252/Jack%20Henry/2001/assets/Dropdown_red.svg" as="image">
            <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1689754317/Jack%20Henry/2001/assets/Filled-checkbox.svg" as="image">
            <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1689754169/Jack%20Henry/2001/assets/Arrow-left-hover.svg" as="image">
            <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1689754169/Jack%20Henry/2001/assets/Arrow-right-hover.svg" as="image">
            <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1691417930/Jack%20Henry/2002/checkbox_filled.svg" as="image">
            <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1690813434/Jack%20Henry/2002/back-ico-hover.svg" as="image">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/css/swiper.css">`
        );
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
                checkValid(el);
            });

            el.addEventListener('blur', function () {
                el.closest('.field').classList.remove('field-focus');
                setTimeout(() => {
                    checkError();
                    checkValid(el);
                }, 1000);
            });

            // add event listeners to the input element
            el.addEventListener('keypress', () => {
                checkError();
            });

            el.addEventListener('keydown', () => {
                checkError();
            });

            el.addEventListener('keyup', () => {
                checkError();
            });

            checkValid(el);

        });
    }

    //Check if fields are valid
    function checkValid(el) {
        if (el.closest('.field').querySelector('.error') != null || (el.getAttribute('value') == '' || el.getAttribute('value') == null || el.getAttribute('value') == undefined)) {
            el.closest('.field').classList.remove('field-valid');
        } else {
            el.closest('.field').classList.add('field-valid');
        }

        let count = document.querySelector('.hs_connecting_possibilities_newsletter') ? 4 : 3;

        if (document.querySelectorAll('.field-valid').length >= count) {
            document.querySelectorAll('.hidden-spz').forEach(function (el) {
                el.classList.remove('hidden-spz');
            });
        }
    }

    // Function to add .field-error class on closest parent .field class if .error is exist on .hs-input
    function checkError() {
        let timeBuffer = setInterval(() => {
            document.querySelectorAll('.hs-input').forEach(function (el) {
                if (el.closest('.field').querySelector('.error') != null) {
                    el.closest('.field').classList.add('field-error');
                } else {
                    el.closest('.field').classList.remove('field-error');
                    checkThankYouSec();
                }
            });
            document.querySelectorAll('.hs-input:not([type="checkbox"])').forEach(function (el) {
                if (el && el.value) {
                    el.closest('.field').classList.add('input-filled');
                } else {
                    el.closest('.field').classList.remove('input-filled');
                    checkThankYouSec();
                }
            });
        }, 10);

        setTimeout(() => {
            clearInterval(timeBuffer);
        }, 1000);
    }

    function submitTestDetails() {
        if (document.querySelector('form.hs-form-private .hs_spz1 .input .hs-input')) {
            document.querySelector('form.hs-form-private .hs_spz1 .input .hs-input').setAttribute('value', '#2002_contact_us_modal_questions');
            document.querySelector('form.hs-form-private .hs_spz2 .input .hs-input').setAttribute('value', 'Variant');
        }
    }
})();