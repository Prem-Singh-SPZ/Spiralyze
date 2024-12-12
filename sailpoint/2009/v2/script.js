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
    var allblogsurlstring = "https://www.sailpoint.com/";
    if (window.location.pathname == '/' || window.location.pathname == '/demo') {
        allblogsurlstring = window.location.href;
    }
    if (isSameUrl(url, allblogsurlstring, true)) {
        initTest2009();
    } else {
        if (document.querySelector('body').classList.contains('spz_2009')) {
            document.querySelector('body').classList.remove('spz_2009');
        }
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

function initTest2009() {

    let bodyLoaded = setInterval(function () {
        const body = document.querySelector('body');
        if (body) {
            clearInterval(bodyLoaded);

            if (window.location.pathname == '/') {
                if (!body.classList.contains('spz_2009')) {
                    body.classList.add('spz_2009');

                    document.querySelector('main section.hero a.btn.btn--hotpink').innerHTML = 'Get a demo';
                    document.querySelector('main section.hero a.btn.btn--hotpink').classList.add('spz_2009_v2');
                    document.querySelector('main section.hero a.btn.btn--hotpink').setAttribute('href', 'https://www.sailpoint.com/demo');
                    document.querySelector('main section.hero a.btn.btn--hotpink').addEventListener('click', (event) => {
                        event.preventDefault(); // Prevent the default link behavior
                        document.querySelector('[data-sentry-component="MainLargeNavigation"] a[href="/demo"]').click()

                        setTimeout(function () {
                            hiddenValue('spz_2009', 'SPZ_2009_variant2');
                            document.querySelector('body').classList.remove('spz_2009');
                        }, 2000)
                    });


                    const button = document.querySelector('main section.hero a.btn.btn--arrow');
                    button.classList.add('spz_2009_v2');
                    button.innerHTML = 'Talk to an expert <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 11" class="aspect-[16/11] w-4" data-sentry-element="svg" data-sentry-component="Arrow" data-sentry-source-file="arrow.tsx"><path fill="currentColor" d="M15.759 4.726 11.49.252a.787.787 0 0 0-1.155 0 .893.893 0 0 0 0 1.216l2.865 3.003H.81a.862.862 0 0 0 0 1.72h12.393L10.343 9.2a.893.893 0 0 0 0 1.216.789.789 0 0 0 1.154 0l4.268-4.474a.894.894 0 0 0-.006-1.215Z" data-sentry-element="path" data-sentry-source-file="arrow.tsx"></path></svg>';
                    if (button) {
                        button.setAttribute('href', 'https://www.sailpoint.com/demo?lp=expert');
                        button.addEventListener('click', (event) => {
                            event.preventDefault(); // Prevent the default link behavior
                            // document.querySelector('[data-sentry-component="MainLargeNavigation"] a[href="/demo"]').click()
                            window.location.href = 'https://www.sailpoint.com/demo?lp=expert';

                            setTimeout(function () {
                                hiddenValue('spz_2009', 'SPZ_2009_variant2');
                                document.querySelector('body').classList.remove('spz_2009');
                            }, 2000)

                        });
                    }
                    hiddenValue('spz_2009', 'SPZ_2009_variant2');
                } else {
                    if (body.classList.contains('spz_2009')) {
                        hiddenValue('spz_2009', 'SPZ_2009_variant2');
                    }
                }
            }

            if (window.location.pathname == '/demo') {
                if (!body.classList.contains('spz_2009')) {
                    body.classList.add('spz_2009');
                    hiddenValue('spz_2009', 'SPZ_2009_variant2');
                } else {
                    if (body.classList.contains('spz_2009')) {
                        hiddenValue('spz_2009', 'SPZ_2009_variant2');
                    }
                }
            }

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
    function setHiddenFieldValue() {
        var spz_cro_Interval = setInterval(function () {
            var intellimize1 = document.querySelector('form.mktoForm input[name="intellimize1"]');
            if (intellimize1) {
                clearInterval(spz_cro_Interval);
                var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');
                intellimize1.value = ExistingHiddenFieldValue;
            }
        });
    }
    setHiddenFieldValue();
}
// Do not touch below hidden field code for any Experiment over