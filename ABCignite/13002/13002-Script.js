init_13002();

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
                <li class="bullet-point"><strong>Run club operations more efficiently.</strong> Spend less time on tasks with the  best full service billing, reporting, and facility management system.</li>
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
              `<div class="spz-demo-title">Get a Demo</div>`
            );
        }
      }, 200);

      document
        .querySelector("#flydown-modal.modal .modal__container")
        .insertAdjacentHTML("beforeend", bulltHtmlDesk);

      waitForElm("#flydown-modal.modal .modal__container").then(() => {
        document.querySelector(
          "#flydown-modal form.marketo-form .mktoButtonRow .mktoButtonWrap .mktoButton"
        ).innerHTML = `Submit <img class="cta-arrow" src="//res.cloudinary.com/spiralyze/image/upload/v1706094180/ABCFitnessIgnite/13001/Updated%20Code/Arrow.svg" alt="arrow">`;
      });
      // var closeBtn = document.querySelector(".modal-content .close-icon");
      // var HeadercloseBtn = document.querySelector(".spz-13002 #popupModal .modal-header button.close");
      // closeBtn.addEventListener('click', function () {
      //     HeadercloseBtn.click();
      // });
    });

    waitForElm(
      "#flydown-modal form.marketo-form .mktoButtonRow .mktoButtonWrap .mktoButton"
    ).then(() => {
      document.querySelector(
        "#flydown-modal form.marketo-form .mktoButtonRow .mktoButtonWrap .mktoButton"
      ).innerHTML = `Submit <img class="cta-arrow" src="//res.cloudinary.com/spiralyze/image/upload/v1706094180/ABCFitnessIgnite/13001/Updated%20Code/Arrow.svg" alt="arrow">`;
    });

    init5009();
  }
}

function init5009() {
  //   if (!bodyEle.classList.contains("spz-5010")) {
  //5009 Winner test changes starts
  let btnHtml;
  if (window.location.pathname.indexOf("/pt/") > -1) {
    btnHtml = `<li class="spz-menu-item">
            <a class="spz-demo-btn" href="#">Quero testar</a>
        </li>`;
  } else if (window.location.pathname.indexOf("/es/") > -1) {
    btnHtml = `<li class="spz-menu-item">
            <a class="spz-demo-btn" href="#">PruÃ©belo</a>
        </li>`;
  } else {
    btnHtml = `<li class="spz-menu-item">
            <a class="spz-demo-btn" href="#">GET A DEMO</a>
        </li>`;
  }

  waitForElm(".site-header #mega-menu-primary").then((elm) => {
    elm.insertAdjacentHTML("beforeend", btnHtml);
    setTimeout(() => {
      // if (window.location.pathname == '/') {
      document
        .querySelector(".spz-demo-btn")
        .addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector("#flydown-modal").classList.add("is-open");
          document
            .querySelector("#flydown-modal")
            .setAttribute("aria-hidden", "false");
          // window.location.href = 'https://abcfitness.com/request-a-demo/';
          return false;
        });

      document
        .querySelector("#flydown-modal .modal__close")
        .addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector("#flydown-modal").classList.remove("is-open");
          document
            .querySelector("#flydown-modal")
            .setAttribute("aria-hidden", "true");

          return false;
        });
      // }
    }, 100);
  });

  if (
    window.location.pathname == "/" ||
    window.location.pathname == "/pt/" ||
    window.location.pathname == "/es/"
  ) {
    waitForElm(".modal-flydown-trigger").then((elm) => {
      if (window.location.pathname.indexOf("/pt/") > -1) {
        elm.innerText = "SOLICITE UMA DEMO";
      } else if (window.location.pathname.indexOf("/es/") > -1) {
        elm.innerText = "SOLICITA UNA DEMO";
      } else {
        // elm.innerText = 'REQUEST A DEMO';
      }
    });
  }

  window.addEventListener("scroll", function () {
    var headerNav = document.querySelector(".bkg-header");
    let getScrollposition = window.scrollY;
    if (getScrollposition > headerNav.offsetTop) {
      headerNav.classList.add("fixed-header");
    } else {
      if (headerNav.classList.contains("fixed-header")) {
        headerNav.classList.remove("fixed-header");
      }
    }
  });
  //   }
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
