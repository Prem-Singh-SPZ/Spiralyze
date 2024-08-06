// var css = ``;
// head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
// head.appendChild(style);
// style.type = 'text/css';
// style.appendChild(document.createTextNode(css));

const baseImgUrl = '//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/expel/1002/';
const heroTiles = [
  {
    title: 'AWS<br />Security',
    logo: baseImgUrl + 'icon_custom_scripts.svg',
  },
  {
    title: 'Google<br />Workspace Security',
    logo: baseImgUrl + 'icon_custom_scripts_5.svg',
  },
  {
    title: 'Microsoft 365 & Azure Security',
    logo: baseImgUrl + 'icon_custom_scripts_9.svg',
  },
  {
    title: 'Endpoint & Network Security',
    logo: baseImgUrl + 'icon_custom_scripts_7.svg',
  },
  {
    title: 'Identity &<br />SaaS Security',
    logo: baseImgUrl + 'icon_custom_scripts_8.svg',
  }
];

let bodyLoaded = setInterval(function () {
  const body = document.querySelector('body');
  if (body) {
    clearInterval(bodyLoaded);
    if (!body.classList.contains('spz-1002')) {
      body.classList.add('spz-1002');
      waitForElm('.spz-1002 #hero-slider').then(function () {
        heroSection();
      });
    }
  }
});

// Hero Section
function heroSection() {
  document.querySelector('.spz-1002 #hero-slider').insertAdjacentHTML('beforebegin', `
    <section class="spz-hero">
      <div class="spz-hero-wrapper">
        <div class="hero-info">
          <h6 class="section-label">EXPEL managed detection and response</h6>
          <h2 class="section-heading">Top-tier innovator in MDR services</h2>
          <p class="section-subhead" style="display:none">Protect your environment with unparalleled speed and accuracy — a 23-minute MTTR</p>

          <div class="hero-tiles-container">
            ${createHeroTiles()}
          </div>

          <div class="hero-buttons">
            <a href="https://expel.com/on-demand-mdr-demo/" class="cta-spz demo-cta" target="_self">
              Watch a demo
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                  <path d="M0 6.90002H18.4615" stroke="black" stroke-width="1.3"/>
                  <path d="M12.3081 0.746216L18.462 6.90006L12.3081 13.0539" stroke="black" stroke-width="1.3"/>
                </svg>                
            </a>
            <a href="https://expel.com/pricing/" class="cta-spz outline-button" target="_self">
                Get pricing
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                  <path d="M0 6.90002H18.4615" stroke="#33FF66" stroke-width="1.3"/>
                  <path d="M12.3081 0.746216L18.462 6.90006L12.3081 13.0539" stroke="#33FF66" stroke-width="1.3"/>
                </svg>
            </a>
          </div>

        </div>
      </div>
    </section>`);

  navigationSection();
}

// Create tiles from heroTiles array
function createHeroTiles() {
  return heroTiles.map(tile => {
    return `<a href="" class="hero-tile">
              <div class="ht-logo">
                <img src="${tile.logo}" alt="${tile.title}" />
              </div>
              <div class="ht-title">${tile.title}</div>
            </a>`;
  }).join('');
}

// Navigation Section
function navigationSection() {

  // Add spz-nav-sticky class to body once header reaches to bottom of '.spz-hero'
  const heroSection = document.querySelector('.spz-hero');
  const header = document.querySelector('.spz-1002 #hero-slider');
  const body = document.querySelector('body');

  window.addEventListener('scroll', function () {
    const heroSectionBottom = heroSection.getBoundingClientRect().bottom;
    const headerBottom = header.getBoundingClientRect().bottom;

    if (headerBottom >= heroSectionBottom) {
      body.classList.remove('spz-nav-sticky');
    } else {
      body.classList.add('spz-nav-sticky');
    }
  });

  // Add sticky class to body on page load
  body.classList.add('spz-nav-sticky');

  waitForElm('.expel-main-navigation .logo .site-branding').then(function () {
    // Update logo
    // document.querySelector('.expel-main-navigation .custom-logo-link .custom-logo').src = baseImgUrl + 'expel_logo.svg';

    document.querySelector('.expel-main-navigation .logo .site-branding').insertAdjacentHTML('afterbegin', `
      <a href="https://expel.com/" class="custom-logo-link spz-logo" rel="home" aria-current="page">
        <img width="257" height="83" src="${baseImgUrl}expel_logo.svg" class="custom-logo" alt="Expel">
      </a>`);
  });

  // Update search input placeholder
  document.querySelector('#site-top-navigation .search-field').placeholder = 'Search...';

  // Move '#header-mobile-menu .blue-button' to after '.expel-main-navigation .inner-container .logo' menu
  waitForElm('#header-mobile-menu .blue-button a').then(function (elm) {
    document.querySelector('.expel-main-navigation .inner-container .logo').insertAdjacentHTML('afterend', `
      <div class="spz-mobile-contact">
        ${elm.outerHTML}
      </div>`);
  });

  // Fix control navigation on window resize
  window.addEventListener('resize', function () {
    const deskNav = document.querySelector('#menu-main-menu');

    if (window.innerWidth > 1150) {
      // Desktop
      deskNav.removeAttribute('style');
      document.querySelector('#masthead').classList.remove('active');
      document.querySelector('html').style.overflowY = '';
      document.body.style.overflowY = '';
    } 
  });
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

// Do not touch below hidden field code for any Experiment
function hiddenValue(currentExperimentName, currentExperimentValue) {
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  var ExistingExperimentName = getCookie('ExperimentName');
  var ExistingExperimentValue = getCookie('ExperimentValue');

  if (!ExistingExperimentName) {

    setCookie('ExperimentName', currentExperimentName, 1);
    setCookie('ExperimentValue', currentExperimentValue, 1);

  } else if (ExistingExperimentName && !ExistingExperimentName.includes(currentExperimentName)) {

    setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
    setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);

  } else if (ExistingExperimentName && ExistingExperimentName.includes(currentExperimentName)) {

    var existingNames = ExistingExperimentName.split(',');
    var existingValues = ExistingExperimentValue.split(',');

    var index = existingNames.indexOf(currentExperimentName);
    existingValues[index] = currentExperimentValue;

    setCookie('ExperimentName', existingNames.join(','), 1);
    setCookie('ExperimentValue', existingValues.join(','), 1);
  }
}
// Do not touch below hidden field code for any Experiment over

// Use this and change value according to the experiment
hiddenValue('#1002 | Expel | Homepage | Hero Tiles', 'Variant_#1002');
