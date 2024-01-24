var url = location.href;
urlCheck(url);

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
});

function urlCheck(url) {
    var allblogsurlstring = "https://abcfitness.com/";
    if (window.location.pathname.indexOf("/") > -1) {
        allblogsurlstring = window.location.href;
    }
    if (isSameUrl(url, allblogsurlstring, true)) {
        init_13001();
        init5009();
    }
}


function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#") ?
        currentUrl.slice(0, currentUrl.indexOf("#")) :
        currentUrl;
    specifiedUrl = specifiedUrl.includes("#") ?
        specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
        specifiedUrl;
    if (!includeQueryParams)
        currentUrl = currentUrl.includes("?") ?
            currentUrl.slice(0, currentUrl.indexOf("?")) :
            currentUrl;
    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
        return true;
    return false;
}

function init_13001() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-13001')) {
        bodyEle.classList.add('spz-13001');

        waitForElm('.modal .modal__container').then(() => {
            let bulltHtmlDesk = `
            <div class="bullet-section">
            <h6 class="bullet-sub-title">Make the dreams for your club a reality</h6>
            <h2 class="bullet-title">Discover ABC Ignite, the gym management software trusted by 40% of clubs in the US.</h2>
            <ul class="bullet-wrapper desktop">
                <li class="bullet-point"><strong>Get more members.</strong> Use powerful sales tools for online join, referrals, trigger-based text and emails, and more.</li>
                <li class="bullet-point"><strong>Keep more members.</strong> Grant members access for self-service of scheduling and profile management.</li>
                <li class="bullet-point"><strong>Run club operations more efficiently.</strong> Spend less time on tasks with the  best full service billing, reporting, and facility management system.</li>
            </ul>
            <div class="explore-platforms-parent">
            <div class="explore-our-other">Explore our other platforms:</div>
            <div class="explore-platforms">
                <a class="frame-group" href="https://abcfitness.com/glofox/">
                    <img class="block-img" alt="Glofox" src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/abcfitness/13001/glofox.webp">
                    <p>Glofox</p>
                </a>
                <a class="frame-group" href="https://abcfitness.com/trainerize/">
                    <img class="block-img" alt="Trainerize" src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/abcfitness/13001/trainerize.webp">
                    <p>Trainerize</p>
                </a>
                <a class="frame-group" href="https://abcfitness.com/evo/">
                    <img class="block-img" alt="Evo" src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/abcfitness/13001/evo.webp">
                    <p>Evo</p>
                </a>
                <a class="frame-group" href="https://abcfitness.com/gymsales-software/">
                    <img class="block-img" alt="GymSales" src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/abcfitness/13001/gymsales.webp">
                    <p>GymSales</p>
                </a>
            </div>
            </div>
            </div>`;


            let setTitle = setInterval(() => {
                if (document.querySelectorAll('.modal .modal__container .flydown-modal__inner .spz-demo-title').length == 0) {
                    document.querySelector('.modal .modal__container .flydown-modal__inner').insertAdjacentHTML("afterbegin", `<div class="spz-demo-title">Get a Demo</div>`);
                }
            }, 200);


            document.querySelector('.modal .modal__container').insertAdjacentHTML("beforeend", bulltHtmlDesk);

            // var closeBtn = document.querySelector(".modal-content .close-icon");
            // var HeadercloseBtn = document.querySelector(".spz-13001 #popupModal .modal-header button.close");
            // closeBtn.addEventListener('click', function () {
            //     HeadercloseBtn.click();
            // });

        });

        waitForElm('form.marketo-form .mktoButtonRow .mktoButtonWrap .mktoButton').then(() => {
            document.querySelector('form.marketo-form .mktoButtonRow .mktoButtonWrap .mktoButton').innerHTML = `Submit <img class="cta-arrow" src="//res.cloudinary.com/spiralyze/image/upload/v1706094180/ABCFitnessIgnite/13001/Updated%20Code/Arrow.svg" alt="arrow">`;
        });
    }
}


function init5009() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-5010')) {
        bodyEle.classList.add('spz-5010');
        bodyEle.classList.add('spz-5011');

        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = '//res.cloudinary.com/spiralyze/raw/upload/f_auto/ABCFitnessIgnite/5010/updated_css/5010-Style.css';
        document.head.appendChild(link);

        var link5011 = document.createElement('link');
        link5011.type = 'text/css';
        link5011.rel = 'stylesheet';
        link5011.href = '//res.cloudinary.com/spiralyze/raw/upload/v1702028462/ABCFitnessIgnite/5011/code/5011-style.css';
        document.head.appendChild(link5011);

        //5009 Winner test changes starts
        let btnHtml
        if (window.location.pathname.indexOf('/pt/') > -1) {
            btnHtml = `<li class="spz-menu-item">
                <a class="spz-demo-btn" href="#">Quero testar</a>
            </li>`;
        } else if (window.location.pathname.indexOf('/es/') > -1) {
            btnHtml = `<li class="spz-menu-item">
                <a class="spz-demo-btn" href="#">PruÃ©belo</a>
            </li>`;
        } else {
            btnHtml = `<li class="spz-menu-item">
                <a class="spz-demo-btn" href="#">GET A DEMO</a>
            </li>`;
        }

        waitForElm('.site-header #mega-menu-primary').then((elm) => {
            elm.insertAdjacentHTML("beforeend", btnHtml)
            setTimeout(() => {
                // if (window.location.pathname == '/') {
                document.querySelector('.spz-demo-btn').addEventListener('click', function (e) {
                    e.preventDefault();
                    // document.querySelector('.modal-flydown-trigger').click()
                    window.location.href = 'https://abcfitness.com/request-a-demo/'
                    return false;
                })
                // }
            }, 100)
        });

        if (window.location.pathname == '/' || window.location.pathname == '/pt/' || window.location.pathname == '/es/') {
            waitForElm('.modal-flydown-trigger').then((elm) => {
                if (window.location.pathname.indexOf('/pt/') > -1) {
                    elm.innerText = 'SOLICITE UMA DEMO';
                } else if (window.location.pathname.indexOf('/es/') > -1) {
                    elm.innerText = 'SOLICITA UNA DEMO';
                } else {
                    // elm.innerText = 'REQUEST A DEMO';
                }
            });
        }

        window.addEventListener('scroll', function () {
            var headerNav = document.querySelector(".bkg-header");
            let getScrollposition = window.scrollY;
            if (getScrollposition > headerNav.offsetTop) {
                headerNav.classList.add('fixed-header')
            } else {
                if (headerNav.classList.contains('fixed-header')) {
                    headerNav.classList.remove('fixed-header')
                }
            }
        })

    }

}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}