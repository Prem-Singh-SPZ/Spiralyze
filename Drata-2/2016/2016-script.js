(function () {
    var cssElement = document.createElement('style');
    cssElement.type = 'text/css';
    var cssCode = `.spz-2016 main div[class*="CollectionCheckboxes-accordionContainer"] {
	display: none;
}
.spz-2016 .spz-tiles {
	width: 100%;
	max-width: 1248px;
	margin: 11px auto 41px;
}
.spz-2016 [class*="Page-individualContentContainer"] section[variant="collectionCheckboxesSectionWrapper"]{
    min-height: auto;
}
.spz-2016 .spz-tiles .tiles-items {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 24px;
}
.spz-2016 .spz-tiles .tile-item {
	border-radius: 8px;
	border: 1px solid #DDE3EB;
	background: #FFF;
	padding: 27px 15px 19px 15px;
	text-align: center;
	position: relative;
	cursor: pointer;
}
.spz-2016 .spz-tiles .tile-item::before {
	position: absolute;
	content: "";
	width: 24px;
	height: 24px;
	background: #F6F8FA;
	border: 1px solid #DDE3EB;
	border-radius: 6px;
	top: 11px;
	left: 11px;
	pointer-events: none;
}
.spz-2016 .spz-tiles .tile-item::after {
	position: absolute;
	content: "";
	width: 12px;
	height: 10px;
	background-image: url("//res.cloudinary.com/spiralyze/image/upload/v1729589762/drata/2016/Vector-Stroke.svg");
	background-size: contain;
	background-repeat: no-repeat;
	top: 18px;
	left: 17px;
	pointer-events: none;
	opacity: 0;
}
.spz-2016 .spz-tiles .tile-item.active::before {
	background: #1793FF;
	border-color: #1793FF;
}
.spz-2016 .spz-tiles .tile-item.active::after {
	opacity: 1;
}
.spz-2016 .spz-tiles .tile-item:hover {
	border-color: #84CCFF;
	box-shadow: 0px 2.98px 5.96px -2.98px rgba(16, 24, 40, 0.06);
}
.spz-2016 .spz-tiles .tile-item.active{
	border-color: #1793FF;
	box-shadow: 0px 5.957px 11.915px -2.979px rgba(16, 24, 40, 0.10), 0px 2.979px 5.957px -2.979px rgba(16, 24, 40, 0.06);
}
.spz-2016 .tile-item .tile-image {
	width: 64px;
	height: 64px;
	object-fit: contain;
}
.spz-2016 .tile-item .tile-heading {
	color: #293642;
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
	line-height: 26px;
	margin: 10px auto 3px;
}
.spz-2016 .tile-item.active .tile-heading {
  color: #0C131A;
}
.spz-2016 .tile-item .tile-description {
	color: #485665;
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 20px;
}
@media(max-width: 1199.98px) {
	.spz-2016 .spz-tiles {
    max-width: 704px;
    margin: 8px auto 40px;
	}
	.spz-2016 .spz-tiles .tiles-items {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px 16px;
	}
  .spz-2016 .spz-tiles .tile-item:nth-child(05) .tile-description {
    padding: 0 19px;
  }
  .spz-2016 .spz-tiles .tile-item:nth-child(06) .tile-description {
    padding: 0 15px;
  }
}
@media(max-width: 767.98px) {
	.spz-2016 .spz-tiles {
    max-width: 328px;
    margin: 7px auto 41px;
	}
	.spz-2016 .spz-tiles .tiles-items {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
	}
	.spz-2016 .spz-tiles .tile-item {
    padding: 19px 11px;
	}
	.spz-2016 .tile-item .tile-image {
    width: 48px;
    height: 48px;
	}
	.spz-2016 .tile-item .tile-heading {
    font-size: 16px;
    line-height: 24px;
    margin: 9px auto 4px;
	}
	.spz-2016 .tile-item .tile-description {
    font-size: 12px;
    line-height: 18px;
    padding: 0 !important;
	}
}`;
    cssElement.appendChild(document.createTextNode(cssCode));
    document.head.appendChild(cssElement);

    const heroSelector = `div[class*="CollectionCheckboxes-accordionContainer"]`;
    const position = "beforebegin";
    const heroContent = {
        tiles: {
            tilesItems: [
                {
                    tileImageURL: `//res.cloudinary.com/spiralyze/image/upload/v1729583645/drata/2016/SOC_2.svg`,
                    imageAlt: `SOC 2`,
                    tileHeading: `SOC 2`,
                    tileDescription: `Automates the SOC 2 process so you can close deals faster.`,
                },
                {
                    tileImageURL: `//res.cloudinary.com/spiralyze/image/upload/v1729747613/drata/2016/ISO-27001.png`,
                    imageAlt: `ISO 27001`,
                    tileHeading: `ISO 27001`,
                    tileDescription: `The complete ISO 27001 playbook for seamless audits.`,
                },
                {
                    tileImageURL: `//res.cloudinary.com/spiralyze/image/upload/v1729583645/drata/2016/PCI_DSS.svg`,
                    imageAlt: `PCI DSS`,
                    tileHeading: `PCI DSS`,
                    tileDescription: `Manage PCI controls and requirements from a single dashboard.`,
                },
                {
                    tileImageURL: `//res.cloudinary.com/spiralyze/image/upload/v1729583644/drata/2016/HIPAA.svg`,
                    imageAlt: `HIPAA`,
                    tileHeading: `HIPAA`,
                    tileDescription: `Save time managing health information with premapped controls.`,
                },
                {
                    tileImageURL: `//res.cloudinary.com/spiralyze/image/upload/v1729583644/drata/2016/GDPR.svg`,
                    imageAlt: `GDPR`,
                    tileHeading: `GDPR`,
                    tileDescription: `Collect and process data for organizations in the EU.`,
                },
                {
                    tileImageURL: `//res.cloudinary.com/spiralyze/image/upload/v1729583645/drata/2016/Custom_Frameworks.svg`,
                    imageAlt: `Custom Frameworks`,
                    tileHeading: `Other`,
                    tileDescription: `Build custom frameworks that align with your goals.`,
                },
            ],
        },
    };
    function addHeroTiles(tilesData, whereToPut, heroSelector) {
        // Remove spz-tiles if already present
        if (document.querySelector('.spz-tiles')) {
            document.querySelector('.spz-tiles').remove();
        }

        const formTemplate = `<div class="spz-tiles">
            ${tilesData.tiles.length !== 0 ? `<div class="tiles-items">
                        ${tilesData.tiles.tilesItems.map((item) => {
            return `<div class="tile-item">
                                <img src="${item.tileImageURL}" class="tile-image" alt="${item.imageAlt}"/>
                                <div class="wrap-tile-info">
                                    <div class="tile-heading">${item.tileHeading}</div>
                                    <div class="tile-description">${item.tileDescription}</div>
                                </div>
                            </div>`;
        }).join("")}
                    </div>`
                : ``}
            </div>`;

        document.querySelector(heroSelector).insertAdjacentHTML(whereToPut, formTemplate);
        document.querySelectorAll(".tiles-items .tile-item").forEach((item) => {
            item.addEventListener("click", (e) => {
                e.stopPropagation();
                if (e.target.classList.contains("tile-item")) {
                    e.target.classList.toggle("active");
                } else {
                    if (e.target.parentElement.classList.contains("tile-item")) {
                        e.target.parentElement.classList.toggle("active");
                    } else {
                        e.target.parentElement.parentElement.classList.toggle("active");
                    }
                }
            });
        });
    }

    function createTest() {
        let bodyLoaded = setInterval(function () {
            const body = document.querySelector('body');
            if (body) {
                clearInterval(bodyLoaded);
                if (!document.querySelector('.spz-tiles')) {
                    body.classList.add('spz-2016');
                    waitForElm(`.spz-2016 main section[variant="collectionCheckboxesSectionWrapper"] div[class*="CollectionCheckboxes-accordionContainer"]`).then(function () {
                        // if (!document.querySelector('.spz-tiles')) {

                        addHeroTiles(heroContent, position, heroSelector);
                        // }

                        createCookie('spz-2016-loaded', 'true', 1);

                    });
                }
                // else {
                //     if (!document.querySelector('.spz-2016 .spz-tiles')) {
                //         waitForElm(`.spz-2016 main section[variant="collectionCheckboxesSectionWrapper"] div[class*="CollectionCheckboxes-accordionContainer"]`).then(function () {
                //             addHeroTiles(heroContent, position, heroSelector);
                //         });
                //     }
                // }
            }
        });
    }

    function loadfilled2016() {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-prefill-2016')) {
            bodyEle.classList.add('spz-prefill-2016');
            demoChecked();
        }
        // waitForElm('form.hs-form-private .hs_cro_test_2 .input .hs-input').then(function () {
        //     let setValue = setInterval(() => {
        //         if (document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input').getAttribute('value') == '2020_Control') {
        //             clearInterval(setValue);
        //         }
        //         document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input').setAttribute('value', '2020_Control');
        //     }, 100);
        // });
    }

    //Passing test details to hidden fields
    function submitTestDetails(cro_test) {
        if (document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input')) {
            document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input').setAttribute('value', cro_test);
        }
    }

    function demoChecked() {
        const sInt = setInterval(() => {
            var cro_field = document.querySelector('form.hs-form-private .hs_cro_test_2 .input .hs-input');

            // Check if spz-2016-loaded cookie is present and cro_field is present
            if ((cro_field && cro_field.val != "") && isCookieExist('spz-2016-loaded')) {
                clearInterval(sInt);
                submitTestDetails('2020_Control');

                // deleteCookie('spz-2016-loaded');
            }
        }, 1000);

        setTimeout(() => {
            clearInterval(sInt);
        }, 10000);
    }

    function removeTest() {
        if (document.querySelector('.spz-2016')) {
            document.body.classList.remove("spz-2016");
        }
        if (document.querySelector('.spz-tiles')) {
            document.body.classList.remove("spz-tiles");
        }
        if (document.querySelector('.spz-prefill-2016')) {
            document.body.classList.remove("spz-prefill-2016");
        }
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
        // var targetTestURL = 'https://drata.com/';
        if (window.location.pathname === "/") {
            createTest();
        } else if (window.location.pathname.indexOf("/demo") > -1) {
            loadfilled2016();
            waitForElm('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video').then(function () {
                if (document.querySelector('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video')) {
                    document.querySelector('div[class*="MuiModal-root"] div[class*="Modal-styledReactPlayer"] video').setAttribute('playsinline', '');
                }
            });
        } else {
            removeTest();
        }
    }

    // function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    //     currentUrl = currentUrl.includes("#")
    //         ? currentUrl.slice(0, currentUrl.indexOf("#"))
    //         : currentUrl;
    //     specifiedUrl = specifiedUrl.includes("#")
    //         ? specifiedUrl.slice(0, specifiedUrl.indexOf("#"))
    //         : specifiedUrl;
    //     if (includeQueryParams)
    //         currentUrl = currentUrl.includes("?")
    //             ? currentUrl.slice(0, currentUrl.indexOf("?"))
    //             : currentUrl;
    //     if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
    //         return true;
    //     return false;
    // }

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