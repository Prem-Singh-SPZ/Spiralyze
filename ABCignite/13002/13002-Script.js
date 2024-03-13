init_13002();

//preload image by adding in head tag
document.querySelector("head").insertAdjacentHTML("beforeend", `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1708690066/ABCFitnessIgnite/13002/Ellipse_2.svg" as="image">
  `);

function init_13002() {
  var bodyEle = document.querySelector("body");
  if (!bodyEle.classList.contains("spz-13002")) {
    bodyEle.classList.add("spz-13002");

    waitForElm("#flydown-modal.modal .modal__container").then(() => {
      let bulltHtmlDesk = `
            <div class="bullet-section">
            <h6 class="bullet-sub-title">Make the dreams for your club a reality</h6>
            <h2 class="bullet-title">Discover ABC Fitness, the gym management software trusted by 40% of clubs in the US.</h2>
            <ul class="bullet-wrapper desktop">
                <li class="bullet-point"><strong>Get more members.</strong> Use powerful sales tools for online join, referrals, trigger-based text and emails, and more.</li>
                <li class="bullet-point"><strong>Keep more members.</strong> Grant members access for self-service of scheduling and profile management.</li>
                <li class="bullet-point"><strong>Run club operations more efficiently.</strong> Spend less time on tasks with the best full service billing, reporting, and facility management system.</li>
            </ul>
            </div>`;

      let setTitle = setInterval(() => {
        if (
          document.querySelectorAll(
            ".modal .modal__container .flydown-modal__inner .spz-demo-title"
          ).length == 0
        ) {
          document
            .querySelector(".modal .modal__container .flydown-modal__inner")
            .insertAdjacentHTML(
              "afterbegin",
              `<div class="multi-steps"><div class="steps"><div class="step-count step-1 active"><img class="in-active" src="//res.cloudinary.com/spiralyze/image/upload/v1708433974/abcfitness/13002/frame_5601.svg" alt="Step Count"><img class="active" src="//res.cloudinary.com/spiralyze/image/upload/v1708433969/abcfitness/13002/frame_5596.svg" alt="Step Count"></div><div class="step-count step-2"><img class="in-active" src="//res.cloudinary.com/spiralyze/image/upload/v1708433969/abcfitness/13002/frame_5597.svg" alt="Step Count"><img class="active" src="//res.cloudinary.com/spiralyze/image/upload/v1708433972/abcfitness/13002/frame_5600.svg" alt="Step Count"></div><div class="step-count step-3"><img class="in-active" src="//res.cloudinary.com/spiralyze/image/upload/v1708433971/abcfitness/13002/frame_5599.svg" alt="Step Count"><img class="active" src="//res.cloudinary.com/spiralyze/image/upload/v1708433969/abcfitness/13002/frame_5598.svg" alt="Step Count"></div></div></div><div class="spz-demo-title">Get a Demo</div><div class="step-1-form"><div class="form-container"><p class="question">Which kind of fitness business are you?</p><form class="marketo-form mktoForm" data-styles-ready="true"><div
              class="mktoFormRow"
              data-wrapper-for="Modality__c_17086647185130.7863942112471629 Modality__c"
            >
              <div
                class="mktoFieldDescriptor mktoFormCol"
                data-wrapper-for="Modality__c_17086647185130.7863942112471629 Modality__c"
              >
                <div class="mktoOffset"></div>
                <div class="mktoFieldWrap mktoRequiredField">
                  <label
                    for="Modality__c_17086647185130.7863942112471629"
                    id="LblModality__c"
                    class="mktoLabel mktoHasWidth"
                  >
                    <div class="mktoAsterix">*</div>Business type
                  </label>
                  <div class="mktoGutter mktoHasWidth"></div>
                  <select
                    id="Modality__c_17086647185130.7863942112471629"
                    name="Modality__c"
                    aria-labelledby="LblModality__c InstructModality__c"
                    class="mktoField mktoHasWidth mktoRequired mktoValid"
                    aria-required="true"
                    aria-invalid="false"
                  >
                    <option value="">Please select one</option>
                    <option value="Fitness Studio">Fitness Studio</option>
                    <option value="Gym">Gym</option>
                    <option value="Pilates Studio">Pilates Studio</option>
                    <option value="Boxing Fitness Studio (Class Based)">
                      Boxing Fitness Studio
                    </option>
                    <option value="PT Studio">PT Studio</option>
                    <option value="Wellness / Therapy Centre">
                      Wellness / Therapy Center
                    </option>
                    <option value="Barre Studio">Barre Studio</option>
                    <option value="Dance Fitness Studio">Dance Fitness Studio</option>
                    <option value="Martial Arts Club">Martial Arts Club</option>
                    <option value="Spin / Cycle Studio">Spin / Cycle Studio</option>
                    <option value="Yoga Studio">Yoga Studio</option>
                    <option value="Crossfit">Crossfit</option>
                    <option value="Pole Fitness">Pole Fitness</option>
                    <option value="Large Gym / Leisure Club">
                      Large Gym / Leisure Club
                    </option>
                    <option value="Golf">Golf</option>
                    <option value="Other">Other</option>
                  </select>
                  <div class="mktoError hide"><div class="mktoErrorArrowWrap"><div class="mktoErrorArrow"></div></div><div id="" role="alert" tabindex="-1" class="mktoErrorMsg">This field is required.</div></div>
                </div>
              </div>
            </div><div class="mktoButtonRow custom-btn-row"><span class="mktoButtonWrap mktoNative"><a class="mktoButton step-1-submit">Next <img class="cta-arrow" src="//res.cloudinary.com/spiralyze/image/upload/v1706094180/ABCFitnessIgnite/13001/Updated%20Code/Arrow.svg" alt="arrow"></a></span></div><p class="marketo-form__notice">By completing the form and submitting your information above, you are agreeing to our <a href="/privacy-policy/" target="_blank">Privacy Policy</a>.</p></form></div></div><div class="step-2-form hide"><div class="form-container"><p class="question">How many locations do you have?</p><form class="marketo-form mktoForm" data-styles-ready="true"><div class="range">
            <div class="range__wrapper">
                <p>
                    <input
                        type="range"
                        id="styled-range"
                        name="styled-range"
                        min="0"
                        max="100"
                        value="50"
                        step="5"
                        list="styled-range-list"
                        class="range--progress"
                        style="--min: 0; --max: 100; --val: 50"
                    />
                </p>
                <p class="range__labels" aria-hidden="true">
                    <span>0</span>
              <span>1-400</span>
                    <span>400+</span>
                </p>
                <datalist id="styled-range-list">
                    <option value="0"></option>
                    <option value="100"></option>
                </datalist>
            </div>
        </div><div class="mktoButtonRow custom-btn-row"><span class="mktoButtonWrap mktoNative"><a class="mktoButton step-2-submit">Next <img class="cta-arrow" src="//res.cloudinary.com/spiralyze/image/upload/v1706094180/ABCFitnessIgnite/13001/Updated%20Code/Arrow.svg" alt="arrow"></a></span></div><p class="marketo-form__notice">By completing the form and submitting your information above, you are agreeing to our <a href="/privacy-policy/" target="_blank">Privacy Policy</a>.</p></form></div></div>`
            );

          document
            .querySelector(".range--progress")
            .addEventListener("input", (event) => {
              event.target.style.setProperty("--val", event.target.value);
            });
        }
      }, 200);



      document
        .querySelector("#flydown-modal.modal .modal__container")
        .insertAdjacentHTML("beforeend", bulltHtmlDesk);

      waitForElm("#flydown-modal form.flydown-form .mktoButtonRow .mktoButtonWrap .mktoButton").then(() => {
        document.querySelector(
          "#flydown-modal form.flydown-form .mktoButtonRow .mktoButtonWrap .mktoButton"
        ).innerHTML = `Submit <img class="cta-arrow" src="//res.cloudinary.com/spiralyze/image/upload/v1706094180/ABCFitnessIgnite/13001/Updated%20Code/Arrow.svg" alt="arrow">`;
      });
      // var closeBtn = document.querySelector(".modal-content .close-icon");
      // var HeadercloseBtn = document.querySelector(".spz-13002 #popupModal .modal-header button.close");
      // closeBtn.addEventListener('click', function () {
      //     HeadercloseBtn.click();
      // });
    });

    waitForElm(
      "#flydown-modal .step-1-form form.marketo-form .mktoButtonRow "
    ).then(() => {
      focusFields();
    });

    // init5009();
    multiStepLogic();
  }
}

