let bodyLoaded = setInterval(function () {
  const body = document.querySelector('body');
  if (body) {
    clearInterval(bodyLoaded);
    if (!body.classList.contains('spz-1007')) {
      body.classList.add('spz-1007');
      waitForElm('.spz-1007 #horizontal-tabs').then(function () {
        intSection();
      });
    }
  }
});

// Hero Section
function intSection() {
  if (document.querySelectorAll('.spz-1007 .spz-int').length > 0)
    return;

  document.querySelector('.spz-1007 #horizontal-tabs').insertAdjacentHTML('afterend', `
    <section class="spz-int">
      <div class="spz-int-wrapper">
        <div class="int-info">
          <h6 class="section-label">Integrations</h6>
          <h2 class="section-heading">Your entire environment: covered</h2>
          <p class="section-subhead">Detect risks across your tech stack, including endpoints, cloud, Kubernetes, SaaS, SIEM, and networks.</p>
          <div class="int-buttons">
            <a href="https://expel.com/on-demand-mdr-demo/" class="cta-spz demo-cta" target="_self">
              Watch a demo
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M0.5 7H18.9615" stroke="#ffffff" stroke-width="1.3"/>
                <path d="M12.8081 0.846191L18.962 7.00004L12.8081 13.1539" stroke="#ffffff" stroke-width="1.3"/>
              </svg>  
            </a>
            <a href="https://expel.com/integrations/" class="cta-spz contact-cta" target="_self">
              Learn more
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                  <path d="M0.5 7H18.9615" stroke="#1762E6" stroke-width="1.3"/>
                  <path d="M12.8081 0.846191L18.962 7.00004L12.8081 13.1539" stroke="#1762E6" stroke-width="1.3"/>
                </svg>
            </a>
          </div>
        </div>
        <div class="int-image">
          <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/expel/1007/image.webp" alt="Expel MDR" />
        </div>
      </div>
    </section>
  `);
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
hiddenValue('#1007 | Expel | Homepage | Integrations', 'variant_#1007');
