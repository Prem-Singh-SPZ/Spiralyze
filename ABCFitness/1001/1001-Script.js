var iframe = document.querySelector('iframe[name="white"]');
var style = document.createElement('style');
style.textContent =
  'body {' +
  '  background-color: #000;' +
  '}' 
;
iframe.contentDocument.head.appendChild(style);
console.log('its done');
document.querySelector('#pardot-form').style.background = 'red';