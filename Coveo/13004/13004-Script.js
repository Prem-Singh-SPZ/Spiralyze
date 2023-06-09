window.setMobieMenu = function (mutation) {
    //function setMobieMenu(mutation){			
    if (mutation.target.classList.contains('open')) {
        mutation.target.parentNode.classList.add("parent-open");
        if (mutation.target.parentNode.parentNode.parentNode.classList.contains('main-navigation-mobile')) {
            mutation.target.parentNode.parentNode.parentNode.classList.add('open-submenu')
        }
        // console.log(mutation.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
        if (mutation.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('header-content')) {
            mutation.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('open-submenu')
        }
        let htm = mutation.target.querySelector('.panel-top-wrapper .panel-title span')
        let htmtarget = mutation.target.querySelector('.panel-content .column:first-child')
        let openPanel = mutation.target.querySelector('.panel');

        if (htm.innerText == 'Platform') {
            htm.innerText = 'Products';
        }

        if (htm.innerText.trim() == 'Coveo Relevance CloudTM') {
            let subMenu = mutation.target.querySelector('.back span')
            subMenu.innerText = 'Products';
            openPanel.classList.add('parent-ecom')
            openPanel.classList.add('parent-relevance')
            mutation.target.parentNode.parentNode.parentNode.classList.add('open-innersub')
            let ecomHtml = `
					<div class="ecom-content right-panel-content relevance-content">								
						<div class="column-cta-container">
							<div class="cta-button">
								<a href="/en/relevance" class="button icon-position-undefined button simple small">
									<span>Why relevance wins</span>
								</a>
							</div>
							<div class="cta-button">
								<a href="/en/platform/whats-new" class="button icon-position-undefined button simple small">
									<span>What’s new</span>
								</a>
							</div>
						</div>
					</div>
				`;

            if (!jQuery('.relevance-content').length) {
                htmtarget.insertAdjacentHTML('beforeend', ecomHtml);
            }
        }

        if (htm.innerText == 'Ecommerce') {
            let subMenu = mutation.target.querySelector('.back span')
            subMenu.innerText = 'Products';
            openPanel.classList.add('parent-ecom')
            openPanel.classList.add('parent-ecommerce')
            mutation.target.parentNode.parentNode.parentNode.classList.add('open-innersub')
            let ecomHtml = `
					<div class="ecom-content right-panel-content comer-content">							
						<div class="right-content-row">
							<div class="column-panel cc-white">
								<a href="/en/solutions/ecommerce-search-platform" class="panel-tab">
									<div class="panel-tab-content">
										<div class="column-title">B2C</div> 											
									</div>
								</a>
							</div>
							<div class="column-panel cc-white">
								<a href="/en/solutions/ecommerce-search-platform" class="panel-tab">
									<div class="panel-tab-content">
										<div class="column-title">B2B</div> 
									</div>
								</a>
							</div>
						</div>
						<div class="column-cta-container">
							<div class="cta-button">
								<a href="/en/relevance" class="button icon-position-undefined button simple small">
									<span>Why relevance wins</span>
								</a>
							</div>
							<div class="cta-button">
								<a href="/en/platform/whats-new" class="button icon-position-undefined button simple small">
									<span>What’s new</span>
								</a>
							</div>
						</div>
					</div>
				`;


            if (!jQuery('.comer-content').length) {
                htmtarget.insertAdjacentHTML('beforebegin', ecomHtml);
            }
        }

        if (htm.innerText == 'Website') {
            let subMenu = mutation.target.querySelector('.back span')
            subMenu.innerText = 'Products';
            openPanel.classList.add('parent-ecom')
            openPanel.classList.add('parent-website')
            mutation.target.parentNode.parentNode.parentNode.classList.add('open-innersub')
            let ecomHtml = `
					<div class="ecom-content right-panel-content website-content">							
						<div class="right-content-row">
							<div class="column-panel cc-white">
								<a href="https://www.coveo.com/en/solutions/website-search/partner-portal" class="panel-tab">
									<div class="panel-tab-content">
										<div class="column-title">Partner Portals</div> 												
									</div>
								</a>
							</div>
							<div class="column-panel cc-white">
								<a href="https://www.coveo.com/en/solutions/website-search/dealer-portal" class="panel-tab">
									<div class="panel-tab-content">
										<div class="column-title">Dealer Portals</div> 												
									</div>
								</a>
							</div>
						</div>
						<div class="column-cta-container">
							<div class="cta-button">
								<a href="/en/relevance" class="button icon-position-undefined button simple small">
									<span>Why relevance wins</span>
								</a>
							</div>
							<div class="cta-button">
								<a href="/en/platform/whats-new" class="button icon-position-undefined button simple small">
									<span>What’s new</span>
								</a>
							</div>
						</div>
					</div>
				`;

            if (!jQuery('.website-content').length) {
                htmtarget.insertAdjacentHTML('beforebegin', ecomHtml);
            }
        }

        if (htm.innerText == 'Workplace') {
            let subMenu = mutation.target.querySelector('.back span')
            subMenu.innerText = 'Products';
            openPanel.classList.add('parent-ecom')
            openPanel.classList.add('parent-workplace')
            mutation.target.parentNode.parentNode.parentNode.classList.add('open-innersub')
            let ecomHtml = `
					<div class="ecom-content workplace-content right-panel-content">							
						<div class="right-content-row">
							<div class="column-panel cc-white">
								<a href="https://www.coveo.com/en/solutions/digital-workplace/employee-self-service" class="panel-tab">
									<div class="panel-tab-content">
										<div class="column-title">Employee Portals</div> 
									</div>
								</a>
							</div>
							<div class="column-panel cc-white">
								<a href="https://www.coveo.com/en/solutions/digital-workplace/intranet-knowledge-management" class="panel-tab">
									<div class="panel-tab-content">
										<div class="column-title">Intranet & Knowledge Management</div> 
									</div>
								</a>
							</div>
						</div>
						<div class="column-cta-container">
							<div class="cta-button">
								<a href="/en/relevance" class="button icon-position-undefined button simple small">
									<span>Why relevance wins</span>
								</a>
							</div>
							<div class="cta-button">
								<a href="/en/platform/whats-new" class="button icon-position-undefined button simple small">
									<span>What’s new</span>
								</a>
							</div>
						</div>
					</div>
				`;

            if (!jQuery('.workplace-content').length) {
                htmtarget.insertAdjacentHTML('beforebegin', ecomHtml);
            }
        }

        if (htm.innerText == 'Service & Support') {
            let subMenu = mutation.target.querySelector('.back span')
            subMenu.innerText = 'Products';
            openPanel.classList.add('parent-ecom')
            openPanel.classList.add('parent-service')
            mutation.target.parentNode.parentNode.parentNode.classList.add('open-innersub')
            let ecomHtml = `
						<div class="support-content ecom-content right-panel-content">									
							<div class="right-content-row">
								<div class="column-panel cc-white">
									<a href="https://www.coveo.com/en/solutions/ai-customer-service/customer-self-service" class="panel-tab">
										<div class="panel-tab-content">
											<div class="column-title">Customer Self-Service</div> 
										</div>
									</a>
								</div>
								<div class="column-panel cc-white">
									<a href="https://www.coveo.com/en/platform/contextual-help" class="panel-tab">
										<div class="panel-tab-content">
											<div class="column-title">In-product Support</div> 													
										</div>
									</a>
								</div>
								<div class="column-panel cc-white">
									<a href="https://www.coveo.com/en/solutions/ai-customer-service/call-center-support" class="panel-tab">
										<div class="panel-tab-content">
											<div class="column-title">Call Center Support </div> 
										</div>
									</a>
								</div>
								<div class="column-panel cc-white">
									<a href="https://www.coveo.com/en/solutions/ai-customer-service/ai-chatbot" class="panel-tab">
										<div class="panel-tab-content">
											<div class="column-title">Chatbot AI</div>													
										</div>
									</a>
								</div>
								<div class="column-panel cc-white">
									<a href="https://www.coveo.com/en/solutions/ai-customer-service/customer-communities" class="panel-tab">
										<div class="panel-tab-content">
											<div class="column-title">Communities</div> 
										</div>
									</a>
								</div>
							</div>
							<div class="column-cta-container">
								<div class="cta-button">
									<a href="/en/relevance" class="button icon-position-undefined button simple small">
										<span>Why relevance wins</span>
									</a>
								</div>
								<div class="cta-button">
									<a href="/en/platform/whats-new" class="button icon-position-undefined button simple small">
										<span>What’s new</span>
									</a>
								</div>
							</div>
						</div>
					`;

            if (!jQuery('.support-content').length) {
                htmtarget.insertAdjacentHTML('beforebegin', ecomHtml);
            }
        }

        if (htm.innerText == 'Industries') {
            openPanel.classList.add('parent-industries')
        }

        if (htm.innerText == 'Partners') {
            htm.innerText = 'Integrations';
            let inteHtml = `
					<div class="container direction-row integration-row">
						<div class="column cc-white fw-75 logo-col">
							<div class="integration-wrapper">
								<div class="integ-col">
									<a href="https://www.coveo.com/en/integrations/salesforce-search">
										<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936632/Coveo/13003/assets/Salesforce-logo.svg" alt="Salesforce Logo" />
									</a>
								</div>
								<div class="integ-col">
									<a href="https://www.coveo.com/en/integrations/zendesk-search">	
										<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936642/Coveo/13003/assets/Zendesk-logo.svg" alt="Zendesk Logo" />
									</a>
								</div>
								<div class="integ-col">
									<a href="https://www.coveo.com/en/integrations/servicenow-ai-search">
										<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936632/Coveo/13003/assets/ServiceNow-logo.svg" alt="ServiceNow Logo" />
									</a>
								</div>
								<div class="integ-col">
									<a href="https://www.coveo.com/en/integrations/sitecore-search">
										<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936642/Coveo/13003/assets/Sitecore-logo.svg" alt="Sitecore Logo" />
									</a>
								</div>
								<div class="integ-col">
									<a href="https://www.coveo.com/en/integrations/sap-commerce-search">
										<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936632/Coveo/13003/assets/SAP-logo.svg" alt="SAP Logo" />
									</a>
								</div>
								<div class="integ-col">
									<a href="https://www.coveo.com/en/solutions/digital-workplace/slack-application">
										<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936642/Coveo/13003/assets/Slack-logo.svg" alt="Slack Logo" />
									</a>
								</div>
								<div class="integ-col">
									<a href="https://www.coveo.com/en/integrations/appdirect-marketplace-search">
										<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936620/Coveo/13003/assets/AppDirect-logo.svg" alt="AppDirect Logo" />
									</a>
								</div>
								<div class="integ-col">
									<a href="https://www.coveo.com/en/platform/contextual-help">
										<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936632/Coveo/13003/assets/IPX-logo.svg" alt="IPX Logo" />
									</a>
								</div>
								<div class="integ-col">
									<a href="https://www.coveo.com/en/integrations/adobe-search">
										<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936621/Coveo/13003/assets/Adobe-logo.svg" alt="Adobe Logo" />
									</a>
								</div>																																								
							</div>
						</div>  
						<div class="column cc-white fw-25 right-col">
							<div class="all-integ-col">
								<a href="https://www.coveo.com/en/integrations#t=integrations-search&sort=%40sortorder%20ascending&numberOfResults=15">
									<img src="//res.cloudinary.com/spiralyze/image/upload/v1682937482/Coveo/13003/assets/See-all-integrations.svg" alt="See all integrations" />
									<span class="all-integ-text">See all integrations</span>
								</a>
							</div>
						</div>  
					</div>`;
            let inteFooter = `<div class="submenu-footer">
						<div class="container">
							<ul>
								<li class="submenu-footer-link-item">
									<a href="/en/contact" class="menu-link">
										<div class="item-content">
											<span class="item-text is-bold">Talk to Sales</span>
										</div>
									</a>
								</li>
								<li class="submenu-footer-link-item">
									<a href="https://roi-calculator.coveo.com/" class="menu-link">
										<div class="item-content">
											<span class="item-text is-bold">Coveo ROI calculator</span>
										</div>
									</a>
								</li>
							</ul>
						</div>
						</div>`;
            let integraTarget = mutation.target.querySelector('.panel-content')
            if (!jQuery('.integration-row').length) {
                integraTarget.insertAdjacentHTML('beforebegin', inteHtml);
                integraTarget.insertAdjacentHTML('afterend', inteFooter);
            }
        }

        if (htm.innerText == 'Developers') {
            let devHtml = `
						<div class="dev-submenu">
							<div class="dev-submenu-panel">
								<div class="dev-sub-title"><a href="https://www.coveo.com/en/developers">Developers</a></div>
								<div class="dev-sub-item"><a href="https://docs.coveo.com/en/0/coveo-documentation">Documentation</a></div>
								<div class="dev-sub-item"><a href="https://github.com/coveo">GitHub</a></div>
								<div class="dev-sub-item"><a href="https://connect.coveo.com/s/">Coveo Connect Cummunity</a></div>
								<div class="dev-sub-item"><a href="#">AI Research</a></div>
								<div class="dev-sub-item"><a href="https://www.coveo.com/en/developers/labs">Coveo Labs</a></div>
							</div>
							<div class="dev-sub-footer"><a href="/en/free-trial">Start a free trial</a></div>
						</div>
					`;

            let developTarget = mutation.target.querySelector('.panel-content');
            if (!jQuery('#main-navigation-mobile .dev-submenu-panel').length) {

                developTarget.insertAdjacentHTML('beforebegin', devHtml);
            }

            let inteFooter = `<div class="submenu-footer develop-footer">
							<div class="container">
								<ul>
									<li class="submenu-footer-link-item">
										<a href="/en/contact" class="menu-link">
											<div class="item-content">
												<span class="item-text is-bold">Talk to Sales</span>
											</div>
										</a>
									</li>
									<li class="submenu-footer-link-item">
										<a href="https://roi-calculator.coveo.com/" class="menu-link">
											<div class="item-content">
												<span class="item-text is-bold">Coveo ROI calculator</span>
											</div>
										</a>
									</li>
								</ul>
							</div>
							</div>`;
            let integraTarget = mutation.target.querySelector('.panel-content')
            if (!jQuery('.develop-footer').length) {
                integraTarget.insertAdjacentHTML('afterend', inteFooter);
            }
        }

        if (htm.innerText == 'Customers') {
            openPanel.classList.add('parent-customers')
            let custoHtml = mutation.target.querySelector('.panel-content .column-container')
            custoHtml.classList.add('customer-content');
            let custoText = mutation.target.querySelector('.panel-content .column-container .column .column-container > div .item-text')
            if (custoText.innerText == 'Featured Customers') {
                custoText.innerText = 'Our Customers';
            }
        }

        if (htm.innerText == 'Resources') {
            openPanel.classList.add('parent-resources')
            let allResouce = mutation.target.querySelectorAll('.panel .panel-content .column-container .column');
            let allBtn = mutation.target.querySelector('.panel .panel-content .column-container .column .column-cta-container');
            let resourceTarget = mutation.target.querySelector('.panel-content .column-container');
            var inspireTitle = `<div class="title-icon-container"><span class="column-title font-gray">Inspire</span></div>`;
            var learnTitle = `<div class="title-icon-container"><span class="column-title font-gray">Learn</span></div>`;

            if (!resourceTarget.classList.contains('resouces-added')) {
                allResouce.forEach((item, index) => {
                    let childItem = item.querySelectorAll('.column-container > div');
                    childItem.forEach((itm, ind) => {
                        if (index == 0 && ind == 0) {
                            resourceTarget.insertAdjacentHTML('afterbegin', learnTitle);
                            resourceTarget.insertAdjacentHTML('afterbegin', inspireTitle);
                        }
                        let resourceItem = itm.cloneNode(true);
                        resourceTarget.insertBefore(resourceItem, null);
                    })
                    item.remove()
                })
                resourceTarget.insertBefore(allBtn, null);
                resourceTarget.classList.add('resouces-added')
            }
        }

        if (htm.innerText == 'Pricing') {
            let priciHtml = mutation.target.querySelectorAll('.panel .panel-content .column:nth-child(2) .column-container > div')
            priciHtml.forEach((item) => {
                if (item.querySelector('.item-text').innerText == 'Salesforce Plans') {
                    item.classList.add('salesforce-menu')
                    item.querySelector('.item-text').innerText = 'Salesforce Pricing';
                }
                if (item.querySelector('.item-text').innerText == 'Sitecore Plans') {
                    item.classList.add('sitecore-menu')
                    item.querySelector('.item-text').innerText = 'Sitecore Pricing';
                }
            })

        }


        // console.log('text 1220', htm.innerText);
    } else {
        if (mutation.target.parentNode.classList.contains("parent-open")) {
            mutation.target.parentNode.classList.remove("parent-open")
        }
    }
}


