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
        document.querySelectorAll('.product-list .product-item .card').forEach(function (v, i) {
            v.querySelector('.card-body .price-cls .small-txt').innerHTML = '/ Month';

            //Update image of cards
            let prodTitle = v.querySelector('.program-name').textContent.trim();
            let prodImage = v.querySelector('.card-img');
            
            if (undefined != singleProduct) {
                singleProduct.some(function (prod, i) {
                    console.log(prodTitle);
                    console.log(prod.productName);
                    if (prodTitle == prod.productName) {
                        
                        prodImage.setAttribute('src', prod.productImage);
                        setTimeout(function () {
                            prodImage.style.opacity = 1;
                        }, 500);
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
                                    if (!u.parentElement.querySelector('.card-body .amount-save .save-price-spz')) {
                                        u.parentElement.querySelector('.card-body .price-cls').insertAdjacentHTML('afterend', `<div class="save-price-spz">save $` + finalprice + `</div>`);
                                        u.parentElement.querySelector('.card-body').classList.add('amount-save');
                                    }
                                }
                            });
                        }

                    }
                });
            })
        })
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
});

let url = location.href;
urlCheck(url);
function urlCheck(url) {
    let testURL = '';
    if (window.location.pathname.indexOf("/products/") > -1) {
        testURL = window.location.href;
    }
    if (isSameUrl(url, testURL, true)) {
        // waitForElm(TEST_ENV.main_class).then(function () {
        //     loadTest();
        // });
        // loadTest();
        setTimeout(function () {
            window.addEventListener("resize", function () {
                loadTest();
            });
        }, 5000);
        if (document.querySelectorAll(TEST_ENV.main_class).length > 0) {
            loadTest();
        }
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
    document.body.classList.remove('spz-2041');
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

// Set text, image etc.
// elm: Element where we have to set content
// value: Value to be set
// type: Pass content type - TEXT / IMAGE etc.
function setContent(elm, value, type = 'STRING') {
    if (document.querySelector(elm)) {
        const tg = document.querySelector(elm);
        if (type == 'IMAGE') {
            tg.src = value;
        } else {
            tg.innerText = value;
        }
    }
}

// Clone element
// source: Element which we have to copy
// target: New location of an element 
function cloneElement(source, target) {
    if (document.querySelector(source) && document.querySelector(target)) {
        const sc = document.querySelector(source);
        const clone = sc.cloneNode(true);
        document.querySelector(target).appendChild(clone);
    }
}

// Move element
// sourceElm: Element which we have to move
// targetLoc: New location of an element 
function moveElement(sourceElm, targetLoc) {
    const f = document.createDocumentFragment();
    if (document.querySelector(sourceElm) != null) {
        f.appendChild(document.querySelector(sourceElm));
        document.querySelector(targetLoc).appendChild(f);
    }
}

// Add class 'safari' (used for cart scrollbar)
if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    document.body.classList.add('safari')
}