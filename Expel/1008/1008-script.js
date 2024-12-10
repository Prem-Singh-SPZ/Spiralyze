var css = `.spz_1008 .rotating-title-hero .row .content .section-subhead {
    margin-bottom: 35px !important;
  }
    .spz_1008 .hero .hero-buttons {
    gap: 16px !important;
  }
  .spz_1008 .hero-buttons .spz-watch-button {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 177px;
    height: 48px;
    margin: 0;
    padding: 0;
    background: #1762E6;
    border-radius: 72px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    transition: 200ms ease all;
  }
  .spz_1008 .hero-buttons .spz-watch-button svg,
  .spz_1008 .hero-buttons .spz-package-button svg {
    margin-left: 8px;
  }
  .spz_1008 .hero-buttons .spz-watch-button:hover {
    background: #0E4C8A;
  }
  .spz_1008 .hero-buttons .spz-package-button {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 221px;
    height: 48px;
    margin: 0;
    padding: 0;
    border-radius: 72px;
    border: 1px solid #1762E6;
    background: #FFF;
    color: #1762E6;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    transition: 200ms ease all;
  }
  .spz_1008 .hero-buttons .spz-package-button:hover {
    background: #0E4C8A;
    border-color: #0E4C8A;
    color: #FFF;
  }
  .spz_1008 .hero-buttons .spz-package-button:hover svg path {
    stroke: #FFF;
  }
  .spz_1008 .hero .graphic .spz-play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 64px;
    height: 64px;
    z-index: 9;
    cursor: pointer;
    transition: 600ms ease all;
    box-shadow: 0px 4px 61.8px 0px rgba(0, 0, 0, 0.25);
    border-radius: 72px;
  }
  .spz_1008 .hero .graphic:hover .spz-play-icon {
    transform: translate(-50%, -50%) scale(1.125);
    box-shadow: 0px 4.5px 70px 0px rgba(0, 0, 0, 0.45);
  }
  .spz_1008 .hero .graphic .spz-play-icon img {
    pointer-events: none;
  }
  @media(max-width: 1039.98px) {
    .spz_1008 .rotating-title-hero .row .content .section-subhead {
      margin-bottom: 32px !important;
    }
    .spz_1008 .hero .hero-buttons {
      margin-bottom: 15px;
    }
  }
  @media(max-width: 488.98px) {
    .spz_1008 .rotating-title-hero .row .content .section-subhead {
      margin-bottom: 24px !important;
    }
    .spz_1008 .hero .hero-buttons {
      margin-bottom: 8px;
    }
    .spz_1008 .hero-buttons a {
      width: 100% !important;
      height: 44px !important;
    }
    .spz_1008 .hero .graphic .spz-play-icon {
      width: 40px;
      height: 40px;
    }
  }
    
  .spz_1008 section#quotes-slider {
			display: none;
		}

		.spz_1008 .spz-testimonials {
			margin-top: 18px;
		}

		.spz_1008 .spz-testimonials-wrapper {
			width: 100%;
			margin: 0 auto;
		}

		.spz_1008 .spz-testimonials .demo-cta {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			width: 177px;
			height: 48px;
			margin: 76px auto 0;
			background: #1762E6;
			border-radius: 72px;
			color: #FFF;
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: 1.5;
			transition: 200ms ease all;
		}

		.spz_1008 .spz-testimonials .demo-cta:hover {
			background: #0E4C8A;
		}

		.spz_1008 .spz-testimonials .demo-cta svg {
			margin-left: 8px;
		}

		.spz_1008 .spz-testimonials .splide {
			position: relative;
		}

		.spz_1008 .spz-testimonials .splide::before,
		.spz_1008 .spz-testimonials .splide::after {
			position: absolute;
			content: "";
			width: 281px;
			height: calc(100% + 88px);
			top: 50%;
			left: 0;
			transform: translateY(-50%);
			background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 246, 246, 0) 100%);
			z-index: 9;
			pointer-events: none;
		}

		.spz_1008 .spz-testimonials .splide::after {
			left: auto;
			right: 0;
			transform: rotate(-180deg) translateY(50%);
		}

		.spz_1008 .spz-testimonials .testimonial-item {
			background: #F4F4F4;
			border-radius: 16px;
			padding: 32px;
		}

		.spz_1008 .testimonial-item .testimonial-copy {
			display: flex;
			flex-wrap: wrap;
			align-content: center;
			width: 100%;
			height: 72px;
			overflow: hidden;
			color: #031263;
			text-overflow: ellipsis;
			font-size: 18px;
			font-style: normal;
			font-weight: 400;
			line-height: 24px;
			margin-bottom: 20px;
		}

		.spz_1008 .testimonial-item .author-content {
			display: flex;
			flex-wrap: nowrap;
			flex-flow: row;
			align-items: center;
			justify-content: space-between;
			gap: 20px;
		}

		.spz_1008 .testimonial-item .author-content .author-name {
			color: #031263;
			font-size: 18px;
			font-style: normal;
			font-weight: 700;
			line-height: 24px;
			margin: 0 0 4px;
		}

		.spz_1008 .testimonial-item .author-content .author-designation {
			color: #031263;
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: 1.5;
		}

		.spz_1008 .testimonial-item .author-content .author-company {
			display: inline-flex;
			width: auto;
			height: auto;
		}

		.spz_1008 .testimonial-item .author-content .company-logo {
			width: auto;
			height: 46px;
			object-fit: contain;
		}

		@media (max-width: 767.98px) {
			.spz_1008 .spz-testimonials .splide__arrows {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				width: 100%;
				max-width: 1440px;
				padding: 0 23px;
				margin: 0 auto;
				position: absolute;
				left: 0;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
				z-index: 10;
			}

			.spz_1008 .spz-testimonials .splide__arrow {
				position: relative;
				width: 56px;
				height: 56px;
				left: unset;
				top: unset;
				transform: unset !important;
				background: #fff;
				border: 1.5px solid #1762E6;
				outline: none;
				display: inline-flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				opacity: 1 !important;
				z-index: 99;
				transition: 200ms ease all;
			}

			.spz_1008 .spz-testimonials .splide__arrow.splide__arrow--next {
				transform: rotate(180deg) !important;
			}

			.spz_1008 .spz-testimonials .splide__arrow.splide__arrow--next {
				right: 0;
			}
		}

		@media (min-width: 767.98px) {
			.spz_1008 .spz-testimonials .splide__arrows .splide__arrow {
				/* display: flex; */
				/* flex-wrap: wrap; */
				/* justify-content: space-between; */
				/* width: 100%; */
				max-width: 1440px;
				/* padding: 0 23px; */
				margin: 0 auto;
				/* position: absolute;
				left: 0;
				right: 0; */
				/* top: 50%; */
				/* transform: translateY(-50%); */
				z-index: 10;
			}

			.spz_1008 .spz-testimonials .splide__arrow {
				/* position: relative; */
				width: 56px;
				height: 56px;
				/* left: unset;
				top: unset; */
				transform: unset !important;
				background: #FFF;
				border: 1.5px solid #1762E6;
				outline: none;
				/* display: inline-flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center; */
				opacity: 1 !important;
				z-index: 99;
				transition: 200ms ease all;
			}

			.spz_1008 .spz-testimonials .splide__arrow.splide__arrow--prev {
				top: calc(50% - 28px);
				left: 20px;
			}

			.spz_1008 .spz-testimonials .splide__arrow.splide__arrow--next {
				transform: rotate(180deg) !important;
				top: calc(50% - 28px);
				right: 20px;
			}
		}

		@media (min-width: 1023.98px) {
			.spz_1008 .spz-testimonials .splide__arrow.splide__arrow--prev {
				left: 23px;
				top: calc(50% - 28px);
			}

			.spz_1008 .spz-testimonials .splide__arrow.splide__arrow--next {
				transform: rotate(180deg) !important;
				top: calc(50% - 28px);
				right: 23px;
			}
		}

		.spz_1008 .spz-testimonials .splide__arrow:hover {
			border: 2px solid #0E4C8A;
		}

		.spz_1008 .spz-testimonials .splide__arrow svg {
			transform: none;
			width: 100%;
			height: 100%;
		}

		.spz_1008 .spz-testimonials .splide__arrow svg path {
			transition: 200ms ease all;
		}

		.spz_1008 .spz-testimonials .splide__arrow:hover svg path {
			fill: #0E4C8A;
		}

		.spz_1008 .spz-testimonials .splide__pagination {
			bottom: -36px;
			padding: 0;
		}

		.spz_1008 .spz-testimonials .splide__pagination li {
			display: inline-flex;
		}

		.spz_1008 .spz-testimonials .splide__pagination button {
			width: 50px;
			height: 4px;
			border-radius: 8px;
			background: #1762E6;
			opacity: 0.4;
			transform: none;
			margin: 0 6px;
		}

		.spz_1008 .spz-testimonials .splide__pagination button.is-active {
			opacity: 1;
		}

		.spz_1008 .icon-boxes-vertical {
			padding-top: 131px;
		}

		@media(min-width: 1601px) {
			.spz_1008 .spz-testimonials {
				margin-top: 36px;
			}

			.spz_1008 .spz-testimonials .splide::before,
			.spz_1008 .spz-testimonials .splide::after {
				width: 34.01%;
				height: calc(100% + 90px);
			}

			.spz_1008 .spz-testimonials .splide__arrows {
				position: relative;
				margin: 0 auto;
				max-width: 1440px;
				top: -86px;
			}

			.spz_1008 .icon-boxes-vertical {
				padding-top: 157px;
			}
		}

		@media(min-width: 2000px) {
			.spz_1008 .spz-testimonials .splide__arrows {
				max-width: 85vw;
			}
		}

		@media(max-width: 1023.98px) {
			.spz_1008 .spz-testimonials {
				margin-top: 29px;
			}

			.spz_1008 .spz-testimonials .splide::before,
			.spz_1008 .spz-testimonials .splide::after {
				width: 141px;
				height: calc(100% + 32px);
			}

			.spz_1008 .spz-testimonials .splide__arrows {
				padding: 0 20px;
			}

			.spz_1008 .icon-boxes-vertical {
				padding-top: 113px;
			}
		}

		@media(max-width: 767.98px) {
			.spz_1008 .spz-testimonials {
				margin-top: 25px;
			}

			.spz_1008 .spz-testimonials-wrapper {
				padding: 0 18px;
			}

			.spz_1008 .testimonial-item .testimonial-copy {
				align-content: flex-start;
				height: 96px;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 4;
				align-self: stretch;
				text-overflow: ellipsis;
			}

			.spz_1008 .testimonial-item .author-content .author-designation {
				font-size: 14px;
				line-height: 22px;
			}

			.spz_1008 .testimonial-item .author-content .author-company {
				width: 98px;
				min-width: 98px;
			}

			.spz_1008 .testimonial-item .author-content .company-logo {
				height: 34px;
			}

			.spz_1008 .spz-testimonials .splide::before,
			.spz_1008 .spz-testimonials .splide::after {
				display: none;
			}

			.spz_1008 .spz-testimonials .splide__arrows {
				padding: 0;
				top: unset;
				bottom: -56px;
				transform: none;
			}

			.spz_1008 .spz-testimonials .splide__arrow {
				width: 24px;
				height: 24px;
			}

			.spz_1008 .spz-testimonials .splide__pagination {
				bottom: -46px;
				z-index: 11;
			}

			.spz_1008 .spz-testimonials .splide__pagination button {
				width: 16px;
			}

			.spz_1008 .spz-testimonials .demo-cta {
				width: 100%;
				margin-top: 96px;
			}

			.spz_1008 .icon-boxes-vertical {
				padding-top: 119px;
			}
		}`;
