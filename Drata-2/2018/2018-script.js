var cssElement = document.createElement('style');
cssElement.type = 'text/css';
var cssCode = `.spz-2018 div[class*="CollectionImageCollage-root"] {
	padding-bottom: 123px;
}
.spz-2018 .spz-customer-stats .spz-wrapper {
	width: 100%;
	max-width: 1344px;
	padding: 0 32px;
	margin: 0 auto;
}
.spz-2018 .spz-customer-stats .section-heading {
	color: #000;
	text-align: center;
	font-size: 32px;
	font-style: normal;
	font-weight: 900;
	line-height: 40px;
	letter-spacing: -0.64px;
	margin: 0;
}
.spz-2018 .spz-customer-stats .customer-stats-block {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	background: #EEF2F6;
	border: 1px solid #DDE3EB;
	border-radius: 24px;
	padding: 23px 0 22px;
	margin: 31px auto 22px;
}
.spz-2018 .customer-stats-block .customer-stats-item {
	display: inline-flex;
	flex-flow: column;
	align-items: center;
	width: calc(100% / 3);
}
.spz-2018 .customer-stats-block .customer-stats-item:nth-child(2) {
	border-width: 0px 1px;
	border-style: solid;
	border-color: #DDE3EB;
}
.spz-2018 .customer-stats-block .customer-stats-item .stats-number {
	color: #0580E8;
	text-align: center;
	font-size: 64px;
	font-style: normal;
	font-weight: 900;
	line-height: 72px;
	letter-spacing: -1.28px;
	margin: 0 0 13px;
}
.spz-2018 .customer-stats-block .customer-stats-item .stats-info {
	color: #697586;
	text-align: center;
	font-size: 18px;
	font-style: normal;
	font-weight: 800;
	line-height: 26px;
	margin: 0;
}
@media(max-width: 1023.98px) {
	.spz-2018 div[class*="CollectionImageCollage-root"] {
    padding-bottom: 81px;
	}
	.spz-2018 .spz-customer-stats .customer-stats-block {
		padding-bottom: 23px;
		margin-bottom: 7px;
	}
	.spz-2018 .customer-stats-block .customer-stats-item .stats-number {
    font-size: 42px;
    line-height: 48px;
    letter-spacing: -0.84px;
		margin-bottom: 12px;
	}
	.spz-2018 .customer-stats-block .customer-stats-item .stats-info {
    font-size: 16px;
    line-height: 24px;
	}
}
@media(max-width: 767.98px) {
	.spz-2018 div[class*="CollectionImageCollage-root"] {
    padding-bottom: 94px;
	}
	.spz-2018 .spz-customer-stats .spz-wrapper {
    padding: 0 16px;
	}
	.spz-2018 .spz-customer-stats .section-heading {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: normal;
	}
	.spz-2018 .spz-customer-stats .customer-stats-block {
    padding: 0 23px;
    margin: 31px auto 6px;
	}
	.spz-2018 .customer-stats-block .customer-stats-item {
    width: 100%;
    padding: 21px 0 20px;
	}
	.spz-2018 .customer-stats-block .customer-stats-item:nth-child(2) {
    border-width: 1px 0;
    padding: 20px 0;
	}
}`;
cssElement.appendChild(document.createTextNode(cssCode));
document.head.appendChild(cssElement);

(function () {
    function createTest() {
        let bodyLoaded = setInterval(function () {
            const body = document.querySelector('body');
            if (body) {
                clearInterval(bodyLoaded);
                if (!body.classList.contains('spz-2018')) {
                    body.classList.add('spz-2018');
                }

                waitForElm(`.spz-2018 main section[variant="collectionImageCollageSectionWrapper"]`).then(function () {
                    if (document.querySelector(`.spz-2018 .spz-customer-stats`) === null) {
                        document.querySelector(`.spz-2018 main section[variant="collectionImageCollageSectionWrapper"]`).insertAdjacentHTML('afterend', `<section class="spz-customer-stats">
              <div class="spz-wrapper">
                <h4 class="section-heading">Why Do Customers Trust Drata? Results.</h4>
                <div class="customer-stats-block">
                  <div class="customer-stats-item">
                    <h3 class="stats-number">4x</h3>
                    <p class="stats-info">Faster Compliance</p>
                  </div>
                  <div class="customer-stats-item">
                    <h3 class="stats-number">80%</h3>
                    <p class="stats-info">Workload Automated</p>
                  </div>
                  <div class="customer-stats-item">
                    <h3 class="stats-number">200</h3>
                    <p class="stats-info">Hours Saved</p>
                  </div>
                </div>
              </div>
            </section>`);
                    }

                    submitTestDetails('Variant_2018a');
                })

                createCookie('spz-2018-loaded', 'true', 1);

            }
        });
    }

    function demoChecked() {
        const sInt = setInterval(() => {
            var cro_field = document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input');

            // Check if spz-2018-loaded cookie is present and cro_field is present
            if ((cro_field && cro_field.val != '') && isCookieExist('spz-2018-loaded')) {
                clearInterval(sInt);
                submitTestDetails('Variant_2018a');

                deleteCookie('spz-2018-loaded');
            }
        }, 1000);

        setTimeout(() => {
            clearInterval(sInt);
        }, 10000);
    }

    // Passing test details to hidden fields
    function submitTestDetails(cro_test) {
        if (document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input')) {
            document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input').setAttribute('value', cro_test);
        }
    }

    function removeTest() {
        setTimeout(() => {
            if (document.querySelector('.spz-2018')) {
                document.body.classList.remove("spz-2018");
            }
            if (document.querySelector('.spz-drata-prefill-2018')) {
                document.body.classList.remove("spz-drata-prefill-2018");
            }
        }, 2000);
    }

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
    var url = location.href;
    urlCheck(url);
    window.addEventListener("locationchange", function () {
        url = location.href;
        urlCheck(url);
    });

    function urlCheck(url) {
        if (window.location.pathname === "/") {
            createTest();
        }
        else if (window.location.pathname.indexOf("/demo") > -1) {
            demoChecked();
        }
        else {
            removeTest();
        }
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
            observer.observe(document, {
                attributes: true,
                childList: true,
                subtree: true,
                characterData: true,
            });
        });
    }

    // Create cookie
    function createCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    // Check if cookie exists
    function isCookieExist(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Delete cookie
    function deleteCookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
})();