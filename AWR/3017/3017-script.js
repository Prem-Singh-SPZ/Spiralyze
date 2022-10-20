var content = document.createElement("script");
content.src =
  "https://res.cloudinary.com/spiralyze/raw/upload/f_auto/AWR/3017/products.js";
document.head.appendChild(content);
let coverRepairSection, faqInt, intr, unitPrice;
content.onload = function () {
  setInterval(function () {
    document
      .querySelectorAll('.collapse[data-parent="#faq-accordion"]')
      .forEach((item) => {
        if (item.classList.contains("show")) {
          item.parentElement.classList.add("toggle-bg");
        } else {
          item.parentElement.classList.remove("toggle-bg");
        }
      });
  });

  intr = setInterval(function () {
    if (document.querySelector('button[angularticscategory="Header-Login"]')) {
      if (
        /https:\/\/www.awrusa.com\/([a-zA-Z]*\/)?product\/\d\d\d\d\d\/[a-zA-Z][a-zA-Z]\d\d\d\/residential\/(.*)?/.test(
          window.location.href
        )
      ) {
        if (!document.body.classList.contains("spz-3017")) {
          document.body.classList.add("spz-3007-tc");
          document.body.classList.add("spz-3017");
        }

        if (
          document.querySelectorAll(".terms-btn").length > 0 &&
          document.querySelectorAll(".terms-cond-link-spz").length == 0
        ) {
          document
            .querySelector(".terms-btn")
            .parentElement.classList.add("terms-link-spz");
          document
            .querySelector("#covered-repair-section .covered-repairs")
            .insertAdjacentHTML(
              "beforebegin",
              `<a href="javascript:void(0)" class="col-4 terms-cond-link-spz">Terms & Conditions</a>`
            );
        }

        if (document.querySelector(".pricing-not-leak .pricing-text span")) {
          unitPrice = document.querySelector(
            ".pricing-not-leak .pricing-text span"
          ).textContent;
        }

        const tabLinks = document.querySelectorAll("button.tablinks");
        if (
          (tabLinks &&
            tabLinks[0] &&
            tabLinks[0].innerText == "What's Covered") ||
          (tabLinks &&
            tabLinks[0] &&
            tabLinks[0].innerText == "Covered Repairs")
        ) {
          tabLinks[0].parentNode.remove();
        }
        const secTitle = document.querySelector(
          ".covered-repair-section .section-head-title.font-unbounce-title"
        );
        if (secTitle && secTitle.innerText !== "What's Covered") {
          secTitle.innerText = "What's Covered";
        }
        const faqTitle = document.querySelector(
          "#tab-faq-section .section-head-title"
        );
        if (faqTitle && faqTitle.innerText !== "Frequently Asked Questions") {
          faqTitle.innerText = "Frequently Asked Questions";
        }
        if (
          document.querySelectorAll(".product-detail-body .tab .tab-div")
            .length === 5
        ) {
          document
            .querySelectorAll(".product-detail-body .tab .tab-div")[0]
            .remove();
          document.querySelector("#tab-benefit-section").remove();
          document
            .querySelectorAll(".product-detail-body .tab .tab-div")[0]
            .classList.add("active");
          document
            .querySelector("#tabs")
            .insertBefore(
              document.querySelectorAll(
                ".product-detail-body .tab .tab-div"
              )[1],
              document.querySelectorAll(".product-detail-body .tab .tab-div")[3]
            );
          document
            .querySelector("#scroll-spy-id")
            .insertBefore(
              document.querySelector("#tab-faq-section"),
              document.querySelector("#tab-neighbourhood-service-id")
            );
        }

        if (
          !document.querySelector("#general-section") &&
          document.querySelector("#scroll-spy-id")
        ) {
          if (window.innerWidth < 1024 && window.innerWidth > 767) {
            document.querySelector("#scroll-spy-id").style.paddingTop =
              "1200px";
          }
          if (window.innerWidth > 1023) {
            document.querySelector("#scroll-spy-id").style.paddingTop = "850px";
          }
          if (window.innerWidth < 768) {
            document.querySelector("#scroll-spy-id").style.paddingTop = "350px";
          }
        } else if (document.querySelector("#scroll-spy-id")) {
          document.querySelector("#scroll-spy-id").style.paddingTop = "0";
        }
        if (
          document.querySelector(".rating-btn") &&
          document.querySelector(".mobile-only-view.program-name .rating-label")
        ) {
          document
            .querySelector(".rating-btn")
            .parentElement.parentElement.classList.add("reviews-wrapper-spz");
          document.querySelector(
            ".mobile-only-view.program-name .rating-label"
          ).innerHTML = '4.9 <span class="rl-rev">(50 Reviews)</span>';
          document.querySelector(
            ".desktop-only-view.program-name .rating-label"
          ).innerHTML = '4.9 <span class="rl-rev">(50 Reviews)</span>';
        }

        updatePageContent();
        rerenderRelated();
        if (document.querySelectorAll(".no-zipcode-search").length > 0) {
          priceAndZip();
        }
      }
    } else {
      document.body.classList.remove("spz-3007-tc");
      document.body.classList.remove("spz-3017");
    }
  }, 100);

  faqInt = setInterval(faqSection, 100);
  compProtectionAndCoverageInt = setInterval(compProtectionAndCoverage, 100);
};

