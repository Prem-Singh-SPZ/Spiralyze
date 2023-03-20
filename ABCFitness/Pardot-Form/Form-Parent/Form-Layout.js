// Share cookie under domain and sub-domains
function setCrossSubdomainCookie(name, value, days) {
	const assign = name + "=" + escape(value) + ";";
	const d = new Date();
	d.setTime(d.getTime() + (days*24*60*60*1000));
	const expires = "expires="+ d.toUTCString() + ";";
	const path = "path=/;";
	const domain = "domain=" + (document.domain.match(/[^\.]*\.[^.]*$/)[0]) + ";";
	document.cookie = assign + expires + path + domain;
  }
  
  
//   setCrossSubdomainCookie('COOKIE_NAME', 'true', 10);
  console.log('Test should run now');