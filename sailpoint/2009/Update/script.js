(function () {
	// List of URLs
	const urls = [
		"https://www.sailpoint.com/",
		"https://www.sailpoint.com/demo",
		"https://www.sailpoint.com/demo/interactive",
		"https://www.sailpoint.com/products/identity-security-cloud/atlas",
		"https://www.sailpoint.com/contact-us",
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
			initTC();
		} else {
			if (document.querySelector('body').classList.contains('SPZ_2009_tc')) {
				document.querySelector('body').classList.remove('SPZ_2009_tc');
			}
			if (document.querySelector('body').classList.contains('spz_2009_tc_HF')) {
				document.querySelector('body').classList.remove('spz_2009_tc_HF');
			}
			removeSpecificCookieValue('SPZ_2009', 'SPZ_2009_TrueControl');
		}
	}

	function initTC() {
		let bodyLoaded = setInterval(function () {
			const body = document.querySelector('body');
			if (body && window.location.pathname === "/") {
				clearInterval(bodyLoaded);
				if (!body.classList.contains('SPZ_2009_tc')) {
					body.classList.add('SPZ_2009_tc');
					hiddenValue('SPZ_2009', 'SPZ_2009_TrueControl');
				}
			}
			else {
				clearInterval(bodyLoaded);
				document.body.classList.add('spz_2009_tc_HF');
				let callHF = setInterval(() => {
					setHiddenFieldValue();
				}, 100);

				setTimeout(() => {
					clearInterval(callHF);
				}, 10000);
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
