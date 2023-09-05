(function () {
    document.body.classList.add('spz-3006');
    waitForElm('#bodyId #hero #HeroFormCol #HeroForm .mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-3006');
        loadTest();
    });

    document.querySelector('body').classList.add(window.location.pathname.replace('/', '').replace('.html', ''));

    function loadTest() {
        updateHeroImage();
        formUpdate();
        focusFields();

        waitForElm('#HeroFormCol #HeroFormTitleText').then(function () {
            reviewSummary_3009();
        });

        // Add class 'safari' 
        if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            document.querySelector('body').classList.add('safari')
        }
        window.addEventListener("click", function (e) {
            if (e.target.classList.contains("show-comment-dynamic")) {
                e.target.parentElement.classList.add('spz-hidden');
                this.document.querySelector('#Lead_Notes__c').focus();
            }

            if (e.target.classList.contains("mktoField")) {
                showGlobalError();
            }

            if (e.target.classList.contains("mktoButton")) {
                document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {
                    checkError(el);
                    showGlobalError();
                });
            }
        });
        document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1692677050/eptura/3002/form-checkmark-errored.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-hover.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-checked.svg" as="image">`
        );
    }

    //3009 review summary test code
    function reviewSummary_3009() {
        document.querySelector('#HeroFormTitleText').insertAdjacentHTML('beforeend', `<div class="spz-review-summary"><div class="capterra-review-summary"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1690989400/eptura/3009/social_proof_capterra_sign.svg" alt="Capterra" class="capterra-logo"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1690989402/eptura/3009/stars_1.svg" alt="Star Rating" class="reviews"><div class="g2-review"><span>4.4</span> (973 reviews)</div></div><div class="g2-review-summary"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1690989400/eptura/3009/social_proof_g2_logo.svg" alt="G2 Logo" class="capterra-logo"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1690989400/eptura/3009/stars.svg" alt="Star Rating" class="reviews"><div class="g2-review"><span>4.3</span> (745 reviews)</div></div></div>`)
    }

    //custom error for checkbox field
    function showGlobalError() {
        let checkErrorforCheckBox = setInterval(() => {
            if (document.querySelector('.mktoLogicalField.mktoCheckboxList.mktoInvalid') && document.querySelector('.mktoLogicalField.mktoCheckboxList.mktoInvalid + .mktoError')) {
                document.querySelector('#LblSingle_Opt_In__c').closest('.mktoFieldWrap').classList.add('spz-cstm-error');
            }
            else {
                document.querySelector('#LblSingle_Opt_In__c').closest('.mktoFieldWrap').classList.remove('spz-cstm-error');
            }
        }, 50);

        setTimeout(() => {
            clearInterval(checkErrorforCheckBox);
        }, 1000);
    }

    //Marketo form update
    function formUpdate() {
        document.querySelector('#HeroFormCol .mktoForm em').innerHTML = `Trouble submitting?<br> Email us at <a href="mailto:info@eptura-marketing.com" target="_blank" id="">info@eptura-marketing.com</a>`;


        if (document.querySelector('#HeroFormCol #HeroFormTitleText h6')) {
            document.querySelector('#HeroFormCol #HeroFormTitleText h6').innerHTML = '<span>Get started <span>';
        }

        document.querySelector('#HeroFormCol .mktoForm em').closest('.mktoFormRow').classList.add('spz-email');
        document.querySelector('#HeroFormCol .mktoForm .spz-email').before(document.querySelector('#HeroFormCol .mktoForm .mktoButtonRow'));

        document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').insertAdjacentHTML(`beforebegin`, `<div class="spz-anchor"><a href="javascript:void(0);" class="show-comment-dynamic">+ Comment</a></div>`);

        document.querySelector('#I_am__c').addEventListener('change', function () {
            dropdownFunctionality(this.value);
        });

        document.querySelector('#LblI_am__c').textContent = 'I am...*';

        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {

            let fieldName = el.getAttribute('name');
            el.closest('.mktoFormCol').setAttribute('spz_fname', fieldName);

        });
    }

    //On value change of "I am.." field switch label od comment button
    function dropdownFunctionality(val) {
        let setBuffer = setInterval(() => {
            if (document.querySelector('#Lead_Notes__c')) {
                if (document.querySelector('.spz-anchor').classList.contains('spz-hidden')) {
                    document.querySelector('.spz-anchor').classList.remove('spz-hidden');
                }
            }
            else {
                document.querySelector('.spz-anchor').classList.add('spz-hidden');
            }

            if (val == 'Other' || val == 'A current client' || val == 'A current Partner') {
                document.querySelector('.show-comment-dynamic').textContent = '+ Please let us know how we may assist you';
            }
            else {
                document.querySelector('.show-comment-dynamic').textContent = '+ Comment';
            }
            focusFields();
        }, 5);

        setTimeout(() => {
            clearInterval(setBuffer);
        }, 50);

        waitForElm('#Solution_Type__c').then(function () {
            // document.querySelector('#Solution_Type__c option:first-child').textContent = '';
            let fieldName = document.querySelector('#Solution_Type__c').getAttribute('name');
            document.querySelector('#Solution_Type__c').closest('.mktoFormCol').setAttribute('spz_fname', fieldName);
        });
    }

    // On input focus add class on closest parent field class
    function focusFields() {
        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {

            blockChar();

            el.addEventListener('focus', function () {
                el.closest('.mktoFormCol').classList.add('field-focus');
            });
            el.addEventListener('blur', function () {
                el.closest('.mktoFormCol').classList.remove('field-focus');
                checkError(el);
            });

            // add event listeners to the input element
            el.addEventListener('keypress', () => {
                checkError(el);
            });

            el.addEventListener('change', () => {
                checkError(el);
            });

            el.addEventListener('keydown', () => {
                checkError(el);
            });

            el.addEventListener('keyup', () => {
                checkError(el);
            });
        });
    }

    // Function to add .field-error class on closest parent .field class if .error is exist on input
    function checkError(elem) {
        let timeBuffer = setInterval(() => {
            if (elem.closest('.mktoFormCol ').querySelector('.mktoError') && elem.closest('.mktoFormCol').querySelector('.mktoInvalid')) {
                elem.closest('.mktoFormCol').classList.add('field-error');
            } else {
                elem.closest('.mktoFormCol').classList.remove('field-error');
            }
            if (elem && elem.value && (elem.value != '')) {
                elem.closest('.mktoFormCol').classList.add('input-filled');
            } else {
                elem.closest('.mktoFormCol').classList.remove('input-filled');
            }

        }, 100);

        setTimeout(() => {
            clearInterval(timeBuffer);
        }, 1000);
    }

    //Block "e" from number of employees field
    function blockChar() {
        var inputBox = document.getElementById("NumberOfEmployees");

        var invalidChars = ["e",];

        inputBox.addEventListener("input", function () {
            this.value = this.value.replace(/[e\+\-]/gi, "");
        });

        inputBox.addEventListener("keydown", function (e) {
            if (invalidChars.includes(e.key)) {
                e.preventDefault();
            }
        });
    }

    //Hero image update
    function updateHeroImage() {
        waitForElm('#nav #NavLogo #logo-img').then(function () {

            //Footer logo updates for all URLs
            document.querySelector('#FooterLogo a img').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/main_logo_2.svg');

            document.querySelector('#FooterSocial a:nth-child(1) img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/eptura_twitter_footer.svg');
            document.querySelector('#FooterSocial a:nth-child(1) img').setAttribute('alt', 'Twitter');

            document.querySelector('#FooterSocial a:nth-child(2) img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/eptura_facebook_footer.svg');
            document.querySelector('#FooterSocial a:nth-child(2) img').setAttribute('alt', 'Facebook');

            document.querySelector('#FooterSocial a:nth-child(3) img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/eptura_linkedin_footer.svg');
            document.querySelector('#FooterSocial a:nth-child(3) img').setAttribute('alt', 'Linkedin');

            document.querySelector('#HeroFormPanel #HeroForm form.mktoForm .mktoFormRow .mktoFormCol .mktoFieldWrap .mktoHtmlText.mktoHasWidth span').innerHTML = `If you consent to us contacting you, please tick below to confirm you would like us to contact you: You can unsubscribe from these communications at any time. For more information our privacy practices, please review our <a href="https://eptura.com/terms/privacy-policy/" target="_blank" id="">Privacy Policy</a>.`;
            document.querySelectorAll('#HeroFormPanel #HeroForm form.mktoForm .mktoFormRow .mktoFormCol .mktoFieldWrap .mktoHtmlText.mktoHasWidth span')[1].style.display = "none";

            //URL specific image updates
            if (window.location.href.indexOf('ppc-proxyclick-discover-a-better-way-to-check-in-visitors') > -1) {
                if (document.body.classList.contains('safari')) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989323/eptura/3001/endorsed_logos_1.png" alt="Proxyclick" class="logo-img">`);
                }
                else {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/endorsed_logos.webp" alt="Proxyclick" class="logo-img">`);
                }

                const image = document.querySelector("body.spz-3006 .body-wrapper #hero .hero_container > .row #HeroText > h1.pt-4 img");
                image.src = "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/proxyclick-ui.webp";
                image.setAttribute("alt", "Simplify visitor check-in");

                document.querySelector('section#testimonials').insertAdjacentHTML('beforebegin', `<div class="testimonial-section">
                    <div class="container">
                        <div class="testimonial-main-section">
                            <div class="left-box">
                                <div class="reviews-main-box">
                                    <div class="reviews-img-box">
                                        <div class="capterra-img">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/capterra_logo.svg" alt="Capterra" title="Capterra">
                                        </div>
                                        <div class="star-img">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/stars.svg" alt="Capterra Stars">
                                        </div>
                                    </div>
                                    <div class="reviews-box"><b>4.4</b>(973 reviews)</div>
                                </div>
                            </div>
                            <div class="right-box">
                                <div class="splide testimonial-wrapper" id="reviews-sec" aria-label="Splide Basic HTML Example">
                                    <div class="splide__track">
                                        <ul class="splide__list">
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">We <b>reduced the time</b> for the receptionist to welcome each visitor <b>by 50%.</b> But the most important isn't the time we save, it's the time it gives us to <b>better welcome</b> our visitors.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_eric_van_lint.webp" alt="Eric Van Lint">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Eric Van Lint</h3>
                                                                <p>Senior Alliance Manager</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo">
                                                            <img src="https://res.cloudinary.com/spiralyze/image/upload/v1692103284/eptura/3006/logo_-_dimension_data.webp" alt="Dimension Data">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo mobile-sec">
                                                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1692103284/eptura/3006/logo_-_dimension_data.webp" alt="Dimension Data">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">Proxyclick was able to <b>solve all the challenges</b> we had. It's <b>user-friendly,</b> and <br>you don't need a lot of time to train<br class="som-text"> someone to use it.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_alex_lim.webp" alt="Alex Lim">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Alex Lim</h3>
                                                                <p>Workplace</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo kfc-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_kfc.webp" alt="Kfc">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo kfc-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_kfc.webp" alt="Kfc">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">The <b>notifications</b> in Proxyclick have<br> <b>changed our lives.</b> It&#8217;s much easier for the front desk to notify people when they have packages than it used to be, when they were calling each person individually.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_dave_dlugose.webp" alt="Dave Dlugose">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Dave Dlugose</h3>
                                                                <p>IT Director</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo kfc-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1692103304/eptura/3006/logo_-_salvation.webp" alt="Salvation">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo kfc-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1692103304/eptura/3006/logo_-_salvation.webp" alt="Salvation">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">It&#8217;s <b>user-friendly,</b> allows us to configure <b>different access levels</b> for different users, and it&#8217;s <b>cloud-based,</b> so we can retrieve information remotely and easily. </p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_josef_ong.webp" alt="Josef Ong">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Josef Ong</h3>
                                                                <p>Regional Facilities Expert</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo dnv-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_dnv.webp" alt="Dnv">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo dnv-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_dnv.webp" alt="Dnv">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">By providing a <b>great visitor experience,</b> Proxyclick influences the perception of our company. It has <b>positively changed the way visitors see Greencore.</b></p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_costas_moraitis.webp" alt="Costas Moraitis">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Costas Moraitis</h3>
                                                                <p>IT Business Relationship Manager</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo green-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo-greencore.webp" alt="Greencore">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo green-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo-greencore.webp" alt="Greencore">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">Proxyclick was the <b>most customizable</b> and <b>impressive solution on the market,</b> and the perfect complement to our on-premise access control system.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_marc_a_cecere.webp" alt="Marc A. Cecere">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Marc A. Cecere</h3>
                                                                <p>Director of Applications</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo kfc-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_bny.webp" alt="Bny">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo kfc-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_bny.webp" alt="Bny">
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);
            }

            else if (window.location.href.indexOf('ppc-condeco-make-your-flexible-office-work-better') > -1) {
                if (document.body.classList.contains('safari')) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989344/eptura/3001/endorsed_logos_2.png" alt="Condeco" class="logo-img">`);
                }
                else {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/endorsed_logos_2.webp" alt="Condeco" class="logo-img">`);
                }

                const image1 = document.querySelector("body.spz-3006 .body-wrapper #hero .hero_container > .row #HeroText > h1.pt-4 img");
                image1.src = "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/condeco-ui.webp";
                image1.setAttribute("alt", "Make hybrid work");

                document.querySelector('section#testimonials').insertAdjacentHTML('beforebegin', `<div class="testimonial-section condeco-testimonial">
                    <div class="container">
                        <div class="testimonial-main-section">
                            <div class="left-box">
                                <div class="reviews-main-box">
                                    <div class="reviews-img-box">
                                        <div class="capterra-img">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/capterra_logo.svg" alt="Capterra" title="Capterra">
                                        </div>
                                        <div class="star-img">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/stars.svg" alt="Capterra Stars">
                                        </div>
                                    </div>
                                    <div class="reviews-box"><b>4.4</b>(973 reviews)</div>
                                </div>
                            </div>
                            <div class="right-box">
                                <div class="splide testimonial-wrapper" id="reviews-sec" aria-label="Splide Basic HTML Example">
                                    <div class="splide__track">
                                        <ul class="splide__list">
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">Condeco was the <b>perfect fit:</b> an established product that had <b>market traction,</b> and we could <b>get it in quickly.</b> That was the bottom line.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_gerry_conchar.webp" alt="Gerry Conchar">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Gerry Conchar</h3>
                                                                <p>Global Delivery Lead</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo kelloggs-sec">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_kelloggs.webp" alt="Kelloggs">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo kelloggs-sec mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_kelloggs.webp" alt="Kelloggs">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">Employees wanted to start returning to the office, but <b>we didn&#8217;t have any measures in place to manage this</b> and ensure social distancing was adhered to in our workplace. We <b>needed a booking system to manage <br class="som-text">this successfully.</b></p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_ross_drake.webp" alt="Ross Drake">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Ross Drake</h3>
                                                                <p>Head of IT Delivery & Support</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo aston-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_aston_martin.webp" alt="Aston Martin">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo aston-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_aston_martin.webp" alt="Aston Martin">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">Compared to all the others, Condeco appealed to us the most. We are <b>extremely satisfied</b> with Condeco, as the solution <b>optimizes and digitalizes our work in the office.</b></p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_stefan_hanst.webp" alt="Stefan Hanst">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Stefan Hanst</h3>
                                                                <p>CoE Facility Management</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo aston-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__ing_deutschland.webp" alt="Ing Deutschland">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo aston-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__ing_deutschland.webp" alt="Ing Deutschland">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">Using Condeco desk booking has allowed us to <b>create workplace neighbourhoods;</b> <br>teams who work on the same discipline or department have priority booking. Using this technology allows us to <b>truly embrace activity-based working.</b></p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_nic_pryke.webp" alt="Nic Pryke">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Nic Pryke</h3>
                                                                <p>Design Director</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo aston-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__oktra.webp" alt="Oktra">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo aston-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__oktra.webp" alt="Dnv">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">I&#8217;m used to organizations that book everything through Microsoft Outlook. There&#8217;s a <b>number of challenges in terms of clashes and having to manage a calendar</b> for every single space. <b>Having a unified system removes that</b> and it basically becomes automated.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo.webp" alt="Jon Cartledge">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Jon Cartledge</h3>
                                                                <p>IT Service Desk Manager</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo aston-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__pitcher_partners.webp" alt="Pitcher Partners">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo aston-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__pitcher_partners.webp" alt="Pitcher Partners">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes"><b>Room booking</b> became <b>significantly less stressful</b> after Condeco was launched. We used to have conflicts in our older system and arguments at the door about who booked a room first. With Condeco <b>I can trust that when I book a room</b> everyone will know and there <b>won't be any confusion.</b></p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_lucas_lipsky.webp" alt="Lucas Lipsky">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Lucas Lipsky</h3>
                                                                <p>Product Owner</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo aston-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__comcast_business.webp" alt="Comcast Business">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo aston-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__comcast_business.webp" alt="Comcast Business">
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);
            }

            else if (window.location.href.indexOf('ppc-archibus-maintenance-software') > -1) {
                if (document.body.classList.contains('safari')) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989355/eptura/3001/endorsed_logos_3.png" alt="Archibus" class="logo-img">`);
                }
                else {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/endorsed_logos_4.webp" alt="Archibus" class="logo-img">`);
                }

                document.body.classList.add('ppc-archibus');

                if (document.querySelector('.ppc-archibus #HeroFormCol #HeroFormTitleText h2')) {
                    document.querySelector('.ppc-archibus #HeroFormCol #HeroFormTitleText h2').innerHTML = '<span>Get started <span>';
                }

                document.querySelector('body.spz-3006 .body-wrapper #hero .hero_container > .row #HeroText > p.pt-4').insertAdjacentHTML('afterend', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/archibus-ui.webp" alt="optimize your maintenance operation">`);

                document.querySelector('section#testimonials').insertAdjacentHTML('beforebegin', `<div class="testimonial-section archibus-testimonial">
                    <div class="container">
                        <div class="testimonial-main-section">
                            <div class="left-box">
                                <div class="reviews-main-box">
                                    <div class="reviews-img-box">
                                        <div class="capterra-img">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/capterra_logo.svg" alt="Capterra" title="Capterra">
                                        </div>
                                        <div class="star-img">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/stars.svg" alt="Capterra Stars">
                                        </div>
                                    </div>
                                    <div class="reviews-box"><b>4.4</b>(973 reviews)</div>
                                </div>
                            </div>
                            <div class="right-box">
                                <div class="splide testimonial-wrapper" id="reviews-sec" aria-label="Splide Basic HTML Example">
                                    <div class="splide__track">
                                        <ul class="splide__list">
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">Archibus is <b>saving money</b> for us <b>in many ways,</b> by more accurately <b>tracking our <br>assets</b> as well as their condition and costs, <b>identifying surplus space,</b> improving <b>management of our fleet of vehicles,</b> and aiding safety and business continuity.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_ralph_linne.webp" alt="Ralph Linne">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Ralph Linne</h3>
                                                                <p>Director of Country Facilities</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo hamilton-sec">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_hamilton_county.webp" alt="Hamilton County">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo hamilton-sec mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_hamilton_county.webp" alt="Hamilton County">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">Archibus is <b>one of the more interactive systems I have used,</b> and I&#8217;ve used some really robust systems. If someone were coming into my job, <b>I&#8217;d be confident in showing them how to use Archibus.</b> It&#8217;s a <br>nice one to navigate.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_charlotte_amess.webp" alt="Charlotte Amess">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Charlotte Amess</h3>
                                                                <p>System Developer and Space Coordinator</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo john-sec">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_york_st_john_university.webp" alt="York St John University">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo john-sec mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_york_st_john_university.webp" alt="York St John University">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">The biggest win for us is that <b>everyone is working with the same numbers.</b> Before, when we had multiple systems, we had multiple sets of numbers, which could sometimes cause trouble.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_julia_trimmer.webp" alt="Julia Trimmer">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Julia Trimmer</h3>
                                                                <p>Senior IT Analyst</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo hamilton-sec">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_duke.webp" alt="Duke">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo hamilton-sec mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_duke.webp" alt="Duke">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">We once had a very paper-driven work order process where a <b>work request could take up to three and a half weeks</b> from the initial request to getting that work order into a tradesperson&#8217;s hands. <b>Now it takes three days.</b></p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_murray_hunt.webp" alt="Murray Hunt">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Murray Hunt</h3>
                                                                <p>Manager of Integrated Workplace Management Systems</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo board-sec">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_calgary_board_of_education.webp" alt="Calgary Board Of Education">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo board-sec mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_calgary_board_of_education.webp" alt="Calgary Board Of Education">
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);
            }

            else if (window.location.href.indexOf('ppc-eptura-room-management') > -1) {
                document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/main_logo_2.svg" alt="Eptura" class="logo-img">`);

                document.body.classList.add('ppc-eptura-room-management');

                const image3 = document.querySelector("body.spz-3006 .body-wrapper #hero .hero_container > .row #HeroText > h1.pt-4 span img");
                image3.src = "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/room-management-ui_2.webp";
                image3.setAttribute("alt", "Make hybrid work");

                document.querySelector('section#testimonials').insertAdjacentHTML('beforebegin', `<div class="testimonial-section eptura-testimonial">
                    <div class="container">
                        <div class="testimonial-main-section">
                            <div class="left-box">
                                <div class="reviews-main-box">
                                    <div class="reviews-img-box">
                                        <div class="capterra-img">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/capterra_logo.svg" alt="Capterra" title="Capterra">
                                        </div>
                                        <div class="star-img">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/stars.svg" alt="Capterra Stars">
                                        </div>
                                    </div>
                                    <div class="reviews-box"><b>4.4</b>(973 reviews)</div>
                                </div>
                            </div>
                            <div class="right-box">
                                <div class="splide testimonial-wrapper" id="reviews-sec" aria-label="Splide Basic HTML Example">
                                    <div class="splide__track">
                                        <ul class="splide__list">
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">We <b>reduced the time</b> for the receptionist to welcome each visitor <b>by 50%.</b> But the most important isn't the time we save, it's the time it gives us to <b>better welcome</b> our visitors.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_eric_van_lint.webp" alt="Eric Van Lint">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Eric Van Lint</h3>
                                                                <p>Senior Alliance Manager</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_dimension_data.webp" alt="Dimension Data">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_dimension_data.webp" alt="Dimension Data">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">We once had a very paper-driven work order process where a <b>work request could take up to three and a half weeks</b> from the initial request to getting that work order into a tradesperson&#8217;s hands. <b>Now it takes three days.</b></p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_murray_hunt.webp" alt="Murray Hunt">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Murray Hunt</h3>
                                                                <p>Manager of Integrated Workplace Management Systems</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo board-sec">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_calgary_board_of_education.webp" alt="Calgary Board Of Education">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo board-sec mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_calgary_board_of_education.webp" alt="Calgary Board Of Education">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">The biggest win for us is that <b>everyone is working with the same numbers.</b> Before, when we had multiple systems, we had multiple sets of numbers, which could sometimes cause trouble.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_julia_trimmer.webp" alt="Julia Trimmer">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Julia Trimmer</h3>
                                                                <p>Senior IT Analyst</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo hamilton-sec">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_duke.webp" alt="Duke">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo hamilton-sec mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_duke.webp" alt="Duke">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">It&#8217;s <b>user-friendly,</b> allows us to configure <b>different access levels</b> for different users, and it&#8217;s <b>cloud-based,</b> so we can retrieve information remotely and easily. </p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_josef_ong.webp" alt="Josef Ong">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Josef Ong</h3>
                                                                <p>Regional Facilities Expert</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo dnv-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_dnv.webp" alt="Dnv">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo dnv-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_dnv.webp" alt="Dnv">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">I&#8217;m used to organizations that book everything through Microsoft Outlook. There&#8217;s a <b>number of challenges in terms of clashes and having to manage a calendar</b> for every single space. <b>Having a unified system removes that</b> and it basically becomes automated.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo.webp" alt="Jon Cartledge">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Jon Cartledge</h3>
                                                                <p>IT Service Desk Manager</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo aston-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__pitcher_partners.webp" alt="Pitcher Partners">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo aston-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__pitcher_partners.webp" alt="Pitcher Partners">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">The Software is <b>really easy to use</b> and makes me <b>feel confident about returning to the office.</b> I also like searching for colleagues who I like to work with from the mobile app.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_bruno_justo.webp" alt="Bruno Justo">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Bruno Justo</h3>
                                                                <p>Commercial Manager</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo hamilton-sec">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__wiserxp.webp" alt="Wiserxp">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo hamilton-sec mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__wiserxp.webp" alt="Wiserxp">
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);
            }

            else if (window.location.href.indexOf('ppc-eptura-asset-management') > -1) {
                document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/main_logo_2.svg" alt="Eptura" class="logo-img">`);

                document.body.classList.add('ppc-eptura-asset-management');

                const image4 = document.querySelector("body.spz-3006 .body-wrapper #hero .hero_container > .row #HeroText > h1.pt-4 img");
                image4.src = "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/asset-management-ui_1.webp";
                image4.setAttribute("alt", "Maximize the performance of your assets");

                document.querySelector('section#testimonials').insertAdjacentHTML('beforebegin', `<div class="testimonial-section eptura-testimonial">
                    <div class="container">
                        <div class="testimonial-main-section">
                            <div class="left-box">
                                <div class="reviews-main-box">
                                    <div class="reviews-img-box">
                                        <div class="capterra-img">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/capterra_logo.svg" alt="Capterra" title="Capterra">
                                        </div>
                                        <div class="star-img">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/stars.svg" alt="Capterra Stars">
                                        </div>
                                    </div>
                                    <div class="reviews-box"><b>4.4</b>(973 reviews)</div>
                                </div>
                            </div>
                            <div class="right-box">
                                <div class="splide testimonial-wrapper" id="reviews-sec" aria-label="Splide Basic HTML Example">
                                    <div class="splide__track">
                                        <ul class="splide__list">
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">We <b>reduced the time</b> for the receptionist to welcome each visitor <b>by 50%.</b> But the most important isn't the time we save, it's the time it gives us to <b>better welcome</b> our visitors.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_eric_van_lint.webp" alt="Eric Van Lint">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Eric Van Lint</h3>
                                                                <p>Senior Alliance Manager</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_dimension_data.webp" alt="Dimension Data">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_dimension_data.webp" alt="Dimension Data">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">We once had a very paper-driven work order process where a <b>work request could take up to three and a half weeks</b> from the initial request to getting that work order into a tradesperson&#8217;s hands. <b>Now it takes three days.</b></p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_murray_hunt.webp" alt="Murray Hunt">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Murray Hunt</h3>
                                                                <p>Manager of Integrated Workplace Management Systems</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo board-sec">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_calgary_board_of_education.webp" alt="Calgary Board Of Education">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo board-sec mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_calgary_board_of_education.webp" alt="Calgary Board Of Education">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">The biggest win for us is that <b>everyone is working with the same numbers.</b> Before, when we had multiple systems, we had multiple sets of numbers, which could sometimes cause trouble.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_julia_trimmer.webp" alt="Julia Trimmer">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Julia Trimmer</h3>
                                                                <p>Senior IT Analyst</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo hamilton-sec">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_duke.webp" alt="Duke">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo hamilton-sec mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_duke.webp" alt="Duke">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">It&#8217;s <b>user-friendly,</b> allows us to configure <b>different access levels</b> for different users, and it&#8217;s <b>cloud-based,</b> so we can retrieve information remotely and easily. </p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_josef_ong.webp" alt="Josef Ong">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Josef Ong</h3>
                                                                <p>Regional Facilities Expert</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo dnv-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_dnv.webp" alt="Dnv">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo dnv-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_dnv.webp" alt="Dnv">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">I&#8217;m used to organizations that book everything through Microsoft Outlook. There&#8217;s a <b>number of challenges in terms of clashes and having to manage a calendar</b> for every single space. <b>Having a unified system removes that</b> and it basically becomes automated.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo.webp" alt="Jon Cartledge">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Jon Cartledge</h3>
                                                                <p>IT Service Desk Manager</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo aston-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__pitcher_partners.webp" alt="Pitcher Partners">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo aston-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__pitcher_partners.webp" alt="Pitcher Partners">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">The Software is <b>really easy to use</b> and makes me <b>feel confident about returning to the office.</b> I also like searching for colleagues who I like to work with from the mobile app.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_bruno_justo.webp" alt="Bruno Justo">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Bruno Justo</h3>
                                                                <p>Commercial Manager</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo hamilton-sec">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__wiserxp.webp" alt="Wiserxp">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo hamilton-sec mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__wiserxp.webp" alt="Wiserxp">
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);
            }

            else if (window.location.href.indexOf('ppc-eptura') > -1) {
                document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/main_logo_2.svg" alt="Eptura" class="logo-img">`);

                document.body.classList.add('ppc-eptura');

                const image2 = document.querySelector("body.spz-3006 .body-wrapper #hero .hero_container > .row > .col-md.pb-5 div#HeroText p + h1 img");
                image2.src = "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/eptura-demo-ui.webp";
                image2.setAttribute("alt", "one platform to bring together");

                document.querySelector('section#testimonials').insertAdjacentHTML('beforebegin', `<div class="testimonial-section eptura-testimonial">
                    <div class="container">
                        <div class="testimonial-main-section">
                            <div class="left-box">
                                <div class="reviews-main-box">
                                    <div class="reviews-img-box">
                                        <div class="capterra-img">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/capterra_logo.svg" alt="Capterra" title="Capterra">
                                        </div>
                                        <div class="star-img">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1691056843/eptura/3006/stars.svg" alt="Capterra Stars">
                                        </div>
                                    </div>
                                    <div class="reviews-box"><b>4.4</b>(973 reviews)</div>
                                </div>
                            </div>
                            <div class="right-box">
                                <div class="splide testimonial-wrapper" id="reviews-sec" aria-label="Splide Basic HTML Example">
                                    <div class="splide__track">
                                        <ul class="splide__list">
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">We <b>reduced the time</b> for the receptionist to welcome each visitor <b>by 50%.</b> But the most important isn't the time we save, it's the time it gives us to <b>better welcome</b> our visitors.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_eric_van_lint.webp" alt="Eric Van Lint">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Eric Van Lint</h3>
                                                                <p>Senior Alliance Manager</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_dimension_data.webp" alt="Dimension Data">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_dimension_data.webp" alt="Dimension Data">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">We once had a very paper-driven work order process where a <b>work request could take up to three and a half weeks</b> from the initial request to getting that work order into a tradesperson&#8217;s hands. <b>Now it takes three days.</b></p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_murray_hunt.webp" alt="Murray Hunt">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Murray Hunt</h3>
                                                                <p>Manager of Integrated Workplace Management Systems</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo board-sec">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_calgary_board_of_education.webp" alt="Calgary Board Of Education">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo board-sec mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_calgary_board_of_education.webp" alt="Calgary Board Of Education">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">The biggest win for us is that <b>everyone is working with the same numbers.</b> Before, when we had multiple systems, we had multiple sets of numbers, which could sometimes cause trouble.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_julia_trimmer.webp" alt="Julia Trimmer">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Julia Trimmer</h3>
                                                                <p>Senior IT Analyst</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo hamilton-sec">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_duke.webp" alt="Duke">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo hamilton-sec mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_duke.webp" alt="Duke">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">It&#8217;s <b>user-friendly,</b> allows us to configure <b>different access levels</b> for different users, and it&#8217;s <b>cloud-based,</b> so we can retrieve information remotely and easily. </p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_josef_ong.webp" alt="Josef Ong">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Josef Ong</h3>
                                                                <p>Regional Facilities Expert</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo dnv-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_dnv.webp" alt="Dnv">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo dnv-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-_dnv.webp" alt="Dnv">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">I&#8217;m used to organizations that book everything through Microsoft Outlook. There&#8217;s a <b>number of challenges in terms of clashes and having to manage a calendar</b> for every single space. <b>Having a unified system removes that</b> and it basically becomes automated.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo.webp" alt="Jon Cartledge">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Jon Cartledge</h3>
                                                                <p>IT Service Desk Manager</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo aston-logo">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__pitcher_partners.webp" alt="Pitcher Partners">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo aston-logo mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__pitcher_partners.webp" alt="Pitcher Partners">
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="testimonial-item splide__slide">
                                                <div class="testimonial-item-inner">
                                                    <p class="quotes">The Software is <b>really easy to use</b> and makes me <b>feel confident about returning to the office.</b> I also like searching for colleagues who I like to work with from the mobile app.</p>
                                                    <div class="testimonial-info">
                                                        <div class="testimonials-item">
                                                            <div class="img-wrapper">
                                                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/photo_-_bruno_justo.webp" alt="Bruno Justo">
                                                            </div>
                                                            <div class="testimonial-details">
                                                                <h3>Bruno Justo</h3>
                                                                <p>Commercial Manager</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonials-logo hamilton-sec">
                                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__wiserxp.webp" alt="Wiserxp">
                                                        </div>
                                                    </div>
                                                    <div class="testimonials-logo hamilton-sec mobile-sec">
                                                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3006/logo_-__wiserxp.webp" alt="Wiserxp">
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);
            }

        });

        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.7/dist/css/splide.min.css';
        document.head.appendChild(link);

        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.7/dist/js/splide.min.js';
        document.head.appendChild(script);

        function getScript(source, callback) {
            var el = document.createElement("script");
            el.onload = callback;
            el.src = source;
            document.body.appendChild(el);
        }

        function loadSlider() {
            getScript("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js", function () {
                new Splide("#reviews-sec", {
                    perPage: 2,
                    // height: '254px',
                    pagination: true,
                    gap: '56px',
                    arrows: false,
                    type   : 'loop',
                    breakpoints: {
                        1360: {
                            gap: '35',
                            // height: '310px',
                        },
                        1199: {
                            // height: '230px',
                            gap: '56px',
                        },
                        767: {
                            perPage: 1,
                            gap: '0px',
                        }
                    }
                }).mount();
            });
        }
        loadSlider();
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
})();