head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
style.appendChild(document.createTextNode(css));

const sliderSettings = {
    type: 'loop',
    fixedWidth: '550px',
    padding: '30.90%',
    gap: 32,
    perPage: 1,
    focus: 'center',
    speed: 1000,
    arrows: true,
    autoplay: false,
    pagination: true,
    pauseOnHover: false,
    breakpoints: {
        1023: {
            padding: '14.193%',
        },
        767: {
            gap: 18,
            padding: 0,
            fixedWidth: null,
            perPage: 1,
        },
    },
};

const slides = [
    {
        reviewCopy: 'We save 10-15 hours every week by cutting out the unnecessary alerts. It’s freed up 25% of the team’s hours.',
        authorName: 'James Zhou',
        authorDesignation: 'SVP of Technical Operations & Security',
        companyLogo: '//res.cloudinary.com/spiralyze/image/upload/f_auto/expel/1004/frame_1171275572.webp',
        companyLogoAlt: 'The Meet Group',
    },
    {
        reviewCopy: 'Without Expel, we’d probably need another 2-3 people on the team and more shifts at an annual cost of about $180,000.',
        authorName: 'Marcus Brown',
        authorDesignation: 'Infrastructure and Security Manager',
        companyLogo: '//res.cloudinary.com/spiralyze/image/upload/f_auto/expel/1004/frame_1171275573.webp',
        companyLogoAlt: 'Make A Wish',
    },
    {
        reviewCopy: 'Expel helps us tune our environment for current and future threats. They’re committed to our security and success.',
        authorName: 'Cristine Ford',
        authorDesignation: 'Head of Information Security',
        companyLogo: '',
        companyLogoAlt: '',
    },
    {
        reviewCopy: 'Reduced our ingestion of logs by 75%— saving on license fees and becoming more proactive along the way.',
        authorName: 'Patrick Gilbert',
        authorDesignation: 'Senior Director, Information Security',
        companyLogo: '//res.cloudinary.com/spiralyze/image/upload/f_auto/expel/1004/frame_1171275575.webp',
        companyLogoAlt: 'Rona',
    },
    {
        reviewCopy: 'We were spending 10+ hours per week manually investigating phish reports. Now, the Expel team handles the heavy lifting.',
        authorName: 'Anonymous',
        authorDesignation: 'Vice President of Security Operations',
        companyLogo: '',
        companyLogoAlt: '',
    },
    {
        reviewCopy: 'Expel has become an extension of our team, making my team’s job easier while letting us focus on securing our infrastructure.',
        authorName: 'Mark Strosahl',
        authorDesignation: 'Chief Information Security Officer',
        companyLogo: '',
        companyLogoAlt: '',
    },
    {
        reviewCopy: 'Helped us beat our MTTR by more than 60%. Since they have eyes on alerts, we could focus on maturing our security capabilities. It just wasn’t possible without Expel.',
        authorName: 'Lewis McIntyre',
        authorDesignation: 'Director, Global Security Services',
        companyLogo: '//res.cloudinary.com/spiralyze/image/upload/f_auto/expel/1004/frame_1171275574.webp',
        companyLogoAlt: 'Markel',
    },
    {
        reviewCopy: 'Expel has helped us reduce irrelevant, low-quality alerts by about 80%.',
        authorName: 'Anonymous',
        authorDesignation: 'Senior Information Security Manager',
        companyLogo: '',
        companyLogoAlt: '',
    },
];

