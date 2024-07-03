let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        if (!body.classList.contains('spz-5001')) {
            body.classList.add('spz-5001');

            heroSection();
            footerFormSection();
        }
    }
});

function heroSection() {

    document.querySelector('.zy-hero-container-accordion .zy-hero-container-inner').innerHTML = `<div class="spz-hero-copy-container"><p class="eye-brow-text">Personal lines Solutions</p><h1 class="h-title">Grow New Client Sales xx. Transform sales, marketing and customer engagement.</h1><p class="h-copy">Access millions of in-depth lead profiles. <span class="no-wrap">Auto-compare</span> and generate quotes for multiple carriers at once. Automate content delivery. Manage your agency in one platform.</p><div class="h-demo-cta"><a href="javascript:;" class="spz-cta">Book a demo</a></div></div>`;

    salesCloud();
}

function salesCloud() {
    document.querySelector('.zy-hero-container-general.zy-hero-container-accordion').insertAdjacentHTML('afterend', `<div class="sc-section">
        <div class="sc-row">
            <div class="sc-col">
                <div class="sc-title">Sales Cloud</div>
                <div class="sc-content">
                    <div class="sc-line sc-left">
                        <div class="sc-text">
                            <h3 class="copy-title desktop">Grow Sales and Renewals</h3>
                            <ul class="sc-list"><li><span>Marketing:</span> Access our database of 80+ million households. Create and send automated emails to your target audience.</li><li><span>Quoting & Proposals:</span> Find the best coverage and price for leads in seconds. 200+ carriers for auto, home, renters, and more.</li><li><span>Agency Management:</span> Manage plans. Centralize contact info. Automate new client account creation, reminders, and reporting.</li></ul>
                            <div class="anchor-wrapper"><a href="javascript:;" class="spz-cta">Book a demo</a><a class="spz-anchor" href="/personal-lines/sales-cloud/">Learn more</a></div>
                        </div>
                        <div class="sc-image">
                            <h3 class="copy-title mobile">Grow Sales and Renewals</h3>
                            <picture>
                                <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/5001/image_1_desktop__tablet.webp">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/5001/image_1_mobile.webp" alt="Grow Sales and Renewals">
                            </picture>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
        </div>
        <div class="sc-section cc-section">
        <div class="sc-row">
            <div class="sc-col">
                <div class="sc-title">Content Cloud</div>
                <div class="sc-content">
                    <div class="sc-line sc-right">
                        <div class="sc-image">
                            <h3 class="copy-title mobile">Drive Client Engagement</h3>
                           <picture>
                                <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/5001/image_2_desktop__tablet.webp">
                                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/5001/image_2_mobile.webp" alt="Drive Client Engagement">
                            </picture>
                        </div>
                        <div class="sc-text">
                            <h3 class="copy-title desktop">Drive Client Engagement</h3>
                            <ul class="cc-list"><li><span>Content Library:</span> Provide pre-built resources to your team and clients. Marketing, risk management, updates, and more.</li><li><span>Distribution:</span> Distribute email content throughout the year or as one-offs. Auto-send resources at the right times to drive upsells.</li><li><span>Content Management:</span> Centralize all your organization's content. Track marketing content performance.</li></ul>
                            <div class="anchor-wrapper"><a href="javascript:;" class="spz-cta">Book a demo</a><a class="spz-anchor" href="/personal-lines/content-cloud/">Learn more</a></div>
                        </div>
                    </div>                 
                </div>
            </div>
        </div>`);

    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('spz-cta')) {
            e.preventDefault();
            document.querySelector('.zy-header-container-inner .zy-top-demo-container>a').click();
        }
    });
}

function footerFormSection() {
    waitForElm('.spz-5001 #zy-demo-form-section').then(function () {
        document.querySelector('.spz-5001 #zy-demo-form-section .zy-col-text h3').textContent = "Increase revenue 15% by streamlining insurance sales and management";
        document.querySelector('.spz-5001 #zy-demo-form-section .zy-col-text .zy-content').textContent = "Find qualified prospects. Send instant quotes. Let clients manage plans through an online portal. Generate benefit and plan resources.";
        //Form internal code
        waitForElm('.spz-5001 #zy-demo-form-section .zy-col-form form.mktoForm .mktoFormCol .mktoFieldWrap input').then(function () {
            formModify();
        });
        //Add Hidden field value
        waitForElm('.spz-5001 .zy-marketo-form-container .mktoForm input[name="cR02"]').then(function () {
            document.querySelector(`.spz-5001 .zy-marketo-form-container .mktoForm input[name="cR01"]`).setAttribute("value", "5001_variant");
        });
    });
}

