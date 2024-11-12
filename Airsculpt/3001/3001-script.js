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

function urlCheck(url) {
    var allblogsurlstring = "https://airsculpt.com/";
    if (window.location.pathname.indexOf("before-and-after/") > -1) { // Add " / " to run on all urls
        allblogsurlstring = window.location.href;
    }
    if(isSameUrl(url, allblogsurlstring, true)) {
    	load_variant_3001(); 
    }else {
		/*------remove test ---------*/
		if(document.body.classList.contains('spz_as_3001')){
			document.querySelector("body").classList.remove("spz_as_3001");
			document.body.classList.add('spz_as_3001_other');			
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

function load_variant_3001(){
	if (!document.body.classList.contains('spz_as_3001')) {
		document.body.classList.add('spz_as_3001');
	}
	
	waitForElm('main section[id="1"]').then(function () {
		if(document.querySelectorAll(".spz_main_wrap").length ==0){
			var el1 = document.createElement("div");
			el1.innerHTML = `
			<div class="spz_inner">
				<div class="left_main_wrap">
					<div class="content_main_wrap">
						<div class="short_title_wrap">BEFORE & AFTERs</div>
						<div class="title_wrap">AirSculpt® <br >Results Gallery</div>
					</div>
				</div>
				<div class="right_main_wrap"></div>
			</div>
			`;
			el1.classList.add('spz_main_wrap');
			
			wrapper = document.querySelector('main');
			wrapper.insertBefore(el1, wrapper.children[0]);
			
			waitForElm('[class*=form-module--formComponent]').then(function () {
				document.querySelector(".right_main_wrap").appendChild(document.querySelector('[class*=form-module--formComponent]'));
				
				document.querySelector(".spz_as_3001 .spz_main_wrap .right_main_wrap .form-module--title--33ba1, .spz_as_3001 .spz_main_wrap .right_main_wrap [class^=form-module--formComponent] [class^=form-module--wrapper] h2").innerHTML = "Get a free consult, PRICING, & PrOMOS";
				/*-------disclaimer customize-----*/
				var disc = document.querySelector('[class*=styles-module--optInWrapper] [class*=styles-module--optInText]').innerText.replace(/\n/g, '').replace('Privacy & Opt-In:','<b>Privacy & Opt-In:</b>');
				disc = disc.replace('Terms & Conditions and Privacy Policy','<a href="https://airsculpt.com/privacy-policy/" target="_blank" rel="noopener">Terms & Conditions and Privacy Policy</a>');
				
				document.querySelector('[class*=styles-module--optInText]').innerHTML = disc;
				document.querySelector('[class*=styles-module--optInText]').insertAdjacentHTML('beforeend', '<div class="read_more">... View More</div>');
				//document.querySelector('.styles-module--optInBody--39e94 a').getAttribute('href');
				
				document.querySelector('.spz_as_3001 .spz_main_wrap .right_main_wrap form .read_more').addEventListener("click", function (ele) {
					document.querySelector('.spz_as_3001 .spz_main_wrap .right_main_wrap form [class*=styles-module--optInText]').classList.add('disc_exp');
				});
			});
			checkHidden3001();
			
		}
	});	
}

document.addEventListener('DOMContentLoaded', function() {
	load_variant_3001();
}, false);

load_variant_3001();
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
function checkHidden3001() {
    let checkHiddenInput = setInterval(function(){
        if(document.querySelectorAll("#SPZ_test").length > 0) {
            clearInterval(checkHiddenInput);
			document.querySelector("#SPZ_test").value = 'variant1_3001';
        }
    });
}
