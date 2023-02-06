(function () {

    'use strict'
    const TEST_ENV = {
        name: 'spz-2041',
        date: '02-12-22',
        base_url: 'https://www.awrusa.com/', // control domain url
        main_class: 'body', // parent class where test is going to be applied
    }
    var comboManagement = [];
    var singleProduct = [];
    // If you need to load any external libs or content
    const content = document.createElement('script');
    content.src = 'https://res.cloudinary.com/spiralyze/raw/upload/f_auto/AWR/2041/2041-product.js';
    document.head.appendChild(content);
    content.onload = function () {
        let url = location.href;
        urlCheck(url);
    }
    const baseUrl = 'https://scpprd.prod.apimanagement.us10.hana.ondemand.com/api/hos/api';
    const apiKey = 'Ng0glnSyFyARBd7AGghwnAAjV1ORz5Vp';

    function loadTest() {

        //Create cookie
        var cookieName = TEST_ENV.name + "-" + TEST_ENV.date;
        var cookieValue = "1";
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
        // Set test class
        document.body.classList.add('spz-2041');
        //test function call
        loadTest_2041();
        document.body.classList.add("loaded");
    }

    function loadTest_2041() {
        waitForElm('.product-list .product-item .card-body .price-cls .small-txt').then(function () {
            // document.querySelector('hos-product .product-list-area').classList.add('prod-card-2041');
            document.querySelectorAll('.product-list .product-item .card').forEach(function (v, i) {
                v.querySelector('.card-body .price-cls .small-txt').innerText = ' / Month';
                v.querySelector('.card-body[class] .row:nth-child(2) button.enroll-now[class]').innerText = 'Enroll Now';
                v.parentElement.parentElement.classList.remove('col-sm-6', 'col-md-3');
                v.parentElement.parentElement.classList.add('col-xl-3', 'col-md-6', 'prod-card-2041');
                if (v.parentElement.querySelectorAll('.product-feature').length == 0) {
                    v.parentElement.insertAdjacentHTML('beforeend', `<div class="product-text prod-feature">
                <div class="product-feature">
                <ul class="product-feature-list"><p>What's Covered</p></ul>
                    </div>
                    <div class="product-cart-info"></div></div>`)
                }
                // v.parentElement.parentElement.classList.add('prod-card-2041');

                //Update image of cards
                let prodTitle = v.querySelector('.program-name').textContent.trim();
                let prodImage = v.querySelector('.card-img');

                if (undefined != singleProduct) {
                    singleProduct.some(function (prod, i) {
                        if (prodTitle == prod.productName) {
                            if (prod.productImage) {
                                // prodImage.setAttribute('src', prod.productImage);
                                prodImage.src = prod.productImage;
                                setTimeout(function () {
                                    prodImage.style.opacity = 1;
                                }, 500);
                            }

                            //Add Popular tag
                            if ('popular' == prod.isPopular) {
                                v.classList.add('is-popular');
                            }
                            if ('yes' == prod.isBestValue) {
                                v.classList.add('is-best-value');
                            }
                        }
                    });
                }
            });

            //Add save tag to product cards
            const allProducts = document.querySelectorAll('.product-list .product-item .program-name');
            comboManagement.forEach(function (cmbo, i) {
                let totalprice = 0;
                let comboPrice = 0;
                allProducts.forEach(function (v, i) {
                    if (v.innerText == cmbo.comboName) {
                        comboPrice = v.parentElement.querySelector('.card-body .price-cls .notranslate').innerHTML;
                        comboPrice = Number(comboPrice.replaceAll("$", ""));
                    }
                });

                cmbo.comboProducts.forEach(function (ind, intProduct) {
                    allProducts.forEach(function (v, i) {
                        if (v.innerText == ind) {
                            const singlePrice = v.parentElement.querySelector('.card-body .price-cls .notranslate').innerHTML;
                            totalprice += Number(singlePrice.replaceAll("$", ""));
                            var finalprice = (totalprice - comboPrice).toFixed(2);
                            if (comboPrice > 0 && finalprice >= 1) {
                                allProducts.forEach(function (u, p) {
                                    if (u.innerText == cmbo.comboName) {

                                        if (!u.parentElement.querySelector('.card-body.amount-save .save-price-spz')) {
                                            u.parentElement.querySelector('.card-body .price-cls').insertAdjacentHTML('afterend', `<div class="save-price-spz">save $` + finalprice + `</div>`);
                                            u.parentElement.querySelector('.card-body').classList.add('amount-save');
                                        }
                                    }
                                });
                            }

                        }
                    });
                })
            });

            //Update Change link
            document.querySelector('.product-list-header .location-box button.change-link').innerText = 'Change';
            if (document.querySelector('.prod-card-2041')) {
                getProducts();
                console.log('1')
            }
        });
    }

    // Generic
    history.pushState = (function (f) {
        return function pushState() {
            let ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('pushstate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    })(history.pushState);
    history.replaceState = (function (f) {
        return function replaceState() {
            let ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('replacestate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    })(history.replaceState);

    window.addEventListener('popstate', function () {
        window.dispatchEvent(new Event('locationchange'));
    });
    window.addEventListener('locationchange', function () {
        url = location.href;
        urlCheck(url);
        // if (window.location.pathname.indexOf("/products/") > -1) {
        if (window.location.pathname.indexOf("/products/") > -1) {
            // if (window.location.pathname.indexOf("/nj") || window.location.pathname.indexOf("/pa") || window.location.pathname.indexOf("/il") == -1) {
            const ltInt = setInterval(function () {
                if (document.querySelectorAll('.product-list').length > 0 && document.querySelectorAll('.prod-card-2041').length == 0 && (window.location.pathname.indexOf("/nj") || window.location.pathname.indexOf("/pa") || window.location.pathname.indexOf("/il")) == -1) {
                    loadTest();
                }
            }, 200);
            setTimeout(function () {
                if (document.querySelectorAll('.pace.pace-inactive .prod-card-2041').length > 0) {
                    clearInterval(ltInt)
                }
            }, 3000);
        }
        // }
        // }
    });

    let url = location.href;
    urlCheck(url);
    function urlCheck(url) {
        let testURL = '';
        if (window.location.pathname.indexOf("/products/") > -1 && (window.location.pathname.indexOf("/nj") || window.location.pathname.indexOf("/pa") || window.location.pathname.indexOf("/il")) == -1) {
            testURL = window.location.href;
        }
        else {
            removeTest();
        }
        if (isSameUrl(url, testURL, true)) {
            loadTest();
            setTimeout(function () {
                window.addEventListener("resize", function () {
                    loadTest();
                });
            }, 2000);
        } else {
            removeTest();
        }
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

    function removeTest() {
        document.body.classList.remove('spz-2041', 'loaded');
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

    // Add class 'safari' (used for cart scrollbar)
    if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
        document.body.classList.add('safari')
    }

    // Functions regarding API calls
    async function getProducts() {
        let zipCode;
        if (JSON.parse(localStorage.getItem('selectedAddress')) == null || JSON.parse(localStorage.getItem('selectedAddress')) == '') {
            let getPinLength = location.href.split('/').indexOf('products') + 1;
            zipCode = +location.href.split('/')[getPinLength];
        } else {
            zipCode = JSON.parse(localStorage.getItem('selectedAddress')).zipcode;
        }
        try {
            const zipResult = await getZipCode(zipCode);
            // const locResult = await getLocationCode(zipResult.locationCodeId);
            // const microSiteResult = await getMicroSite(locResult.locationCode);
            const defaultCodes = await getDefaultCodes(
                zipResult.locationCodeId,
                zipResult.syncSource
            );

            //  console.log(defaultCodes);

            defaultCodes.result.forEach((prodList, k) => {

                document.querySelectorAll(".product-list .product-item .card").forEach((viewProd, i) => {
                    let prName = viewProd.getAttribute('data-targettitle');
                    // prodList.customerProgramName = prodList.customerProgramName.replaceAll("-", "");
                    console.log(prName, '=' + prodList.webProgramName);
                    console.log('prName: ', prName);
                    if (prodList.webProgramName == prName && viewProd.querySelectorAll('.product-feature-list li').length < 1) {
                        // console.log('viewProd: ', viewProd.getAttribute('data-targettitle'))
                        prodList.coveredRepairs.forEach((feature) => {
                            viewProd.querySelector('.product-feature-list').insertAdjacentHTML('beforeend', '<li>' + feature.value + '</li>');
                        });
                    }

                });
            });
        } catch (error) {
            if (error.status === 404) {
                return { status: 'error', error: 'Zipcode not found' };
            } else if (error.status === 500) {
                return { status: 'error', error: 'No marketing codes found' };
            } else {
                return;
            }
        }
    }

    async function getZipCode(zipCode) {
        const result = await fetch(`${baseUrl}/location/zip_codes/${zipCode}?APIKey=${apiKey}`);
        if (result.status === 404) {
            throw { status: 404 };
        }

        return result.json();
    }

    async function getDefaultCodes(locationId, syncSource) {
        const urlSplit = location.href.split('/');
        const proSelDetail = JSON.parse(localStorage.getItem('providerSelectionDetails'));
        const isProSel = proSelDetail && (undefined != proSelDetail.providerValue && proSelDetail.providerValue == 'no');
        let migrateToOracle = syncSource === 'oracle' ? 'true' : 'false';
        let dcUrl = `${baseUrl}/product/marketing-codes/default-codes?location_code=${locationId}&allProducts=true&APIKey=${apiKey}`;

        if (isProSel) {
            const locCode = proSelDetail.locationCodeId || localStorage.getItem('location_code');
            if ((urlSplit.indexOf('products') > -1) && (location.href.indexOf('150') > -1)) {
                migrateToOracle = true;
            }
            dcUrl = `${baseUrl}/product/marketing-codes/default-codes?contact_type=1&allProducts=true&location_code=${locCode}&APIKey=${apiKey}`;
        }

        const result = await fetch(dcUrl,
            {
                headers: {
                    'Migrated-To-Oracle': migrateToOracle,
                },
                method: 'GET',
            }
        );
        if (result.status === 500) {
            throw { status: 500 };
        }
        return result.json();
    }
})();
