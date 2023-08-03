function createTest2002() {
    if (window.location.pathname === "/") {
        // home page
        document.body.classList.add('spz-2003');
        // window.addEventListener("load", (event) => {
        waitForElm('.css-1pj9xab-HeroHomepage-actions').then(function () {
            appendHomeHeroContent();

            // Add class 'safari' on body if browser is safari
            if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
                document.body.classList.add('safari');
            }
        });
        // });
    } else {
        // demo page
        document.body.classList.add('spz-2003');
        waitForElm('.hs-form-private').then(function () {
            insertEmailInField();
        });
    }
}

function appendHomeHeroContent() {
    waitForElm('.MuiTypography-root.MuiTypography-heroTitle.css-aclrcr-MuiTypography-root-HeroHomepage-title').then(function () {
        // remove element .MuiBox-root.css-vab0dl-Link-root-HeroHomepage-cTA
        if (document.querySelector('.MuiBox-root.css-vab0dl-Link-root-HeroHomepage-cTA')) {
            document.querySelector('.MuiBox-root.css-vab0dl-Link-root-HeroHomepage-cTA').remove();
        }

        // insert element anchors cta
        if (document.querySelectorAll('.review-sum-wrapper').length == 0) {
            document.querySelector('.MuiTypography-root.MuiTypography-heroTitle.css-aclrcr-MuiTypography-root-HeroHomepage-title').insertAdjacentHTML('beforebegin', `
                <div class="review-sum-wrapper">
                    <a href="#" class="htw-link g2-rvw">
                        <div class="htw-img-wrap">
                            <picture>
                                <source media="(min-width:1280px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856847/drata/2002/g2_rating-desktop_2.svg">
                                <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856847/drata/2002/g2_rating-tablet_2.svg">
                                <source media="(min-width:300px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856848/drata/2002/g2_rating-mobile_2.svg">
                                <img class="htw-img" draggable="false" src="//res.cloudinary.com/spiralyze/image/upload/v1687856847/drata/2002/g2_rating-desktop_2.svg" alt="G2 Reviews">
                            </picture>
                        </div>
                    </a>
                    <a href="https://drata.com/blog/g2-summer-2023-report" target="_blank" class="htw-link lead-spring">
                        <div class="htw-img-wrap">
                            <picture>
                                <source media="(min-width:1280px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856848/drata/2002/g2_leader-desktop_3.svg">
                                <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856848/drata/2002/g2_leader-tablet_3.svg">
                                <source media="(min-width:300px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856848/drata/2002/g2_leader-mobile_3.svg">
                                <img class="htw-img default" draggable="false" src="//res.cloudinary.com/spiralyze/image/upload/v1687856848/drata/2002/g2_leader-desktop_3.svg" alt="Leader Summer 2023">
                            </picture>

                            <picture>
                                <source media="(min-width:1280px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856852/drata/2002/g2_leader-desktop_hover_3.svg">
                                <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856852/drata/2002/g2_leader-tablet_hover_3.svg">
                                <source media="(min-width:300px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1687856852/drata/2002/g2_leader-mobile_hover_3.svg">
                                <img class="htw-img hover" draggable="false" src="//res.cloudinary.com/spiralyze/image/upload/v1687856852/drata/2002/g2_leader-desktop_hover_3.svg" alt="Leader Summer 2023">
                            </picture>
                        </div>
                    </a>
                </div>`);


            // insert input field
            document.querySelector('.MuiBox-root.css-1pj9xab-HeroHomepage-actions').insertAdjacentHTML('afterbegin', `
                    <div class="form-group-spz">
                        <input type="email" name="email" class="form-field-spz email-hero-spz" placeholder=" " />
                        <label class="form-label-spz">Work Email</label>
                    </div>
                ` );

            storeEmail()
        }

        //insert section for right image
        if (document.querySelectorAll('.hero-interface-wrapper').length == 0) {
            document.querySelector('.MuiBox-root.css-1vsa5xp-HeroHomepage-content').insertAdjacentHTML('afterend', `<div class="hero-interface-wrapper"></div>`)
        }
    });
}

// store email in cookie
function storeEmail() {
    const email = document.querySelector('.email-hero-spz');
    const getStarted = document.querySelector('.MuiBox-root.css-1pj9xab-HeroHomepage-actions .MuiButton-ctaModule');
    try {
        getStarted.addEventListener('click', function () {
            if (email.value) {
                createEmailCookie(email.value);
            }
        });
    } catch (error) {
        console.warn(error);
        console.warn('Email field or get started button not found');
    }
}

// insert email from cookie in hubSpot email field
function insertEmailInField() {
    const ieInt = setInterval(() => {
        const email = document.querySelector('main [name="email"]');
        const variantEmail = document.querySelector('.form-wrapper-spz [name="email"]');
        const cookieEmail = getEmailCookie('userEmail')

        if (variantEmail && cookieEmail !== '') {
            clearInterval(ieInt);
            variantEmail.value = getEmailCookie('userEmail');
            // variantEmail.dispatchEvent(new Event('change', { 'bubbles': true }));
            variantEmail.focus();
            deleteEmailCookie('userEmail');
        } else if (email && cookieEmail !== '') {
            clearInterval(ieInt);
            email.value = getEmailCookie('userEmail');
            // email.dispatchEvent(new Event('change', { 'bubbles': true }));
            email.focus();
            deleteEmailCookie('userEmail');
        }

    }, 1000);
}

function removeTest() {
    document.body.classList.remove("spz-2003");
}

history.pushState = (function (f) {
    return function pushState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };
})(history.pushState);
history.replaceState = (function (f) {
    return function replaceState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };
})(history.replaceState);
window.addEventListener('popstate', function () {
    window.dispatchEvent(new Event('locationchange'));
});
window.addEventListener('locationchange', function () {
    removeTest();

    url = location.href;
    urlCheck(url);
});
var url = location.href;
urlCheck(url);

function urlCheck(url) {
    var targetTestURL = 'https://drata.com/';
    if (window.location.pathname === "/demo" || window.location.pathname === "/") {
        targetTestURL = window.location.href;
    }
    if (isSameUrl(url, targetTestURL, true) || isSameUrl(url, targetTestURL + 'demo', true)) {
        createTest2002();
    } else {
        removeTest();
    }
}

// isSameUrl Parameters
// currentUrl = current page url
// specifiedUrl = url on which we have to run test
// includeQueryParams = set true, if query params are allowed
function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#") ?
        currentUrl.slice(0, currentUrl.indexOf("#")) :
        currentUrl;
    specifiedUrl = specifiedUrl.includes("#") ?
        specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
        specifiedUrl;
    if (includeQueryParams)
        currentUrl = currentUrl.includes("?") ?
            currentUrl.slice(0, currentUrl.indexOf("?")) :
            currentUrl;
    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
        return true;
    return false;
}

// Create email cookie
function createEmailCookie(value) {
    today = new Date();
    var expire = new Date();
    expire.setTime(today.getTime() + 60000); //  Save for 1 minute
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

// Delete email cookie
function deleteEmailCookie(userEmail) {
    document.cookie = userEmail + '=; Max-Age=-99999999;';
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