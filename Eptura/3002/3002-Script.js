(function () {
    document.body.classList.add('spz-3002');
    waitForElm('#bodyId #hero #HeroFormCol #HeroForm .mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-3002');

        // Hide form initially
        // document.querySelector('#HeroFormPanel').style.opacity = 0;

        //main function call
        loadTest();
    });

    function loadTest() {
        // show form once loaded
        // waitForElm('[spz_fname="Country"][style*="display"]').then(function () {
        //     document.querySelector('#HeroFormPanel').style.opacity = 1;
        // });

        updateHeroImage();
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
            if (e.target.classList.contains("mktoButton")) {
                document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {
                    checkError(el);
                    showGlobalError();
                });
            }
        });
        document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691410616/eptura/3001/custom/icon-info.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-hover.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-checked.svg" as="image">`
        );
    }

    //Global Error msg custom
    function showGlobalError() {
        debugger
        if (document.querySelector('#Lead_Notes__c') && document.querySelector('#Lead_Notes__c').value == '') {
            // let timeBuffer = setInterval(() => {
                console.log('step 2')
                if (document.querySelector('#Lead_Notes__c').value == '' || document.querySelector('#Lead_Notes__c').value == undefined) {
                    document.querySelector('#Lead_Notes__c').value = ".";
                    console.log('step 3')
                }
            // }, 100);

            // if (document.querySelectorAll('.mktoForm .mktoInvalid').length == 0) {
            //     clearInterval(timeBuffer);
            // }
        }

        // if (document.querySelectorAll('.mktoForm .mktoInvalid').length > 0) {
        //     if (document.querySelectorAll('.mktoForm .mktoButtonRow .spz-cstm-error').length == 0) {
        //         document.querySelector('.mktoForm .mktoButtonRow').insertAdjacentHTML('afterbegin', `<p class="spz-cstm-error">Please complete all required fields.</p>`);
        //     }
        // }
        // else {
        //     if (document.querySelector('.mktoForm .mktoButtonRow .spz-cstm-error')) {
        //         document.querySelector('.mktoForm .mktoButtonRow .spz-cstm-error').remove();
        //     }
        // }



        // setTimeout(() => {
        //     clearInterval(timeBuffer);
        // }, 1000);
    }

    //Marketo form update
    function formUpdate() {
        //Remove first options from dropdown
        // document.querySelector('#Country option:first-child').textContent = '';
        // document.querySelector('#I_am__c option:first-child').textContent = '';

        document.querySelector('#HeroFormCol .mktoForm em').innerHTML = `Trouble submitting? <br class="mobile-only"> Email us at <a href="mailto:info@eptura-marketing.com" target="_blank" id="">info@eptura-marketing.com</a>`;


        if (document.querySelector('#HeroFormCol #HeroFormTitleText h6')) {
            document.querySelector('#HeroFormCol #HeroFormTitleText h6').innerHTML = 'Fill in your details and <span>let&#8217;s get started <span>';
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

    //Hero image update
    function updateHeroImage() {
        waitForElm('#nav #NavLogo #logo-img').then(function () {

            //Footer logo updates for all URLs
            document.querySelector('#FooterLogo a img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/main_logo_1.svg');

            document.querySelector('#FooterSocial a:nth-child(1) img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/eptura_twitter_footer.svg');

            document.querySelector('#FooterSocial a:nth-child(2) img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/eptura_facebook_footer.svg');

            document.querySelector('#FooterSocial a:nth-child(3) img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/eptura_linkedin_footer.svg');


            //URL specific image updates
            if (window.location.href.indexOf('ppc-proxyclick-discover-a-better-way-to-check-in-visitors') > -1) {
                if (document.body.classList.contains('safari')) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989323/eptura/3001/endorsed_logos_1.png" alt="Proxyclick" class="logo-img">`);
                }
                else {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_1.webp" alt="Proxyclick" class="logo-img">`);
                }

                document.body.classList.add('ppc-proxyclick');

                document.querySelector('#hero #HeroText').innerHTML = `<h6>VISITOR&nbsp;MANAGEMENT SOFTWARE</h6><h1>Make the visitor check-in experience 50% faster while improving security.</h1><ul class="hero-list-copy"><li class="list-item"><span>Visitor check-in.</span> Create badges, control access, and get real-time alerts. Pre-screen. Self-check in kiosks.</li><li class="list-item"><span>Security & compliance.</span> Include identity verification, NDAs, safety briefings, or health screens. Log compliance.</li><li class="list-item"><span>Integrations.</span> Sync data with internal access and security systems. Automated email or Slack notifications.</li></ul><div class="hero-img"><picture>
                <source srcset="//res.cloudinary.com/spiralyze/image/upload/v1691579849/eptura/3002/proxyclick-ui_3.webp" type="image/webp">
                <source srcset="//res.cloudinary.com/spiralyze/image/upload/v1691579849/eptura/3002/proxyclick-ui_3.png" type="image/png"> 
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3002/proxyclick-ui_3.webp" alt="Proxyclick"></div></picture>`;
            }

            else if (window.location.href.indexOf('ppc-condeco-make-your-flexible-office-work-better') > -1) {
                if (document.body.classList.contains('safari')) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989344/eptura/3001/endorsed_logos_2.png" alt="Condeco" class="logo-img">`);
                }
                else {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_2.webp" alt="Condeco" class="logo-img">`);
                }

                document.body.classList.add('ppc-condeco');

                document.querySelector('#hero #HeroText').innerHTML = `<h6>Workspace Scheduling software</h6><h1>Streamline desk and meeting room scheduling. Simplify hybrid work.</h1><ul class="hero-list-copy"><li class="list-item"><span>Bookings.</span> Schedule desks, meetings, and parking via the app or your calendar. Instantly notify attendees of any changes. </li><li class="list-item"><span>Room selection.</span> Find rooms with the equipment and space you need. Auto-book new rooms if you reschedule meetings.</li><li class="list-item"><span>Collaboration.</span> See when co-workers will be in-office and their desk location. Easily manage your hybrid work schedule. </li></ul><div class="hero-img"><picture>
                <source srcset="//res.cloudinary.com/spiralyze/image/upload/v1691579900/eptura/3002/condeco-ui_2.webp" type="image/webp">
                <source srcset="//res.cloudinary.com/spiralyze/image/upload/v1691579900/eptura/3002/condeco-ui_2.png" type="image/png"> 
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3002/condeco-ui_2.webp" alt="Condeco"></div></picture>`;
            }

            else if (window.location.href.indexOf('ppc-archibus-maintenance-software') > -1) {
                if (document.body.classList.contains('safari')) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989355/eptura/3001/endorsed_logos_3.png" alt="Archibus" class="logo-img">`);
                }
                else {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_3.webp" alt="Archibus" class="logo-img">`);
                }

                if (document.querySelector('#HeroFormCol #HeroFormTitleText')) {
                    document.querySelector('#HeroFormCol #HeroFormTitleText').innerHTML = '<h6>Fill in your details and <span>let&#x2019;s get started <span></span></span></h6>';
                }

                document.body.classList.add('ppc-archibus');

                document.querySelector('#hero #HeroText').innerHTML = `<h6>Next-Gen Maintenance Management Software</h6><h1>Automate preventive maintenance and repair. Reduce costs by 30%.</h1><ul class="hero-list-copy"><li class="list-item"><span>Work orders.</span> Automatically generate detailed work orders when assets are due for maintenance. </li><li class="list-item"><span>Repair management.</span> Auto-send requests to relevant workers via the mobile app. See repair status and track orders.</li><li class="list-item"><span>Budgeting.</span> Get analytics on cost, labor, and performance of operations. Easily generate plans and budgets.</li></ul><div class="hero-img"><picture>
                <source srcset="//res.cloudinary.com/spiralyze/image/upload/v1691579942/eptura/3002/archibus-ui_2.webp" type="image/webp">
                <source srcset="//res.cloudinary.com/spiralyze/image/upload/v1691579942/eptura/3002/archibus-ui_2.png" type="image/png"> 
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3002/archibus-ui_2.webp" alt="Archibus"></div></picture>`;
            }
            else if (window.location.href.indexOf('ppc-eptura') > -1) {
                document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690979487/eptura/3001/main_logo_1.svg" alt="Eptura" class="logo-img">`);

                document.body.classList.add('ppc-eptura');

                document.querySelector('#hero #HeroText').innerHTML = `<h6>WORKPLACE AND ASSET MANAGEMENT SOFTWARE</h6><h1>Automate operations with one platform for workplace and asset management</h1><ul class="hero-list-copy"><li class="list-item"><span>Workplace solutions.</span> Desk and meeting room bookings, visitor management, and space planning. </li><li class="list-item"><span>Asset visibility.</span> See asset inventory, lifecycles, and compliance details. Get a complete view of facilities and spaces. </li><li class="list-item"><span>Maintenance.</span> Automate preventive maintenance, view cost history, and schedule repairs for all your assets.</li></ul><div class="hero-img"><picture>
                <source srcset="//res.cloudinary.com/spiralyze/image/upload/v1691579973/eptura/3002/eptura-demo-ui_2.webp" type="image/webp">
                <source srcset="//res.cloudinary.com/spiralyze/image/upload/v1691579973/eptura/3002/eptura-demo-ui_2.png" type="image/png"> 
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3002/eptura-demo-ui_2.webp" alt="Eptura"></div></picture>`;
            }
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
