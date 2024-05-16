document.body.classList.add('spz-8001');

document.querySelector('head').insertAdjacentHTML("afterbegin", `<link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1700035287/netskope/1001/Checkbox_checked.svg" as="image">`
);

//create html for hero section, with header logo in row and copy and form in 2nd row
document.body.insertAdjacentHTML('afterbegin', `<section class="hero-section">
<div class="header-row">
    <div class="header-col">
        <a href="https://www.zywave.com/" target="_blank">
            <img src="//res.cloudinary.com/spiralyze/image/upload/fl_sanitize/zywave/8001/yi7brhljad4mwktwdvelxvlydk9pkamkfwni2dpr_1.svg"
                alt="Zywave Logo" class="zywave-logo">
        </a>
    </div>
</div>
<div class="hero-row">
    <div class="hero-col">
        <div class="hero-copy">
            <p class="hero-eyebrow">Take Action Webinar</p>
            <h1 class="hero-title">Master Loss Analysis & Benchmarking</h1>
            <div class="date-and-time">
                <div class="date"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none">
                        <path
                            d="M7.75 2.5C7.75 2.08579 7.41421 1.75 7 1.75C6.58579 1.75 6.25 2.08579 6.25 2.5V4.07926C4.81067 4.19451 3.86577 4.47737 3.17157 5.17157C2.47737 5.86577 2.19451 6.81067 2.07926 8.25H21.9207C21.8055 6.81067 21.5226 5.86577 20.8284 5.17157C20.1342 4.47737 19.1893 4.19451 17.75 4.07926V2.5C17.75 2.08579 17.4142 1.75 17 1.75C16.5858 1.75 16.25 2.08579 16.25 2.5V4.0129C15.5847 4 14.839 4 14 4H10C9.16097 4 8.41527 4 7.75 4.0129V2.5Z"
                            fill="#2777D3" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 11.161 2 10.4153 2.0129 9.75H21.9871C22 10.4153 22 11.161 22 12ZM16.5 18C17.3284 18 18 17.3284 18 16.5C18 15.6716 17.3284 15 16.5 15C15.6716 15 15 15.6716 15 16.5C15 17.3284 15.6716 18 16.5 18Z"
                            fill="#2777D3" />
                    </svg><span>Thursday, May 30</span></div>
                <div class="line"></div>
                <div class="time"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none">
                        <path
                            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            fill="#2777D3" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
                            fill="#184983" />
                    </svg><span>10am PT / 12 pm CT / 1pm ET</span></div>
            </div>
            <ul class="hero-list">
                <li><span>Content.</span> See how to use pricing expertise and exposure data to update coverage. Creating plans that adapt to marketplace risk.</li>
                <li><span>Opportunities.</span> Identifying missing or inadequate lines of coverage for leads and current clients as upsell opportunity.</li>
                <li><span>Engagement.</span> 3 ways to engage with clients. Providing updates on business and industry new in real time. </li>
            </ul>
        </div>
        <div class="hero-form">
        </div>
    </div>
</div>
</section><section class="profile-section">
<div class="profile-row">
    <div class="profile-col">
        <div class="profile-card">
            <div class="profile-header">
                <div class="profile-image">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/8001/avatar-raeann-fortin.webp"
                        alt="Jim Blinn">
                </div>
                <div class="profile-details">
                    <p class="profile-name">Jim Blinn</p>
                    <p class="profile-title">VP, Client Solutions</p>
                    <p class="profile-company">Zywave</p>
                </div>
            </div>
            <div class="profile-copy">
                <p>Lorem ipsum dolor sit amet consectetur. Neque magna odio fermentum ante sit etiam enim. Semper gravida facilisi nulla vulputate id elementum ullamcorper. Amet sagittis senectus ultrices magna eget. Vitae viverra quam volutpat eu egestas enim nibh tortor tellus.</p>
            </div>
        </div>
        <div class="profile-card">
            <div class="profile-header">
                <div class="profile-image">
                    <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/8001/avatar-raeann-fortin_1.webp"
                        alt="Profile Image">
                </div>
                <div class="profile-details">
                    <p class="profile-name">Zach Boggs</p>
                    <p class="profile-title">Customer Success Manager</p>
                    <p class="profile-company">Zywave</p>
                </div>
            </div>
            <div class="profile-copy">
                <p>Lorem ipsum dolor sit amet consectetur. Neque magna odio fermentum ante sit etiam enim. Semper gravida facilisi nulla vulputate id elementum ullamcorper. Amet sagittis senectus ultrices magna eget. Vitae viverra quam volutpat eu egestas enim nibh tortor tellus.</p>
            </div>
        </div>
    </div>
</div>
</section><section class="whats-covered-section">
<div class="wc-row">
    <div class="wc-col">
        <div class="wc-copy">
            <h2 class="wc-title">What&#8217;s Covered</h2>
            <ul class="wc-list">
            <li><span>Lorem Ipsum.</span> Lorem ipsum dolor sit amet consectetur. Neque magna odio fermentum ante sit etiam enim.</li>
            <li><span>Lorem Ipsum.</span> Lorem ipsum dolor sit amet consectetur. Neque magna odio fermentum ante sit etiam enim.</li>
            <li><span>Lorem Ipsum.</span> Lorem ipsum dolor sit amet consectetur. Neque magna odio fermentum ante sit etiam enim.</li>
            <li><span>Lorem Ipsum.</span> Lorem ipsum dolor sit amet consectetur. Neque magna odio fermentum ante sit etiam enim.</li>
            <li><span>Lorem Ipsum.</span> Lorem ipsum dolor sit amet consectetur. Neque magna odio fermentum ante sit etiam enim.</li>
        </ul>
        </div>
        <div class="wc-image">
            <picture>
                <source media="(min-width:1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/8001/frame_1171275638.webp" type="image/webp">
                <source media="(min-width:768px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/8001/frame_1171275633.webp" type="image/webp">
                <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/zywave/8001/frame_1171275636.webp" alt="Hero Image">
            </picture>
        </div>
    </div>
</div>
</section>
<section class="zy-subfooter-section">
		<div class="sf-row">
			<div class="sf-col">
					<p class="copyright">© 2024 ZYWAVE</p>
					<ul class="zy-subfooter-menu"><li><a href="/terms-conditions/">Terms &amp; Conditions</a></li><li><a href="/privacy-statement/">Privacy</a></li><li><a href="/training-cancellation-policy/">Training Cancellation Policy</a></li><li><a href="/dmca-notice/">DMCA Notice</a></li><li><a href="/hipaa-security/">HIPAA Security</a></li></ul>
			</div>
	</div>
</section>`);


