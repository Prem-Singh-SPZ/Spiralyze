//use interval to check is body tag is loaded
let checkBody = setInterval(() => {
  if (document.querySelector('body')) {
    clearInterval(checkBody);
    loadTest();
  }
});

function loadTest() {
  document.querySelector('body').classList.add('spz-1006')

  // let showTest = setInterval(() => {
  // if (document.querySelector('a[href="#popup_contact_us"]')) {
  // clearInterval(showTest);

  waitForElm('a[href="#popup_contact_us"]').then(() => {
    document.querySelector('a[href="#popup_contact_us"]').click();
  });
  // document.querySelector('.spz-1006 #new-form-wrapper').remove();

  waitForElm('#popup_contact_us .wcs-col-12').then(() => {
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
    document.querySelector('#contact-us-form-wrapper').insertAdjacentElement("beforeend", document.querySelector('#new-form-wrapper'));
    document.querySelector('body #new-form-wrapper').classList.add("step2");
  });
}
// }, 100);
// }

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