window.setDeskopMenu = function (mutation, activeBtn) {
    // console.log('setDeskopMenu calling')
    jQuery('.parent-menu-link.open').find('.open-menu').removeClass('open-menu');
    jQuery('.parent-menu-link.open').removeClass('open');

    if (activeBtn.innerText == 'Products') {

        let addIntigration = setInterval(() => {
            clearInterval(addIntigration)

            let element = document.querySelector('.spz_nav_13003 .parent-menu-link .submenu .direction-row > .panel-tabs > .column-panel:nth-child(3)');

            jQuery('.spz_nav_13003 .parent-menu-link .submenu .direction-row > .panel-tabs > .column-panel').each(function () {
                let titleName = jQuery(this).find('.panel-tab-content .column-title').text();
                if (titleName == 'Coveo Relevance CloudTM') {
                    jQuery(this).find('img').attr('alt', 'Coveo Relevance CloudTM')
                }
                if (titleName == 'Ecommerce') {
                    jQuery(this).find('img').attr('alt', 'Ecommerce')
                }
                if (titleName == 'Service & Support') {
                    jQuery(this).find('img').attr('alt', 'Service & Support')
                }
                if (titleName == 'Website') {
                    jQuery(this).find('img').attr('alt', 'Website')
                }
                if (titleName == 'Workplace') {
                    jQuery(this).find('img').attr('alt', 'Workplace')
                }
            });

            var event = new MouseEvent('mouseover', {
                'view': window,
                'bubbles': true,
                'cancelable': true
            });

            element.dispatchEvent(event);

            let latestHtml = `<div class="column cc-gray fw-40 resource-column-wrapper">
                    <div class="title-icon-container"><span class="column-title font-gray">Trending Now</span></div>
                    <div am-resource-presentation="small-cards" am-resource-banner="loaded" am-display="thumbnails">
                        <div class="resources-content">
                            <div class="resource-banner-cards">
                                <div class="resources-card component-is-mounted">
                                    <a href="/en/resources/webinars/relevance-360-march-2023" target="_self" class="resources-card-link"></a> 
                                    <div class="resources-card-body"><div class="resources-card-content"><div class="resources-card-bg">
                                        <img src="https://cdn.coveo.com/image/authenticated/s--lz2RUXYk--/c_scale,d_placeholder.png,w_670/f_auto/v1/web/web01/en/library/images/pages/homepage/news_banner/r360-q1-20233" title="Profitize Every Experience with AI" alt="Profitize Every Experience with AI">
                                    </div> 
                                    <div class="resources-card-content-body">
                                        <div class="resources-card-eyebrow">
                                            <div class="resource-type-info">
                                                <span>On-Demand Webinar</span>
                                            </div>
                                        </div> 
                                        <a href="/en/resources/webinars/relevance-360-march-2023" target="_self" class="resources-card-title">Profitize Every Experience with AI</a>
                                    </div>
                                </div>										
                            </div>
                        </div>
                    </div>
                    <div class="column-cta-container"><div class="cta-button"><a href="/en/relevance" class="button icon-position-undefined button simple small"><!----> <span>Why relevance wins</span></a></div><div class="cta-button"><a href="/en/platform/whats-new" class="button icon-position-undefined button simple small"><!----> <span>What’s new</span></a></div></div>
                </div>`;
            if (!jQuery('.resource-column-wrapper').length) {
                jQuery('.submenu .integrations-parent-column').after(latestHtml);
            }


        }, 100);
    }

    // Pricing Menu
    // console.log(activeBtn.innerText)
    if (activeBtn.innerText.trim() == 'Pricing') {
        let prcTrialBtn = `<div class="pricing-sub-footer"><a href="/en/free-trial">Start a free trial</a></div>`;
        let pricingElem = mutation.target.querySelector('.submenu-footer');
        if (!jQuery('.pricing-sub-footer').length) {
            pricingElem.insertAdjacentHTML('afterend', prcTrialBtn);
        }
        let menuLink = mutation.target.querySelectorAll('.menu-link');

        menuLink.forEach(elem => {
            let childElem = elem.querySelector('.item-text');
            if (elem.innerText.trim() == 'All Plans & Pricing') {
                elem.classList.add('all-pricing');
            }
            if (elem.innerText.trim() == 'Salesforce Plans') {
                childElem.innerText = 'Salesforce Pricing';
                elem.classList.add('salesforce-menu')
            }
            if (elem.innerText.trim() == 'Sitecore Plans') {
                childElem.innerText = 'Sitecore Pricing';
                elem.classList.add('sitecore-menu')
            }
        })
    }


    // Customers Menu
    if (activeBtn.innerText.trim() == 'Customers') {
        let latestBox = jQuery('.parent-customers .submenu > div > .direction-row .column:first-child .direction-row')
        jQuery(latestBox).addClass('customer-col-menu')
        let custoMEnu = jQuery('.parent-customers .submenu > div > .direction-row .column:first-child .direction-row .column:first-child .direction-column > div');
        let changeTitle = jQuery('.parent-customers .submenu > div > .direction-row > .column:last-child .title-icon-container .column-title');

        jQuery(custoMEnu).each(function () {
            if (jQuery(this).find('.item-text').text() == 'Featured Customers') {
                jQuery(this).find('.item-text').text('Our Customers');
            }
        })
        if (!jQuery(changeTitle).hasClass('change-event-title')) {
            if (jQuery(changeTitle).text() == 'Customer Stories') {
                jQuery(changeTitle).addClass('change-event-title');
                jQuery(changeTitle).text('Trending Now');
            }
        }
    }

    // Industries Menu
    if (activeBtn.innerText.trim() == 'Industries') {
        let changeTitle = mutation.target.querySelector('.direction-row .column:last-child .title-icon-container .column-title');
        if (!changeTitle.classList.contains('change-event-title')) {
            if (changeTitle.innerText == 'Learn how to lead your industry with AI') {
                changeTitle.classList.add('change-event-title')
                changeTitle.innerText = 'Trending Now';

                let compMounted = setInterval(() => {
                    let latestBox = jQuery('.parent-industries .direction-row .column:last-child .component-is-mounted .resource-banner-cards .resources-card')
                    if (latestBox.length != 0) {
                        clearInterval(compMounted)
                        let firstBox = mutation.target.querySelector('.direction-row .column:last-child .component-is-mounted .resource-banner-cards .resources-card:first-child').outerHTML;
                        let secondBox = mutation.target.querySelector('.direction-row .column:last-child .component-is-mounted .resource-banner-cards .resources-card:nth-child(2)');
                        secondBox.insertAdjacentHTML('afterend', firstBox);
                        let latestBoxList = jQuery('.parent-industries .direction-row .column:last-child .component-is-mounted .resource-banner-cards .resources-card')

                        jQuery(latestBoxList).each(function (index) {
                            if (index == 0) {
                                jQuery(this).find('.resources-card-link').attr('href', 'https://www.coveo.com/en/resources/reports/forrester-wave-cognitive-search');
                                jQuery(this).find('.resource-type-info span').text('Report');
                                jQuery(this).find('.resources-card-title').text('Forrester Wave™: Cognitive Search, Q3...');
                                jQuery(this).find('.resources-card-bg img').attr('src', 'https://cdn.coveo.com/image/authenticated/s--alRoz48n--/c_scale,d_placeholder-svg.svg,w_670/f_svg/v1/web/web01/en/library/images/resources/forrester-istock');
                                jQuery(this).find('.resources-card-bg img').attr('alt', 'Forrester Wave™: Cognitive Search, Q3...');
                            }
                            if (index == 1) {
                                jQuery(this).find('.resources-card-link').attr('href', 'https://www.coveo.com/en/resources/webinars/relevance-360-march-2023');
                                jQuery(this).find('.resource-type-info span').text('On-Demand Webinar');
                                jQuery(this).find('.resources-card-title').text('Profitize Every Experience with AI');
                                jQuery(this).find('.resources-card-bg img').attr('src', 'https://cdn.coveo.com/image/authenticated/s--lz2RUXYk--/c_scale,d_placeholder.png,w_670/f_auto/v1/web/web01/en/library/images/pages/homepage/news_banner/r360-q1-20233');
                                jQuery(this).find('.resources-card-bg img').attr('alt', 'Profitize Every Experience with AI');
                            }
                            if (index == 2) {
                                jQuery(this).find('.resources-card-link').attr('href', 'https://www.coveo.com/en/resources/reports/enterprise-search');
                                jQuery(this).find('.resource-type-info span').text('Report');
                                jQuery(this).find('.resources-card-title').html('Rated #1 </br>for Enterprise Search');
                                jQuery(this).find('.resources-card-bg img').attr('src', '//res.cloudinary.com/spiralyze/image/upload/v1683208736/Coveo/13003/assets/enterprise-search.png');
                                jQuery(this).find('.resources-card-bg img').attr('alt', 'Rated #1 for Enterprise Search');
                            }

                        });
                    }
                })

            }
        }
    }

    // Resources Menu
    let etHmlt = true;
    if (activeBtn.innerText.trim() == 'Resources') {
        let changeTitle = mutation.target.querySelector('.direction-row .column:last-child .title-icon-container .column-title');
        if (!changeTitle.classList.contains('change-event-title')) {
            if (changeTitle.innerText == 'Trending Now') {
                changeTitle.classList.add('change-event-title')
                changeTitle.innerText = 'Upcoming Events and Webinars';
            }
        }

        let addeddiv = mutation.target.querySelector('.direction-row .column .direction-row');
        let headerdiv = mutation.target.querySelector('.direction-row .column');
        let resHeadHtml = `<div class="column-container resource-title-container">
                    <div class="column cc-white  fw-34">
                        <div class="title-icon-container"><span class="column-title font-gray">Inspire</span></div>
                    </div>
                    <div class="column cc-white  fw-66">
                        <div class="title-icon-container"><span class="column-title font-gray">Learn</span></div>
                    </div>
                </div>`;
        if (!addeddiv.classList.contains('added-resource')) {
            headerdiv.insertAdjacentHTML('afterbegin', resHeadHtml);
            addeddiv.classList.add('added-resource');
            headerdiv.classList.add('resource-title')
            let firstPlace = mutation.target.querySelector('.direction-row .column .direction-row .column:nth-child(1) .direction-column div:nth-child(3)');
            let firstHtml = mutation.target.querySelector('.direction-row .column .direction-row .column:nth-child(3) .direction-column div:nth-child(3)').outerHTML;

            let secondPlace = mutation.target.querySelector('.direction-row .column .direction-row .column:nth-child(2) .direction-column div:nth-child(3)');
            let secondHtml = mutation.target.querySelector('.direction-row .column .direction-row .column:nth-child(1) .direction-column div:nth-child(1)').outerHTML;


            let thirdPlace = mutation.target.querySelector('.direction-row .column .direction-row .column:nth-child(3) .direction-column div:nth-child(3)');
            let thirdHtml = mutation.target.querySelector('.direction-row .column .direction-row .column:nth-child(2) .direction-column div:nth-child(3)').outerHTML;

            if (etHmlt) {
                etHmlt = false;
                firstPlace.insertAdjacentHTML('afterend', firstHtml);
                secondPlace.insertAdjacentHTML('afterend', secondHtml);
                thirdPlace.insertAdjacentHTML('afterend', thirdHtml);
            }

            let fourthPlace = mutation.target.querySelector('.direction-row .column .direction-row .column:nth-child(1) .direction-column div:nth-child(1)');
            let fifthPlace = mutation.target.querySelector('.direction-row .column .direction-row .column:nth-child(2) .direction-column div:nth-child(3)');
            let sixthPlace = mutation.target.querySelector('.direction-row .column .direction-row .column:nth-child(3) .direction-column div:nth-child(3)');
            fourthPlace.remove();
            fifthPlace.remove();
            sixthPlace.remove();
        }

    }

}


