let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
      clearInterval(bodyLoaded);
      if (!body.classList.contains('spz_2001')) {
          body.classList.add('spz_2001');
            waitForElm('.spz_2001 .zy-homepage-hero-container').then(function () {
              if (document.querySelectorAll(".spz-homepage-hero").length == 0) {
                document.querySelector('.spz_2001 .zy-homepage-hero-container').insertAdjacentHTML("beforebegin", `<div class="spz-homepage-hero">
                  <div class="zy-container">
                    <div class="hero-text-container">
                      <h2 class="hero-heading">Powering the Modern Insurance Lifecycle.</h2>
                      <h6 class="hero-content-text">The insurance industry is at a critical tipping point. The bold few are revolutionizing a stagnant industry, reinvigorating their businesses and transforming the insurance sales cycle... forever.</h6>
                      <button class="hero-CTA">Get a demo</button>
                    </div>
                    <div class="hero-image-container">
                      <picture>
                        <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2001/frame_1000003360.webp">
                        <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2001/frame_1000003362.webp">
                        <source media="(min-width: 1px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2001/hero_vector_mobile_new.png">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2001/frame_1000003360.webp" class="hero-img" alt="Powering the Modern Insurance Lifecycle.">
                      </picture>
                    </div>
                  </div>
                  <div class="hero-customers-logo zy-container">
                    <h4 class="hero-logo-heading">Join 15,000+ insurers, agencies, and service providers using Zywave</h4>
                    <div class="hero-logos">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2001/new_logos/Lockton_Logo.png" class="hero-logo-item" alt="Lockton">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2001/new_logos/decisely_logo.png" class="hero-logo-item" alt="Decisely">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2001/new_logos/logo-reliance-rev.png" class="hero-logo-item" alt="Reliance Partners">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2001/new_logos/amwins_logo.png" class="hero-logo-item" alt="AMWINS">
                      <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2001/new_logos/Henderson_Brothers.png" class="hero-logo-item" alt="Henderson Brothers">
                    </div>
                  </div>
                </div>
                <div class="spz-hero-bottom-shape">
                  <picture>
                    <source media="(min-width: 1601px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2001/line_7.webp">
                    <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2001/line_6.webp">
                    <source media="(min-width: 426px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2001/line-768.png">
                    <source media="(min-width: 1px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2001/line-375.png">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/2001/line-1920.png" alt="Hero Bottom Shape">
                  </picture>
                </div>`);
              }
              document.addEventListener('click', function(event) {
                if (event.target.classList.contains('hero-CTA') && event.target.closest('.spz_2001 .spz-homepage-hero')) {
                  var demoLink = document.querySelector('.zy-header-container-inner .zy-top-demo-container > a');
                  if (demoLink) {
                    demoLink.click();
                  }
                }
              });
            });
        
        //Hidden field added here
         waitForElm('.spz_2001 .zy-marketo-form-container .mktoForm input[name="cR02"]').then(function () {
           document.querySelector(`.spz_2001 .zy-marketo-form-container .mktoForm input[name="cR02"]`).setAttribute("value", "2001_variant");
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