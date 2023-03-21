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
  
  
  setCrossSubdomainCookie('COOKIE_NAME', 'true', 10);
  console.log('Test should run now');
  document
  .querySelector(".internal-form-testing main.l-body-wrapper .c-hero__content .c-hero__repeater .c-hero__column:last-child .c-hero__column-content > p")
  .insertAdjacentHTML(
	  "beforeend",
	  `<div class="privacy-policy"><p>By completing the form and submitting your information above, you are agreeing to our </a> <a href="/privacy-policy">Privacy Policy.</a></div>`
  );