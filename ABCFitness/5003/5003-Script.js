(function () {
    const TEST_ENV = {
        name: 'spz-ABC-Email-In-Hero',
        class: 'spz-5003', // class will be used in body ex. spz-1001
        date: '27-02-23',
        base_url: 'https://abcfitness.com', // control domain url
        main_class: 'body', // parent class where test is going to be applied
    }

    function loadTest() {
        var cookieName = TEST_ENV.name + "-" + TEST_ENV.date;
        var cookieValue = "1";
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;

        // Set test class
        document.body.classList.add(TEST_ENV.class);
        if (document.body.classList.contains('home')) {
            waitForElm('.l-body-wrapper .c-hero__content').then(function () {
                document.querySelector('.l-body-wrapper .c-hero__content .c-hero__info-wrapper .c-hero__subtitle.c-subtitle').insertAdjacentHTML('beforeend', `<div id="userEmailForm"">
                <div class="emailBox">
                  <input
                    id="emailAddress"
                    type="email"
                    size="64"
                    maxlength="64"
                    required
                    placeholder="Email" />
                    <p class="error-msg">This field is required</p>
                </div>
                <button class="submit-btn" value="GET A DEMO">GET A DEMO</button>
              </div>`);
                document.querySelector(".submit-btn").addEventListener("click", emailFormSUbmit);
                document.querySelector("#emailAddress").addEventListener("blur", checkValidEmail);
                // document.querySelector("#emailAddress").addEventListener("focus", checkValidEmail);
                document.querySelector("#emailAddress").addEventListener("input", checkValidEmail);
            });
        }

        document.body.classList.add("loaded");
    }

    function checkValidEmail() {
        let uEmail = document.querySelector('#userEmailForm #emailAddress').value;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(uEmail).toLowerCase())) {
            document.querySelector('#userEmailForm .error-msg').style.display = 'none';
            if (document.querySelector('#userEmailForm .emailBox').classList.contains('have-error')) {
                document.querySelector('#userEmailForm .emailBox').classList.remove('have-error');
            }
        }
        else {
            document.querySelector('#userEmailForm .emailBox').classList.add('have-error');
            document.querySelector('#userEmailForm .error-msg').style.display = 'block';
        }
    }
    function emailFormSUbmit() {
        let uEmail = document.querySelector('#userEmailForm #emailAddress').value;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // console.log(re.test(String(uEmail).toLowerCase()))
        // return re.test(String(uEmail).toLowerCase());
        if (re.test(String(uEmail).toLowerCase())) {
            location.href = "https://abcfitness.com/request-a-demo";
            document.querySelector('#userEmailForm .error-msg').style.display = 'none';
            if (document.querySelector('#userEmailForm .emailBox').classList.contains('have-error')) {
                document.querySelector('#userEmailForm .emailBox').classList.remove('have-error');
            }
        }
        else {
            document.querySelector('#userEmailForm .emailBox').classList.add('have-error');
            document.querySelector('#userEmailForm .error-msg').style.display = 'block';
            return false;
        }
    }

    // Generic
    let url = location.origin;
    urlCheck(url);

    function urlCheck(url) {
        let testURL = TEST_ENV.base_url;
        if (url == testURL) {
            waitForElm(TEST_ENV.main_class).then(function () {
                loadTest();
            });
        } else {
            removeTest();
        }
    }


    function removeTest() {
        document.body.classList.remove(TEST_ENV.class);
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
})();
