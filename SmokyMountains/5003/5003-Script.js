(function () {
    var jQueryInterval = setInterval(function () {
        if (typeof jQuery != 'undefined') {
            clearInterval(jQueryInterval);
            checkAvailable();
            jQuery(document).ready(function () {
                if (!jQuery("body").hasClass("spz_5003")) {
                    var cookieName = "5003_Sticky_Filter"; var cookieValue = "1"; var myDate = new Date(); myDate.setDate(myDate.getDate() + 30);
                    document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
                }
            });
        }
    });
    function checkAvailable() {
        var checkLoad = setInterval(function () {
            if (jQuery(".vms-filter__container").length > 0) {
                clearInterval(checkLoad);
                jQuery("body").addClass("spz_5003");

                //Header scroll changes
                document.querySelector("#main .header.header--fluid").classList.remove('header--sticky');
                headerScrolled();
                jQuery(window).scroll(function () {
                    headerScrolled();
                });

                //Filter changes
                const params = new Proxy(new URLSearchParams(window.location.search), {
                    get: (searchParams, prop) => searchParams.get(prop),
                });

                let checkInDate = formatDate(params.checkin);
                var checkOutDate = formatDate(params.checkout);
                let guests = params.guests;
                let beds = params.beds;
                const today = new Date();
                if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
                    document.querySelector('body').classList.add('safari')
                    var cotD = new Date(checkOutDate);
                }
                else {
                    var cotD = new Date("'" + checkOutDate + "'");
                }
                if (window.innerWidth > 1288) {

                    if (params.smc) {
                        var locations = params.smc.split('|').length;
                        addValue(locations, '.vms-filter__container .vms-filter-item:nth-child(5) button');
                    }
                    if (params.sma) {
                        var amenities = params.sma.split('|').length;
                        addValue(amenities, '.vms-filter__container .vms-filter-item:nth-child(4) button');
                    }
                    if (params.smt) {
                        var type = params.smt.split('|').length;
                        if (type == 1) {
                            document.querySelector('.vms-filter__container .vms-filter-item:nth-child(6) button span').innerHTML = document.querySelector('.vms-filter__container .vms-filter-item:nth-child(6) button span').textContent + ':<span class="spz-filter-value"> ' + params.smt + '</span>';
                        }
                        else {
                            document.querySelector('.vms-filter__container .vms-filter-item:nth-child(6) button').insertAdjacentHTML('beforeend', '<span class="spz-filter-value-index"> ' + type + '</span>');
                        }
                        document.querySelector('.vms-filter__container .vms-filter-item:nth-child(6) button').classList.add('active');
                    }
                    if (guests) {
                        addCount(guests, '.vms-filter__container .vms-filter-item:nth-child(2) button');
                    }
                    if (beds) {
                        addCount(beds, '.vms-filter__container .vms-filter-item:nth-child(3) button');
                    }

                    if (cotD > today) {
                        document.querySelector('.vms-filter-item--dates button span').innerHTML = document.querySelector('.vms-filter-item--dates button span').textContent + ':<span class="spz-filter-value"> ' + checkInDate + ' &mdash; ' + checkOutDate + '</span>';
                        document.querySelector('.vms-filter-item--dates button').classList.add('active');
                    }

                    //Reset All
                    if ((cotD > today) || guests || beds || locations || amenities || type) {
                        document.querySelector('.vms-filter-sort').insertAdjacentHTML('beforebegin', `<div class="vms-filter-item vms-reset-all">
                <a href="https://smokymountains.com/search/">
                    <img class="vms-filter-item-all__arrow vms-filter-item-all__cross vms-filter-item-all__cross-normal" src="//res.cloudinary.com/spiralyze/image/upload/v1670928151/SmokyMountains/5003/close-all.svg" alt="Close-all">
                    <img class="vms-filter-item-all__arrow vms-filter-item-all__cross vms-filter-item-all__cross-hover" src="//res.cloudinary.com/spiralyze/image/upload/v1670909229/SmokyMountains/5003/close-all-hover.svg" alt="Close-all">
                    <span class="vms-filter-item-all__title">Reset all</span></a>
              </div>`)
                    }
                }

                else {
                    if (cotD > today) {
                        document.querySelector('.vms-filter-item--dates button').classList.add('active');
                    }
                }
                document.querySelector('#vms-filter-item-all').insertAdjacentHTML('afterbegin', '<img class=" vms-filter-item-all__filter" src="//res.cloudinary.com/spiralyze/image/upload/v1670854655/SmokyMountains/5003/white-filter.svg" alt="All-filter">')
            }
        });
    }


    //Generic code
    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            jQuery("body").removeClass("spz_5003");
            checkAvailable();
        }
    }).observe(document, { subtree: true, childList: true });

    //Input fields updates
    function addValue(field, el) {
        document.querySelector(el).insertAdjacentHTML('beforeend', '<span class="spz-filter-value-index"> ' + field + '</span>');
        document.querySelector(el).classList.add('active');
    }
    function addCount(field, el) {
        document.querySelector(el + ' span').innerHTML = document.querySelector(el + ' span').textContent + ':<span class="spz-filter-value"> ' + field + '</span>';
        document.querySelector(el).classList.add('active');
    }

    //Format date
    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString("en-US", options);
    }

    //check if upper header is available
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    //Lower header scroll
    function headerScrolled() {
        let upperHeader = document.querySelector("#main .header.header--fluid");
        var scroll = jQuery(window).scrollTop();
        isInViewport(upperHeader);
        if (scroll >= 72) {
            jQuery(".vms-filter").addClass("darkHeader");
        } else {
            jQuery(".vms-filter").removeClass("darkHeader");
        }
    }
})()