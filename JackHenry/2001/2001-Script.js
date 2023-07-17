(function () {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-2003')) {
            clearInterval(bodyInterval);
            bodyEle.classList.add('spz-2001');

            //Hero section content feeding
            waitForElm('.hs-content-path-contact-us form.hs-form-private .hs-form-field').then(function (elm) {
                document.querySelector('#hs_cos_wrapper_flexible_column .contact-form-section .container').insertAdjacentHTML('beforeend', `<div class="spz-hero-section d-flex justify-content-between">
                <div class="spz-hero-content">
                    <div class="logo-section">
                        <img src="//res.cloudinary.com/spiralyze/image/upload/v1689088504/jackhenry/2001/jack-henry-logo_2.svg" alt="Jack Henry">
                    </div>
            
                    <div class="overhead">
                        <div class="financial-services-solutions">
                            Financial Services Solutions
                        </div>
                        <div class="financial-subtitle">
                            <h3>future-ready financial technology</h3>
                        </div>
                    </div>
                    <div class="bullets">
                        <div class="bullet">
                            <div class="lightbulb">
                                   <span>Next-gen financial tech </span>that helps community and regional financial institutions innovate and scale.
                            </div>
                        </div>
                        <div class="bullet">
                            <div class="icon-open-platform">
                                <span>Open platform </span>and open APIs so you can integrate with your current tech stack on your terms.
                            </div>
                        </div>
                        <div class="bullet">
                            <div class="icon-institutions">
                                <span> 8,000+ financial institutions</span> benefit from our experience working with community and regional banks and credit unions and fintechs.
                            </div>
                        </div>
                    </div>
                    <div class="social-proof" >
                    <div class="proud-to-be-recognized-as-an-industry-leader" >
                    Proud to Be Recognized as an Industry Leader
                    </div>
                    <div class="awards" >
                    <div class="badge-1" >
                    <img class="image-11" src="https://res.cloudinary.com/spiralyze/image/upload/v1689088597/jackhenry/2001/badge-1.webp" />
                    </div>
                    <div class="badge-2" >
                    <img class="image-8" src="https://res.cloudinary.com/spiralyze/image/upload/v1689088597/jackhenry/2001/badge-2.webp" />
                    </div>
                    <div class="badge-3" >
                    <img class="image-8" src="https://res.cloudinary.com/spiralyze/image/upload/v1689088597/jackhenry/2001/badge-3.webp" />
                    </div>
                    </div> </div>
                </div>
                <div class="spz-form-wrapper"></div>
            </div>
            `);

                //Form title set
                document.querySelector('.hs_cos_wrapper_type_form > h3.form-title').textContent = 'contact sales';

                document.querySelector('form.hs-form-private .hs_capability_types legend.hs-field-desc').insertAdjacentHTML('afterend', ` <button class="spz-btn" type="button" ><span class="dropdown-text"> Select Options</span></button>`);


                //Moving form and card elements
                document.querySelector('#hs_cos_wrapper_flexible_column').insertAdjacentHTML('afterend', `<div class="spz-four-cards"></div>`);
                waitForElm('.hs-content-path-contact-us .spz-hero-section .spz-form-wrapper').then(function (elm) {
                    moveElement('.contact-form-section .container .row.mt-5 .col-lg-6.pe-lg-5 .hs_cos_wrapper_type_form', '.spz-hero-section .spz-form-wrapper');
                    moveElement('.contact-form-section .container .row.mt-5 .col-lg-4.pt-4 ', '.spz-four-cards');

                    window.addEventListener("click", function (e) {
                        console.log(e.target.classList); if (e.target.classList.contains("spz-btn")) {
                            e.target.parentElement.classList.add('open');
                        }
                    });
                });
            });
        }
    });


    $('.hs-form-checkbox label').on('click', function () {
        var title = $(this).closest('.hs-form-checkbox').find('span').text(),
            title = $(this).text() + ",";

        if ($(this).closest('.hs-form-checkbox').find('input[type="checkbox"]').is(':checked')) {
            var html = '<span title="' + title + '">' + title + '</span>';
            $('.spz-btn').append(html);
            $(".dropdown-text").hide();
        } else {
            $('span[title="' + title + '"]').remove();
            var ret = $(".dropdown-text");
            $('.spz-btn').append(ret);
        }
        showLabel();
    });

    function showLabel() {
        if (!$('.hs_capability_types .input .hs-form-checkbox input').is(':checked')) {
            $(".dropdown-text").show();
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

    // Move element
    // sourceElm: Element which we have to move
    // targetLoc: New location of an element 
    function moveElement(sourceElm, targetLoc) {
        const f = document.createDocumentFragment();
        if (document.querySelector(sourceElm) != null) {
            f.appendChild(document.querySelector(sourceElm));
            document.querySelector(targetLoc).appendChild(f);
        }
    }

})();