function formModify() {
    // Add class in mktoFormRow using count
    var form_fields = document.querySelectorAll('.spz-5001 #zy-demo-form-section .zy-col-form form.mktoForm .mktoFormRow fieldset.mktoFormCol .mktoFormRow');
    for (var i = 0; i < form_fields.length; i++) {
        var dynamicClass = 'field-' + (i + 1);
        form_fields[i].classList.add(dynamicClass);
    }
    var formDiv = document.querySelector('.spz-5001 #zy-demo-form-section form.mktoForm');
    // Form Extra Titles
    if (formDiv && document.querySelectorAll('.form_title').length == 0) {
        formDiv.insertAdjacentHTML('beforebegin', `<h3 class="form_title">Get a demo</h3>`);
    }
    // form CTA Update
    var form_button = setInterval(() => {
        var textChng = document.querySelector('.spz-5001 #zy-demo-form-section form.mktoForm .mktoButtonRow .mktoButton');
        if (textChng) {
            textChng.innerText = 'Submit';
            clearInterval(form_button);
        }
    }, 100);
    // Updating Form Labels
    document.querySelector('#LblFirstName').textContent = "First name";
    document.querySelector('#LblLastName').textContent = "Last name";
    document.querySelector('#LblEmail').textContent = "Business email";
    document.querySelector('#LblCompany').textContent = "Company";
    document.querySelector('#LblwebsiteFormJobDescription').textContent = "Job category";
    document.querySelector('select#websiteFormJobDescription').options[0].textContent = 'Job category';
    document.querySelector('#LblPhone').textContent = "Phone";
    document.querySelector('#Lblringdna100__ProductInterest__c').textContent = "I want to discuss";
    document.querySelector('select#ringdna100__ProductInterest__c').options[0].textContent = 'I want to discuss';
    // Change Field Position
    var email_field = document.querySelector('.spz-5001 .mktoForm .mktoFormRow.field-7');
    var lname_field = document.querySelector('.spz-5001 .mktoFormRow.field-2');
    lname_field.after(email_field);
    var all_inputs = document.querySelectorAll('.spz-5001 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz-5001 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap select');
    all_inputs.forEach(function (element) {
        element.removeAttribute('placeholder');
    });
    // form state
    var selector = '.spz-5001 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap input, .spz-5001 #zy-demo-form-section form.mktoForm .mktoFormCol .mktoFieldWrap select';
    document.addEventListener('focus', function (event) {
        if (event.target.matches(selector)) {
            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
        }
    }, true);
    var eventList = ["focusin", "blur", "focusout", "keyup", "change"];
    for (s_event of eventList) {
        document.addEventListener(s_event, function (event) {
            if (event.target.matches(selector)) {
                if (event.target.value == null || event.target.value == '') {
                    event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('filled');
                } else {
                    event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('filled');
                }
                if (event.type == "change" && event.target.tagName == 'SELECT') {
                    if (event.target.value == "") {
                        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
                    } else {
                        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
                        if (event.target.parentNode.querySelector('.mktoError').length > 0) {
                            event.target.parentNode.querySelector('.mktoError').style.display = 'none';
                        }
                    }
                } else {
                    if (event.target.classList.contains('mktoInvalid')) {
                        var closestError = event.target.parentNode.querySelector('.mktoError');
                        if (closestError && closestError.style.display == '') {
                            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.add('error');
                        } else {
                            event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
                        }
                    } else {
                        event.target.closest('body form .mktoFormCol .mktoFieldWrap').classList.remove('error');
                    }
                }
            }
        });
    }

    document.addEventListener('focusout', function (event) {
        document.querySelectorAll('body form .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
            elem.classList.remove('active', 'typing');
        })
    }, true);
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