window.setMainMenu = function (mutation) {
    // console.log('setMainMenu call')
    //function setMainMenu(mutation) {		
    let activeBtn = mutation.target.querySelector('.column-title')

    jQuery('.submenu .panel-columns > .column:first-child > .direction-column .cta-button').remove();
    jQuery('.submenu .panel-columns > .column:first-child > .direction-column').removeClass('has-see-feature')

    if (jQuery('.submenu .panel-columns > .column:first-child .cta-button').length) {
        let seeAllHtml = jQuery('.submenu .panel-columns > .column:first-child .cta-button')[0].outerHTML;
        if (!jQuery('.submenu .panel-columns > .column:first-child > .direction-column').hasClass('has-see-feature')) {
            jQuery('.submenu .panel-columns > .column:first-child > .direction-column').append(seeAllHtml);
            jQuery('.submenu .panel-columns > .column:first-child > .direction-column').addClass('has-see-feature');
        }
    }

    if (activeBtn.innerText == 'Service & Support') {
        jQuery('.right-panel-content').remove();
        let ecomHtml = `
				<div class="support-content right-panel-content">
					<div class="column-panel cc-white right-panel-header">
						<a href="https://www.coveo.com/en/solutions/ai-customer-service" class="panel-tab">
							<div class="panel-tab-content">
								<div class="column-title"><img class="title-icon-inner" src="//res.cloudinary.com/spiralyze/image/upload/v1683194115/Coveo/13003/assets/headset-icon.svg" alt="Coveo for Service & Support" title="Coveo for Service & Support" > Coveo for Service & Support</div> 
								<div class="column-text">Your best service outcomes scaled</div>
							</div>
						</a>
					</div>
					<div class="right-content-row">
						<div class="column-panel cc-white">
							<a href="https://www.coveo.com/en/solutions/ai-customer-service/customer-self-service" class="panel-tab">
								<div class="panel-tab-content">
									<div class="column-title">Customer Self-Service</div> 
									<div class="column-text">Scale great customer support effortlessly</div>
								</div>
							</a>
						</div>
						<div class="column-panel cc-white">
							<a href="https://www.coveo.com/en/platform/contextual-help" class="panel-tab">
								<div class="panel-tab-content">
									<div class="column-title">In-product Support</div> 
									<div class="column-text">Relevant content, right inside your application</div>
								</div>
							</a>
						</div>
						<div class="column-panel cc-white">
							<a href="https://www.coveo.com/en/solutions/ai-customer-service/call-center-support" class="panel-tab">
								<div class="panel-tab-content">
									<div class="column-title">Call Center Support </div> 
									<div class="column-text">Increase agent proficiency, boost customer loyalty</div>
								</div>
							</a>
						</div>
						<div class="column-panel cc-white">
							<a href="https://www.coveo.com/en/solutions/ai-customer-service/ai-chatbot" class="panel-tab">
								<div class="panel-tab-content">
									<div class="column-title">Chatbot AI</div> 
									<div class="column-text">Get conversational chatbots that always have an answer</div>
								</div>
							</a>
						</div>
						<div class="column-panel cc-white">
							<a href="https://www.coveo.com/en/solutions/ai-customer-service/customer-communities" class="panel-tab">
								<div class="panel-tab-content">
									<div class="column-title">Communities</div> 
									<div class="column-text">Grow a powerful community of advocates</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			`;
        if (!jQuery('.support-content').length) {
            jQuery('.submenu .panel-columns > .column:first-child').prepend(ecomHtml);
            jQuery('.submenu .panel-columns > .column:first-child > .direction-column.relevance-panel-row').removeClass('relevance-panel-row');
        }
    }
    if (activeBtn.innerText == 'Ecommerce') {
        jQuery('.right-panel-content').remove();
        let ecomHtml = `
				<div class="ecom-content right-panel-content">
					<div class="column-panel cc-white right-panel-header">
						<a href="/en/solutions/ecommerce-search-platform" class="panel-tab">
							<div class="panel-tab-content">
								<div class="column-title"><img class="title-icon-inner" src="https://cdn.coveo.com/image/authenticated/s--FiyaoXp5--/d_placeholder-svg.svg/f_svg/v1/web/web01/en/library/icons/main_navigation/reskin/icons/cart" alt="Coveo for Ecommerce" title="Coveo for Ecommerce"> Coveo for Ecommerce</div> 
								<div class="column-text">Frictionless experiences, easy add-to-cart</div>
							</div>
						</a>
					</div>
					<div class="right-content-row">
						<div class="column-panel cc-white">
							<a href="/en/solutions/ecommerce-search-platform" class="panel-tab">
								<div class="panel-tab-content">
									<div class="column-title">B2C</div> 
									<div class="column-text">Boost your Revenue per Visit by 15%</div>
								</div>
							</a>
						</div>
						<div class="column-panel cc-white">
							<a href="/en/solutions/ecommerce-search-platform" class="panel-tab">
								<div class="panel-tab-content">
									<div class="column-title">B2B</div> 
									<div class="column-text">Make millions of SKUs easy to search</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			`;
        if (!jQuery('.ecom-content').length) {
            jQuery('.submenu .panel-columns > .column:first-child').prepend(ecomHtml);
            jQuery('.submenu .panel-columns > .column:first-child > .direction-column.relevance-panel-row').removeClass('relevance-panel-row');
        }
    }
    if (activeBtn.innerText == 'Website') {
        jQuery('.right-panel-content').remove();
        let ecomHtml = `
				<div class="website-content right-panel-content">
					<div class="column-panel cc-white right-panel-header">
						<a href="https://www.coveo.com/en/solutions/website-search" class="panel-tab">
							<div class="panel-tab-content">
								<div class="column-title">
									<img class="title-icon-inner" src="//res.cloudinary.com/spiralyze/image/upload/v1683194115/Coveo/13003/assets/web-icon.svg" alt="Coveo for Website" title="Coveo for Website"> Coveo for Website
								</div> 
								<div class="column-text">Relevant journeys that convert</div>
							</div>
						</a>
					</div>
					<div class="right-content-row">
						<div class="column-panel cc-white">
							<a href="https://www.coveo.com/en/solutions/website-search/partner-portal" class="panel-tab">
								<div class="panel-tab-content">
									<div class="column-title">Partner Portals</div> 
									<div class="column-text">Engage with your partners & drive shared success</div>
								</div>
							</a>
						</div>
						<div class="column-panel cc-white">
							<a href="https://www.coveo.com/en/solutions/website-search/dealer-portal" class="panel-tab">
								<div class="panel-tab-content">
									<div class="column-title">Dealer Portals</div> 
									<div class="column-text">Power dealer self-service with quick, intuitive search & discovery</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			`;
        if (!jQuery('.website-content').length) {
            jQuery('.submenu .panel-columns > .column:first-child').prepend(ecomHtml);
            jQuery('.submenu .panel-columns > .column:first-child > .direction-column.relevance-panel-row').removeClass('relevance-panel-row');
        }
    }
    if (activeBtn.innerText == 'Workplace') {
        jQuery('.right-panel-content').remove();
        let ecomHtml = `
				<div class="workplace-content right-panel-content">
					<div class="column-panel cc-white right-panel-header">
						<a href="https://www.coveo.com/en/solutions/digital-workplace" class="panel-tab">
							<div class="panel-tab-content">
								<div class="column-title">
									<img class="title-icon-inner" src="//res.cloudinary.com/spiralyze/image/upload/v1683194115/Coveo/13003/assets/sitemap-icon.svg" alt="Coveo for Workplace" title="Coveo for Workplace"> Coveo for Workplace
								</div> 
								<div class="column-text">Proactive knowledge, empowered employees</div>
							</div>
						</a>
					</div>
					<div class="right-content-row">
						<div class="column-panel cc-white">
							<a href="https://www.coveo.com/en/solutions/digital-workplace/employee-self-service" class="panel-tab">
								<div class="panel-tab-content">
									<div class="column-title">Employee Portals</div> 
									<div class="column-text">Keep employees proficient, productive & happy</div>
								</div>
							</a>
						</div>
						<div class="column-panel cc-white">
							<a href="https://www.coveo.com/en/solutions/digital-workplace/intranet-knowledge-management" class="panel-tab">
								<div class="panel-tab-content">
									<div class="column-title">Intranet & Knowledge Management</div> 
									<div class="column-text">Modernize your intranet with AI-powered search</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			`;
        if (!jQuery('.workplace-content').length) {
            jQuery('.submenu .panel-columns > .column:first-child').prepend(ecomHtml);
            jQuery('.submenu .panel-columns > .column:first-child > .direction-column.relevance-panel-row').removeClass('relevance-panel-row');

        }
    }
    if (activeBtn.innerText == 'Coveo Relevance CloudTM') {
        jQuery('.right-panel-content').remove();
        let ecomHtml = `
				<div class="relevance-content right-panel-content">
					<div class="column-panel cc-white right-panel-header">
						<a href="https://www.coveo.com/en/platform" class="panel-tab">
							<div class="panel-tab-content">
								<div class="column-title">
									<img class="title-icon-inner" src="https://cdn.coveo.com/image/authenticated/s--uwD5fuk2--/d_placeholder-svg.svg/f_svg/v1/web/web01/en/library/images/logos/coveo/favicon" alt="Coveo Relevance Cloud" title="Coveo Relevance Cloud"> Coveo Relevance Cloud<sup>TM</sup>
								</div> 
								<div class="column-text">Increase your relevance at every touchpoint by tailoring interactions with search, data, and AI.</div>
							</div>
						</a>
					</div>									
				</div>
			`;
        if (!jQuery('.relevance-content').length) {
            jQuery('.submenu .panel-columns > .column:first-child').prepend(ecomHtml);
            jQuery('.submenu .panel-columns > .column:first-child > .direction-column').addClass('relevance-panel-row');
        }
    }

}

