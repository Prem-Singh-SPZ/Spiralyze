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