window.addEventListener("click", function (e) {
  if (e.target.classList.contains("change-area-link")) {
    console.log("Change link pressed");
    priceAndZip();
  }

  if (e.target.classList.contains("product-page-search")) {
    console.log("Zip Change pressed");
    waitForElm(
      ".change-zip-grid-spz .zipcode-searched .selected-location-box"
    ).then(function (elm) {
      document
        .querySelector(".selected-zipcode-area .program-content")
        .classList.remove("change-zip-grid-spz");
    });
  }

  if (e.target.classList.contains("selected-area-text")) {
    jQuery(".change-zip.change-area-link").trigger("click");
  }

  if (e.target.classList.contains("terms-cond-link-spz")) {
    document.querySelector(".terms-btn").click();
  }
});

function updatePageContent() {
  if (document.querySelector('button[angularticscategory="Header-Login"]')) {
    if (
      document.querySelector(
        ".general-section .program-content .covered-repair-section"
      ) == null
    ) {
      cloneElement(
        "#covered-repair-section",
        ".general-section .content-box .description-heading-text-content"
      );
      if (document.querySelector("#covered-repair-section .covered-repairs")) {
        document
          .querySelector("#covered-repair-section .covered-repairs")
          .classList.remove("col-8");
        document
          .querySelector("#covered-repair-section .covered-repairs")
          .classList.add("col-12");
      }

      let ocTxt = document.querySelector(
        ".general-section[_ngcontent-c9] .content-box[_ngcontent-c9] .middle-section[_ngcontent-c9] .col-12 li"
      );
      if (ocTxt && ocTxt.textContent.trim().length > 0) {
        ocTxt = ocTxt.textContent.trim();
        document
          .querySelector(
            ".general-section .program-content .description-heading-text-content > p"
          )
          .insertAdjacentHTML(
            "afterend",
            `<div _ngcontent-c9="" class="no-mobile middle-section ng-tns-c9-0 ng-star-inserted">
                    <div _ngcontent-c9="" class="col-12 PD-0">
                        <ul _ngcontent-c9="" class="ng-tns-c9-0">
                            <!----><li _ngcontent-c9="" class="ng-tns-c9-0 ng-star-inserted"> ${ocTxt}</li>
                        </ul>
                    </div>
                </div>`
          );
      }

      const wcCount =
        ".description-heading-text-content #covered-repair-section .covered-repairs-list.initial li";
      if (document.querySelectorAll(wcCount).length >= 9) {
        document
          .querySelector(
            ".description-heading-text-content #covered-repair-section .covered-repairs-list"
          )
          .insertAdjacentHTML(
            "afterend",
            `
                <div class="see-more">
                    <a href="javascript:void(0)">See more</a>
                </div>`
          );

        const wcLi = document.querySelectorAll(
          ".covered-repair-section .covered-repairs-list.initial li"
        );
        for (const li of wcLi) {
          li.classList.remove("show");
        }

        document
          .querySelector(".covered-repair-section .see-more")
          .addEventListener("click", function () {
            document
              .querySelector(".covered-repair-section .see-more")
              .remove();
            document
              .querySelector(
                ".covered-repair-section .covered-repairs > .col-12"
              )
              .classList.add("scroll-li");
            for (const li of wcLi) {
              li.classList.add("show");
            }
          });
      } else if (document.querySelector(".covered-repair-section .see-more")) {
        document.querySelector(".covered-repair-section .see-more").remove();
      }
    }

    if (
      document.querySelector(
        ".general-section .detail-header-section .program-name h3"
      ) &&
      document.querySelector(
        ".breadcrumb-wrapper .custom-breadcrumb ul li.active"
      )
    ) {
      pages.filter((item) => {
        if (
          item.productFilterName ===
          window.location.pathname.split("/")[
            window.location.pathname.split("/").length - 1
          ]
        ) {
          document.querySelector(
            ".general-section .detail-header-section .program-name h3"
          ).innerText = item.productNewName;
          const prImageElem = document.querySelector(
            ".general-section .bg-banner-img .banner-img"
          );
          if (
            document.querySelectorAll(
              ".general-section .bg-banner-img .banner-image-div .banner-img"
            ).length == 0
          ) {
            document
              .querySelector(
                ".general-section .bg-banner-img .banner-image-div"
              )
              .insertAdjacentHTML(
                "afterbegin",
                '<img _ngcontent-c9="" class="banner-img ng-tns-c9-0 ng-star-inserted" loading="lazy" src="' +
                  item.productImage +
                  '">'
              );
            document
              .querySelector(
                ".general-section .bg-banner-img .except-mobile-only"
              )
              .classList.remove("except-mobile-only");
          }
          if (prImageElem && window.innerWidth < 768) {
            prImageElem.src =
              "https://res.cloudinary.com/spiralyze/image/upload/v1664890464/AWR/3017/assets/Hero-Image_Mobile.jpg";
          } else if (prImageElem && window.innerWidth < 1024) {
            prImageElem.src =
              "https://res.cloudinary.com/spiralyze/image/upload/v1664890464/AWR/3017/assets/Hero-Image_Tablet.jpg";
          } else {
            if (prImageElem) {
              prImageElem.src =
                "https://res.cloudinary.com/spiralyze/image/upload/v1664890464/AWR/3017/assets/Hero-Image_Desktop.jpg";
            }
          }
          if (window.innerWidth < 768) {
            if (prImageElem) {
              document.querySelector(".mobile-banner-img .mob-banner-img").src =
                "https://res.cloudinary.com/spiralyze/image/upload/v1664890464/AWR/3017/assets/Hero-Image_Mobile.jpg";
            }
          }
          if (document.querySelector(".spz-cover-description")) {
            document.querySelector(".spz-cover-description").innerText =
              item.coverSubheading;
            // document.querySelector('.breadcrumb-wrapper .custom-breadcrumb ul li.active').innerText = item.productNewName
          }
        }
      });
    }
  } else {
    document.body.classList.remove("spz-3007-tc");
    document.body.classList.remove("spz-3017");
  }
}

