function createTest_2003() {
    document.body.classList.add('spz-2003');

    waitForElm('.MuiButtonBase-root.MuiButton-disableElevation').then(function () {
        appendHomeHeroContent();

        // Add class 'safari' on body if browser is safari
        if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            document.body.classList.add('safari');
        }
    });
}

function appendHomeHeroContent() {
    waitForElm('.css-rdcx7j-HeroHomepage-featuredContent').then(function () {
        // insert element anchors cta
        if (document.querySelectorAll('.social-pr-section').length == 0) {
            document.querySelector('.css-rdcx7j-HeroHomepage-featuredContent').insertAdjacentHTML('beforebegin', `<section class="social-pr-section">
            <!-- <div class="container"> -->
            <h2 class="sp-title">
              Join the thousands of companies that trust Drata
            </h2>
            <div class="sp-logo-group dis-flex justify-content-between">
              <div class="sp-marquee">
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713919/drata/2003/logo_25.svg"
                    class="sp-img"
                    alt="Abnormal"
                    title="Abnormal"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713917/drata/2003/logo_24.svg"
                    class="sp-img"
                    alt="Airbase"
                    title="Airbase"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713914/drata/2003/logo_22.svg"
                    class="sp-img"
                    alt="Clearbit"
                    title="Clearbit"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713912/drata/2003/logo_21.svg"
                    class="sp-img"
                    alt="bamboo HR"
                    title="bamboo HR"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713910/drata/2003/logo_20.svg"
                    class="sp-img"
                    alt="Notion"
                    title="Notion"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713916/drata/2003/logo_23.svg"
                    class="sp-img"
                    alt="Postman"
                    title="Postman"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713909/drata/2003/logo_19.svg"
                    class="sp-img"
                    alt="Vercel"
                    title="Vercel"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713907/drata/2003/logo_18.svg"
                    class="sp-img"
                    alt="Lemonade"
                    title="Lemonade"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713901/drata/2003/logo_15.svg"
                    class="sp-img"
                    alt="Fivetran"
                    title="Fivetran"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713905/drata/2003/logo_17.svg"
                    class="sp-img"
                    alt="Wvip"
                    title="Wvip"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713903/drata/2003/logo_16.svg"
                    class="sp-img"
                    alt="Clearco"
                    title="Clearco"
                  />
                </div>
                <!-- Repeat -->
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713919/drata/2003/logo_25.svg"
                    class="sp-img"
                    alt="Abnormal"
                    title="Abnormal"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713917/drata/2003/logo_24.svg"
                    class="sp-img"
                    alt="Airbase"
                    title="Airbase"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713914/drata/2003/logo_22.svg"
                    class="sp-img"
                    alt="Clearbit"
                    title="Clearbit"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713912/drata/2003/logo_21.svg"
                    class="sp-img"
                    alt="bamboo HR"
                    title="bamboo HR"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713910/drata/2003/logo_20.svg"
                    class="sp-img"
                    alt="Notion"
                    title="Notion"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713916/drata/2003/logo_23.svg"
                    class="sp-img"
                    alt="Postman"
                    title="Postman"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713909/drata/2003/logo_19.svg"
                    class="sp-img"
                    alt="Vercel"
                    title="Vercel"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713907/drata/2003/logo_18.svg"
                    class="sp-img"
                    alt="Lemonade"
                    title="Lemonade"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713901/drata/2003/logo_15.svg"
                    class="sp-img"
                    alt="Fivetran"
                    title="Fivetran"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1697713905/drata/2003/logo_17.svg"
                    class="sp-img"
                    alt="Wvip"
                    title="Wvip"
                  />
                </div>
                <div class="sp-logo-item">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1697713903/drata/2003/logo_16.svg"
                    class="sp-img"
                    alt="Clearco"
                    title="Clearco"/>
                </div>
              </div>
            </div>
          </section> <section class="review-section">
          <div class="container">
            <h6 class="review-sub-title">Testimonials</h6>
            <h2 class="review-sec-title">See Why Our Customers Love Drata</h2>
            <div class="rating-section">
              <div class="img-container">
                <img class="g2-logo" src="//res.cloudinary.com/spiralyze/image/upload/v1697553107/drata/2003/g2_logo.svg" alt="G2 Logo" />
                <img class="star-logo" src="//res.cloudinary.com/spiralyze/image/upload/v1697553107/drata/2003/frame_5597.svg" alt="Rating Stars" />
              </div>
              <p><span>Excellent</span> based on <span>+500</span> reviews</p>
            </div>
          </div>
          <div class="review-slider container">
            <div class="review-item-box">
              <div class="review-content">
                <h6 class="review-author">Derek E. </h6>
                <p class="review">“Undergoing any audit is a massive lift for those being audited. The entire process is confusing if not done correctly. Drata has made the process simple, easy, and innovative.”</p>
                <div class="rating dis-flex">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2003/custom/review_stars.svg" alt="Rating Stars" title="Rating Stars" class="star-rating"/>
                </div>
              </div>
            </div>
            <div class="review-item-box">
              <div class="review-content">
                <h6 class="review-author">Greg C.</h6>
                <p class="review">“What really sets Drata apart is its ability to simplify and automate the often complex and time-consuming process of compliance.”</p>
                <div class="rating dis-flex">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2003/custom/review_stars.svg" alt="Rating Stars" title="Rating Stars" class="star-rating"/>
                </div>
              </div>
            </div>
            <div class="review-item-box">
              <div class="review-content">
                <h6 class="review-author">Gabriel R.</h6>
                <p class="review">“From day one, our experience with Drata was enjoyable. They have a very well thought product to help their clients achieve their compliance goals.”</p>
                <div class="rating dis-flex">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2003/custom/review_stars.svg" alt="Rating Stars" title="Rating Stars" class="star-rating"/>
                </div>
              </div>
            </div>
          </div>
            </section>`);

            document.querySelector('.css-85beqj-Link-root-HeroHomepage-cTA').innerHTML = `<img src="//res.cloudinary.com/spiralyze/image/upload/v1697553108/drata/2003/g2-leader_spring_1.svg" alt="Leader Spring" class="leader-icon"><span class="leader-text">Compliance Automation Leader</span>`;

            document.querySelector('.MuiContainer-root.MuiContainer-maxWidthLg.css-qpah14-MuiContainer-root-HeroHomepage-container').insertAdjacentHTML('beforeend',`<div class="spz-hero-img-wrapper"></div>`);
        }
    });
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
    if (window.location.pathname === "/") {
        targetTestURL = window.location.href;
    }
    if (isSameUrl(url, targetTestURL, true)) {
        createTest_2003();
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