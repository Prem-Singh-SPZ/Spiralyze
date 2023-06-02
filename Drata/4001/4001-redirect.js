
// if url has debug=true then return true
function isDebug() {
    var url = window.location.href;
    if (url.indexOf("debug=true") > -1) {
        return true;
    }
}
isDebug();


var url = location.href;
urlCheck(url);

function createTest() {
    document.querySelector("body").classList.add("loading-spz_test");
    window.location = "https://try.drata.com/product/soc-2?QA=4001";
}

function removeTest() {
    document.querySelector("body").classList.remove("loading-spz_test");
}

function urlCheck(url) {
    var urlTo = 'https://drata.com/product/soc-2?QA=4001';
    if (window.location.pathname == "/") {
        urlTo = window.location.href;
    }
    if (isSameUrl(url, urlTo, true)) {
        createTest();
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