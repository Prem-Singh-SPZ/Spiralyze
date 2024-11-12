history.pushState = (function(f) {
    return function pushState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("pushstate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
    };
})(history.pushState);

history.replaceState = (function(f) {
    return function replaceState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("replacestate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
    };
})(history.replaceState);

window.addEventListener("popstate", function() {
    window.dispatchEvent(new Event("locationchange"));
});

window.addEventListener("locationchange", function() {
    url = location.href;
    urlCheck(url);
});

url = location.href;
urlCheck(url);

function urlCheck(url) {
    var allblogsurlstring = "";
    if (window.location.pathname.indexOf("/vc-started") > -1) { // Add " / " to run on all urls
        allblogsurlstring = window.location.href;
    }
    if(isSameUrl(url, allblogsurlstring, true)) {
    	load_4001(); 
    }else {
		/*------remove test ---------*/
		if(document.body.classList.contains('spz_4001')){
			document.querySelector("body").classList.remove("spz_4001");
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

function load_4001(){
	if (!document.body.classList.contains('spz_4001')) {
		document.body.classList.add('spz_4001');
	}
	
	waitForElm('.jotform-form .form-all .cont').then(function () {
		if(document.querySelectorAll(".spz_title_wrap").length == 0){			
			document.querySelector('.jotform-form .form-all .cont').insertAdjacentHTML('beforebegin', '<div class="spz_header_wrap"></div>');
			document.querySelector('.spz_header_wrap').insertAdjacentElement('beforeend', document.querySelector('.jotform-form .form-all .cont'));
			document.querySelector('.spz_header_wrap .cont').insertAdjacentHTML('afterbegin', '<div class="spz_title_wrap"><img src="//res.cloudinary.com/spiralyze/image/upload/v1730814779/airsculpt/4001/airsculpt_logosvg.svg" alt="Logo" class="spz-logo"></div>');


			//check if current url has some query params
			if (window.location.search) {
				const urlParams = new URLSearchParams(window.location.search);
				const myParam = urlParams.get('email');
				if (myParam) {
				}
			}
			document.querySelector('.jotform-form .form-all .form-section.page-section').insertAdjacentHTML('afterbegin', '<div class="spz_form_title_wrap"><div class="spz_form_title">Get Started</div><div class="spz_form_desc">Get your virtual consultation and pricing in 24-48 hours by providing us a few details.</div></div><div class="spz-form-wrap"><div class="spz-form-field first-name"></div><div class="spz-form-field last-name"></div><div class="spz-form-field phone-number"></div><div class="spz-form-field email"></div><div class="spz-form-field clinic-location"></div><div class="spz-form-field zip-code"></div></div>');

			document.querySelector('.spz-form-wrap .first-name').insertAdjacentElement('beforeend', document.querySelector('.jotform-form .form-all .form-section.page-section .form-line span[data-input-type="first"]'));
			document.querySelector('.spz-form-wrap .last-name').insertAdjacentElement('beforeend', document.querySelector('.jotform-form .form-all .form-section.page-section .form-line span[data-input-type="last"]'));
			document.querySelector('.spz-form-wrap .phone-number').insertAdjacentElement('beforeend', document.querySelector('.jotform-form .form-all .form-section.page-section .form-line[data-type="control_dropdown"]'));
			document.querySelector('.spz-form-wrap .phone-number').insertAdjacentElement('beforeend', document.querySelector('.jotform-form .form-all .form-section.page-section .form-line[data-type="control_phone"] '));
		}
		
		checkHidden4001();
	});	
}

function waitForElm(selector) {
	return new Promise(resolve => {
		if (document.querySelector(selector)) {
			return resolve(document.querySelector(selector));
		}
		const observer = new MutationObserver(mutations => {
			if (document.querySelector(selector)) {
				resolve(document.querySelector(selector)); observer.disconnect();
			}
		});
		observer.observe(document.body, { childList: true, subtree: true });
	});
}
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function checkHidden4001() {
    let checkHiddenInput = setInterval(function(){
        if(document.querySelectorAll("#SPZ_test").length > 0) {
            clearInterval(checkHiddenInput);
			document.querySelector("#SPZ_test").value = 'variant1_3001';
        }
    });
}
