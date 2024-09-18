function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function () {
  if (!document.querySelector('.spz-1006')) {
    document.querySelector('body').classList.add('spz-1006')

    waitForElm('#popup_contact_us .wcs-col-12').then(() => {
      if (document.querySelector('#popup_connect.wcs.wcs-modal') && document.querySelectorAll('.spz-left-contact').length == 0) {
        document.querySelector('#popup_connect.wcs.wcs-modal').remove();
        document.querySelector('#popup_contact_us .wcs-col-12').innerHTML = `
        <div class="home-logo"><a href="https://www.komodohealth.com/"> <img src="//res.cloudinary.com/spiralyze/image/upload/v1707409447/komodohealth/1006/logo.webp" alt="Komodo Logo"></a></div>
        <div class="wcs-pform">
          <div class="wcs-popup-heading">
            <h2>Contact Us</h2>
          </div>
          <div id='contact-us-form-wrapper'></div>
          </div>
        </div>
        <div class="social-proof"><picture>
          <source media="(min-width:1025px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/v1721285891/KomodoHealth/1006/Social_proof.png">
          <source media="(min-width:768px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/v1721285891/KomodoHealth/1006/Social_proof_tab.png">
          <img src="https://res.cloudinary.com/spiralyze/image/upload/v1721285891/KomodoHealth/1006/Social_proof_mob.png" alt="Social Proof">
        </picture></div>
        `

        document.querySelector('#popup_contact_us .wcs-col-12').insertAdjacentHTML("afterend", `<div class="wcs-bg-img"></div>`);
        document.querySelector('#contact-us-form-wrapper').insertAdjacentElement("beforeend", document.querySelector('.widget-type-cell.cell_17256415850984-padding'));
        // document.querySelector('body #new-form-wrapper').classList.add("step2");
        document.body.insertAdjacentHTML("beforeend", `<div class="jquery-modal blocker current spz-left-contact"></div>`);
        document.querySelector('.spz-1006 #popup_contact_us').classList.add('modal');
        document.querySelector('.spz-left-contact').insertAdjacentElement("beforeend", document.querySelector('#popup_contact_us'));

        let i = 0;
        const CROInterval = setInterval(() => {
          if (document.querySelector('.spz-1006 #popup_contact_us input[name="cro1"]')) {
            clearInterval(CROInterval)
            document.querySelector('.spz-1006 #popup_contact_us input[name="cro1"]').value = "#1006_variant"
          }
          i++;
          if (i > 6) {
            clearInterval(CROInterval)
          }
        }, 500);
      }
    });
  }
})

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