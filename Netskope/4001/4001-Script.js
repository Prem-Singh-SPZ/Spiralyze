var css = `
`;

head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
style.appendChild(document.createTextNode(css));

var bodyCheckInterval = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(bodyCheckInterval);
        var bodyEle = document.querySelector('body');

        if (!bodyEle.classList.contains('netskope_4001')) {
            bodyEle.classList.add('netskope_4001');

            var hero_ele = document.createElement("div");
            hero_ele.innerHTML = `
			<div class="hero_inner">
				<div class="hero_left">
					<div class="hero_title_wrap no_desktop"><div class="hero_sub_title"></div><div class="hero_main_title"></div></div>
					<div class="hero_form_wrap"></div>
					<div class="hero_left_image"><img src="//res.cloudinary.com/spiralyze/image/upload/v1701361449/netskope/4001/desktop_document_wrapper_4.webp" alt="Magic Quadrant for Security Service Edge">
                </div>
					<div class="hero_tags"><div class="hero_tag_title"></div><div class="hero_tag_cont"></div></div>
				</div>
				<div class="hero_right">
					<div class="hero_title_wrap only_desktop"><div class="hero_sub_title"></div><div class="hero_main_title"></div></div>
					<div class="hero_right_image">
						<div class="hero_right_no_desk_image">
							<picture>
								<source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1701361449/netskope/4001/tablet_document_wrapper_3.webp">
								<source media="(min-width:320px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1701361449/netskope/4001/mobile_document_wrapper_3.webp">
								<img src="//res.cloudinary.com/spiralyze/image/upload/v1701361449/netskope/4001/tablet_document_wrapper_3.webp" alt="Magic Quadrant for Security Service Edge">
							</picture>
						</div>
						<div class="sec_image">
							<picture>
								<source media="(min-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1701074007/netskope/4001/desktop_1.webp">
								<source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1701074008/netskope/4001/tablet_4.webp">
								<source media="(min-width:320px)" srcset="//res.cloudinary.com/spiralyze/image/upload/v1701074007/netskope/4001/mobile_1.webp">
								<img src="//res.cloudinary.com/spiralyze/image/upload/v1701074007/netskope/4001/desktop_1.webp" alt="2023 Magic Quadrant for Security Service Edge">
							</picture>
						</div>
					</div>
					<div class="hero_cont_wrap">
						<div class="hero_cont_ele cont_ele1"></div><div class="hero_cont_ele cont_ele2"></div><div class="hero_cont_ele cont_ele3"></div>
					</div>
					<div class="hero_tags"><div class="hero_tag_title"></div><div class="hero_tag_cont"></div></div>
					<div class="hero_share"><div class="hero_share_title"></div><div class="hero_share_data"></div></div>
				</div>
			</div>`;
            hero_ele.classList.add('hero_wrapper');
            var breadcrumb = document.querySelector(".gated-content__top .breadcrumbs");
            insertAfter(breadcrumb, hero_ele);

            //hero_sub_title = document.querySelector('.gated-content__info .gated-content__type').textContent;
            //hero_main_title = document.querySelector('.gated-content__info > h1 > span').textContent;
            content_el1 = document.querySelectorAll('.gated-content__left .rte p')[1].outerHTML;
            content_el2 = document.querySelectorAll('.gated-content__left .rte p')[2].outerHTML;
            content_el3 = document.querySelector('.gated-content__left .rte > ul').outerHTML;

            tag_title = document.querySelector('.gated-content__left .gated-content__content .gated-content__label').textContent;
            const tag_content = document.querySelector('.gated-content__left .gated-content__content .gated-content__tags').outerHTML;

            share_title = document.querySelectorAll('.gated-content__left .gated-content__content .gated-content__label')[1].textContent;
            const share_content = document.querySelector('.gated-content__left .gated-content__content .gated-content__social .v3-social-icons').outerHTML;

            const form_old = document.querySelector(".gated-content__right .gated-content__form");
            const form_new = document.querySelector(".hero_form_wrap");
            form_new.appendChild(form_old);

            document.querySelectorAll(".hero_tag_title")[0].innerHTML = tag_title;
            document.querySelectorAll(".hero_tag_title")[1].innerHTML = tag_title;
            document.querySelectorAll(".hero_tag_cont")[0].innerHTML = tag_content;
            document.querySelectorAll(".hero_tag_cont")[1].innerHTML = tag_content;

            document.querySelectorAll(".hero_sub_title")[0].innerHTML = "Analyst Report";
            document.querySelectorAll(".hero_sub_title")[1].innerHTML = "Analyst Report";
            //hero_main_title_tablet = hero_main_title.replace('Magic', "<br>Magic");

            document.querySelectorAll(".hero_main_title")[0].innerHTML = "2023 Gartner® <br>Magic Quadrant™ for Security Service Edge";
            document.querySelectorAll(".hero_main_title")[1].innerHTML = "2023 Gartner® <br>Magic Quadrant™ for Security Service Edge";
            document.querySelector(".cont_ele1").innerHTML = content_el1;
            //document.querySelector(".cont_ele2").innerHTML = content_el2;
            document.querySelector(".cont_ele2").innerHTML = "<p>In the new report, you can find out how we received our position as <strong>Highest in Ability to Execute</strong> and <strong>Furthest to the right in Completeness of Vision</strong>. You will also get an understanding of:</p>";
            document.querySelector(".cont_ele3").innerHTML = content_el3;

            document.querySelector(".hero_share_title").innerHTML = share_title;
            document.querySelector(".hero_share_data").innerHTML = share_content;

            waitForElm('body form.mktoForm').then(function () {
                document.querySelector(".netskope_4001 .hero_left .hero_form_wrap .gated-content__form").classList.add('form_loaded');
                formModify();
                setHiddenFields();

                MktoForms2.whenReady(function (form) {
                    form.onSuccess(function (values, followUpUrl) {
                        if (document.querySelector('.form_sub_title')) {
                            document.querySelector('.form_sub_title').style.display = "none";
                            document.querySelector('.form_title').style.display = "none";
                            shiftButton();

                            waitForElm('.mktoTemplateBox .mktoButton.g-recaptcha').then(function () {
                                document.querySelector('.mktoTemplateBox .mktoButton.g-recaptcha').addEventListener('click', function () {
                                    shiftButton();
                                });
                            });
                        }
                        return false;
                    });
                });
            });
        }
    }
});