function multiStepLogic() {
  //multi step form logic
  var step1Form = document.querySelector(".step-1-form"); //step 1 form
  var step2Form = document.querySelector(".step-2-form"); //step 2 form
  var step3Form = document.querySelector(".flydown-modal__form"); //step 3 form

  step3Form.classList.add("hide");
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("step-1-submit")) {
    if (document.querySelector('select[name="Modality__c"]').selectedIndex) {
      document.querySelector(".step-1-form").classList.add("hide");
      document.querySelector(".step-2-form").classList.remove("hide");
      document.querySelector(".step-count.step-1").classList.remove("active");
      document.querySelector(".step-count.step-2").classList.add("active");
    } else {
      document.querySelector('select[name="Modality__c"] + .mktoError').classList.remove("hide");
      document.querySelector('select[name="Modality__c"]').closest('.mktoFormCol').classList.add("field-error");
    }
  }

  if (e.target.classList.contains("step-2-submit")) {
    document.querySelector(".step-2-form").classList.add("hide");
    document.querySelector(".flydown-modal__form").classList.remove("hide");
    document.querySelector(".step-count.step-2").classList.remove("active");
    document.querySelector(".step-count.step-3").classList.add("active");
  }

  if (e.target.classList.contains("mktoButton")) {
    focusFields();
  }
});

