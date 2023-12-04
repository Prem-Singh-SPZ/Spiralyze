(function () {

  function createTest_2006() {
    document.body.classList.add('spz-2007');

    waitForElm('.css-nu3kba-MuiList-root-Header-headerMenuCtas').then(function () {
      // if (document.querySelector('.social-pr-section')) {
      //   document.querySelector('.social-pr-section').remove();
      // }

      waitForElm('.css-1a48d2a-TabsQuotes-outerContainer .swiper.swiper-3d').then(function () {
        appendHomeHeroContent();
      });

      // Add class 'safari' on body if browser is safari
      if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
        document.body.classList.add('safari');
      }
    });
  }

  function appendHomeHeroContent() {
    const astUrl = '//res.cloudinary.com/spiralyze/image/upload';
    waitForElm('.css-3db0n2-HeroHomepage-hero').then(function () {
      // insert element anchors cta
      if (document.querySelectorAll('.hero-banner-section').length == 0) {
        document.querySelector('.css-3db0n2-HeroHomepage-hero').insertAdjacentHTML('afterend', `
        <div class="hero-banner-section">
          <div class="hero-banner-container container">
          <div class="hero-copy"> 
            <h2><span class="blue-text">Automate</span> and <span class="blue-text">Accelerate</span> <br>  <span href="" class="typewrite" data-period="2000" data-type='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to  Develop Develop." ]'>
            <span class="wrap"></span>
          </span></h2> 
            <p>Drata automates your compliance journey from start to audit-ready and beyond and provides support from the security and compliance experts who built it.</p> 
          </div>
          <div class="checkbox-section">
            <h6>What frameworks are you interested in? </h6> 
            <div class="checkboxes"> 
              <div class="check-box">
                <label class="custom-check">
                  <img src="${astUrl}/v1698933833/drata/2006/soc_2.svg" alt="SOC 2">
                  <p>SOC 2</p>
                  <input class="spz-input" type="checkbox" value="SOC 2">
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="check-box">
              <label class="custom-check"><img src="${astUrl}/v1699516610/drata/2006/iso.svg" alt="ISO 27001"><p>ISO 27001</p>
              <input class="spz-input" type="checkbox" value="ISO 27001"><span class="checkmark"></span></label></div>
              <div class="check-box">
              <label class="custom-check"><img src="${astUrl}/v1698933833/drata/2006/pci_1.svg" alt="PCI DSS"><p>PCI DSS</p>
              <input class="spz-input" type="checkbox" value="Other"><span class="checkmark"></span></label></div>
              <div class="check-box">
              <label class="custom-check"><img src="${astUrl}/v1698933833/drata/2006/hipaa.svg" alt="HIPAA"><p>HIPAA</p>
              <input class="spz-input" type="checkbox" value="HIPAA"><span class="checkmark"></span></label></div>
              <div class="check-box">
              <label class="custom-check"><img src="${astUrl}/v1698933833/drata/2006/gdpr.svg" alt="GDPR"><p>GDPR</p>
              <input class="spz-input" type="checkbox" value="GDPR"><span class="checkmark"></span></label></div>
              <div class="check-box">
              <label class="custom-check"><img src="${astUrl}/v1698933833/drata/2006/custom_frameworks.svg" alt="Other"><p>Other</p>
              <input class="spz-input" type="checkbox" value="Other"><span class="checkmark"></span></label></div>
              </div>
              <div class="btn-section"><button class="get-started-cta">Get Started <img src="${astUrl}/v1698933833/drata/2006/arrow_icon.svg" alt="Arrow"></button></div>
              </div></div></div>
              <div class="hero-img-section"> <div class="img-container"><picture>
              <source media="(max-width: 767px)" srcset="${astUrl}/f_auto/drata/2006/360.webp">
              <source media="(min-width: 768px)" srcset="${astUrl}/f_auto/drata/2006/1440.webp">
              <source media="(min-width: 1900px)" srcset="${astUrl}/f_auto/drata/2006/1920.webp">
              <source srcset="${astUrl}/f_auto/drata/2006/1440.png" type="image/png">
              <img src="${astUrl}/f_auto/drata/2006/360.webp" alt="Drata Dashboard">
            </picture></div></div>
        <div class="social-pr-section">
            <!-- <div class="container"> -->
            <h2 class="sp-title">
              Join the thousands of companies that trust Drata
            </h2>
            <div class="sp-logo-group dis-flex justify-content-between">
              <div class="sp-marquee">
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/abnormal.svg"
                    class="sp-img"
                    alt="Abnormal"
                    title="Abnormal"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/airbase.svg"
                    class="sp-img"
                    alt="Airbase"
                    title="Airbase"
                  />
                </div>
                <div class="sp-logo-item">
                <img
                  src="${astUrl}/v1698933833/drata/2006/superhuman_1.svg"
                  class="sp-img"
                  alt="Super Human"
                  title="Super Human"
                />
              </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/clearbit.svg"
                    class="sp-img"
                    alt="Clearbit"
                    title="Clearbit"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/bamboohr.svg"
                    class="sp-img"
                    alt="bamboo HR"
                    title="bamboo HR"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/notion.svg"
                    class="sp-img"
                    alt="Notion"
                    title="Notion"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/postman.svg"
                    class="sp-img"
                    alt="Postman"
                    title="Postman"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/vercel.svg"
                    class="sp-img"
                    alt="Vercel"
                    title="Vercel"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/lemonade.svg"
                    class="sp-img"
                    alt="Lemonade"
                    title="Lemonade"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933834/drata/2006/fivetran.svg"
                    class="sp-img"
                    alt="Fivetran"
                    title="Fivetran"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/vip.svg"
                    class="sp-img"
                    alt="Wvip"
                    title="Wvip"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/clearco.svg"
                    class="sp-img"
                    alt="Clearco"
                    title="Clearco"
                  />
                </div>
                <!-- Repeat -->
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/abnormal.svg"
                    class="sp-img"
                    alt="Abnormal"
                    title="Abnormal"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/airbase.svg"
                    class="sp-img"
                    alt="Airbase"
                    title="Airbase"
                  />
                </div>
                <div class="sp-logo-item">
                <img
                  src="${astUrl}/v1698933833/drata/2006/superhuman_1.svg"
                  class="sp-img"
                  alt="Super Human"
                  title="Super Human"
                />
              </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/clearbit.svg"
                    class="sp-img"
                    alt="Clearbit"
                    title="Clearbit"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/bamboohr.svg"
                    class="sp-img"
                    alt="bamboo HR"
                    title="bamboo HR"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/notion.svg"
                    class="sp-img"
                    alt="Notion"
                    title="Notion"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/postman.svg"
                    class="sp-img"
                    alt="Postman"
                    title="Postman"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/vercel.svg"
                    class="sp-img"
                    alt="Vercel"
                    title="Vercel"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/lemonade.svg"
                    class="sp-img"
                    alt="Lemonade"
                    title="Lemonade"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933834/drata/2006/fivetran.svg"
                    class="sp-img"
                    alt="Fivetran"
                    title="Fivetran"
                  />
                </div>
                <div class="sp-logo-item">
                  <img
                    src="${astUrl}/v1698933833/drata/2006/vip.svg"
                    class="sp-img"
                    alt="Wvip"
                    title="Wvip"
                  />
                </div>
                <div class="sp-logo-item">
                  <img src="${astUrl}/v1698933833/drata/2006/clearco.svg"
                    class="sp-img"
                    alt="Clearco"
                    title="Clearco"/>
                </div>
              </div>
            </div>
          `);
      }
    });

    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName('typewrite');
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
    };
  }

  function demoChecked() {
    waitForElm('.hs_demo_product_of_interest .input .MuiFormControlLabel-label').then(function () {

      if (document.querySelector('.MuiFormControlLabel-label')) {
        document.querySelectorAll('.hs_demo_product_of_interest .input .hs-form-checkbox-display').forEach(function (checkbox) {
          let checkValue = checkbox.querySelector('span').textContent;
          let isCookiePresent = getCookie(checkValue);

          if (isCookiePresent) {
            checkbox.querySelector('input').checked = true;

            let secondCheck = checkbox.querySelector('input').getAttribute('id');

            document.querySelector('.MuiFormControlLabel-labelPlacementEnd ' + ' #' + secondCheck).checked = true;
            document.querySelector('.MuiFormControlLabel-labelPlacementEnd ' + ' #' + secondCheck).closest('label').click();

            //delete cookie
            deleteCookie(checkValue);
          }
        });

        // if (document.querySelector('.spz-2007 main') && document.querySelectorAll('.spz-2007 main input[name="cro_test_1"]').length == 0) {
        //   document.querySelector('.spz-2007 main').insertAdjacentHTML("beforeend", '<input type="hidden" name="cro_test_1" value="#2006_Hero_Redesign">'); s
        //   document.querySelector('.spz-2007 main').insertAdjacentHTML("beforeend", '<input type="hidden" name="cro_test_2" value="Variant">');
        // }
      }
    });
  }

  function removeTest() {
    document.body.classList.remove("spz-2007");
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
      demoChecked();
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

  //delete cookie using js
  function deleteCookie(cname) {
    document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  //window onclick check target class
  window.onclick = function (event) {
    if (event.target.className == "spz-input") {
      if (event.target.checked) {
        event.target.closest('.custom-check').classList.add('checked');
      }
      else {
        event.target.closest('.custom-check').classList.remove('checked');
      }
    }

    if (event.target.className == "get-started-cta") {
      document.querySelectorAll('.checkboxes input').forEach(function (elem) {
        if (elem.checked) {
          setCookie(elem.value, 1);
        }
      });

      document.querySelector('a[href="/demo"]').click();
    }
  }
})();