var intr = setInterval(function () {
    if (document.querySelectorAll('body .customerLogos').length > 0) {
        clearInterval(intr);
    }

    if (document.querySelectorAll('body .customerLogos').length == 0) {
        document.querySelector('body .productOverview ').insertAdjacentHTML('afterend', partnerLogo);
    }
}, 100);

const partnerLogo = () => {
    return `<section class="customerLogos whiteBackground pageBlock text-center" data-block-name="Logo Area Block">
    <div class="grid-container">
        <div class="grid-x grid-padding-x grid-padding-y">
            <div class="medium-10 medium-offset-1 cell">
                <div class="customerLogos__subheadline"><h3>Helping 10,700+ global companies take the gloves off</h3></div>
            </div>
        </div>
        <div class="grid-x grid-padding-x">
            <div class="medium-10 medium-offset-1 cell">

                <div class="customerLogos__grid">
                    <div class="customerLogos__logo">
                        <img alt="autodesk-horizontal-logo.png" loading="lazy" src="https://www.rapid7.com/globalassets/_images/customer-logos/autodesk-horizontal-logo.png">
                    </div>
                    <div class="customerLogos__logo">
                        <img alt="dominos-full-logo.png" loading="lazy" src="https://www.rapid7.com/globalassets/_images/customer-logos/dominos-full-logo.png">
                    </div>
                    <div class="customerLogos__logo">
                        <img alt="wyndham-worldwide-logo.png" loading="lazy" src="https://www.rapid7.com/globalassets/_images/customer-logos/wyndham-worldwide-logo.png">
                    </div>
                    <div class="customerLogos__logo">
                        <img alt="discovery-logo.png" loading="lazy" src="https://www.rapid7.com/globalassets/_images/customer-logos/discovery-logo.png">
                    </div>
                    <div class="customerLogos__logo">
                        <img alt="SWARCO_Logo.png" loading="lazy" src="https://www.rapid7.com/globalassets/_images/customer-logos/swarco_logo.png">
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>`;
}
