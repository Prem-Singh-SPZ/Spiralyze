(function () {

    const TEST_ENV = {
        name: '2001-Homepage-Review',
        class: 'spz-2001', // class will be used in body ex. spz-1001
        date: '10-02-2023',
        base_url: 'https://cymatics.fm/', // control domain url
        test_url: 'https://cymatics.fm/', // url segment where test will run on
        main_class: 'body', // parent class where test is going to be applied
    }

    const bigFiveStar = "https://res.cloudinary.com/spiralyze/image/upload/v1675933479/Cymatics/2001/assets/Stars_rate_big_5.svg";

    function loadTest() {
        var cookieName = TEST_ENV.name + "-" + TEST_ENV.date;
        var cookieValue = "1";
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;

        // Set test class
        document.body.classList.add(TEST_ENV.class);
        waitForElm('#MainContent .shop-collection .shop-main-content .grid__item.small--one-half .product-box-link').then(function () {
            if (document.querySelectorAll('#MainContent .spz-review-container').length == 0) {
                document.querySelector('#MainContent > .page-width').insertAdjacentHTML('afterend', initReviewSlider());
            }
            document.querySelector('.load-more-container .jdgm-paginate__load-more').addEventListener("click", function (e) {
                document.querySelector('.review-section .user-reviews-container').classList.add('show-12');
                document.querySelector('.load-more-container .jdgm-paginate__load-more').classList.add('loaded-12');
                document.querySelector('.load-more-container .jdgm-paginate__load-more.loaded-12').addEventListener("click", function (e) {
                    if (document.querySelector('.review-section .user-reviews-container').classList.contains('show-12')) {
                        document.querySelector('.review-section .user-reviews-container').classList.add('show-all');
                        document.querySelector('.review-section .user-reviews-container').classList.remove('show-12');
                        document.querySelector('.load-more-container .jdgm-paginate__load-more').classList.add('d-none');
                    }
                })
            })
        });

        document.body.classList.add("loaded");
    }


    function initReviewSlider() {
        return `
		<section class="review-section ">
			<div class="product-review page-width">
            <div class="review-header text-center demo-header">Customer Reviews</div>
				<div class="jdgm-rev-widg">
                <div class="jdgm-rev-widg__summary"><div class="jdgm-rev-widg__summary-inner">              <img src=`+ bigFiveStar + ` alt="5 star"/>  <div class="jdgm-rev-widg__summary-text">Based on 400 reviews</div> </div>
                <div class="rating-division"> <ul> <li>
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1675933479/Cymatics/2001/assets/Line_1.svg" alt="5 star"/>
                <span class="perc">95%</span><span>(375)</span>
                </li> 
                <li>
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1675933479/Cymatics/2001/assets/Line_2.svg" alt="4 star"/>
                <span class="perc">4%</span><span>(16)</span>
                </li>
                <li>
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1675933479/Cymatics/2001/assets/Line_3.svg" alt="3 star"/>
                <span class="perc">1%</span><span>(3)</span>
                </li>
                <li>
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1675933479/Cymatics/2001/assets/Line_4.svg" alt="2 star"/>
                <span class="perc">0%</span><span>(0)</span>
                </li>
                <li>
                <img src="https://res.cloudinary.com/spiralyze/image/upload/v1675933479/Cymatics/2001/assets/Line_5.svg" alt="1 star"/>
                <span class="perc">0.5%</span><span>(2)</span>
                </li></ul> </div>
                </div>
                <div class="user-reviews-container">
					`+ loopReviewData() + `
                    </div>
                    <div class="load-more-container"> <a class="jdgm-paginate__load-more"  role="button">Load More</a></div>
				</div>
			</div>
		</section>
    `
            ;
    }
    function loopReviewData() {
        let reviewData = [
            {
                name: 'K.S.S.',
                letters: 'K',
                heading: 'Nothing but...Amazing!!',
                review: 'have downloaded waves midi and python sample pack and they had very amazing sounds and midi.Gives you Better value than some paid pack.',
                date: '01/09/2023',
                review_rating: bigFiveStar,
            },
            {
                name: 'P.S.',
                letters: 'P',
                heading: 'My experience with the cymatics edm pack',
                review: `I've been using the free versions of the cymatics edm sample packs and ever since then I haven't substitute the with any other sample packs because the cymatics were all a producer can ever need,best quality sound and think I'l be sticking with cymatics for a long time`,
                date: '01/09/2023',
                review_rating: bigFiveStar,
            },
            {
                name: 'A.N.',
                letters: 'A',
                heading: 'edm packs review',
                review: `cymatics edm packs are the best ones samples are really high quality and i allways find the right sounds i was looking for in the packs plus lots of cool and unique sounds are there which we cant find anywhere esle i really like edm packs i hope cymatics will bring neW edm sample packs`,
                date: '01/09/2023',
                review_rating: bigFiveStar,
            },
            {
                name: 's.s.S',
                letters: 'S',
                heading: 'EDM Sample Packs',
                review: `YESSSS definitly. being an edm producer my self i really enjoy using cymatics packs but the only thing is i wish there was a bit more variety of packs and also certain genres of edm in diferent packs but overall i really would appreceate u guys making more packs. looking forward!!`,
                date: '01/08/2023',
                review_rating: bigFiveStar,
            },
            {
                name: 'B.I',
                letters: 'B',
                heading: 'Amazing Packs',
                review: `When was learning how to produce, these free EDM packs gave me a great start. I could use the melody loops to begin working on drums, and as Igot better at making my own melodies, I continued to use the drums from the packs. After three years of producing, Tve continued using all of the Cymatics samples, even buying some whenever they offer coupons. The generosity of the company is unmatched. To offer such incredible samples for free is insane, especially considering how expensive music production can be. Highly recommend Cymatics to anyone getting into producing their own stuff.`,
                date: '01/08/2023',
                review_rating: bigFiveStar,
            },
            {
                name: 'R.K.',
                letters: 'R',
                heading: 'Good Quality Sounds+Very Creative',
                review: `The sounds have used on my EDM tracks are from free Odyssey Sample Pack are still sounding better than most of the sample packs I've used. Keep it going Steve & Drew and to the whole Cymatics Team`,
                date: '01/07/2023',
                review_rating: bigFiveStar,
            },
            {
                name: 'Trap Boy Beats',
                letters: 'T',
                heading: 'Pro-Quality Sounds...Great Prices!',
                review: `The Quality and quantity of sounds in Cymatics Packs are 🔥🔥🔥! Great deals and value for your 💵! I've bought a few of their Trap& Drill Bundles over the last year and Im still creating with them. The free plugins, presets & packs are the best I've come across yet. Keep up the good work fellas!`,
                date: '01/07/2023',
                review_rating: bigFiveStar,
            },
            {
                name: 'J.H.',
                letters: 'J',
                heading: 'Extremely Versatile Samples!',
                review: `I purchased the "Video Game Samples Vol. 1" pack, I have since used the samples in dubstep, future bass, hip hop, and trap genres. There are SO many samples in there, and they're all so versatile! Highly recommend this pack to anyone looking for some unique and nostalgic sfx in their productions. Thanks Cymatics!`,
                date: '01/06/2023',
                review_rating: "https://res.cloudinary.com/spiralyze/image/upload/v1675936899/Cymatics/2001/assets/Stars_rate.svg",
            },
            {
                name: 'J.H.',
                letters: 'J',
                heading: 'Outbreak Serum Presets',
                review: `Bought this pack, great Serum presets for dubstep in here, love al the macros, and they're all great quality 👌`,
                date: '01/06/2023',
                review_rating: "https://res.cloudinary.com/spiralyze/image/upload/v1675936899/Cymatics/2001/assets/Stars_rate.svg",
            },
            {
                name: 'R.M.',
                letters: 'R',
                heading: 'EDM Review',
                review: `I have been using some of the MIDI from Cymatics and my game has improved. l am allowed the creativity which resonates with my style of production.`,
                date: '01/07/2023',
                review_rating: bigFiveStar,
            },
            {
                name: 'Jordan Keller',
                letters: 'J',
                heading: 'Amazing Stuff',
                review: `Love using cymatics they provide unique and original midis and samples that are great for including in your tracks as well as inspiring your tracks. Keep up the great work.`,
                date: '01/07/2023',
                review_rating: bigFiveStar,
            },
            {
                name: 'shane carter',
                letters: 'S',
                heading: 'Brilliant',
                review: `after searching for samples, this is one of the best sites Ive come across and also the packages are very cheap. and also all info is correct,, no jargon just samples`,
                date: '01/07/2023',
                review_rating: bigFiveStar,
            },
            {
                name: 'L.C.',
                letters: 'L',
                heading: 'Thank you for your free pack',
                review: `Hello Cymatics, thank you very much for your Free Pack, it helps me a lot in my production here, I'm in Africal don't have to buy all the packs, but your Free Pack thank you very much for it, you are best in the whole world! but I want you to help me find my studio equipment, thank you for your good understanding 🙏🙏🙏`,
                date: '01/07/2023',
                review_rating: bigFiveStar,
            },
            {
                name: 'Justin Andrews',
                letters: 'J',
                heading: 'EDM',
                review: `Your EDM is Super great i almost made 25 Beats in only 1day with it thanks guys keep up the great work ..❤️`,
                date: '01/07/2023',
                review_rating: bigFiveStar,
            },
            {
                name: 'Esandaii',
                letters: 'E',
                heading: 'Cymatics Review',
                review: `Honestly, Cymatics never miss! A few years back, i had no lue about beat making, sample chopping or even vocal mixing. But their products are so easy to use and learn with that found myself a pro not very long after, ever since lve discovered them. My hat goes off to the entire Cymatics team because even if you can't afford to purchase packs, THEY ALSO OFFER FREE TO USE - FULLY LICENSED PACKS!! 
            I Love Cymatics And I Wouldn't Wanna Go Anywhere Else!!`,
                date: '01/07/2023',
                review_rating: bigFiveStar,
            },
            {
                name: 'e.a.',
                letters: 'e',
                heading: 'EDM packs review',
                review: `I’ve acquired a few edm packs and love them all, everything from cymatics is great since you always get the stems of the melodies and you can use them in many ways`,
                date: '01/07/2023',
                review_rating: bigFiveStar,
            },
        ];
        let htmlD = '';

        if (reviewData.length > 0) {
            for (let i = 0; i < reviewData.length; i++) {
                // let hideClass = i > 7 ? ' d-none' : '';
                htmlD += `<div class="jdgm-rev ">
            <div class="jdgm-rev__header">
              <div class="jdgm-rev__icon"> ${reviewData[i].letters} </div>
              <div class="jdgm-rev__location">
              <div class="jdgm-rev__br"> <span class="jdgm-rev__rating"  role="img">  
              <img alt="star-rating" src="${reviewData[i].review_rating}"  />     
              </span>
              <span class="jdgm-rev__timestamp" >${reviewData[i].date}</span></div>
              <div class="jdgm-rev__buyer-badge-wrapper">
                <span class="jdgm-rev__author">${reviewData[i].name}</span>
                </div>
                </div>
            </div>
            <div class="jdgm-rev__content">
              <p class="jdgm-rev__title">${reviewData[i].heading}</p>
              <div class="jdgm-rev__body">
                <p>${reviewData[i].review}</p>
              </div>
            </div>
          </div>
            `;
            }
        }

        return htmlD;
    }

    // Generic
    history.pushState = (function (f) {
        return function pushState() {
            let ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('pushstate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    })(history.pushState);
    history.replaceState = (function (f) {
        return function replaceState() {
            let ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('replacestate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    })(history.replaceState);

    window.addEventListener('popstate', function () {
        window.dispatchEvent(new Event('locationchange'));
    });
    window.addEventListener('locationchange', function () {
        url = location.href;
        urlCheck(url);
    });

    let url = location.href;
    urlCheck(url);
    function urlCheck(url) {
        let testURL = TEST_ENV.base_url;
        if (window.location.pathname.indexOf(TEST_ENV.test_url) > -1) {
            testURL = window.location.href;
        }
        if (isSameUrl(url, testURL, true)) {
            waitForElm(TEST_ENV.main_class).then(function () {
                loadTest();
            });
        } else {
            removeTest();
        }
    }

    function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
        currentUrl = currentUrl.includes("#") ?
            currentUrl.slice(0, currentUrl.indexOf("#")) :
            currentUrl;
        specifiedUrl = specifiedUrl.includes("#") ?
            specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
            specifiedUrl;
        if (!includeQueryParams)
            currentUrl = currentUrl.includes("?") ?
                currentUrl.slice(0, currentUrl.indexOf("?")) :
                currentUrl;
        if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
            return true;
        return false;
    }

    function removeTest() {
        document.body.classList.remove(TEST_ENV.class);
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
})();
