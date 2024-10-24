(function () {
	//DEV 2/6. Modal content
	const modalData = {
		leftImage: '',
		leftImageAlt: 'Jonathan Jaffe',
		modalHeading: '“We saved 80% of time using Drata&#8217;s continuous compliance automation. I&#8217;ve spent well over 200 hours before using Drata just in preparing for and dealing with our SOC 2 audit. ',
		modalSubHeading: 'Jonathan Jaffe',
		modalContent: 'CISO, Lemonade ',
		ctaHref: 'https://drata.com/demo',
		ctaText: 'Get a Demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1727873538/drata/3004/arrow_icon.svg" alt="Arrow">',
		closeModalText: '<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/drata/3004/frame_1000003340_webp.webp">', //you can pass <img /> tag if you have specific close button
		contentAfterCTA: ''
	};

	//DEV 3/6. Set the delay time in seconds for the modal to appear. Must be number. If you want modal to appear instantly set to 0
	const modalDelay = 0;

	//DEV 4/6. Set if modal should appear on page leave event. Can be only true or false.
	const pageLeaveEvent = true;

	//DEV 5/6. Set how many times modal should appear. 'once' - will show modal only once per lifetime. 'session' - will show modal only once per session. 'dev' - for development purposes will show every time page refresh
	const timesToAppear = 'session';

	/***********************************
	************************************
	DO NOT TOUCH
	BEYOND THIS LINE
	******************************
	************************/

	function createTest() {
		let modalPresent = setInterval(function () {
			if (!document.querySelector('.spz-modal-wrap')) {
				clearInterval(modalPresent)
				addModal(
					modalData,
					modalDelay,
					pageLeaveEvent,
					timesToAppear
				);
			}
		})

		document.body.classList.add("spz-3004");
	}

	function addModal(modalData, modalDelay, leavePage, timesToAppear) {
		const modalTemplate = `
        <div class="spz-modal-wrap">
          <div class="modal-wrap">
        	<div class="modal-left">
        		${modalData.leftImage.trim().length !== 0
				? `<img src="${modalData.leftImage}" alt="${modalData.leftImageAlt}"/>`
				: ''
			}
        	</div>
        	<div class="modal-right">
        	${modalData.modalHeading.trim().length !== 0
				? `<div class="modal-heading">${modalData.modalHeading}</div>`
				: ''
			}
				${modalData.modalSubHeading.trim().length !== 0
				? `<div class="modal-subheading">${modalData.modalSubHeading}</div>`
				: ''
			}
				${modalData.modalContent.trim().length !== 0
				? `<div class="modal-content">${modalData.modalContent}</div>`
				: ''
			}
        		<div class="modal-ctas">
        		${modalData.ctaHref.trim().length !== 0
				? `<a href="${modalData.ctaHref}">${modalData.ctaText}</a>`
				: ''
			}        			
        		</div>        		
        	</div>
        		<div class="close-modal">${modalData.closeModalText}</div>
          </div>
        </div>
        `;

		let mouseLeaveFired = false;
		const modalWrapSelector = '.spz-modal-wrap';
		let scrollPos;

		function appendModal() {
			if (!document.querySelector(modalWrapSelector)) {
				document.body.insertAdjacentHTML('beforeend', modalTemplate);
				scrollPos = window.scrollY;
				document.querySelector(modalWrapSelector).addEventListener('click', handleModalClick);

				// Set localStorage/sessionStorage for model open restrictions
				if (timesToAppear === 'once') {
					localStorage.setItem('modalShown', '1');
				} else if (timesToAppear === 'session') {
					sessionStorage.setItem('modalShown', '1');
				}

				// Set the scroll position for the modal
				document.body.scrollTop = scrollPos;
			}
		}

		function handleModalClick(e) {
			if (e.target.className === 'close-modal') {
				document.querySelector(modalWrapSelector).style.display = 'none';

				// Set the scroll position after the modal close
				window.scrollTo(0, scrollPos);
			}
		}

		function modalLogic() {
			if (typeof modalDelay === 'number' && !leavePage) {
				setTimeout(appendModal, modalDelay * 1000);
			} else if (leavePage) {
				let mouseY = 0;
				let topValue = 0;
				window.addEventListener('mouseout', function (e) {
					mouseY = e.clientY;
					if (mouseY < topValue && !mouseLeaveFired) {
						mouseLeaveFired = true;
						appendModal();
					}
				});
			} else {
				appendModal();
			}
		}

		if ((timesToAppear === 'once' && !localStorage.getItem('modalShown')) ||
			(timesToAppear === 'session' && !sessionStorage.getItem('modalShown')) ||
			timesToAppear === 'dev') {
			modalLogic();
		}
	}

	//Passing test details to hidden fields
	function submitTestDetails() {
		if (document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input')) {
			document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input').setAttribute('value', 'Variant_3004');
		}
	}

	history.pushState = (function (f) {
		return function pushState() {
			var ret = f.apply(this, arguments);
			window.dispatchEvent(new Event('pushstate'));
			window.dispatchEvent(new Event('locationchange'));
			return ret;
		};
	})(history.pushState);
	history.replaceState = (function (f) {
		return function replaceState() {
			var ret = f.apply(this, arguments);
			window.dispatchEvent(new Event('replacestate'));
			window.dispatchEvent(new Event('locationchange'));
			return ret;
		};
	})(history.replaceState);
	window.addEventListener('popstate', function () {
		window.dispatchEvent(new Event('locationchange'));
	});
	window.addEventListener('locationchange', function () {
		removeTest();
		url = location.href;
		urlCheck(url);
		exitIntentPopup(false);
	});

	var url = location.href;
	urlCheck(url);

	function urlCheck(url) {

		let testURL = '';
		if (window.location.href.indexOf("/company") == -1 && window.origin == "https://drata.com" && window.location.href.indexOf("/demo") == -1) {
			testURL = window.location.href;
		}

		else if (window.location.href.indexOf("/demo") > -1) {
			console.log("demo page");
			waitForElm('form.hs-form-private .hs_cro_test_1 .input .hs-input').then(function (elm) {
				submitTestDetails();
			});
		}

		if (isSameUrl(url, testURL, true)) {
			createTest();
		} else {
			removeTest();
		}
	}

	function removeTest() {
		if (document.querySelector('.spz-modal-wrap')) {
			document.querySelector('.spz-modal-wrap').remove();
		}
		document.body.classList.remove("spz-3004");
	}

	function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
		currentUrl = currentUrl.includes("#") ?
			currentUrl.slice(0, currentUrl.indexOf("#")) :
			currentUrl;
		specifiedUrl = specifiedUrl.includes("#") ?
			specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
			specifiedUrl;
		if (!includeQueryParams)
			currentUrl = currentUrl.includes("?") ?
				currentUrl.slice(0, currentUrl.indexOf("?")) :
				currentUrl;
		if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
			return true;
		return false;
	}

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
})();