var css = `
.spz_7002_V2 .spz-sticky-review {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 20px;
  width: 100%;
  max-width: 1062px;
  margin: auto;
  padding: 0 35px;
  z-index: 99;
  opacity: 0;
  pointer-events: none;
  transition: all 0.95s ease-in-out;
}
.spz_7002_V2.show-sticky-bar .spz-sticky-review {
 opacity: 1;
 pointer-events: all; 
}
.spz_7002_V2 .spz-sticky-review .sticky-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 16px 36px;
  border-radius: 72px;
  background: #0F2D52;
  box-shadow: 0px 4px 16px 0px rgba(19, 15, 37, 0.08);
  position: relative;
}
.spz_7002_V2 .spz-sticky-review .close-icon {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 30px;
  background: #F2F2F2;
  position: absolute;
  top: -22px;
  right: -22px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}
.spz_7002_V2 .spz-sticky-review .close-icon:hover {
  background: #051C2C;
}
.spz_7002_V2 .spz-sticky-review .close-icon svg path {
  transition: all 0.4s ease-in-out;
}
.spz_7002_V2 .spz-sticky-review .close-icon:hover svg path {
  fill: #FFF;
}
.spz_7002_V2 .spz-sticky-review .review-content {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
}
.spz_7002_V2 .spz-sticky-review .review-block {
  margin-top: -3px;
}
.spz_7002_V2 .spz-sticky-review .review-block .review-rating {
  color: #CCCCCC;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;
  margin: 5px 0 0;
}
.spz_7002_V2 .spz-sticky-review .review-block .review-rating .avg-rating {
  color: #FFF;
  font-weight: 700;
  margin-right: 2px;
}
.spz_7002_V2 .spz-sticky-review .review-block-heading {
  color: #FFF;
  font-family: "bree", sans-serif;
  -moz-font-feature-settings: "salt", "ss03";
  -webkit-font-feature-settings: "salt", "ss03";
  font-feature-settings: "salt", "ss03";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 0 48px;
}
.spz_7002_V2 .spz-sticky-review .demo-cta {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 50px;
  border: 2px solid #5FB53B;
  background: transparent;
  border-radius: 99px;
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}
.spz_7002_V2 .spz-sticky-review .demo-cta:hover {
  background: #5FB53B;
}
.spz_7002_V2.show-sticky-bar .zy-subfooter {
  padding-bottom: 102px;
}
@media(max-width: 1399.98px) {
  .spz_7002_V2.show-sticky-bar div.embeddedServiceHelpButton .helpButton {
    bottom: 145px;
  }
}
@media(max-width: 1199.98px) {
  .spz_7002_V2 .spz-sticky-review .close-icon {
    right: -12px;
  }
}
@media(max-width: 1023.98px) {
  .spz_7002_V2 .spz-sticky-review .sticky-wrapper {
    flex-flow: row;
    border-radius: 20px;
    padding: 21px 30px 18px 30px;
  }
  .spz_7002_V2 .spz-sticky-review .close-icon {
    right: -22px;
  }
  .spz_7002_V2 .spz-sticky-review .review-content {
    align-items: flex-start;
    flex-flow: column;
    max-width: calc(100% - 195px);
  }
  .spz_7002_V2 .spz-sticky-review .review-content .review-block {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .spz_7002_V2 .spz-sticky-review .review-content .review-block img {
    height: 16px;
    object-fit: contain;
  }
  .spz_7002_V2 .spz-sticky-review .review-block-heading {
    margin: 4px 0 0 0;
  }
  .spz_7002_V2 .spz-sticky-review .review-block .review-rating {
    margin: 1px 0 0 4px;
  }
  .spz_7002_V2 .spz-sticky-review .demo-cta {
    margin-top: -4px;
  }
  .spz_7002_V2.show-sticky-bar div.embeddedServiceHelpButton .helpButton {
    bottom: 155px;
  }
}
@media(max-width: 1000.98px) {
  .spz_7002_V2.show-sticky-bar .zy-subfooter {
    padding-bottom: 130px;
  }
}
@media(max-width: 767.98px) {
  .spz_7002_V2 .spz-sticky-review {
    padding: 0 30px;
  }
  .spz_7002_V2 .spz-sticky-review .sticky-wrapper {
    flex-flow: column;
    padding: 21px 16px 18px 16px;
  }
  .spz_7002_V2 .spz-sticky-review .review-content {
    max-width: 100%;
    align-items: center;
  }
  .spz_7002_V2 .spz-sticky-review .review-block-heading {
    margin: 3px 0 20px 0;
    text-align: center;
  }
  .spz_7002_V2 .spz-sticky-review .demo-cta {
    margin-top: 0;
    width: 100%;
  }
  .spz_7002_V2.show-sticky-bar div.embeddedServiceHelpButton .helpButton {
    bottom: 225px;
  }
  .spz_7002_V2.show-sticky-bar .zy-subfooter {
    padding-bottom: 220px;
  }
}
@media(max-width: 370.98px) {
  .spz_7002_V2.show-sticky-bar div.embeddedServiceHelpButton .helpButton {
    bottom: 245px;
  }
}`;

