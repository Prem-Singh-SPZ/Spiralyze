var jQueryInterval = setInterval(function() {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQueryInterval);
        jQuery(document).ready(function() {
            if (!jQuery('body').hasClass('insight-pdp-410-review')) {
                var cookieName = 'insightvm_pdpreview_28032023';
                var cookieValue = '1';
                var myDate = new Date();
                myDate.setDate(myDate.getDate() + 30);
                document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
                jQuery('body').addClass('insight-pdp-410-review');
            }
          jQuery('.insight-pdp-410-review .productOverview').append(` <section class=review-section><div class=container><div class=item-wraper><div class=comment-wraper><img class="gartner" alt="Gartner peerinsights" src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Rapid7/509InsightIDRPDP-AddReviews/PeerInsights.webp"><div class=review-rate><span>4.4</span>/5</div><img class="star" alt="4.4 star"src=https://res.cloudinary.com/spiralyze/image/upload/v1679995426/RAPID7/410/Stars.svg><h5 class="rating-numbers">208 Ratings</h5></div></div><div class=item-wraper><div class=comment-wraper><div class=review-title>A Great Product For Vulnerability Insight And Management</div><p class=comment>InsightVM really gave us a good insight into the security status of our workstations and servers. Both on-premise and in the field. It made it really easy to prioritize and address vulnerabilities.<h5 class=profession>Infrastructure Manager</h5></div></div><div class=item-wraper><div class=comment-wraper><div class=review-title>InsightVM Is Intuitive And Efficient</div><p class=comment>The combination of network scanning and agent-based assessment was invaluable, particularly during the pandemic where we rapidly adapted to the requirements posed by remote work.<h5 class=profession>Ethical Hacking Manager</h5></div></div><div class=item-wraper><div class=comment-wraper><div class=review-title>Easy To Use Vulnerability Management Tool With Great Reporting Capabilities</div><p class=comment>Easiest to configure and use vulnerability management tool on the market. It poses a big variety of the scanning templates which allows different types of scans from initial scans of the systems before they go live in production to the continual scans of sensitive systems.<h5 class=profession>IT Security Specialist</h5></div></div></div></section>`);
       });
    }
});