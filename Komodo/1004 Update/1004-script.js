function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function () {
  if (!document.querySelector('.spz-1004')) {
    document.querySelector('body').classList.add('spz-1004')
    //targeted page
    if (window.location.href.indexOf('https://www.komodohealth.com/contact-us') > -1) {
      document.querySelector('body .body-container .row-depth-1.row-number-5.dnd_area-row-2-padding').insertAdjacentHTML('afterbegin', `
    <div class="new-slider-wrapper">
      <div class="stats-slider">
        <div class="wrapper">
            <div class="slider-wrapper">
                <section class="splide splide1">
                    <div class="splide__track">
                        <ul class="splide__list">
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                            330 M+
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                           Patients in the US
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        15 M
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        Healthcare encounters every day
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        30%
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        More unique patients 
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        40%
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        More clinical encounters per patient
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        15 M
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        Healthcare encounters every day
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        6 yr
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        Average historical patient
                                        journey data
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        3.5 M+
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        Providers across care settings
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        450 K
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        HCOS across the continuum of care
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        100%
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        Medicare data as a CMS
                                         qualified entity
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        15-20
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        Years of publication
                                         and clinical trial data
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        11 B
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        Lab records
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="child">
                                    <div class="top-text">
                                        <div class="l-number">
                                        1300
                                        </div>
                                    </div>
                                    <div class="bottom-text">
                                        <div class="card-text">
                                        Hospital chargemaster &
                                        in-hospital sources
                                        </div>
                                    </div>
                                </div>
                            </li>
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
    </div>
    `);

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
    else {
      let elementArray = [];
      for (let i = 0; i < document.querySelectorAll('a[href="#popup_contact_us"]').length; i++) {
        elementArray[i] = document.querySelectorAll('a[href="#popup_contact_us"]')[i];
      }
      for (let i = 0; i < elementArray.length; i++) {
        elementArray[i].setAttribute("href", "https://www.komodohealth.com/contact-us?hs_preview=CdkDwRWl-165496376225");
        elementArray[i].removeAttribute("rel");
      }
    }
  }
})
