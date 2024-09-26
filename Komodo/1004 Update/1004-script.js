function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

const loadJS = (url, implementationCode, location) => {
    var scriptTag = document.createElement('script');
    scriptTag.src = url;

    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
};

const gb_load_css = (path) => {
    let css = document.createElement('link');
    css.rel = 'stylesheet';
    css.media = 'all';
    css.href = path;

    document.getElementsByTagName('head')[0].appendChild(css);
}
gb_load_css("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css");

//create a json for slider with two attributes
let sliderData = {
    "slider": [
        {
            "topText": "265M",
            "bottomText": "Patients with self-identified race and ethnicity ",
        },
        {
            "topText": "10K",
            "bottomText": "Unique health <br>insurance plans",
        },
        {
            "topText": "76%",
            "bottomText": "Rx-to-Mx <br>match rate",
        },
        {
            "topText": "160M",
            "bottomText": "Closed, linkable lives <br>per year",
        },
        {
            "topText": "330M+",
            "bottomText": "Patients in the US",
        },
        {
            "topText": "16M",
            "bottomText": "Healthcare encounters <br>everyday",
        },
        {
            "topText": "7+ years",
            "bottomText": "Average historical patient <br>journey data",
        },
        {
            "topText": "6.5M",
            "bottomText": "Individual HCPs",
        },
        {
            "topText": "1.7M",
            "bottomText": "Unique HCOs",
        },
        {
            "topText": "8B",
            "bottomText": "Lab records",
        },
        {
            "topText": "698",
            "bottomText": "Hospital/owned facilities' itemized charge data",
        },
        {
            "topText": "100%",
            "bottomText": "Medicare data as a CMS <br>qualified entity",
        },
        {
            "topText": "23",
            "bottomText": "Years of publication and <br>clinical trial data",
        },
        {
            "topText": "60+",
            "bottomText": "Data Sources",
        },
    ]
};

ready(function () {
    if (!document.querySelector('.spz-1004')) {
        document.querySelector('body').classList.add('spz-1004')
        //targeted page
        if (window.location.href.indexOf('https://www.komodohealth.com/contact-us') > -1) {
            document.querySelector('body .body-container .row-depth-1.row-number-8.dnd_area-row-2-padding').insertAdjacentHTML('afterbegin', `
      <div class="new-slider-wrapper">
      <div class="stats-slider">
          <div class="wrapper">
              <div class="slider-wrapper">
                  <section class="splide splide1">
                      <div class="splide__track">
                          <ul class="splide__list">
                              ` + getSliderHTML(sliderData) + `
                          </ul>
                      </div>
                  </section>
                  <div class="arrow-left"><img
                          src="//res.cloudinary.com/spiralyze/image/upload/v1711606638/komodohealth/1004/arrow_left.svg"
                          alt="Left Arrow" width="68" height="68" /></div>
                  <div class="arrow-right"><img
                          src="//res.cloudinary.com/spiralyze/image/upload/v1711606638/komodohealth/1004/arrow_right.svg"
                          alt="Right Arrow" width="68" height="68" /></div>
              </div>
          </div>
      </div>
        <div class="support-cta-wrapper">
            <div class="support-cta">
                <div class="support-cta-text">
                  Need help? 
                </div>
                <div class="support-cta-button">
                    <a href="https://www.komodohealth.com/support" class="spz-cta">Contact Customer Support</a>
                </div>
            </div>
        </div>
  </div>
    `);

            loadJS('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js', function () {
                if (typeof (Splide)) {
                    var splide = new Splide('.spz-1004 .new-slider-wrapper .stats-slider .slider-wrapper .splide1', {
                        type: 'loop',
                        perPage: 3,
                        autoplay: true,
                        arrows: false,
                        autoHeight: true,
                        pagination: false,
                        breakpoints: {
                            767: {
                                perPage: 1,
                                pagination: true,
                                arrows: false,
                            }
                        }
                    });
                    setTimeout(function () {
                        splide.mount()
                    }, 200)

                    document.querySelector('.spz-1004 .new-slider-wrapper .stats-slider .slider-wrapper .arrow-left img').addEventListener("click", function () {
                        splide.go('<');
                    })
                    document.querySelector('.spz-1004 .new-slider-wrapper .stats-slider .slider-wrapper .arrow-right img').addEventListener("click", function () {
                        splide.go('>');
                    })
                }
            }, document.body)


            let i = 0;
            const CROInterval = setInterval(() => {

                if (document.querySelector('.spz-1004 #new-form-wrapper input[name="cro1"]')) {
                    clearInterval(CROInterval)
                    document.querySelector('.spz-1004 #new-form-wrapper input[name="cro1"]').value = "#1001_variant"
                }
                i++;
                if (i > 6) {
                    clearInterval(CROInterval)
                }
            }, 500);
        }
        //non targeted page
        // else {
        //     let elementArray = [];
        //     for (let i = 0; i < document.querySelectorAll('a[href="#popup_contact_us"]').length; i++) {
        //         elementArray[i] = document.querySelectorAll('a[href="#popup_contact_us"]')[i];
        //     }
        //     for (let i = 0; i < elementArray.length; i++) {
        //         elementArray[i].setAttribute("href", "https://www.komodohealth.com/contact-us?hs_preview=CdkDwRWl-165496376225");
        //         elementArray[i].removeAttribute("rel");
        //     }
        // }
    }
})

//return a html for slider using json data
function getSliderHTML(data) {
    let html = '';
    data.slider.forEach((item) => {
        html += `
        <li class="splide__slide">
            <div class="child">
                <div class="top-text">
                    <div class="l-number">
                        ${item.topText}
                    </div>
                </div>
                <div class="bottom-text">
                    <div class="card-text">
                        ${item.bottomText}
                    </div>
                </div>
            </div>
        </li>
        `;
    });
    return html;
}