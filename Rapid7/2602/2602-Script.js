const reviewSection = () => {
    return `<section class=review-section-2602>
                <div class=container>
                    <div class=item-wrapper>
                        <div class=comment-wrapper>
                            <img class="br-logo" alt="TechValidate" src="//res.cloudinary.com/spiralyze/image/upload/v1677576105/RAPID7/2602%20%7C%20Rapid7%20%7C%20ThreatCommand%20PDP%20%7C%20TechValidate%20Reviews/techvalidate-logo.svg">
                        </div>
                    </div>
                    <div class=item-wrapper>
                        <div class=comment-wrapper>
                            <p class=comment>
                            Threat Command is invaluable in identifying otherwise unknown internet security exposure and adversaries directly targeting our organization. Without Threat Command, my team would not be able to expand our cyber intel beyond the perimeter and immediately close critical security gaps.
                            <h5 class=profession>John Breen</h5>
                            <span class=profession-desc>Global Head of Cybersecurity, <br/>Flowserve Corporation</span>
                        </div>
                    </div>
                    <div class=item-wrapper>
                        <div class=comment-wrapper>
                            <p class=comment>
                            Threat Command by Rapid7 is a wonderful application because it offers threat intelligence faster than competitive solutions. 
                            <h5 class=profession>Alex Rodriguez</h5>
                            <span class=profession-desc>Cyber/Threat Intelligence Analyst, <br/>First American Financial Corporation</span>
                        </div>
                    </div>
                    <div class=item-wrapper>
                        <div class=comment-wrapper>
                            <p class=comment>
                            Threat Command significantly improves our visibility of external threats. 
                            <h5 class=profession>Alex Vavassori</h5>
                            <span class=profession-desc>SOC Manager, Sorint.Sec</span>
                        </div>
                    </div>
                </div>
            </section>`;
}

var intr = setInterval(function () {
    if (document.querySelector('body .productOverview') && !document.querySelector('body').classList.contains('spz-2602')) {
        clearInterval(intr);
        var cookieName = 'rapid7-validate_28022023';
        var cookieValue = '1';
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
        document.body.classList.add('spz-2602');
    }

    // Reviews Section
    if (document.querySelectorAll('.spz-2602 .productOverview > .grid-container').length > 0) {
        document.querySelector('.spz-2602 .productOverview  > .grid-container').insertAdjacentHTML('afterend', reviewSection());
    }

}, 100);