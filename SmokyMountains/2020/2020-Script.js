(function () {

    waitForElm("#main .vl-main .vl-book").then(function () {
        if (document.querySelectorAll("#main .vl-main .vl-book .spz-2020-content").length == 0) {
            loadTest();
        }
    });

    function loadTest() {
        document.body.classList.add('spz-2020');
        if (window.innerWidth >= 1024) {
            document.querySelector("#main .vl-main aside.vl-main__sidebar .vl-book").insertAdjacentHTML('afterend', `<div class="spz-2020-content desktop-only"><div class="content-section"><div class="content-parent"><h6>Why book with us? </h6></div><ul class="content-list"><li class="list-item"><span>Free personalized gift —</span> choose your reward after booking. Gift cards, dining, activities, and more.</li> <li class="list-item"><span>Professionally cleaned —</span> all properties are thoroughly cleaned and sanitized.</li><li class="list-item"><span>Exclusive properties —</span> find cabins not listed on other sites.</li> </ul></div></div>`);
        }
        else {
            document.querySelector("#main .vl-main  .vl-book").insertAdjacentHTML('afterend', `<div class="spz-2020-content mobile-only"><div class="content-section"><div class="content-parent"><h6>Why book with us? </h6></div><ul class="content-list"><li class="list-item"><span>Free personalized gift —</span> choose your reward after booking. Gift cards, dining, activities, and more.</li> <li class="list-item"><span>Professionally cleaned —</span> all properties are thoroughly cleaned and sanitized.</li><li class="list-item"><span>Exclusive properties —</span> find cabins not listed on other sites.</li> </ul></div></div>`);
        }
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
})()