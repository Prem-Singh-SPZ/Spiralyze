(function () {

	//DEV 1/5. Put your asana task URL here
	const asana_URL = `https://app.asana.com/0/1201456438741653/1208788439805019/f`

	//DEV 2/5. Find the class or ID of the control hero section and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
	const template_sectionSelector = `main .banner2`;

	//DEV 3/5. Choose where you redesigned hero section should appear
	const template_position = "beforebegin" //"beforebegin", "beforeend", "afterend"

	//DEV 4/5. Fill sectionContent object values. See comments inside for details
	const template_sectionContent = {
		//[1] Heading https://share.cleanshot.com/S9Kb8KFx
		sectionHeading: "See how SailPoint helps secure every identity and protect your enterprise.",
		//[2] Sub-heading https://share.cleanshot.com/Z2wDnbTC
		sectionSubHeading: "How we help",
		//[3] Accordion items. Add as many as you want. Each accordion item has title, headline, content, image and CTA block https://share.cleanshot.com/8zYkVYJT
		accordionItems: [
			{
				title: 'Lifecycle Management', //Title in the navigation bar
				headline: 'Lifecycle Management', //Headline of the accordion item
				content: 'Manage all your identities and evolving access privileges with AI-powered insights and processes.',
				image: [
					{
						breakPoint: 992,
						url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img_1.webp",
					},
					{
						breakPoint: 768,
						url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img_1.webp",
					},
					{
						breakPoint: 320,
						url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img_1.webp",
					},
				],
				CTABlock: [
					{
						CTAText: "Get a demo",
						CTAHref: "javascript:;",
						className: `spz-primary spz-go-to-demo btn btn--hotpink`
					},
				]

			},
			{
				title: 'Compliance',
				headline: 'Compliance',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
				image: [
					{
						breakPoint: 992,
						url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img_1.webp",
					},
					{
						breakPoint: 768,
						url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img_1.webp",
					},
					{
						breakPoint: 320,
						url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img_1.webp",
					},
				],
				CTABlock: [
					{
						CTAText: "Get a demo",
						CTAHref: "javascript:;",
						className: `spz-primary spz-go-to-demo btn btn--hotpink`
					},
				]

			},
			{
				title: 'Access Modeling',
				headline: 'Access Modeling',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
				image: [
					{
						breakPoint: 992,
						url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img_1.webp",
					},
					{
						breakPoint: 768,
						url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img_1.webp",
					},
					{
						breakPoint: 320,
						url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img_1.webp",
					},
				],
				CTABlock: [
					{
						CTAText: "Get a demo",
						CTAHref: "javascript:;",
						className: `spz-primary spz-go-to-demo btn btn--hotpink`
					},
				]

			},
			{
				title: 'Analytics',
				headline: 'Analytics',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
				image: [
					{
						breakPoint: 992,
						url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img_1.webp",
					},
					{
						breakPoint: 768,
						url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img_1.webp",
					},
					{
						breakPoint: 320,
						url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img_1.webp",
					},
				],
				CTABlock: [
					{
						CTAText: "Get a demo",
						CTAHref: "javascript:;",
						className: `spz-primary spz-go-to-demo btn btn--hotpink`
					},
				]

			},
			{
				title: 'AI and Machine Learning',
				headline: 'AI and Machine Learning',
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
				image: [
					{
						breakPoint: 992,
						url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img_1.webp",
					},
					{
						breakPoint: 768,
						url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img_1.webp",
					},
					{
						breakPoint: 320,
						url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img_1.webp",
					},
				],
				CTABlock: [
					{
						CTAText: "Get a demo",
						CTAHref: "javascript:;",
						className: `spz-primary spz-go-to-demo btn btn--hotpink`
					},
				]

			},
		],
		CTABlock: [
		]
	};

	/***********************************
	************************************
	DO NOT TOUCH
	BEYOND THIS LINE
	******************************
	************************/
	//Helper function to add input listeners like focus, blur and add class to parent div
	function addHorizontalAccordion(content, whereToPut, template_sectionSelector) {
		const formTemplate = `
		<div class="spz-bg-wrap">
			<div class="spz-solution-accordion__wrapper">
			<div class="features-subheading">${content.sectionSubHeading}</div>
			<div class="features-heading">${content.sectionHeading}</div>
			  <div class="spz-solution-accordion">
				<div class="mobile-scroll">
				    <ul class="spz-solution-accordion__nav">
				    ${content.accordionItems.map(item => {
			return `
				    	<li class="spz-solution-accordion__item">
					        <span>${item.title}</span>
					        <div class="progress_bar"></div>
					    </li>
				    	`
		}).join("")}
				    </ul>
			    </div>
			    <div class="spz-solution-accordion__contents">
			    	${content.accordionItems.map(item => {
			return `
			    		<div class="content">
					        <div class="spz-solution-accordion__mobile">
					          ${item.title}
					          <div class="progress_bar"></div>
					        </div>
					        <div class="solution__image">
					          <picture>
					        	${item.image.map(image => `<source media="(min-width:${image.breakPoint}px)" srcset="${image.url}" />`).join("")}
					            <img src="${item.image[0].url}" alt="${item.headline}" />
					          </picture>
					        </div>
					        <div class="solution__content">
					          <h2>${item.headline}</h2>
					          <p>${item.content}</p>
					          <div class="spz-ctas-wrap">
				         		${item.CTABlock.map(item => `<a href=${item.CTAHref} class="${item.className}">${item.CTAText}</a>`).join('')}
				         	   </div>
					        </div>
					      </div>
			    		`
		}).join("")
			}
			    </div>
			  </div>
			</div>
			${content.CTABlock.length !== 0
				? `<div class="spz-ctas-wrap separate-block">
	         		${content.CTABlock.map(item => `<a href=${item.CTAHref} class="${item.className}">${item.CTAText}</a>`).join('')}
	         	   </div>`
				: ""
			}
		</div>`;
		document
			.querySelector(template_sectionSelector)
			.insertAdjacentHTML(whereToPut, formTemplate);
		// Start of Accordion Logic
		const DURATION = 7000; // 7 seconds
		const accordionNav = document.querySelector('.spz-solution-accordion__nav');
		const accordionContents = document.querySelector('.spz-solution-accordion__contents');
		const NoOfAccordion = content.accordionItems.length;
		let currentActive = 0;
		let currentSlideProgress = 0;
		let autoSlide = false;

		// Initialize Accordion active item 
		accordionNav.children[currentActive].classList.add('active');
		accordionContents.children[currentActive].classList.add('active');

		// Add event listeners to accordion navigation items for hover functionality
		Array.from(accordionNav.children).forEach((item, index) => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				if (currentActive !== index) {
					changeAccordionActiveItem(index);
				}
			});
			// item.addEventListener('mouseenter', (e) => {
			//     e.preventDefault();
			//     if(currentActive === index){
			//         autoSlide = false;
			//     }
			// });
			// item.addEventListener('mouseleave', (e) => {
			//     e.preventDefault();
			//     if(currentActive === index){
			//         autoSlide = true;
			//     }
			// });
		});

		// Add event listeners to accordion content items for hover functionality
		Array.from(accordionContents.children).forEach((item, index) => {
			item.querySelector('.spz-solution-accordion__mobile').addEventListener('click', (e) => {
				e.preventDefault();
				if (currentActive !== index) {
					changeAccordionActiveItem(index);
				}
			});
			// item.addEventListener('mouseenter', (e) => {
			//     e.preventDefault();
			//     if(currentActive === index){
			//         autoSlide = false;
			//     }
			// });
			// item.addEventListener('mouseleave', (e) => {
			//     e.preventDefault();
			//     if(currentActive === index){
			//         autoSlide = true;
			//     }
			// });
		});

		// Running Interval
		const autoSlideInterval = setInterval(function () {
			if (!autoSlide) return;
			if (currentSlideProgress >= 100) {
				currentActive = (currentActive + 1 >= NoOfAccordion) ? 0 : (currentActive + 1);
				changeAccordionActiveItem(currentActive);
			} else {
				currentSlideProgress = currentSlideProgress + (100 * 200 / DURATION);
				progressBarWidthAnimation(currentActive, currentSlideProgress);
			}
		}, 200);

		// Methods
		function progressBarWidthAnimation(active, width) {
			accordionNav.children[active].querySelector('.progress_bar').style.width = `${width}%`;
			accordionContents.children[active].querySelector('.progress_bar').style.width = `${width}%`;
		}
		function changeAccordionActiveItem(current) {
			currentSlideProgress = 0;
			currentActive = current;
			// Remove all active classes
			for (let i = 0; i < NoOfAccordion; i++) {
				accordionNav.children[i].classList.remove("active");
				accordionContents.children[i].classList.remove("active");
				progressBarWidthAnimation(i, currentSlideProgress);
			}
			// Add active class to current item
			accordionNav.children[current].classList.add('active');
			accordionContents.children[current].classList.add("active");

		}
	}

	function initTest2008() {
		const body = document.querySelector('body');
		waitForElm('body').then(() => {
			if (window.location.pathname == '/') {
				if (!body.classList.contains('spz-2008-v1')) {
					body.classList.add('spz-2008-v1');
					addHorizontalAccordion(
						template_sectionContent, //object with the data
						template_position, //any value you pass using insertAdjacentHTML
						template_sectionSelector
					);
					hiddenValue('spz-2008', 'SPZ_2008_variant_1');
				} else {
					if (body.classList.contains('spz-2008-v1')) {
						hiddenValue('spz-2008', 'SPZ_2008_variant_1');
					}
				}
			}
			else {
				document.body.classList.add('spz_2008_HF');
				let callHF = setInterval(() => {
					setHiddenFieldValue();
				}, 100);

				setTimeout(() => {
					clearInterval(callHF);
				}, 10000);
			}
		});

	}

	window.addEventListener('click', function (e) {
		if (e.target.closest('.spz-go-to-demo')) {
			e.preventDefault();
			document.querySelector('a[href="/demo"]').click()
		}
	});

	// List of URLs
	const urls = [
		"https://www.sailpoint.com/",
		"https://www.sailpoint.com/demo",
	];

	var url = location.href;
	urlCheck(url);

	history.pushState = (function (f) {
		return function pushState() {
			var ret = f.apply(this, arguments);
			window.dispatchEvent(new Event("pushstate"));
			window.dispatchEvent(new Event("locationchange"));
			return ret;
		};
	})(history.pushState);

	history.replaceState = (function (f) {
		return function replaceState() {
			var ret = f.apply(this, arguments);
			window.dispatchEvent(new Event("replacestate"));
			window.dispatchEvent(new Event("locationchange"));
			return ret;
		};
	})(history.replaceState);

	window.addEventListener("popstate", function () {
		window.dispatchEvent(new Event("locationchange"));
	});

	window.addEventListener("locationchange", function () {
		url = location.href;
		urlCheck(url);
	});

	function urlCheck(url) {
		if (urls.indexOf(window.location.href.split('?')[0]) >= 0) {
			initTest2008();
		} else {
			if (document.querySelector('body').classList.contains('spz-2008-v1')) {
				document.querySelector('body').classList.remove('spz-2008-v1');
			}
			if (document.querySelector('body').classList.contains('spz_2008_HF')) {
				document.querySelector('body').classList.remove('spz_2008_HF');
			}
			removeSpecificCookieValue('spz-2008', 'SPZ_2008_variant_1');
		}
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

	// Do not touch below hidden field code for any Experiment Start
	function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
		var ExistingHiddenFieldName = getCookie('HiddenFieldName');
		var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');

		if (!ExistingHiddenFieldName) {
			setCookie('HiddenFieldName', currentHiddenFieldName, 1);
			setCookie('HiddenFieldValue', currentHiddenFieldValue, 1);
		} else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
			setCookie('HiddenFieldName', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
			setCookie('HiddenFieldValue', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
		}

		let callHF = setInterval(() => {
			setHiddenFieldValue();
		}, 100);

		setTimeout(() => {
			clearInterval(callHF);
		}, 10000);
	}

	function setCookie(name, value, days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=sailpoint.com;";
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
	function removeSpecificCookieValue(targetName, targetValue) {
		['HiddenFieldName', 'HiddenFieldValue'].forEach((key, i) => {
			var values = getCookie(key)?.split(',').filter(v => v !== (i ? targetValue : targetName)).join(',');
			setCookie(key, values || '', 1);
		});
	}

	function setHiddenFieldValue() {
		var spz_cro_Interval = setInterval(function () {
			var intellimize1 = document.querySelector('form.mktoForm input[name="intellimize1"]');
			if (intellimize1) {
				clearInterval(spz_cro_Interval);
				var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');
				//check if hidden field value is empty then only set the value else set the value with , seperated
				if (ExistingHiddenFieldValue && intellimize1.value == '') {
					intellimize1.value = ExistingHiddenFieldValue;
				}
				else {
					if (ExistingHiddenFieldValue && !intellimize1.value.includes(ExistingHiddenFieldValue)) {
						intellimize1.value = intellimize1.value + ',' + ExistingHiddenFieldValue;
					}
				}
			}
		});

		//click event listener
		document.addEventListener('click', function (e) {
			if (e.target.closest('.mktoForm .mktoButton')) {
				//inject current time and date in EST timezone into .intellimize2 hidden field
				var d = new Date();
				var n = d.toLocaleString('en-US', { timeZone: 'America/New_York' });
				var int2 = e.target.closest('.mktoForm').querySelector('input[name="intellimize2"]');
				if (int2)
					int2.value = n;
			}
		});
	}
	// Do not touch below hidden field code for any Experiment over
})();
