let bodyLoaded = setInterval(function () {
	const body = document.querySelector('body');
	if (body) {
		clearInterval(bodyLoaded);
		if (!body.classList.contains('SPZ_2009_tc')) {
			removeSpecificCookieValue('SPZ_2009', 'SPZ_2009_Variant');	
			body.classList.add('SPZ_2009_tc');
			hiddenValue('SPZ_2009', 'SPZ_2009_TrueControl');
		}
	}
});

function removeSpecificCookieValue(targetName, targetValue) {
  ['HiddenFieldName', 'HiddenFieldValue'].forEach((key, i) => {
    var values = getCookie(key)?.split(',').filter(v => v !== (i ? targetValue : targetName)).join(',');
    setCookie(key, values || '', 1);
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
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	} 
	function setHiddenFieldValue(){
		var spz_cro_Interval = setInterval(function () {
			var intellimize1 = document.querySelector('form.mktoForm input[name="intellimize1"]');
			if(intellimize1){
				clearInterval(spz_cro_Interval);
				var ExistingHiddenFieldValue = getCookie('HiddenFieldValue');
				intellimize1.value = ExistingHiddenFieldValue;
			}
		});
	}
	setHiddenFieldValue();
}
// Do not touch below hidden field code for any Experiment over