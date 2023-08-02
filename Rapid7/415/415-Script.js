

var jQueryInterval = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        document.body.classList.add('spz-415');

        if (document.querySelector('.multi-feature-card-block__carousel-slider.slick-initialized')) {
            clearInterval(jQueryInterval);
            document.querySelector('.multi-feature-card-block__carousel').style.opacity = 1;
        }

        if (document.querySelectorAll('body .multi-feature-card-block__carousel').length > 0) {
            jQuery((function () { $(".multi-feature-card-block__carousel-slider").each((function (r) { $(this).attr("data-slider-id", "mfcb-slider" + r), jQuery(".multi-feature-card-block__carousel-slider").slick({ dots: !1, arrows: !0, prevArrow: '<div class="r7-icon r7-icon-arrow-chevron-left"></div>', nextArrow: '<div class="r7-icon r7-icon-arrow-chevron-right"></div>', infinite: !0, speed: 300, centerMode: !0, centerPadding: "50px", variableWidth: !0, slidesToShow: 2, slidesToScroll: 1, responsive: [{ breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: !1, swipe: !0, draggable: !0 } }] }) })) }));
        }

        if (document.querySelectorAll('body .multi-feature-card-block__carousel').length == 0) {
            document.querySelector('body .integrations-block ').insertAdjacentHTML('beforebegin', caseStudies);
        }
    }
}, 100);

const caseStudies = `<section class="multi-feature-card-block__carousel" data-block-name="Multi-Feature Card Block">
<div class="grid-container">
    <div class="grid-x grid-padding-x grid-padding-y text-center">
        <div class="small-12 medium-10 medium-offset-1 cell">
            <h2>Featured Customer Stories</h2>
        </div>
    </div>
    <div class="grid-x grid-padding-x">
        <div class="small-12 medium-10 medium-offset-1 cell">
            <div class="multi-feature-card-block__carousel-slider" data-slider-id="mfcb-slider0"> <a href="/customers/acme-brick/" class="card__standard w-image" data-card-height="large" style="
              background-image: url('https://www.rapid7.com/globalassets/_images/customers/acme_brick_spring.jpg');
            " data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/acme-brick/">
                    <div class="inner-content">
                        <div class="inner-content__txt">
                            <h4>Acme Brick</h4> <span class="card-separator"></span>
                            <div class="subtext">Manufacturing</div>
                        </div> <span class="btn-tertiary button smBtn">Read Story</span>
                    </div>
                </a> <a class="card__standard w-image" data-card-height="large" href="/customers/alpina-group/" style="
              background-image: url('https://www.rapid7.com/globalassets/_images/customers/voogd-and-voogd-verzekeringen-bg.jpg');
            " data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/alpina-group/">
                    <div class="inner-content">
                        <div class="inner-content__txt">
                            <h4>Alpina Group</h4> <span class="card-separator"></span>
                            <div class="subtext">Technology</div>
                        </div> <span class="btn-tertiary button smBtn">Read Story</span>
                    </div>
                </a> <a class="card__standard w-image" data-card-height="large" href="/customers/amedisys/" style="
              background-image: url('https://www.rapid7.com/globalassets/_images/customers/amedisys-bg.jpg');
            " data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/amedisys/">
                    <div class="inner-content">
                        <div class="inner-content__txt">
                            <h4>Amedisys</h4> <span class="card-separator"></span>
                            <div class="subtext">Healthcare</div>
                        </div> <span class="btn-tertiary button smBtn">Read Story</span>
                    </div>
                </a> <a class="card__standard w-image" data-card-height="large" href="/customers/amn-healthcare-partners/" style="
              background-image: url('https://www.rapid7.com/globalassets/_images/customers/amn-healthcare-customer-story-image.png');
            " data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/amn-healthcare-partners/">
                    <div class="inner-content">
                        <div class="inner-content__txt">
                            <h4>AMN Healthcare Partners</h4> <span class="card-separator"></span>
                            <div class="subtext">Healthcare</div>
                        </div> <span class="btn-tertiary button smBtn">Read Story</span>
                    </div>
                </a> <a class="card__standard w-image" data-card-height="large" href="/customers/auden/" style="
              background-image: url('https://www.rapid7.com/globalassets/_images/customers/auden-bg.jpg');
            " data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/auden/">
                    <div class="inner-content">
                        <div class="inner-content__txt">
                            <h4>Auden</h4> <span class="card-separator"></span>
                            <div class="subtext">Finance</div>
                        </div> <span class="btn-tertiary button smBtn">Read Story</span>
                    </div>
                </a> <a class="card__standard w-image" data-card-height="large" href="/customers/bioventus/" style="
              background-image: url('https://www.rapid7.com/globalassets/_images/customers/bioventus-bg.jpg');
            " data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/bioventus/">
                    <div class="inner-content">
                        <div class="inner-content__txt">
                            <h4>Bioventus</h4> <span class="card-separator"></span>
                            <div class="subtext">Healthcare</div>
                        </div> <span class="btn-tertiary button smBtn">Read Story</span>
                    </div>
                </a> </div>
        </div>
    </div>
    <div class="grid-x grid-padding-x grid-padding-y text-center block-cta">
        <div class="cell small-12"> </div>
    </div>
</div>
</section>`
