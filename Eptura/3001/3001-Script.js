(function () {
    waitForElm('#bodyId #hero #HeroFormCol #HeroForm .mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-3001');

        // Hide form initially
        // document.querySelector('#HeroForm').style.opacity = 0;

        //main function call
        loadTest();
    });

    function loadTest() {
        // show form once loaded
        // waitForElm('[spz_fname="Country"][style*="display"]').then(function () {
        //     document.querySelector('#HeroForm').style.opacity = 1;
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
                this.document.querySelector('.mktoFormCol.spz-hidden').classList.remove('spz-hidden');
                this.document.querySelector('#Lead_Notes__c').focus();
            }
            if (e.target.classList.contains("mktoButton")) {
                document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {
                    checkError(el);
                });
            }
        });
        document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691410616/eptura/3001/custom/icon-info.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-hover.svg" as="image"><link rel="preload" href="https://res.cloudinary.com/spiralyze/image/upload/v1691420998/eptura/3001/custom/form-checkmark-checked.svg" as="image">`
        );
    }

    //Marketo form update
    function formUpdate() {
        //Remove first options from dropdown
        document.querySelector('#Country option:first-child').textContent = '';
        document.querySelector('#I_am__c option:first-child').textContent = '';
        waitForElm('#Solution_Type__c').then(function () {
            document.querySelector('#Solution_Type__c option:first-child').textContent = '';
            let fieldName = document.querySelector('#Solution_Type__c').getAttribute('name');
            document.querySelector('#Solution_Type__c').closest('.mktoFormCol').setAttribute('spz_fname', fieldName);
        });

        if (document.querySelector('#HeroFormCol #HeroFormTitleText h6')) {
            document.querySelector('#HeroFormCol #HeroFormTitleText h6').innerHTML = 'Fill in your details and <span>let&#8217;s get started <span>';
        }

        document.querySelector('#HeroFormCol .mktoForm em').closest('.mktoFormRow').classList.add('spz-email');
        document.querySelector('#HeroFormCol .mktoForm .spz-email').before(document.querySelector('#HeroFormCol .mktoForm .mktoButtonRow'));

        document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').classList.add('spz-hidden');
        document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').insertAdjacentHTML(`beforebegin`, `<div class="spz-anchor"><a href="javascript:void(0);" class="show-comment-dynamic"> <span>+ </span>Comment</a></div>`);

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
                if (!document.querySelector('.spz-anchor').classList.contains('spz-hidden')) {
                    document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').classList.add('spz-hidden');
                }

                if (document.querySelector('.spz-anchor').classList.contains('spz-hidden')) {
                    document.querySelector('.spz-anchor').classList.remove('spz-hidden');
                    document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').classList.add('spz-hidden');
                }
                // if (document.querySelectorAll('.show-comment-dynamic').length == 0) {
                //     document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').insertAdjacentHTML(`beforebegin`, `<div class="spz-anchor"><a href="javascript:void(0);" class="show-comment-dynamic"> <span>+ </span>Comment</a></div>`);
                // }
            }
            else {
                document.querySelector('.spz-anchor').classList.add('spz-hidden');
            }

            if (val == 'Other' || val == 'A current client' || val == 'A current Partner') {
                document.querySelector('.show-comment-dynamic').innerHTML = '<span>+ </span>Please let us know how we may assist you';
            }
            else {
                document.querySelector('.show-comment-dynamic').innerHTML = '<span>+ </span>Comment';
            }
            focusFields();
        }, 50);

        setTimeout(() => {
            clearInterval(setBuffer);
        }, 100);
    }

    // On input focus add class on closest parent field class
    function focusFields() {
        document.querySelectorAll('#HeroForm .mktoForm .mktoFormRow .mktoField:not([type="checkbox"])').forEach(function (el) {

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
            if (elem && elem.value) {
                // console.log(elem.value)
                elem.closest('.mktoFormCol').classList.add('input-filled');
                // elem.closest('.mktoFormCol').classList.remove('field-error');
            } else {
                elem.closest('.mktoFormCol').classList.remove('input-filled');
                // elem.closest('.mktoFormCol').classList.add('field-error');
            }


            if (document.querySelector('[spz_fname="Company"][data-zi-field-enriched="false"]')) {
                document.querySelector('#mktoForm_1225').classList.add('all-fields');
            }
            else if (!document.querySelector('[spz_fname="Country"][style*="display"]')) {
                document.querySelector('#I_am__c').closest('.mktoFormCol').removeAttribute('spz_fname');
            }

        }, 10);

        setTimeout(() => {
            clearInterval(timeBuffer);
        }, 1000);
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

                document.querySelector('#hero #HeroText img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/proxyclick-ui.webp');
                document.querySelector('#hero #HeroText img').setAttribute('alt', 'Simplify visitor check-in');
                document.body.classList.add('ppc-proxyclick');
            }

            else if (window.location.href.indexOf('ppc-condeco-make-your-flexible-office-work-better') > -1) {
                if (document.body.classList.contains('safari')) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989344/eptura/3001/endorsed_logos_2.png" alt="Condeco" class="logo-img">`);
                }
                else {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_2.webp" alt="Condeco" class="logo-img">`);
                }

                document.querySelector('#hero #HeroText img').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/condeco-ui.webp');
                document.querySelector('#hero #HeroText img').setAttribute('alt', 'Make hybrid work, work');
                document.body.classList.add('ppc-condeco');
            }

            else if (window.location.href.indexOf('ppc-archibus-maintenance-software') > -1) {
                if (document.body.classList.contains('safari')) {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/v1690989355/eptura/3001/endorsed_logos_3.png" alt="Archibus" class="logo-img">`);
                }
                else {
                    document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_3.webp" alt="Archibus" class="logo-img">`);
                }


                document.querySelector('#hero #HeroText').insertAdjacentHTML('beforeend', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/archibus-ui.webp" alt="optimize your maintenance operation" width= "488px"
                height="260px">`);
                document.body.classList.add('ppc-archibus');
            }
            else if (window.location.href.indexOf('ppc-eptura') > -1) {
                document.querySelector('#nav #NavLogo > a').insertAdjacentHTML('afterbegin', `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/main_logo_1.svg" alt="Eptura" class="logo-img">`);

                document.querySelector('#hero #HeroText img').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/eptura-demo-ui.webp');
                document.querySelector('#hero #HeroText img').setAttribute('alt', 'one platform to bring together');
                document.body.classList.add('ppc-eptura');
            }

            // let logoUpdate = setInterval(() => {    
            //     document.querySelector('#nav #NavLogo #logo-img').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/3001/endorsed_logos_1.webp');
            // }, 20);

            // setTimeout(() => {
            //     clearInterval(logoUpdate);
            // }, 500);
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
})();
