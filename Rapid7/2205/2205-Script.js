(function () {
    console.log('2205 test ready..');
    let bodyLoaded = setInterval(function () {
        const body = document.querySelector('body');
        if (body && !body.classList.contains('spz-2205')) {
            clearInterval(bodyLoaded);
            loadTest();
        }
    });

    function loadTest() {
        document.body.classList.add('spz-2205');

        if (document.querySelector('.longHero__content .spz-custom-email input[name="email"]')) {
            document.querySelector('.longHero__content .spz-custom-email input[name="email"]').value = '';
        }

        if (window.location.pathname.indexOf('/db/vulnerabilities') > -1) {
            waitForElm('.off-canvas-wrapper .off-canvas-content .overlayText').then(function (elm) {
                //Add email field
                document.querySelector('.off-canvas-wrapper .off-canvas-content .overlayText .longHero__content .button-container').insertAdjacentHTML('beforebegin', '<div class="spz-custom-email"><input type="email" name="email" id="email" class="email-input"><label for="email" class="email-label">Enter Email Address</label><p class="spz-error-msg">Email Address is Required</p></div>');

                document.querySelector('.off-canvas-wrapper .off-canvas-content .overlayText .longHero__content .button-container').insertAdjacentHTML('afterend', `<div class="spz-review-section" >
                     <div class="gartner-peer" >
                           <img class="peer-insights" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/RAPID7/Gartner.png" alt="Gartner Peer insights"/>
                           <div class="rating" >
                              <span>4.4</span>   
                           <img class="star-rating" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/RAPID7/2205/G2-stars.png" alt="rating"/>
                           </div>
                     </div>
                     <div class="g-2-logo" >
                     <img class="g2-logo" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/RAPID7/2205/G2-logo.png" alt="G2 Logo"/>
                           <div class="rating" >
                              <span>4.4</span>   
                           <img class="star-rating" src="//res.cloudinary.com/spiralyze/image/upload/f_auto/RAPID7/2205/G2-stars.png" alt="rating"/>
                           </div>
                     </div>
               </div>`);

                if (window.location.pathname.indexOf('redhat_linux-cve-2021-43267') > -1) {
                    document.querySelector('.off-canvas-content .longHero .overlayText .longHero__content > h1').innerHTML = `<span>Red Hat:</span> <span>CVE-2021-43267:</span> Important: kpatch-patch security update (Multiple Advisories)`;
                }

                validateEmailFieldReview();

            });
        }

        else if (window.location.pathname.indexOf('products/insightvm/demo/') > -1) {
            waitForElm('.marketoForm .mktoForm #Email.mktoField.mktoEmailField').then(function () {
                const uname = getEmailCookie("userEmail");
                const emailElm = document.querySelector('.marketoForm .mktoForm #Email.mktoField.mktoEmailField');
                console.log('we are on demo');
                console.log(uname);
                console.log(emailElm);

                if (uname && emailElm) {
                    let addValue = setInterval(() => {
                        emailElm.value = uname;
                    });

                    setTimeout(() => {
                        clearInterval(addValue);
                        emailElm.focus();
                    }, 1000);
                }
            });
        }

        else if (window.location.pathname.indexOf('products/insightvm/download/') > -1) {
            waitForElm('#formBlock dl dd input#email').then(function () {
                const uname = getEmailCookie("userEmail");
                const emailElm = document.querySelector('#formBlock dl dd input#email');
                console.log('we are on demo');
                console.log(uname);
                console.log(emailElm);

                if (uname && emailElm) {
                    let addValue = setInterval(() => {
                        emailElm.value = uname;
                    });

                    setTimeout(() => {
                        clearInterval(addValue);
                        emailElm.focus();
                    }, 3000);
                }
            });
        }
    }

    // Generic
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

    // Open modal on click of 'btn-demo-spz'
    function validateEmailFieldReview() {
        waitForElm('.longHero__content .spz-custom-email input[name="email"]').then(function () {
            const secondaryEmail = document.querySelector('.longHero__content .spz-custom-email input[name="email"]');

            secondaryEmail.addEventListener('blur', () => {
                validateEmailField();
            });

            waitForElm('.button.mdBtn[data-element-location="hero"]').then(function () {
                document.querySelectorAll('.button.mdBtn[data-element-location="hero"]').forEach(function (elem) {
                    elem.addEventListener("click", function (e) {
                        createEmailCookie(secondaryEmail.value);
                        console.log(secondaryEmail.value);
                    });
                })
            });

        });
    }

    // Validate email field
    function validateEmailField() {
        // Get email value
        const email = document.querySelector('.longHero__content .spz-custom-email input[name="email"]');
        // Check if email is valid
        if (email.value != '' && email.value != null && email.value != undefined) {
            email.closest('.spz-custom-email').classList.add('input-filled');
        }
        else {
            email.closest('.spz-custom-email').classList.remove('input-filled');
        }
    }

    // Create email cookie
    function createEmailCookie(value) {
        const today = new Date();
        var expire = new Date();
        expire.setTime(today.getTime() + 3600000 * 24 * 30); //  Save for 30 days
        document.cookie = "userEmail=" + value + ";path=/" + ";expires=" + expire.toUTCString();
    }

    // Fetch email cookie
    function getEmailCookie(userEmail) {
        let name = userEmail + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
})();