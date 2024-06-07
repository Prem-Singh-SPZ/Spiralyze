(function () {
    document.body.classList.add('spz-4013');
    let identifyPage = window.location.pathname.replace('/', '').replace('.html', '');
    document.body.classList.add(identifyPage);

    const assetURL = '//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/4013/';
    const logoURL = '//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/eptura/4013/';

    const rightBullets = [
        {
            pageName: "website-proxyclick-demo",
            logoAlt: "Proxyclick logo",
            growth_percent: "50%",
            growth_percent_copy: "Increase in Check-in efficiency",
            person_img: assetURL + "avatar_-_eric_van_lint_3.webp",
            person_name: "Eric Van Lint",
            person_company: "Dimension Data",
            page_logo: logoURL + "endorsed_logos.svg",
        },
        {
            pageName: "website-managerplus-demo",
            logoAlt: "ManagerPlus logo",
            growth_percent: "70%",
            growth_percent_copy: "Increase in work orders tracked",
            person_img: assetURL + "avatar_-__brian_martinez_1.webp",
            person_name: "Brian Martinez",
            person_company: "Metro Group",
            page_logo: logoURL + "logo_-managerplus.svg",
        },
        {
            pageName: "website-archibus-demo",
            logoAlt: "Archibus logo",
            growth_percent: "83%",
            growth_percent_copy: "increase in CMS <br>reporting turnaround",
            person_img: assetURL + "avatar_-_michael_dulaney_1.webp",
            person_name: "Michael DuLaney",
            person_company: "UCHealth",
            page_logo: logoURL + "archibus-eptura-logo-color_2.svg",
        },
        {
            pageName: "website-spaceiq-demo",
            logoAlt: "SpaceIQ logo",
            growth_percent: "7x",
            growth_percent_copy: "increase in capital <br>projects budget",
            person_img: assetURL + "avatar_-_john_watkins_1.webp",
            person_name: "John Watkins",
            person_company: "San Diego Gas & Electric",
            page_logo: logoURL + "spaceiq-eptura-logo-color_3.svg",
        },
        {
            pageName: "website-ioffice-demo",
            logoAlt: "iOFFICE logo",
            growth_percent: "10x",
            growth_percent_copy: "increase in move <br>planning Efficeincy",
            person_img: assetURL + "avatar_-_edgar_sanchez_1.webp",
            person_name: "Edgar Sanchez",
            person_company: "Sephora",
            page_logo: logoURL + "ioffice-eptura-logo-color_2.svg",
        }
    ];

    waitForElm('.mktoForm .mktoFormRow .mktoField').then(function () {
        document.body.classList.add('spz-4013');
        loadTest();
    });

    function loadTest() {
        updatePageContent();

        let intVar = setInterval(() => {
            getDistance();
        }, 500);

        setTimeout(() => {
            clearInterval(intVar);
        }, 5000);

        //window resize event   
        window.addEventListener('resize', function () {
            getDistance();
        });

        // Add class 'safari' 
        if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            document.body.classList.add('safari')
        }
    }

    function updatePageContent() {
        waitForElm('.body-wrapper #form-over #form_title').then(function () {
            rightBullets.forEach(function (con) {
                if (identifyPage == con.pageName) {

                    document.querySelector('#form-over #form_title').textContent = "Get a demo";
                    document.querySelector('#form-over #form_logo').setAttribute('src', con.page_logo);
                    document.querySelector('#form-over #form_logo').setAttribute('alt', con.logoAlt);

                    document.querySelector('.spz-left-content .left-wrapper').insertAdjacentHTML('afterend', `
                    <div class="case-studies-section">
                    <div class="case-studies-wrapper">
                        <div class="value-prop">
                            <div class="growth-copy"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M19.5556 11.7335C18.9 11.7335 18.3704 11.1972 18.3704 10.5334C18.3704 9.86962 18.9 9.33333 19.5556 9.33333H25.4815C26.1371 9.33333 26.6667 9.86962 26.6667 10.5334V16.5339C26.6667 17.1977 26.1371 17.734 25.4815 17.734C24.826 17.734 24.2963 17.1977 24.2963 16.5339V13.4324L18.0223 19.7816C17.5593 20.2504 16.8112 20.2504 16.3482 19.7816L12.4112 15.8326L7.35671 20.9817C6.89374 21.4505 6.14337 21.4505 5.68049 20.9817C5.21767 20.513 5.21767 19.7554 5.68049 19.2866L11.6074 13.2861C12.0704 12.8174 12.8186 12.8174 13.2815 13.2861L17.1852 17.2352L22.6186 11.6998L19.5556 11.7335Z" fill="#4DB06D"/>
                            </svg>
                            <span>${con.growth_percent}</span></div>
                            <div class="prop-copy">${con.growth_percent_copy}</div>
                        </div>
                        <div class="person-prof"><div class="person-img"><img src="${con.person_img}" alt="${con.person_name}"></div>
                        <div class="person-copy"><span class="name">${con.person_name}</span><span class="company">${con.person_company}</span></div></div>
                    </div></div>
                    `);
                }
            })

            document.querySelectorAll('.spz-left-content .left-wrapper .copy .bullet').forEach(element => {
                let title = element.querySelector('.bullet-title > div').textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
                element.querySelector('.bullet-content > div').insertAdjacentHTML('afterbegin', `<strong>` + title + ` - </strong>`);
            });
        });
    }

    //remove <br> from string coming in variable ${con.value_prop1_copy}
    function removeBrTag(str) {
        return str.replace(/<br>/g, '');
    }

    function getDistance() {
        let distance = findDistanceBetweenElements(document.querySelector('#bullet_content_1'), document.querySelector('#bullet_content_3'));
        document.querySelector('.spz-left-content .copy .bullets .dotted-bullet').style.height = distance + 'px';
    }

    //find distance between two elements in px
    function findDistanceBetweenElements(element1, element2) {
        var element1Rect = element1.getBoundingClientRect();
        var element2Rect = element2.getBoundingClientRect();
        var distance = Math.sqrt(Math.pow(element2Rect.x - element1Rect.x, 2) + Math.pow(element2Rect.y - element1Rect.y, 2));

        distance = distance + 12;
        return distance;
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