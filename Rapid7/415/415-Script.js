

var jQueryInterval = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        document.body.classList.add('spz-415');

        if (document.querySelectorAll('body .multi-feature-card-block__carousel').length > 0) {
            clearInterval(jQueryInterval);

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
                <div class="multi-feature-card-block__carousel-slider" data-slider-id="mfcb-slider0">
                        <a href="/customers/damac-properties/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/damac-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/damac-properties/" data-slick-index="-3" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>DAMAC Properties</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Real Estate</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/new-mexico-department-of-game-and-fish/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/new-mexico-department-of-game-and-fish-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/new-mexico-department-of-game-and-fish/" data-slick-index="-2" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>New Mexico Department of Game and Fish</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Government</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/dragonfly-technologies/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/dragonfly-technologies-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/dragonfly-technologies/" data-slick-index="-1" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Dragonfly Technologies</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Technology</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/winthrop-weinstine/" class="card__standard w-image  slick-current s " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/winthrop-and-weinstine-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/winthrop-weinstine/" data-slick-index="0" aria-hidden="false" tabindex="0">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Winthrop &amp; Weinstine</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Services</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/hypertherm/" class="card__standard w-image  s" data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/hypertherm-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/hypertherm/" data-slick-index="1" aria-hidden="false" tabindex="0">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Hypertherm</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Manufacturing</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/university-of-technology-sydney/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/university-of-technology-sydney-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/university-of-technology-sydney/" data-slick-index="2" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>University of Technology Sydney</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Education</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/zoopla/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/zoopla-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/zoopla/" data-slick-index="3" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Zoopla</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Real Estate</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/manchester-metropolitan-university/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/manchester-metropolitan-university-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/manchester-metropolitan-university/" data-slick-index="4" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Manchester Metropolitan University</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Education</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/barton-associates/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/barton-associates-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/barton-associates/" data-slick-index="5" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Barton Associates</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Healthcare</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/domestic-general/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/dg-bg.png');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/domestic-general/" data-slick-index="6" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Domestic &amp; General</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Insurance</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/pearl-data-direct/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/pearl-data-direct-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/pearl-data-direct/" data-slick-index="7" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Pearl Data Direct</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Finance</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/clatterbridge-cancer-center/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/clatterbridge-cancer-center-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/clatterbridge-cancer-center/" data-slick-index="8" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Clatterbridge Cancer Center</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Healthcare</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/amn-healthcare-partners/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/amn-healthcare-customer-story-image.png');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/amn-healthcare-partners/" data-slick-index="9" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>AMN Healthcare Partners</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Healthcare</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/visier/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/visier-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/visier/" data-slick-index="10" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Visier</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Technology</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/security-finance/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/security-finance-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/security-finance/" data-slick-index="11" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Security Finance</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Finance</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/discovery-inc/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/discovery-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/discovery-inc/" data-slick-index="12" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Discovery Inc.</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Communications &amp; Media</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/acme-brick/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/acme_brick_spring.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/acme-brick/" data-slick-index="13" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Acme Brick</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Manufacturing</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/qlik/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/qlik-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/qlik/" data-slick-index="14" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Qlik</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Technology</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/rackspace/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/rackspace-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/rackspace/" data-slick-index="15" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Rackspace</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Technology</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/elara-caring/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/elara-caring-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/elara-caring/" data-slick-index="16" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Elara Caring</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Healthcare</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/damac-properties/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/damac-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/damac-properties/" data-slick-index="17" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>DAMAC Properties</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Real Estate</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/new-mexico-department-of-game-and-fish/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/new-mexico-department-of-game-and-fish-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/new-mexico-department-of-game-and-fish/" data-slick-index="18" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>New Mexico Department of Game and Fish</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Government</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/dragonfly-technologies/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/dragonfly-technologies-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/dragonfly-technologies/" data-slick-index="19" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Dragonfly Technologies</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Technology</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/winthrop-weinstine/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/winthrop-and-weinstine-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/winthrop-weinstine/" data-slick-index="20" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Winthrop &amp; Weinstine</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Services</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/hypertherm/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/hypertherm-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/hypertherm/" data-slick-index="21" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Hypertherm</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Manufacturing</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/university-of-technology-sydney/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/university-of-technology-sydney-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/university-of-technology-sydney/" data-slick-index="22" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>University of Technology Sydney</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Education</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/zoopla/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/zoopla-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/zoopla/" data-slick-index="23" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Zoopla</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Real Estate</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/manchester-metropolitan-university/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/manchester-metropolitan-university-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/manchester-metropolitan-university/" data-slick-index="24" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Manchester Metropolitan University</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Education</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/barton-associates/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/barton-associates-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/barton-associates/" data-slick-index="25" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Barton Associates</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Healthcare</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/domestic-general/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/dg-bg.png');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/domestic-general/" data-slick-index="26" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Domestic &amp; General</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Insurance</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/pearl-data-direct/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/pearl-data-direct-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/pearl-data-direct/" data-slick-index="27" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Pearl Data Direct</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Finance</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/clatterbridge-cancer-center/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/clatterbridge-cancer-center-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/clatterbridge-cancer-center/" data-slick-index="28" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Clatterbridge Cancer Center</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Healthcare</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/amn-healthcare-partners/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/amn-healthcare-customer-story-image.png');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/amn-healthcare-partners/" data-slick-index="29" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>AMN Healthcare Partners</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Healthcare</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/visier/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/visier-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/visier/" data-slick-index="30" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Visier</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Technology</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/security-finance/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/security-finance-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/security-finance/" data-slick-index="31" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Security Finance</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Finance</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/discovery-inc/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/discovery-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/discovery-inc/" data-slick-index="32" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Discovery Inc.</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Communications &amp; Media</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/acme-brick/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/acme_brick_spring.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/acme-brick/" data-slick-index="33" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Acme Brick</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Manufacturing</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/qlik/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/qlik-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/qlik/" data-slick-index="34" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Qlik</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Technology</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/rackspace/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/rackspace-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/rackspace/" data-slick-index="35" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Rackspace</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Technology</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/elara-caring/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/elara-caring-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/elara-caring/" data-slick-index="36" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Elara Caring</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Healthcare</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/damac-properties/" class="card__standard w-image" data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/damac-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/damac-properties/" data-slick-index="37" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>DAMAC Properties</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Real Estate</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/new-mexico-department-of-game-and-fish/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/new-mexico-department-of-game-and-fish-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/new-mexico-department-of-game-and-fish/" data-slick-index="38" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>New Mexico Department of Game and Fish</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Government</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a><a href="/customers/dragonfly-technologies/" class="card__standard w-image " data-card-height="large" style="background-image: url('https://www.rapid7.com/globalassets/_images/customers/dragonfly-technologies-bg.jpg');" data-element-block="Multi-Feature Card Block" data-element-location="body" data-element-label="/customers/dragonfly-technologies/" data-slick-index="39" id="" aria-hidden="true" tabindex="-1">
                            <div class="inner-content">
                                <div class="inner-content__txt">
                                    <h4>Dragonfly Technologies</h4>
                                    <span class="card-separator"></span>
                                    <div class="subtext">Technology</div>
                                </div>
                                    <span class="btn-tertiary button smBtn">Read Story</span>
                            </div>
                        </a>     
                </div>
            </div>
        </div>
        <div class="grid-x grid-padding-x grid-padding-y text-center block-cta">

            <div class="cell small-12">
            </div>
        </div>
    </div>
</section>`
