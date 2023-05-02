(function () {

    const pageInt = setInterval(() => {
        if (document.querySelectorAll('.hbspt-form form .hs-label-spz').length > 0) {
            clearInterval(pageInt);
            moveElement('.hero-section', '#main-content');
            appendSections();

            document.querySelector('.footer-cookie').addEventListener("click", function (e) {
                document.querySelector('.osano-cm-window__widget').click();
            });

            document.body.classList.add('spz-4002');
            updateHeroContents();
            updateInputLabel();
            focusFields();
            removeStyleTags();
        }
    }, 100);


    //function to add all the sections
    function appendSections() {
        document.querySelector('.body-wrapper.hs-page #main-content .hero-section').insertAdjacentHTML('afterend', footerSection());
        document.querySelector('.body-wrapper.hs-page #main-content .hero-section').insertAdjacentHTML('afterend', reviewCard());
        document.querySelector('.body-wrapper.hs-page #main-content .hero-section').insertAdjacentHTML('afterend', integrationSection());
        document.querySelector('.body-wrapper.hs-page #main-content .hero-section').insertAdjacentHTML('afterend', logoSection());
        document.querySelector('.body-wrapper.hs-page #main-content .hero-section').insertAdjacentHTML('afterend', featureSection());
        // document.querySelector('.body-wrapper.hs-page #main-content').insertAdjacentHTML('afterbegin', heroSection());
    }

    function appendFavicon() {
        document.querySelector('head').insertAdjacentHTML("afterbegin", `
        <link rel="shortcut icon" href="https://drata.com/images/favicon.ico">
        <link rel="icon" type="image/png" sizes="256x256" href="https://drata.com/images/favicon-256x256.png">
        <link rel="icon" type="image/png" sizes="48x48" href="https://drata.com/images/favicon-48x48.png">
        <link rel="icon" type="image/png" sizes="32x32" href="https://drata.com/images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="https://drata.com/images/favicon-16x16.png">
        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1681388733/drata/4001/System_Icons_open.svg" as="image">`
        );
    }

    appendFavicon();

    // Remove all style tags without id in header
    function removeStyleTags() {
        // Remove link tag which contains main.min.css or Social_follow.min.css in href attribute
        document.querySelectorAll('link').forEach(function (el) {
            if (el.href.indexOf('4001-style.min.css') > -1) {
                el.remove();
            }
        });
    }

    // Create input label with placeholder text
    function updateInputLabel() {
        document.querySelectorAll('.hs-input:not([type="checkbox"])').forEach(function (el) {
            const label = el.parentElement.querySelector("label");
            label.innerHTML = (label.textContent.split('*')[0] + '&nbsp;*');
        });
    }

    // On input focus add class on closest parent .field class
    function focusFields() {
        document.querySelectorAll('.hs-input').forEach(function (el) {
            el.addEventListener('focus', function () {
                el.closest('.field').classList.add('field-focus');
            });
            el.addEventListener('blur', function () {
                el.closest('.field').classList.remove('field-focus');
                checkError();
            });
        });
    }

    // Function to add .field-error class on closest parent .field class if .error is exist on .hs-input
    function checkError() {
        document.querySelectorAll('.hs-input').forEach(function (el) {
            if (el.closest('.field').querySelector('.error') != null) {
                el.closest('.field').classList.add('field-error');
            } else {
                el.closest('.field').classList.remove('field-error');
            }
        });
    }

    // Scroll to element on click
    window.addEventListener("click", function (e) {
        if (e.target.classList.contains("get-started-btn")) {
            let scrollOffset = window.innerWidth > 1199 ? 100 : 120;
            if (window.innerWidth > 1199) {
                scrollToElement('.form-wrapper-spz', scrollOffset);
            } else {
                document.querySelector('.form-wrapper-spz').scrollIntoView({ behavior: "smooth" });
            }

        }
    });

    // Function to Scroll to position using smooth scroll vanilla JS
    // target: Element to scroll to
    // offset: Offset from the top of the element
    function scrollToElement(target, offset) {
        const targetElm = document.querySelector(target);
        const targetElmOffset = targetElm.offsetTop - offset;
        window.scrollTo({
            top: targetElmOffset,
            behavior: 'smooth'
        });
    }

    // Load again if device rotate 
    window.onorientationchange = function () {
        var orientation = window.orientation;
        switch (orientation) {
            case 0:
            case 90:
            case -90: initSwiper();
                break;
        }
    };

    function moveElement(sourceElm, targetLoc) {
        const f = document.createDocumentFragment();
        if (document.querySelector(sourceElm) != null) {
            f.appendChild(document.querySelector(sourceElm));
            document.querySelector(targetLoc).appendChild(f);
        }
    }

    function footerSection() {
        return `<section class="footer">
    <div class="footer-top">
        <h2 class="sec-title border-title">Ready to Put Compliance on Autopilot?</h2>
        <button class="get-started-btn">Get Started</button>
    </div>
    <div class="brand-footer container dis-flex flex-wrap justify-content-between">
        <div class="footer-brand-info">
            <a href="https://drata.com/"><img
                    src="https://res.cloudinary.com/spiralyze/image/upload/v1682676285/drata/4002/custom_assets/Drata-full-wordmark.svg"
                    class="brand-logo" alt="Drata" title="Drata" draggable="false"></a>
            <p class="brand-desc">Drata is a security and compliance automation platform that continuously monitors and
                collects evidence of a company&rsquo;s security controls, while streamlining workflows to ensure
                audit-readiness.</p>
        </div>
        <div class="brand-social-links dis-flex justify-content-between flex-wrap">
            <a href="https://www.youtube.com/channel/UCL7xTQRHuxO3M5dHHOjhfMA" target="_blank" class="social-item"
                rel="noopener">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1680678527/drata/6001/social_media_-_youtube.svg"
                    alt="youtube" title="youtube" class="social-icon">
            </a>
            <a href="https://www.linkedin.com/company/drata/" target="_blank" class="social-item" rel="noopener">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1680678528/drata/6001/social_media_-_linkedin.svg"
                    alt="linkedin" title="linkedin" class="social-icon">
            </a>
            <a href="https://twitter.com/dratahq" target="_blank" class="social-item" rel="noopener">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1680678530/drata/6001/social_media_-_twitter.svg"
                    alt="twitter" title="twitter" class="social-icon">
            </a>
        </div>
    </div>
    <hr>
    <div class="footer-bottom container dis-flex justify-content-between">
        <p class="copyright-text">© 2023 Drata Inc. All rights reserved.</p>
        <div class="footer-legalLinks">
            <a href="https://drata.com/privacy">Privacy Policy</a>
            <a href="https://drata.com/gdprdrata">GDPR</a>
            <a href="https://drata.com/terms">Terms</a>
            <a href="https://drata.com/cookies">Cookies</a>
            <a class="footer-cookie">Cookie Preferences</a>
            <a href="https://drata.com/responsible-disclosure">Disclosure Policy</a>
            <a href="https://drata.com/sub-processors">Sub-processors</a>
            <a href="https://drata.com/data-processing-addendum">Data Processing Addendum</a>
        </div>
    </div>
</section>`
    }

    function reviewCard() {
        return `<section class="review-section">
<div class="container">
    <h2 class="sec-title border-title">See What Our Customers Say About Drata</h2>
</div>
<div class="review-slider dis-flex justify-content-between container">
    <div class="review-item-box review-info-box">
        <div class="review-content">
        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1680678527/drata/6001/logo_-_g2.svg"
        alt="G2" title="G2" class="g2-logo">
        <h4 class="r-title">Excellent</h4>
        <p class="r-numbers">Based on <span>398 reviews</span></p>
        <img src="https://res.cloudinary.com/spiralyze/image/upload/v1682075796/drata/4002/rating-50.svg"
        alt="Rating Stars" title="Rating Stars" class="avg-star-rating">
        </div>
    </div>
    <div class="review-item-box">
        <div class="review-content">
            <div class="rating dis-flex"><img
                    src="https://res.cloudinary.com/spiralyze/image/upload/v1682075796/drata/4002/rating-50.svg"
                    alt="Rating Stars" title="Rating Stars" class="star-rating"> <span>5.0/5</span></div>
            <p class="review">“Drata's platform simplifies compliance. In our case, we used Drata for SOC2 and for GDPR. It literally saved us hundreds of hours and many dollars in consulting fees.”</p>
            <h6 class="review-author">Lav C.</h6>
        </div>
    </div>
    <div class="review-item-box">
        <div class="review-content">
            <div class="rating dis-flex"><img
                    src="https://res.cloudinary.com/spiralyze/image/upload/v1682075796/drata/4002/rating-50.svg"
                    alt="Rating Stars" title="Rating Stars" class="star-rating"><span>5.0/5</span></div>
            <p class="review">“I would never want to go through SOC2 again without Drata. Even now that we are done with our first SOC2, Drata continuously monitors our controls and alerts us to issues.”</p>
            <h6 class="review-author">Angela S.</h6>
        </div>
    </div>
    <div class="review-item-box">
        <div class="review-content">
            <div class="rating dis-flex"><img
                    src="https://res.cloudinary.com/spiralyze/image/upload/v1682075796/drata/4002/rating-50.svg"
                    alt="Rating Stars" title="Rating Stars" class="star-rating"><span>5.0/5</span></div>
            <p class="review">“Drata allowed our startup to get a huge head start on SOC2 and PCI compliance. Drata saved us months of reinventing the wheel of what they provide out of the box.“</p>
            <h6 class="review-author">Matt R. </h6>
        </div>
    </div>
</div>
</section>`
    }

    function integrationSection() {
        return `<section class="integrations-section">
    <div class="container">
    <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-true css-1yqq5sj-MuiGrid-root-Section-gridItem" data-testid="Section-ContentItem">
	<div class="MuiBox-root css-dwssr9-Collection-root" data-testid="Collection-integrations" id="4O2EqkfZkMR1kQlDwDjIlT" gutterwidth="default" data-csk-entry-id="4O2EqkfZkMR1kQlDwDjIlT" data-csk-entry-type="collection" data-csk-entry-display-text="Collection">
		<div class="MuiContainer-root MuiContainer-maxWidthLg css-1o00hxm-MuiContainer-root-Collection-contentContainer">
			<div class="MuiBox-root css-op7sus-Text-rootWrapper-Collection-introText">
				<h2 class="MuiTypography-root MuiTypography-body1 MuiTypography-alignDefault css-17jd2ru-MuiTypography-root-Text-title">75+ Native <br>Integrations</h2></div>
			<div class="MuiBox-root css-8z2x31-Collection-itemsContainer" id="items">
				<div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-ipcq2m-MuiPaper-root-MuiCard-root-Card-root-Collection-item" data-testid="Card" data-csk-entry-id="4os0JTuIzzw7sCEeodZe45" data-csk-entry-type="card" data-csk-entry-display-text="Card" position="1">
					<div class="MuiCardContent-root css-15t3sex-MuiCardContent-root-Card-cardContent">
						<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-mceo4z-MuiSvgIcon-root-Card-angledArrowIcon" focusable="false" aria-hidden="true" viewBox="0 0 53 55" width="53" height="55" fill="none">
							<g clip-path="url(#clip0_2209_14883)">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M42.2228 41.2902V19.003L7.62023 55L0 47.0727L34.2669 11.4248H12.839V0.213234L53 1.36937e-06V41.2902H42.2228Z" fill="#C0FF60"></path>
							</g>
							<defs>
								<clipPath id="clip0_2209_14883">
									<rect width="55" height="53" fill="white" transform="translate(0 55) rotate(-90)"></rect>
								</clipPath>
							</defs>
						</svg>
						<h3 class="MuiTypography-root MuiTypography-h3 css-5onkdd-MuiTypography-root-Card-title" data-csk-entry-id="4os0JTuIzzw7sCEeodZe45" data-csk-entry-field="title" data-csk-entry-type="card" data-csk-entry-display-text="Title" data-testid="Card-title">150K+</h3>
						<h4 class="MuiTypography-root MuiTypography-h4 css-1f920qz-MuiTypography-root-Card-subtitle" data-csk-entry-id="4os0JTuIzzw7sCEeodZe45" data-csk-entry-field="subtitle" data-csk-entry-type="card" data-csk-entry-display-text="Subtitle" data-testid="Card-subtitle">Assets Tracked</h4></div>
				</div>
				<div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-ipcq2m-MuiPaper-root-MuiCard-root-Card-root-Collection-item" data-testid="Card" data-csk-entry-id="6Se8XWn5Zf2OkOgsNvvrbM" data-csk-entry-type="card" data-csk-entry-display-text="Card" position="2">
					<div class="MuiCardContent-root css-15t3sex-MuiCardContent-root-Card-cardContent">
						<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-mceo4z-MuiSvgIcon-root-Card-angledArrowIcon" focusable="false" aria-hidden="true" viewBox="0 0 53 55" width="53" height="55" fill="none">
							<g clip-path="url(#clip0_2209_14883)">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M42.2228 41.2902V19.003L7.62023 55L0 47.0727L34.2669 11.4248H12.839V0.213234L53 1.36937e-06V41.2902H42.2228Z" fill="#C0FF60"></path>
							</g>
							<defs>
								<clipPath id="clip0_2209_14883">
									<rect width="55" height="53" fill="white" transform="translate(0 55) rotate(-90)"></rect>
								</clipPath>
							</defs>
						</svg>
						<h3 class="MuiTypography-root MuiTypography-h3 css-5onkdd-MuiTypography-root-Card-title" data-csk-entry-id="6Se8XWn5Zf2OkOgsNvvrbM" data-csk-entry-field="title" data-csk-entry-type="card" data-csk-entry-display-text="Title" data-testid="Card-title">7.3M</h3>
						<h4 class="MuiTypography-root MuiTypography-h4 css-1f920qz-MuiTypography-root-Card-subtitle" data-csk-entry-id="6Se8XWn5Zf2OkOgsNvvrbM" data-csk-entry-field="subtitle" data-csk-entry-type="card" data-csk-entry-display-text="Subtitle" data-testid="Card-subtitle">Controls Tested</h4></div>
				</div>
				<div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-ipcq2m-MuiPaper-root-MuiCard-root-Card-root-Collection-item" data-testid="Card" data-csk-entry-id="2SQmknwAPXWw2s174Glq95" data-csk-entry-type="card" data-csk-entry-display-text="Card" position="3"><a class="MuiButtonBase-root MuiCardActionArea-root css-1robkoz-MuiButtonBase-root-MuiCardActionArea-root-Card-cardLink" href="https://community.drata.com/" tabindex="0" id="3xc1vUIPw7hm5ZRgXEclEj"><span class="MuiCardActionArea-focusHighlight css-1v2exvi-MuiCardActionArea-focusHighlight"></span><span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></a>
					<div class="MuiCardContent-root css-15t3sex-MuiCardContent-root-Card-cardContent">
						<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-mceo4z-MuiSvgIcon-root-Card-angledArrowIcon" focusable="false" aria-hidden="true" viewBox="0 0 53 55" width="53" height="55" fill="none">
							<g clip-path="url(#clip0_2209_14883)">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M42.2228 41.2902V19.003L7.62023 55L0 47.0727L34.2669 11.4248H12.839V0.213234L53 1.36937e-06V41.2902H42.2228Z" fill="#C0FF60"></path>
							</g>
							<defs>
								<clipPath id="clip0_2209_14883">
									<rect width="55" height="53" fill="white" transform="translate(0 55) rotate(-90)"></rect>
								</clipPath>
							</defs>
						</svg>
						<h3 class="MuiTypography-root MuiTypography-h3 css-5onkdd-MuiTypography-root-Card-title" data-csk-entry-id="2SQmknwAPXWw2s174Glq95" data-csk-entry-field="title" data-csk-entry-type="card" data-csk-entry-display-text="Title" data-testid="Card-title">500K+</h3>
						<h4 class="MuiTypography-root MuiTypography-h4 css-1f920qz-MuiTypography-root-Card-subtitle" data-csk-entry-id="2SQmknwAPXWw2s174Glq95" data-csk-entry-field="subtitle" data-csk-entry-type="card" data-csk-entry-display-text="Subtitle" data-testid="Card-subtitle">Drata Users</h4></div>
				</div>
			</div>
		</div>
	</div>
</div>
    </div>
    <div class="integrations-logo-slider">
        <div class="logo-slider slider-1">
            <div class="marquee">
                <div class="logo-item"><a href="https://azure.microsoft.com/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-05.svg"
                            alt="Microsoft Azure Icon" title="Microsoft Azure Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://zenefits.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5HEz4y1udEGYnO0eibspYk/fbb47801b6a3cd023a57cf2b2cd1e051/Zenefits.svg"
                            alt="Zenefits Icon" title="Zenefits Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://slack.com/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-03.svg"
                            alt="Slack Icon" title="Slack Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.vmware.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6ghWRvTfUjV2flZvxovptR/312d823d4429ce594c8afc2827a70a8d/VMWare.svg"
                            alt="VMWare Icon" title="VMWare Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://trinet.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2FMVuM0KCs7RsDr2IPjhqF/61121febfba493b32b1f6c5f900f9209/Trinet.svg"
                            alt="TriNet Icon" title="TriNet Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://trello.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5zMuHhR3E2aiZfqTkO1ed3/e85334a72dcecdee984c52a57d7a3378/Trello.svg"
                            alt="Trello Icon" title="Trello Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.microsoft.com/en-us/microsoft-teams/group-chat-software">
                        <img src="https://images.ctfassets.net/x3hoqyjm3c27/1ny04CQJN3FOZdTp89pxZw/7d01cb80b89b053898d735af71cf1f58/Teams.svg"
                            alt="Teams Icon" title="Teams Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://targetprocess.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/j17tLavKCokadNZep2HWw/f6b876dd195577e7762ace18b71485f2/Target_Process.svg"
                            alt="Target Process Icon" title="Target Process Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://github.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/eoDwv9YT0L0xVLBwOs7jz/bf8417fb445a57d05c9a07b1e2d4795c/GitHub.svg"
                            alt="GitHub Icon" title="GitHub Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://trinet.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2FMVuM0KCs7RsDr2IPjhqF/61121febfba493b32b1f6c5f900f9209/Trinet.svg"
                            alt="TriNet Icon" title="TriNet Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://zenefits.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5HEz4y1udEGYnO0eibspYk/fbb47801b6a3cd023a57cf2b2cd1e051/Zenefits.svg"
                            alt="Zenefits Icon" title="Zenefits Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://kandji.io"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6jfWKLq2FLiLi8yFMFKToJ/6e943847c017289439b18832866c27e5/Kandji.svg"
                            alt="Kandji Icon" title="Kandji Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://trello.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5zMuHhR3E2aiZfqTkO1ed3/e85334a72dcecdee984c52a57d7a3378/Trello.svg"
                            alt="Trello Icon" title="Trello Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://targetprocess.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/j17tLavKCokadNZep2HWw/f6b876dd195577e7762ace18b71485f2/Target_Process.svg"
                            alt="Target Process Icon" title="Target Process Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://asana.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4AywjJ45ChGvt914VTVRg0/d3668c690f0579ace0a8ec43dd408f93/Asana.svg"
                            alt="Asana Icon" title="Asana Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.pivotaltracker.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7b5hRZXKShzNIUifYRWFRj/03f87d99e7fd406ec78d3fbc144be67d/Pivotal_Tracker.svg"
                            alt="Pivotal Tracker Icon" title="Pivotal Tracker Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://slack.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/3NsOT2ldsxJ7lJybdv0Lvu/8de68801d5ae5de21c94380e38ff562e/Slack.svg"
                            alt="Slack Icon" title="Slack Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://hibob.com"> <img
                            src="https://drata.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fx3hoqyjm3c27%2F5ZEwcHDFb0PI7da7bhW1ZD%2F9c92e77d9797f3b095d1de6a9e9452b7%2Fbob.jpg&amp;w=1920&amp;q=75"
                            alt="bob" title="bob" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://jamf.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/72w2ysC4mUb1Hk0jrBEPA4/d8702afcac5c51a1b89867eb06d274f9/Jamf.svg"
                            alt="Jamf Icon" title="Jamf Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://azure.microsoft.com/en-us/services/devops/boards"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2t0Y8KvZrGmppkyjhU745v/1f4bdfa327d4ad8c08b449cf92b77a93/Azure_Boards.svg"
                            alt="Azure Boards Icon" title="Azure Boards Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://hrcloud.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/3niLnSkUmuV4GU0B9dBXk3/e8159c4ed82c5a15eb03e333375944ab/HR_Cloud.svg"
                            alt="HR Cloud" title="HR Cloud" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://partner.microsoft.com/solutions/microsoft-intune"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/1MuvHxX2pPoaPF6sjRvwyq/eb9f73b61d3fdba38933876f22fd58a1/Microsoft_Intune.svg"
                            alt="Microsoft Intune Icon" title="Microsoft Intune Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://jumpcloud.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7EU4m6XXeeC3VqRlzP2O84/5d5915c803e81fa2ef5b38969045c94e/Jumpcloud.svg"
                            alt="Jumpcloud Icon" title="Jumpcloud Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://fibery.io"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2RxrtWFRDB4cQXF0KR4z6j/5f5b7cd1cee11f4f66e6b915a28fdbc7/Fibery.svg"
                            alt="Fibery Icon" title="Fibery Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.curricula.com/Drata"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/ENF4IzawKtDhHjzBXV1LZ/1de34620ae2d562f86353ad39ecdd511/Curricula.svg"
                            alt="Curricula Icon" title="Curricula Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://aws.amazon.com/codecommit"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/1mpnz9ejTuF3q3Ok7GSleB/a3af3897b5aeeee16d57b080fd9b79cf/AWS_CodeCommit.svg"
                            alt="AWS CodeCommit Icon" title="AWS CodeCommit Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a
                        href="https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services">
                        <img src="https://images.ctfassets.net/x3hoqyjm3c27/4c8ykyQP5mIyBUWEQATGsT/50ed2825a414682d223f4fe156a0b9d6/Microsoft_ADFS.svg"
                            alt="Microsoft ADFS Icon" title="Microsoft ADFS Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.vmware.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6ghWRvTfUjV2flZvxovptR/312d823d4429ce594c8afc2827a70a8d/VMWare.svg"
                            alt="VMWare Icon" title="VMWare Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://support.google.com/a/answer/6087519?hl=en"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2muiSD2rMJDxJt19qA53Rb/ac724303a51a1014b7a7ff7c19b8d79a/Google_SAML.svg"
                            alt="Google SAML Icon" title="Google SAML Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.miniorange.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2Nc97XsYLSORu06R2FGYYk/87a72747caf927986ee7bc69d1a35d24/MiniOrange.svg"
                            alt="MiniOrange Icon" title="MiniOrange Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.hexnode.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4bkvc72qa3YJuR40iitlbX/a1a728b12f0ebe42dda84f6bac541202/Hexnode.svg"
                            alt="Hexnode Icon" title="Hexnode Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.adp.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/1TSBbV829d4hJPdotTfqoW/a5b46b7040944f5fca46f416fb5db83d/ADP.svg"
                            alt="ADP" title="ADP" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://duo.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4rxkNkFgCNGZIjutTkMBIy/192c2bdce6a3ab00333b710e43deb06c/Duo.svg"
                            alt="Duo Icon" title="Duo Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.keycloak.org"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5yUJZdVNKbLo3AGJWFN6gR/517e8f24323002ddee25b9fb23314860/Keycloak.svg"
                            alt="Keycloak Icon" title="Keycloak Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.idmobile.co.uk/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-07.svg"
                            alt="ID Mobile Icon" title="ID Mobile Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.oracle.com/cloud"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/3HFGxQBF3smp9CZf2vpGvI/7e70fab8fc11370a82a620dbece09116/Oracle.svg"
                            alt="Oracle-Cloud" title="Oracle-Cloud" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.microfocus.com/en-us/cyberres/identity-access-management">
                        <img src="https://images.ctfassets.net/x3hoqyjm3c27/78jxiiurk8VxZmOGPJkT5i/21cd094590a99033c7c9d8443512642d/NetIQ.svg"
                            alt="NetIQ Icon" title="NetIQ Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.okta.com/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-06.svg"
                            alt="Octa Icon" title="Octa Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://slack.com/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-03.svg"
                            alt="Slack Icon" title="Slack Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.cloudflare.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/mWJNtbGYfotV84jbwWexJ/8bf2f96e13b9c95dae9d32d26abe9b28/Cloudflare.svg"
                            alt="Cloudflare Icon" title="Cloudflare Icon" class="logo-media"> </a></div>
            </div>
            <div class="marquee">
                <div class="logo-item"><a href="https://azure.microsoft.com/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-05.svg"
                            alt="Microsoft Azure Icon" title="Microsoft Azure Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://zenefits.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5HEz4y1udEGYnO0eibspYk/fbb47801b6a3cd023a57cf2b2cd1e051/Zenefits.svg"
                            alt="Zenefits Icon" title="Zenefits Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://slack.com/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-03.svg"
                            alt="Slack Icon" title="Slack Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.vmware.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6ghWRvTfUjV2flZvxovptR/312d823d4429ce594c8afc2827a70a8d/VMWare.svg"
                            alt="VMWare Icon" title="VMWare Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://trinet.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2FMVuM0KCs7RsDr2IPjhqF/61121febfba493b32b1f6c5f900f9209/Trinet.svg"
                            alt="TriNet Icon" title="TriNet Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://trello.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5zMuHhR3E2aiZfqTkO1ed3/e85334a72dcecdee984c52a57d7a3378/Trello.svg"
                            alt="Trello Icon" title="Trello Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.microsoft.com/en-us/microsoft-teams/group-chat-software">
                        <img src="https://images.ctfassets.net/x3hoqyjm3c27/1ny04CQJN3FOZdTp89pxZw/7d01cb80b89b053898d735af71cf1f58/Teams.svg"
                            alt="Teams Icon" title="Teams Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://targetprocess.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/j17tLavKCokadNZep2HWw/f6b876dd195577e7762ace18b71485f2/Target_Process.svg"
                            alt="Target Process Icon" title="Target Process Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://github.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/eoDwv9YT0L0xVLBwOs7jz/bf8417fb445a57d05c9a07b1e2d4795c/GitHub.svg"
                            alt="GitHub Icon" title="GitHub Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://trinet.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2FMVuM0KCs7RsDr2IPjhqF/61121febfba493b32b1f6c5f900f9209/Trinet.svg"
                            alt="TriNet Icon" title="TriNet Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://zenefits.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5HEz4y1udEGYnO0eibspYk/fbb47801b6a3cd023a57cf2b2cd1e051/Zenefits.svg"
                            alt="Zenefits Icon" title="Zenefits Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://kandji.io"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6jfWKLq2FLiLi8yFMFKToJ/6e943847c017289439b18832866c27e5/Kandji.svg"
                            alt="Kandji Icon" title="Kandji Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://trello.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5zMuHhR3E2aiZfqTkO1ed3/e85334a72dcecdee984c52a57d7a3378/Trello.svg"
                            alt="Trello Icon" title="Trello Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://targetprocess.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/j17tLavKCokadNZep2HWw/f6b876dd195577e7762ace18b71485f2/Target_Process.svg"
                            alt="Target Process Icon" title="Target Process Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://asana.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4AywjJ45ChGvt914VTVRg0/d3668c690f0579ace0a8ec43dd408f93/Asana.svg"
                            alt="Asana Icon" title="Asana Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.pivotaltracker.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7b5hRZXKShzNIUifYRWFRj/03f87d99e7fd406ec78d3fbc144be67d/Pivotal_Tracker.svg"
                            alt="Pivotal Tracker Icon" title="Pivotal Tracker Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://slack.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/3NsOT2ldsxJ7lJybdv0Lvu/8de68801d5ae5de21c94380e38ff562e/Slack.svg"
                            alt="Slack Icon" title="Slack Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://hibob.com"> <img
                            src="https://drata.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fx3hoqyjm3c27%2F5ZEwcHDFb0PI7da7bhW1ZD%2F9c92e77d9797f3b095d1de6a9e9452b7%2Fbob.jpg&amp;w=1920&amp;q=75"
                            alt="bob" title="bob" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://jamf.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/72w2ysC4mUb1Hk0jrBEPA4/d8702afcac5c51a1b89867eb06d274f9/Jamf.svg"
                            alt="Jamf Icon" title="Jamf Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://azure.microsoft.com/en-us/services/devops/boards"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2t0Y8KvZrGmppkyjhU745v/1f4bdfa327d4ad8c08b449cf92b77a93/Azure_Boards.svg"
                            alt="Azure Boards Icon" title="Azure Boards Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://hrcloud.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/3niLnSkUmuV4GU0B9dBXk3/e8159c4ed82c5a15eb03e333375944ab/HR_Cloud.svg"
                            alt="HR Cloud" title="HR Cloud" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://partner.microsoft.com/solutions/microsoft-intune"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/1MuvHxX2pPoaPF6sjRvwyq/eb9f73b61d3fdba38933876f22fd58a1/Microsoft_Intune.svg"
                            alt="Microsoft Intune Icon" title="Microsoft Intune Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://jumpcloud.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7EU4m6XXeeC3VqRlzP2O84/5d5915c803e81fa2ef5b38969045c94e/Jumpcloud.svg"
                            alt="Jumpcloud Icon" title="Jumpcloud Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://fibery.io"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2RxrtWFRDB4cQXF0KR4z6j/5f5b7cd1cee11f4f66e6b915a28fdbc7/Fibery.svg"
                            alt="Fibery Icon" title="Fibery Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.curricula.com/Drata"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/ENF4IzawKtDhHjzBXV1LZ/1de34620ae2d562f86353ad39ecdd511/Curricula.svg"
                            alt="Curricula Icon" title="Curricula Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://aws.amazon.com/codecommit"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/1mpnz9ejTuF3q3Ok7GSleB/a3af3897b5aeeee16d57b080fd9b79cf/AWS_CodeCommit.svg"
                            alt="AWS CodeCommit Icon" title="AWS CodeCommit Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a
                        href="https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services">
                        <img src="https://images.ctfassets.net/x3hoqyjm3c27/4c8ykyQP5mIyBUWEQATGsT/50ed2825a414682d223f4fe156a0b9d6/Microsoft_ADFS.svg"
                            alt="Microsoft ADFS Icon" title="Microsoft ADFS Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.vmware.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6ghWRvTfUjV2flZvxovptR/312d823d4429ce594c8afc2827a70a8d/VMWare.svg"
                            alt="VMWare Icon" title="VMWare Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://support.google.com/a/answer/6087519?hl=en"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2muiSD2rMJDxJt19qA53Rb/ac724303a51a1014b7a7ff7c19b8d79a/Google_SAML.svg"
                            alt="Google SAML Icon" title="Google SAML Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.miniorange.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2Nc97XsYLSORu06R2FGYYk/87a72747caf927986ee7bc69d1a35d24/MiniOrange.svg"
                            alt="MiniOrange Icon" title="MiniOrange Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.hexnode.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4bkvc72qa3YJuR40iitlbX/a1a728b12f0ebe42dda84f6bac541202/Hexnode.svg"
                            alt="Hexnode Icon" title="Hexnode Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.adp.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/1TSBbV829d4hJPdotTfqoW/a5b46b7040944f5fca46f416fb5db83d/ADP.svg"
                            alt="ADP" title="ADP" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://duo.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4rxkNkFgCNGZIjutTkMBIy/192c2bdce6a3ab00333b710e43deb06c/Duo.svg"
                            alt="Duo Icon" title="Duo Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.keycloak.org"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5yUJZdVNKbLo3AGJWFN6gR/517e8f24323002ddee25b9fb23314860/Keycloak.svg"
                            alt="Keycloak Icon" title="Keycloak Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.idmobile.co.uk/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-07.svg"
                            alt="ID Mobile Icon" title="ID Mobile Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.oracle.com/cloud"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/3HFGxQBF3smp9CZf2vpGvI/7e70fab8fc11370a82a620dbece09116/Oracle.svg"
                            alt="Oracle-Cloud" title="Oracle-Cloud" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.microfocus.com/en-us/cyberres/identity-access-management">
                        <img src="https://images.ctfassets.net/x3hoqyjm3c27/78jxiiurk8VxZmOGPJkT5i/21cd094590a99033c7c9d8443512642d/NetIQ.svg"
                            alt="NetIQ Icon" title="NetIQ Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.okta.com/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-06.svg"
                            alt="Octa Icon" title="Octa Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://slack.com/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-03.svg"
                            alt="Slack Icon" title="Slack Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.cloudflare.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/mWJNtbGYfotV84jbwWexJ/8bf2f96e13b9c95dae9d32d26abe9b28/Cloudflare.svg"
                            alt="Cloudflare Icon" title="Cloudflare Icon" class="logo-media"> </a></div>
            </div>
        </div>
        <div class="logo-slider slider-2">
            <div class="marquee">
                <div class="logo-item"><a href="https://www.classlink.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2z8B1MBnbJ57JJnzLwzQzO/937956a7bff57b6f36f1566d4b0cc27f/ClassLink.svg"
                            alt="ClassLink Icon" title="ClassLink Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.cyberark.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6BucdBQzl1ifxDbcQ74yxW/0dfda945e8b6ddfb603fb8b9e3d02f03/Cyberark.svg"
                            alt="CyberArk Icon" title="CyberArk Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.salesforce.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7scZzeKmdkiEU8zPdfyIwG/4ed43e22fd4eb785e6878f0b80d278fb/Salesforce.svg"
                            alt="Salesforce Icon" title="Salesforce Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.datadoghq.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/10U7tHmGPv76JdPlnD7Tl9/8dff4d600dad28410e10df4883738784/Datadog.svg"
                            alt="Datadog Icon" title="Datadog Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.docusign.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2lKF75KyDJq20zRFvOJfqt/9cbfd0601957e871237807d10d7656c8/Docusign2.svg"
                            alt="Docusign Icon" title="Docusign Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.knowbe4.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6Yp68cE1DWONMFujzRpDS7/ef9c94f72a78b1981b0d247dede0fe3d/KnowBe4.svg"
                            alt="KnowBe4 Icon" title="KnowBe4 Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.idmobile.co.uk/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-07.svg"
                            alt="ID Mobile Icon" title="ID Mobile Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://asana.com/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384451/drata/6001/Logo-New-08.svg"
                            alt="Asana Icon" title="Asana Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://aws.amazon.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2PLTU1dIjdttcowa2vximY/fd2d3b006dc7352e72dc4f2eda03a429/AWS.svg"
                            alt="AWS Integration Icon" title="AWS Integration Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.office.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7F75j5NuQNUiyaUf3jp2uA/59a6c87062bec3144d1034119c71465f/Office365.svg"
                            alt="Office365 Icon" title="Office365 Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://cloud.google.com/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-01.svg"
                            alt="Google Cloud Icon" title="Google Cloud Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.atlassian.com/software/jira"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-02.svg"
                            alt="Jira Cloud Icon" title="Jira Cloud Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.heroku.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5tV8ZcXcsy0znbf9o49tr3/26c77c96cfdead9b454232768b200d9b/Heroku.svg"
                            alt="Heroku Icon" title="Heroku Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.mongodb.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5r9v2xXxffZvpImpVXTFMH/fb3ed22ea983ace1110e558ed3b7f72d/MongoDB.svg"
                            alt="MongoDB Icon" title="MongoDB Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://cloud.google.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7Lm5wrS3fRMe2yUeCls0ly/8395ad79cd49e9c1298da28f83f63da9/GCP.svg"
                            alt="Google Cloud Provider Icon" title="Google Cloud Provider Icon" class="logo-media"> </a>
                </div>
                <div class="logo-item"><a href="https://azure.microsoft.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2Pg7qb7YnFFVCEdSFTLRxa/5fa2b6b5a19ce7d0d30ba50e6d573ec5/Azure.svg"
                            alt="Azure Icon" title="Azure Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://gusto.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/142KAgkI9ALVWSvbrXR3aI/6ab36ae718c2ba4c58ef0442a6ee16fd/Gusto.svg"
                            alt="Gusto Icon" title="Gusto Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://rippling.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4GyKiQzxdxJHMzrE6b3W8v/90c00285a1091a94b54ca48bc4f56101/Rippling.svg"
                            alt="Rippling Icon" title="Rippling Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://bamboohr.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4GQVsp96tBxfx9CTU7Zdft/219ab2a368e64bff04bf20dcae7aa35b/BambooHR.svg"
                            alt="BambooHR Icon" title="BambooHR Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://justworks.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6pnkAjBGmdFrvrnDmvvrXC/c6b06dfce807a2e5bdef640870d9a8d6/Justworks.svg"
                            alt="Justworks Icon" title="Justworks Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://linear.app/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/29qH7phJuVe2SWXafNTksn/c9bfd7313eb8429c7de7b40238d56ed0/Linear.svg"
                            alt="Linear Icon" title="Linear Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://gitlab.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2F8kH4uTqIXYd8l2o9nJZS/527655bb3a6310ec89aef1371133ccf0/GitLab.svg"
                            alt="GitLab Icon" title="GitLab Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://github.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/eoDwv9YT0L0xVLBwOs7jz/bf8417fb445a57d05c9a07b1e2d4795c/GitHub.svg"
                            alt="GitHub Icon" title="GitHub Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.freshworks.com/hrms"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4JS6qX6NywCVe3T9xOw5wd/a11ee331c1a035f8fd1eb36ace8ad876/Freshteam.svg"
                            alt="Freshteam Icon" title="Freshteam Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://cloud.google.com/identity"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5RPgBnW5vJzrKaFLddgw60/c6b426ad755118b9e0fb1cbeb9b707d2/Google_Cloud_Identity.svg"
                            alt="Google Cloud Identity Icon" title="Google Cloud Identity Icon" class="logo-media"> </a>
                </div>
                <div class="logo-item"><a href="https://gitlab.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2F8kH4uTqIXYd8l2o9nJZS/527655bb3a6310ec89aef1371133ccf0/GitLab.svg"
                            alt="GitLab Icon" title="GitLab Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://bitbucket.org/product"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/9TEURxCRYNYCcRVVQ0SY4/e950c12488f77d93f23f37089d7b6abf/Bitbucket.svg"
                            alt="Bitbucket Icon" title="Bitbucket Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://auth0.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/24MseNidVOQVfs04FLVxDM/47e42cddadcbda5b0ef72c28d7daa209/Auth0.svg"
                            alt="Auth0 Icon" title="Auth0 Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://okta.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/27gogN0UNqQlGz6Fa6e7QI/43ca209eeda1f202c610f1339c4079e5/Okta_Icon.svg"
                            alt="Okta Icon" title="Okta Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://azure.microsoft.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/w79FmT6REFNnkaAXhiNdo/a54280fc4703de7cd8deecb8668ff262/Azure_Active_Directory.svg"
                            alt="Azure Active Directory Icon" title="Azure Active Directory Icon" class="logo-media">
                    </a></div>
                <div class="logo-item"><a href="https://azure.microsoft.com/en-us/services/devops"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/3ihf8MiGyMaP27hzSnHHis/0ab7c9369f2eb86a3390dafd34971b2b/Azure_DevOps.svg"
                            alt="Azure DevOps Icon" title="Azure DevOps Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.atlassian.com/software/jira"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/1tL8t8RgViv0sdi2pj4OYh/15089b58cbde25dd071b8e07b0419e60/Jira.svg"
                            alt="Jira Icon" title="Jira Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://certn.co/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5pc1bJEsE7xMYZoTE7W1E2/df8a5ffb9b5d64006694ffd431d65622/Certn.svg"
                            alt="Certn Icon" title="Certn Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://karmacheck.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/3AMXwTyew7bWlGYY3I3oKm/df28f542a9268c8e2524fdde93cd817e/Karmacheck.svg"
                            alt="Karmacheck Icon" title="Karmacheck Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.onelogin.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/46l8F2OYzzieehKBFbh0iF/c4f13fe0f926448644d2164916cdbb4b/Onelogin.svg"
                            alt="Onelogin Icon" title="Onelogin Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://azure.microsoft.com/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-05.svg"
                            alt="Microsoft Azure Icon" title="Microsoft Azure Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://shortcut.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4bgLwZHGFLGcSnfcZ4LNO8/062526c303724042e5b45815c3bbf95f/Shortcut-1.svg"
                            alt="Shortcut Icon" title="Shortcut Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://clickup.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4SgO0NVAIKyeOC0Gj2rx6s/0c9ae8b96975cbd6af0681596e8a2d7e/ClickUp.svg"
                            alt="ClickUp Icon" title="ClickUp Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://checkr.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6EXzsCr6EEAxfj1cqBKJjO/6dcf402735156c2f495b31e18b11ea57/Checkr.svg"
                            alt="Checkr Icon" title="Checkr Icon" class="logo-media"> </a></div>
            </div>
            <div class="marquee">
                <div class="logo-item"><a href="https://www.classlink.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2z8B1MBnbJ57JJnzLwzQzO/937956a7bff57b6f36f1566d4b0cc27f/ClassLink.svg"
                            alt="ClassLink Icon" title="ClassLink Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.cyberark.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6BucdBQzl1ifxDbcQ74yxW/0dfda945e8b6ddfb603fb8b9e3d02f03/Cyberark.svg"
                            alt="CyberArk Icon" title="CyberArk Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.salesforce.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7scZzeKmdkiEU8zPdfyIwG/4ed43e22fd4eb785e6878f0b80d278fb/Salesforce.svg"
                            alt="Salesforce Icon" title="Salesforce Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.datadoghq.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/10U7tHmGPv76JdPlnD7Tl9/8dff4d600dad28410e10df4883738784/Datadog.svg"
                            alt="Datadog Icon" title="Datadog Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.docusign.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2lKF75KyDJq20zRFvOJfqt/9cbfd0601957e871237807d10d7656c8/Docusign2.svg"
                            alt="Docusign Icon" title="Docusign Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.knowbe4.com"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6Yp68cE1DWONMFujzRpDS7/ef9c94f72a78b1981b0d247dede0fe3d/KnowBe4.svg"
                            alt="KnowBe4 Icon" title="KnowBe4 Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.idmobile.co.uk/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-07.svg"
                            alt="ID Mobile Icon" title="ID Mobile Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://asana.com/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384451/drata/6001/Logo-New-08.svg"
                            alt="Asana Icon" title="Asana Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://aws.amazon.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2PLTU1dIjdttcowa2vximY/fd2d3b006dc7352e72dc4f2eda03a429/AWS.svg"
                            alt="AWS Integration Icon" title="AWS Integration Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.office.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7F75j5NuQNUiyaUf3jp2uA/59a6c87062bec3144d1034119c71465f/Office365.svg"
                            alt="Office365 Icon" title="Office365 Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://cloud.google.com/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-01.svg"
                            alt="Google Cloud Icon" title="Google Cloud Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.atlassian.com/software/jira"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-02.svg"
                            alt="Jira Cloud Icon" title="Jira Cloud Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.heroku.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5tV8ZcXcsy0znbf9o49tr3/26c77c96cfdead9b454232768b200d9b/Heroku.svg"
                            alt="Heroku Icon" title="Heroku Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.mongodb.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5r9v2xXxffZvpImpVXTFMH/fb3ed22ea983ace1110e558ed3b7f72d/MongoDB.svg"
                            alt="MongoDB Icon" title="MongoDB Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://cloud.google.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7Lm5wrS3fRMe2yUeCls0ly/8395ad79cd49e9c1298da28f83f63da9/GCP.svg"
                            alt="Google Cloud Provider Icon" title="Google Cloud Provider Icon" class="logo-media"> </a>
                </div>
                <div class="logo-item"><a href="https://azure.microsoft.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2Pg7qb7YnFFVCEdSFTLRxa/5fa2b6b5a19ce7d0d30ba50e6d573ec5/Azure.svg"
                            alt="Azure Icon" title="Azure Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://gusto.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/142KAgkI9ALVWSvbrXR3aI/6ab36ae718c2ba4c58ef0442a6ee16fd/Gusto.svg"
                            alt="Gusto Icon" title="Gusto Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://rippling.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4GyKiQzxdxJHMzrE6b3W8v/90c00285a1091a94b54ca48bc4f56101/Rippling.svg"
                            alt="Rippling Icon" title="Rippling Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://bamboohr.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4GQVsp96tBxfx9CTU7Zdft/219ab2a368e64bff04bf20dcae7aa35b/BambooHR.svg"
                            alt="BambooHR Icon" title="BambooHR Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://justworks.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6pnkAjBGmdFrvrnDmvvrXC/c6b06dfce807a2e5bdef640870d9a8d6/Justworks.svg"
                            alt="Justworks Icon" title="Justworks Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://linear.app/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/29qH7phJuVe2SWXafNTksn/c9bfd7313eb8429c7de7b40238d56ed0/Linear.svg"
                            alt="Linear Icon" title="Linear Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://gitlab.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2F8kH4uTqIXYd8l2o9nJZS/527655bb3a6310ec89aef1371133ccf0/GitLab.svg"
                            alt="GitLab Icon" title="GitLab Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://github.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/eoDwv9YT0L0xVLBwOs7jz/bf8417fb445a57d05c9a07b1e2d4795c/GitHub.svg"
                            alt="GitHub Icon" title="GitHub Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.freshworks.com/hrms"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4JS6qX6NywCVe3T9xOw5wd/a11ee331c1a035f8fd1eb36ace8ad876/Freshteam.svg"
                            alt="Freshteam Icon" title="Freshteam Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://cloud.google.com/identity"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5RPgBnW5vJzrKaFLddgw60/c6b426ad755118b9e0fb1cbeb9b707d2/Google_Cloud_Identity.svg"
                            alt="Google Cloud Identity Icon" title="Google Cloud Identity Icon" class="logo-media"> </a>
                </div>
                <div class="logo-item"><a href="https://gitlab.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2F8kH4uTqIXYd8l2o9nJZS/527655bb3a6310ec89aef1371133ccf0/GitLab.svg"
                            alt="GitLab Icon" title="GitLab Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://bitbucket.org/product"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/9TEURxCRYNYCcRVVQ0SY4/e950c12488f77d93f23f37089d7b6abf/Bitbucket.svg"
                            alt="Bitbucket Icon" title="Bitbucket Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://auth0.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/24MseNidVOQVfs04FLVxDM/47e42cddadcbda5b0ef72c28d7daa209/Auth0.svg"
                            alt="Auth0 Icon" title="Auth0 Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://okta.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/27gogN0UNqQlGz6Fa6e7QI/43ca209eeda1f202c610f1339c4079e5/Okta_Icon.svg"
                            alt="Okta Icon" title="Okta Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://azure.microsoft.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/w79FmT6REFNnkaAXhiNdo/a54280fc4703de7cd8deecb8668ff262/Azure_Active_Directory.svg"
                            alt="Azure Active Directory Icon" title="Azure Active Directory Icon" class="logo-media">
                    </a></div>
                <div class="logo-item"><a href="https://azure.microsoft.com/en-us/services/devops"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/3ihf8MiGyMaP27hzSnHHis/0ab7c9369f2eb86a3390dafd34971b2b/Azure_DevOps.svg"
                            alt="Azure DevOps Icon" title="Azure DevOps Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.atlassian.com/software/jira"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/1tL8t8RgViv0sdi2pj4OYh/15089b58cbde25dd071b8e07b0419e60/Jira.svg"
                            alt="Jira Icon" title="Jira Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://certn.co/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5pc1bJEsE7xMYZoTE7W1E2/df8a5ffb9b5d64006694ffd431d65622/Certn.svg"
                            alt="Certn Icon" title="Certn Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://karmacheck.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/3AMXwTyew7bWlGYY3I3oKm/df28f542a9268c8e2524fdde93cd817e/Karmacheck.svg"
                            alt="Karmacheck Icon" title="Karmacheck Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.onelogin.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/46l8F2OYzzieehKBFbh0iF/c4f13fe0f926448644d2164916cdbb4b/Onelogin.svg"
                            alt="Onelogin Icon" title="Onelogin Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://azure.microsoft.com/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-05.svg"
                            alt="Microsoft Azure Icon" title="Microsoft Azure Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://shortcut.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4bgLwZHGFLGcSnfcZ4LNO8/062526c303724042e5b45815c3bbf95f/Shortcut-1.svg"
                            alt="Shortcut Icon" title="Shortcut Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://clickup.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4SgO0NVAIKyeOC0Gj2rx6s/0c9ae8b96975cbd6af0681596e8a2d7e/ClickUp.svg"
                            alt="ClickUp Icon" title="ClickUp Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://checkr.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6EXzsCr6EEAxfj1cqBKJjO/6dcf402735156c2f495b31e18b11ea57/Checkr.svg"
                            alt="Checkr Icon" title="Checkr Icon" class="logo-media"> </a></div>
            </div>
        </div>
        <div class="logo-slider slider-3">
            <div class="marquee">
                <div class="logo-item"><a href="https://www.classlink.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2z8B1MBnbJ57JJnzLwzQzO/937956a7bff57b6f36f1566d4b0cc27f/ClassLink.svg"
                            alt="ClassLink Icon" title="ClassLink Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.cyberark.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6BucdBQzl1ifxDbcQ74yxW/0dfda945e8b6ddfb603fb8b9e3d02f03/Cyberark.svg"
                            alt="CyberArk Icon" title="CyberArk Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.salesforce.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7scZzeKmdkiEU8zPdfyIwG/4ed43e22fd4eb785e6878f0b80d278fb/Salesforce.svg"
                            alt="Salesforce Icon" title="Salesforce Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.datadoghq.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/10U7tHmGPv76JdPlnD7Tl9/8dff4d600dad28410e10df4883738784/Datadog.svg"
                            alt="Datadog Icon" title="Datadog Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.docusign.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2lKF75KyDJq20zRFvOJfqt/9cbfd0601957e871237807d10d7656c8/Docusign2.svg"
                            alt="Docusign Icon" title="Docusign Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.knowbe4.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6Yp68cE1DWONMFujzRpDS7/ef9c94f72a78b1981b0d247dede0fe3d/KnowBe4.svg"
                            alt="KnowBe4 Icon" title="KnowBe4 Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.idmobile.co.uk/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-07.svg"
                            alt="ID Mobile Icon" title="ID Mobile Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://asana.com/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384451/drata/6001/Logo-New-08.svg"
                            alt="Asana Icon" title="Asana Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://aws.amazon.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2PLTU1dIjdttcowa2vximY/fd2d3b006dc7352e72dc4f2eda03a429/AWS.svg"
                            alt="AWS Integration Icon" title="AWS Integration Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.office.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7F75j5NuQNUiyaUf3jp2uA/59a6c87062bec3144d1034119c71465f/Office365.svg"
                            alt="Office365 Icon" title="Office365 Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://cloud.google.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7Lm5wrS3fRMe2yUeCls0ly/8395ad79cd49e9c1298da28f83f63da9/GCP.svg"
                            alt="Google Cloud Provider Icon" title="Google Cloud Provider Icon" class="logo-media"> </a>
                </div>
                <div class="logo-item"><a class="https://www.atlassian.com/software/jira"> <img
                            src="//res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-02.svg"
                            alt="Jira Cloud Icon" title="Jira Cloud Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.heroku.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5tV8ZcXcsy0znbf9o49tr3/26c77c96cfdead9b454232768b200d9b/Heroku.svg"
                            alt="Heroku Icon" title="Heroku Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.mongodb.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5r9v2xXxffZvpImpVXTFMH/fb3ed22ea983ace1110e558ed3b7f72d/MongoDB.svg"
                            alt="MongoDB Icon" title="MongoDB Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://cloud.google.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7Lm5wrS3fRMe2yUeCls0ly/8395ad79cd49e9c1298da28f83f63da9/GCP.svg"
                            alt="Google Cloud Provider Icon" title="Google Cloud Provider Icon" class="logo-media"> </a>
                </div>
                <div class="logo-item"><a href="https://azure.microsoft.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2Pg7qb7YnFFVCEdSFTLRxa/5fa2b6b5a19ce7d0d30ba50e6d573ec5/Azure.svg"
                            alt="Azure Icon" title="Azure Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://gusto.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/142KAgkI9ALVWSvbrXR3aI/6ab36ae718c2ba4c58ef0442a6ee16fd/Gusto.svg"
                            alt="Gusto Icon" title="Gusto Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://rippling.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4GyKiQzxdxJHMzrE6b3W8v/90c00285a1091a94b54ca48bc4f56101/Rippling.svg"
                            alt="Rippling Icon" title="Rippling Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://bamboohr.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4GQVsp96tBxfx9CTU7Zdft/219ab2a368e64bff04bf20dcae7aa35b/BambooHR.svg"
                            alt="BambooHR Icon" title="BambooHR Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://justworks.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6pnkAjBGmdFrvrnDmvvrXC/c6b06dfce807a2e5bdef640870d9a8d6/Justworks.svg"
                            alt="Justworks Icon" title="Justworks Icon" class="logo-media"> </a></div>
            </div>
            <div class="marquee">
                <div class="logo-item"><a href="https://www.classlink.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2z8B1MBnbJ57JJnzLwzQzO/937956a7bff57b6f36f1566d4b0cc27f/ClassLink.svg"
                            alt="ClassLink Icon" title="ClassLink Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.cyberark.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6BucdBQzl1ifxDbcQ74yxW/0dfda945e8b6ddfb603fb8b9e3d02f03/Cyberark.svg"
                            alt="CyberArk Icon" title="CyberArk Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.salesforce.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7scZzeKmdkiEU8zPdfyIwG/4ed43e22fd4eb785e6878f0b80d278fb/Salesforce.svg"
                            alt="Salesforce Icon" title="Salesforce Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.datadoghq.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/10U7tHmGPv76JdPlnD7Tl9/8dff4d600dad28410e10df4883738784/Datadog.svg"
                            alt="Datadog Icon" title="Datadog Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.docusign.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2lKF75KyDJq20zRFvOJfqt/9cbfd0601957e871237807d10d7656c8/Docusign2.svg"
                            alt="Docusign Icon" title="Docusign Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.knowbe4.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6Yp68cE1DWONMFujzRpDS7/ef9c94f72a78b1981b0d247dede0fe3d/KnowBe4.svg"
                            alt="KnowBe4 Icon" title="KnowBe4 Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.idmobile.co.uk/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384450/drata/6001/Logo-New-07.svg"
                            alt="ID Mobile Icon" title="ID Mobile Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://asana.com/"> <img
                            src="https://res.cloudinary.com/spiralyze/image/upload/v1681384451/drata/6001/Logo-New-08.svg"
                            alt="Asana Icon" title="Asana Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://aws.amazon.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2PLTU1dIjdttcowa2vximY/fd2d3b006dc7352e72dc4f2eda03a429/AWS.svg"
                            alt="AWS Integration Icon" title="AWS Integration Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.office.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7F75j5NuQNUiyaUf3jp2uA/59a6c87062bec3144d1034119c71465f/Office365.svg"
                            alt="Office365 Icon" title="Office365 Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://cloud.google.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7Lm5wrS3fRMe2yUeCls0ly/8395ad79cd49e9c1298da28f83f63da9/GCP.svg"
                            alt="Google Cloud Provider Icon" title="Google Cloud Provider Icon" class="logo-media"> </a>
                </div>
                <div class="logo-item"><a class="https://www.atlassian.com/software/jira"> <img
                            src="//res.cloudinary.com/spiralyze/image/upload/v1681384452/drata/6001/Logo-New-02.svg"
                            alt="Jira Cloud Icon" title="Jira Cloud Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.heroku.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5tV8ZcXcsy0znbf9o49tr3/26c77c96cfdead9b454232768b200d9b/Heroku.svg"
                            alt="Heroku Icon" title="Heroku Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.mongodb.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5r9v2xXxffZvpImpVXTFMH/fb3ed22ea983ace1110e558ed3b7f72d/MongoDB.svg"
                            alt="MongoDB Icon" title="MongoDB Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://cloud.google.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7Lm5wrS3fRMe2yUeCls0ly/8395ad79cd49e9c1298da28f83f63da9/GCP.svg"
                            alt="Google Cloud Provider Icon" title="Google Cloud Provider Icon" class="logo-media"> </a>
                </div>
                <div class="logo-item"><a href="https://azure.microsoft.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2Pg7qb7YnFFVCEdSFTLRxa/5fa2b6b5a19ce7d0d30ba50e6d573ec5/Azure.svg"
                            alt="Azure Icon" title="Azure Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://gusto.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/142KAgkI9ALVWSvbrXR3aI/6ab36ae718c2ba4c58ef0442a6ee16fd/Gusto.svg"
                            alt="Gusto Icon" title="Gusto Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://rippling.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4GyKiQzxdxJHMzrE6b3W8v/90c00285a1091a94b54ca48bc4f56101/Rippling.svg"
                            alt="Rippling Icon" title="Rippling Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://bamboohr.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4GQVsp96tBxfx9CTU7Zdft/219ab2a368e64bff04bf20dcae7aa35b/BambooHR.svg"
                            alt="BambooHR Icon" title="BambooHR Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://justworks.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6pnkAjBGmdFrvrnDmvvrXC/c6b06dfce807a2e5bdef640870d9a8d6/Justworks.svg"
                            alt="Justworks Icon" title="Justworks Icon" class="logo-media"> </a></div>
            </div>
        </div>
        <div class="logo-slider slider-4">
            <div class="marquee">
                <div class="logo-item"><a href="https://cloud.google.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7Lm5wrS3fRMe2yUeCls0ly/8395ad79cd49e9c1298da28f83f63da9/GCP.svg"
                            alt="Google Cloud Provider Icon" title="Google Cloud Provider Icon" class="logo-media"> </a>
                </div>
                <div class="logo-item"><a href="https://azure.microsoft.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2Pg7qb7YnFFVCEdSFTLRxa/5fa2b6b5a19ce7d0d30ba50e6d573ec5/Azure.svg"
                            alt="Azure Icon" title="Azure Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://gusto.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/142KAgkI9ALVWSvbrXR3aI/6ab36ae718c2ba4c58ef0442a6ee16fd/Gusto.svg"
                            alt="Gusto Icon" title="Gusto Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://rippling.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4GyKiQzxdxJHMzrE6b3W8v/90c00285a1091a94b54ca48bc4f56101/Rippling.svg"
                            alt="Rippling Icon" title="Rippling Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://bamboohr.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4GQVsp96tBxfx9CTU7Zdft/219ab2a368e64bff04bf20dcae7aa35b/BambooHR.svg"
                            alt="BambooHR Icon" title="BambooHR Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://justworks.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6pnkAjBGmdFrvrnDmvvrXC/c6b06dfce807a2e5bdef640870d9a8d6/Justworks.svg"
                            alt="Justworks Icon" title="Justworks Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://linear.app/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/29qH7phJuVe2SWXafNTksn/c9bfd7313eb8429c7de7b40238d56ed0/Linear.svg"
                            alt="Linear Icon" title="Linear Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://gitlab.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2F8kH4uTqIXYd8l2o9nJZS/527655bb3a6310ec89aef1371133ccf0/GitLab.svg"
                            alt="GitLab Icon" title="GitLab Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://github.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/eoDwv9YT0L0xVLBwOs7jz/bf8417fb445a57d05c9a07b1e2d4795c/GitHub.svg"
                            alt="GitHub Icon" title="GitHub Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.freshworks.com/hrms"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4JS6qX6NywCVe3T9xOw5wd/a11ee331c1a035f8fd1eb36ace8ad876/Freshteam.svg"
                            alt="Freshteam Icon" title="Freshteam Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://cloud.google.com/identity"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5RPgBnW5vJzrKaFLddgw60/c6b426ad755118b9e0fb1cbeb9b707d2/Google_Cloud_Identity.svg"
                            alt="Google Cloud Identity Icon" title="Google Cloud Identity Icon" class="logo-media"> </a>
                </div>
                <div class="logo-item"><a href="https://gitlab.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2F8kH4uTqIXYd8l2o9nJZS/527655bb3a6310ec89aef1371133ccf0/GitLab.svg"
                            alt="GitLab Icon" title="GitLab Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://bitbucket.org/product"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/9TEURxCRYNYCcRVVQ0SY4/e950c12488f77d93f23f37089d7b6abf/Bitbucket.svg"
                            alt="Bitbucket Icon" title="Bitbucket Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://auth0.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/24MseNidVOQVfs04FLVxDM/47e42cddadcbda5b0ef72c28d7daa209/Auth0.svg"
                            alt="Auth0 Icon" title="Auth0 Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://okta.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/27gogN0UNqQlGz6Fa6e7QI/43ca209eeda1f202c610f1339c4079e5/Okta_Icon.svg"
                            alt="Okta Icon" title="Okta Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://azure.microsoft.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/w79FmT6REFNnkaAXhiNdo/a54280fc4703de7cd8deecb8668ff262/Azure_Active_Directory.svg"
                            alt="Azure Active Directory Icon" title="Azure Active Directory Icon" class="logo-media">
                    </a></div>
                <div class="logo-item"><a href="https://azure.microsoft.com/en-us/services/devops"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/3ihf8MiGyMaP27hzSnHHis/0ab7c9369f2eb86a3390dafd34971b2b/Azure_DevOps.svg"
                            alt="Azure DevOps Icon" title="Azure DevOps Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.atlassian.com/software/jira"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/1tL8t8RgViv0sdi2pj4OYh/15089b58cbde25dd071b8e07b0419e60/Jira.svg"
                            alt="Jira Icon" title="Jira Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://certn.co/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5pc1bJEsE7xMYZoTE7W1E2/df8a5ffb9b5d64006694ffd431d65622/Certn.svg"
                            alt="Certn Icon" title="Certn Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://karmacheck.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/3AMXwTyew7bWlGYY3I3oKm/df28f542a9268c8e2524fdde93cd817e/Karmacheck.svg"
                            alt="Karmacheck Icon" title="Karmacheck Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.onelogin.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/46l8F2OYzzieehKBFbh0iF/c4f13fe0f926448644d2164916cdbb4b/Onelogin.svg"
                            alt="Onelogin Icon" title="Onelogin Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://azure.microsoft.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2Pg7qb7YnFFVCEdSFTLRxa/5fa2b6b5a19ce7d0d30ba50e6d573ec5/Azure.svg"
                            alt="Azure Icon" title="Azure Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://shortcut.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4bgLwZHGFLGcSnfcZ4LNO8/062526c303724042e5b45815c3bbf95f/Shortcut-1.svg"
                            alt="Shortcut Icon" title="Shortcut Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://clickup.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4SgO0NVAIKyeOC0Gj2rx6s/0c9ae8b96975cbd6af0681596e8a2d7e/ClickUp.svg"
                            alt="ClickUp Icon" title="ClickUp Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://checkr.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6EXzsCr6EEAxfj1cqBKJjO/6dcf402735156c2f495b31e18b11ea57/Checkr.svg"
                            alt="Checkr Icon" title="Checkr Icon" class="logo-media"> </a></div>
            </div>
            <div class="marquee">
                <div class="logo-item"><a href="https://cloud.google.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/7Lm5wrS3fRMe2yUeCls0ly/8395ad79cd49e9c1298da28f83f63da9/GCP.svg"
                            alt="Google Cloud Provider Icon" title="Google Cloud Provider Icon" class="logo-media"> </a>
                </div>
                <div class="logo-item"><a href="https://azure.microsoft.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2Pg7qb7YnFFVCEdSFTLRxa/5fa2b6b5a19ce7d0d30ba50e6d573ec5/Azure.svg"
                            alt="Azure Icon" title="Azure Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://gusto.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/142KAgkI9ALVWSvbrXR3aI/6ab36ae718c2ba4c58ef0442a6ee16fd/Gusto.svg"
                            alt="Gusto Icon" title="Gusto Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://rippling.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4GyKiQzxdxJHMzrE6b3W8v/90c00285a1091a94b54ca48bc4f56101/Rippling.svg"
                            alt="Rippling Icon" title="Rippling Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://bamboohr.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4GQVsp96tBxfx9CTU7Zdft/219ab2a368e64bff04bf20dcae7aa35b/BambooHR.svg"
                            alt="BambooHR Icon" title="BambooHR Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://justworks.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6pnkAjBGmdFrvrnDmvvrXC/c6b06dfce807a2e5bdef640870d9a8d6/Justworks.svg"
                            alt="Justworks Icon" title="Justworks Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://linear.app/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/29qH7phJuVe2SWXafNTksn/c9bfd7313eb8429c7de7b40238d56ed0/Linear.svg"
                            alt="Linear Icon" title="Linear Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://gitlab.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2F8kH4uTqIXYd8l2o9nJZS/527655bb3a6310ec89aef1371133ccf0/GitLab.svg"
                            alt="GitLab Icon" title="GitLab Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://github.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/eoDwv9YT0L0xVLBwOs7jz/bf8417fb445a57d05c9a07b1e2d4795c/GitHub.svg"
                            alt="GitHub Icon" title="GitHub Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.freshworks.com/hrms"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4JS6qX6NywCVe3T9xOw5wd/a11ee331c1a035f8fd1eb36ace8ad876/Freshteam.svg"
                            alt="Freshteam Icon" title="Freshteam Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://cloud.google.com/identity"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5RPgBnW5vJzrKaFLddgw60/c6b426ad755118b9e0fb1cbeb9b707d2/Google_Cloud_Identity.svg"
                            alt="Google Cloud Identity Icon" title="Google Cloud Identity Icon" class="logo-media"> </a>
                </div>
                <div class="logo-item"><a href="https://gitlab.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2F8kH4uTqIXYd8l2o9nJZS/527655bb3a6310ec89aef1371133ccf0/GitLab.svg"
                            alt="GitLab Icon" title="GitLab Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://bitbucket.org/product"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/9TEURxCRYNYCcRVVQ0SY4/e950c12488f77d93f23f37089d7b6abf/Bitbucket.svg"
                            alt="Bitbucket Icon" title="Bitbucket Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://auth0.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/24MseNidVOQVfs04FLVxDM/47e42cddadcbda5b0ef72c28d7daa209/Auth0.svg"
                            alt="Auth0 Icon" title="Auth0 Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://okta.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/27gogN0UNqQlGz6Fa6e7QI/43ca209eeda1f202c610f1339c4079e5/Okta_Icon.svg"
                            alt="Okta Icon" title="Okta Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://azure.microsoft.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/w79FmT6REFNnkaAXhiNdo/a54280fc4703de7cd8deecb8668ff262/Azure_Active_Directory.svg"
                            alt="Azure Active Directory Icon" title="Azure Active Directory Icon" class="logo-media">
                    </a></div>
                <div class="logo-item"><a href="https://azure.microsoft.com/en-us/services/devops"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/3ihf8MiGyMaP27hzSnHHis/0ab7c9369f2eb86a3390dafd34971b2b/Azure_DevOps.svg"
                            alt="Azure DevOps Icon" title="Azure DevOps Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.atlassian.com/software/jira"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/1tL8t8RgViv0sdi2pj4OYh/15089b58cbde25dd071b8e07b0419e60/Jira.svg"
                            alt="Jira Icon" title="Jira Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://certn.co/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/5pc1bJEsE7xMYZoTE7W1E2/df8a5ffb9b5d64006694ffd431d65622/Certn.svg"
                            alt="Certn Icon" title="Certn Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://karmacheck.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/3AMXwTyew7bWlGYY3I3oKm/df28f542a9268c8e2524fdde93cd817e/Karmacheck.svg"
                            alt="Karmacheck Icon" title="Karmacheck Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://www.onelogin.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/46l8F2OYzzieehKBFbh0iF/c4f13fe0f926448644d2164916cdbb4b/Onelogin.svg"
                            alt="Onelogin Icon" title="Onelogin Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://azure.microsoft.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/2Pg7qb7YnFFVCEdSFTLRxa/5fa2b6b5a19ce7d0d30ba50e6d573ec5/Azure.svg"
                            alt="Azure Icon" title="Azure Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://shortcut.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4bgLwZHGFLGcSnfcZ4LNO8/062526c303724042e5b45815c3bbf95f/Shortcut-1.svg"
                            alt="Shortcut Icon" title="Shortcut Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://clickup.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/4SgO0NVAIKyeOC0Gj2rx6s/0c9ae8b96975cbd6af0681596e8a2d7e/ClickUp.svg"
                            alt="ClickUp Icon" title="ClickUp Icon" class="logo-media"> </a></div>
                <div class="logo-item"><a href="https://checkr.com/"> <img
                            src="https://images.ctfassets.net/x3hoqyjm3c27/6EXzsCr6EEAxfj1cqBKJjO/6dcf402735156c2f495b31e18b11ea57/Checkr.svg"
                            alt="Checkr Icon" title="Checkr Icon" class="logo-media"> </a></div>
            </div>
        </div>
    </div>
    <div class="btn"><a href="https://drata.com/platform/integrations" class="view-all-btn">View All</a></div>
</section>`
    }

    function logoSection() {
        return `<section class="logo-section">
    <div class="container">
        <h2 class="sec-title border-title">Join 2,000+ Companies from Small Business to Enterprise That Have Become SOC 2 Compliant with Drata
        </h2>
        <div class="ls-logo-group dis-flex flex-wrap justify-content-between">
            <div class="ls-logo-item"><img
                    src="https://res.cloudinary.com/spiralyze/image/upload/v1680678533/drata/6001/abnormal.svg"
                    class="ls-img" alt="Abnormal" title="Abnormal"></div>
            <div class="ls-logo-item"><img
                    src="https://res.cloudinary.com/spiralyze/image/upload/v1680678533/drata/6001/aribase.svg"
                    class="ls-img" alt="Airbase" title="Airbase"></div>
            <div class="ls-logo-item"><img
                    src="https://res.cloudinary.com/spiralyze/image/upload/v1680678533/drata/6001/big_id.svg"
                    class="ls-img" alt="BigID" title="BigID"></div>
            <div class="ls-logo-item"><img
                    src="https://res.cloudinary.com/spiralyze/image/upload/v1680678533/drata/6001/clearbit.svg"
                    class="ls-img" alt="Clearbit" title="Clearbit"></div>
            <div class="ls-logo-item"><img
                    src="https://res.cloudinary.com/spiralyze/image/upload/v1680678534/drata/6001/baboor_hr.svg"
                    class="ls-img" alt="bamboo HR" title="bamboo HR"></div>
            <div class="ls-logo-item"><img
                    src="https://res.cloudinary.com/spiralyze/image/upload/v1680678534/drata/6001/notion.svg"
                    class="ls-img" alt="Notion" title="Notion"></div>
            <div class="ls-logo-item"><img
                    src="https://res.cloudinary.com/spiralyze/image/upload/v1680678535/drata/6001/postman.svg"
                    class="ls-img" alt="Postman" title="Postman"></div>
            <div class="ls-logo-item"><img
                    src="https://res.cloudinary.com/spiralyze/image/upload/v1680678536/drata/6001/vercel.svg"
                    class="ls-img" alt="Vercel" title="Vercel"></div>
            <div class="ls-logo-item"><img
                    src="https://res.cloudinary.com/spiralyze/image/upload/v1680678536/drata/6001/lemonade.svg"
                    class="ls-img" alt="Lemonade" title="Lemonade"></div>
            <div class="ls-logo-item"><img
                    src="https://res.cloudinary.com/spiralyze/image/upload/v1680678536/drata/6001/fivetran.svg"
                    class="ls-img" alt="Fivetran" title="Fivetran"></div>
            <div class="ls-logo-item"><img
                    src="https://res.cloudinary.com/spiralyze/image/upload/v1680678536/drata/6001/w_vip.svg"
                    class="ls-img" alt="Wvip" title="Wvip"></div>
            <div class="ls-logo-item"><img
                    src="https://res.cloudinary.com/spiralyze/image/upload/v1680678537/drata/6001/clearco.svg"
                    class="ls-img" alt="Clearco" title="Clearco"></div>
        </div>
    </div>
</section>`
    }

    function featureSection() {
        return `<section class="feature-section">
    <div class="container">
    <div class="feature-title-container">  <h2 class="feature-title border-title">Features</h2>
    <p>Everything you need to achieve compliance faster and more cost-effectively. </p>
    </div>
        <div class="fs-card-group">
        <div class="fs-card-item"><div class="img-container"><img
        src="https://res.cloudinary.com/spiralyze/image/upload/v1682075793/drata/4002/features-multi_framework.svg" class="ls-img"
        alt="Multi Framework" title="Multi Framework"></div><div class="content-container">
    <h6>Multi-Framework</h6>
    <p>Automated compliance for 16+ products and frameworks including SOC 2, ISO 27001, HIPAA, GDPR, & PCI. </p></div>
</div>
<div class="fs-card-item"><div class="img-container"><img
        src="https://res.cloudinary.com/spiralyze/image/upload/v1682075794/drata/4002/features-automated_evidence.svg" class="ls-img"
        alt="Automated Evidence" title="Automated Evidence"></div><div class="content-container">
    <h6>Automated Evidence Collection</h6>
    <p>Collection documentation from your tech stack. Powered by 75+ integrations and an open API.  </p></div>
</div>
<div class="fs-card-item"><div class="img-container"><img
        src="https://res.cloudinary.com/spiralyze/image/upload/v1682075794/drata/4002/features-security_policies.svg" class="ls-img"
        alt="Security Policies" title="Security Policies"></div><div class="content-container">
    <h6>Security Policies</h6>
    <p>20+ customizable, auditor-approved policies. Streamline employee signing & documentation.</p></div>
</div>
<div class="fs-card-item"><div class="img-container"><img
        src="https://res.cloudinary.com/spiralyze/image/upload/v1682075794/drata/4002/features-vendor_management.svg" class="ls-img"
        alt="Vendor Management" title="Vendor Management"></div><div class="content-container">
    <h6>Vendor Management</h6>
    <p>Streamline vendor security questionnaires. Store, send, and review answers.   </p></div>
</div>
<div class="fs-card-item"><div class="img-container"><img
        src="https://res.cloudinary.com/spiralyze/image/upload/v1682075794/drata/4002/features-expert_assistance.svg" class="ls-img"
        alt="Experts Assistance" title="Experts Assistance"></div><div class="content-container">
    <h6>Experts Assistance</h6>
    <p>Step-by-step guidance from our team of compliance experts. 24/5.</p></div>
</div>
<div class="fs-card-item"><div class="img-container"><img
        src="https://res.cloudinary.com/spiralyze/image/upload/v1682075794/drata/4002/features-24_7_monitoring.svg" class="ls-img"
        alt="24/7 Monitoring" title="24/7 Monitoring"></div><div class="content-container">
    <h6>24/7 Monitoring</h6>
    <p>Continuous compliance monitoring to identify issues early and stay in compliance.</p></div>
</div>
        </div>
    </div>
</section>`
    }

    function updateHeroContents() {
        if (document.querySelectorAll('#main-content > .hero-section').length > 0) {
            document.querySelector('#main-content > .hero-section .header-nav .nav-section a .logo-img').setAttribute('src', 'https://res.cloudinary.com/spiralyze/image/upload/v1682075797/drata/4002/drata-full-wordmark.svg');
            document.querySelector('#main-content > .hero-section .header-nav .nav-section').classList.add('container');
            document.querySelector('#main-content > .hero-section .hbspt-form form .hs_source__inbound_demo_ .input > input').setAttribute('placeholder', 'How did you hear about Drata?*');
            document.querySelector('#main-content > .hero-section .hbspt-form form .hs_source__inbound_demo_ .input > .hs-label-spz').textContent = `How did you hear about Drata?*`;
            document.querySelector('#main-content > .hero-section .hbspt-form form .hs_demo_product_of_interest > legend.hs-field-desc').textContent = `What product(s) are you interested in?`;
            document.querySelector('#main-content > .hero-section .form-wrapper-spz .form-title-spz').textContent = `Get a Demo`;
            document.querySelector('#main-content > .hero-section .hero-content .hc-title').textContent = `Automate SOC 2 compliance. Reduce
        compliance time and cost by 50%.`;
            document.querySelector('#main-content > .hero-section .hero-content .list-grp-wrapper .list-group').innerHTML = `<ul class="list-group">
        <li class="list-item">
        <div class="ls-title">Reduce Time Up to 80%</div>
        <div class="ls-desc">Automate documentation and evidence collection. Integrates with your tech stack out of the box.</div>
        </li>
        <li class="list-item">
        <div class="ls-title">Scalable Compliance</div>
        <div class="ls-desc">Maintain compliance as you add products and tech. Easily add new compliance frameworks.</div>
        </li>
        <li class="list-item">
        <div class="ls-title">Ongoing Compliance</div>
        <div class="ls-desc">Achieve peace of mind, knowing Drata is automating ongoing security and compliance monitoring.</div>
        </li>
        </ul>`;
            document.querySelector('#main-content > .hero-section .hero-content .star-rating').innerHTML = `<img src="https://res.cloudinary.com/spiralyze/image/upload/v1682075790/drata/4002/rating-49.svg" class="sr-img" alt="Ratings" title="Ratings" draggable="false"> <div class="rating"><span>4.9</span> (398 reviews) </div>`;
            document.querySelector('#main-content > .hero-section .hbspt-form form .hs_submit.hs-submit .actions .hs-button').setAttribute('value', 'Get Started');
        }
    }
})();