function priceAndZip() {
  if (
    document.querySelector(
      ".selected-zipcode-area .description-heading-text-content"
    )
  ) {
    document
      .querySelector(".selected-zipcode-area .program-content")
      .classList.add("change-zip-grid-spz");

    if (
      document.querySelectorAll(".spz-product-price").length == 0 &&
      unitPrice
    ) {
      document
        .querySelector(
          ".selected-zipcode-area .description-heading-text-content"
        )
        .insertAdjacentHTML(
          "afterend",
          `<div _ngcontent-c9="" class="spz-product-price pricing-box ng-tns-c9-0 ng-star-inserted">
                    <div _ngcontent-c9="" class="pricing-not-leak ng-tns-c9-0 ng-star-inserted">
                        <label _ngcontent-c9="" class="pricing-text">
                            <span _ngcontent-c9="" class="notranslate">${unitPrice}</span>
                            <small _ngcontent-c9="" class="ng-tns-c9-0">per month</small>
                        </label>
                    </div>
                    <div _ngcontent-c9="" class="text-position ng-tns-c9-0 ng-star-inserted">
                        <div _ngcontent-c9="" class="old-price-container"></div>
                    </div>
                </div>`
        );
    }

    waitForElm(".details-zip-text-mobile").then(function (elm) {
      document.querySelector(".details-zip-text-mobile").textContent =
        "Based on your location";
      document.querySelector(
        ".get-started-btn.product-page-search"
      ).textContent = "Change";
    });
  }
}

