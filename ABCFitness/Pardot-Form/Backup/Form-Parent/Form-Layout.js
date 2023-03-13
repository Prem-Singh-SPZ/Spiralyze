
var content = document.createElement('script')
content.src = 'https://res.cloudinary.com/spiralyze/raw/upload/v1678688502/ABCFitnessSolutions/Pardot-Form-Global/lib/seamless.parent.min.js';
document.head.appendChild(content);

content.onload = function () {
  window.onload = function() {
    renderIframe();
  };
}


function renderIframe() {
    console.log('Function called')
	// Turns the iframe into a seamless iframe.
	var child = window.seamless(document.getElementById('pardot-form'));
	
	child.send({
	  data: {
	    style: 'http://127.0.0.1:5500/for-parent/form-style.css',
	    script: 'http://127.0.0.1:5500/for-parent/form-script.js'
	  },
	  success: function(data) {
	
	    // 'data' is what was returned from the child 'receive' function.
	    // console.log(data);
	  }
	});
}