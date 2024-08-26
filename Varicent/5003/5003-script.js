const stickyFooterContent = {
  trustImage: [
    {
      breakPoint: 1025,
      url: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/varicent/5003/Rating-desk.svg",
    },
    {
      breakPoint: 320,
      url: "//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/varicent/5003/Rating-mob.svg",
    },
  ],
  alt: "Trust logos",
  CTAs: [
    {
      ctaText: `book a DEMO <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M6.11932 11.7273L4.80114 10.4204L8.26137 6.96021H0.153412V5.03975H8.26137L4.80114 1.58521L6.11932 0.272705L11.8466 5.99998L6.11932 11.7273Z" fill="#10239E"/>
</svg>`,
      ctaURL: "https://www.varicent.com/book-a-demo",
      className: 'spz-primary'
    },
    {
      ctaText: "Product Tours",
      ctaURL: "https://www.varicent.com/interactive-product-tours",
      className: 'spz-secondary'
    }
  ]
};

document.body.classList.add("spz-5003");

document.head.insertAdjacentHTML('beforeend', '<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/varicent/5003/Close-hover.svg" as="image">');
// Add the sticky footer only if the user has not hidden it in session
if (!sessionStorage.getItem("footerHidden")) {
  addStickyFooter(stickyFooterContent);
  hideShowStickyBar();
}

/***********************************
************************************
DO NOT TOUCH
BEYOND THIS LINE
******************************
************************/
// This is the code to generate the sticky footer section do not edit it
//check the scroll position after every window resize
var scrollPosition = document.querySelector('#main-content>.container-fluid>.row-fluid-wrapper>.row-fluid>.span12>.row-fluid-wrapper.row-number-1').offsetHeight + document.querySelector(".header-wrapper").offsetHeight;
window.addEventListener("resize", function () {
  scrollPosition = document.querySelector('#main-content>.container-fluid>.row-fluid-wrapper>.row-fluid>.span12>.row-fluid-wrapper.row-number-1').offsetHeight + document.querySelector(".header-wrapper").offsetHeight;
});
function hideShowStickyBar() {
  waitForElm('.spz-sticky-footer').then(function (elm) {
    if (document.querySelector('#hs-banner-parent')) {
      waitForElm('#hs-banner-parent #hs-eu-cookie-confirmation.hs-hidden').then(function (elm) {
        if (window.scrollY > scrollPosition) {
          document.querySelector("body").classList.add("goUp");
          document.querySelector(".header-wrapper.is-stuck").classList.add("spz-hide");
          document.querySelector(".body-wrapper.hs-site-page.page").classList.add("spz-overflow");
          if (document.querySelector('.goUp .spz-sticky-footer'))
            document.querySelector("#main__footer").style.paddingBottom = document.querySelector('.goUp .spz-sticky-footer').offsetHeight + 'px';
        } else {
          document.querySelector("body").classList.remove("goUp");
          document.querySelector(".header-wrapper").classList.remove("spz-hide");
          document.querySelector(".body-wrapper.hs-site-page.page").classList.remove("spz-overflow");
        }
      });
    }
    else {
      if (window.scrollY > scrollPosition) {
        document.querySelector("body").classList.add("goUp");
        document.querySelector(".header-wrapper.is-stuck").classList.add("spz-hide");
        document.querySelector(".body-wrapper.hs-site-page.page").classList.add("spz-overflow");
        if (document.querySelector('.goUp .spz-sticky-footer'))
          document.querySelector("#main__footer").style.paddingBottom = document.querySelector('.goUp .spz-sticky-footer').offsetHeight + 'px';
      } else {
        document.querySelector("body").classList.remove("goUp");
        document.querySelector(".header-wrapper").classList.remove("spz-hide");
        document.querySelector(".body-wrapper.hs-site-page.page").classList.remove("spz-overflow");
      }
    }
  });
}
document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("sticky_close") ||
    e.target.classList.contains("footerBtn")
  ) {
    document.querySelector(".spz-sticky-footer").remove();
    sessionStorage.setItem("footerHidden", "true");
    document.querySelector("#main__footer").style.paddingBottom = '0px';
  }
});
window.addEventListener(
  "scroll",
  function () {
    hideShowStickyBar();
  },
  true
);
function addStickyFooter(footerData) {
  const formTemplate = `
  <div class="spz-sticky-footer">
    <div class="spz-footer-container">
    	<div class="spz-trust-logos-wrap">
    		<picture>
              ${stickyFooterContent.trustImage.map((item) => `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`).join("")}
              <img src="${stickyFooterContent.trustImage[0].url}" alt="${stickyFooterContent.alt}">
        </picture>
    	</div>
    	<div class="spz-ctas-wrap">
    		${stickyFooterContent.CTAs.map((item) => `<a href=${item.ctaURL} class='${item.className} spz-5003-track'>${item.ctaText}</a>`).join("")}
    	</div>
    </div>
    <div class="close_wrapper">
      <a href="javascript:;" class="sticky_close"></a>
    </div>
  </div>
  `;
  document.body.insertAdjacentHTML("beforeend", formTemplate);
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