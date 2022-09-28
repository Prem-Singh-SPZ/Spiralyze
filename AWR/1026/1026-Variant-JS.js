const baseUrl =
  "https://scpprd.prod.apimanagement.us10.hana.ondemand.com/api/hos/api";

const apiKey = "Ng0glnSyFyARBd7AGghwnAAjV1ORz5Vp";

async function getProductDetailspPageUrl(zipcode, programId) {
  try {
    const zipResult = await getZipcode(zipcode);
    const locResult = await getLocationCode(zipResult.locationCodeId);
    const micrositeResult = await getMicrosite(locResult.locationCode);
    const defaultCodes = await getdefaultcodes(
      zipResult.locationCodeId,
      zipResult.syncSource
    );

    const program = defaultCodes.result.find(
      (p) => p.program.programId === programId
    );

    if (!program) {
      return { status: "error", error: "Program not found" };
    }

    const webProgramName = (program.webProgramName || program.programName)
      .split(" ")
      .join("-")
      .split(",")
      .join("")
      .toLowerCase();

    let url = `/product/${zipcode}/${locResult.locationCode.toLowerCase()}/residential/${webProgramName}`;

    if (micrositeResult.level !== "default" && micrositeResult.site.siteName) {
      url = "/" + micrositeResult.site.siteName.toLowerCase() + url;
    }

    return { status: "success", url: url };
  } catch (error) {
    if (error.status === 404) {
      return { status: "error", error: "Zipcode not found" };
    } else if (error.status === 500) {
      return { status: "error", error: "No marketing codes found" };
    } else {
      return;
    }
  }
}

async function getProductListingpPageUrl(zipcode) {
  try {
    const zipResult = await getZipcode(zipcode);
    const locResult = await getLocationCode(zipResult.locationCodeId);
    const micrositeResult = await getMicrosite(locResult.locationCode);
    const defaultCodes = await getdefaultcodes(
      zipResult.locationCodeId,
      zipResult.syncSource
    );

    let url = `/products/${zipcode}/${locResult.locationCode.toLowerCase()}/residential`;

    if (micrositeResult.level !== "default" && micrositeResult.site.siteName) {
      url = "/" + micrositeResult.site.siteName.toLowerCase() + url;
    }

    return { status: "success", url: url };
  } catch (error) {
    if (error.status === 404) {
      return { status: "error", error: "Zipcode not found" };
    } else if (error.status === 500) {
      return { status: "error", error: "No marketing codes found" };
    } else {
      return;
    }
  }
}

async function getZipcode(zipcode) {
  const result = await fetch(
    `${baseUrl}/location/zip_codes/${zipcode}?APIKey=${apiKey}`
  );
  if (result.status === 404) {
    throw { status: 404 };
  }
  return result.json();
}

async function getLocationCode(locationId) {
  const result = await fetch(
    `${baseUrl}/location/location_codes/${locationId}?APIKey=${apiKey}`
  );
  return result.json();
}

async function getMicrosite(locationCode) {
  const result = await fetch(
    `${baseUrl}/content/microsite/${locationCode}?APIKey=${apiKey}`
  );
  return result.json();
}

async function getdefaultcodes(locationId, syncSource) {
  const result = await fetch(
    `${baseUrl}/product/marketing-codes/default-codes?location_code=${locationId}&allProducts=true&APIKey=${apiKey}`,
    {
      headers: {
        "Migrated-To-Oracle": syncSource === "oracle" ? "true" : "false",
      },
      method: "GET",
    }
  );
  if (result.status === 500) {
    throw { status: 500 };
  }
  return result.json();
}

