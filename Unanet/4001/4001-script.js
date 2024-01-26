const swiperJS = document.createElement('script');
swiperJS.src = '//cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/js/swiper.js';
swiperJS.type = 'text/javascript';
document.head.appendChild(swiperJS);

appendPreload()
function appendPreload() {
    document.querySelector('head').insertAdjacentHTML("afterbegin", `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/css/swiper.css">`
    );
}

let bodyLoaded = setInterval(function () {
    const body = document.querySelector('body');
    if (body) {
        clearInterval(bodyLoaded);
        loadTest();
    }
});

function loadTest() {
    waitForElm('.dnd-module .hs_cos_wrapper .btn').then(function () {
        document.body.classList.add('spz-4001');

        // document.querySelector('main#main-content.body-container-wrapper .body-container--home > .row-fluid-wrapper > .row-fluid').insertAdjacentHTML('afterbegin', '<div class="spz-sections-wrapper"></div>');
    });
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


// swiperJS.onload = function () {
//     if (window.innerWidth < 1024) {
//         let intSlider = setInterval(() => {
//             if (document.querySelector('.three-card-slider.swiper-container.swiper-container-horizontal')) {
//                 clearInterval(intSlider);
//             }
//             init_Slider();
//         }, 100);
//     }
//     window.addEventListener('resize', function (event) {
//         init_Slider();
//     }, true);
// }

// function init_Slider() {
//     var Swipes = new Swiper('.swiper-container', {
//         // loop: true,
//         // autoplay: true,
//         slidesPerView: 2,
//         spaceBetween: 20,
//         pagination: {
//             el: ".swiper-pagination",
//         },
//         breakpoints: {
//             767: {
//                 slidesPerView: 1,
//             },
//         },
//     });

//     if (window.innerWidth > 1023) {
//         if (Swipes !== undefined) {
//             Swipes.destroy(true, true);
//         }
//     }
// }