window.dataLayer.push({
    'event' : 'optimizely_experiment_details',
    'opt_experimentName': '#3008_Eptura_LPs_Email_CTA',
    'opt_variantName': '#3008_Variant',
});

(function () {
    document.body.classList.add('spz-3008');
    waitForElm('#bodyId #hero #HeroFormCol #HeroForm .mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-3008');
        loadTest();
    });

    function loadTest() {
        updateHeroImage();
        formUpdate();
        focusFields();
        // Add class 'safari' (used for cart scrollbar)
        if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            document.querySelector('body').classList.add('safari');
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
            if (e.target.classList.contains("close-modal")) {
                document.querySelector('#spz-modal-form').classList.remove('show-modal-spz');
                this.document.body.classList.remove('modal-open');
            }
        });
        document.querySelector('head').insertAdjacentHTML("afterbegin", `
            <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1692677050/eptura/3002/form-checkmark-errored.svg" as="image">
            <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-hover.svg" as="image">
            <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-checked.svg" as="image">
            <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3008/close_icon_hover.svg" as="image">`);
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
        MktoForms2.whenReady(function (form) {

            document.querySelector('#HeroFormCol .mktoForm em').innerHTML = `Trouble submitting? <br class="mobile-only"> Email us at <a href="mailto:info@eptura-marketing.com" target="_blank">info@eptura-marketing.com</a>`;

            // Wrap div '#HeroFormPanel' with div '.form-wrapper-spz'
            if (document.querySelectorAll('#spz-modal-form').length == 0) {
                document.querySelector('#HeroFormPanel').insertAdjacentHTML('beforebegin', `<div class="form-wrapper-spz" id="spz-modal-form"></div>`);
                document.querySelector('.form-wrapper-spz').appendChild(document.querySelector('#HeroFormPanel'));
            }


            document.querySelector('#HeroFormPanel').insertAdjacentHTML('afterbegin',
                `<div class="form-close">
                <a href="javascript:void(0)" class="close-modal"></a>
            </div>`);


            if (document.querySelector('#HeroFormCol #HeroFormTitleText h6')) {
                document.querySelector('#HeroFormCol #HeroFormTitleText h6').innerHTML = '<span>Get started</span>';
            }

            document.querySelector('#HeroFormCol .mktoForm em').closest('.mktoFormRow').classList.add('spz-email');
            document.querySelector('#HeroFormCol .mktoForm .spz-email').before(document.querySelector('#HeroFormCol .mktoForm .mktoButtonRow'));

            if (document.querySelectorAll('.spz-anchor').length == 0) {
                document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').insertAdjacentHTML(`beforebegin`, `<div class="spz-anchor"><a href="javascript:void(0);" class="show-comment-dynamic">+ Comment</a></div>`);
            }

            document.querySelector('#I_am__c').addEventListener('change', function () {
                dropdownFunctionality(this.value);
            });

            document.querySelector('#LblI_am__c').textContent = 'I am...*';

            document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {
                let fieldName = el.getAttribute('name');
                el.closest('.mktoFormCol').setAttribute('spz_fname', fieldName);
            });

            // // Add unique classes on fields before moving
            // document.querySelector('#HeroForm .mktoForm .mktoFormRow [spz_fname="FirstName"]').parentElement.classList.add('user-dt-spz');
            // document.querySelector('#HeroForm .mktoForm .mktoFormRow [spz_fname="Email"]').parentElement.classList.add('email-dt-spz');
            // document.querySelector('#HeroForm .mktoForm .mktoFormRow [spz_fname="Country"]').parentElement.classList.add('country-dt-spz');

            // // Move Element '.email-dt-spz' and '.country-dt-spz' before '.user-dt-spz'
            // moveElement('#HeroForm .mktoForm .email-dt-spz', '#HeroForm .mktoForm .user-dt-spz');
            // moveElement('#HeroForm .mktoForm .country-dt-spz', '#HeroForm .mktoForm .user-dt-spz');
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

    //Hero image update
    function updateHeroImage() {
        waitForElm('#nav #NavLogo #logo-img').then(function () {

            //Footer logo updates for all URLs
            document.querySelector('#FooterLogo a img').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/main_logo_1.svg');

            document.querySelector('#FooterSocial a:nth-child(1) img').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/eptura_twitter_footer.svg');

            document.querySelector('#FooterSocial a:nth-child(2) img').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/eptura_facebook_footer.svg');

            document.querySelector('#FooterSocial a:nth-child(3) img').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/eptura_linkedin_footer.svg');

            //URL specific image updates
            if (window.location.href.indexOf('/ppc-proxyclick-discover-a-better-way-to-check-in-visitors') > -1) {
                if (document.querySelectorAll('#NavLogo > .logo-img').length == 0) {
                    if (document.body.classList.contains('safari')) {
                        document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989323/eptura/3001/endorsed_logos_1.png" alt="Proxyclick" class="logo-img">`);
                    } else {
                        document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_1.webp" alt="Proxyclick" class="logo-img">`);
                    }
                }

                document.body.classList.add('ppc-proxyclick');

                document.querySelector('#hero #HeroText').innerHTML = `<h6>VISITOR&nbsp;MANAGEMENT SOFTWARE</h6>
                    <h1>Make the visitor check-in experience 50% faster while improving security.</h1>
                    <ul class="hero-list-copy">
                        <li class="list-item"><span>Visitor check-in.</span> Create badges, control access, and get real-time alerts. Pre-screen. Self-check in kiosks.</li>
                        <li class="list-item"><span>Security & compliance.</span> Include identity verification, NDAs, safety briefings, or health screens. Log compliance.</li>
                        <li class="list-item"><span>Integrations.</span> Sync data with internal access and security systems. Automated email or Slack notifications.</li>
                    </ul>`;

                getInstantDemoCard();

                document.querySelector('#hero #HeroFormCol').insertAdjacentHTML("afterbegin",
                    `<div class="hero-img">
                        <picture>
                            <source media="(min-width:1200px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-proxyclick_-_desktop_3.webp" type="image/webp">
                            <source media="(min-width:768px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-proxyclick_-_tablet.webp" type="image/webp">
                            <source media="(min-width:300px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-proxyclick_-_tablet_1.webp" type="image/webp">
                            <source srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-proxyclick_-_desktop_3.png" type="image/png"> 
                            <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-proxyclick_-_tablet_1.webp" alt="Proxyclick">
                        </picture>
                    </div>`);


            }
            else if (window.location.href.indexOf('/ppc-condeco-make-your-flexible-office-work-better') > -1) {
                if (document.querySelectorAll('#NavLogo > .logo-img').length == 0) {
                    if (document.body.classList.contains('safari')) {
                        document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989344/eptura/3001/endorsed_logos_2.png" alt="Condeco" class="logo-img">`);
                    } else {
                        document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_2.webp" alt="Condeco" class="logo-img">`);
                    }
                }

                document.body.classList.add('ppc-condeco');

                document.querySelector('#hero #HeroText').innerHTML = `<h6>Workspace Scheduling software</h6><h1>Streamline desk and meeting room scheduling. Simplify hybrid work.</h1>
                <ul class="hero-list-copy">
                    <li class="list-item"><span>Bookings.</span> Schedule desks, meetings, and parking via the app or your calendar. Instantly notify attendees of any changes. </li>
                    <li class="list-item"><span>Room selection.</span> Find rooms with the equipment and space you need. Auto-book new rooms if you reschedule meetings.</li>
                    <li class="list-item"><span>Collaboration.</span> See when co-workers will be in-office and their desk location. Easily manage your hybrid work schedule. </li>
                </ul>`;

                getInstantDemoCard();

                document.querySelector('#hero #HeroFormCol').insertAdjacentHTML("afterbegin",
                    `<div class="hero-img">
                        <picture>
                            <source media="(min-width:1200px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-condeco_-_desktop_1.webp" type="image/webp">
                            <source media="(min-width:768px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-condeco-tablet.webp" type="image/webp">
                            <source media="(min-width:300px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-condeco_-_mobile.webp" type="image/webp">
                            <source srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-condeco_-_desktop_1.png" type="image/png"> 
                            <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-condeco_-_mobile.webp" alt="Condeco">
                        </picture>
                    </div>`);
            }
            else if (window.location.href.indexOf('/ppc-archibus-maintenance-software') > -1) {
                if (document.querySelectorAll('#NavLogo > .logo-img').length == 0) {
                    if (document.body.classList.contains('safari')) {
                        document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989355/eptura/3001/endorsed_logos_3.png" alt="Archibus" class="logo-img">`);
                    }
                    else {
                        document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_3.webp" alt="Archibus" class="logo-img">`);
                    }
                }

                if (document.querySelector('#HeroFormCol #HeroFormTitleText')) {
                    document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = '<h6>Fill in your details and <span>let&#x2019;s get started <span></span></span></h6>';
                }

                document.body.classList.add('ppc-archibus');

                document.querySelector('#hero #HeroText').innerHTML = `<h6>Next-Gen Maintenance Management Software</h6><h1>Automate preventive maintenance and repair. Reduce costs by 30%.</h1>
                <ul class="hero-list-copy">
                    <li class="list-item"><span>Work orders.</span> Automatically generate detailed work orders when assets are due for maintenance. </li>
                    <li class="list-item"><span>Repair management.</span> Auto-send requests to relevant workers via the mobile app. See repair status and track orders.</li>
                    <li class="list-item"><span>Budgeting.</span> Get analytics on cost, labor, and performance of operations. Easily generate plans and budgets.</li>
                </ul>`;

                getInstantDemoCard();

                document.querySelector('#hero #HeroFormCol').insertAdjacentHTML("afterbegin",
                    `<div class="hero-img">
                        <picture>
                            <source media="(min-width:1200px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-archibus__-_desktop_1.webp" type="image/webp">
                            <source media="(min-width:768px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-archibus_-tablet.webp" type="image/webp">
                            <source media="(min-width:300px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-archibus__-_mobile_1.webp" type="image/webp">
                            <source srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-archibus__-_desktop_1.png" type="image/png">
                            <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-archibus__-_mobile_1.webp" alt="Archibus">
                        </picture>
                    </div>`);
            }
            else if (window.location.href.indexOf('/ppc-eptura-asset-management') > -1) {
                if (document.querySelectorAll('#NavLogo > .logo-img').length == 0) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/main_logo_1.svg" alt="Eptura" class="logo-img">`);
                }

                document.body.classList.add('ppc-eptura-ast-mgmt');

                document.querySelector('#hero #HeroText').innerHTML = `<h6>Asset Management Software</h6><h1>Automate equipment maintenance. Reduce costs. Increase performance.</h1>
                <ul class="hero-list-copy">
                    <li class="list-item"><span>Work orders. </span> View all work orders in one portal. Easily provide technicians with schedules, locations, and task descriptions.</li>
                    <li class="list-item"><span>Lifecycle tracking. </span> See your cost history, repair schedules, and upcoming preventive maintenance for all your assets.</li>
                    <li class="list-item"><span>Cost forecasting. </span> Track expenses and cost comparisons. Create monthly budgets based on historical data.</li>
                </ul>`;

                getInstantDemoCard();

                document.querySelector('#hero #HeroFormCol').insertAdjacentHTML("afterbegin",
                    `<div class="hero-img">
                        <picture>
                            <source media="(min-width:1200px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-assets_management_-_desktop_1.webp" type="image/webp">
                            <source media="(min-width:768px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-assets_management_-_tablet.webp" type="image/webp">
                            <source media="(min-width:300px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-assets_management_-_mobile.webp" type="image/webp">
                            <source srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-assets_management_-_desktop_1.png" type="image/png">
                            <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-assets_management_-_mobile.webp" alt="Eptura Asset Management">
                        </picture>
                    </div>`);
            }
            else if (window.location.href.indexOf('/ppc-eptura-room-management') > -1) {
                if (document.querySelectorAll('#NavLogo > .logo-img').length == 0) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/main_logo_1.svg" alt="Eptura" class="logo-img">`);
                }

                document.body.classList.add('ppc-eptura-room-mgmt');

                document.querySelector('#hero #HeroText').innerHTML = `<h6>Desk and Meeting Room Booking Software</h6><h1>Streamline workspace bookings. Boost hybrid collaboration.</h1>
                <ul class="hero-list-copy">
                    <li class="list-item"><span>Bookings. </span> Schedule desks, meeting rooms, and parking. Book rooms with the right equipment for any meeting. </li>
                    <li class="list-item"><span>Navigation. </span> Digital floor plans make it easy to find the right room or locate the one you&#8217;ve booked upon arrival.</li>
                    <li class="list-item"><span>Collaboration. </span> See when co-workers will be in-office and their desk location. Easily manage your hybrid work schedule. </li>
                </ul>`;

                getInstantDemoCard();

                document.querySelector('#hero #HeroFormCol').insertAdjacentHTML("afterbegin",
                    `<div class="hero-img">
                        <picture>
                        <source media="(min-width:1200px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-room_management_-_desktop_1.webp" type="image/webp">
                            <source media="(min-width:768px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-room_management_-_tablet.webp" type="image/webp">
                            <source media="(min-width:300px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-room_management_-_mobile.webp" type="image/webp">
                            <source srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-room_management_-_desktop_1.png" type="image/png"> 
                            <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-room_management_-_mobile.webp" alt="Eptura Room Management">
                        </picture>
                    </div>`);
            }
            else if (window.location.href.indexOf('/ppc-eptura') > -1) {
                if (document.querySelectorAll('#NavLogo > .logo-img').length == 0) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/main_logo_1.svg" alt="Eptura" class="logo-img">`);
                }

                document.body.classList.add('ppc-eptura');

                document.querySelector('#hero #HeroText').innerHTML = `<h6>WORKPLACE AND ASSET MANAGEMENT SOFTWARE</h6><h1>Automate operations with one platform for workplace and asset management</h1>
                <ul class="hero-list-copy">
                    <li class="list-item"><span>Workplace solutions.</span> Desk and meeting room bookings, visitor management, and
                        space planning. </li>
                    <li class="list-item"><span>Asset visibility.</span> See asset inventory, lifecycles, and compliance details. Get a
                        complete view of facilities and spaces. </li>
                    <li class="list-item"><span>Maintenance.</span> Automate preventive maintenance, view cost history, and schedule
                        repairs for all your assets.</li>
                </ul>`;

                getInstantDemoCard();

                document.querySelector('#hero #HeroFormCol').insertAdjacentHTML("afterbegin",
                    `<div class="hero-img">
                        <picture>
                        <source media="(min-width:1200px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-eptura_-_desktop_1.webp" type="image/webp">
                        <source media="(min-width:768px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-eptura-tablet_1.webp" type="image/webp">
                        <source media="(min-width:300px)" srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-eptura_-_mobile_1.webp" type="image/webp">
                        <source srcset="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-eptura_-_desktop_1.png" type="image/png">
                        <img src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/eptura/3008/img-eptura_-_mobile_1.webp" alt="Eptura">
                        </picture>
                    </div>`);
            }
        });

        function getInstantDemoCard() {
            document.querySelector('.hero-list-copy').insertAdjacentHTML('afterend', `
                    <div class="get-demo-spz">
                        <div class="gt-title">Get a customized demo</div>
                        <div class="form-group-spz" id="form-email-spz" method="post">
                            <div class="form-input">
                                <input type="email" name="company_email_spz" id="company_email_spz" placeholder="Company Email*" class="form-input-field" autocomplete="off" required>
                                <!-- <label for="company_email_spz" class="input-label">Company Email*</label> -->
                            </div>
                            <div class="form-button">
                                <button type="submit" class="btn-demo-spz">Get started</button>
                            </div>
                        </div>
                    </div>`);

            // On pressing enter key '#company_email_spz' field hit get started button
            document.querySelector('#company_email_spz').addEventListener('keyup', function (event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    document.querySelector('.btn-demo-spz').click();
                }
            });

            // Open modal on click of 'btn-demo-spz'
            openModal();
        }
    }

    // Open modal on click of 'btn-demo-spz'
    function openModal() {
        // Open modal and add class 'modal-open' on body
        document.querySelector('.btn-demo-spz').addEventListener('click', function () {
            if (validateEmailField()) {
                // Add class to body for overflow hidden and backdrop
                document.querySelector('body.spz-3008').classList.add('modal-open');

                // Add class to modal for show modal
                document.querySelector('#spz-modal-form').classList.add('show-modal-spz');

                MktoForms2.whenReady(function (form) {
                    const email = document.querySelector('#Email');
                    // Set value of email field
                    form.setValues({ 'Email': document.querySelector('#company_email_spz').value });
                    // Add class 'input-filled' on email field
                    email.closest('.mktoFormCol').classList.add('input-filled');

                    // To show hidden fields on basis of email field value
                    simulateEvent();
                });

            }
        });
    }

    // Validate email field
    function validateEmailField() {
        // Get email value
        const email = document.querySelector('#company_email_spz');
        // Check if email is valid
        if (!validateEmail(email.value)) {
            email.closest('.form-input').classList.add('input-error');
            return false;
        } else {
            email.closest('.form-input').classList.remove('input-error');
            return true;
        }
    }

    // Email validation function
    function validateEmail(email) {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }

    // move source element before target Element
    // function moveElement(source, target) {
    //     let sourceElement = document.querySelector(source);
    //     let targetElement = document.querySelector(target);
    //     targetElement.parentNode.insertBefore(sourceElement, targetElement);
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

    // Simulate input event on input '#Email' field
    function simulateEvent() {
        let email = document.querySelector('#Email');
        let inputEvent = new Event('input');
        email.dispatchEvent(inputEvent);
    }
})();