//Form internal code
waitForElm('body form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField[id]').then(function () {
    formModify();
});

function formModify() {
    //form title update
    document.querySelector('body form.mktoForm').closest('div[style]:not([class])').classList.add('spz-form-container');
    document.querySelector('.spz-form-container').removeAttribute('style');
    document.querySelector('.hero-form').insertAdjacentElement('beforeend', document.querySelector('.spz-form-container'));
    if (document.querySelectorAll('.spz-form-container .form_title').length == 0) {
        document.querySelector('.spz-form-container .formSpan').insertAdjacentHTML('beforebegin', `<div class="form_title">Register now</div>`);
    }

    //form Cta update
    var textChng = document.querySelector('form.mktoForm .mktoButtonRow button.mktoButton');

    let changeLabels = setInterval(() => {
        textChng.textContent = 'Submit';

        document.querySelectorAll('form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField:not([type="hidden"])').forEach(function (input) {
            let label = input.getAttribute('placeholder');
            if (input.closest('.mktoFieldWrap').querySelector('.mktoLabel')) {
                input.closest('.mktoFieldWrap').querySelector('.mktoLabel').textContent = label;
            }

            setTimeout(() => {
                input.setAttribute('placeholder', '');
                if (input.closest('.mktoFieldWrap').querySelector('.mktoGutter.mktoHasWidth')) {
                    input.closest('.mktoFieldWrap').querySelector('.mktoGutter.mktoHasWidth').remove();

                }
            }, 100);
        });
    }, 10);
    setTimeout(() => {
        clearInterval(changeLabels);
    }, 100);

    // document.getElementById("FirstName").setAttribute('tabindex', '1');
    // document.getElementById("LastName").setAttribute('tabindex', '2');
    // document.getElementById("Email").setAttribute('tabindex', '3');
    // document.getElementById("websiteFormJobDescription").setAttribute('tabindex', '4');
    // document.getElementById("Company").setAttribute('tabindex', '5');
    // document.getElementById("Phone").setAttribute('tabindex', '6');
    // document.getElementById("ringdna100__ProductInterest__c").setAttribute('tabindex', '7');

    var countryOptions = document.querySelectorAll('.mktoFieldWrap select');
    countryOptions.forEach(function (select) {
        if (select.querySelector('option[value=""]')) {
            select.querySelector('option[value=""]').setAttribute('disabled', 'disabled');
            select.querySelector('option[value=""]').setAttribute('style', 'color: #ccc');
            select.querySelector('option[value=""]').textContent = '';
        }
    });

    // form state
    var selector = 'body form.mktoForm .mktoFormCol .mktoFieldWrap .mktoField';

    document.addEventListener('click', function (event) {
        if (event.target.matches(selector)) {
            event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
        }
    }, true);

    document.addEventListener('focus', function (event) {
        if (event.target.matches(selector)) {
            event.target.closest('body form.mktoForm .mktoFormCol .mktoFieldWrap').classList.add('active', 'typing');
        }
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
        });
    }

    document.addEventListener('focusout', function (event) {
        document.querySelectorAll('body form.mktoForm .mktoFormCol .mktoFieldWrap.typing').forEach(function (elem) {
            elem.classList.remove('typing');
        })
    }, true);
};

//Add hidden fields
function setHiddenFields() {
    if (document.querySelector('.mktoFormRow [name="utm_location__c"]')) {
        document.querySelector('.mktoFormRow [name="utm_location__c"]').setAttribute('value', '#9001_spz_variant');
    }
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
// });