// function init5009() {
//   //   if (!bodyEle.classList.contains("spz-5010")) {
//   //5009 Winner test changes starts
//   let btnHtml;
//   if (window.location.pathname.indexOf("/pt/") > -1) {
//     btnHtml = `<li class="spz-menu-item">
//             <a class="spz-demo-btn" href="#">Quero testar</a>
//         </li>`;
//   } else if (window.location.pathname.indexOf("/es/") > -1) {
//     btnHtml = `<li class="spz-menu-item">
//             <a class="spz-demo-btn" href="#">PruÃ©belo</a>
//         </li>`;
//   } else {
//     btnHtml = `<li class="spz-menu-item">
//             <a class="spz-demo-btn" href="#">GET A DEMO</a>
//         </li>`;
//   }

//   waitForElm(".site-header #mega-menu-primary").then((elm) => {
//     elm.insertAdjacentHTML("beforeend", btnHtml);
//     setTimeout(() => {
//       // if (window.location.pathname == '/') {
//       document
//         .querySelector(".spz-demo-btn")
//         .addEventListener("click", function (e) {
//           e.preventDefault();
//           document.querySelector("#flydown-modal").classList.add("is-open");
//           document
//             .querySelector("#flydown-modal")
//             .setAttribute("aria-hidden", "false");
//           // window.location.href = 'https://abcfitness.com/request-a-demo/';
//           return false;
//         });

//       document
//         .querySelector("#flydown-modal .modal__close")
//         .addEventListener("click", function (e) {
//           e.preventDefault();
//           document.querySelector("#flydown-modal").classList.remove("is-open");
//           document
//             .querySelector("#flydown-modal")
//             .setAttribute("aria-hidden", "true");

//           return false;
//         });
//       // }
//     }, 100);
//   });

//   if (
//     window.location.pathname == "/" ||
//     window.location.pathname == "/pt/" ||
//     window.location.pathname == "/es/"
//   ) {
//     waitForElm(".modal-flydown-trigger").then((elm) => {
//       if (window.location.pathname.indexOf("/pt/") > -1) {
//         elm.innerText = "SOLICITE UMA DEMO";
//       } else if (window.location.pathname.indexOf("/es/") > -1) {
//         elm.innerText = "SOLICITA UNA DEMO";
//       } else {
//         // elm.innerText = 'REQUEST A DEMO';
//       }
//     });
//   }

//   window.addEventListener("scroll", function () {
//     var headerNav = document.querySelector(".bkg-header");
//     let getScrollposition = window.scrollY;
//     if (getScrollposition > headerNav.offsetTop) {
//       headerNav.classList.add("fixed-header");
//     } else {
//       if (headerNav.classList.contains("fixed-header")) {
//         headerNav.classList.remove("fixed-header");
//       }
//     }
//   });
//   //   }
// }

// On input focus add class on closest parent field class
function focusFields() {
  document
    .querySelectorAll(
      '.mktoForm .mktoFormRow .mktoField:not([type="checkbox"]):not([type="hidden"])'
    )
    .forEach(function (el) {
      el.addEventListener("focus", function () {
        // console.log(el);
        el.closest(".mktoFormCol").classList.add("field-focus");
        checkError(el);
      });
      el.addEventListener("blur", function () {
        el.closest(".mktoFormCol").classList.remove("field-focus");
        checkError(el);
      });

      // add event listeners to the input element
      el.addEventListener("keypress", () => {
        checkError(el);
      });

      el.addEventListener("change", () => {
        checkError(el);
      });

      el.addEventListener("keydown", () => {
        checkError(el);
      });

      el.addEventListener("keyup", () => {
        checkError(el);
      });
    });
}

// Function to add .field-error class on closest parent .field class if .error is exist on input
function checkError(elem) {
  let timeBuffer = setInterval(() => {
    if (
      elem.closest(".mktoFormCol ").querySelector(".mktoError") &&
      elem.closest(".mktoFormCol").querySelector(".mktoInvalid")
    ) {
      elem.closest(".mktoFormCol").classList.add("field-error");
    } else {
      elem.closest(".mktoFormCol").classList.remove("field-error");
      if (document.querySelector('select[name="Modality__c"] + .mktoError')) {
        document.querySelector('select[name="Modality__c"] + .mktoError').classList.add("hide");
      }
    }
    if (elem && elem.value && elem.value != "") {
      // console.log(elem.value)
      elem.closest(".mktoFormCol").classList.add("input-filled");
      // elem.closest('.mktoFormCol').classList.remove('field-error');
    } else {
      elem.closest(".mktoFormCol").classList.remove("input-filled");
      // elem.closest('.mktoFormCol').classList.add('field-error');
    }
  }, 100);

  setTimeout(() => {
    clearInterval(timeBuffer);
  }, 1000);
}

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
