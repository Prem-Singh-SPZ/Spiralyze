(function () {
    function createTest() {
        let bodyLoaded = setInterval(function () {
            const body = document.querySelector('body');
            if (body) {
                clearInterval(bodyLoaded);
                if (!document.body.classList.contains('spz-2014')) {
                    removeSpecificCookieValue('spz-2014', 'spz_2014_truecontrol');
                    document.body.classList.add('spz-2014');
                    waitForElm('.grid.bg-black').then(() => {
                        let keepChanges = setInterval(() => {
                            if (document.querySelector('.grid.bg-black')) {
                                accordionSection();
                            }
                            hiddenValue('spz-2014', 'spz_2014_variant');
                        }, 10);

                        setTimeout(() => {
                            clearInterval(keepChanges);
                        }, 5000);
                    });

                } else {
                    if (document.body.classList.contains('spz-2014')) {
                        removeSpecificCookieValue('spz-2014', 'spz_2014_truecontrol');
                        hiddenValue('spz-2014', 'spz_2014_variant');
                    }
                }
            }
        });
    }

    function accordionSection() {
        //create accordion section json data
        let accordionItems = [{
            title: 'Accelerate insights & automation with AI',
            content: 'Make smart access decisions, detect threats and ensure compliance.',
            demoLink: 'https://www.sailpoint.com/demo',
            image: '//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/accelerate_insights__automation_with_ai_1.webp'
        }, {
            title: 'Discover & secure all machine identities',
            content: 'Enhance security by gaining control over machine identities',
            demoLink: 'https://www.sailpoint.com/demo',
            image: '//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/discover__secure_all_machine_identities_1.webp'
        }, {
            title: 'Manage & secure the non-employee lifecycle',
            content: 'Content for non-employee lifecycle management.',
            demoLink: 'https://www.sailpoint.com/demo',
            image: '//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/manage__secure_the_non-employee_lifecycle_1.webp'
        }, {
            title: 'Secure & govern access to sensitive data',
            content: 'Information on securing sensitive data.',
            demoLink: 'https://www.sailpoint.com/demo',
            image: '//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/secure__govern_access_to_sensitive_data_1.webp'
        }, {
            title: 'Automate & delegate privileged tasks',
            content: 'Content about automating privileged tasks.',
            demoLink: 'https://www.sailpoint.com/demo',
            image: '//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/automate__delegate_privileged_tasks_1.webp'
        }];

        if (document.querySelectorAll('.spz-2014 .help-section').length === 0) {
            document.querySelector('.gc-customer-logos').insertAdjacentHTML('beforebegin', `<section class="help-section row">
                <div class="row__inner grid container">
                    <div class="help-title">
                        <h2 class="section-heading eyebrow">HOW WE HELP</h2>
                        <h1 class="main-title text-cobalt">See how SailPoint helps secure every identity and protect your enterprise.</h1>
                    </div>
                    <div class="grid md:gap-16 md:grid-cols-50-50">
                        <div class="help-content">
                            <div class="accordion">
                            ${accordionItems.map((item, index) => {
                return `<div class="accordion-item">
                                            <div class="accordion-header">
                                                <span>${item.title}</span>
                                                <button class="toggle-button"></button>
                                            </div>
                                            <div class="accordion-content" data-image="image${index + 1}">
                                                <p>${item.content}</p>
                                                <a href="${item.demoLink}" class="demo-link">Get a demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/arrow.svg" alt="Arrow Right"></a>
                                                <div class="image-container">
                                                    <img src="${item.image}" alt="${item.title}">
                                                </div>
                                            </div>
                                        </div>`;
            }).join('')}
                            </div>
                        </div>
                        <div class="help-image">
                            ${accordionItems.map((item, index) => {
                return ` <div class="image-container image${index + 1}">
                                            <img src="${item.image}" alt="${item.title}">
                                        </div>`;
            }).join('')}
                        </div>
                    </div>
                </div>
            </section>`);

            waitForElm('.spz-2014 .accordion-item').then(() => {
                const accordionItems = document.querySelectorAll('.accordion-item');
                const imageContainers = document.querySelectorAll('.help-image .image-container');

                accordionItems.forEach((item, index) => {
                    const header = item.querySelector('.accordion-header');
                    const content = item.querySelector('.accordion-content');
                    const toggleButton = item.querySelector('.toggle-button');
                    const imageClass = content.dataset.image;

                    header.addEventListener('click', () => {
                        // item.querySelector('.accordion-content').setAttribute('style', 'height: ' + (item.querySelector('.accordion-content').scrollHeight) + 'px');
                        accordionItems.forEach(item => item.classList.remove('active')); // Remove active class from all items
                        item.classList.add('active');
                        // toggleButton.textContent = item.classList.contains('active') ? '-' : '+';

                        // Show/hide the corresponding image container
                        imageContainers.forEach(container => container.classList.remove('active'));
                        document.querySelector('.' + imageClass).classList.add('active');
                    });

                    // Activate the first accordion item and show its image
                    if (index === 0) {
                        item.classList.add('active');
                        // toggleButton.textContent = '-';
                        document.querySelector('.' + imageClass).classList.add('active');
                    }
                });
            });

            // Remove control accordion
            document.querySelector('.grid.bg-black').remove();
        }
    }


    //click event listener
    document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('sp-logo-home')) {
            e.preventDefault();
            document.querySelector('a[href="/"]').click();
        }
        if (e.target.classList.contains('go-to-demo')) {
            e.preventDefault();
            document.querySelector('.spz-2014 a[href="/demo"]').click();
        }
    });

    function removeTest() {
        setTimeout(() => {
            if (document.querySelector('.spz-2014')) {
                document.body.classList.remove("spz-2014");
            }
        }, 200);
    }

    function removeSpecificCookieValue(targetName, targetValue) {
        ['HiddenFieldName', 'HiddenFieldValue'].forEach((key, i) => {
            var values = getCookie(key)?.split(',').filter(v => v !== (i ? targetValue : targetName)).join(',');
            setCookie(key, values || '', 1);
        });
    }

    // Do not touch below hidden field code for any Experiment Start
    function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
        var ExistingHiddenFieldName = getCookie('HiddenFieldName');
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');

        if (!ExistingHiddenFieldName) {
            setCookie('HiddenFieldName', currentHiddenFieldName, 1);
            setCookie('HiddenFieldValue', currentHiddenFieldValue, 1);
        } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
            setCookie('HiddenFieldName', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
            setCookie('HiddenFieldValue', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
        }

        setHiddenFieldValue();
    }

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=sailpoint.com;";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function setHiddenFieldValue() {
        var spz_cro_Interval = setInterval(function () {
            var intellimize1 = document.querySelector('form.mktoForm input[name="intellimize1"]');
            if (intellimize1) {
                clearInterval(spz_cro_Interval);
                var ExistingHiddenFieldValue = getCookie('HiddenFieldValueContact');
                //check if hidden field value is empty then only set the value else set the value with , seperated
                if (intellimize1.value == '') {
                    intellimize1.value = ExistingHiddenFieldValue;
                }
                else {
                    if (!intellimize1.value.includes(ExistingHiddenFieldValue)) {
                        intellimize1.value = intellimize1.value + ',' + ExistingHiddenFieldValue;
                    }
                }
            }
        });

        //click event listener
        document.addEventListener('click', function (e) {
            if (e.target.closest('#mktoForm_1018 .mktoButton')) {
                //inject current time and date in EST timezone into .intellimize2 hidden field
                var d = new Date();
                var n = d.toLocaleString('en-US', { timeZone: 'America/New_York' });
                var int2 = e.target.closest('.mktoForm').querySelector('input[name="intellimize2"]');
                if (int2)
                    int2.value = n;
            }
        });
    }
    // Do not touch below hidden field code for any Experiment over

    history.pushState = (function (f) {
        return function pushState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event("pushstate"));
            window.dispatchEvent(new Event("locationchange"));
            return ret;
        };
    })(history.pushState);
    history.replaceState = (function (f) {
        return function replaceState() {
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event("replacestate"));
            window.dispatchEvent(new Event("locationchange"));
            return ret;
        };
    })(history.replaceState);
    window.addEventListener("popstate", function () {
        window.dispatchEvent(new Event("locationchange"));
    });

    window.addEventListener("locationchange", function () {
        url = location.href;
        urlCheck(url);
        if (document.querySelector('.spz-2014')) {
            document.body.classList.remove("spz-2014");
        }
    });
    var url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        if (location.pathname === "/") {
            createTest();
        } else {
            removeTest();
        }
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