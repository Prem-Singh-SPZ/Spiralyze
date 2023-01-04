(function () {

    const TEST_ENV_2014 = {
        name: 'spz-desk-sticky-footer-v1',
        class: 'spz-2014-v1',
        date: '05-12-2022',
        base_url: 'https://smokymountains.com/',
        main_class: '.vl-book',
    }

    document.querySelector('head').insertAdjacentHTML('beforeend', '<link href="https://fonts.cdnfonts.com/css/sf-pro-display?styles=98774,98770" rel="stylesheet">');


    function createTest2014() {
        var cookieName = TEST_ENV_2014.name + "-" + TEST_ENV_2014.date;
        var cookieValue = "1";
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;

        var checkLoad = setInterval(function () {
            if (!document.querySelector("#booking-button").classList.contains("--loading")) {
                clearInterval(checkLoad);
                //         if (document.querySelector("#booking-button").classList.contains('--unavailable')) {
                //             document.body.classList.remove(TEST_ENV_2014.class);
                //         } else {
                document.body.classList.add(TEST_ENV_2014.class);
                stickyFooter()
                //         }
            }
        });
    }

    function stickyFooter() {

        // Set test class
        document.body.classList.add(TEST_ENV_2014.class);



        window.addEventListener('scroll', function (e) {
            if (window.scrollY > 575) {
                updateSticky()
            } else if (window.scrollY > 100 && window.scrollY < 575) {
                removeSticky()
            }
        });
    }

    function updateSticky() {
        if (document.querySelectorAll('#book-form-arrival').length > 0) {

            const arriveInputEl = document.querySelector('[name="arrival"]');
            const departInputEl = document.querySelector('[name="departure"]');
            const guestsInputEl = document.querySelector('[name="guests"]');

            arriveInputEl.setAttribute('placeholder', 'Arrive');
            departInputEl.setAttribute('placeholder', 'Depart');

            if (document.querySelectorAll('.cal-ico-spz').length == 0) {
                departInputEl.parentElement.insertAdjacentHTML('beforeend', '<span class="cal-ico-spz"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1670221921/SmokyMountains/2014/calendar.svg" /></span>')
                arriveInputEl.parentElement.insertAdjacentHTML('beforeend', '<span class="cal-ico-spz"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1670221921/SmokyMountains/2014/calendar.svg" /></span>')
                guestsInputEl.parentElement.insertAdjacentHTML('beforeend', '<span class="cal-ico-spz"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1670252355/SmokyMountains/2014/guest.svg" /></span>')
            }

            if (!document.querySelector('#booking-button .arrow-ico-spz')) {
                document.querySelector("#booking-button #submit-button-text").textContent = 'Reserve';
                document.querySelector('#booking-button').insertAdjacentHTML('beforeend', `<span class="arrow-ico-spz"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1670404627/SmokyMountains/2014/btn-arrow.svg" /></span>`)
            }
        }

        document.body.classList.add('form-sticky-spz');
        document.querySelector('.vl-main').classList.add('sticky-footer-spz');
        document.querySelector('#vl-nearby').style.paddingTop = '360px';
        if (document.querySelectorAll('.spz_container.spz_header').length == 0) {
            reviews();
        }
    }

    function removeSticky() {

        if (document.querySelectorAll('#book-form-arrival').length > 0) {

            const arriveInputEl = document.querySelector('[name="arrival"]');
            const departInputEl = document.querySelector('[name="departure"]');
            const guestsInputEl = document.querySelector('[name="guests"]');

            arriveInputEl.setAttribute('placeholder', 'Choose');
            departInputEl.setAttribute('placeholder', 'Choose');

            if (document.querySelectorAll('.cal-ico-spz').length > 0) {
                departInputEl.parentElement.querySelector('.cal-ico-spz');
                arriveInputEl.parentElement.querySelector('.cal-ico-spz');
                guestsInputEl.parentElement.querySelector('.cal-ico-spz');
            }
            if (document.querySelector('#booking-button .arrow-ico-spz')) {
                document.querySelector("#booking-button #submit-button-text").textContent = 'Book Now';
                document.querySelector('#booking-button .arrow-ico-spz').remove();
            }
        }

        document.body.classList.remove('form-sticky-spz');
        document.querySelector('.vl-main').classList.remove('sticky-footer-spz');
        document.querySelector('#vl-nearby').removeAttribute('style');
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
        // let testURL = TEST_ENV_2014.test_url;
        // if (window.location.pathname.indexOf(TEST_ENV_2014.test_url) > -1) {
        //     testURL = window.location.href;
        // }
        // if (isSameUrl(url, testURL, true)) {
        waitForElm(TEST_ENV_2014.main_class).then(function () {
            createTest2014();
        });

        if (document.querySelectorAll(TEST_ENV_2014.main_class).length > 0) {
            createTest2014();
        }
        // } else {
        //     removeTest();
        // }
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
        document.body.classList.remove(TEST_ENV_2014.class);
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

    function reviews() {
        let v1Benefits = document.querySelector('.vl-main .vl-book__header');

        /* Header */
        let spz_header = document.createElement("section");
        spz_header.classList.add('spz_container');
        spz_header.classList.add('spz_header');

        let getReviewHTML = document.querySelector(".vl-main .vl-overview-rating");
        if (getReviewHTML) {
            let getReviewTitle = document.querySelector('.vl-overview-rating__title').textContent;
            let getReviewStars = document.querySelector('.vl-overview-rating__stars').outerHTML;

            const getReviewTitleArray = getReviewTitle.split(" (");

            if (getReviewTitleArray[0] == '5.0') {
                getReviewTitleArray[0] = '5';
            }

            getReviewHTML = getReviewStars + '<div class="spz-review-text"><strong>' + getReviewTitleArray[0] + '</strong> (' + getReviewTitleArray[1] + '</div>';
            miniBookReviewHTML = getReviewStars + '<strong>' + getReviewTitleArray[0] + '</strong>';
        }
        else {
            getReviewHTML = '';
            miniBookReviewHTML = '';
        }


        let getReviewHTMLClass = '';
        if (getReviewHTML == '') { getReviewHTMLClass = 'no_review'; }

        spz_header.innerHTML = `
        <div class="location_review">
            <div class="review_container ${getReviewHTMLClass}">
                ${getReviewHTML}
            </div>
        </div>`;

        v1Benefits.after(spz_header);

        var travelMoreReviewCTA = document.querySelector('section#reviews .vl-reviews-pagination__item[data-action="next"]');
        if (travelMoreReviewCTA) { travelMoreReviewCTA.textContent = 'Show All Reviews'; }
    }

    // Add class 'safari' (used for cart scrollbar)
    if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
        document.body.classList.add('safari')
    }
})()