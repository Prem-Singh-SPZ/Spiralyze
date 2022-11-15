'use strict'
const TEST_ENV = {
    name: 'spz-6001',
    date: '27-10-22',
    base_url: 'https://www.yourhomesolutions.com/', // control domain url
    main_class: 'body', // parent class where test is going to be applied
}

var allProducts = [];
// If you need to load any external libs or content
const content = document.createElement('script');
content.src = 'https://res.cloudinary.com/spiralyze/raw/upload/f_auto/AWR/PHS/6001/src/product.js';
document.head.appendChild(content);
content.onload = function () {
    let url = location.href;
    urlCheck(url);
}

// let lottie = document.createElement("script");
// lottie.type = "text/javascript";
// lottie.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
// document.head.appendChild(lottie);

// let SPZLoader = document.createElement('div');
// SPZLoader.className = 'spz-loader';
// SPZLoader.innerHTML = '<lottie-player src="https://res.cloudinary.com/spiralyze/raw/upload/v1659516330/AWR/4002-AWR-PHS-Home-Redesign/awr-phs-loader.json" background="transparent"  speed="1"  style="width: 300px; height: 300px;" loop autoplay></lottie-player>';
// document.querySelector('body').appendChild(SPZLoader);

function loadTest() {

    // if (jQuery('body #zip_modal').is(':visible')) {
    //     jQuery('#zip_modal').submit(function (e) {
    //         if (e.result === undefined)
    //             window.onbeforeunload = function () {
    //                 document.querySelector('.spz-loader').classList.add('active');
    //                 setTimeout(() => {
    //                     this.reset();
    //                 },
    //                     5000
    //                 );

    //             }
    //     });
    // }

    if (!jQuery('body #zip_modal').is(':visible')) {
        var cookieName = TEST_ENV.name + "-" + TEST_ENV.date;
        var cookieValue = "1";
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
        // Set test class
        // document.querySelector('.spz-loader').classList.add('active');
        document.body.classList.add('spz-6001');

        //Header Changes
        document.querySelector('#top-nav-container').classList.remove('hidden-sm');

        if (document.querySelectorAll('#top-nav-container .header__link').length < 1) {
            cloneElement('.header .header__wrapper .container.no-p .row:last-child div:first-child', '#top-nav-container .container');
            document.querySelector('#top-nav-container .col-lg-12').classList.add('header-logo');
            document.querySelector('#top-nav-container .col-lg-12').classList.remove('col-md-6', 'col-xs-10', 'col-lg-12');
            document.querySelector('.header .header__wrapper .container.no-p .row:first-child .zip-col').classList.remove('col-md-6', 'col-md-push-6', 'col-sm-12', 'col-xs-12');

            document.querySelector('#top-nav-container .container').insertAdjacentHTML('beforeend', `<div class="header-menu-options"> <div class="contact-wrapper"><svg width="14" height="14">    <image xlink:href="https://res.cloudinary.com/spiralyze/image/upload/v1667199587/AWR/PHS/6001/src/Vector.svg" width="14" height="14"/ alt="phone">  </svg> <span>888-801-5057</span></div></div>`);
            moveElement('#top-nav-container .container > a', '#top-nav-container .header-menu-options');
            moveElement('#top-nav-container .container > span', '#top-nav-container .header-menu-options');

            document.querySelector('#top-nav-container .header__logo-image').setAttribute('src', 'https://cdn.shopify.com/s/files/1/1463/6228/files/logo-georgia.png?v=11565918611729204973');
            document.querySelector('.header__wrapper .container.no-p .header__logo-image').setAttribute('src', 'https://cdn.shopify.com/s/files/1/1463/6228/files/logo-georgia.png?v=11565918611729204973');

        }

        //Insert add to cart button inside product card
        if (document.querySelectorAll('.related-plans .collection__grid > .collection__grid-item .cart-btn-spz').length < 1) {
            document.querySelectorAll('.related-plans .collection__grid > .collection__grid-item').forEach(function (v, i) {
                v.insertAdjacentHTML('beforeend', `<div class="cart-btn-spz">
            <button class="add-to-cart">Enroll Now <img src="https://res.cloudinary.com/spiralyze/image/upload/v1667224513/AWR/PHS/6001/src/right_arrow.png" alt="Enroll Now"></img></button>
            </div>`)
            });
        }
        document.querySelectorAll('.collection__grid-item .collection__product-price').forEach(function (v, i) {
            v.innerHTML = v.innerHTML.replace(' / ', ' Per ')
        });

        //Add to cart button Functionality
        jQuery(".related-plans .collection__grid > .collection__grid-item .cart-btn-spz .add-to-cart").unbind().click(function () {
            let prodId = jQuery(this).closest('.collection__grid-item').find('.related-overlay a').attr('href');
            let parts = prodId.split("="),
                last_part = parts[parts.length - 1];
            CartJS.addItem(last_part, 1, {}, {

                // Define a success callback to display a success message.
                "success": function (data, textStatus, jqXHR) {
                    // alert('Successfully added to cart.');
                    if (document.querySelectorAll('.drawers .mini-cart__content .mini-cart__items .mini-cart__notification').length == 0) {
                        document.querySelector('.drawers .mini-cart__content .mini-cart__items').insertAdjacentHTML('afterbegin', '<li class="mini-cart__notification">Your product has been added!</li>');
                    }
                    document.querySelector('.drawers .mini-cart__content .mini-cart__items .mini-cart__notification').style.display = 'block';
                },

                // Define an error callback to display an error message.
                "error": function (jqXHR, textStatus, errorThrown) {
                    // alert('There was a problem adding to the cart!');
                }

            });
            setTimeout(function () {
                jQuery('.header__link[data-action="open-mini-cart"]').click();
            }, 500);

            setTimeout(function () {
                jQuery('.drawers .mini-cart__content .mini-cart__items .mini-cart__notification').fadeOut();
            }, 2000);
        });

        //Product image update
        if (document.querySelectorAll('.related-plans .collection__grid > .collection__grid-item .collection__product-image').length > 1) {
            document.querySelectorAll('.related-plans .collection__grid > .collection__grid-item').forEach(function (v, i) {
                let prodTitle = v.querySelector('.collection__product-title a').textContent;
                const prodImage = v.querySelector('.collection__product-image');
                if (undefined != allProducts) {
                    allProducts.some(function (prod, i) {
                        if (prodTitle == prod.productName) {
                            prodImage.setAttribute('src', prod.productImage);
                            setTimeout(function () {
                                prodImage.style.opacity = 1;
                            }, 500);
                        }
                    });
                }
            });
        }
        document.querySelector('.navigation-sidebar__list .navigation-sidebar__item #registerb span').innerText = 'Create Account';
        document.querySelector('.navigation-sidebar__list .navigation-sidebar__item:nth-child(7) a span').innerText = 'Login';

        document.body.classList.add("loaded");
        // setTimeout(() => {
        //     document.querySelector('.spz-loader').classList.remove('active');
        // },
        //     2000
        // );

    }
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
    if (window.location.pathname.indexOf("/pages/") > -1) {
        testURL = window.location.href;
    }
    if (isSameUrl(url, testURL, true)) {
        // waitForElement(TEST_ENV.main_class).then(function () {
        //     loadTest();
        // });
        loadTest();
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
    document.body.classList.remove('spz-6001');
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