let productName = "";
function redirectUserToList(zipCode, bottom) {
  if (bottom !== "") {
    getProductListingpPageUrl(zipCode).then((result) => {
      if (
        result.status === "error" &&
        result.error === "No marketing codes found"
      ) {
        addSpzZipErrorPopup();
      } else if (
        result.status === "error" &&
        result.error === "Zipcode not found"
      ) {
        jQuery("#spz-input-bottom").addClass("has-spz-error");
        jQuery(".spz-error-message.bottom").show();
      } else {
        window.location.href = "https://www.awrusa.com" + result.url;
      }
    });
  } else {
    getProductListingpPageUrl(zipCode).then((result) => {
      if (
        result.status === "error" &&
        result.error === "No marketing codes found"
      ) {
        addSpzZipErrorPopup();
      } else if (
        result.status === "error" &&
        result.error === "Zipcode not found"
      ) {
        jQuery("#spz-input").addClass("has-spz-error");
        jQuery(".spz-error-message:not(.bottom)").show();
      } else {
        window.location.href = "https://www.awrusa.com" + result.url;
      }
    });
  }
}
function redirectUserToProduct(productName, zipCode) {
  let product = "";
  if (productName === "water") product = "0d18b1d4-05d7-e411-9425-00155ddf6652";
  if (productName === "sewer") product = "0b18b1d4-05d7-e411-9425-00155ddf6652";
  if (productName === "combo") product = "1018b1d4-05d7-e411-9425-00155ddf6652";
  getProductDetailspPageUrl(zipCode, product).then((result) => {
    if (
      result.status === "error" &&
      result.error === "No marketing codes found"
    ) {
      addSpzZipErrorPopup();
    } else if (
      result.status === "error" &&
      result.error === "Program not found"
    ) {
      addSpzZipErrorPopup();
    } else if (
      result.status === "error" &&
      result.error === "Zipcode not found"
    ) {
      jQuery("#spz-input").addClass("has-spz-error");
      jQuery(".spz-error-message:not(.bottom)").show();
    } else {
      window.location.href = "https://www.awrusa.com" + result.url;
    }
  });
}
function addSpzZipErrorPopup() {
  jQuery(
    '<div class="modal fade spz-custom-error-popup spz-popup-appear show in">\
    <div class="modal-dialog custom-error-alert">\
      <div class="modal-content modal-background">\
        <div class="modal-body">\
          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1659528212/AWR/1013/info-icon.svg" alt="info-icon" class="info-icon-spz"/>\
          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1659550483/AWR/1013/close-icon-popup.svg" class="close-icon-spz"/>\
          <h4 class="mb-3">We are sorry. We do not currently offer services in your location.</h4>\
          <p class="info-txt pt-4 mb-0">Please check back soon for product and service availability in your area.</p>\
        </div>\
      </div>\
    </div>\
  </div>\
  '
  ).appendTo("body");
  jQuery(".spz-custom-error-popup .close-icon-spz").click(function () {
    removeSpzZipErrorPopup();
  });
}
function removeSpzZipErrorPopup() {
  jQuery(".spz-custom-error-popup").remove();
}
setInterval(() => {
  if (typeof jQuery !== "undefined") {
    if (
      jQuery("main.content hos-category").length > 0 &&
      window.location.href === "https://www.awrusa.com/"
    ) {
      if (!document.getElementById("google-slide-css")) {
        jQuery(
          '<link id="google-slide-css" rel="stylesheet" type="text/css" href="https://res.cloudinary.com/spiralyze/raw/upload/v1651267335/AWR/1001/google_slider.css">'
        ).appendTo("head");
      }
      if (!jQuery("body").hasClass("spz-1026"))
        jQuery("body").addClass("spz-1026");
      if (
        document.querySelector(".review_slider") &&
        !document.querySelector(".review_slider.slick-initialized")
      ) {
        jQuery(".review_slider").slick({
          arrow: true,
          dots: false,
          infinite: false,
          speed: 1500,
          slidesToShow: 4,
          slidesToScroll: 4,
          prevArrow:
            '<button class="slide_arrow prev-arrow"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="17.5" stroke="#AAAAAA"/><path d="M20.0079 21.2887C20.2641 21.0514 20.2644 20.6463 20.0084 20.4088L17.8873 18.4398C17.6315 18.2024 17.6315 17.7977 17.8873 17.5603L20.0084 15.5913C20.2644 15.3537 20.2641 14.9486 20.0079 14.7113L19.9455 14.6535C19.7155 14.4404 19.3601 14.4404 19.1301 14.6535L15.9924 17.5598C15.736 17.7973 15.736 18.2027 15.9924 18.4402L19.1301 21.3465C19.3601 21.5596 19.7155 21.5596 19.9455 21.3465L20.0079 21.2887Z" fill="#757575"/></svg></button>',
          nextArrow:
            '<button class="slide_arrow next-arrow"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="17.5" transform="matrix(-1 0 0 1 18 18)" stroke="#AAAAAA"/><path d="M15.9919 21.2887C15.7357 21.0514 15.7355 20.6463 15.9914 20.4087L18.1126 18.4397C18.3683 18.2024 18.3683 17.7977 18.1126 17.5603L15.9914 15.5913C15.7355 15.3537 15.7357 14.9486 15.9919 14.7113L16.0543 14.6535C16.2844 14.4404 16.6397 14.4404 16.8698 14.6535L20.0075 17.5598C20.2639 17.7973 20.2639 18.2027 20.0075 18.4402L16.8698 21.3465C16.6397 21.5596 16.2844 21.5596 16.0543 21.3465L15.9919 21.2887Z" fill="#757575"/></svg></button>',
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      }
      if (!jQuery("#how-it-works").hasClass("spz-how-it-works")) {
        jQuery("#how-it-works").addClass("spz-how-it-works");
        jQuery("#how-it-works").html(
          '<div class="how-it-works-wrap">\
            <div class="how-it-works-heading">Let us take care of unexpected water & sewer repairs</div>\
            <div class="how-it-works-subheading">From just <b>$5.95</b> / month</div>\
            <picture>\
                <source media="(min-width:992px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/repair_image.png">\
                <source media="(min-width:768px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/repair-image-tablet.png">\
                <source media="(min-width:320px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/repair-image-mobile.png">\
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/repair_image.png" alt="how it works image" class="how-it-works-img"/>\
            </picture>\
            <div class="spz-services-wrap">\
                <div class="spz-service-item spz-water-sewer-line">\
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/water-sewer-line.png" alt="water and sewer line"/>\
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/water-sewer-line-hover.png" alt="water and sewer line" class="water-sewer-line-hover"/>\
                </div>\
                <div class="spz-service-item spz-water-line">\
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/water-line.png" alt="water line"/>\
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/water-line-hover.png" alt="water line" class="water-line-hover"/>\
                </div>\
                <div class="spz-service-item spz-sewer-line">\
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/sewer-line.png" alt="sewer line"/>\
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/sewer-line-hover.png" alt="sewer line" class="sewer-line-hover"/>\
                </div>\
                <div class="spz-service-item spz-see-all">\
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/see-all.png" alt="see all"/>\
                    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/see-all-hover.png" alt="see all" class="see-all-hover"/>\
                </div>\
            </div>\
        </div>'
        );
      }
      if (jQuery(".spz-steps-section").length === 0) {
        jQuery("hos-stories .stories").addClass("spz-steps-section");
        jQuery("hos-stories .stories").html(
          '\
        <div class="steps-section-heading">How it Works</div>\
        <div class="steps-section-subheading">AWR Protection Process</div>\
        <div class="steps-wrap">\
            <div class="step-item">\
            <picture>\
                <source media="(min-width:992px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/signup.png">\
                <source media="(min-width:768px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/Process-1-Tablet.png">\
                <source media="(min-width:320px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/Process-1-Mobile.png">\
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/signup.png" alt="signup"/>\
            </picture>\
                <div class="step-heading">Sign Up</div>\
                <div class="step-text">Enroll now and get protection from repair costs and hassles associated with unexpected home repairs.</div>\
            </div>\
            <div class="step-item">\
            <picture>\
                <source media="(min-width:992px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/relax-image-n.png">\
                <source media="(min-width:768px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/relax-tablet-n.png">\
                <source media="(min-width:320px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/relax-mobile-n.png">\
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/relax-image-n.png"  alt="relax"/>\
            </picture>\
                <div class="step-heading">Relax</div>\
                <div class="step-text">Your covered repairs will be handled promptly and professionally.</div>\
            </div>\
            <div class="step-item">\
            <picture>\
                <source media="(min-width:992px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/call-for-help-n.png">\
                <source media="(min-width:768px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/call-for-help-tablet-n.png">\
                <source media="(min-width:320px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/call-for-help-mobile-n.png">\
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/call-for-help-n.png" alt="call for help"/>\
            </picture>\
                <div class="step-heading">Call For Help</div>\
                <div class="step-text">If something happens to your home  - we send out one of our license repair partners!</div>\
            </div>\
        </div>\
        '
        );
      }
      if (jQuery(".spz-social-proof").length === 0) {
        jQuery("hos-partner").addClass("spz-social-proof");
        jQuery("hos-partner").html(
          '\
    <div class="social-proof-heading">Protect Your Customer From the Unexpected</div>\
    <div class="social-proof-subheading">We partner with cities, utilities, and private companies of all sizes across the nation to provide peace of mind to their homeowners, customers, and members. Get more information about becoming a partner.</div>\
    <div class="social-proof-image">\
    <picture>\
        <source media="(min-width:992px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/social-logos.png">\
        <source media="(min-width:768px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/social-proof-tablet.png">\
        <source media="(min-width:320px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/social-proof-mobile.png">\
        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1013/social-logos.png" alt="social proof">\
    </picture>\
    </div>\
    '
        );
      }
      if (
        jQuery(
          ".spz-1026 .hero-slider hos-google-places .search-bar .get-started-btn span.text-visible"
        ).text() !== "Get Started"
      ) {
        jQuery(
          ".spz-1026 .hero-slider hos-google-places .search-bar .get-started-btn span.text-visible"
        ).text("Get Started");
      }
      if (jQuery(".spz-popup").length === 0) {
        jQuery(
          '<div class="spz-popup">\
        <div class="spz-overlay"></div>\
        <div class="popup-form">\
        <div class="close-button"></div>\
                    <div class="form-heading">With Us, Your Home\'s Protected</div>\
                    <div class="form-subheading">Find Your Protection Plan</div>\
                    <div class="input-wrap">\
                        <input id="spz-input" placeholder="Enter Your Zip Code" maxlength="5"/>\
                        <div class="spz-button-submit">Get Started</div>\
                        <span class="spz-error-message">Please enter valid zip code.</span>\
                    </div>\
                </div>\
        </div>'
        ).appendTo("body");
      }
      if (
        jQuery(".spz-service-item").length > 0 &&
        !jQuery(".spz-services-wrap").hasClass("listener-added")
      ) {
        jQuery(".spz-services-wrap").addClass("listener-added");
        jQuery(".spz-service-item").click(function () {
          if (jQuery(this).hasClass("spz-water-line")) productName = "water";
          if (jQuery(this).hasClass("spz-sewer-line")) productName = "sewer";
          if (jQuery(this).hasClass("spz-water-sewer-line"))
            productName = "combo";
          if (jQuery(this).hasClass("spz-see-all")) productName = "all";
          jQuery(".spz-popup").addClass("popup-visible");
          jQuery("body").css("overflow", "hidden");
        });
        jQuery("body").on(
          "click",
          ".spz-popup .popup-form .input-wrap .spz-button-submit",
          function (e) {
            if (jQuery("#spz-input").val() === "") {
              e.preventDefault();
              jQuery("#spz-input").addClass("has-spz-error");
              jQuery(".spz-error-message:not(.bottom)").show();
            } else if (
              productName === "combo" &&
              (jQuery("#spz-input").val() === "10001" ||
                jQuery("#spz-input").val() === "32789" ||
                jQuery("#spz-input").val() === "10011")
            ) {
              redirectUserToList(jQuery("#spz-input").val(), "");
            } else {
              if (productName === "all") {
                redirectUserToList(jQuery("#spz-input").val(), "");
              } else {
                redirectUserToProduct(productName, jQuery("#spz-input").val());
              }
              const oldLocation = window.location.pathname;
              const _overflow = setInterval(function () {
                var newLocation = window.location.pathname;
                if (oldLocation !== newLocation) {
                  clearInterval(_overflow);
                  jQuery("body").css("overflow", "");
                }
              }, 100);
            }
          }
        );
        jQuery("body").on("click", ".spz-button-submit.bottom", function (e) {
          if (jQuery("#spz-input-bottom").val() === "") {
            e.preventDefault();
            jQuery("#spz-input-bottom").addClass("has-spz-error");
            jQuery(".spz-error-message.bottom").show();
          } else {
            redirectUserToList(
              jQuery("#spz-input-bottom").val(),
              "bottom-input"
            );
          }
        });
        jQuery(".spz-overlay, .close-button").click(function () {
          jQuery(".form-inline .form-group").append(
            jQuery(".popup-form .search-zipcode")
          );
          jQuery(".spz-popup").removeClass("popup-visible");
          jQuery("body").css("overflow", "");
          jQuery("#spz-input").removeClass("has-spz-error");
          jQuery("#spz-input-bottom").removeClass("has-spz-error");
          jQuery(".spz-error-message").hide();
          jQuery("#spz-input").val("");
        });
      }
      if (jQuery(".spz-bottom-cta").length === 0) {
        jQuery(
          '<div class="spz-bottom-cta">\
        <div class="spz-bottom-wrap">\
            <div class="bottom-cta-heading">See if coverage is available in your area.</div>\
            <div class="bottom-form-wrap">\
<div class="input-wrap bottom">\
                        <input id="spz-input-bottom" placeholder="Enter Your Zip Code" maxlength="5"/>\
                        <div class="spz-button-submit bottom">Get Started</div>\
                        <span class="spz-error-message bottom">Please enter valid zip code.</span>\
                    </div>\
</div>\
        </div>\
        </div>'
        ).insertAfter(".spz-social-proof");
      }
      if (
        jQuery("#spz-input-bottom").length > 0 &&
        !jQuery("#spz-input-bottom").hasClass("listener-added")
      ) {
        jQuery("#spz-input-bottom").addClass("listener-added");
        document
          .getElementById("spz-input-bottom")
          .addEventListener("keypress", function (evt) {
            jQuery("#spz-input-bottom").removeClass("has-spz-error");
            jQuery(".spz-error-message.bottom").hide();
            if (evt.key === "Enter") {
              jQuery(".spz-button-submit.bottom").click();
            }
            var theEvent = evt || window.event;
            if (theEvent.type === "paste") {
              key = event.clipboardData.getData("text/plain");
            } else {
              var key = theEvent.keyCode || theEvent.which;
              key = String.fromCharCode(key);
            }
            var regex = /[0-9]|\./;
            if (!regex.test(key)) {
              theEvent.returnValue = false;
              if (theEvent.preventDefault) theEvent.preventDefault();
            }
          });
        document
          .getElementById("spz-input")
          .addEventListener("keypress", function (evt) {
            jQuery("#spz-input").removeClass("has-spz-error");
            jQuery(".spz-error-message:not(.bottom)").hide();
            if (evt.key === "Enter") {
              jQuery(
                ".spz-popup .popup-form .input-wrap .spz-button-submit"
              ).click();
            }
            var theEvent = evt || window.event;
            if (theEvent.type === "paste") {
              key = event.clipboardData.getData("text/plain");
            } else {
              var key = theEvent.keyCode || theEvent.which;
              key = String.fromCharCode(key);
            }
            var regex = /[0-9]|\./;
            if (!regex.test(key)) {
              theEvent.returnValue = false;
              if (theEvent.preventDefault) theEvent.preventDefault();
            }
          });
      }
    }
    loadText();
  }
});

var jqueryInterval = setInterval(function () {
  if (
    typeof jQuery != "undefined" &&
    window.location.href === "https://www.awrusa.com/"
  ) {
    clearInterval(jqueryInterval);
    loadTest();
  } else {
    jQuery("body").removeClass("spz-1001");
  }
}, 100);
function loadTest() {
  setTimeout(function () {
    var jQuerydiv = jQuery("body");
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName === "class") {
          var attributeValue = jQuery(mutation.target).prop(
            mutation.attributeName
          );

          if (!jQuery("body").hasClass("spz-1001")) {
            jQuery("body").addClass("spz-1001");
          }
          if (jQuery("body").hasClass("spz-1001")) {
            loadText();
          }
        }
      });
    });
    observer.observe(jQuerydiv[0], { attributes: true });
  }, 500);

  jQuery(document).ready(function () {
    if (!jQuery("body").hasClass("spz-1001")) {
      var cookieName = "#1001_Homepage_redesign";
      var cookieValue = "1";
      var myDate = new Date();
      myDate.setDate(myDate.getDate() + 30);
      document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
      jQuery("body").addClass("spz-1001");
      loadText();
    }

    if (navigator.userAgent.indexOf("Mac OS X") != -1) {
      jQuery("body").addClass("mac");
    } else {
      jQuery("body").addClass("pc");
    }

    var is_opera = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
    var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
    var is_chrome = !!window.chrome && !is_opera && !is_Edge;
    var is_explorer =
      typeof document !== "undefined" && !!document.documentMode && !is_Edge;
    var is_firefox = typeof window.InstallTrigger !== "undefined";
    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (is_chrome) {
      jQuery("body").addClass("chrome");
    } else if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      jQuery("body").addClass("safari");
    } else if (is_firefox) {
      jQuery("body").addClass("firefox");
    }

    if (jQuery("#slick-lib").length == 0) {
      jQuery("head").append(
        '\
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossorigin="anonymous" referrerpolicy="no-referrer" />\
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==" crossorigin="anonymous" referrerpolicy="no-referrer" />\
            <script id="slick-lib" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>'
      );
    }

    var jQuerydiv = jQuery("body");
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName === "class") {
          var attributeValue = jQuery(mutation.target).prop(
            mutation.attributeName
          );
          Google_review();
        }
      });
    });
    observer.observe(jQuerydiv[0], { attributes: true });

    function Google_review() {
      if (jQuery(".spz-1001 .google_review").length < 1) {
        jQuery(
          '<section class="google_review">\
    <div class="review_inner">\
        <div class="review_header">\
          <div class="logo_block">\
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/Google_logo.png" class="google_logo" alt="Google Logo" title="Google Logo" >\
            <h4>Rating</h4>\
          </div>\
          <div class="rating_block">\
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/4.2_rating_star.png" class="avg_rating_star" alt="4.1 Rating Star" title="4.1 Rating Star">\
            <a href="https://www.google.com/search?q=google+reviews+american+water+resources&rlz=1C5CHFA_enIN810IN810&oq=google+reviews+american+water+resources&aqs=chrome..69i57j0i22i30j69i64.10989j0j4&sourceid=chrome&ie=UTF-8#lrd=0x87df454f97c25fe3:0x6939417d5e99b74c,1" class="rating_number">4.1/5 (756 Reviews)</a>\
          </div>\
        </div>\
        <div class="review_slider">\
            <div class="review_box">\
                <div class="review_content">\
                    <h2 class="reviewer_name">Hugo Dominguez</h2>\
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                    <p class="review_text">American Water Resources is prompt in providing assistance to oneÃ¢â‚¬â„¢s sewage related issues.</p>\
                </div>\
            </div>\
            <div class="review_box">\
                <div class="review_content">\
                    <h2 class="reviewer_name">Cathy Bozzolo</h2>\
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                    <p class="review_text">I called about a sewer back up. They responded quickly. The company they sent were wonderful.</p>\
                </div>\
            </div>\
            <div class="review_box">\
                <div class="review_content">\
                    <h2 class="reviewer_name">antoinette cottman</h2>\
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                    <p class="review_text">This company is great. I\'m so happy I signed up they are professional, courteous and prompt.</p>\
                </div>\
            </div>\
            <div class="review_box">\
                <div class="review_content">\
                    <h2 class="reviewer_name">Mark De Simon</h2>\
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                    <p class="review_text">Great company. Every aspect from the phone call to the follow up to the service was outstanding.</p>\
                </div>\
            </div>\
            <div class="review_box">\
                <div class="review_content">\
                    <h2 class="reviewer_name">RON CARUSO</h2>\
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                    <p class="review_text">FAST RESPONSE TO MY SEWER BACKUP. GOOD CUSTOMER SERVICE AND PROFESSIONAL SERVICE.</p>\
                </div>\
            </div>\
            <div class="review_box">\
                <div class="review_content">\
                    <h2 class="reviewer_name">Judy Collins</h2>\
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                    <p class="review_text">I have had to use mine 3 times, once I was actually out of town and it was great all 3 times.</p>\
                </div>\
            </div>\
            <div class="review_box">\
                <div class="review_content">\
                    <h2 class="reviewer_name">Judy Stott</h2>\
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                    <p class="review_text">Have had AWR for years all experiences have been great, also very prompt.</p>\
                </div>\
            </div>\
            <div class="review_box">\
                <div class="review_content">\
                    <h2 class="reviewer_name">Grace Cannistra</h2>\
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                    <p class="review_text">Homeowners should add these service plans to their residential accounts as it is a wise choice.</p>\
                </div>\
            </div>\
            <div class="review_box">\
                <div class="review_content">\
                    <h2 class="reviewer_name">Susan Jones</h2>\
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                    <p class="review_text">The1st rep had prob with computer, but called back and 2nd rep took care of billing prob.</p>\
                </div>\
            </div>\
            <div class="review_box">\
                <div class="review_content">\
                    <h2 class="reviewer_name">WILLIAM MILLER</h2>\
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                    <p class="review_text">Excellent service provided, contacted plumber who called us immediately and service was performed same day!</p>\
                </div>\
            </div>\
            <div class="review_box">\
                <div class="review_content">\
                    <h2 class="reviewer_name">John Davis</h2>\
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                    <p class="review_text">I already submitted 2 reviews of your excellent service which you may post online.</p>\
                </div>\
            </div>\
            <div class="review_box">\
                <div class="review_content">\
                    <h2 class="reviewer_name">Gaby Beck</h2>\
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1005_AWR_Home_Show_Social_Reviews/5_rating_star.png" class="review_rating" alt="Rating Star" title="Rating Star">\
                    <p class="review_text">Getting service was easy and the plumber they sent was great. I highly recommend this service.</p>\
                </div>\
            </div>\
        </div>\
    <div>\
</section>'
        ).insertAfter("#category-section");
        jQuery(".review_slider").slick({
          arrow: true,
          dots: false,
          infinite: false,
          speed: 1500,
          slidesToShow: 4,
          slidesToScroll: 4,
          prevArrow:
            '<button class="slide_arrow prev-arrow"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="17.5" stroke="#AAAAAA"/><path d="M20.0079 21.2887C20.2641 21.0514 20.2644 20.6463 20.0084 20.4088L17.8873 18.4398C17.6315 18.2024 17.6315 17.7977 17.8873 17.5603L20.0084 15.5913C20.2644 15.3537 20.2641 14.9486 20.0079 14.7113L19.9455 14.6535C19.7155 14.4404 19.3601 14.4404 19.1301 14.6535L15.9924 17.5598C15.736 17.7973 15.736 18.2027 15.9924 18.4402L19.1301 21.3465C19.3601 21.5596 19.7155 21.5596 19.9455 21.3465L20.0079 21.2887Z" fill="#757575"/></svg></button>',
          nextArrow:
            '<button class="slide_arrow next-arrow"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="17.5" transform="matrix(-1 0 0 1 18 18)" stroke="#AAAAAA"/><path d="M15.9919 21.2887C15.7357 21.0514 15.7355 20.6463 15.9914 20.4087L18.1126 18.4397C18.3683 18.2024 18.3683 17.7977 18.1126 17.5603L15.9914 15.5913C15.7355 15.3537 15.7357 14.9486 15.9919 14.7113L16.0543 14.6535C16.2844 14.4404 16.6397 14.4404 16.8698 14.6535L20.0075 17.5598C20.2639 17.7973 20.2639 18.2027 20.0075 18.4402L16.8698 21.3465C16.6397 21.5596 16.2844 21.5596 16.0543 21.3465L15.9919 21.2887Z" fill="#757575"/></svg></button>',
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      } else {
        return false;
      }
    }
  });
}

