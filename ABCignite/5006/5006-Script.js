(function () {
    // Include script file
    function addScript(filename) {
        var head = document.getElementsByTagName('body')[0];
        var script = document.createElement('script');
        script.src = filename;
        script.type = 'text/javascript';
        script.async = 'defer';
        head.append(script);
    }
    // Include CSS file
    function addCSS(filename) {
        var head = document.getElementsByTagName('body')[0];
        var style = document.createElement('link');
        style.href = filename;
        style.type = 'text/css';
        style.rel = 'stylesheet';
        head.append(style);
    }

    // Loading files
    addScript('https://res.cloudinary.com/spiralyze/raw/upload/f_auto/ABCFitnessIgnite/5006/src/5006-script.js');
    addCSS('https://res.cloudinary.com/spiralyze/raw/upload/f_auto/ABCFitnessIgnite/5006/src/5006-style.css');
})()

// 5010 Winner test code
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
    var allblogsurlstring = "https://abcfitness.com/";
    if (window.location.pathname.indexOf("/") > -1) { // Add " / " to run on all urls
        allblogsurlstring = window.location.href;
    }
    if (isSameUrl(url, allblogsurlstring, true)) {
        init5009();
    } else {
        // Remove Test
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


function init5009() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-5010')) {
        bodyEle.classList.add('spz-5010');

        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = '//res.cloudinary.com/spiralyze/raw/upload/f_auto/ABCFitnessIgnite/5010/updated_css/5010-Style.css';
        document.head.appendChild(link);

        waitForElm('.home .entry-content > .wp-block-genesis-blocks-gb-columns').then((elm) => {
            document.querySelector('.home .entry-content > .wp-block-genesis-blocks-gb-columns').classList.add('hero-sec');

            document.querySelector('body .hero-sec').insertAdjacentHTML('afterend', `<div class="hero-banner">
            <div class="hero-block">
                <div class="gym-sec">
                    <div class="ignite-item">
                        <div class="ignite-img">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/v1691497614/abcfitnessignite/5010/asset_13_1.svg" alt="Ignite logo">
                        </div>
                        <h2>#1 club & gym management platform</h2>
                        <p>Grow your gym 30% while streamlining sales, member engagement, and operations.</p>
                        <a class="hero-btn n2-ow popup id-23276" onclick="return false;" href="#" tabindex="0">GET A DEMO <img src="//res.cloudinary.com/spiralyze/image/upload/v1692264331/ABCFitnessIgnite/5010/arrow-demo.svg" loading="eager" alt="Arrow"></a>
                    </div>
                    <div class="platform-img-sec">
                        <picture>
                            <source media="(min-width:1200px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/abcfitnessignite/5010/image_2.webp">
                            <source media="(min-width:700px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/abcfitnessignite/5010/image_1.webp">
                            <source media="(min-width:320px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/abcfitnessignite/5010/image.webp">
                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/abcfitnessignite/5010/image_2.webp" alt="#1 club & gym management platform">
                        </picture>
                    </div>
                </div>
            </div>
        </div>`);

            document.addEventListener('click', function (event) {
                if (event.target.matches('body .ignite-item a.hero-btn')) {
                    document.querySelector("div#n2-ss-2 .n2-style-bd99200e23340aaacefc00fabc6e3e20-heading").click();
                }
            });
        });



        //5009 Winner test changes starts
        let btnHtml
        if (window.location.pathname.indexOf('/pt/') > -1) {
            btnHtml = `<li class="spz-menu-item">
                <a class="spz-demo-btn" href="#">Quero testar</a>
            </li>`;
        } else if (window.location.pathname.indexOf('/es/') > -1) {
            btnHtml = `<li class="spz-menu-item">
                <a class="spz-demo-btn" href="#">PruÃ©belo</a>
            </li>`;
        } else {
            btnHtml = `<li class="spz-menu-item">
                <a class="spz-demo-btn" href="#">GET A DEMO</a>
            </li>`;
        }

        waitForElm('.site-header #mega-menu-primary').then((elm) => {
            elm.insertAdjacentHTML("beforeend", btnHtml)
            setTimeout(() => {
                if (window.location.pathname == '/') {
                    document.querySelector('.spz-demo-btn').addEventListener('click', function (e) {
                        e.preventDefault();
                        document.querySelector('.n2-ss-slide-3 .n2-ss-layer a.popup').click()
                        return false;
                    })
                }
            }, 100)
        });

        if (window.location.pathname == '/' || window.location.pathname == '/pt/' || window.location.pathname == '/es/') {
            waitForElm('.n2-ss-slide-3 .n2-ss-layer a.popup').then((elm) => {
                if (window.location.pathname.indexOf('/pt/') > -1) {
                    elm.innerText = 'SOLICITE UMA DEMO';
                } else if (window.location.pathname.indexOf('/es/') > -1) {
                    elm.innerText = 'SOLICITA UNA DEMO';
                } else {
                    elm.innerText = 'REQUEST A DEMO';
                }
            });
        }

        window.addEventListener('scroll', function () {
            var headerNav = document.querySelector(".bkg-header");
            let getScrollposition = window.scrollY;
            if (getScrollposition > headerNav.offsetTop) {
                headerNav.classList.add('fixed-header')
            } else {
                if (headerNav.classList.contains('fixed-header')) {
                    headerNav.classList.remove('fixed-header')
                }
            }
        })


        if (window.location.pathname != '/') {
            let checkjQuery = setInterval(function () {

                if (typeof jQuery != 'undefined' && jQuery.fn) {
                    clearInterval(checkjQuery);
                    jQuery(document).ready(function ($) {
                        jQuery('.spz-demo-btn').click(function (e) {
                            e.preventDefault();

                            // Get the button's ID
                            var buttonID = 23276;

                            // Make an AJAX request to fetch the form content
                            $.ajax({
                                url: 'https://abcfitness.com/wp-admin/admin-ajax.php',
                                type: 'POST',
                                data: {
                                    action: 'fetch_popup_form',
                                    id: buttonID
                                },
                                success: function (response) {
                                    // Append the form content to the modal
                                    console.log(response, "######");
                                    jQuery('#popupModal .modal-body').html(response);

                                    // Show the modal
                                    jQuery('#popupModal').modal('show');
                                },
                                error: function (xhr, status, error) {
                                    console.log(error);
                                }
                            });
                        });
                    });

                    let popupHtml = `
                        <div class="modal fade" id="popupModal" tabindex="-1" role="dialog" aria-labelledby="popupModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>`;

                    document.querySelector('footer.site-footer').insertAdjacentHTML('beforebegin', popupHtml)
                }
            });
        }

    }

}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}