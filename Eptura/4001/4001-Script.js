(function () {

    // Add unique classes to body
    document.body.classList.add('spz-4001');
    let identifyPage = window.location.pathname.replace('/', '').replace('.html', '');
    document.querySelector('body').classList.add(identifyPage);

    //For testimonial slider
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.7/dist/css/splide.min.css';
    document.head.appendChild(link);

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
                type: 'loop',
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

    const pageContent = [{
        pageName: "website-proxyclick-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693576037/eptura/4001/proxyclick_logo.svg",
        logoAlt: "Proxyclick Demo",
        listItem1: "<span>Visitor check-in.</span> Create badges, control access, and get real-time alerts. Pre-screen. Self-check in kiosks.",
        listItem2: "<span>Security & compliance.</span> Include identity verification, NDAs, safety briefings, or health screens. Log compliance.",
        listItem3: "<span>Integrations.</span> Sync data with internal access and security systems. Automated email or Slack notifications.",
        featureLogo1: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4001/Feature_Icons/Hand_icon.png",
        featureAltTag1: "Visitor check-in",
        featureCopy1: "Check visitors in electronically. Create badges, control access, and get real-time alerts. Pre-screen. Self check-in kiosks.",
        featureLogo2: "//res.cloudinary.com/spiralyze/image/upload/v1694013397/eptura/4001/hand_icon.webp",
        featureAltTag2: "Integrations",
        featureCopy2: "30+ integrations for access control, notifications, SSO, and more. Includes Slack, Microsoft Teams, and Cisco.",
        featureLogo3: "//res.cloudinary.com/spiralyze/image/upload/v1694013397/eptura/4001/hand_icon.webp",
        featureAltTag3: "Notifications",
        featureCopy3: "Automatically notify hosts of visitor arrivals via Slack, email, text message, and other platforms.",
        sliderContent: `<div class="splide testimonial-wrapper" id="reviews-sec" aria-label="Splide Basic HTML Example">
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
        </div>`,
    },
    {
        pageName: "website-managerplus-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575720/eptura/4003/managerplus-eptura-logo-1.svg",
        logoAlt: "Managerplus Demo",
        rightTitle: "Reduce asset downtime <span>by&nbsp;</span><span> 50%.</span> Streamline inventory and maintenance.",
        rightHeroImgWEBP: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_21.webp",
        rightHeroImgPNG: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_21.png",
        heroImgAlt: "Managerplus UI Image",
        listItem1: "<span>Asset management.</span> Track and manage all assets. Service history, maintenance, budgeting, and more.",
        listItem2: "<span>Maintenance workflows.</span> Automatically trigger work orders at set intervals or when a usage threshold is met.",
        listItem3: "<span>Inventory.</span> See exactly how many parts you have and when it&#8217;s time to order more. Auto-reorder when low."
    },
    {
        pageName: "website-archibus-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575732/eptura/4003/archibus-eptura-logo-color_1.svg",
        logoAlt: "Archibus Demo",
        rightTitle: "Reduce costs <span>by 30%</span> by automating space and facility management.",
        rightHeroImgWEBP: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_23.webp",
        rightHeroImgPNG: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_23.png",
        heroImgAlt: "Archibus UI Image",
        listItem1: "<span>Space planning.</span> Sort office desks, tables, and rooms. Plan for moves and occupancy changes.",
        listItem2: "<span>Work orders.</span> Automatically generate detailed work orders when assets are due for maintenance. See repair status.",
        listItem3: "<span>Scheduling.</span> Reserve desks, meeting rooms, and parking. Book rooms with the right equipment for any meeting."
    },
    {
        pageName: "website-spaceiq-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575752/eptura/4003/spaceiq-eptura-logo-color_1.svg",
        logoAlt: "SpaceIQ Demo",
        rightTitle: "Automate space planning and management. Reduce costs <span>by 30%.</span>",
        rightHeroImgWEBP: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_29.webp",
        rightHeroImgPNG: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_29.png",
        heroImgAlt: "SpaceIQ UI Image",
        listItem1: "<span>Space planning.</span> Track spaces, people, furniture, and assets in one place. Sort office desks, tables, and rooms. ",
        listItem2: "<span>Move management.</span> Plan for moves using drag-and-drop. Auto-update floor plans once you&#8217;ve relocated.",
        listItem3: "<span>Real estate portfolio.</span> Track your real estate for all your locations. Lease costs, utilization rates, and occupancies."
    },
    {
        pageName: "website-ioffice-demo",
        pageLogo: "//res.cloudinary.com/spiralyze/image/upload/v1693575766/eptura/4003/ioffice-eptura-logo-color_1.svg",
        logoAlt: "IOffice Demo",
        rightTitle: "Plan, optimize, and manage your entire facility <span>in 87%</span> less time.",
        rightHeroImgWEBP: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_31.webp",
        rightHeroImgPNG: "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4003/img-1_31.png",
        heroImgAlt: "IOffice UI Image",
        listItem1: "<span>Space planning.</span> Get a digital floor plan of your facilities. Drag-and-drop teams, desks, assets, amenities, and more.",
        listItem2: "<span>Assets.</span> Track asset costs, service requests, and repair history. Auto-create preventive maintenance work orders. ",
        listItem3: "<span>Employee services.</span> Book meeting rooms and desks. Notify hosts of visitors. Request catering. Reduce turnover 59%."
    },];

    waitForElm('#bodyId #hero #HeroFormCol #HeroForm .mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-4001');
        clearFormFields();
        loadTest();
    });

    //Clear form fields
    function clearFormFields() {
        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {
            el.value = '';
            if (el.closest('.mktoFormCol').classList.contains('input-filled')) {
                el.closest('.mktoFormCol').classList.remove('input-filled');
            }
        });
    }

    function loadTest() {
        updatePageContent();
        formUpdate();
        focusFields();
        // Add class 'safari' (used for cart scrollbar)
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
        document.querySelector('#HeroFormCol .mktoForm em').innerHTML = `Trouble submitting? <br class="mobile-only"> Email us at <a href="mailto:info@eptura-marketing.com" target="_blank" id="">info@eptura-marketing.com</a>`;



        if (document.querySelector('#HeroFormCol #HeroFormTitleText')) {
            document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = '<h6><span>Get started <span></h6>';
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
                // console.log(elem.value)
                elem.closest('.mktoFormCol').classList.add('input-filled');
                // elem.closest('.mktoFormCol').classList.remove('field-error');
            } else {
                elem.closest('.mktoFormCol').classList.remove('input-filled');
                // elem.closest('.mktoFormCol').classList.add('field-error');
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

    //URL specific image updates
    function updatePageContent() {
        waitForElm('#nav #NavLogo #logo-img').then(function () {
            pageContent.forEach(function (url) {
                console.log(identifyPage);
                console.log(url.pageName);
                if (identifyPage == url.pageName) {

                    //Logo update
                    document.querySelector('#hero > .hero_container > .row ').insertAdjacentHTML('beforebegin', `<div class="spz-logo"><a href="https://eptura.com/" target="_blank"> <img src="` + url.pageLogo + `" alt="` + url.logoAlt + `"></a></div>`);

                    //Hero Left content copy update
                    document.querySelector('#hero #HeroText').innerHTML = `<h6>VISITOR&nbsp;MANAGEMENT SOFTWARE</h6><h1>Make the visitor check-in experience 50% faster while improving security.</h1><div class="spz-review-summary"><div class="capterra-review-summary"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1690989400/eptura/3009/social_proof_capterra_sign.svg" alt="Capterra" class="capterra-logo"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1690989402/eptura/3009/stars_1.svg" alt="Star Rating" class="reviews"><div class="g2-review"><span>4.4</span> (973 reviews)</div></div><div class="g2-review-summary"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1690989400/eptura/3009/social_proof_g2_logo.svg" alt="G2 Logo" class="capterra-logo"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1690989400/eptura/3009/stars.svg" alt="Star Rating" class="reviews"><div class="g2-review"><span>4.3</span> (745 reviews)</div></div></div><ul class="hero-list-copy"><li class="list-item">` + url.listItem1 + `</li><li class="list-item">` + url.listItem2 + `</li><li class="list-item">` + url.listItem3 + `</li></ul>`;

                    //Testimonials section update
                    document.querySelector('#testimonials #TestimonialImg').innerHTML = `<div class="logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693570420/eptura/4001/logo-comcast.svg" alt="Comcast"></div><div class="logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693570420/eptura/4001/logo-generalelectric.svg" alt="General Electric"></div><div class="logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693570420/eptura/4001/logo-nbcuniversal.svg" alt="NBC Universal"></div><div class="logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693570420/eptura/4001/logo-zoom.svg" alt="Zoom"></div><div class="logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693570420/eptura/4001/logo-pepsico.svg" alt="Pepsico"></div><div class="logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693570420/eptura/4001/logo-slack.svg" alt="Slack"></div><div class="logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693570420/eptura/4001/logo-nasdaq.svg" alt="Nasdaq"></div><div class="logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693570420/eptura/4001/logo-johnson.svg" alt="Johnson"></div><div class="logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693570420/eptura/4001/logo-starbucks.svg" alt="Starbucks"></div><div class="logo-item"><img src="//res.cloudinary.com/spiralyze/image/upload/v1693570420/eptura/4001/logo-unilever.svg" alt="Unilever"></div>`;

                    document.querySelector('#testimonials #TestimonialImg').insertAdjacentHTML('afterend', `<div class=" d-flex justify-content-center align-items-center load-more"><a href="javascript:void(0);" id="load-more-btn">Learn more <img src="//res.cloudinary.com/spiralyze/image/upload/v1693571571/eptura/4001/arrow-right-chevron_2.svg" alt="Arrow down"></a></div>`)

                    //Rest of the page
                    document.querySelector('body > .body-wrapper').insertAdjacentHTML('beforeend', `<section class="spz-rest-all-section"><div class="spz-features-section">
                    <div class="features-3-col-icon">
                        <div class="features-title">Features</div>
                        <div class="feature3-itemsillustration-parent">
                            <div class="feature3-itemsillustration">
                                <div class="feature-card">
                                    <div class="card-icon">
                                        <img class="vector-icon" alt="` + url.featureAltTag1 + `" src="` + url.featureLogo1 + `" />
                                    </div>
                                    <div class="card-copy">
                                        <div class="card-subtitle">` + url.featureAltTag1 + `</div>
                                        <div class="card-copy">` + url.featureCopy1 + `</div>
                                    </div>
                                </div>
                                <div class="feature-card">
                                <div class="card-icon">
                                <img class="vector-icon" alt="` + url.featureAltTag2 + `" src="` + url.featureLogo2 + `" />
                            </div>
                            <div class="card-copy">
                                <div class="card-subtitle">` + url.featureAltTag2 + `</div>
                                <div class="card-copy">` + url.featureCopy2 + `</div>
                            </div>
                                </div>
                                <div class="feature-card">
                                <div class="card-icon">
                                <img class="vector-icon" alt="` + url.featureAltTag3 + `" src="` + url.featureLogo3 + `" />
                            </div>
                            <div class="card-copy">
                                <div class="card-subtitle">` + url.featureAltTag3 + `</div>
                                <div class="card-copy">` + url.featureCopy3 + `</div>
                            </div>
                                </div>
                            </div>
                            <div class="feature3-itemsillustration">
                                <div class="feature-card">
                                <div class="card-icon">
                                <img class="vector-icon" alt="` + url.featureAltTag4 + `" src="` + url.featureLogo4 + `" />
                            </div>
                            <div class="card-copy">
                                <div class="card-subtitle">` + url.featureAltTag4 + `</div>
                                <div class="card-copy">` + url.featureCopy4 + `</div>
                            </div>
                                </div>
                                <div class="feature-card">
                                <div class="card-icon">
                                <img class="vector-icon" alt="` + url.featureAltTag5 + `" src="` + url.featureLogo5 + `" />
                            </div>
                            <div class="card-copy">
                                <div class="card-subtitle">` + url.featureAltTag5 + `</div>
                                <div class="card-copy">` + url.featureCopy5 + `</div>
                            </div>
                                </div>
                                <div class="feature-card">
                                <div class="card-icon">
                                <img class="vector-icon" alt="` + url.featureAltTag6 + `" src="` + url.featureLogo6 + `" />
                            </div>
                            <div class="card-copy">
                                <div class="card-subtitle">` + url.featureAltTag6 + `</div>
                                <div class="card-copy">` + url.featureCopy6 + `</div>
                            </div>
                                </div>
                            </div>
                            <div class="feature3-itemsillustration">
                                <div class="feature-card">
                                <div class="card-icon">
                                <img class="vector-icon" alt="` + url.featureAltTag7 + `" src="` + url.featureLogo7 + `" />
                            </div>
                            <div class="card-copy">
                                <div class="card-subtitle">` + url.featureAltTag7 + `</div>
                                <div class="card-copy">` + url.featureCopy7 + `</div>
                            </div>
                                </div>
                                <div class="feature-card">
                                <div class="card-icon">
                                <img class="vector-icon" alt="` + url.featureAltTag8 + `" src="` + url.featureLogo8 + `" />
                            </div>
                            <div class="card-copy">
                                <div class="card-subtitle">` + url.featureAltTag8 + `</div>
                                <div class="card-copy">` + url.featureCopy8 + `</div>
                            </div>
                                </div>
                                <div class="card-icon">
                                <img class="vector-icon" alt="` + url.featureAltTag9 + `" src="` + url.featureLogo9 + `" />
                            </div>
                            <div class="card-copy">
                                <div class="card-subtitle">` + url.featureAltTag9 + `</div>
                                <div class="card-copy">` + url.featureCopy9 + `</div>
                            </div>
                            </div>
                        </div>
                        <div class="button-wrapper">
                            <div class="button">
                                <div class="call-to-action">Get started</div>
                            </div>
                        </div>
                    </div>
                </div>                        
                    </div><div class="spz-testimonial-slider"><div class="testimonial-section">
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
                            ` + url.sliderContent + `
                            </div>
                        </div>
                    </div>
                </div></div><div class="spz-footer-section"><div class="simplified-footer container"><div class="links">
                <a href="https://eptura.com/terms/saas-privacy-policy/">SaaS Privacy Policy</a><a href="https://eptura.com/terms/privacy-policy/">Privacy Policy</a><a href="https://eptura.com/terms/modern-slavery/">Modern Slavery</a></div>
                <div class="copyright-section"><p>All Rights Reserved © Eptura™</p></div></div></div></section>`);

                    loadSlider();
                }
            });
        });
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
