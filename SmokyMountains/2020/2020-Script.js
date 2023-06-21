(function () {
	var bodyInterval = setInterval(function () {
		var bodyEle = document.querySelector('body');
		if (!bodyEle.classList.contains('spz-2020')) {
			clearInterval(bodyInterval);
			document.body.classList.add('spz-2020');
			/* add code here */
			waitForElm("#main .vl-main .review_slider_wrapper").then(function () {
				if (document.querySelectorAll("#main .vl-main .vl-book .spz-2020-content").length == 0) {
					loadTest();
				}
			});

			function loadTest() {
				if (window.innerWidth >= 1024) {
					document.querySelector("#main .vl-main aside.vl-main__sidebar .vl-book").insertAdjacentHTML('afterend', `<div class="spz-2020-content desktop-only"><div class="content-section"><div class="content-parent"><h6>Why book with us? </h6></div><ul class="content-list"><li class="list-item"><span>Free personalized gift —</span> choose your reward after booking. Gift cards, dining, activities, and more.</li> <li class="list-item"><span>Professionally cleaned —</span> all properties are thoroughly cleaned and sanitized.</li><li class="list-item"><span>Exclusive properties —</span> find cabins not listed on other sites.</li> </ul></div></div>`);
				}
				else {
					document.querySelector("#main .vl-main  .vl-book").insertAdjacentHTML('afterend', `<div class="spz-2020-content mobile-only"><div class="content-section"><div class="content-parent"><h6>Why book with us? </h6></div><ul class="content-list"><li class="list-item"><span>Free personalized gift —</span> choose your reward after booking. Gift cards, dining, activities, and more.</li> <li class="list-item"><span>Professionally cleaned —</span> all properties are thoroughly cleaned and sanitized.</li><li class="list-item"><span>Exclusive properties —</span> find cabins not listed on other sites.</li> </ul></div></div>`);
				}

				// Add class 'safari' on body if browser is safari
				document.body.classList.add(getOS());
			}

			function getOS() {
				var userAgent = window.navigator.userAgent,
					platform = window.navigator.platform,
					macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
					windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
					iosPlatforms = ['iPhone', 'iPad', 'iPod'],
					os = null;

				if (macosPlatforms.indexOf(platform) !== -1) {
					os = 'safari';
				} else if (iosPlatforms.indexOf(platform) !== -1) {
					os = 'safari';
				} else if (windowsPlatforms.indexOf(platform) !== -1) {
					os = 'Windows';
				} else if (/Android/.test(userAgent)) {
					os = 'Android';
				} else if (!os && /Linux/.test(platform)) {
					os = 'Linux';
				}

				return os;
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
		}
	});
})()