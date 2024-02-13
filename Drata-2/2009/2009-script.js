(function () {
  function createTest_2006() {
    document.body.classList.add("spz-2009");
    waitForElm('ul[class*="Header-headerMenuCtas"]').then(function () {
      waitForElm(".swiper.swiper-3d").then(function () {
        appendHomeHeroContent();
      });

      // Add class 'safari' on body if browser is safari
      if (
        navigator.userAgent.toLowerCase().indexOf("chrome/") == -1 &&
        navigator.userAgent.toLowerCase().indexOf("safari/") > -1
      ) {
        document.body.classList.add("safari");
      }
    });
  }

  function appendHomeHeroContent() {
    const astUrl = "//res.cloudinary.com/spiralyze/image/upload";
    waitForElm('div[class*="HeroHomepage-hero"]').then(function () {
      // insert element anchors cta
      if (document.querySelectorAll(".hero-banner-section").length == 0) {
        document
          .querySelector('div[class*="HeroHomepage-hero"]')
          .insertAdjacentHTML(
            "afterend",
            `
        <div class="hero-banner-section">
          <div class="hero-banner-container container">
          <div class="hero-copy"> 
            <h2><span class="blue-text">Automate</span> and <span class="blue-text">Accelerate</span> <br>  <span class="typing-container"><span class="typing">
          </span><span class="input-cursor"></span></span></h2> 
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
              <div class="hero-img-section"> <div class="img-container"><div class="video-container"><video autoplay loop muted playsinline width="100%">
              <source src="https://res.cloudinary.com/spiralyze/video/upload/f_auto/drata/2009/Video_without_overlay.mp4" type="video/mp4">
            </video></div></div></div>
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
          `
          );

        waitForElm(".typing").then(function () {
          typingEffect();
        });
      }
    });
  }

  const words = [
    "SOC2 Compliance",
    "ISO 27001 Certification",
    "HIPAA Compliance",
    "GDPR Compliance",
  ];

  // function for each character typing and deleting effect using javascript
  function typingEffect() {
    let wordIndex = 0;
    let charIndex = 0;

    const typing = document.querySelector(".typing");

    const type = () => {
      if (charIndex < words[wordIndex].length) {
        typing.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 2000);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        typing.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
      } else {
        wordIndex++;
        if (wordIndex >= words.length) wordIndex = 0;
        setTimeout(type, 2000);
      }
    };

    setTimeout(type, 200);
  }

  function demoChecked() {
    document.body.classList.add("spz-2009");

    waitForElm(
      ".spz-2009 .hs_demo_product_of_interest .input .MuiFormControlLabel-label"
    ).then(function () {
      if (document.querySelector(".MuiFormControlLabel-label")) {
        document
          .querySelectorAll(
            ".hs_demo_product_of_interest .input .hs-form-checkbox-display"
          )
          .forEach(function (checkbox) {
            let checkValue = checkbox.querySelector("span").textContent;
            let isCookiePresent = getCookie(checkValue);

            if (isCookiePresent) {
              checkbox.querySelector("input").checked = true;

              let secondCheck = checkbox
                .querySelector("input")
                .getAttribute("id");

              document.querySelector(
                ".MuiFormControlLabel-labelPlacementEnd " + "#" + secondCheck
              ).checked = true;
              document
                .querySelector(
                  ".MuiFormControlLabel-labelPlacementEnd " + "#" + secondCheck
                )
                .closest("label")
                .click();

              //delete cookie
              deleteCookie(checkValue);
            }
          });
      }

      setTimeout(() => {
        submitTestDetails("#2009_variant");
      }, 2000);
    });
  }

  //Passing test details to hidden fields
  function submitTestDetails(cro_test_2) {
    if (
      document.querySelector(
        "form.hs-form-private .hs_cro_test_2 .input .hs-input"
      )
    ) {
      // document.querySelector('form.hs-form-private .hs_cro_test_1 .input .hs-input').setAttribute('value', cro_test_1);
      document
        .querySelector("form.hs-form-private .hs_cro_test_2 .input .hs-input")
        .setAttribute("value", cro_test_2);
    }
  }

  function removeTest() {
    document.body.classList.remove("spz-2009");
  }

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
    removeTest();

    url = location.href;
    urlNewCheck(url);
  });
  var url = location.href;
  urlNewCheck(url);

  function urlNewCheck(url) {
    var targetTestURL = "https://drata.com/";
    if (isSameUrl(url, targetTestURL, true)) {
      createTest_2006();
    } else if (window.location.pathname.indexOf("/demo") > -1) {
      demoChecked();
    } else {
      removeTest();
    }
  }

  // isSameUrl Parameters
  function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#")
      ? currentUrl.slice(0, currentUrl.indexOf("#"))
      : currentUrl;
    specifiedUrl = specifiedUrl.includes("#")
      ? specifiedUrl.slice(0, specifiedUrl.indexOf("#"))
      : specifiedUrl;
    if (includeQueryParams)
      currentUrl = currentUrl.includes("?")
        ? currentUrl.slice(0, currentUrl.indexOf("?"))
        : currentUrl;
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
      observer.observe(document, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true,
      });
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
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
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
    document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }

  //window onclick check target class
  window.onclick = function (event) {
    if (event.target.className == "spz-input") {
      if (event.target.checked) {
        event.target.closest(".custom-check").classList.add("checked");
      } else {
        event.target.closest(".custom-check").classList.remove("checked");
      }
    }

    if (event.target.className == "get-started-cta") {
      document.querySelectorAll(".checkboxes input").forEach(function (elem) {
        if (elem.checked) {
          setCookie(elem.value, 1);
        }
      });

      document.querySelector('a[href="/demo"]').click();
    }
  };
})();