head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
style.appendChild(document.createTextNode(css));

let bodyLoaded = setInterval(function () {
  const body = document.querySelector('body');
  if (body) {
    clearInterval(bodyLoaded);
    if (!body.classList.contains('spz_7002_V2')) {
	    body.classList.add('spz_7002_V2');
		  waitForElm('.spz_7002_V2 footer.zy-footer').then(function () {
        if (document.querySelectorAll(".spz-sticky-review").length == 0) {
          document.querySelector('.spz_7002_V2 footer.zy-footer').insertAdjacentHTML("beforebegin", `<div class="spz-sticky-review">
            <diV class="sticky-wrapper">
              <div class="close-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00042 8.1783L11.7146 12.8925C11.8718 13.0443 12.0823 13.1283 12.3008 13.1264C12.5193 13.1245 12.7283 13.0368 12.8828 12.8823C13.0373 12.7278 13.1249 12.5188 13.1268 12.3003C13.1287 12.0818 13.0447 11.8713 12.8929 11.7141L8.17876 6.99996L12.8929 2.2858C13.0447 2.12863 13.1287 1.91812 13.1268 1.69963C13.1249 1.48113 13.0373 1.27212 12.8828 1.11761C12.7283 0.963106 12.5193 0.875465 12.3008 0.873567C12.0823 0.871668 11.8718 0.955663 11.7146 1.10746L7.00042 5.82163L2.28626 1.10746C2.12838 0.959416 1.9191 0.8786 1.7027 0.882114C1.4863 0.885628 1.27975 0.973196 1.12676 1.12629C0.973778 1.27938 0.886355 1.48599 0.882995 1.7024C0.879634 1.9188 0.960598 2.12802 1.10876 2.2858L5.82209 6.99996L1.10792 11.7141C1.02833 11.791 0.964846 11.883 0.921171 11.9846C0.877497 12.0863 0.854509 12.1956 0.853547 12.3063C0.852586 12.4169 0.87367 12.5267 0.915571 12.6291C0.957472 12.7315 1.01935 12.8245 1.09759 12.9028C1.17584 12.981 1.26888 13.0429 1.37129 13.0848C1.47371 13.1267 1.58344 13.1478 1.69409 13.1468C1.80474 13.1459 1.91409 13.1229 2.01576 13.0792C2.11743 13.0355 2.20938 12.9721 2.28626 12.8925L7.00042 8.1783Z" fill="#B3B3B3"></path>
                </svg>
              </div>
              <div class="review-content">
                <div class="review-block">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/v1718702679/zywave/7002/frame_1000003315.svg" alt="Review Stars">
                  <h6 class="review-rating"><span class="avg-rating">4.7</span>(2,987 reviews)</h6>
                </div>
                <h4 class="review-block-heading">Streamline every step of insurance lifecycle</h4>
              </div>
              <div class="demo-cta">Book a demo</div>
            </div>
          </div>`);

          document.querySelector('.spz_7002_V2 .spz-sticky-review .demo-cta').addEventListener('click', () => {
            document.querySelector('.zy-header-bottom-inner .zy-header-bottom-demo>a').click();
          });

          document.querySelector('.spz_7002_V2 .spz-sticky-review .close-icon').addEventListener('click', () => {
            document.body.classList.remove('show-sticky-bar');
            sessionStorage.setItem('Sticky_Bar_Session', 'hide');
          });

          if (!sessionStorage.getItem('Sticky_Bar_Session')) {
            sessionStorage.setItem('Sticky_Bar_Session', 'show');
          }

          function showBar() {
            if (window.scrollY > 10) {
              document.body.classList.add('show-sticky-bar');
            } else {
              document.body.classList.remove('show-sticky-bar');
            }
          }

          if (sessionStorage.getItem('Sticky_Bar_Session') === 'show') {
            showBar();
          }
          window.addEventListener("scroll", function() {
            if (sessionStorage.getItem('Sticky_Bar_Session') === 'show') {
              showBar();
            }
          });
        }

        //Add Hidden field value
        waitForElm('.spz_7002_V2 .zy-marketo-form-container .mktoForm input[name="cR03"]').then(function () {
          document.querySelector(`.spz_7002_V2 .zy-marketo-form-container .mktoForm input[name="cR03"]`).setAttribute("value", "#7002_variant2");
        });
		  });
    }
  }
});
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