const sectionSelector = `.spz_1008 #logos-slider`
const placement = 'after'

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
function insertBefore(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode);
}
function addReviewRibbon(sliderSettings, slides, whereToAdd, selector) {
    var reviewRibbon = document.createElement('section');
    reviewRibbon.classList.add('spz-testimonials');
    reviewRibbon.innerHTML = `
    <div class="spz-testimonials-wrapper">
        <div class="splide" role="group">
            <div class="splide__track">
                <div class="splide__list testimonials-list">
                    ${slides.map((slide) => {
        return `
                            <div class="splide__slide testimonial-item">
                                ${slide.reviewCopy.replace(/\s/g, '').length !== 0 ? `<p class="testimonial-copy">“${slide.reviewCopy}”</p>` : ``}
                                <div class="author-content">
                                    <div class="author-info">
                                        ${slide.authorName.replace(/\s/g, '').length !== 0 ? `<h4 class="author-name">${slide.authorName}</h4>` : ``}
                                        ${slide.authorDesignation.replace(/\s/g, '').length !== 0 ? `<h6 class="author-designation">${slide.authorDesignation}</h6>` : ``}
                                    </div>
                                        ${slide.companyLogo.replace(/\s/g, '').length !== 0 ? `
                                        <div class="author-company">
                                            <img src="${slide.companyLogo}" ${slide.companyLogoAlt.replace(/\s/g, '').length !== 0 ? `alt="${slide.companyLogoAlt}"` : ``} class="company-logo">
                                        </div>` : ``}
                                </div>
                            </div>
                        `;
    }).join('')}
                </div>
            </div>
    <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev custom-arrow">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.3675 26.7715L28.7715 19.3675C29.316 18.8775 30.1326 18.8775 30.6226 19.3675L31.8747 20.6196C32.3647 21.1096 32.3647 21.9807 31.8747 22.4707L26.5939 27.697L31.8747 32.9779C32.3647 33.4679 32.3647 34.2845 31.8747 34.8289L30.6226 36.0266C30.1326 36.571 29.316 36.571 28.7715 36.0266L21.3675 28.6226C20.8775 28.1326 20.8775 27.316 21.3675 26.7715Z" fill="#1762E6"/>
                        </svg>
        </button>
        <button class="splide__arrow splide__arrow--next custom-arrow">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.3675 26.7715L28.7715 19.3675C29.316 18.8775 30.1326 18.8775 30.6226 19.3675L31.8747 20.6196C32.3647 21.1096 32.3647 21.9807 31.8747 22.4707L26.5939 27.697L31.8747 32.9779C32.3647 33.4679 32.3647 34.2845 31.8747 34.8289L30.6226 36.0266C30.1326 36.571 29.316 36.571 28.7715 36.0266L21.3675 28.6226C20.8775 28.1326 20.8775 27.316 21.3675 26.7715Z" fill="#1762E6"/>
                        </svg>
        </button>
    </div>
        </div>
    </div>`;
    if (whereToAdd === 'after') insertAfter(reviewRibbon, document.querySelector(selector));
    new Splide('.splide', sliderSettings).mount();
}

