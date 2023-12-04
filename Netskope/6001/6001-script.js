var css = ``;

head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
style.appendChild(document.createTextNode(css));

let bodyLoaded = setInterval(function () {
  const body = document.querySelector('body');
  if (body) {
    clearInterval(bodyLoaded);

    if (!body.classList.contains('netskope_6001')) {
      body.classList.add('netskope_6001');

      waitForElm('.netskope_6001 #wrapper .v3.landing-page-v3__container').then(function () {
        var sub_heading = document.querySelector(".netskope_6001 #wrapper .v3.landing-page-v3__container .landing-page-v3__subheadline").innerHTML;
  
        // Hero Fom Content
        document.querySelector('.netskope_6001 #wrapper .v3.landing-page-v3__container .landing-page-v3__form').insertAdjacentHTML("afterbegin", `<div class="hero_left">
          <h2 class="form-content-heading">Highest<br> in Execution. Furthest<br> in <span>Vision</span>.</h2>
          `+sub_heading+`
          <picture class="hero-form-img">
            <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1701081122/netskope/6001/hero-desktop.svg">
            <source media="(min-width: 768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1701081123/netskope/6001/hero-tablet.svg">
            <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1701081122/netskope/6001/hero-mobile.svg">
            <img src="//res.cloudinary.com/spiralyze/image/upload/v1701081122/netskope/6001/hero-desktop.svg" alt="Highest in Execution. Furthest in Vision." title="Highest in Execution. Furthest in Vision.">
          </picture>
        </div>`);

        document.querySelector('.netskope_6001 #wrapper .landing-page-v3__form .landing-page-v3__form-content').insertAdjacentHTML("afterend", `<h2 class="form-content-heading">Highest<br> in Execution. Furthest<br> in <span>Vision</span>.</h2>`);
        
        //Form internal code
        waitForElm('body form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
          formModify();
          setHiddenFields();
        });
      });
    }
    
  }
});

// Generic Code
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
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

function formModify() {
  // Add class in mktoFormRow using count
  var parentDiv = document.querySelector('.netskope_6001 .landing-page-v3__form .landing-page-v3__form-content .mktoForm');
  var childElements = parentDiv.children;
  for (var i = 0; i < childElements.length; i++) {
    var dynamicClass = 'field-' + (i + 1);
    childElements[i].classList.add(dynamicClass);
  }

  var formDiv = document.querySelector('.netskope_6001 .landing-page-v3__form .landing-page-v3__form-content .mktoForm');
  // Form Extra Titles
	if (formDiv && document.querySelectorAll('.form_title').length == 0) {
		formDiv.insertAdjacentHTML('beforebegin', `<h2 class="form_title">Get Gartner report</h2>`);
	}
  // form CTA Update
  var form_button = setInterval(() => {
    var textChng = document.querySelector('.netskope_6001 .landing-page-v3__form .landing-page-v3__form-content .mktoForm .mktoButtonRow .mktoButton');
    if (textChng) {
      textChng.innerText = 'Get the report';
      clearInterval(form_button);
    }
  }, 100);

  // Updating Form Labels
	document.querySelector('#LblFirstName').textContent = "First Name";
	document.querySelector('#LblLastName').textContent = "Last Name";
	document.querySelector('#LblEmail').textContent = "Business Email";
	document.querySelector('#LblCompany').textContent = "Company";
	document.querySelector('#LblTitle').textContent = "Job title";
	document.querySelector('#LblPhone').textContent = "Phone";
	document.querySelector('#Country option:first-child').textContent = "";
	document.querySelector('#LblCountry').textContent = "Country";

  // Change Field Position
  var email_field = document.querySelector('.netskope_6001 .landing-page-v3__form .mktoForm .mktoFormRow.field-3');
  var lastname_field = document.querySelector('.netskope_6001 .landing-page-v3__form .mktoForm .mktoFormRow.field-5');
  lastname_field.after(email_field);

  var optout_field = document.querySelector('.netskope_6001 .landing-page-v3__form .mktoForm .mktoFormRow.field-11');
  var form_footer = document.querySelector('.netskope_6001 .landing-page-v3__form .mktoForm .mktoFormRow.field-10');
  form_footer.before(optout_field);

  var zip_row = document.createElement("div");
	zip_row.innerHTML = '<div class="mktoPlaceholder mktoPlaceholderPostalCode"></div>';
	zip_row.classList.add('mktoFormRow');
	zip_row.classList.add('mktoZipRow');
	
	var extraRow = document.querySelectorAll(".netskope_6001 .landing-page-v3__form-content .mktoFormRow")[7];
	insertAfter(extraRow, zip_row);
	
	const zip_row_old = document.querySelector(".mktoPlaceholderPostalCode");
	const zip_row_new = document.querySelector(".mktoZipRow");
	zip_row_new.appendChild(zip_row_old);

  // form state
  var selector = 'body form.mktoForm .mktoFormCol .mktoFieldWrap input, body form.mktoForm .mktoFormCol .mktoFieldWrap select';

  document.addEventListener('focus', function (event) {
		if (event.target.matches(selector)) {
			event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
		}
	}, true);	

  var eventList = ["blur", "focusout", "keyup", "change"];
	for (s_event of eventList) {
		document.addEventListener(s_event, function (event) {
			if (event.target.matches(selector)) {
				if (event.target.value == null || event.target.value == '') {
					event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.remove('filled');
				} else {
					event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.add('filled');
				}
			}
		});
	}
		
	document.addEventListener('focusout', function (event) {
		document.querySelectorAll('body form.mktoForm .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
			elem.classList.remove('active', 'typing');
		})
	}, true);
}

function setHiddenFields() {
	waitForElm('.mktoFormRow [name="utm_location__c"]').then(function () {
		const field_int = setInterval(function () {
			if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
				if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') == "#6001_spzaa_variant") {
					clearInterval(field_int);
				}
				document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#6001_spzaa_variant');
			}
		}, 100);
	});
}