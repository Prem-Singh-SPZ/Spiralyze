(function () {
    //append swiper js script in head and onload of that call function initSlider
    function appendScript(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;

        var css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = "//res.cloudinary.com/spiralyze/raw/upload/f_auto/sailpoint/3004/swiper/swiper-bundle.min.css";

        document.getElementsByTagName("head")[0].appendChild(script);
        document.getElementsByTagName("head")[0].appendChild(css);

        script.onload = function () {
            callback();
        };
    }

    appendScript("//res.cloudinary.com/spiralyze/raw/upload/f_auto/sailpoint/3004/swiper/swiper-bundle.min.js", function () {
        initSlider();
    });


    function createTest() {
        let bodyLoaded = setInterval(function () {
            const body = document.querySelector('body');
            if (body) {
                clearInterval(bodyLoaded);
                if (!document.body.classList.contains('spz_3004')) {
                    removeSpecificCookieValue('SPZ_3004', 'SPZ_3004_truecontrol');
                    document.body.classList.add('spz_3004');
                    waitForElm('.spz_3004 .product-hero .row__inner .inner-row__inner .form-header .text-white').then(() => {
                        let keepChanges = setInterval(() => {
                            if (document.querySelector('.spz_3004 .product-hero .row__inner .column.relative .column__inner .text-h2.text-h1.text-cobalt') && document.querySelector('.spz_3004 .product-hero .row__inner .column.relative .column__inner .text-h2.text-h1.text-cobalt').textContent !== 'Streamline identity and access management') {
                                heroSectionUpdate();
                                formModify();
                                accordionSection();
                            }
                            hiddenValue('SPZ_3004', 'SPZ_3004_variant');
                        }, 10);

                        setTimeout(() => {
                            clearInterval(keepChanges);
                        }, 5000);
                    });

                } else {
                    if (document.body.classList.contains('spz_3004')) {
                        removeSpecificCookieValue('SPZ_3004', 'SPZ_3004_truecontrol');
                        hiddenValue('SPZ_3004', 'SPZ_3004_variant');
                    }
                }
            }
        });
    }

    function formModify() {
        document.querySelector('.spz_3004 .product-hero .row__inner .inner-row').classList.add('spz-form-container');
        document.querySelector('.spz_3004 .product-hero .row__inner .inner-row__inner .form-header .text-white').textContent = 'Get a demo';
    }

    function heroSectionUpdate() {
        if (document.querySelectorAll('.spz_3004 .product-hero .row__inner .column.relative .column__inner .trusted-companies').length === 0) {
            document.querySelector('.spz_3004 .product-hero .row__inner .column.relative').classList.add('spz-lc-container');
            document.querySelector('.spz_3004 .product-hero .row__inner .column.relative .column__inner').insertAdjacentHTML('beforeend', `<div class="spz-left-copy">
                <div class="sp-logo"><a href="javascript:;" class="sp-logo-home"><img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/logo__colored.svg" alt="SailPoint"></a></div>
                <h1 class="eyebrow">Identity Security Cloud</h1>
                <p class="text-h2 text-h1 text-cobalt">Streamline identity and access management</p>
                <ul class="list--checkmarks">
                    <li><span>Access management.</span> Use least-privilege policies, get real-time access monitoring, and auto-implement roles for zero trust security.</li>
                    <li><span>Complete coverage.</span> Manage non-employee or privileged access, machine identities, entitlements, passwords, risk, etc. Detect threats.</li>
                    <li><span>Compliance.</span> Generate audit trails to document compliance. GDPR, HIPAA, PCI, CCPA, FISMA, PCPD, PDPA, and more.</li>
                </ul>
                <div class="trusted-companies">
                    <h6 class="main-heading">Trusted by 50% of the Fortune 500</h6>
                    <div class="company-logos">
                        <div class="logo-card"><img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/logo_01.svg" alt="GM"></div>
                        <div class="logo-card"><img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/logo_02.svg" alt="Hershey"></div>
                        <div class="logo-card"><img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/logo_03.svg" alt="PACCAR"></div>
                        <div class="logo-card"><img src="//res.cloudinary.com/spiralyze/image/upload/v1740474378/sailpoint/3004/logo_04.svg" alt="Philips"></div>
                        <div class="logo-card"><img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/logo_05.svg" alt="RWE"></div>
                        <div class="logo-card"><img src="//res.cloudinary.com/spiralyze/image/upload/v1740474378/sailpoint/3004/logo_06.svg" alt="Salvation Army"></div>
                        <div class="logo-card"><img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/logo_07.svg" alt="T-Mobile"></div>
                        <div class="logo-card"><img src="//res.cloudinary.com/spiralyze/image/upload/v1740474378/sailpoint/3004/logo_08.svg" alt="Home Depot"></div>
                    </div>
                </div>
            </div>`);
        }
    }

    function accordionSection() {
        //create accordion section json data
        let accordionItems = [{
            title: 'Accelerate insights & automation with AI',
            content: 'Make smart access decisions, detect threats and ensure compliance.',
            demoLink: 'Get a demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/arrow.svg" alt="Arrow Right">',
            image: '//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/accelerate_insights__automation_with_ai.webp'
        }, {
            title: 'Discover & secure all machine identities',
            content: 'Enhance security by gaining control over machine identities',
            demoLink: 'Get a demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/arrow.svg" alt="Arrow Right">',
            image: '//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/discover__secure_all_machine_identities.webp'
        }, {
            title: 'Manage & secure the non-employee lifecycle',
            content: 'Content for non-employee lifecycle management.',
            demoLink: 'Get a demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/arrow.svg" alt="Arrow Right">',
            image: '//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/manage__secure_the_non-employee_lifecycle.webp'
        }, {
            title: 'Secure & govern access to sensitive data',
            content: 'Information on securing sensitive data.',
            demoLink: 'Get a demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/arrow.svg" alt="Arrow Right">',
            image: '//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/secure__govern_access_to_sensitive_data.webp'
        }, {
            title: 'Automate & delegate privileged tasks',
            content: 'Content about automating privileged tasks.',
            demoLink: 'Get a demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/arrow.svg" alt="Arrow Right">',
            image: '//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/3004/automate__delegate_privileged_tasks.webp'
        }];

        if (document.querySelectorAll('.spz_3004 .help-section').length === 0) {
            document.querySelector('.spz_3004 .product-hero').insertAdjacentHTML('afterend', `<section class="help-section row"><div class="row__inner grid container">
            <div class="help-title">
                <h2 class="section-heading eyebrow">HOW WE HELP</h2>
                <h1 class="main-title text-cobalt">See how SailPoint helps secure every identity and protect your enterprise.</h1>
            </div>
            <div class="grid md:gap-16 md:grid-cols-50-50">
        <div class="help-content">
            <div class="accordion">
            ${accordionItems.map((item, index) => {
                return `<div class="accordion-item">
                    <div class="accordion-header">
                        <span>${item.title}</span>
                        <button class="toggle-button"></button>
                    </div>
                    <div class="accordion-content" data-image="image${index + 1}">
                        <p>${item.content}</p>
                        <a href="#" class="demo-link">Get a demo <img src="//res.cloudinary.com/spiralyze/image/upload/v1740474377/sailpoint/3004/arrow.svg" alt="Arrow Right"></a>
                        <div class="image-container">
                            <img src="${item.image}" alt="${item.title}">
                        </div>
                    </div>
                </div>`;
            }).join('')}</div>
                </div>
                <div class="help-image">
                    ${accordionItems.map((item, index) => {
                return ` <div class="image-container image${index + 1}">
                                    <img src="${item.image}" alt="${item.title}">
                                </div>`;
            }).join('')}
                </div>
        </div>
        </div>
    </section>
    `);

            waitForElm('.spz_3004 .accordion-item').then(() => {
                const accordionItems = document.querySelectorAll('.accordion-item');
                const imageContainers = document.querySelectorAll('.help-image .image-container');

                accordionItems.forEach((item, index) => {
                    const header = item.querySelector('.accordion-header');
                    const content = item.querySelector('.accordion-content');
                    const toggleButton = item.querySelector('.toggle-button');
                    const imageClass = content.dataset.image;

                    header.addEventListener('click', () => {
                        accordionItems.forEach(item => item.classList.remove('active')); // Remove active class from all items
                        item.classList.add('active');
                        toggleButton.textContent = item.classList.contains('active') ? '-' : '+';

                        // Show/hide the corresponding image container
                        imageContainers.forEach(container => container.classList.remove('active'));
                        document.querySelector('.' + imageClass).classList.add('active');
                    });

                    console.log(index);
                    // Activate the first accordion item and show its image
                    if (index === 0) {
                        item.classList.add('active');
                        toggleButton.textContent = '-';
                        document.querySelector('.' + imageClass).classList.add('active');
                    }
                });
            });
        }

        ourPartnerSection();
    }

    function ourPartnerSection() {
        if (document.querySelectorAll('.spz_3004 .our-partners-section').length === 0) {
            document.querySelector('.spz_3004 .help-section').insertAdjacentHTML('afterend', `<section id="our-partners" class="row bg-lightestgray relative our-partners-section" data-bg-color="true"><div class="row__inner grid container gap-10 grid-cols-1"><div class="column relative logo-container logo-container--left "><div class="column__inner flex h-full w-full flex-col items-start justify-start text-left"><div class="image-wrapper relative flex h-auto w-full" style="justify-content: inherit; align-items: inherit; min-height: 50px;"><img alt="partners logos" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" class="object-contain w-full desktop logos--left" src="https://sailpoint-digital-marketing.imgix.net/partner-logos--left.png?auto=compress&amp;fm=webp" style="color: transparent; height: auto; min-height: 50px;"></div></div></div><div class="column relative logo-container logo-container--top "><div class="column__inner flex h-full w-full flex-col items-start justify-start text-left"><div class="image-wrapper relative flex h-auto w-full" style="justify-content: inherit; align-items: inherit; min-height: 50px;"><img alt="Partner logos" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" class="object-contain w-full mobile logos--bottom" src="https://sailpoint-digital-marketing.imgix.net/partner-logos--top.png?auto=compress&amp;fm=webp" style="color: transparent; height: auto; min-height: 50px;"></div></div></div><div class="column relative our-partners__content "><div class="column__inner flex h-full w-full flex-col items-start md:items-center justify-start text-left md:text-center"><h2 class="eyebrow">OUR PARTNERS</h2><p class="text-h2 text-cobalt text-h1">Our global partner ecosystem </p><p>We partner with the many of the most innovative companies to provide identity security for the modern enterprise. Our partner ecosystem offers consulting, implementation, and services on SailPoint deployments, as well as integrations that help drive your business. </p><a class="btn btn--blue" href="/partners">Explore our partners</a></div></div><div class="column relative logo-container logo-container--right "><div class="column__inner flex h-full w-full flex-col items-start justify-start text-left"><div class="image-wrapper relative flex h-auto w-full" style="justify-content: inherit; align-items: inherit; min-height: 50px;"><img alt="Partner logos" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" class="object-contain w-full desktop logos--right" src="https://sailpoint-digital-marketing.imgix.net/partner-logos--right.png?auto=compress&amp;fm=webp" style="color: transparent; height: auto; min-height: 50px;"></div></div></div><div class="column relative logo-container logo-container--bottom "><div class="column__inner flex h-full w-full flex-col items-start justify-start text-left"><div class="image-wrapper relative flex h-auto w-full" style="justify-content: inherit; align-items: inherit; min-height: 50px;"><img alt="Partner logos" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" class="object-contain w-full mobile logos--top" src="https://sailpoint-digital-marketing.imgix.net/partner-logos-bottom.png?auto=compress&amp;fm=webp" style="color: transparent; height: auto; min-height: 50px;"></div></div></div><div class="column relative hidden "><div class="column__inner flex h-full w-full flex-col items-start justify-start text-left"><div class="custom-html"></div></div></div></div></section>`);

            atlasModify();
        }

    }

    function atlasModify() {
        document.querySelector('#atlas .column__inner .btn.btn--outline').outerHTML = '<a href="javascript:;" class="btn btn--hotpink go-to-demo">Get a demo</a>';

        customerStories();
    }

    function customerStories() {
        if (document.querySelectorAll('.spz_3004 .customer-stories-section').length === 0) {
            document.querySelector('.spz_3004 #atlas').insertAdjacentHTML('afterend', `<section id="customer-stories" class="sc-d7a74b51-0 doWpC overflow-hidden py-5 lg:py-20">
            <div class="customer-stories-swiper relative md:container">
            <div class="customer-stories__swiper swiper">
            <div class="swiper-wrapper">
            <div class="customer-stories__slide swiper-slide">
                <div class="relative h-full overflow-hidden bg-black bg-cover bg-center bg-no-repeat md:rounded-3xl"
                    style="background-image: url(&quot;https://cdn.sanity.io/images/4vd6xhxw/production/ecb0e9a4f0551679f5377736bddd25240ca9bbf3-1291x500.png?q=80&amp;fit=max&amp;auto=format&quot;);">
                    <video class="absolute inset-0 hidden h-full w-full object-cover md:block" preload="true"
                        playsinline="" disablepictureinpicture="" loop="" autoplay=""
                        poster="https://cdn.sanity.io/images/4vd6xhxw/production/ecb0e9a4f0551679f5377736bddd25240ca9bbf3-1291x500.png?q=80&amp;fit=max&amp;auto=format">
                        <source
                            src="https://cdn.sanity.io/files/4vd6xhxw/production/9c2b68a105507005a926b97fb9d638d39b94fafb.mp4">
                    </video>
                    <div
                        class="relative z-10 grid h-full content-start items-center gap-[1.875rem] px-5 py-[4.5rem] text-white md:grid-cols-[7fr_5fr] md:content-stretch md:py-10 md:pr-0 lg:pl-32">
                        <div class="flex md:order-2 md:items-center md:justify-center">
                            <div class="sc-8760157c-0 bnXPpx">
                                <div class="vidyard-player-container" uuid="ruKCMzD9nj7KGxVrTjEN2Z"
                                    style="margin: auto; width: 100%; height: auto; overflow: hidden; display: block;">
                                    <div class="vidyard-lightbox-thumbnail vidyard-lightbox-ruKCMzD9nj7KGxVrTjEN2Z">
                                        <div class="vidyard-lightbox-centering" style="padding-bottom: 56.25%;"><img
                                                class="vidyard-lightbox-image"
                                                src="https://play.vidyard.com/ruKCMzD9nj7KGxVrTjEN2Z.jpg"
                                                alt="video thumbnail">
                                            <div type="button" role="button" class="play-button" title="Play video"
                                                data-version="1" tabindex="0"
                                                style="display: block; background-color: rgb(0, 51, 161);"
                                                aria-label="Play video SPT2401-Heineken_Testimonial-e11-BR. Opens in a modal">
                                                <div class="play-button-size"></div>
                                                <div class="arrow-size">
                                                    <div class="arrow-size-ratio"></div>
                                                    <div class="arrow"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><img class="vidyard-player-embed" data-uuid="ruKCMzD9nj7KGxVrTjEN2Z" data-v="4"
                                    data-type="lightbox" alt="" data-rendered="true" style="display: none;">
                            </div><button type="button"
                                class="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white text-white md:h-32 md:w-32 md:border-4"><span
                                    class="sr-only">Play video</span><svg viewBox="0 0 64 65" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="aspect-square w-28">
                                    <path
                                        d="M44 31.1386C45.3333 31.9084 45.3333 33.8329 44 34.6027L27.5 44.1289C26.1667 44.8987 24.5 43.9365 24.5 42.3969L24.5 23.3443C24.5 21.8047 26.1667 20.8425 27.5 21.6123L44 31.1386Z"
                                        fill="#FFFFFF"></path>
                                </svg></button>
                        </div>
                        <div class="self-start md:order-1">
                            <div
                                class="customer-stories__logo relative mb-6 h-[50px] max-h-[50px] w-full max-w-[117px] md:max-w-[160px]">
                                <img alt="HEINEKEN logo" loading="eager" decoding="async" data-nimg="fill"
                                    class="object-contain object-left" sizes="auto"
                                    srcset="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F4ffbeea68a12d1a2bdd74c6bccdf68515d842231-362x86.png&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F4ffbeea68a12d1a2bdd74c6bccdf68515d842231-362x86.png&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F4ffbeea68a12d1a2bdd74c6bccdf68515d842231-362x86.png&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F4ffbeea68a12d1a2bdd74c6bccdf68515d842231-362x86.png&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F4ffbeea68a12d1a2bdd74c6bccdf68515d842231-362x86.png&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F4ffbeea68a12d1a2bdd74c6bccdf68515d842231-362x86.png&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F4ffbeea68a12d1a2bdd74c6bccdf68515d842231-362x86.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F4ffbeea68a12d1a2bdd74c6bccdf68515d842231-362x86.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F4ffbeea68a12d1a2bdd74c6bccdf68515d842231-362x86.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F4ffbeea68a12d1a2bdd74c6bccdf68515d842231-362x86.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F4ffbeea68a12d1a2bdd74c6bccdf68515d842231-362x86.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F4ffbeea68a12d1a2bdd74c6bccdf68515d842231-362x86.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F4ffbeea68a12d1a2bdd74c6bccdf68515d842231-362x86.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F4ffbeea68a12d1a2bdd74c6bccdf68515d842231-362x86.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F4ffbeea68a12d1a2bdd74c6bccdf68515d842231-362x86.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F4ffbeea68a12d1a2bdd74c6bccdf68515d842231-362x86.png&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F4ffbeea68a12d1a2bdd74c6bccdf68515d842231-362x86.png&amp;w=3840&amp;q=75"
                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                            </div>
                            <p class="text-h1 mb-0">HEINEKEN balances security &amp; productivity</p>
                            <p class="mb-0 mt-4 body-med">“With SailPoint as our partner, we are able to build a
                                robust identity security platform together which serves our ultimate goal to become
                                best-connected brewer.”</p>
                            <p class="mb-0 mt-4 body-med">Kamy Ng, Digital Identity Lead, HEINEKEN</p>
                        </div>
                    </div>
                    <div class="hidden md:block"><button
                            class="absolute bottom-2 right-2 z-10 text-white opacity-75 hover:opacity-100"
                            aria-label="Play/pause video"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hidden">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z">
                                </path>
                            </svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg></button></div>
                </div>
            </div>
            <div class="customer-stories__slide swiper-slide">
                <div class="relative h-full overflow-hidden bg-black bg-cover bg-center bg-no-repeat md:rounded-3xl"
                    style="background-image: url(&quot;https://cdn.sanity.io/images/4vd6xhxw/production/8dc23571ebddcf8f92e3e881afab65c898811a7b-1291x500.png?q=80&amp;fit=max&amp;auto=format&quot;);">
                    <video class="absolute inset-0 hidden h-full w-full object-cover md:block" preload="true"
                        playsinline="" disablepictureinpicture="" loop="" autoplay=""
                        poster="https://cdn.sanity.io/images/4vd6xhxw/production/8dc23571ebddcf8f92e3e881afab65c898811a7b-1291x500.png?q=80&amp;fit=max&amp;auto=format">
                        <source
                            src="https://cdn.sanity.io/files/4vd6xhxw/production/9f9e96866428ed29fca3145ac5850468f8e4b1cb.mp4">
                    </video>
                    <div
                        class="relative z-10 grid h-full content-start items-center gap-[1.875rem] px-5 py-[4.5rem] text-white md:grid-cols-[7fr_5fr] md:content-stretch md:py-10 md:pr-0 lg:pl-32">
                        <div class="flex md:order-2 md:items-center md:justify-center">
                            <div class="sc-8760157c-0 bnXPpx">
                                <div class="vidyard-player-container" uuid="qgnEt44td8tXGUZXta8thU"
                                    style="margin: auto; width: 100%; height: auto; overflow: hidden; display: block;">
                                    <div class="vidyard-lightbox-thumbnail vidyard-lightbox-qgnEt44td8tXGUZXta8thU">
                                        <div class="vidyard-lightbox-centering" style="padding-bottom: 56.25%;"><img
                                                class="vidyard-lightbox-image"
                                                src="https://play.vidyard.com/qgnEt44td8tXGUZXta8thU.jpg"
                                                alt="video thumbnail">
                                            <div type="button" role="button" class="play-button" title="Play video"
                                                data-version="1" tabindex="0"
                                                style="display: block; background-color: rgb(0, 51, 161);"
                                                aria-label="Play video SPT2401-PACCAR_Testimonial-e11-BR. Opens in a modal">
                                                <div class="play-button-size"></div>
                                                <div class="arrow-size">
                                                    <div class="arrow-size-ratio"></div>
                                                    <div class="arrow"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><img class="vidyard-player-embed" data-uuid="qgnEt44td8tXGUZXta8thU" data-v="4"
                                    data-type="lightbox" alt="" data-rendered="true" style="display: none;">
                            </div><button type="button"
                                class="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white text-white md:h-32 md:w-32 md:border-4"><span
                                    class="sr-only">Play video</span><svg viewBox="0 0 64 65" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="aspect-square w-28">
                                    <path
                                        d="M44 31.1386C45.3333 31.9084 45.3333 33.8329 44 34.6027L27.5 44.1289C26.1667 44.8987 24.5 43.9365 24.5 42.3969L24.5 23.3443C24.5 21.8047 26.1667 20.8425 27.5 21.6123L44 31.1386Z"
                                        fill="#FFFFFF"></path>
                                </svg></button>
                        </div>
                        <div class="self-start md:order-1">
                            <div
                                class="customer-stories__logo relative mb-6 h-[50px] max-h-[50px] w-full max-w-[117px] md:max-w-[160px]">
                                <img alt="Paccar logo" loading="eager" decoding="async" data-nimg="fill"
                                    class="object-contain object-left" sizes="auto"
                                    srcset="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F208705bcde1fb1ca35ef6cc8cc1be26ff85c74eb-293x61.png&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F208705bcde1fb1ca35ef6cc8cc1be26ff85c74eb-293x61.png&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F208705bcde1fb1ca35ef6cc8cc1be26ff85c74eb-293x61.png&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F208705bcde1fb1ca35ef6cc8cc1be26ff85c74eb-293x61.png&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F208705bcde1fb1ca35ef6cc8cc1be26ff85c74eb-293x61.png&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F208705bcde1fb1ca35ef6cc8cc1be26ff85c74eb-293x61.png&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F208705bcde1fb1ca35ef6cc8cc1be26ff85c74eb-293x61.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F208705bcde1fb1ca35ef6cc8cc1be26ff85c74eb-293x61.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F208705bcde1fb1ca35ef6cc8cc1be26ff85c74eb-293x61.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F208705bcde1fb1ca35ef6cc8cc1be26ff85c74eb-293x61.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F208705bcde1fb1ca35ef6cc8cc1be26ff85c74eb-293x61.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F208705bcde1fb1ca35ef6cc8cc1be26ff85c74eb-293x61.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F208705bcde1fb1ca35ef6cc8cc1be26ff85c74eb-293x61.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F208705bcde1fb1ca35ef6cc8cc1be26ff85c74eb-293x61.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F208705bcde1fb1ca35ef6cc8cc1be26ff85c74eb-293x61.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F208705bcde1fb1ca35ef6cc8cc1be26ff85c74eb-293x61.png&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2F208705bcde1fb1ca35ef6cc8cc1be26ff85c74eb-293x61.png&amp;w=3840&amp;q=75"
                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                            </div>
                            <p class="text-h1 mb-0">Driving speed and accuracy at PACCAR </p>
                            <p class="mb-0 mt-4 body-med">“As SailPoint has continued to evolve their capabilities,
                                it's gone from best of breed to best platform. We've been very confident in our
                                SailPoint use to this point and we're very excited about the future that Atlas may
                                hold.”</p>
                            <p class="mb-0 mt-4 body-med">Doug Drewry, Director Global Cybersecurity Operations
                                &amp; Identity and Access Management </p>
                            <div class="mt-6"><a class="btn btn--outline-alt" href="/customers/paccar">Read customer
                                    story<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 11"
                                        class="aspect-[16/11] w-4">
                                        <path fill="currentColor"
                                            d="M15.759 4.726 11.49.252a.787.787 0 0 0-1.155 0 .893.893 0 0 0 0 1.216l2.865 3.003H.81a.862.862 0 0 0 0 1.72h12.393L10.343 9.2a.893.893 0 0 0 0 1.216.789.789 0 0 0 1.154 0l4.268-4.474a.894.894 0 0 0-.006-1.215Z">
                                        </path>
                                    </svg></a></div>
                        </div>
                    </div>
                    <div class="hidden md:block"><button
                            class="absolute bottom-2 right-2 z-10 text-white opacity-75 hover:opacity-100"
                            aria-label="Play/pause video"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z">
                                </path>
                            </svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-6 hidden">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg></button></div>
                </div>
            </div>
            <div class="customer-stories__slide swiper-slide">
                <div class="relative h-full overflow-hidden bg-black bg-cover bg-center bg-no-repeat md:rounded-3xl"
                    style="background-image: url(&quot;https://cdn.sanity.io/images/4vd6xhxw/production/b7e26026be04b70a72509b29ed4a61f6a830e8ca-1291x500.png?q=80&amp;fit=max&amp;auto=format&quot;);">
                    <video class="absolute inset-0 hidden h-full w-full object-cover md:block" preload="true"
                        playsinline="" disablepictureinpicture="" loop="" autoplay=""
                        poster="https://cdn.sanity.io/images/4vd6xhxw/production/b7e26026be04b70a72509b29ed4a61f6a830e8ca-1291x500.png?q=80&amp;fit=max&amp;auto=format">
                        <source
                            src="https://cdn.sanity.io/files/4vd6xhxw/production/72472a61be7eb8ee3db8d33ef27fbc6be0dc9ce0.mp4">
                    </video>
                    <div
                        class="relative z-10 grid h-full content-start items-center gap-[1.875rem] px-5 py-[4.5rem] text-white md:grid-cols-[7fr_5fr] md:content-stretch md:py-10 md:pr-0 lg:pl-32">
                        <div class="flex md:order-2 md:items-center md:justify-center">
                            <div class="sc-8760157c-0 bnXPpx">
                                <div class="vidyard-player-container" uuid="nkrV1881Gw7S8DF5KAiuyY"
                                    style="margin: auto; width: 100%; height: auto; overflow: hidden; display: block;">
                                    <div class="vidyard-lightbox-thumbnail vidyard-lightbox-nkrV1881Gw7S8DF5KAiuyY">
                                        <div class="vidyard-lightbox-centering" style="padding-bottom: 56.25%;"><img
                                                class="vidyard-lightbox-image"
                                                src="https://play.vidyard.com/nkrV1881Gw7S8DF5KAiuyY.jpg"
                                                alt="video thumbnail">
                                            <div type="button" role="button" class="play-button" title="Play video"
                                                data-version="1" tabindex="0"
                                                style="display: block; background-color: rgb(0, 51, 161);"
                                                aria-label="Play video SPT2401-Legal &amp; General_Testimonial-e12-KS. Opens in a modal">
                                                <div class="play-button-size"></div>
                                                <div class="arrow-size">
                                                    <div class="arrow-size-ratio"></div>
                                                    <div class="arrow"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><img class="vidyard-player-embed" data-uuid="nkrV1881Gw7S8DF5KAiuyY" data-v="4"
                                    data-type="lightbox" alt="" data-rendered="true" style="display: none;">
                            </div><button type="button"
                                class="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white text-white md:h-32 md:w-32 md:border-4"><span
                                    class="sr-only">Play video</span><svg viewBox="0 0 64 65" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="aspect-square w-28">
                                    <path
                                        d="M44 31.1386C45.3333 31.9084 45.3333 33.8329 44 34.6027L27.5 44.1289C26.1667 44.8987 24.5 43.9365 24.5 42.3969L24.5 23.3443C24.5 21.8047 26.1667 20.8425 27.5 21.6123L44 31.1386Z"
                                        fill="#FFFFFF"></path>
                                </svg></button>
                        </div>
                        <div class="self-start md:order-1">
                            <div
                                class="customer-stories__logo relative mb-6 h-[50px] max-h-[50px] w-full max-w-[117px] md:max-w-[160px]">
                                <img alt="Legal &amp; General logo" loading="eager" decoding="async" data-nimg="fill"
                                    class="object-contain object-left" sizes="auto"
                                    srcset="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2Fcc3c856cf5a67e7af3988400968ad6c59825190b-162x122.png&amp;w=16&amp;q=75 16w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2Fcc3c856cf5a67e7af3988400968ad6c59825190b-162x122.png&amp;w=32&amp;q=75 32w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2Fcc3c856cf5a67e7af3988400968ad6c59825190b-162x122.png&amp;w=48&amp;q=75 48w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2Fcc3c856cf5a67e7af3988400968ad6c59825190b-162x122.png&amp;w=64&amp;q=75 64w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2Fcc3c856cf5a67e7af3988400968ad6c59825190b-162x122.png&amp;w=96&amp;q=75 96w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2Fcc3c856cf5a67e7af3988400968ad6c59825190b-162x122.png&amp;w=128&amp;q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2Fcc3c856cf5a67e7af3988400968ad6c59825190b-162x122.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2Fcc3c856cf5a67e7af3988400968ad6c59825190b-162x122.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2Fcc3c856cf5a67e7af3988400968ad6c59825190b-162x122.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2Fcc3c856cf5a67e7af3988400968ad6c59825190b-162x122.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2Fcc3c856cf5a67e7af3988400968ad6c59825190b-162x122.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2Fcc3c856cf5a67e7af3988400968ad6c59825190b-162x122.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2Fcc3c856cf5a67e7af3988400968ad6c59825190b-162x122.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2Fcc3c856cf5a67e7af3988400968ad6c59825190b-162x122.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2Fcc3c856cf5a67e7af3988400968ad6c59825190b-162x122.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2Fcc3c856cf5a67e7af3988400968ad6c59825190b-162x122.png&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4vd6xhxw%2Fproduction%2Fcc3c856cf5a67e7af3988400968ad6c59825190b-162x122.png&amp;w=3840&amp;q=75"
                                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                            </div>
                            <p class="text-h1 mb-0">Reducing risk and operational cost through automations</p>
                            <p class="mb-0 mt-4 body-med">“By implementing SailPoint, we've got a better customer
                                experience. We've got a faster route to live, and we've also made our state more
                                secure.”</p>
                                        <p class="mb-0 mt-4 body-med">Mark Ward, Head of Identity &amp; Access, Legal &amp;
                                            General</p>
                                        <div class="mt-6"><a class="btn btn--outline-alt" href="/customers/legal-general">Read
                                                customer story<svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 16 11" class="aspect-[16/11] w-4">
                                                    <path fill="currentColor"
                                                        d="M15.759 4.726 11.49.252a.787.787 0 0 0-1.155 0 .893.893 0 0 0 0 1.216l2.865 3.003H.81a.862.862 0 0 0 0 1.72h12.393L10.343 9.2a.893.893 0 0 0 0 1.216.789.789 0 0 0 1.154 0l4.268-4.474a.894.894 0 0 0-.006-1.215Z">
                                                    </path>
                                                </svg></a></div>
                                    </div>
                                </div>
                                <div class="hidden md:block"><button
                                        class="absolute bottom-2 right-2 z-10 text-white opacity-75 hover:opacity-100"
                                        aria-label="Play/pause video"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z">
                                            </path>
                                        </svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6 hidden">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                        </svg></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-navigation mt-5 flex items-center justify-center gap-3 md:gap-8">
                        <button type="button" id="slider-prev" class="sc-d7a74b51-1 hWzfPr"></button>
                         <div class="swiper-pagination"></div>
                        <button type="button" id="slider-next" class="sc-d7a74b51-2 cHmnGD"></button>
                    </div>
                </div>
            </section>`);
        }

        waitForElm('.customer-stories-swiper .customer-stories__slide').then(function (elm) {
            // If swiper is initialized, run initSlider function
            if (typeof Swiper !== 'undefined') {
                initSlider();
            }
        });

        getStarted();
    }

    function initSlider() {
        const swiper = new Swiper(".customer-stories__swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '#slider-next',
                prevEl: '#slider-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    function getStarted() {
        if (document.querySelectorAll('.spz_3004 .sailpoint-banner').length == 0) {
            document.querySelector('.spz_3004 #customer-stories').insertAdjacentHTML('afterend', `<div class="sailpoint-banner">
                <div class="sailpoint-banner-content">
                    <p class="sailpoint-get-started">GET STARTED</p>
                    <h1>Modernize your identity security <br> with SailPoint</h1>
                    <a href="javascript:;" class="btn btn--blue-alt go-to-demo">Get a demo</a>
                </div>
            </div>`);
        }
    }

    //click event listener
    document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('sp-logo-home')) {
            e.preventDefault();
            document.querySelector('a[href="/"]').click();
        }
        if (e.target.classList.contains('.go-to-demo')) {
            e.preventDefault();
            document.querySelector('.spz_3004 a[href="/demo"]').click();
        }
    });

    function removeTest() {
        setTimeout(() => {
            if (document.querySelector('.spz_3004')) {
                document.body.classList.remove("spz_3004");
            }
        }, 200);
    }

    function removeSpecificCookieValue(targetName, targetValue) {
        ['HiddenFieldName', 'HiddenFieldValue'].forEach((key, i) => {
            var values = getCookie(key)?.split(',').filter(v => v !== (i ? targetValue : targetName)).join(',');
            setCookie(key, values || '', 1);
        });
    }

    // Do not touch below hidden field code for any Experiment Start
    function hiddenValue(currentHiddenFieldName, currentHiddenFieldValue) {
        var ExistingHiddenFieldName = getCookie('HiddenFieldNameContact');
        var ExistingHiddenFieldValue = getCookie('HiddenFieldValueContact');

        if (!ExistingHiddenFieldName) {
            setCookie('HiddenFieldNameContact', currentHiddenFieldName, 1);
            setCookie('HiddenFieldValueContact', currentHiddenFieldValue, 1);
        } else if (ExistingHiddenFieldName && !ExistingHiddenFieldName.includes(currentHiddenFieldName) && !ExistingHiddenFieldValue.includes(currentHiddenFieldValue)) {
            setCookie('HiddenFieldNameContact', ExistingHiddenFieldName + ',' + currentHiddenFieldName, 1);
            setCookie('HiddenFieldValueContact', ExistingHiddenFieldValue + ',' + currentHiddenFieldValue, 1);
        }

        setHiddenFieldValue();
    }

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=sailpoint.com;";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function setHiddenFieldValue() {
        var spz_cro_Interval = setInterval(function () {
            var intellimize1 = document.querySelector('form.mktoForm#mktoForm_1018 input[name="intellimize1"]');
            if (intellimize1) {
                clearInterval(spz_cro_Interval);
                var ExistingHiddenFieldValue = getCookie('HiddenFieldValueContact');
                //check if hidden field value is empty then only set the value else set the value with , seperated
                if (intellimize1.value == '') {
                    intellimize1.value = ExistingHiddenFieldValue;
                }
                else {
                    if (!intellimize1.value.includes(ExistingHiddenFieldValue)) {
                        intellimize1.value = intellimize1.value + ',' + ExistingHiddenFieldValue;
                    }
                }
            }
        });

        //click event listener
        document.addEventListener('click', function (e) {
            if (e.target.closest('#mktoForm_1018 .mktoButton')) {
                //inject current time and date in EST timezone into .intellimize2 hidden field
                var d = new Date();
                var n = d.toLocaleString('en-US', { timeZone: 'America/New_York' });
                var int2 = e.target.closest('.mktoForm').querySelector('input[name="intellimize2"]');
                if (int2)
                    int2.value = n;
            }
        });
    }
    // Do not touch below hidden field code for any Experiment over

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
        urlCheck(url);
        if (document.querySelector('.spz_3004')) {
            document.body.classList.remove("spz_3004");
        }
    });
    var url = location.href;
    urlCheck(url);

    function urlCheck(url) {
        if (location.pathname === "/products/identity-security-cloud-2") {
            createTest();
        } else {
            removeTest();
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
})();