function faqSection() {
  if (
    document.querySelectorAll(
      "#tab-faq-section hos-product-faq .card-header a .faq-text"
    ).length > 0
  ) {
    clearInterval(faqInt);
    const listQues = document.querySelectorAll(
      "hos-product-faq .card-header a .faq-text"
    );
    const listAns = document.querySelectorAll("hos-product-faq .card-block p");
    for (let i = 0; i < listQues.length; i++) {
      listQues[i].innerText = listQues[i].innerText.slice(2);
      listAns[i].innerText = listAns[i].innerText.slice(2);
    }

    document
      .querySelectorAll("hos-product-faq .card-block p")
      .forEach(function (v, k) {
        v.insertAdjacentHTML(
          "beforebegin",
          `<div class='ans-div faq-ans-spz'>A.</div>`
        );
      });
    // jQuery(`<div class='ans-div faq-ans-spz'>A.</div>`).insertBefore('hos-product-faq .card-block p');
  }
}

function compProtectionAndCoverage() {
  if (
    document.querySelectorAll(
      ".product-detail-body #scroll-spy-id .comp-protection-and-coverage"
    ).length < 1 &&
    document.querySelector("#scroll-spy-id #tab-faq-section")
  ) {
    clearInterval(compProtectionAndCoverageInt);
    document
      .querySelector("#scroll-spy-id #tab-neighbourhood-service-id")
      .insertAdjacentHTML(
        "beforebegin",
        `<div class="comp-protection-and-coverage">
        <div class="comp-protection">
        <div class="row"><div class="col-12">
        <div class="comp-protection-title"><h5>Comprehensive Protection</h5> </div> 
        <div class="comp-protection-content"><p>Get hassle-free repairs with just one phone call.</p>  <p>Includes repairs, permitting, restoration, and a one-year warranty.</p> </div>
        <div class="image-container">
        <picture>
        <source media="(min-width: 1248px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/3017/assets/Comp-Protection-Desktop.jpg">
        <source media="(min-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/3017/assets/Comp-Protection-Tablet.jpg">
        <source media="(min-width: 220px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/3017/assets/Comp-Protection-Mobile.jpg">
        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/3017/assets/Comp-Protection-Desktop.jpg" alt="2 Million Banner" title="2 Million Banner">
        </picture>
        <div class="comp-protection-button"></div> 
        </div> </div></div>
        </div>
        <div class="coverage-commitment">
        <div class="row"><div class="col-12"> <div class="banner-container">
        <picture>
        <source media="(min-width: 1248px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/3017/assets/2Million_Baner_Desktop.jpg">
        <source media="(min-width: 767px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/3017/assets/2Million_Baner_Tablet.jpg">
        <source media="(min-width: 220px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/3017/assets/2Million_Baner_Mobile.jpg">
        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/3017/assets/2Million_Baner_Desktop.jpg" alt="2 Million Banner" title="2 Million Banner">
        </picture>
        </div> </div></div>
        </div>
        </div>`
      );

      cloneElement(".enroll-now-box", ".comp-protection-button"); 
  }
}

function rerenderRelated() {
  if (document.querySelector('button[angularticscategory="Header-Login"]')) {
    document
      .querySelectorAll("#tab-neighbourhood-service-id .card")
      .forEach((cardItem, index) => {
        relatedProducts.filter((item) => {
          if (
            cardItem.children[0] &&
            cardItem.children[0].innerText === item.productFilterName &&
            document.querySelectorAll(".related-item-desc").length < 4
          ) {
            cardItem.children[0].innerText = item.productNewName;
            cardItem.children[1].src = item.productMobileImage;
            if (item.isBestValue == true) {
              cardItem.children[0].classList.add("is-best-value");
            }
            jQuery(cardItem).find(".enroll-now").text("Enroll Now");

            jQuery(cardItem)
              .find(".small-txt")
              .text(
                jQuery(cardItem).find(".small-txt").text().replace("Per", "")
              );
            jQuery(".spz-learn-more").click(function () {
              jQuery(this).parent().parent().find(".program-name").click();
            });
          }
        });
      });
  } else {
    document.body.classList.remove("spz-3007-tc");
  }
}

// Generic Starts
function moveElement(source, target) {
  const f = document.createDocumentFragment();
  if (document.querySelector(source) != null) {
    f.appendChild(document.querySelector(source));
    document.querySelector(target).appendChild(f);
  }
}

function cloneElement(source, target) {
  if (document.querySelector(source) && document.querySelector(target)) {
    const sc = document.querySelector(source);
    const clone = sc.cloneNode(true);
    document.querySelector(target).appendChild(clone);
  }
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
// Generic Ends
