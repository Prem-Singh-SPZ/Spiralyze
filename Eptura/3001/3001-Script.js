(function () {
    waitForElm('#bodyId #hero #HeroFormCol #HeroForm .mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-3001');

        //main function call
        loadTest();
    });

    function loadTest() {
        updateHeroImage();
        formUpdate();
        focusFields();

        window.addEventListener("click", function (e) {
            if (e.target.classList.contains("show-comment-dynamic")) {
                e.target.classList.add('spz-hidden');
                this.document.querySelector('.mktoFieldWrap.spz-hidden').classList.remove('spz-hidden');
                this.document.querySelector('#Lead_Notes__c').focus();
            }
        });
    }

    //Marketo form update
    function formUpdate() {
        //Remove first options from dropdown
        document.querySelector('#Country option:first-child').textContent = '';
        document.querySelector('#I_am__c option:first-child').textContent = '';

        if (document.querySelector('#HeroFormCol #HeroFormTitleText h6')) {
            document.querySelector('#HeroFormCol #HeroFormTitleText h6').innerHTML = 'Fill in your details and <span>let&#8217;s get started <span>';
        }

        document.querySelector('#HeroFormCol .mktoForm em').closest('.mktoFormRow').classList.add('spz-email');
        document.querySelector('#HeroFormCol .mktoForm .spz-email').before(document.querySelector('#HeroFormCol .mktoForm .mktoButtonRow'));

        document.querySelector('#Lead_Notes__c').closest('.mktoFieldWrap').classList.add('spz-hidden');
        document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').insertAdjacentHTML(`afterbegin`, `<a href="javascript:void(0);" class="show-comment-dynamic"> <span>+ </span>Comment</a>`);

        document.querySelector('#I_am__c').addEventListener('change', function () {
            dropdownFunctionality(this.value);
        });

        document.querySelector('#LblI_am__c').textContent = 'I am...*';
    }

    function dropdownFunctionality(val) {
        let setBuffer = setInterval(() => {
            if (document.querySelector('#Lead_Notes__c') && !document.querySelector('#Lead_Notes__c').closest('.mktoFieldWrap').classList.contains('spz-hidden')) {
                document.querySelector('#Lead_Notes__c').closest('.mktoFieldWrap').classList.add('spz-hidden');
                document.querySelector('#Lead_Notes__c').closest('.mktoFormCol').insertAdjacentHTML(`afterbegin`, `<a href="javascript:void(0);" class="show-comment-dynamic"> <span>+ </span>Comment</a>`);
            }

            if (val == 'Other') {
                document.querySelector('.show-comment-dynamic').innerHTML = '<span>+ </span>Please let us know how we may assist you';
            }
            else {
                document.querySelector('.show-comment-dynamic').innerHTML = '<span>+ </span>Comment';
            }
        },);

        setTimeout(() => {
            clearInterval(setBuffer);
        }, 100);
    }

    // On input focus add class on closest parent .field class
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

    // Function to add .field-error class on closest parent .field class if .error is exist on .hs-input
    function checkError(elem) {
        let timeBuffer = setInterval(() => {
            if (elem.closest('.mktoFormCol ').querySelector('.mktoError') != null && elem.closest('.mktoFormCol').querySelector('.mktoInvalid') != null) {
                elem.closest('.mktoFormCol ').classList.add('field-error');
            } else {
                elem.closest('.mktoFormCol ').classList.remove('field-error');
            }

            if (elem && elem.value) {
                elem.closest('.mktoFormCol').classList.add('input-filled');
                elem.closest('.mktoFormCol ').classList.remove('field-error');
            } else {
                elem.closest('.mktoFormCol').classList.remove('input-filled');
                elem.closest('.mktoFormCol ').classList.add('field-error');
            }
        },);

        setTimeout(() => {
            clearInterval(timeBuffer);
        }, 1000);
    }

    //Hero image update
    function updateHeroImage() {
        waitForElm('#nav #NavLogo #logo-img').then(function () {
            console.log('ffff')
            if (document.querySelector('#hero #HeroText img')) {
                document.querySelector('#hero #HeroText img').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/v1690819011/eptura/3001/img-proxyclick.webp');
                document.querySelector('#hero #HeroText img').setAttribute('alt', 'Simplify visitor check-in');

                document.querySelector('#nav #NavLogo #logo-img').setAttribute('src', '//res.cloudinary.com/spiralyze/image/upload/v1690989323/eptura/3001/endorsed_logos_1.webp');
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
