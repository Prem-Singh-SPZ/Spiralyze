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
    if (window.location.pathname.indexOf("/") > -1) { // Add " / " to run on all urls
        allblogsurlstring = window.location.href;
    }
    if (isSameUrl(url, allblogsurlstring, true)) {
        init5001();
    } else {
        // Remove Test
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

function init5001() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-13001')) {
        bodyEle.classList.add('spz-13001');

        waitForElm('.modal-content .modal-body iframe').then(() => {
            let bulltHtmlDesk = `<svg class="close-icon" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.21967 0.728703C0.512563 0.43581 0.987437 0.43581 1.28033 0.728703L6.5 5.94837L11.7197 0.728703C12.0126 0.43581 12.4874 0.43581 12.7803 0.728703C13.0732 1.0216 13.0732 1.49647 12.7803 1.78936L7.56066 7.00903L12.7803 12.2287C13.0732 12.5216 13.0732 12.9965 12.7803 13.2894C12.4874 13.5823 12.0126 13.5823 11.7197 13.2894L6.5 8.06969L1.28033 13.2894C0.987437 13.5823 0.512563 13.5823 0.21967 13.2894C-0.0732233 12.9965 -0.0732233 12.5216 0.21967 12.2287L5.43934 7.00903L0.21967 1.78936C-0.0732233 1.49647 -0.0732233 1.0216 0.21967 0.728703Z" fill="#616161"/></svg>
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
                <div class="frame-group">
                    <img class="block-img" alt="Glofox" src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/abcfitness/13001/glofox.webp">
                    <p>Glofox</p>
                </div>
                <div class="frame-group">
                    <img class="block-img" alt="Trainerize" src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/abcfitness/13001/trainerize.webp">
                    <p>Trainerize</p>
                </div>
                <div class="frame-group">
                    <img class="block-img" alt="Evo" src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/abcfitness/13001/evo.webp">
                    <p>Evo</p>
                </div>
                <div class="frame-group">
                    <img class="block-img" alt="GymSales" src="//res.cloudinary.com/dxprfaxf3/image/upload/f_auto/abcfitness/13001/gymsales.webp">
                    <p>GymSales</p>
                </div>
            </div>
        </div>
            </div>`;

            document.querySelector('.modal-content .modal-body').insertAdjacentHTML("beforebegin", bulltHtmlDesk);

            var closeBtn = document.querySelector(".modal-content .close-icon");
            var HeadercloseBtn = document.querySelector(".spz-13001 #popupModal .modal-header button.close");
            closeBtn.addEventListener('click', function () {
                HeadercloseBtn.click();
            });

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