
let bodyLoad = setInterval(function () {
    const bodyEle = document.querySelector('body');
    if (bodyEle) {
        clearInterval(bodyLoad);
        // Set test class
        document.body.classList.add("spz-1001");

        waitForElm('.main-content .home-hero .home-hero__inner').then(function () {
            loadTest();
        });

        function loadTest() {
            //Hero left title update
            document.querySelector('.home-hero__inner .home-hero__col1 .home-hero__info .home-hero__title.title-l').innerHTML = `The gym management platform trusted by <strong>8,600+ clubs in North America.</strong>`;

            //Hero left sub-title append
            document.querySelector('.home-hero__inner .home-hero__col1 .home-hero__info .home-hero__title.title-l').insertAdjacentHTML('afterend', `<h6 class="spz-sub-title">The Industries' Top Brands Trust ABC Ignite.</h6>`);

            //Hero left list item update
            document.querySelector('.home-hero__inner .home-hero__col1 .home-hero__info .home-hero__desc.editor li:nth-child(1)').innerHTML = `Collect more member dues with the industry-leading billing platform.`;

            document.querySelector('.home-hero__inner .home-hero__col1 .home-hero__info .home-hero__desc.editor li:nth-child(2)').innerHTML = `Engage members beyond the 4 walls with mobile experiences.`;

            document.querySelector('.home-hero__inner .home-hero__col1 .home-hero__info .home-hero__desc.editor li:nth-child(3)').innerHTML = `Use data and make key business decisions.`;

            document.querySelector('.home-partners .home-partners__inner .home-partners__title.subtitle').textContent = `Join 24,000+ gyms & studios using ABC Ignite `;

            //Hero right image update
            document.querySelector('.home-hero__inner .home-hero__col2 .home-hero__image').innerHTML = `<picture>
            <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/abcignite/1001/frame_3776.webp" type="image/webp">
            <source media="(max-width: 1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/abcignite/1001/frame_3775.webp" type="image/webp">
            <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/abcignite/1001/frame_3772.webp" type="image/webp">
            <source srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/abcignite/1001/frame_3772.png" type="image/png">
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/abcignite/1001/frame_3776.webp" alt="Hero graphics image">
           </picture>`;

            document.querySelector('.home-partners .home-partners__inner .home-partners__list').innerHTML = `<picture>
            <source media="(max-width: 767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/abcignite/1001/logos_m.webp" type="image/webp">
            <source media="(max-width: 1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/abcignite/1001/logos_t.webp" type="image/webp">
            <source media="(min-width: 1024px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/abcignite/1001/logos_d.webp" type="image/webp">
            <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/abcignite/1001/logos_m.webp" alt="Partners">
           </picture>`;
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

        // Add class 'safari' (used for cart scrollbar)
        if (navigator.userAgent.toLowerCase().indexOf('chrome/') == -1 && navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
            document.body.classList.add('safari')
        }
    }
});