window.addResource = function (mutation) {
    //function addResource(mutation){
    if (mutation.target.classList.contains('integrations-parent-column')) {
        let addIntigration = setInterval(() => {
            clearInterval(addIntigration)
            let latestHtml = `<div class="column cc-gray fw-40 resource-column-wrapper">
					<div class="title-icon-container"><span class="column-title font-gray">Trending Now</span></div>
					<div am-resource-presentation="small-cards" am-resource-banner="loaded" am-display="thumbnails">
						<div class="resources-content">
							<div class="resource-banner-cards">
								<div class="resources-card component-is-mounted">
									<a href="/en/resources/webinars/relevance-360-march-2023" target="_self" class="resources-card-link"></a> 
									<div class="resources-card-body"><div class="resources-card-content"><div class="resources-card-bg">
										<img src="https://cdn.coveo.com/image/authenticated/s--lz2RUXYk--/c_scale,d_placeholder.png,w_670/f_auto/v1/web/web01/en/library/images/pages/homepage/news_banner/r360-q1-20233" title="Profitize Every Experience with AI" alt="Profitize Every Experience with AI">
									</div> 
									<div class="resources-card-content-body">
										<div class="resources-card-eyebrow">
											<div class="resource-type-info">
												<span>On-Demand Webinar</span>
											</div>
										</div> 
										<a href="/en/resources/webinars/relevance-360-march-2023" target="_self" class="resources-card-title">Profitize Every Experience with AI</a>
									</div>
								</div>																	
							</div>
						</div>
					</div>
					<div class="column-cta-container"><div class="cta-button"><a href="/en/relevance" class="button icon-position-undefined button simple small"><!----> <span>Why relevance wins</span></a></div><div class="cta-button"><a href="/en/platform/whats-new" class="button icon-position-undefined button simple small"><!----> <span>What’s new</span></a></div></div>
				</div>`;
            if (!jQuery('.resource-column-wrapper').length) {
                jQuery('.submenu .integrations-parent-column').after(latestHtml);
            }
        }, 100);
    }
}