function shiftButton() {
    document.querySelectorAll('#success-msg').forEach(function (element) {
        if (!element.querySelector('.gated-content__action')) {
            element.querySelector('.thanksmsg > h2').insertAdjacentHTML('beforeend', document.querySelector('.gated-content__action').outerHTML);
        }
    })
}
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) { return resolve(document.querySelector(selector)); }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector)); observer.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });
}
function formModify() {
    var formDiv = document.querySelector('.netskope_4001 .hero_left .hero_form_wrap .gated-content__form .mktoForm');
    /*---Form extra titles----*/
    if (formDiv && document.querySelectorAll('.form_title').length == 0) {
        formDiv.insertAdjacentHTML('beforebegin', `<div class="form_sub_title">2023 Edition</div><div class="form_title">Get Gartner report</div>`);
    }
    /*---form Cta update----*/
    var textChng = document.querySelector('.netskope_4001 .hero_left .hero_form_wrap .gated-content__form .mktoForm .mktoButtonRow .mktoButton');
    if (textChng) { textChng.textContent = 'Get the report'; }

    /*---Updating form labels-----*/
    if (document.querySelector('#LblFirstName')) {
        document.querySelector('#LblFirstName').textContent = "First Name";
        document.querySelector('#LblLastName').textContent = "Last Name";
        document.querySelector('#LblEmail').textContent = "Business Email";
        document.querySelector('#LblCompany').textContent = "Company";
        document.querySelector('#LblTitle').textContent = "Job title ";
        document.querySelector('#LblPhone').textContent = "Phone";
        document.querySelector('#Country option:first-child').textContent = "";
        document.querySelector('#LblCountry').textContent = "Country";

        document.getElementById("FirstName").setAttribute('tabindex', '1');
        document.getElementById("LastName").setAttribute('tabindex', '2');
        document.getElementById("Email").setAttribute('tabindex', '3');
        document.getElementById("Company").setAttribute('tabindex', '4');
        document.getElementById("Title").setAttribute('tabindex', '5');
        document.getElementById("Phone").setAttribute('tabindex', '6');
        document.getElementById("Country").setAttribute('tabindex', '7');
        waitForElm('.mktoButton.g-recaptcha').then(function () {
            document.querySelector(".mktoButton.g-recaptcha").setAttribute('tabindex', '14');
        });
        waitForElm('.netskope-fm').then(function () {
            document.querySelector(".netskope-fm a").setAttribute('tabindex', '13');
        });
        waitForElm('.single_checkbox').then(function () {
            document.querySelector("#LblConsent_to_Processing__c .p11 a").setAttribute('tabindex', '12');
        });
    }

    var zip_row = document.createElement("div");
    zip_row.innerHTML = '<div class="mktoPlaceholder mktoPlaceholderPostalCode"></div>';
    zip_row.classList.add('mktoFormRow');
    zip_row.classList.add('mktoZipRow');

    var extraRow = document.querySelectorAll(".netskope_4001 .hero_left .mktoFormRow")[9];
    if (extraRow) {
        insertAfter(extraRow, zip_row);
    }

    const zip_row_old = document.querySelector(".mktoPlaceholderPostalCode");
    const zip_row_new = document.querySelector(".mktoZipRow");
    if (zip_row_new) {
        zip_row_new.appendChild(zip_row_old);
    }


    // form state
    var selector = 'body form.mktoForm .mktoFormCol .mktoFieldWrap input, body form.mktoForm .mktoFormCol .mktoFieldWrap select';

    document.addEventListener('focus', function (event) {
        if (event.target.matches(selector)) {
            event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
        }
        checkState();
    }, true);

    var eventList = ["blur", "focusout", "keyup"];
    for (s_event of eventList) {
        document.addEventListener(s_event, function (event) {
            if (event.target.matches(selector)) {
                if (event.target.value == null || event.target.value == '') {
                    event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.remove('active');
                    event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.remove('filled');
                } else {
                    event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.add('active');
                    event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.add('filled');
                }
            }
            checkState();
        });
    }

    document.addEventListener('focusout', function (event) {
        document.querySelectorAll('body form.mktoForm .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) { elem.classList.remove('typing'); })
        checkState();
    }, true);
}
function setHiddenFields() {
    waitForElm('.mktoFormRow [name="utm_location__c"]').then(function () {
        const field_int = setInterval(function () {
            if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
                if (document.querySelector('.mktoFormRow [name="utm_location__c"]').getAttribute('value') == "#4001_spzaa_variant") {
                    clearInterval(field_int);
                }
                document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#4001_spzaa_variant');
            }
        }, 100);
    });
}
function checkState() {
    waitForElm('#PostalCode').then(function () {
        document.querySelector('#PostalCode').setAttribute('tabindex', '12');
    });
}