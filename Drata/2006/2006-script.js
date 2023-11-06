(function () {

  function createTest_2006() {
    document.body.classList.add('spz-2006');

    console.log('there00');

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
        document.querySelector('.css-rdcx7j-HeroHomepage-featuredContent').insertAdjacentHTML('beforebegin', `<section class="hero-banner-section"><div class="hero-banner-container container"><div class="hero-copy"> <h2>Trust, <span>Automated</span></h2> <p>Drata automates your compliance journey from start to audit-ready and beyond and provides support from the security and compliance experts who built it.</p> </div><div class="checkbox-section"> <h6>What frameworks are you interested in? </h6> <div class="checkboxes"> <div class="check-box">
        <label class="custom-check"><img src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/soc_2.svg" alt="SOC 2"><p>SOC 2</p>
        <input type="checkbox" value="SOC 2"><span class="checkmark"></span></label></div>
        <div class="check-box">
        <label class="custom-check"><img src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/iso.svg" alt="ISO 27001"><p>ISO 27001</p>
        <input type="checkbox" value="ISO 27001"><span class="checkmark"></span></label></div>
        <div class="check-box">
        <label class="custom-check"><img src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/pci_1.svg" alt="PCI DSS"><p>PCI DSS</p>
        <input type="checkbox" value="PCI DSS"><span class="checkmark"></span></label></div>
        <div class="check-box">
        <label class="custom-check"><img src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/hipaa.svg" alt="HIPAA"><p>HIPAA</p>
        <input type="checkbox" value="HIPAA"><span class="checkmark"></span></label></div>
        <div class="check-box">
        <label class="custom-check"><img src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/gdpr.svg" alt="GDPR"><p>GDPR</p>
        <input type="checkbox" value="GDPR"><span class="checkmark"></span></label></div>
        <div class="check-box">
        <label class="custom-check"><img src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/custom_frameworks.svg" alt="Other"><p>Other</p>
        <input type="checkbox" value="Other"><span class="checkmark"></span></label></div>
        </div>
        <div class="btn-section"><button class="get-started-cta">Get Started <img src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/arrow_icon.svg" alt="Arrow"></button></div>
        </div></div></section>
        <section class="hero-img-section"> <div class="img-container"><picture>
        <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2006/1440.webp">
        <source media="(min-width: 1900px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2006/1920.webp">
        <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2006/1440.png" type="image/png">
        <img src="//res.cloudinary.com/spiralyze/image/upload/v1698933874/drata/2006/360.webp" alt="Drata Dashboard">
      </picture></div></section>
        <section class="social-pr-section">
            <!-- <div class="container"> -->
            <h2 class="sp-title">
              Join the thousands of companies that trust Drata
            </h2>
            <div class="sp-logo-group dis-flex justify-content-between">
              <div class="sp-marquee">
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/abnormal.svg"
                    class="sp-img"
                    alt="Abnormal"
                    title="Abnormal"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/airbase.svg"
                    class="sp-img"
                    alt="Airbase"
                    title="Airbase"
                  />
                </div>
                <div class="sp-logo-item">
                <img
                  src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/superhuman_1.svg"
                  class="sp-img"
                  alt="Super Human"
                  title="Super Human"
                />
              </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/clearbit.svg"
                    class="sp-img"
                    alt="Clearbit"
                    title="Clearbit"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/bamboohr.svg"
                    class="sp-img"
                    alt="bamboo HR"
                    title="bamboo HR"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/notion.svg"
                    class="sp-img"
                    alt="Notion"
                    title="Notion"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/postman.svg"
                    class="sp-img"
                    alt="Postman"
                    title="Postman"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/vercel.svg"
                    class="sp-img"
                    alt="Vercel"
                    title="Vercel"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/lemonade.svg"
                    class="sp-img"
                    alt="Lemonade"
                    title="Lemonade"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933834/drata/2006/fivetran.svg"
                    class="sp-img"
                    alt="Fivetran"
                    title="Fivetran"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/vip.svg"
                    class="sp-img"
                    alt="Wvip"
                    title="Wvip"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/clearco.svg"
                    class="sp-img"
                    alt="Clearco"
                    title="Clearco"
                  />
                </div>
                <!-- Repeat -->
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/abnormal.svg"
                    class="sp-img"
                    alt="Abnormal"
                    title="Abnormal"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/airbase.svg"
                    class="sp-img"
                    alt="Airbase"
                    title="Airbase"
                  />
                </div>
                <div class="sp-logo-item">
                <img
                  src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/superhuman_1.svg"
                  class="sp-img"
                  alt="Super Human"
                  title="Super Human"
                />
              </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/clearbit.svg"
                    class="sp-img"
                    alt="Clearbit"
                    title="Clearbit"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/bamboohr.svg"
                    class="sp-img"
                    alt="bamboo HR"
                    title="bamboo HR"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/notion.svg"
                    class="sp-img"
                    alt="Notion"
                    title="Notion"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/postman.svg"
                    class="sp-img"
                    alt="Postman"
                    title="Postman"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/vercel.svg"
                    class="sp-img"
                    alt="Vercel"
                    title="Vercel"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/lemonade.svg"
                    class="sp-img"
                    alt="Lemonade"
                    title="Lemonade"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933834/drata/2006/fivetran.svg"
                    class="sp-img"
                    alt="Fivetran"
                    title="Fivetran"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/vip.svg"
                    class="sp-img"
                    alt="Wvip"
                    title="Wvip"
                  />
                </div>
                <div class="sp-logo-item">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1698933833/drata/2006/clearco.svg"
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
              <p><span>Excellent</span> based on <span>500+</span> reviews</p>
            </div>
          </div>
          <div class="review-slider container">
            <div class="review-item-box">
              <div class="review-content">
                <h6 class="review-author">Derek E. </h6>
                <p class="review">“Undergoing any audit is a massive lift for those being audited. The entire process is confusing if not done correctly. Drata has made the process simple, easy, and innovative.”</p>
                <div class="rating dis-flex">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1698049092/drata/2003/custom/review_stars.svg" alt="Rating Stars" title="Rating Stars" class="star-rating"/>
                </div>
              </div>
            </div>
            <div class="review-item-box">
              <div class="review-content">
                <h6 class="review-author">Greg C.</h6>
                <p class="review">“What really sets Drata apart is its ability to simplify and automate the often complex and time-consuming process of compliance.”</p>
                <div class="rating dis-flex">
                <img src="//res.cloudinary.com/spiralyze/image/upload/v1698049092/drata/2003/custom/review_stars.svg" alt="Rating Stars" title="Rating Stars" class="star-rating"/>
                </div>
              </div>
            </div>
            <div class="review-item-box">
              <div class="review-content">
                <h6 class="review-author">Gabriel R.</h6>
                <p class="review">“From day one, our experience with Drata was enjoyable. They have a very well thought product to help their clients achieve their compliance goals.”</p>
                <div class="rating dis-flex">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1698049092/drata/2003/custom/review_stars.svg" alt="Rating Stars" title="Rating Stars" class="star-rating"/>
                </div>
              </div>
            </div>
          </div>
            </section>`);

        waitForElm('a.MuiBox-root[href="https://drata.com/blog/g2-fall-2023-report"]').then(function () {
          document.querySelector('a.MuiBox-root[href="https://drata.com/blog/g2-fall-2023-report"]').innerHTML = `<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/2003/image_1.webp" alt="Leader Fall" class="leader-icon"><span class="leader-text">Compliance Automation Leader</span>`;
        });
      }
    });
  }

  function removeTest() {
    document.body.classList.remove("spz-2006");
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
    if (isSameUrl(url, targetTestURL, true)) {
      createTest_2006();
    }
    else if (window.location.pathname.indexOf("/demo") > -1) {
      createTest_2006();
    }
    else {
      removeTest();
    }
  }

  // isSameUrl Parameters
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

  //set a cookie using js
  function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";" + "path=/";
  }

  //get a cookie using js
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  //window onclick check target class
  window.onclick = function (event) {
    if (event.target.className == "get-started-cta") {
      document.querySelectorAll('.checkboxes input:checked').forEach(function (elem) {
        setCookie(elem.value, "active");
      });

      document.querySelector('a[href="/demo"]').click();
    }
  }

})();
