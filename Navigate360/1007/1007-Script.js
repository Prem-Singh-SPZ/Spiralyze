
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
document.getElementsByTagName('head')[0].appendChild(link);

var slickslider = document.createElement('script');
slickslider.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
slickslider.type = 'text/javascript';
document.getElementsByTagName('body')[0].appendChild(slickslider);

history.pushState = (function (f) {
    return function pushState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("pushstate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
    };
})(history.pushState);

history.replaceState = (function (f) {
    return function replaceState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("replacestate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
    };
})(history.replaceState);

window.addEventListener("popstate", function () {
    window.dispatchEvent(new Event("locationchange"));
});

window.addEventListener("locationchange", function () {
    url = location.href;
    load1007();
    init1003();
});

load1007();
init1003();

function load1007() {
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz-1007')) {
            clearInterval(bodyInterval);
            bodyEle.classList.add('spz-1007');

            waitForElm('#et-main-area #hero-section .hero-container').then(function (elm) {
                document.querySelector('#et-main-area #hero-section .hero-container').insertAdjacentHTML('beforeend', `<div class="spz-hero-img"></div><div class="tablet-btn-container"><a class="hero-cta spz-button" href="Javascript:void(0)" title="Get a Demo">get a demo</a></div>`);

                document.querySelector('#et-main-area #hero-section .hero-container .hero-content p.pre-header.small').textContent = `SCHOOL SAFETY REDEFINED`;

                document.querySelector('#et-main-area #hero-section .hero-container .hero-content h1.hero-title').innerHTML = `Navigate360 is the Leader in Comprehensive School Safety Solutions`;

                document.querySelector('#et-main-area #hero-section .hero-container .hero-content p.hero-body').textContent = `Safety training, services, and software for K12 schools, healthcare, workplaces and public safety agencies.`;

                document.querySelector('#et-main-area #hero-section .hero-container .hero-content a.hero-cta.ga4_button').textContent = `get a demo`;
                document.querySelector('#et-main-area #hero-section .hero-container .hero-content a.hero-cta.ga4_button').setAttribute('title', `Get a Demo`);
            });


            window.addEventListener("click", function (e) {
                if (e.target.classList.contains("spz-button")) {
                    this.document.querySelector('.hero-cta.ga4_button').click();
                }
            });

        }
    });
}

//1003 Test is merged here
function init1003() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz-home-1008')) {
        bodyEle.classList.add('spz-home-1008');


        waitForElm('#hero-section .hero-content').then((elm) => {
            let reviewHtml = `<div class="spz-testimonial et_pb_section">
                <div class="spz-row">
                    <div class="spz-review-slider">
                    <div class="splide">
                        <div class="splide__track">
                            <div class="splide__list">
                                <div class="splide__slide ">
                                    <div class="spz-reivew-slide">
                                        <div class="spz-review-img">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/navigate360/1007/test_update/Ashley_G-min.png" alt="Ashley G." />
                                        </div>
                                        <div class="spz-review-content">
                                            <h4>"Keep Safety at the Forefront, Simply"</h4>
                                            <div class="spz-review-count">
                                                <img src="//res.cloudinary.com/spiralyze/image/upload/v1693396869/navigate360/1008/rating-50.svg" alt="Review Stars" />
                                                <span>5.0</span>
                                            </div>
                                            <p>Navigate360 is a one-stop-shop. It is everything you need at your fingertips. Organized, transparent, easy to use.</p>
                                            <div class="spz-review-author">
                                            <h6>Ashley G.</h6>
                                            <p>Testimonial photo replaced upon request for privacy.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <div class="spz-reivew-slide">
                                        <div class="spz-review-img">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/navigate360/1007/test_update/Bobbie_s-min.png" alt="Bobbie S." />
                                        </div>
                                        <div class="spz-review-content">
                                            <h4>"One Central Location"</h4>
                                            <div class="spz-review-count">
                                                <img src="//res.cloudinary.com/spiralyze/image/upload/v1693396869/navigate360/1008/rating-50.svg" alt="Review Stars" />
                                                <span>5.0</span>
                                            </div>
                                            <p>Navigate gives us one platform to compile all of our school safety documents, floor plans, policies, and all other pertinent info that would be needed during a crisis.</p>
                                            <div class="spz-review-author">
                                            <h6>Bobbie S.</h6>
                                            <p>Testimonial photo replaced upon request for privacy.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <div class="spz-reivew-slide">
                                        <div class="spz-review-img">
                                            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/navigate360/1007/test_update/Jim_j-min.png" alt="Jim J." />
                                        </div>
                                        <div class="spz-review-content">
                                            <h4>"Best School Safety Software out there!"</h4>
                                            <div class="spz-review-count">
                                                <img src="//res.cloudinary.com/spiralyze/image/upload/v1693396869/navigate360/1008/rating-50.svg" alt="Review Stars" />
                                                <span>5.0</span>
                                            </div>
                                            <p>I like the interface and what I can do with the data. I can manage all of my school safety information in one program and it auto loads all of my roster. The customer support is what brings it home! They host webinars, in-person conferences and is quick to call me personally to work on questions and deployment. They know me personally!</p>
                                            <div class="spz-review-author">
                                            <h6>Jim J.</h6>
                                            <p>Testimonial photo replaced upon request for privacy.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>`;

            document.querySelector('#hero-section').insertAdjacentHTML('afterend', reviewHtml);




            var slideInterval = setInterval(function () {

                if (typeof Splide != 'undefined') {
                    clearInterval(slideInterval);
                    // var splide = new Splide( '.splide', {
                    //     type: 'slide',
                    //     pagination: false,                    
                    //     speed: 800,
                    //     snap: true,
                    // } );
                    // splide.mount();


                    let updateHeight = () => {
                        let slide = splide.Components.Slides.getAt(splide.index).slide;
                        let slHeight = slide.querySelector('.spz-reivew-slide')
                        slide.parentElement.parentElement.style.height = slHeight.offsetHeight + 'px';
                    };



                    var splide = new Splide('.splide', {
                        type: 'loop',
                        pagination: false,
                        speed: 800,
                        autoHeight: true,
                        loop: true,
                    }).mount()
                        .on('move active resized', updateHeight);
                    updateHeight();

                }
            }, 50);

        });
    }
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


// function hiddenFieldsValue() {
//     if (document.querySelector('form.hs-form-private .hs_spz_cro1 .input .hs-input')) {
//         document.querySelector('form.hs-form-private .hs_spz_cro1 .input .hs-input').setAttribute('value', '#1007_Solution_Navbar_CTA_Scroll');
//         document.querySelector('form.hs-form-private .hs_spz_cro2 .input .hs-input').setAttribute('value', 'Variant');
//     }
// }