var url = location.href;
urlCheck(url);

history.pushState = (function (f) {
    return function pushState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("pushstate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
    };
})(history.pushState);

history.replaceState = (function (f) {
    return function replaceState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("replacestate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
    };
})(history.replaceState);

window.addEventListener("popstate", function () {
    window.dispatchEvent(new Event("locationchange"));
});

window.addEventListener("locationchange", function () {
    url = location.href;
    urlCheck(url);
});

function urlCheck(url) {
    var allblogsurlstring = "https://www.coveo.com/";
    if (window.location.pathname.indexOf("/") > -1) { // Add " / " to run on all urls
        allblogsurlstring = window.location.href;
    }
    if (isSameUrl(url, allblogsurlstring, true)) {
        createTest();

    } else {
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
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
function createTest() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('spz_nav_13003')) {

        bodyEle.classList.add('spz_nav_13003');

        // console.log('call 1')
        var jQueryTestInterval = setInterval(function () {
            if (typeof jQuery != 'undefined' && jQuery.fn) {

                clearInterval(jQueryTestInterval);


                jQuery('#coveoTestID').val('13003_Coveo_Top_Nav_Redesign_V2');

                waitForElm('.main-navigation').then((elm) => {

                    createMenu();

                    jQuery(document).on("click", function (e) {
                        if (jQuery(e.target).is(".open-menu") === false && jQuery(e.target).is(".trigger-submenu") === false && !$(e.target).closest('.submenu').length) {
                            jQuery('body.nav-open').removeClass('nav-open')
                            jQuery('.open-menu').removeClass('open-menu');
                            jQuery('.open-menu').removeClass('open-menu');
                            jQuery('.parent-menu-link.open').removeClass('open');
                        }
                    });


                });


                waitForElm('.meta-navigation').then((elm) => {
                    let metaNav = document.querySelectorAll('.meta-navigation .parent-menu-link .submenu .link-list .menu-link')
                    metaNav.forEach((item) => {
                        let itemName = item.querySelector('.item-text')
                        if (itemName.innerText.trim() == 'Our Locations') {
                            itemName.innerText = 'Partners'
                            item.setAttribute('href', 'https://partners.coveo.com/s/');
                        }
                    })

                    let comHtml = `<a class="menu-link" href="https://connect.coveo.com/s/" target="">Community &amp; Support</a>`;
                    let metaNavCom = document.querySelector('.meta-navigation .parent-menu-link:nth-child(2)')
                    let metaNavBtn = document.querySelector('.meta-navigation .parent-menu-link:nth-child(2) .trigger-submenu')
                    let metaNavSubmenu = document.querySelector('.meta-navigation .parent-menu-link:nth-child(2) .submenu')

                    metaNavCom.insertAdjacentHTML('afterbegin', comHtml);
                    metaNavBtn.remove();
                    metaNavSubmenu.remove();

                })

                waitForElm('.list-inline.nav-list').then((elm) => {
                    jQuery('.main-navigation .list-inline.nav-list .parent-menu-link').each(function () {

                        // Products Menu
                        if (jQuery(this).find('.trigger-submenu').text().trim() == 'Platform') {
                            jQuery(this).find('.trigger-submenu').html('Products <span class="arrow"></span>');
                            jQuery(this).addClass('parent-products')
                        }

                        if (jQuery(this).find('.trigger-submenu').text().trim() == 'Industries') {
                            jQuery(this).addClass('parent-industries')
                        }

                        if (jQuery(this).find('.trigger-submenu').text().trim() == 'Customers') {
                            jQuery(this).addClass('parent-customers')
                        }

                        // Developer Menu
                        if (jQuery(this).find('.trigger-submenu').text() == 'Developers') {
                            // jQuery(this).find('.trigger-submenu').attr('href', "javascript:void(0)");
                            jQuery(this).addClass('parent-developers')
                            let devBtn = `<button type="button" class="trigger-submenu dev-menu">Developers <span class="arrow"></span></button>`;
                            jQuery(this).find('.trigger-submenu').after(devBtn);
                            jQuery(this).find('a.trigger-submenu').remove();
                            jQuery(document).on('click', '.dev-menu', function (e) {
                                jQuery('.parent-menu-link.open').find('.integration-menu.open-menu').removeClass('open-menu');
                                jQuery('.parent-menu-link.open').removeClass('open');
                                if (jQuery('.dev-submenu').hasClass('open-menu')) {
                                    jQuery('.dev-submenu').removeClass('open-menu');
                                    jQuery('.dev-submenu').closest('.parent-menu-link.open').removeClass('open');
                                    jQuery('body.nav-open').removeClass('nav-open');
                                } else {
                                    jQuery('.dev-submenu').addClass('open-menu');
                                    jQuery('.dev-submenu').closest('.parent-menu-link').addClass('open');
                                    jQuery('body').addClass('nav-open');
                                }
                            })

                            let devHtml = `
									<div class="dev-submenu submenu">
										<div class="dev-submenu-panel">
											<div class="dev-sub-title"><a href="https://www.coveo.com/en/developers">Developers</a></div>
											<div class="dev-sub-item"><a href="https://docs.coveo.com/en/0/coveo-documentation">Documentation</a></div>
											<div class="dev-sub-item"><a href="https://github.com/coveo">GitHub</a></div>
											<div class="dev-sub-item"><a href="https://connect.coveo.com/s/">Coveo Connect Cummunity</a></div>
											<div class="dev-sub-item"><a href="#">AI Research</a></div>
											<div class="dev-sub-item"><a href="https://www.coveo.com/en/developers/labs">Coveo Labs</a></div>
										</div>
										<div class="dev-sub-footer"><a href="/en/free-trial">Start a free trial</a></div>
									</div>
								`;
                            if (!jQuery('.dev-submenu-panel').length) {
                                jQuery(this).append(devHtml);
                            }
                        }

                        // Pricing Menu
                        if (jQuery(this).find('.trigger-submenu').text().trim() == 'Pricing') {
                            jQuery(this).addClass('parent-pricing');

                        }

                        // Integrations Menu
                        if (jQuery(this).find('.trigger-submenu').text().trim() == 'Partners') {
                            jQuery(this).addClass('parent-integrations');
                            let inteBtn = `<button type="button" class="trigger-submenu integra-menu">Integrations <span class="arrow"></span></button>`;
                            jQuery(this).find('.trigger-submenu').after(inteBtn);
                            jQuery(this).find('a.trigger-submenu').remove();
                            jQuery(document).on('click', '.integra-menu', function (e) {
                                jQuery('.parent-menu-link.open').find('.dev-submenu.open-menu').removeClass('open-menu');
                                jQuery('.parent-menu-link.open').removeClass('open');
                                if (jQuery('.integration-menu').hasClass('open-menu')) {
                                    jQuery('.integration-menu').removeClass('open-menu');
                                    jQuery('.integration-menu').closest('.parent-menu-link.open').removeClass('open');
                                    jQuery('body.nav-open').removeClass('nav-open');
                                } else {
                                    jQuery('.integration-menu').addClass('open-menu');
                                    jQuery('.integration-menu').closest('.parent-menu-link').addClass('open');
                                    jQuery('body').addClass('nav-open');
                                }
                            })

                            let integrationsHtml = `<div class="submenu integration-menu">
									<div>
										<div class="container direction-row">
											<div class="column cc-white fw-100 title-col">
												<div class="title-icon-container"><span class="column-title font-gray">Integrations</span></div>
											</div>
										</div>
										<div class="container direction-row">
											<div class="column cc-white fw-75 logo-col">
												<div class="integration-wrapper">
													<div class="integ-col">
														<a href="https://www.coveo.com/en/integrations/salesforce-search">
															<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936632/Coveo/13003/assets/Salesforce-logo.svg" alt="Salesforce Logo" />
														</a>
													</div>
													<div class="integ-col">
														<a href="https://www.coveo.com/en/integrations/servicenow-ai-search">
															<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936632/Coveo/13003/assets/ServiceNow-logo.svg" alt="ServiceNow Logo" />
														</a>
													</div>
													<div class="integ-col">
														<a href="https://www.coveo.com/en/integrations/sap-commerce-search">
															<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936632/Coveo/13003/assets/SAP-logo.svg" alt="SAP Logo" />
														</a>
													</div>
													<div class="integ-col">
														<a href="https://www.coveo.com/en/integrations/appdirect-marketplace-search">
															<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936620/Coveo/13003/assets/AppDirect-logo.svg" alt="AppDirect Logo" />
														</a>
													</div>
													<div class="integ-col">
														<a href="https://www.coveo.com/en/integrations/adobe-search">
															<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936621/Coveo/13003/assets/Adobe-logo.svg" alt="Adobe Logo" />
														</a>
													</div>
													<div class="integ-col">
														<a href="https://www.coveo.com/en/integrations/zendesk-search">
															<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936642/Coveo/13003/assets/Zendesk-logo.svg" alt="Zendesk Logo" />
														</a>
													</div>
													<div class="integ-col">
														<a href="https://www.coveo.com/en/integrations/sitecore-search">
															<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936642/Coveo/13003/assets/Sitecore-logo.svg" alt="Sitecore Logo" />
														</a>
													</div>
													<div class="integ-col">
														<a href="https://www.coveo.com/en/solutions/digital-workplace/slack-application">
															<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936642/Coveo/13003/assets/Slack-logo.svg" alt="Slack Logo" />
														</a>
													</div>
													<div class="integ-col">
														<a href="https://www.coveo.com/en/platform/contextual-help">
															<img src="//res.cloudinary.com/spiralyze/image/upload/v1682936632/Coveo/13003/assets/IPX-logo.svg" alt="IPX Logo" />
														</a>
													</div>
												</div>
											</div>  
											<div class="column cc-white fw-25 right-col">
												<div class="all-integ-col">
													<a href="https://www.coveo.com/en/integrations#t=integrations-search&sort=%40sortorder%20ascending&numberOfResults=15">
														<img src="//res.cloudinary.com/spiralyze/image/upload/v1682937482/Coveo/13003/assets/See-all-integrations.svg" alt="See all integrations" />
													</a>
												</div>
											</div>  
										</div>
										<div class="submenu-footer">
											<div class="container">
												<ul>
													<li class="submenu-footer-link-item">
														<a href="/en/contact" class="menu-link">
															<div class="item-content">
																<span class="item-text is-bold">Talk to Sales</span>
															</div>
														</a>
													</li>
													<li class="submenu-footer-link-item">
														<a href="https://roi-calculator.coveo.com/" class="menu-link">
															<div class="item-content">
																<span class="item-text is-bold">Coveo ROI calculator</span>
															</div>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>`;
                            if (!jQuery('.integration-menu').length) {
                                jQuery(this).append(integrationsHtml);
                            }

                        }

                        // Resources Menu
                        if (jQuery(this).find('.trigger-submenu').text().trim() == 'Resources') {
                            jQuery(this).addClass('parent-resource');

                        }
                    });
                });
            }
        }, 200);

    }
}