function loadText() {
  if (
    typeof jQuery != undefined &&
    jQuery(
      "body.spz-1001 .hero-slider .hero-content[class] .head-content[class] h3"
    ).length > 0
  ) {
    jQuery(
      "body.spz-1001 .hero-slider .hero-content[class] .head-content[class] h3"
    ).html("With Us, Your Home's Protected");
    jQuery(
      "body.spz-1001 .hero-slider .hero-content[class] .head-content[class] h5"
    ).html("Make the Smart Choice.");
  }
}
function modifyPopup() {
  jQuery(
    '<img src="https://res.cloudinary.com/spiralyze/image/upload/v1659528212/AWR/1013/info-icon.svg" alt="info-icon" class="info-icon-spz"/>'
  ).insertBefore(".spz-popup-appear .custom-error-alert .modal-body h4");
  jQuery(
    '<img src="https://res.cloudinary.com/spiralyze/image/upload/v1659550483/AWR/1013/close-icon-popup.svg" class="close-icon-spz"/>'
  ).insertBefore(".spz-popup-appear .custom-error-alert .modal-body h4");
  jQuery(
    ".spz-popup-appear .custom-error-alert .modal-body .close-icon-spz"
  ).click(function () {
    jQuery(".spz-popup-appear .custom-error-alert .app-btn").click();
  });
}
setInterval(function () {
  if (
    document.querySelector(".spz-1026 dialog-wrapper h4") &&
    document.querySelector(".spz-1026 dialog-wrapper h4").innerText ===
      "We are sorry. We do not currently offer services in your location." &&
    !document.querySelector(
      ".spz-popup-appear .custom-error-alert .modal-body .close-icon-spz"
    )
  ) {
    jQuery(".spz-1026 dialog-wrapper h4")
      .closest(".fade.show")
      .addClass("spz-popup-appear");
    modifyPopup();
  }
});
