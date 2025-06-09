// document.addEventListener('DOMContentLoaded', function () {
const mainContent = document.querySelector('.blog-post-body');
const headings = mainContent ? mainContent.querySelectorAll('h2, h3') : [];

const tableOfContents = document.querySelector('.blog-table-container');


//check if there ia at least two headings in the main content
if (tableOfContents && headings.length > 1) {
    // Create the list container
    const tocList = document.createElement('ul');
    tocList.classList.add('toc-list');
    tableOfContents.querySelectorAll('li').forEach(li => tocList.appendChild(li));
    tableOfContents.innerHTML = ''; // Clear the original ul
    tableOfContents.appendChild(tocList);

    headings.forEach(function (heading, index) {
        //make sure that the heading is not empty
        if (heading.textContent.trim()) {
            const listItem = document.createElement('li');
            listItem.classList.add('toc-item');

            const link = document.createElement('a');
            // link.href = '#section-' + (index + 1);
            link.textContent = heading.textContent;
            listItem.appendChild(link);

            tocList.appendChild(listItem);

            heading.id = 'section-' + (index + 1);

            //instead of href method using scrollIntoView method to scroll to the section
            link.addEventListener('click', function (event) {
                event.preventDefault();
                heading.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        }
    });

    // Add CTA list item if it doesn't exist
    if (!tocList.querySelector('.toc-cta-item')) {
        const ctaListItem = document.createElement('li');
        ctaListItem.classList.add('toc-item', 'toc-cta-item');
        const ctaLink = document.createElement('a');
        ctaLink.href = 'https://www.gravitee.io/demo';
        ctaLink.textContent = 'Get a Demo';
        ctaListItem.appendChild(ctaLink);
        tocList.appendChild(ctaListItem);
    }

    //while scrolling, highlight the current section which is in viewport in the TOC by applying active class
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        headings.forEach(function (heading, index) {
            const sectionTop = heading.offsetTop;
            const sectionBottom = sectionTop + heading.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                tocList.querySelectorAll('.toc-item:not(toc-cta-item)').forEach(item => item.classList.remove('active'));
                tocList.querySelectorAll('.toc-item:not(toc-cta-item)')[index].classList.add('active');
            }
        });
    });

    //please check this position during page load and apply active class to the first section in the TOC
    const initialScrollPosition = window.scrollY + window.innerHeight / 2;
    headings.forEach(function (heading, index) {
        const sectionTop = heading.offsetTop;
        const sectionBottom = sectionTop + heading.offsetHeight;

        if (initialScrollPosition >= sectionTop && initialScrollPosition < sectionBottom) {
            tocList.querySelectorAll('.toc-item:not(toc-cta-item)').forEach(item => item.classList.remove('active'));
            tocList.querySelectorAll('.toc-item:not(toc-cta-item)')[index].classList.add('active');
        }
    });


    // Create the heading element
    const tocHeading = document.createElement('div');
    tocHeading.classList.add('toc-heading');
    tocHeading.textContent = 'Table of Contents';
    tableOfContents.insertAdjacentElement('afterbegin', tocHeading);


    // Toggle dropdown on heading click
    tocHeading.addEventListener('click', function () {
        tocList.classList.toggle('open');
        tocHeading.classList.toggle('open');
    });
} else {
    console.error("The .blog-table-of-contents element was not found in the HTML.");
    document.querySelector('.blog-post-container .blog-table-of-contents').style.display = 'none';
    document.querySelector('.blog-post-container .blog-post-body').classList.add('no-toc');
}

waitForElm('#hs-web-interactives-top-anchor .hs-cta-embed__loaded').then(() => {
    function getHeaderBottomOffset() {
        const header = document.querySelector('header.header');

        if (!header) {
            console.warn('Header element with class "header" not found.');
            return 0;
        }

        return header.getBoundingClientRect().bottom;
    }

    function updateAccordionPositions() {
        const navigationElements = document.querySelector('.blog-post-wrapper .blog-table-of-contents .blog-table-container');
        const spzShareElements = document.querySelector('.blog-post-wrapper .blog-sticky-nav .spz-sticky-share-buttons');
        const headerOffset = getHeaderBottomOffset() + 16;

        if (navigationElements) {
            navigationElements.style.top = headerOffset + 'px';
        }

        if (spzShareElements) {
            spzShareElements.style.top = headerOffset + 'px';
        }
    }

    waitForElm('.blog-post-wrapper .blog-table-of-contents .blog-table-container').then(() => {
        updateAccordionPositions();
        window.addEventListener('DOMContentLoaded', updateAccordionPositions);
        window.addEventListener('resize', updateAccordionPositions);
    });

    waitForElm('body:not(.hs-web-interactives-top-banner-open)').then(() => {
        setTimeout(() => {
            updateAccordionPositions();
        }, 50);
    });
});

waitForElm('body .st-sticky-share-buttons.st-has-labels').then(() => {
    if (document.querySelector('#main-content.body-container-wrapper .body-container--blog-post-new .blog-post-wrapper .blog-post-container .blog-sticky-nav')) {
        document.querySelector('#main-content.body-container-wrapper .body-container--blog-post-new .blog-post-wrapper .blog-post-container .blog-sticky-nav').style.display = 'block';
    }
});

//click event listener for the body
document.body.addEventListener('click', function (event) {
    const target = event.target;
    if (target.closest('.spz-sticky-share-buttons .spz-btn')) {
        event.preventDefault();
        let dataNetwork = target.closest('.spz-sticky-share-buttons .spz-btn').getAttribute('data-network');
        if (document.querySelector('.st-sticky-share-buttons .st-btn[data-network="' + dataNetwork + '"]')) {
            document.querySelector('.st-sticky-share-buttons .st-btn[data-network="' + dataNetwork + '"]').click();
        }
    }
});

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