function createMenu() {
    let select = document.querySelector('.main-navigation')

    waitForElm('.main-navigation-mobile-tab').then((elm) => {
        jQuery('#main-navigation-mobile .tabs .main-navigation-mobile-tab').each(function () {
            if (jQuery(this).find('.tab-title .title').text().trim() == 'Platform') {
                jQuery(this).find('.tab-title .title').text('Products');
                jQuery(this).addClass('parent-products');
            }
            if (jQuery(this).find('.tab-title .title').text().trim() == 'Partners') {
                if (!jQuery(this).hasClass('parent-integrations')) {
                    jQuery(this).find('.tab-title .title').text('Integrations');
                    jQuery(this).find('.tab').append('<div class="chevron cv-icon-chevron-down"></div>');
                    jQuery(this).find('.tab').removeAttr('href');
                    jQuery(this).addClass('parent-integrations');
                }
            }
            if (jQuery(this).find('.tab-title .title').text().trim() == 'Developers') {
                if (!jQuery(this).hasClass('parent-developers')) {
                    jQuery(this).find('.tab').removeAttr('href');
                    jQuery(this).find('.tab').append('<div class="chevron cv-icon-chevron-down"></div>');
                    jQuery(this).addClass('parent-developers');
                }
            }
            if (jQuery(this).find('.tab-title .title').text().trim() == 'Customers') {
                jQuery(this).addClass('parent-customers');
            }
            if (jQuery(this).find('.tab-title .title').text().trim() == 'Pricing') {
                jQuery(this).addClass('parent-pricing');
            }
            if (jQuery(this).find('.tab-title .title').text().trim() == 'Resources') {
                jQuery(this).addClass('parent-resources');
            }
            if (jQuery(this).find('.tab-title .title').text().trim() == 'Industries') {
                jQuery(this).addClass('parent-industries');
            }
        });
        let conatctHas = document.querySelector('.mobile-contact-btn')
        if (!conatctHas) {
            let contactBtn = `<div class="mobile-contact-btn"><a href="/en/contact" target="" data-tracking="mn-contact-us" class="button">Contact Us</a></div>`;
            let btnTarget = document.querySelector('#main-navigation-mobile .parent-resources')
            btnTarget.insertAdjacentHTML('afterend', contactBtn);
        }

        jQuery('#main-navigation-mobile > .submenu-footer .submenu-footer-link-item').each(function () {
            if (jQuery(this).find('.item-text').text().trim() == 'Get a demo') {
                jQuery(this).find('.item-text').text('Coveo ROI calculator');
                jQuery(this).find('.menu-link').attr('href', 'https://roi-calculator.coveo.com/');
            }
        });

    });

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type == 'attributes') {

                if (mutation.target.classList.contains('panel-tab')) {
                    if (mutation.target.classList.contains('active')) {

                        setMainMenu(mutation)


                    }
                }
            }
            if (mutation.type == 'childList') {
                var resourceInterval = setInterval(function () {
                    if (typeof addResource != 'undefined') {
                        clearInterval(resourceInterval);
                        addResource(mutation)
                    }
                }, 100);


            }
            // console.log(mutation.target)
            if (mutation.target) {
                if (mutation.target.classList.contains('parent-menu-link')) {
                    let activeBtn = mutation.target.querySelector('.trigger-submenu')
                    if (activeBtn) {
                        if (activeBtn.classList.contains('active')) {
                            setDeskopMenu(mutation, activeBtn)
                        }
                    }

                }
            }

            if (mutation.target.classList.contains('header-content')) {
                if (mutation.target.classList.contains('active')) {
                    waitForElm('.main-navigation-mobile-tab').then((elm) => {
                        jQuery('#main-navigation-mobile .tabs .main-navigation-mobile-tab').each(function () {
                            if (jQuery(this).find('.tab-title .title').text().trim() == 'Platform') {
                                jQuery(this).find('.tab-title .title').text('Products');
                                jQuery(this).addClass('parent-products');
                            }
                            if (jQuery(this).find('.tab-title .title').text().trim() == 'Partners') {
                                if (!jQuery(this).hasClass('parent-integrations')) {
                                    jQuery(this).find('.tab-title .title').text('Integrations');
                                    jQuery(this).find('.tab').append('<div class="chevron cv-icon-chevron-down"></div>');
                                    jQuery(this).find('.tab').removeAttr('href');
                                    jQuery(this).addClass('parent-integrations');
                                }
                            }
                            if (jQuery(this).find('.tab-title .title').text().trim() == 'Developers') {
                                if (!jQuery(this).hasClass('parent-developers')) {
                                    jQuery(this).find('.tab').removeAttr('href');
                                    jQuery(this).find('.tab').append('<div class="chevron cv-icon-chevron-down"></div>');
                                    jQuery(this).addClass('parent-developers');
                                }
                            }
                            if (jQuery(this).find('.tab-title .title').text().trim() == 'Customers') {
                                jQuery(this).addClass('parent-customers');
                            }
                            if (jQuery(this).find('.tab-title .title').text().trim() == 'Pricing') {
                                jQuery(this).addClass('parent-pricing');
                            }
                            if (jQuery(this).find('.tab-title .title').text().trim() == 'Resources') {
                                jQuery(this).addClass('parent-resources');
                            }
                            if (jQuery(this).find('.tab-title .title').text().trim() == 'Industries') {
                                jQuery(this).addClass('parent-industries');
                            }
                        });
                        let conatctHas = document.querySelector('.mobile-contact-btn')
                        if (!conatctHas) {
                            let contactBtn = `<div class="mobile-contact-btn"><a href="/en/contact" target="" data-tracking="mn-contact-us" class="button">Contact Us</a></div>`;
                            let btnTarget = document.querySelector('#main-navigation-mobile .parent-resources')
                            btnTarget.insertAdjacentHTML('afterend', contactBtn);
                        }

                        jQuery('#main-navigation-mobile > .submenu-footer .submenu-footer-link-item').each(function () {
                            if (jQuery(this).find('.item-text').text().trim() == 'Get a demo') {
                                jQuery(this).find('.item-text').text('Coveo ROI calculator');
                                jQuery(this).find('.menu-link').attr('href', 'https://roi-calculator.coveo.com/');
                            }
                        });

                    });


                }
            }

            if (mutation.target.classList.contains('main-navigation-mobile-panel')) {

                if (mutation.target.classList.contains('open')) {
                    setMobieMenu(mutation);
                    // console.log('mobile call');
                    // console.log(mutation.target.classList)
                    // console.log('text 1220', htm.innerText);
                } else {
                    if (mutation.target.parentNode.classList.contains("parent-open")) {
                        mutation.target.parentNode.classList.remove("parent-open")
                    }
                    let mainNav = document.querySelector('.main-navigation-mobile')
                    if (mainNav.classList.contains('open-submenu')) {
                        mainNav.classList.remove('open-submenu')
                    }
                    let mainHeader = document.querySelector('.header-content')
                    if (mainHeader.classList.contains('open-submenu')) {
                        mainHeader.classList.remove('open-submenu')
                    }
                    let innerSub = document.querySelector('.open-innersub')
                    if (innerSub) {
                        if (innerSub.classList.contains('open-innersub')) {
                            innerSub.classList.remove('open-innersub')
                        }
                    }

                }
            }
        })
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
    });

}
