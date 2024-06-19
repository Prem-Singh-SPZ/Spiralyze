(function () {
    // document.body.classList.add('spz-2010');
    document.body.classList.add('spz-2014');

    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
    document.head.appendChild(link);

    // Create JSON array from testimonials HTML
    const testimonials = [
        {
            "quote": "We <b>reduced the time</b> for the receptionist to welcome each visitor <b>by 50%.</b> But the most important isn't the time we save, it's the time it gives us to <b>better welcome</b> our visitors.",
            "name": "Eric Van Lint",
            "designation": "Senior Alliance Manager",
            "company": "Dimension Data",
            "img": "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/2009/Eric_Van_Lint.png",
            "logo": "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/2009/logo_-_dimension_data.webp"
        },
        {
            "quote": "We once had a very paper-driven work order process where a <b>work request could take up to three and a half weeks</b> from the initial request to getting that work order into a tradesperson&#8217;s hands. <b>Now it takes three days.</b>",
            "name": "Murray Hunt",
            "designation": "Manager of Integrated Workplace Management Systems",
            "company": "Calgary Board of Education",
            "img": "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/2009/Murray_Hunt.png",
            "logo": "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/2009/logo_-_calgary_board_of_education.webp"
        },
        {
            "quote": "The biggest win for us is that <b>everyone is working with the same numbers</b>. Before, when we had multiple systems, we had multiple sets of numbers, which could sometimes cause trouble.",
            "name": "Julia Trimmer",
            "designation": "Senior IT Analyst",
            "company": "Duke",
            "img": "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/2009/Julia_Trimmer.png",
            "logo": "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/2009/logo_-_duke.webp"
        },
        {
            "quote": "It&#8217;s <b>user-friendly,</b> allows us to configure <b>different access levels</b> for different users, and it&#8217;s <b>cloud-based,</b> so we can retrieve information remotely and easily.",
            "name": "Josef Ong",
            "designation": "Regional Facilities Expert",
            "company": "Dnv",
            "img": "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/2009/Josef_Ong.png",
            "logo": "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/2009/logo_-_dnv.webp"
        },
        {
            "quote": "I&#8217;m used to organizations that book everything through Microsoft Outlook. There&#8217;s a <b>number of challenges in terms of clashes and having to manage a calendar</b> for every single space. <b>Having a unified system removes that</b> and it basically becomes automated.",
            "name": "Jon Cartledge",
            "designation": "IT Service Desk Manager",
            "company": "Pitcher Partners",
            "img": "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/2009/Jon_Cartledge.png",
            "logo": "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/2009/logo_-__pitcher_partners.webp"
        },
        {
            "quote": "The Software is <b>really easy to use</b> and makes me <b>feel confident about returning to the office.</b> I also like searching for colleagues who I like to work with from the mobile app.",
            "name": "Bruno Justo",
            "designation": "Commercial Manager",
            "company": "Wiserxp",
            "img": "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/2009/Bruno_Justo.png",
            "logo": "//res.cloudinary.com/spiralyze/image/upload/f_auto/eptura/2009/logo_-__wiserxp.webp"
        }
    ]

    waitForElm('body .body-wrapper').then(function () {
        document.body.classList.add('spz-2014');
        loadTest();
    });

    function loadTest() {
        // Add class 'safari' (used for cart scrollbar)
        if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            document.querySelector('body').classList.add('safari')
        }

        header();
        footer();
        formUpdate();
        trustedLogo();

        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
        document.head.appendChild(script);
    }

    function formUpdate() {
        document.querySelector('#HeroFormCol #HeroFormTitleText h2').innerHTML = `Get a <span>demo</span>`;
    }

    function trustedLogo() {
        document.querySelector('.body-wrapper .hero_container').insertAdjacentHTML('beforeend', `<div class="trusted-logo-container">
            <h4 class="tl-title">
                <span class="tlt-text">Trusted by 16,000+ customers worldwide<span>
            </h4>
            <div class="trusted-logo">
            <picture>
                <source srcset="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/eptura/2009/logo_set_-_desktop_1.svg" media="(min-width: 1200px)">
                <source srcset="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/eptura/2009/logo_set_-_tablet.svg" media="(min-width: 768px)">
                <img class="tl-logo" src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/eptura/2009/logo_set_-_mobile.svg" alt="Trusted Logo">
            </picture>
        </div>`);

        testimonial();
    }

    function testimonial() {
        document.querySelector('section .hero_container').insertAdjacentHTML('beforeend', `<div class="testimonial-section">
                <div class="container">
                    <div class="testimonial-main-section">
                        <div class="left-box">
                        <div class="reviews-main-box">
                            <div class="reviews-img-box">
                                <div class="capterra-img">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/eptura/2009/capterra_white.svg" alt="Capterra" title="Capterra">
                                </div>
                                <div class="star-img">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/eptura/2009/stars.svg" alt="Review Stars">
                                </div>
                            </div>
                            <div class="reviews-box">
                                <div class="star-img">
                                    <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/eptura/2009/stars.svg" alt="Review Stars">
                                </div>
                                <div class="star-rev"><b>4.4</b>(973 reviews)</div>
                            </div>
                        </div>
                        </div>
                        <div class="separator"></div>
                        <div class="right-box">
                            <div class="splide testimonial-wrapper" id="reviews-sec">
                                <div class="splide__arrows">
                                    <button class="splide__arrow splide__arrow--prev">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/eptura/2009/arrow-left.svg" alt="Previous">
                                    </button>
                                    <button class="splide__arrow splide__arrow--next">
                                        <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/eptura/2009/arrow-right.svg" alt="Next">
                                    </button>
                                </div>
                                <div class="splide__track">
                                    <ul class="splide__list">
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);

        // Append testimonials to the slider
        testimonials.forEach(testimonial => {
            document.querySelector('.testimonial-wrapper .splide__list').insertAdjacentHTML('beforeend', createTestimonialHTML(testimonial));
        });

        loadSlider();
    }

    function header() {
        document.querySelector('.body-wrapper').insertAdjacentHTML('afterbegin', `<div class="spz-header">
            <div class="spz-header-wrap">
                <img class="spz-header-logo" src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/eptura/2008/main_logo_1.svg" alt="Eptura">
            </div>
        </div>`);
    }

    function footer() {
        document.querySelector('.body-wrapper').insertAdjacentHTML('beforeend', `<div class="spz-footer">
            <div class="spz-footer-wrap">
                <ul class="spz-footer-links">
                    <li><a href="https://eptura.com/terms/saas-privacy-policy">SaaS Privacy Policy</a></li>
                    <li><a href="https://eptura.com/terms/privacy-policy/">Privacy Policy</a></li>
                    <li><a href="https://eptura.com/terms/modern-slavery/">Modern Slavery</a></li>
                </ul>
                <label class="spz-footer-copyright">All Rights Reserved © Eptura™</label>
            </div>
        </div>`);
    }

    // Create HTML content from JSON array
    function createTestimonialHTML(testimonial) {
        return `<li class="testimonial-item splide__slide">
            <div class="testimonial-item-inner">
                <div class="testimonials-item mobile-only">
                    <div class="img-wrapper">
                        <img src="${testimonial.img}" alt="${testimonial.name}">
                    </div>
                    <div class="testimonial-details">
                        <h3>${testimonial.name}</h3>
                        <p>${testimonial.designation}</p>
                    </div>
                </div>
                <p class="quotes">${testimonial.quote}</p>
                <div class="testimonial-info">
                    <div class="testimonials-item desktop-vs-only">
                        <div class="img-wrapper">
                            <img src="${testimonial.img}" alt="${testimonial.name}">
                        </div>
                        <div class="testimonial-details">
                            <h3>${testimonial.name}</h3>
                            <p>${testimonial.designation}</p>
                        </div>
                    </div>
                    <div class="testimonials-logo">
                        <img src="${testimonial.logo}" alt="${testimonial.company}">
                    </div>
                </div>
            </div>
        </li>`;
    }

    function loadSlider() {
        getScript("https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js", function () {
            new Splide("#reviews-sec", {
                start: 0,
                perPage: 2,
                perMove: 2,
                snap: false,
                pagination: true,
                gap: '64px',
                arrows: true,
                drag: true,
                autoplay: true,
                interval: 5000,
                type: 'loop',
                rewind: true,
                rewindByDrag: true,
                lazyLoad: true,
                pauseOnHover: false,
                breakpoints: {
                    // 1360: {
                    //     gap: '35px',
                    //     // height: '310px',
                    // },
                    1280: {
                        gap: '56px',
                        start: 0,
                        perPage: 2,
                        perMove: 2,
                        snap: false,

                    },
                    1199: {
                        gap: '56px',
                        start: 0,
                        perPage: 1.5,
                        perMove: 1,
                        snap: false,
                        arrows: false,
                    },
                    767: {
                        perPage: 1,
                        gap: '0px',
                    }
                }
            }).mount();
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

    function getScript(source, callback) {
        var el = document.createElement("script");
        el.onload = callback;
        el.src = source;
        document.body.appendChild(el);
    }

})();