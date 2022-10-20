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

function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === "paste") {
    key = event.clipboardData.getData("text/plain");
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  var regex = /[0-9]/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
function addSpzZipErrorPopup() {
  jQuery("dialog-holder").hide();
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
  jQuery(".spz-custom-error-popup.spz-popup-appear").remove();
}
let productName = "";
function redirectUserToList(zipCode) {
  if (zipCode === "") {
    jQuery("#spz-input").addClass("has-spz-error");
    jQuery(".spz-error-message:not(.bottom)").show();
  } else {
    getProductListingpPageUrl(zipCode).then((result) => {
      if (
        result.status === "error" &&
        result.error === "No marketing codes found"
      ) {
        console.log(result);
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
  if (productName === "water") {
    localStorage.setItem("spzProductToShow", productName);
    redirectUserToList(zipCode);
  }

  if (productName === "sewer") {
    localStorage.setItem("spzProductToShow", productName);
    redirectUserToList(zipCode);
  }
  if (productName === "combo") {
    localStorage.setItem("spzProductToShow", productName);
    redirectUserToList(zipCode);
  }
  if (productName === "all") {
    localStorage.setItem("spzProductToShow", productName);
    redirectUserToList(zipCode);
  }
}
//////////////////
var jqueryInterval = setInterval(function () {
  if (
    typeof $ != "undefined" &&
    window.location.href === "https://www.awrusa.com/" &&
    document.querySelector('button[angularticscategory="Header-Login"]')
  ) {
    clearInterval(jqueryInterval);
    loadTest();
  } else {
    $("body").removeClass("spz-1001");
  }
}, 100);
setInterval(function () {
  if (
    document.querySelector(".review_slider") &&
    !document.querySelector(".review_slider.slick-initialized")
  ) {
    $(".review_slider").slick({
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
});
function loadTest() {
  setTimeout(function () {
    var $div = $("body");
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName === "class") {
          var attributeValue = $(mutation.target).prop(mutation.attributeName);
          if (!$("body").hasClass("spz-1001")) {
            $("body").addClass("spz-1001");
          }
        }
      });
    });
    observer.observe($div[0], { attributes: true });
  }, 500);

  $(document).ready(function () {
    if (!$("body").hasClass("spz-1001")) {
      var cookieName = "#1001_Homepage_redesign";
      var cookieValue = "1";
      var myDate = new Date();
      myDate.setDate(myDate.getDate() + 30);
      document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
      $("body").addClass("spz-1001");
    }

    if (navigator.userAgent.indexOf("Mac OS X") != -1) {
      $("body").addClass("mac");
    } else {
      $("body").addClass("pc");
    }

    var is_opera = !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
    var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
    var is_chrome = !!window.chrome && !is_opera && !is_Edge;
    var is_explorer =
      typeof document !== "undefined" && !!document.documentMode && !is_Edge;
    var is_firefox = typeof window.InstallTrigger !== "undefined";
    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (is_chrome) {
      $("body").addClass("chrome");
    } else if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      $("body").addClass("safari");
    } else if (is_firefox) {
      $("body").addClass("firefox");
    }

    $("head").append(
      '\
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossorigin="anonymous" referrerpolicy="no-referrer" />\
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==" crossorigin="anonymous" referrerpolicy="no-referrer" />\
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>'
    );

    var $div = $("body");
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName === "class") {
          var attributeValue = $(mutation.target).prop(mutation.attributeName);
          Google_review();
        }
      });
    });
    observer.observe($div[0], { attributes: true });

    function Google_review() {
      if ($(".spz-1001 .google_review").length < 1) {
        $(
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
                    <p class="review_text">American Water Resources is prompt in providing assistance to oneâ€™s sewage related issues.</p>\
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
                    <h2 class="reviewer_name">Antoinette Cottman</h2>\
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
//////////////////
jQuery(document).ready(function () {
  jQuery("body").addClass("spz-1001");
  jQuery(
    '<link id="google-slide-css" rel="stylesheet" type="text/css" href="https://res.cloudinary.com/spiralyze/raw/upload/v1651267335/AWR/1001/google_slider.css">'
  ).appendTo("body");
  setInterval(function () {
    if (
      document.querySelector(".feedback-container") &&
      !document.querySelector(".feedback-container.slick-initialized")
    ) {
      jQuery(".feedback-container").slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
      });
    }
  });
  var reviewsLoaded = setInterval(function () {
    if (
      jQuery("main.content hos-category").length > 0 &&
      window.location.href === "https://www.awrusa.com/" &&
      !jQuery(".spz-protection-section").length > 0 &&
      document.querySelector('button[angularticscategory="Header-Login"]')
    ) {
      jQuery(".spz-category-hero").remove();
      localStorage.removeItem("spzZip");
      //localStorage.removeItem('spzProductToShow')
      jQuery(`<div class="spz-hero-section">\
                <div class="spz-step step-1">\
                    <div class="above-heading">Answer 3 quick questions to get policies & pricing</div>\
                    <div class="step-heading">What Kind of Protection Plan  Do You Want?</div>\
                    <div class="step-options-wrap-mobile">\
                        <div class="step-options-wrap">\
                            <div class="spz-service-item spz-water-sewer-line">\
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1657767162/AWR/1014/water-sewer-line.svg" alt="Water Line & Sewer Line"/>\
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1657767162/AWR/1014/water-sewer-line-hover.svg" alt="Water Line & Sewer Line"/>\
                                <div class="option-name">Water Line & Sewer Line</div>\
                            </div>\
                            <div class="spz-service-item spz-water-line">\
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1657767162/AWR/1014/water-line.svg" alt="Water Line"/>\
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1657767162/AWR/1014/water-line-hover.svg" alt="Water Line"/>\
                                <div class="option-name">Water Line</div>\
                            </div>\
                            <div class="spz-service-item spz-sewer-line">\
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1657767162/AWR/1014/sewer-line.svg" alt="Sewer Line"/>\
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1657767162/AWR/1014/sewer-line-hover.svg" alt="Sewer Line"/>\
                                <div class="option-name">Sewer Line</div>\
                            </div>\
                            <div class="spz-service-item spz-see-all">\
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1657767160/AWR/1014/see-all.svg" alt="Other"/>\
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1657767160/AWR/1014/see-all-hover.svg" alt="Other"/>\
                                <div class="option-name">Other</div>\
                            </div>\
                        </div >\
                        <div class="to-step-2">Next <img src="https://res.cloudinary.com/spiralyze/image/upload/v1657768226/AWR/1014/chevron-right.svg" /></div>\
                    </div>\
                </div >\
                <div class="spz-step step-2">\
                    <div class="step-heading">Are you a homeowner or landlord?</div>\
                    <div class="step-options-wrap-mobile">\
                        <div class="step-options-wrap">\
                            <div class="spz-service-item">\
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1657767160/AWR/1014/house-owner.svg" alt="Homeowner"/>\
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1657767160/AWR/1014/house-owner-hover.svg" alt="Homeowner"/>\
                                <div class="option-name">Homeowner</div>\
                            </div>\
                            <div class="spz-service-item">\
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1657767160/AWR/1014/landlord.svg" alt="Landlord"/>\
                                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1657767160/AWR/1014/landlord-hover.svg" alt="Landlord"/>\
                                <div class="option-name">Landlord</div>\
                            </div>\
                        </div >\
                        <div class="to-step-3">Next <img src="https://res.cloudinary.com/spiralyze/image/upload/v1657768226/AWR/1014/chevron-right.svg" /></div>\
                    </div>\
                </div >\
                <div class="spz-step step-3">\
                    <div class="step-heading">What is your zip code?</div>\
                    <div class="input-wrap">\
                        <input id="spz-input" placeholder="Enter Your Zip Code" maxlength="5" value='${JSON.parse(localStorage.getItem("selectedAddress"))
          .zipcode
          ? JSON.parse(
            localStorage.getItem("selectedAddress")
          ).zipcode
          : ""
        }' onkeypress="validate(event)"/>\
                        <div class="spz-error-message">Please enter valid zip code</div>\
                        <div class="spz-button-submit get-started step1">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1657768226/AWR/1014/chevron-right.svg" /></div>\
                    </div>\
                </div >\
            </div > `).insertBefore(".hero-slider");
      //localStorage.removeItem('selectedAddress')
      jQuery("main.content hos-category").append(
        '\
            <div class="spz-protection-section">\
            <div class="protection-heading">Protection Plans</div>\
            <div class="protection-subheading">Starting from $5.49 per month</div>\
            <div class="plans-wrap">\
                <div class="plan-item">\
                    <div class="plan-image-wrap">\
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/water-protection.png" alt="Water Line Protection Program" class="plan-image" />\
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/water-icon.png" alt="plan icon" class="plan-icon" />\
                    </div>\
                    <div class="plan-name">Water Line<br> Protection Program</div>\
                    <div class="plan-desc">Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.</div>\
                    <div class="plan-price">Starts at <b>$5.49</b> / month</div>\
                    <div class="plan-button water">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320952/AWR/1001/chevron-right.svg" alt="icon-right"/></div>\
                </div>\
                <div class="plan-item">\
                    <div class="plan-image-wrap">\
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/sewer-protection.png" alt="Sewer Line Protection Program" class="plan-image" />\
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/sewer-icon.png" alt="plan icon" class="plan-icon" />\
                    </div>\
                    <div class="plan-name">Sewer Line Protection Program</div>\
                    <div class="plan-desc">Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear.</div>\
                    <div class="plan-price">Starts at <b>$9.00</b> / month</div>\
                    <div class="plan-button sewer">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320952/AWR/1001/chevron-right.svg" alt="icon-right"/></div>\
                </div>\
                <div class="plan-item recommended">\
                    <div class="plan-image-wrap">\
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/water-sewer-protection.png" alt="Water Line and Sewer Line Protection Program" class="plan-image" />\
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/sewerandwater-icon.png" alt="plan icon" class="plan-icon" />\
                    </div>\
                    <div class="plan-name">Water Line and Sewer Line Protection Program</div>\
                    <div class="plan-desc">Cover your repairs to leaks and breaks of a covered water line, or repairs to leaks.</div>\
                    <div class="plan-price">Starts at <b>$12.49</b> / month <span>(Save $2.00)</span></div>\
                    <div class="plan-button combo">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320952/AWR/1001/chevron-right.svg" alt="icon-right"/></div>\
                </div>\
            </div>\
        </div>\
        <div class="spz-how-it-works">\
            <div class="how-heading">How It Works</div>\
            <div class="how-subheading">Get protection in just 3 simple steps </div>\
            <picture>\
                <source media="(min-width:992px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1014/how-it-works-desktop-n.png">\
                <source media="(min-width: 768px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1014/how-it-works-tablet-n.png" >\
                <source media="(min-width: 320px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1014/how-it-works-mobile-n.png" >\
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1014/how-it-works-desktop.png" alt="How it works" class="how-it-works-img">\
            </picture>\
            <div class="spz-get-started-btn">Get Started <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320952/AWR/1001/chevron-right.svg" alt="icon-right"/></div>\
        </div >\
    <div class="feedback-slider">\
        <div class="feedback-container">\
            <div class="feedback-item">\
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320969/AWR/1001/barbara-r.png" alt="Barbara R." class="feedback-image" />\
                <div class="feedback-info">\
                    <div class="feedback-copy">So glad we signed up for this program best thing we ever did as homeowners!</div>\
                    <div class="person-name">Barbara R.</div>\
                    <div class="person-location">New York - Water Line Leak</div>\
                </div>\
            </div>\
            <div class="feedback-item">\
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/carol-m.png" alt="Carol M." class="feedback-image" />\
                <div class="feedback-info">\
                    <div class="feedback-copy">My neighbors spent thousands for the same work.</div>\
                    <div class="person-name">Carol M.</div>\
                    <div class="person-location">Oklahoma - Sewer Line Blockage</div>\
                </div>\
            </div>\
            <div class="feedback-item">\
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/theodora-d.png" alt="Theodora D." class="feedback-image" />\
                <div class="feedback-info">\
                    <div class="feedback-copy">You saved us thousands!</div>\
                    <div class="person-name">Theodora D.</div>\
                    <div class="person-location">Iowa - Leaking Valve</div>\
                </div>\
            </div>\
        </div>\
    </div>\
    <div class="companies-section">\
        <div class="companies-heading">Protect Your Customers From the Unexpected</div>\
        <div class="companies-subheading">We partner with cities, utilities and private companies of all sizes across the nation to provide peace of mind to their homeowners, customers and members. Get more information about becoming a partner.</div>\
        <div class="companies-wrap">\
                        <picture>\
                            <source media="(min-width:992px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/companies.png">\
                            <source media="(min-width:768px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/companies-tablet.png">\
                            <source media="(min-width:320px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/companies-mobile.png">\
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1001/companies.png" alt="companies">\
                        </picture>\
                        </div>\
                        <div class="call-us">\
                            <div class="call-us-heading">To learn more about partnering with us call</div>\
                            <a href="tel:18009311548"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1651320952/AWR/1001/phone-icon.svg" alt="tel icon" /> 1-800-931-1548</a>\
                        </div>\
                    </div>\
                    <div class="spz-popup">\
                        <div class="spz-overlay"></div>\
                        <div class="popup-form">\
                            <div class="close-button"></div>\
                            <div class="form-heading">With Us, Your Home\'s Protected</div>\
                            <div class="form-subheading">Find Your Protection Plan</div>\
                            <div class="input-wrap">\
                                <div class="spz-button-submit triage">Get Started</div>\
                            </div>\
                        </div>\
                    </div>'
      );

      jQuery(
        "#spz-input, #listingPage hos-google-places .search-bar .search-zipcode"
      ).on("keypress", function (e) {
        if (e.key === "Enter") {
          localStorage.setItem("spzZip", jQuery("#spz-input").val());
          redirectUserToProduct(productName, jQuery("#spz-input").val());
        }
      });
      jQuery("#spz-input").on("input", function () {
        jQuery(".spz-step.step-3 .spz-error-message").hide();
        jQuery(this).removeClass("has-spz-error");
      });
      jQuery(".spz-button-submit.get-started.step1").click(function () {
        localStorage.setItem("spzZip", jQuery("#spz-input").val());
        redirectUserToProduct(productName, jQuery("#spz-input").val());
      });
      jQuery(".spz-service-item").on("click", function () {
        jQuery(".spz-service-item").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(".spz-options-error").remove();
        jQuery(".to-step-2").removeClass("error-active");
        jQuery(".to-step-3").removeClass("error-active");
        if (jQuery(this).hasClass("spz-water-line")) productName = "water";
        if (jQuery(this).hasClass("spz-sewer-line")) productName = "sewer";
        if (jQuery(this).hasClass("spz-water-sewer-line"))
          productName = "combo";
        if (jQuery(this).hasClass("spz-see-all")) productName = "all";
      });
      jQuery(".to-step-2").click(function () {
        if (jQuery(".step-1 .spz-service-item").hasClass("active")) {
          jQuery(".spz-step.step-1").hide();
          jQuery(".spz-step.step-2").show();
        } else {
          if (jQuery(".spz-options-error").length === 0) {
            jQuery(this).addClass("error-active");
            jQuery(
              '<div class="spz-options-error">Please select one to continue</div>'
            ).insertBefore(".to-step-2");
          }
        }
      });
      jQuery(".to-step-3").click(function () {
        if (jQuery(".step-2 .spz-service-item").hasClass("active")) {
          jQuery(".spz-step.step-2").hide();
          jQuery(".spz-step.step-3").show();
        } else {
          if (jQuery(".spz-options-error").length === 0) {
            jQuery(this).addClass("error-active");
            jQuery(
              '<div class="spz-options-error">Please select one to continue</div>'
            ).insertBefore(".to-step-3");
          }
        }
      });
      jQuery(".spz-get-started-btn").click(function () {
        window.location.href = "https://www.awrusa.com/user/register";
      });
      jQuery(".spz-button-submit.triage").click(function () {
        jQuery(".search-bar .search .get-started-btn").click();
        var errorMoved = setInterval(function () {
          if (
            jQuery(".spz-popup").hasClass("popup-visible") &&
            jQuery(".error-zipcode.invalid-error").length
          ) {
            clearInterval(errorMoved);
            jQuery(".error-zipcode.invalid-error").insertBefore(
              ".spz-button-submit.triage"
            );
          }
          else {
            localStorage.setItem(
              "spzZip",
              jQuery('.popup-form input[name="spz-zip-code"]').val()
            );
            jQuery("body").css("overflow", "");
            redirectUserToProduct(
              localStorage.getItem("spzProductToShow"),
              jQuery('.popup-form input[name="spz-zip-code"]').val()
            );
          }
        });

      });
      jQuery(".plan-button").click(function () {
        if (jQuery(this).hasClass("combo"))
          localStorage.setItem("spzProductToShow", "combo");
        if (jQuery(this).hasClass("water"))
          localStorage.setItem("spzProductToShow", "water");
        if (jQuery(this).hasClass("sewer"))
          localStorage.setItem("spzProductToShow", "sewer");
        jQuery('.hero-slider hos-google-places .search-bar .search-zipcode').insertBefore('.popup-form .spz-button-submit')
        jQuery(".spz-popup").addClass("popup-visible");
        jQuery("body").css("overflow", "hidden");
      });
      jQuery(".spz-overlay, .close-button").click(function () {
        jQuery(".form-inline .form-group").append(
          jQuery(".popup-form .search-zipcode")
        );
        jQuery(".spz-popup").removeClass("popup-visible");
        jQuery("body").css("overflow", "");
        var errorMovedBack = setInterval(function () {
          if (
            !jQuery(".spz-popup").hasClass("popup-visible") &&
            jQuery(".spz-popup .error-zipcode")
          ) {
            clearInterval(errorMovedBack);
            jQuery(".spz-popup .error-zipcode.invalid-error").insertAfter(
              ".search-bar form.search"
            );
          }
        });
      });
    }
  });
});
var cookieName =
  "#2011_AWR_Product_List_Only_product_name_Big_Image_Spriralyze";
var cookieValue = "1";
var myDate = new Date();
myDate.setDate(myDate.getDate() + 30);
document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;

const comboManagement = [
  {
    comboName: "Water Line and Sewer Line Protection Program",
    comboProducts: [
      "Water Line Protection Program",
      "Sewer Line Protection Program",
    ],
  },
  {
    comboName: "Water Line and Sewer Line Unlimited Protection Program",
    comboProducts: [
      "Water Line Unlimited Protection Program",
      "Sewer Line Unlimited Protection Program",
    ],
  },
  {
    comboName: "Water Line and Sewer Line Insurance Policy",
    comboProducts: [
      "Water Line Insurance Policy",
      "Sewer Line Insurance Policy",
    ],
  },
  {
    comboName: "Water Line & Sewer Line Insurance Policy",
    comboProducts: [
      "Water Line Insurance Policy",
      "Sewer Line Insurance Policy",
    ],
  },
  {
    comboName: "Water Line, Sewer Line and In Home Plumbing Insurance Policy",
    comboProducts: [
      "Water Line Insurance Policy",
      "Sewer Line Insurance Policy",
      "In Home Plumbing Insurance Policy",
    ],
  },
  {
    comboName: "Water Line, Sewer Line & In Home Plumbing Insurance Policy",
    comboProducts: [
      "Water Line Insurance Policy",
      "Sewer Line Insurance Policy",
      "In Home Plumbing Insurance Policy",
    ],
  },
  {
    comboName: "Heating and Cooling System Repair Program",
    comboProducts: [
      "Heating System Repair Program",
      "Cooling System Repair Program",
    ],
  },
  {
    comboName: "Water Line, Sewer Line and In Home Plumbing Emergency Program",
    comboProducts: [
      "Water Line Protection Program",
      "Sewer Line Protection Program",
      "In Home Plumbing Emergency Program",
    ],
  },
];

async function getPrice(title, price) {
  return (
    '<span class="price">' +
    price +
    '</span> <span>per month<span id="savetext"></span></span>'
  );
}

function noProducts() {
  if (
    jQuery(".page-wrap.product-list > div:first-child").html() ===
    "There are currently no additional protection plans available in your area. Please continue to check back for new programs."
  ) {
    return true;
  }
  return false;
}
async function getImage(title) {
  let imagename = title
    .replace(" &amp; ", " ")
    .replace(/[^\w\s]/gi, "_")
    .replaceAll(" ", "_");
  return (
    "//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/PRODUCTPAGE/" +
    imagename +
    ".jpg"
  );
}
setInterval(function () {
  if (noProducts()) {
    jQuery(".products-wrapper").remove();
    if (jQuery(".noproducts-wrapper").length === 0) {
      jQuery("header").after(
        '<div class="noproducts-wrapper"><div class="noproducts-inner"> <p>There are currently no additional protection plans available in your area. Please continue to check back for new programs.</p> </div></div>'
      );
    }
  } else {
    jQuery(".noproducts-wrapper").remove();
  }
}, 1000);
////////////////////////
function addHeroSection() {
  var heroTitle = [
    "Water Line & Sewer Line Protection",
    "Water Line Protection Program",
    "Sewer Line Protection",
  ];
  var heroSubheading = [
    "Two lines. One protection program.",
    "Don't let a broken water line break the bank.",
    "Sewer line issues can wreck yards. And budgets.",
  ];
  var heroCopy = [
    "Cover your repairs to leaks and breaks of a covered water line, or repairs to leaks, clogs and blockages of a covered sewer line caused by normal wear and tear. ",
    "When a water line breaks, you're stuck with puddles, a headache and repair bills. But with the Water Line Protection Program from AWR, your repair costs will be covered. Headache avoided. ",
    "Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear. ",
  ];
  var addToCartClass = ["add-combo", "add-water", "add-sewer"];
  var heroImage = [
    {
      desktop:
        "https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1014/combo-hero-desktop.png",
      tablet:
        "https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1014/combo-hero-tablet.png",
      mobile:
        "https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1014/combo-hero-mobile.png",
    },
    {
      desktop:
        "https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1014/water-hero-desktop.png",
      tablet:
        "https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1014/water-hero-tablet.png",
      mobile:
        "https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1014/water-hero-mobile.png",
    },
    {
      desktop:
        "https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1014/sewer-hero-desktop.png",
      tablet:
        "https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1014/sewer-hero-tablet.png",
      mobile:
        "https://res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/1014/sewer-line-mobile-hero-image.png",
    },
  ];
  jQuery(
    '<div class="spz-category-hero">\
            <div class="wrap-spz-content">\
                <div class="hero-left">\
                    <div class="hero-heading"></div>\
                    <div class="hero-subheading"></div>\
                    <div class="hero-copy"></div>\
                    <div class="hero-price-wrap">\
                        <div class="hero-price"></div>\
                        <div class="change-zip-link">Based on your location ' +
    JSON.parse(localStorage.getItem("selectedAddress")).zipcode +
    '. <span class="change-link">Change</span></div>\
                        <div class="change-zip-wrap">\
                        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1658326787/AWR/1014/close-change-zip.svg" class="close-change-zip" />\
                        <div class="input-wrap-heading">Enter your ZIP to see your monthly payment.</div>\
                        <div class="input-label">Your ZIP code:</div>\
                            <div class="hero-input-wrap">\
                                <input id="spz-input-step2" class="second-step-input-change" value=' +
    JSON.parse(localStorage.getItem("selectedAddress")).zipcode +
    ' maxlength="5" onkeypress="validate(event)">\
                                <div class="spz-button-submit get-started step2">Get Started</div>\
                                <div class="spz-error-message">Please enter valid zip code</div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="add-to-cart-spz">Enroll Now<img src="https://res.cloudinary.com/spiralyze/image/upload/v1657768226/AWR/1014/chevron-right.svg"/></div>\
                </div>\
                <div class="hero-right">\
                </div>\
            </div>\
        </div>'
  ).insertBefore("header.top-bar");
  jQuery("#spz-input-step2").on("keypress", function (e) {
    jQuery(".hero-input-wrap .spz-error-message").hide();
    if (e.key === "Enter") {
      jQuery(".spz-button-submit.get-started.step2").click();
      localStorage.setItem("spzZip", jQuery("#spz-input-step2").val());
      redirectUserToProduct(productName, jQuery("#spz-input-step2").val());
    }
  });
  jQuery(".spz-1030 .change-zip-link span").click(function () {
    jQuery(".spz-1030 .change-zip-wrap").show();
    jQuery(".spz-1030 .change-zip-link").hide();
    jQuery(".spz-1030 .hero-price-wrap").css("flex-direction", "column");
  });
  jQuery(".spz-1030 .close-change-zip").click(function () {
    jQuery(".spz-1030 .change-zip-wrap").hide();
    jQuery(".spz-1030 .change-zip-link").show();
    jQuery(".spz-1030 .hero-price-wrap").css("flex-direction", "");
  });
  jQuery(".spz-button-submit.get-started.step2").click(function () {
    localStorage.setItem("spzZip", jQuery("#spz-input-step2").val());
    if (jQuery(this).hasClass("add-combo")) {
      redirectUserToProduct("combo", localStorage.getItem("spzZip"));
    }
    if (jQuery(this).hasClass("add-water")) {
      redirectUserToProduct("water", localStorage.getItem("spzZip"));
    }
    if (jQuery(this).hasClass("add-sewer")) {
      redirectUserToProduct("sewer", localStorage.getItem("spzZip"));
    }
  });
  jQuery(".add-to-cart-spz").click(function () {
    if (jQuery(this).hasClass("add-water")) {
      jQuery(
        '.products-single-box[data-targettitle="Water Line Protection Program"] button'
      ).click();
    }
    if (jQuery(this).hasClass("add-sewer")) {
      jQuery(
        '.products-single-box[data-targettitle="Sewer Line Protection Program"] button'
      ).click();
    }
    if (jQuery(this).hasClass("add-combo")) {
      jQuery(
        '.products-single-box[data-targettitle="Water Line and Sewer Line Protection Program"] button'
      ).click();
    }
  });
  if (
    localStorage.getItem("spzProductToShow") &&
    localStorage.getItem("spzProductToShow") === "water"
  ) {
    if (jQuery(".Water_Line_Protection_Program span.price").text() === "") {
      jQuery(".spz-category-hero").remove();
    } else {
      jQuery(".hero-left .hero-heading").text(heroTitle[1]);
      jQuery(".hero-left .hero-subheading").text(heroSubheading[1]);
      jQuery(".hero-left .hero-copy").text(heroCopy[1]);
      jQuery(".hero-price-wrap .hero-price").html(
        jQuery(".Water_Line_Protection_Program span.price").text() +
        " <span>per month</span>"
      );
      jQuery(".hero-left .hero-copy").append(
        '<span class="learn-more-link">Learn More</span>'
      );
      jQuery(document).on("click", ".learn-more-link", function () {
        jQuery(
          `[data-targettitle="Water Line Protection Program"] .product-image`
        ).trigger("click");
      });
      jQuery(".hero-right").html(`<picture>\
            <source media="(min-width:992px)" srcset="${heroImage[1].desktop}">\
            <source media="(min-width:768px)" srcset="${heroImage[1].tablet}">\
            <source media="(min-width:320px)" srcset="${heroImage[1].mobile}">\
            <img src="${heroImage[1].desktop}" alt="Program image">\
            </picture>`);
      jQuery(".hero-left .add-to-cart-spz").addClass(`${addToCartClass[1]}`);
      jQuery(".spz-1030 .spz-button-submit.get-started.step2").addClass(
        `${addToCartClass[1]}`
      );
    }
  }
  if (
    localStorage.getItem("spzProductToShow") &&
    localStorage.getItem("spzProductToShow") === "combo"
  ) {
    if (
      jQuery(
        ".Water_Line_and_Sewer_Line_Protection_Program span.price"
      ).text() === ""
    ) {
      jQuery(".spz-category-hero").remove();
    } else {
      jQuery(".hero-left .hero-heading").text(heroTitle[0]);
      jQuery(".hero-left .hero-subheading").text(heroSubheading[0]);
      jQuery(".hero-left .hero-copy").text(heroCopy[0]);
      jQuery(".hero-left .hero-copy").append(
        '<span class="learn-more-link">Learn More</span>'
      );
      jQuery(document).on("click", ".learn-more-link", function () {
        jQuery(
          `[data-targettitle="Water Line and Sewer Line Protection Program"] .product-image`
        ).trigger("click");
      });
      jQuery(".hero-price-wrap .hero-price").html(
        jQuery(
          ".Water_Line_and_Sewer_Line_Protection_Program span.price"
        ).text() +
        ' <span>per month</span><div class="comb-discount">' +
        jQuery(
          ".Water_Line_and_Sewer_Line_Protection_Program #savetext"
        ).text() +
        "</div>"
      );
      jQuery(".hero-right").html(`<picture>\
        <source media="(min-width:992px)" srcset="${heroImage[0].desktop}">\
        <source media="(min-width:768px)" srcset="${heroImage[0].tablet}">\
        <source media="(min-width:320px)" srcset="${heroImage[0].mobile}">\
        <img src="${heroImage[0].desktop}" alt="Program image">\
    </picture>`);
      jQuery(".hero-left .add-to-cart-spz").addClass(`${addToCartClass[0]}`);
      jQuery(".spz-1030 .spz-button-submit.get-started.step2").addClass(
        `${addToCartClass[0]}`
      );
    }
  }
  if (
    localStorage.getItem("spzProductToShow") &&
    localStorage.getItem("spzProductToShow") === "sewer"
  ) {
    if (jQuery(".Sewer_Line_Protection_Program span.price").text() === "") {
      jQuery(".spz-category-hero").remove();
    } else {
      jQuery(".hero-left .hero-heading").text(heroTitle[2]);
      jQuery(".hero-left .hero-subheading").text(heroSubheading[2]);
      jQuery(".hero-left .hero-copy").text(heroCopy[2]);
      jQuery(".hero-left .hero-copy").append(
        '<span class="learn-more-link">Learn More</span>'
      );
      jQuery(document).on("click", ".learn-more-link", function () {
        jQuery(
          `[data-targettitle="Sewer Line Protection Program"] .product-image`
        ).trigger("click");
      });
      jQuery(".hero-price-wrap .hero-price").html(
        jQuery(".Sewer_Line_Protection_Program span.price").text() +
        " <span>per month</span>"
      );
      jQuery(".hero-right").html(`<picture>\
        <source media="(min-width:992px)" srcset="${heroImage[2].desktop}">\
        <source media="(min-width:768px)" srcset="${heroImage[2].tablet}">\
        <source media="(min-width:320px)" srcset="${heroImage[2].mobile}">\
        <img src="${heroImage[2].desktop}" alt="Program image">\
    </picture>`);
      jQuery(".hero-left .add-to-cart-spz").addClass(`${addToCartClass[2]}`);
      jQuery(".spz-1030 .spz-button-submit.get-started.step2").addClass(
        `${addToCartClass[2]}`
      );
    }
  }
  if (
    localStorage.getItem("spzProductToShow") &&
    localStorage.getItem("spzProductToShow") === "all"
  ) {
    jQuery(".spz-category-hero").hide();
  }
}
async function createTest() {
  jQuery("body").addClass("spz-1030");
  var productslist = null;
  var titlestocheck = [
    "water line protection program",
    "sewer line protection program",
    "water line and sewer line protection program",
    "water service line protection program",
    "sewer service line protection program",
  ];
  let ourproducts = [];
  var productscheck = setInterval(async function () {
    if (jQuery(".page-wrap.product-list .product-item .card").length !== 0) {
      clearInterval(productscheck);
      await jQuery(".products-wrapper").remove();
      jQuery("header").after(
        '<div class="products-wrapper"><div class="products-inner"><div class="products-title"><h2>Protection Plans</h2></div> <div class="products-boxes"> </div></div></div>'
      );
      await jQuery(".products-wrapper .products-boxes").html("");
      var products = await jQuery(
        ".page-wrap.product-list .product-item .card"
      );
      if (document.querySelector(".products-wrapper")) {
        document.querySelector(".products-wrapper").scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
      let priority = 10;
      for await (product of products) {
        const singleproduct = {};
        let name = jQuery(product).find(".program-name").html().trim();
        let price = jQuery(product)
          .find(".price-cls .notranslate")
          .html()
          .trim();
        let icon = jQuery(product).find(".product-icon").attr("src");
        let pricetoshow = await getPrice(
          name.replace(/[^\w\s]/gi, "_").replaceAll(" ", "_"),
          price
        );
        let image = await getImage(name);
        singleproduct["target"] = name.replaceAll("&amp;", "&");
        let newName = name
          .replaceAll("Protection Program", "")
          .replace("Program", "")
          .replaceAll("Repair", "");
        if (newName.indexOf("Policy") > -1) {
          newName = newName;
        } else {
          newName = newName + " Protection";
        }
        singleproduct["name"] = newName;
        singleproduct["productclass"] = name
          .replace(/[^\w\s]/gi, "_")
          .replaceAll(" ", "_");
        singleproduct["price"] = price;
        singleproduct["icon"] = icon;
        singleproduct["pricetoshow"] = pricetoshow;
        singleproduct["image"] = image;
        /*if (name.toLowerCase() === "water line protection program" || name.toLowerCase() === "water line insurance policy") {
                    singleproduct["priority"] = 1;
                } else if (name.toLowerCase() === "sewer line protection program" || name.toLowerCase() === "sewer line insurance policy") {
                    singleproduct["priority"] = 3;
                } else if (name.toLowerCase() === "water line and sewer line protection program" || name.toLowerCase() === "water line and sewer line insurance policy") {
                    singleproduct["priority"] = 0;
                } else {
                    singleproduct["priority"] = priority;
                }*/
        priority += 1;
        ourproducts.push(singleproduct);
      }
      jQuery(".product-list-header .zipcode-box button.change-link").text(
        "Change"
      );
      jQuery(
        ".spz-1030 .product-list-area > .page-wrap.set-pad > .product-list-header .zipcode-box button.product-page-search > span:first-child"
      ).text("Search");
      const sortedproducts = ourproducts.slice().sort(function (a, b) {
        return a.priority - b.priority;
      });
      if (sortedproducts.length < 3) {
        jQuery(".products-boxes").addClass("justify-content-center");
      }

      jQuery.each(sortedproducts, function (index, value) {
        let ind = index + 1;
        jQuery(".products-wrapper .products-boxes").append(
          '<div data-targettitle="' +
          value.target +
          '" class="products-single-box ' +
          value.productclass +
          '"><div class="product-image" data-pid="product_' +
          ind +
          '" style="background-image:url(' +
          value.image +
          ')"><div class="product-icon" style="background-image:url(' +
          value.icon +
          ')"> </div></div> <div class="product-text"><h1 data-pid="product_' +
          ind +
          '">' +
          value.name +
          '</h1><div class="product-cart-info"><div class="product-pricing">' +
          value.pricetoshow +
          '</div> <button>Enroll Now <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 9L5.5 5L1.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div></div></div>'
        );

        jQuery(document).on(
          "click",
          '[data-pid="product_' + ind + '"]',
          function () {
            jQuery(`.product-item:nth-child(${ind}) .program-name`).trigger(
              "click"
            );
          }
        );

        if (
          localStorage.getItem("spzProductToShow") === "combo" &&
          value.target === "Water Line and Sewer Line Protection Program"
        )
          jQuery('div[data-targettitle="' + value.target + '"]').hide();
        if (
          localStorage.getItem("spzProductToShow") === "water" &&
          value.target === "Water Line Protection Program"
        )
          jQuery('div[data-targettitle="' + value.target + '"]').hide();
        if (
          localStorage.getItem("spzProductToShow") === "sewer" &&
          value.target === "Sewer Line Protection Program"
        )
          jQuery('div[data-targettitle="' + value.target + '"]').hide();
        if (
          value.target !== "Water Line and Sewer Line Protection Program" ||
          value.target !== "Water Line Protection Program" ||
          value.target !== "Sewer Line Protection Program"
        ) {
          jQuery(".spz-category-hero").remove();
        }
      });
      jQuery.each(comboManagement, function (index, cmbo) {
        let totalprice = 0;
        let comboPrice = 0;
        if (
          document.querySelector(
            'div[data-targettitle="' +
            cmbo.comboName +
            '"] .product-pricing > span:first-child'
          )
        ) {
          comboPrice = document.querySelector(
            'div[data-targettitle="' +
            cmbo.comboName +
            '"] .product-pricing > span:first-child'
          ).innerHTML;
          comboPrice = Number(comboPrice.replaceAll("$", ""));
        }
        jQuery.each(cmbo.comboProducts, function (ind, intProduct) {
          if (
            document.querySelector(
              'div[data-targettitle="' +
              intProduct +
              '"] .product-pricing > span:first-child'
            )
          ) {
            const singlePrice = document.querySelector(
              'div[data-targettitle="' +
              intProduct +
              '"] .product-pricing > span:first-child'
            ).innerHTML;
            totalprice += Number(singlePrice.replaceAll("$", ""));
            const finalprice = (totalprice - comboPrice).toFixed(2);
            if (comboPrice > 0 && finalprice >= 1) {
              jQuery(
                'div[data-targettitle="' +
                cmbo.comboName +
                '"] .product-pricing span#savetext'
              ).html("(save $" + finalprice + ")");
              jQuery(
                'div[data-targettitle="' +
                cmbo.comboName +
                '"] .product-pricing span#savetext'
              ).addClass("show-save");
              jQuery('div[data-targettitle="' + cmbo.comboName + '"]').addClass(
                "amount-save"
              );
            }
          }
        });
      });
      document.querySelectorAll(".products-single-box").forEach((element) => {
        if (
          element.dataset.targettitle ===
          "Water Line and Sewer Line Protection Program" ||
          element.dataset.targettitle === "Water Line Protection Program" ||
          element.dataset.targettitle === "Sewer Line Protection Program"
        ) {
          if (
            !document.querySelector(".spz-category-hero") &&
            document.querySelector('button[angularticscategory="Header-Login"]')
          ) {
            addHeroSection();
          }
        }
      });

      $(".products-single-box .product-text button").on(
        "click",
        async function (e) {
          e.preventDefault();
          const linksControl = await jQuery(
            ".page-wrap.product-list .product-item .card"
          );
          for await (const link of linksControl) {
            if (
              $(this)
                .closest(".products-single-box")
                .attr("data-targettitle") ===
              $(link)
                .find(".program-name")
                .html()
                .trim()
                .replaceAll("&amp;", "&")
            ) {
              $(link).find(".enroll-now").click();
              return;
            }
          }
        }
      );
    }
  }, 100);
}
////////////////////////////
/*$("body").on("click", ".products-single-box .product-image, .products-single-box .product-text", async function (e) {
    e.preventDefault();
    const linksControl = await jQuery(".page-wrap.product-list .product-item .card");
    for await (const link of linksControl) {
        if ($(this).closest(".products-single-box").attr("data-targettitle") === $(link).find(".program-name").html().trim().replaceAll("&amp;", "&")) {
            $(link).find(".program-name").click();
            return;
        }
    }
});*/

async function removetest() {
  jQuery("body").removeClass("spz-1030");
  jQuery(".products-wrapper").remove();
  jQuery(".noproducts-wrapper").remove();
  jQuery(".spz-category-hero").remove();
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
  url = location.href;
  urlCheck(url);
});
var url = location.href;
urlCheck(url);

function urlCheck(url) {
  var allblogsurlstring = "";
  if (window.location.pathname.indexOf("/products/") > -1) {
    allblogsurlstring = window.location.href;
  }
  if (isSameUrl(url, allblogsurlstring, true)) {
    createTest();
  } else {
    removetest();
  }
}

function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
  currentUrl = currentUrl.includes("#")
    ? currentUrl.slice(0, currentUrl.indexOf("#"))
    : currentUrl;
  specifiedUrl = specifiedUrl.includes("#")
    ? specifiedUrl.slice(0, specifiedUrl.indexOf("#"))
    : specifiedUrl;
  if (!includeQueryParams)
    currentUrl = currentUrl.includes("?")
      ? currentUrl.slice(0, currentUrl.indexOf("?"))
      : currentUrl;
  if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
    return true;
  return false;
}
