import { ctaButtonsSection } from './components/cta-button/cta-buttons';
import { reviewSection } from './components/review-section/review-sec';

var intr = setInterval(function () {
    if (document.querySelector('body .productOverview') && !document.querySelector('body').classList.contains('spz-3301')) {
        clearInterval(intr);
        var cookieName = 'rapid7-validate_02022023';
        var cookieValue = '1';
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
        document.body.classList.add('spz-3301')
    }

    // Reviews Section
    if (document.querySelectorAll('.spz-3301 .productOverview').length > 0) {
        document.querySelector('.spz-3301 .productOverview').insertAdjacentHTML('beforeend', reviewSection());
    }

    const ctaSectionHtml = ctaButtonsSection();
    // CTA Section
    if (document.querySelectorAll('.spz-3301 .pageContent > section.customerLogos').length > 0) {
        document.querySelector('.spz-3301 .pageContent > section.customerLogos').insertAdjacentHTML('beforebegin', ctaSectionHtml);
    }

    // 3 Reasons Section
    if (document.querySelectorAll('.spz-3301 .pageContent > .richTextBlockWrap').length > 0) {
        document.querySelector('.spz-3301 .pageContent > .richTextBlockWrap').classList.add('reason-trust-section');

        document.querySelector('.spz-3301 .pageContent > .richTextBlockWrap .medium-10.medium-offset-1.large-8.large-offset-2.cell.pageBlock__content').classList.remove('medium-offset-1');
        document.querySelector('.spz-3301 .pageContent > .richTextBlockWrap .medium-10.large-8.large-offset-2.cell.pageBlock__content').classList.remove('large-offset-2');

        if (document.querySelector('.spz-3301 .reason-trust-section .grid-x.wrapper ol')) {
            document.querySelector('.spz-3301 .reason-trust-section .grid-x.wrapper ol').insertAdjacentHTML('afterend', ctaSectionHtml);
        }
    }
}, 100);