let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz_1008')) {
            body.classList.add('spz_1008');

            var splideScript = document.createElement('script');
            splideScript.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
            var splideStyle = document.createElement('link');
            splideStyle.rel = 'stylesheet';
            splideStyle.type = 'text/css';
            splideStyle.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
            document.body.appendChild(splideScript);
            document.body.appendChild(splideStyle);

            splideScript.onload = function () {
                waitForElm(sectionSelector).then(function (elm) {
                    addReviewRibbon(sliderSettings, slides, placement, sectionSelector);
                });
            };

            // Do not touch below hidden field code for any Experiment (Set Hidden Filed Value)
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
            hiddenValue('#1008 | Expel | Homepage | CTA Copy 2', 'variant_#1008');
            // Do not touch below hidden field code for any Experiment over (Set Hidden Filed Value)

            waitForElm('.spz_1008 .hero .hero-buttons').then(function (ele) {
                ele.innerHTML = `<a href="https://expel.com/on-demand-mdr-demo/" class="spz-watch-button" target="_self">Watch a demo<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10H18.4615" stroke="white" stroke-width="1.3"/><path d="M12.3081 3.84619L18.462 10L12.3081 16.1539" stroke="white" stroke-width="1.3"/></svg></a>
          <a href="https://expel.com/mdr-packages/" class="spz-package-button" target="_self">View MDR packages<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10H18.4615" stroke="#1762E6" stroke-width="1.3"/><path d="M12.3081 3.84619L18.462 10L12.3081 16.1539" stroke="#1762E6" stroke-width="1.3"/></svg></a>`;
                document.querySelector('.spz_1008 .hero .graphic').insertAdjacentHTML('afterbegin', `<span class="spz-play-icon"><img src="//res.cloudinary.com/spiralyze/image/upload/v1732112248/expel/1008/frame_1000003385.svg" alt="Play Icon"></span>`);
                document.querySelector('.spz_1008 .hero .graphic .spz-play-icon').onclick = () => document.querySelector('.spz_1008 #videoModal').style.display = 'flex';
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