

var bodyElem = document.querySelector('body');
if (!bodyElem.classList.contains('SFL_1066')) {
    bodyElem.classList.add('SFL_1066');

    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        document.querySelector('body').classList.add('safari');
    }

    var body = document.body;
    if (navigator.platform.toLowerCase().indexOf('mac') > -1) {
        body.classList.add('macos');
    }

    document.querySelector('.site-section.hero-section').insertAdjacentHTML('afterend', `<div class="main-top">
		<div class="animate-herosec">
			<div class="animate-hero-wrap">
				<div class="container">
					<div class="animate-herotop">
						<div class="market-desc">
							<div class="review-sec">
								<div class="g2-logo"><img src="//res.cloudinary.com/spiralyze/image/upload/v1708585296/SurefireLocal/1066/g2-logo.svg" alt="G2 Logo"></div>
								<div class="rate">
									<span class="nm-rating">4.8</span>
									<img src="//res.cloudinary.com/spiralyze/image/upload/v1708585318/SurefireLocal/1066/stars.svg" alt="Star Review" class="stars">
								</div>
								<div class="count-review">52 reviews</div>
							</div>
							<h2 class="ani-title">The top <span class="highlight">marketing platform</span> <span class="text-tab">for</span> <br> local businesses</h2>
							<div class="ani-desc">Surefire automates review requests, SEO, social media, online advertising, and more. So you grow your online visibility, customer base, and revenue.</div>
							<div class="ani-button">
								<div class="ai-demo"><a href="https://info.surefirelocal.com/lp/demo">Request a Demo</a></div>
								<div class="ai-price"><a href="https://info.surefirelocal.com/lp/pricing">Get Pricing</a></div>
							</div>
						</div>
					</div>
					<div class="animate-heromiddle">
						<div class="animate-left">
							<div class="web-traffic">
								<video autoplay muted loop playsinline preload="metadata">
									<source type="video/mp4" src="https://res.cloudinary.com/spiralyze/video/upload/v1708603801/SurefireLocal/1066/traffic.mp4"></source>
								</video>
							</div>
							<div class="key-suggest">
								<video autoplay muted loop playsinline preload="metadata">
									<source type="video/mp4" src="https://res.cloudinary.com/spiralyze/video/upload/v1708604013/SurefireLocal/1066/Keywords.mp4"></source>
								</video>
							</div>
							<div class="schd-post">
								<video autoplay muted loop playsinline preload="metadata">
									<source type="video/mp4" src="https://res.cloudinary.com/spiralyze/video/upload/v1708604087/SurefireLocal/1066/Calendar_mini.mp4"></source>
								</video>
							</div>
						</div>
						<div class="animate-middle">
							<div class="SFL-dashboard">
								<video autoplay muted loop playsinline preload="metadata">
									<source type="video/mp4" src="https://res.cloudinary.com/spiralyze/video/upload/v1708604140/SurefireLocal/1066/central_window.mp4"></source>
								</video>
							</div>
						</div>
						<div class="animate-right">
							<div class="chat-msg">
								<video autoplay muted loop playsinline preload="metadata">
									<source type="video/mp4" src="https://res.cloudinary.com/spiralyze/video/upload/v1708604178/SurefireLocal/1066/Messenger.mp4"></source>
								</video>
							</div>
							<div class="facebook-post">
								<video autoplay muted loop playsinline preload="metadata">
									<source type="video/mp4" src="https://res.cloudinary.com/spiralyze/video/upload/v1708604215/SurefireLocal/1066/Facebook_post_1.mp4"></source>
								</video>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="animate-herobottom">
				<div class="buinsite-logo">
					<div class="buinsite-title">Join 7,000+ Local Businesses Growing Using Surefire</div>
					<div class="buinsite-inn" id="logoContainer">
					</div>
				</div>
			</div>
		</div>
		<div class="tabgrow-sec">
			<div class="container">
				<div class="tabgrow-inner">
					<div class="tabgrow-title">See how Surefire helps local businesses grow revenue</div>
					<div class="tabgw-wrap">
						<div class="grow-tab" id="tabList">
								<div class="grow-tabitem">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path d="M18.953 8.01848C18.8352 7.654 18.5119 7.39513 18.1295 7.36066L12.9342 6.88892L10.8798 2.0805C10.7283 1.72811 10.3834 1.5 10.0001 1.5C9.61678 1.5 9.2718 1.72811 9.12032 2.08133L7.06597 6.88892L1.86986 7.36066C1.48808 7.39595 1.16562 7.654 1.0471 8.01848C0.928585 8.38296 1.03804 8.78273 1.32685 9.03474L5.25387 12.4788L4.09588 17.5797C4.01115 17.9547 4.15672 18.3424 4.46791 18.5674C4.63518 18.6882 4.83088 18.7498 5.02823 18.7498C5.19838 18.7498 5.36717 18.7039 5.51864 18.6133L10.0001 15.9349L14.4799 18.6133C14.8077 18.8105 15.2209 18.7925 15.5314 18.5674C15.8427 18.3417 15.9882 17.9539 15.9034 17.5797L14.7455 12.4788L18.6725 9.03542C18.9613 8.78273 19.0716 8.38365 18.953 8.01848Z"/>
									</svg>
									<h3 class="nav-link">Reviews</h3>
								</div>
								<div class="grow-tabitem">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path d="M18.5607 16.9397L14.7529 13.1319C15.5397 11.9461 16.0002 10.5263 16.0002 9.00008C16.0002 4.86454 12.6356 1.5 8.50008 1.5C4.36454 1.5 1 4.86454 1 9.00008C1 13.1356 4.36454 16.5002 8.50008 16.5002C10.0263 16.5002 11.4461 16.0397 12.6319 15.2529L16.4397 19.0607C17.0247 19.6464 17.9757 19.6464 18.5607 19.0607C19.1464 18.4749 19.1464 17.5254 18.5607 16.9397ZM3.25002 9.00008C3.25002 6.10505 5.60505 3.75002 8.50008 3.75002C11.3951 3.75002 13.7501 6.10505 13.7501 9.00008C13.7501 11.8951 11.3951 14.2501 8.50008 14.2501C5.60505 14.2501 3.25002 11.8951 3.25002 9.00008Z"/>
									</svg>
									<h3 class="nav-link">Search Visibility</h3>
								</div>
								<div class="grow-tabitem">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path d="M17.7061 1.25H3.95605C3.79029 1.25 3.63132 1.31585 3.51411 1.43306C3.3969 1.55027 3.33105 1.70924 3.33105 1.875V3.75C3.33105 3.91576 3.3969 4.07473 3.51411 4.19194C3.63132 4.30915 3.79029 4.375 3.95605 4.375H4.58105L8.95605 10.625V18.1242C8.95606 18.2307 8.98329 18.3355 9.03517 18.4285C9.08705 18.5216 9.16185 18.5998 9.25248 18.6558C9.3431 18.7118 9.44653 18.7438 9.55296 18.7486C9.65938 18.7533 9.76527 18.7308 9.86055 18.6832L12.3606 17.4332C12.4644 17.3813 12.5517 17.3015 12.6127 17.2028C12.6737 17.104 12.7061 16.9903 12.7061 16.8742V10.625L17.0811 4.375H17.7061C17.8718 4.375 18.0308 4.30915 18.148 4.19194C18.2652 4.07473 18.3311 3.91576 18.3311 3.75V1.875C18.3311 1.70924 18.2652 1.55027 18.148 1.43306C18.0308 1.31585 17.8718 1.25 17.7061 1.25Z"/>
									</svg>
									<h3 class="nav-link">Quality Leads</h3>
								</div>
								<div class="grow-tabitem">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path d="M10.5 10.5C11.7364 10.5 12.807 10.0565 13.6818 9.1816C14.5566 8.3068 15 7.23643 15 5.99986C15 4.76371 14.5566 3.6932 13.6817 2.81811C12.8068 1.94346 11.7363 1.5 10.5 1.5C9.26349 1.5 8.19316 1.94346 7.31839 2.81826C6.44362 3.69305 6.00003 4.76357 6.00003 5.99986C6.00003 7.23643 6.44362 8.30695 7.31853 9.18174C8.19344 10.0564 9.26392 10.5 10.5 10.5Z"/>
										<path d="M18.3369 15.4775C18.3114 15.1383 18.2598 14.7682 18.1839 14.3775C18.1073 13.9838 18.0086 13.6116 17.8905 13.2715C17.7685 12.9199 17.6026 12.5727 17.3975 12.24C17.1846 11.8946 16.9346 11.5939 16.654 11.3465C16.3607 11.0876 16.0015 10.8795 15.5861 10.7277C15.1721 10.5766 14.7134 10.5001 14.2227 10.5001C14.03 10.5001 13.8436 10.5731 13.4837 10.7892C13.2622 10.9224 13.0031 11.0764 12.7139 11.2469C12.4666 11.3922 12.1316 11.5283 11.7178 11.6516C11.3141 11.772 10.9042 11.8331 10.4996 11.8331C10.095 11.8331 9.68527 11.772 9.28112 11.6516C8.86776 11.5284 8.53276 11.3923 8.28575 11.247C7.99928 11.0782 7.74003 10.9241 7.5152 10.789C7.15571 10.5729 6.96919 10.5 6.77648 10.5C6.28564 10.5 5.82705 10.5766 5.41326 10.7278C4.99817 10.8793 4.63883 11.0875 4.34515 11.3466C4.06473 11.5942 3.81455 11.8948 3.60197 12.24C3.39702 12.5727 3.2311 12.9197 3.10896 13.2716C2.991 13.6117 2.89235 13.9838 2.81572 14.3775C2.73982 14.7677 2.68826 15.1379 2.66277 15.4779C2.6377 15.811 2.62503 16.1567 2.62503 16.5059C2.62503 17.4147 2.93829 18.1504 3.55603 18.693C4.16613 19.2284 4.9734 19.5 5.95509 19.5H15.045C16.0267 19.5 16.8336 19.2285 17.4439 18.693C18.0618 18.1508 18.375 17.415 18.375 16.5058C18.3749 16.155 18.3621 15.809 18.3369 15.4775Z"/>
									</svg>
									<h3 class="nav-link">Repeat Customers</h3>
								</div>
								<div class="grow-tabitem">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<g clip-path="url(#clip0_2568_4744)">
										<path d="M10 0.6875C4.59766 0.6875 0.195312 5.08203 0.195312 10.4922C0.195312 15.9023 4.58984 20.2969 10 20.2969C15.4102 20.2969 19.8047 15.9023 19.8047 10.4922C19.8047 5.08203 15.4023 0.6875 10 0.6875ZM13.2852 14.0859C13.0742 14.4844 12.7852 14.8164 12.4375 15.082C12.0859 15.3398 11.6953 15.5313 11.2578 15.6641C11.1367 15.6992 11.0117 15.7344 10.8867 15.7539V16.3438C10.8867 16.8359 10.4883 17.2344 9.99609 17.2344C9.50391 17.2344 9.09766 16.8359 9.09766 16.3359V15.7969C8.82422 15.7539 8.55078 15.6992 8.28906 15.6211C7.76953 15.4648 7.32031 15.207 6.91406 14.918C6.73828 14.7969 6.50781 14.5234 6.50781 14.5234C6.41797 14.4336 6.29688 14.2852 6.29688 13.9688C6.29688 13.5117 6.66797 13.1328 7.11719 13.1406C7.41797 13.1406 7.70703 13.3867 7.70703 13.3867C8 13.625 8.16406 13.7734 8.45703 13.8984C8.88672 14.0898 9.38281 14.1797 9.92969 14.1797C10.2656 14.1797 10.582 14.1172 10.8789 13.9961C11.1602 13.875 11.3906 13.707 11.5742 13.4922C11.7422 13.2813 11.8281 13.0273 11.8281 12.7188C11.8281 12.3203 11.6797 11.9766 11.3867 11.6602C11.0859 11.3438 10.5742 11.1484 9.85547 11.0625C9.16797 10.9922 8.55078 10.8164 8.03125 10.543C7.50391 10.2695 7.08203 9.90234 6.79688 9.46094C6.50781 9.01953 6.36328 8.50781 6.36328 7.94531C6.36328 7.33594 6.53906 6.80078 6.875 6.35938C7.21094 5.92969 7.66016 5.59375 8.22266 5.37109C8.50391 5.25781 8.79297 5.16797 9.10156 5.11328V4.51562C9.10156 4.02344 9.5 3.625 9.99219 3.625C10.4844 3.625 10.8906 4.02344 10.8906 4.52344V5.09766C11.1133 5.13281 11.3203 5.1875 11.5078 5.25781C11.9297 5.41406 12.293 5.63672 12.5938 5.91797C12.7617 6.07812 12.918 6.25391 13.0586 6.44531C13.0781 6.47266 13.1094 6.5 13.1289 6.53125C13.2188 6.65625 13.2695 6.82031 13.2695 6.99609C13.2695 7.45312 12.8125 7.78125 12.4414 7.81641C12.0898 7.85156 11.7617 7.45312 11.7617 7.45312C11.6133 7.26172 11.4453 7.10156 11.25 6.96875C10.957 6.77344 10.543 6.66797 10.0156 6.66016C9.45312 6.65234 8.99219 6.76562 8.625 7.00391C8.28906 7.22266 8.125 7.53125 8.125 7.96484C8.125 8.1875 8.17578 8.41406 8.28125 8.625C8.37891 8.82031 8.57422 9.00391 8.86328 9.16406C9.16406 9.33203 9.62891 9.45312 10.2305 9.52344C11.2422 9.62109 12.0547 9.94531 12.6641 10.4844C13.2891 11.0312 13.6055 11.7773 13.6055 12.6953C13.6016 13.2227 13.4961 13.6875 13.2852 14.0859Z"/>
										</g>
										<defs>
										<clipPath id="clip0_2568_4744">
										<rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
										</clipPath>
										</defs>
									</svg>
									<h3 class="nav-link">Revenue</h3>
								</div>
						</div>
						<div class="grow-tabcont">
								<div class="grow-tabpane">
									<div class="grow-tabinn">
										<div class="grow-left">
											<div class="grow-tabtitle">get seen and be noticed</div>
											<div class="grow-desc">Businesses see a 50% increase in revenue when they get more reviews</div>
											<div class="grow-list">
												<ul class="grow-tabmain">
													<li class="grow-lstcont"><strong>Automate Requests.</strong> Send automatic review requests to customers by text or email.</li>
													<li class="grow-lstcont"><strong>Reminders.</strong> Follow up with customers who forget to leave a review.</li>
													<li class="grow-lstcont"><strong>Respond.</strong> Reply to reviews across platforms from one place, both positive and negative.</li>
												</ul>
											</div>
											<div class="demo-btn">
												<a href="https://info.surefirelocal.com/lp/demo" id="tgrow-btn">
													<span>Request a Demo</span>
												</a>
											</div>
										</div>
										<div class="grow-right">
											<div class="grow-img">
												<picture>
													<source media="(min-width: 1023.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard1-desktop.webp">
													<source media="(min-width: 767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard1-tablet.webp">
													<source media="(max-width: 767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard1-mobile.webp">
													<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard1-desktop.webp" alt="Reviews">
												</picture>
											</div>
										</div>
									</div>
								</div>
								<div class="grow-tabpane">
									<div class="grow-tabinn">
										<div class="grow-left">
											<div class="grow-tabtitle">more reviews</div>
											<div class="grow-desc">Online visibility is the #1 way to get more customers</div>
											<div class="grow-list">
												<ul class="grow-tabmain">
													<li class="grow-lstcont"><strong>SEO.</strong> Optimize your site to get more free traffic from Google.</li>
													<li class="grow-lstcont"><strong>Local.</strong> Complete your Google local listing to dominate local search.</li>
													<li class="grow-lstcont"><strong>Advertise.</strong> Place targeted Google ads that attract your ideal customer.</li>
												</ul>
											</div>
											<div class="demo-btn">
												<a href="https://info.surefirelocal.com/lp/demo" id="tgrow-btn">
													<span>Request a Demo</span>
												</a>
											</div>
										</div>
										<div class="grow-right">
											<div class="grow-img">
												<picture>
													<source media="(min-width: 1023.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard2-desktop.webp">
													<source media="(min-width: 767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard2-tablet.webp">
													<source media="(max-width: 767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard2-mobile.webp">
													<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard2-desktop.webp" alt="Search Visibility">
												</picture>
											</div>
										</div>
									</div>
								</div>
								<div class="grow-tabpane">
									<div class="grow-tabinn">
										<div class="grow-left">
											<div class="grow-tabtitle">Quality leads</div>
											<div class="grow-desc">Improving lead quality can double your closing rate</div>
											<div class="grow-list">
												<ul class="grow-tabmain">
													<li class="grow-lstcont"><strong>Targeting.</strong> Build a digital footprint focused on high quality customers.</li>
													<li class="grow-lstcont"><strong>Optimize.</strong> Refine digital campaigns to avoid unqualified visitors.</li>
													<li class="grow-lstcont"><strong>Analytics.</strong> Track results and measure lead quality improvement over time.</li>
												</ul>
											</div>
											<div class="demo-btn">
												<a href="https://info.surefirelocal.com/lp/demo" id="tgrow-btn">
													<span>Request a Demo</span>
												</a>
											</div>
										</div>
										<div class="grow-right">
											<div class="grow-img">
												<picture>
													<source media="(min-width: 1023.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard3-desktop.webp">
													<source media="(min-width: 767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard3-tablet.webp">
													<source media="(max-width: 767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard3-mobile.webp">
													<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard3-desktop.webp" alt="Quality leads">
												</picture>
											</div>
										</div>
									</div>
								</div>
								<div class="grow-tabpane">
									<div class="grow-tabinn">
										<div class="grow-left">
											<div class="grow-tabtitle">Repeat Customers</div>
											<div class="grow-desc">It's 7x cheaper to retain existing customers than generate new ones</div>
											<div class="grow-list">
												<ul class="grow-tabmain">
													<li class="grow-lstcont"><strong>Promotions.</strong> Create special offers exclusively for previous high quality customers.</li>
													<li class="grow-lstcont"><strong>Content.</strong> Provide value to previous customers with ongoing education.</li>
													<li class="grow-lstcont"><strong>Customer service.</strong> Offer exceptional customer service so customers are excited to return.</li>
												</ul>
											</div>
											<div class="demo-btn">
												<a href="https://info.surefirelocal.com/lp/demo" id="tgrow-btn">
													<span>Request a Demo</span>
												</a>
											</div>
										</div>
										<div class="grow-right">
											<div class="grow-img">
												<picture>
													<source media="(min-width: 1023.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard4-desktop.webp">
													<source media="(min-width: 767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard4-tablet.webp">
													<source media="(max-width: 767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard4-mobile.webp">
													<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard4-desktop.webp" alt="Repeat Customers">
												</picture>
											</div>
										</div>
									</div>
								</div>
								<div class="grow-tabpane">
									<div class="grow-tabinn">
										<div class="grow-left">
											<div class="grow-tabtitle">more revenue</div>
											<div class="grow-desc">Get up to 320% more leads, customers, and revenue with optimized digital marketing</div>
											<div class="grow-list">
												<ul class="grow-tabmain">
													<li class="grow-lstcont"><strong>Increase Visibility.</strong> Optimize your business’s profile on popular search platforms including Google, Bing, and Yahoo.</li>
													<li class="grow-lstcont"><strong>Nurture Prospects.</strong> Build and nurture customer relationships with emails, social media, and web content.</li>
													<li class="grow-lstcont"><strong>Customer service.</strong> Offer exceptional customer service so customers are excited to return.</li>
												</ul>
											</div>
											<div class="demo-btn">
												<a href="https://info.surefirelocal.com/lp/demo" id="tgrow-btn">
													<span>Request a Demo</span>
												</a>
											</div>
										</div>
										<div class="grow-right">
											<div class="grow-img">
												<picture>
													<source media="(min-width: 1023.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard5-desktop.webp">
													<source media="(min-width: 767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard5-tablet.webp">
													<source media="(max-width: 767.98px)" srcset="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard5-mobile.webp">
													<img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/dasboard5-desktop.webp" alt="Repeat Customers">
												</picture>
											</div>
										</div>
									</div>
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="g2-busin-logo">
			<div class="container">
				<div class="g2-busin-wrap">
					<picture>
						<source media="(min-width: 1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/awards_2.webp">
						<source media="(min-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/awards_1.webp">
						<source media="(max-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/awards.webp">
						<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/awards_2.webp" alt="G2 Business Logo">
					</picture>
				</div>
			</div>
		</div>
		<div class="omark-activitysec">
			<div class="container">
				<div class="omark-wrap">
					<div class="omark-title">Surefire Handles the <span class="highlight"> Most Important </span> <br> Online Marketing Activities</div>
					<div class="oma-tab">
						<div class="omark-inner">
							<div class="omark-left">
								<div class="oma-chkin">
									<div class="sub-title">Ratings & Reviews</div>
									<div class="omark-detail">
										<div class="oma-desc">Rank first across search engines by generating more reviews. Request, manage and respond to ratings and reviews all in one place.</div>
										<div class="oma-btn"><a href="https://www.surefirelocal.com/solutions/get-more-reviews/">Learn More</a></div>
									</div>
								</div>
							</div>
							<div class="omark-right">
								<picture>
									<source media="(min-width: 1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature1-desktop.webp">
									<source media="(min-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature1-tablet.webp">
									<source media="(max-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature1-mobile.webp">
									<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature1-desktop.webp" alt="Rating & Reviews">
								</picture>
							</div>
						</div>
						<div class="omark-inner">
							<div class="omark-left">
								<div class="oma-chkin">
									<div class="sub-title">Business Listings</div>
									<div class="omark-detail">
										<div class="oma-desc">Easily improve search visibility by listing your business across 70+ directories. Manage and update all listings on a single platform.</div>
										<div class="oma-btn"><a href="https://www.surefirelocal.com/solutions/get-more-online-visibility/">Learn More</a></div>
									</div>
								</div>
							</div>
							<div class="omark-right">
								<picture>
									<source media="(min-width: 1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature2-desktop.webp">
									<source media="(min-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature2-tablet.webp">
									<source media="(max-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature2-mobile.webp">
									<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature2-desktop.webp" alt="Business Listings">
								</picture>
							</div>
						</div>
						<div class="omark-inner">
							<div class="omark-left">
								<div class="oma-chkin">
									<div class="sub-title">Local Paid Ads</div>
									<div class="omark-detail">
										<div class="oma-desc">Advertise on any search engine or social media network using pre-built, location-based ad campaigns. Directly track ad effectiveness.</div>
										<div class="oma-btn"><a href="https://www.surefirelocal.com/software/platform/digital-ads-platform/">Learn More</a></div>
									</div>
								</div>
							</div>
							<div class="omark-right">
								<picture>
									<source media="(min-width: 1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature3-desktop.webp">
									<source media="(min-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature3-tablet.webp">
									<source media="(max-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature3-mobile.webp">
									<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature3-desktop.webp" alt="Local Paid Ads">
								</picture>
							</div>
						</div>
						<div class="omark-inner">
							<div class="omark-left">
								<div class="oma-chkin">
									<div class="sub-title">Lead Generation</div>
									<div class="omark-detail">
										<div class="oma-desc">Manage your lead pipeline in one place. Track how many leads you’ve generated, where they are in the sales cycle, and who to follow up with.</div>
										<div class="oma-btn"><a href="https://www.surefirelocal.com/solutions/get-more-quality-leads/">Learn More</a></div>
									</div>
								</div>
							</div>
							<div class="omark-right">
								<picture>
									<source media="(min-width: 1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature4-desktop.webp">
									<source media="(min-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature4-tablet.webp">
									<source media="(max-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature4-mobile.webp">
									<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature4-desktop.webp" alt="Lead Generation">
								</picture>
							</div>
						</div>
						<div class="omark-inner">
							<div class="omark-left">
								<div class="oma-chkin">
									<div class="sub-title">Analytics & Reporting</div>
									<div class="omark-detail">
										<div class="oma-desc">Get insight into what works best. Track calls, monitor web traffic, measure paid ad and social media campaign effectiveness, and report on results.</div>
										<div class="oma-btn"><a href="https://www.surefirelocal.com/software/competitive-analysis/">Learn More</a></div>
									</div>
								</div>
							</div>
							<div class="omark-right">
								<picture>
									<source media="(min-width: 1023.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature5-desktop.webp">
									<source media="(min-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature5-tablet.webp">
									<source media="(max-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature5-mobile.webp">
									<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/feature5-desktop.webp" alt="Analytics & Reporting">
								</picture>
							</div>
						</div>
					</div>
					<div class="oma-buttons">
						<div class="oma-demo"><a href="https://info.surefirelocal.com/lp/demo">Request a Demo</a></div>
						<div class="oma-price"><a href="https://info.surefirelocal.com/lp/pricing">Get Pricing</a></div>
					</div>
				</div>
			</div>
		</div>
		<div class="ind-use-sec">
			<div class="container">
				<div class="ind-use-wrap">
					<div class="ind-use-top">
						<div class="ind-use-title">Industries & Use Cases</div>
						<div class="ind-subtitle">No Matter Your Industry, Rank Higher & Grow Your Business</div>
					</div>
					<div class="ind-use-bottom">
						<div class="ind-use-inn" id="indcase"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="business-revenue-sec">
			<div class="container">
				<div class="birevenue-wrap">
					<div class="bi-revenue-title">Surefire Local Has Helped Small Businesses Win <br> Over $1.8 Billion in New Revenue</div>
					<div class="bi-revenue-inn">
						<div class="revenue-top">
							<div class="bi-block">
								<div class="bi-precent">+82%</div>
								<div class="bi-title">More online reviews</div>
							</div>
							<div class="bi-block">
								<div class="bi-precent">+34%</div>
								<div class="bi-title">Average increase in SEO traffic</div>
							</div>
						</div>
						<div class="revenue-bottom">
							<div class="bi-block">
								<div class="bi-precent">+34%</div>
								<div class="bi-title">Average increase in SEO traffic</div>
							</div>
							<div class="bi-block">
								<div class="bi-precent">+82%</div>
								<div class="bi-title">More online reviews</div>
							</div>
							<div class="bi-block">
								<div class="bi-precent">+386%</div>
								<div class="bi-title">Return on Investment</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="teway-sec">
			<div class="container">
				<div class="teway-wrap">
					<div class="teway-inn">
						<div class="teway-sbtitle">The Surefire Way to 3X Your Traffic, Leads, and Online Rankings</div>
						<div class="teway-btn">
							<div class="teway-demo"><a href="https://info.surefirelocal.com/lp/demo">Request a Demo</a></div>
							<div class="teway-price"><a href="https://info.surefirelocal.com/lp/pricing">Get Pricing</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-sec">
		<div class="container">
			<div class="footer-wrap">
				<div class="footer-top">
					<div class="footer-address">
						<h4 class="foo-title">Company Info</h4>
						<div class="footer-inn">
							<div class="top-addr">
								<div class="addr-title">Vienna, VA</div>
								<div class="addr-detail">8619 Westwood Center Dr., Suite 150 <br> Vienna, VA 22182 <br> (703) 794-4687</div>
							</div>
							<div class="bottom-addr">
								<div class="addr-title">Austin, TX</div>
								<div class="addr-detail">2815 Manor Road Suite 203 <br> Austin, TX 78722 <br> (703) 794-4687</div>
							</div>
						</div>
					</div>
					<div class="footer-row">
						<div class="footer-ink-top">
							<div class="footer-links">
								<h4 class="foo-title">Software</h4>
								<ul>
									<li><a href="https://www.surefirelocal.com/software/platform/">All-in-One Platform</a></li>
									<li><a href="https://www.surefirelocal.com/software/platform/geojuice/">GeoJuice</a></li>
									<li><a href="https://www.surefirelocal.com/software/platform/digital-ads-platform/">Digital Ads Platform</a></li>
									<li><a href="https://www.surefirelocal.com/software/platform/text-go/">Text & Go</a></li>
									<li><a href="https://www.surefirelocal.com/software/online-reviews-listings/">Online Reviews & Listings</a></li>
									<li><a href="https://www.surefirelocal.com/software/marketing/">Marketing</a></li>
									<li><a href="https://www.surefirelocal.com/software/online-advertising/">Online Advertising</a></li>
									<li><a href="https://www.surefirelocal.com/software/lead-generation/">Lead Generation</a></li>
									<li><a href="https://www.surefirelocal.com/software/communications/">Communications</a></li>
								</ul>
							</div>
							<div class="footer-links">
								<h4 class="foo-title">About</h4>
								<ul>
									<li><a href="https://www.surefirelocal.com/why-surefire-local/the-surefire-difference/">The Surefire Difference</a></li>
									<li><a href="https://www.surefirelocal.com/why-surefire-local/the-surefire-difference/competitor-matrix/">Compare</a></li>
									<li><a href="https://www.surefirelocal.com/why-surefire-local/about-us/">About us</a></li>
									<li><a href="https://www.surefirelocal.com/why-surefire-local/contact-us/">Contact us</a></li>
									<li><a href="https://www.surefirelocal.com/blog/category/press-releases/">News</a></li>
									<li><a href="https://www.surefirelocal.com/why-surefire-local/careers/">Careers</a></li>
								</ul>
							</div>
						</div>
						<div class="footer-ink">
							<div class="footer-links">
								<h4 class="foo-title">Solutions</h4>
								<ul>
									<li><a href="https://www.surefirelocal.com/solutions/get-more-reviews/">Get More 5-Star Reviews</a></li>
									<li><a href="https://www.surefirelocal.com/solutions/get-more-online-visibility/">Get More Online Visibility</a></li>
									<li><a href="https://www.surefirelocal.com/solutions/get-more-quality-leads/">Get More Quality Leads</a></li>
									<li><a href="https://www.surefirelocal.com/solutions/get-more-repeat-customers/">Get More Repeat Customers</a></li>
									<li><a href="https://www.surefirelocal.com/solutions/get-more-revenue/">Get More Revenue</a></li>
								</ul>
							</div>
							<div class="footer-links">
								<h4 class="foo-title">Resources</h4>
								<ul>
									<li><a href="https://www.surefirelocal.com/blog/">Blog</a></li>
									<li><a href="https://info.surefirelocal.com/lp/business-listings-tool">Business Listings Scanner</a></li>
									<li><a href="https://www.surefirelocal.com/resources/ebooks/">Ebooks</a></li>
									<li><a href="https://www.surefirelocal.com/resources/success-stories/">Success Stories</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="footer-bottom">
					<div class="footer-bottin">
						<div class="fbottom-left">
							<div class="fsocial-block">
								<ul class="soc-logo">
									<li><a href="https://www.facebook.com/SurefireLocal/"><img src="//res.cloudinary.com/spiralyze/image/upload/v1708933766/SurefireLocal/1066/facebook.svg" alt="Facebook"></a></li>
									<li><a href="https://twitter.com/surefirelocal"><img src="//res.cloudinary.com/spiralyze/image/upload/v1708933745/SurefireLocal/1066/twitter.svg" alt="Twitter"></a></li>
									<li><a href="https://www.linkedin.com/company/Surefire-Local"><img src="//res.cloudinary.com/spiralyze/image/upload/v1708933795/SurefireLocal/1066/linkedin.svg" alt="Linkedin"></a></li>
									<li><a href="https://www.youtube.com/channel/UC_6vjMZC4lrejTtcC8Uthuw"><img src="//res.cloudinary.com/spiralyze/image/upload/v1708933753/SurefireLocal/1066/youtube.svg" alt="Youtube"></a></li>
									<li><a href="https://www.g2.com/products/surefire-local/reviews/start?return_to=https%3A%2F%2Fwww.g2.com%2Fproducts%2Fsurefire-local%2Ftake_survey"><img src="//res.cloudinary.com/spiralyze/image/upload/v1708939913/SurefireLocal/1066/g2-sprite-logo.svg" alt="G2 Sprite Logo"></a></li>
								</ul>
							</div>
							<div class="footer-conlink">
								<a href="https://www.surefirelocal.com/terms-conditions/">Terms & Conditions</a>
								<a href="https://www.surefirelocal.com/privacy-policy/">Privacy Policy</a>
								<a href="https://www.surefirelocal.com/support/">Support</a>
								<a href="https://www.surefirelocal.com/sitemap/">Sitemap</a>
							</div>
						</div>
						<div class="fbottom-right">
							<div class="footer-powerby">Surefire Local, an entity of GenNext Media, Inc. All Rights Reserved</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>`);

    // business logo
    var logos = [
        { alt: "Next Level Roofers", src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/frame_33.webp" },
        { alt: "Eyes On NorBeck", src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/frame_35.webp" },
        { alt: "Barry Best", src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/frame_38.webp" },
        { alt: "Insight Vision Center", src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/frame_36.webp" },
        { alt: "HomeN", src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/frame_37.webp" },
        { alt: "Northern Virginia Doctors Of Optometry", src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/frame_41.webp" },
        { alt: "Budget Blinds", src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/frame_42.webp" },
        { alt: "Hinkle Roofing", src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/frame_43.webp" },
        { alt: "Tyler LLC", src: "//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/frame_34.webp" }
    ];

    var logoContainer = document.getElementById("logoContainer");
    function addLogos() {
        logos.forEach(function (logo) {
            var div = document.createElement("div");
            div.classList.add("buinsite-img");
            div.innerHTML = '<img src="' + logo.src + '" alt="' + logo.alt + '">';
            logoContainer.appendChild(div);
        });
    }
    addLogos();

    for (var i = 0; i < 3; i++) {
        logoContainer.innerHTML += logoContainer.innerHTML;
    }

    // industry section
    var indCaseContainer = document.getElementById("indcase");
    var iuseBlocksHTML = `
	<div class="iuse-block">
		<div class="iuse-ig">
			<picture>
				<source media="(min-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/component_1.webp">
				<source media="(max-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/component_15.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/component_1.webp" alt="Professional Services">
			</picture>
		</div>
		<div class="iuse-detail">
			<div class="iuse-title">Professional Services</div>
			<div class="iuse-desc">Estate planners, financial planners, and other professional services using Surefire Local attract more clients, at a lower cost, with done-for-you business listings and high-converting paid ads.</div>
		</div>
	</div>
	<div class="iuse-block">
		<div class="iuse-ig">
			<picture>
				<source media="(min-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/component_2.webp">
				<source media="(max-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/component_12.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/component_2.webp" alt="Health & Wellness">
			</picture>
		</div>
		<div class="iuse-detail">
			<div class="iuse-title">Health & Wellness</div>
			<div class="iuse-desc">Optometrists, dentists, chiropractors, and other wellness services benefit from getting more reviews while remaining HIPAA compliant. Plus, can schedule and send appointment reminders by text message.</div>
		</div>
	</div>
	<div class="iuse-block">
		<div class="iuse-ig">
			<picture>
				<source media="(min-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/component_4.webp">
				<source media="(max-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/component_6.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/component_4.webp" alt="Home Improvement">
			</picture>
		</div>
		<div class="iuse-detail">
			<div class="iuse-title">Home Improvement</div>
			<div class="iuse-desc">HVAC, roofing, plumbing, painting, landscaping, and other home service businesses use Surefire Local for expert web design and to get new customers in local service areas with keyword targeting.</div>
		</div>
	</div>
	<div class="iuse-block">
		<div class="iuse-ig">
			<picture>
				<source media="(min-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/component_9.webp">
				<source media="(max-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/component_11.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/component_9.webp" alt="Legal Services">
			</picture>
		</div>
		<div class="iuse-detail">
			<div class="iuse-title">Legal Services</div>
			<div class="iuse-desc">During life-changing events, clients want to be able to easily find the right personal injury lawyer, family attorney, or legal professional. Gets your legal firm ranking higher in local search results with done-for-you business listings across 70+ directories.</div>
		</div>
	</div>
	<div class="iuse-block">
		<div class="iuse-ig">
			<picture>
				<source media="(min-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/component_5.webp">
				<source media="(max-width: 767.98px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/component_10.webp">
				<img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/surefirelocal/1066/component_5.webp" alt="Pet Services">
			</picture>
		</div>
		<div class="iuse-detail">
			<div class="iuse-title">Pet Services</div>
			<div class="iuse-desc">Vets, pet spas, and pet food stores use Surefire Local to boost visibility and increase customer loyalty. Outrank competitors so new customers find you first. And retarget existing customers on social media to keep your business top-of-mind.</div>
		</div>
	</div>`;

    for (var i = 0; i < 5; i++) {
        indCaseContainer.innerHTML += iuseBlocksHTML;
    }

    document.querySelector('.site-container .site-header .wrap .nav-primary #mega-menu-wrap-primary #mega-menu-primary > li#mega-menu-item-47999 > a.mega-menu-link').innerText = 'Request a Demo';
    document.querySelector('.site-container .site-header .wrap .nav-primary #mega-menu-wrap-primary #mega-menu-primary > li#mega-menu-item-48850 a.mega-menu-link').innerText = 'Request a Demo';
    document.querySelector('.site-container .site-header .wrap .nav-primary #mega-menu-wrap-primary #mega-menu-primary > li#mega-menu-item-47998 a.mega-menu-link').innerText = 'Login';

    var bodyAtt = document.querySelector('.site-container .site-header .wrap .nav-primary #mega-menu-wrap-primary');
    var checkBtn = setInterval(() => {
        const targetElement = document.querySelector('.site-header .wrap .menu-toggle');
        if (bodyAtt && targetElement) {
            clearInterval(checkBtn);

            targetElement.insertAdjacentHTML('beforebegin', `<div class="site-logo">
				<a class="logo-actual" href="https://www.surefirelocal.com">
					<img class="lazyload" src="//res.cloudinary.com/spiralyze/image/upload/v1709814439/surefirelocal/1066/frame_1171275577.svg" alt="Surefire Local">
				</a>
			</div>`);
        }

        const btnNav = document.querySelector('.site-container .site-header .wrap .menu-toggle');
        const bodyNav = document.querySelector('body');
        if (bodyNav && btnNav) {
            btnNav.addEventListener('click', function () {
                bodyNav.classList.toggle('navactive');
            });
        }
    }, 1000);

    const sections = document.querySelector('.ind-use-inn');
    sections.addEventListener('mouseenter', () => {
        sections.style.animationPlayState = 'paused';
    });

    sections.addEventListener('mouseleave', () => {
        sections.style.animationPlayState = 'running';
    });

    var $j = jQuery.noConflict();
    $j(document).ready(function () {
        $j('.grow-tabcont').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            autoplay: true,
            asNavFor: '.grow-tab'
        });
        $j('.grow-tab').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.grow-tabcont',
            dots: false,
            autoplay: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 767.98,
                    settings: {
                        slidesToShow: 3,
                        centerMode: true,
                        variableWidth: true,
                    }
                }
            ]
        });
    });
}