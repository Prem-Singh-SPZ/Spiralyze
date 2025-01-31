let bodyLoad = setInterval(function () {
    const bodyEle = document.querySelector('body');
    if (bodyEle) {
        clearInterval(bodyLoad);
        // Set test class
        document.body.classList.add("spz-5002");

        waitForElm('#demo-modal .modal__container .mktoHasWidth.mktoField').then(function () {
            loadTest();
        });

        function loadTest() {
            document.querySelector('#demo-modal').classList.add('modal-container-spz');

            document.querySelectorAll('header .cta-item a').forEach(function (el) {
                if (el.href.includes('ignite.abcfitness.com/pricing/')) {
                    if (document.querySelector('.demo-modal.modal')) {
                        el.href = 'javascript:void(0)';
                        el.addEventListener('click', function () {
                            if (document.querySelector('button[data-micromodal-open="demo-modal"]')) {
                                document.querySelector('button[data-micromodal-open="demo-modal"]').click();
                            }
                            else {
                                document.querySelector('.demo-modal.modal').setAttribute("aria-hidden", "false");
                                document.body.classList.add('is-modal-open');
                                //convert above code to pure js
                                document.querySelector('.demo-modal.modal').classList.add('is-open');
                                document.querySelector('.demo-modal.modal').addEventListener("animationend", function () {
                                    document.querySelector('.demo-modal.modal').removeEventListener("animationend", function () {
                                        document.querySelector('.demo-modal.modal').setFocusToFirstNode();
                                    }, false);
                                }, false);
                            }
                        });
                    }
                }
            });

            if (document.querySelectorAll('.logo-spz-bg').length == 0) {
                document.querySelector('#demo-modal .modal__container .demo-modal__col2 .demo-modal__form').insertAdjacentHTML('afterbegin', `<div class="logo-spz-bg">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1728282479/ABCFitnessIgnite/5002/ABC_Logo.svg" class="ls-img">
                </div>`);

                document.querySelector('body #demo-modal .modal__container').insertAdjacentElement('beforebegin', document.querySelector('body #demo-modal .modal__container .modal__close'));
                document.querySelector('body #demo-modal .modal__overlay').removeAttribute('data-micromodal-close');
            }

            focusFields();
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

        // Add class 'safari' (used for cart scrollbar)
        if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            document.body.classList.add('safari')
        }


        // On input focus add class on closest parent field class
        function focusFields() {
            document.querySelectorAll('#demo-modal .modal__container .mktoHasWidth.mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (el) {
                el.addEventListener('focus', function () {
                    el.closest('.mktoFormCol').classList.add('field-focus');
                    checkError(el);
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
            document.querySelectorAll('#demo-modal .modal__container .mktoHasWidth.mktoField:not([type="checkbox"]):not([type="hidden"])').forEach(function (elem) {
                let timeBuffer = setInterval(() => {
                    if (elem.closest('.mktoFieldWrap').querySelector('.mktoError') && elem.closest('.mktoFieldWrap').querySelector('.mktoError').style.display != 'none' && elem.closest('.mktoFieldWrap').querySelector('.mktoInvalid')) {
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
            });


        }

        window.addEventListener("click", function (e) {
            if (e.target.classList.contains("mktoButton")) {
                checkError();
            }

            if (e.target.classList.contains("modal__close")) {
                if (document.querySelector('.demo-modal.modal.is-open')) {
                    document.querySelector('.demo-modal.modal').classList.remove('is-open');
                    document.body.classList.remove('is-modal-open');
                }
            }
        });
    }
});