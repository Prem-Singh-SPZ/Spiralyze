//DEV 1/5. Put your asana task URL here
const asana_URL = `https://app.asana.com/0/1201456438741653/1208788439805019/f`

//DEV 2/5. Find the class or ID of the control hero section and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
const template_sectionSelector = `main .banner2`;

//DEV 3/5. Choose where you redesigned hero section should appear
const template_position = "beforebegin" //"beforebegin", "beforeend", "afterend"

//DEV 4/5. Fill sectionContent object values. See comments inside for details
const template_sectionContent = {
	//[1] Heading https://share.cleanshot.com/S9Kb8KFx
  sectionHeading: "See how SailPoint helps secure every identity and protect your enterprise.",
  //[2] Sub-heading https://share.cleanshot.com/Z2wDnbTC
  sectionSubHeading: "How we help",
  //[3] Accordion items. Add as many as you want. Each accordion item has title, headline, content, image and CTA block https://share.cleanshot.com/8zYkVYJT
  accordionItems:[
    {
        title: 'Lifecycle Management', //Title in the navigation bar
        headline: 'Lifecycle Management', //Headline of the accordion item
        content: 'Manage all your identities and evolving access privileges with AI-powered insights and processes.',
        image:[
        	{
		      breakPoint: 992,
		      url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img.webp",
		    },
        	{
		      breakPoint: 768,
		      url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img.webp",
		    },
		    {
		      breakPoint: 320,
		      url: "//res.cloudinary.com/spiralyze/image/upload/f_auto/sailpoint/2008/hero-img.webp",
		    },
        ],
        CTABlock: [
		  	{
			  	CTAText: "Get a demo",
			  	CTAHref: "/demo",
			  	className: `spz-primary inner-accordion btn btn--hotpink`
		  	},
		]
        
    },
    {
        title: 'Compliance',
        headline: 'Accordion Headline 2',
        content: 'Subhead (regular paragraph) - consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image:[
        	{
		      breakPoint: 992,
		      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/accordion-image-placeholder-desktop.png",
		    },
        	{
		      breakPoint: 768,
		      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/accordion-image-placeholder-tablet.png",
		    },
		    {
		      breakPoint: 320,
		      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/accordion-image-placeholder-mobile.png",
		    },
        ],
        CTABlock: [
			{
				CTAText: "Get a demo",
				CTAHref: "/demo",
				className: `spz-primary inner-accordion btn btn--hotpink`
			},
		]
        
    },
    {
        title: 'Access Modeling',
        headline: 'Accordion Headline 3',
        content: 'Subhead (regular paragraph) - consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image:[
        	{
		      breakPoint: 992,
		      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/accordion-image-placeholder-desktop.png",
		    },
        	{
		      breakPoint: 768,
		      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/accordion-image-placeholder-tablet.png",
		    },
		    {
		      breakPoint: 320,
		      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/accordion-image-placeholder-mobile.png",
		    },
        ],
        CTABlock: [
			{
				CTAText: "Get a demo",
				CTAHref: "/demo",
				className: `spz-primary inner-accordion btn btn--hotpink`
			},
		]
        
    },
    {
        title: 'Analytics',
        headline: 'Accordion Headline 4',
        content: 'Subhead (regular paragraph) - consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image:[
        	{
		      breakPoint: 992,
		      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/accordion-image-placeholder-desktop.png",
		    },
        	{
		      breakPoint: 768,
		      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/accordion-image-placeholder-tablet.png",
		    },
		    {
		      breakPoint: 320,
		      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/accordion-image-placeholder-mobile.png",
		    },
        ],
        CTABlock: [
		  	{
			  	CTAText: "Primary CTA",
			  	CTAHref: "spiralyze.com",
			  	className: "spz-primary inner-accordion"
		  	},
		  	{
			  	CTAText: "Secondary CTA",
			  	CTAHref: "spiralyze.com",
			  	className: "spz-secondary inner-accordion"
		  	}
		]
        
    },
    {
        title: 'AI and Machine Learning',
        headline: 'Accordion Headline 5',
        content: 'Subhead (regular paragraph) - consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image:[
        	{
		      breakPoint: 992,
		      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/accordion-image-placeholder-desktop.png",
		    },
        	{
		      breakPoint: 768,
		      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/accordion-image-placeholder-tablet.png",
		    },
		    {
		      breakPoint: 320,
		      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/accordion-image-placeholder-mobile.png",
		    },
        ],
        CTABlock: []
        
    },
  ],
  CTABlock: [
  ]
};

/***********************************
************************************
DO NOT TOUCH
BEYOND THIS LINE
******************************
************************/
//Helper function to add input listeners like focus, blur and add class to parent div
function addHorizontalAccordion(content, whereToPut, template_sectionSelector) {
  const formTemplate = `
		<div class="spz-bg-wrap">
			<div class="spz-solution-accordion__wrapper">
			<div class="features-subheading">${content.sectionSubHeading}</div>
			<div class="features-heading">${content.sectionHeading}</div>
			  <div class="spz-solution-accordion">
				<div class="mobile-scroll">
				    <ul class="spz-solution-accordion__nav">
				    ${content.accordionItems.map(item=>{
				    	return`
				    	<li class="spz-solution-accordion__item">
					        <span>${item.title}</span>
					        <div class="progress_bar"></div>
					    </li>
				    	`
				    }).join("")}
				    </ul>
			    </div>
			    <div class="spz-solution-accordion__contents">
			    	${content.accordionItems.map(item=>{
			    		return `
			    		<div class="content">
					        <div class="spz-solution-accordion__mobile">
					          ${item.title}
					          <div class="progress_bar"></div>
					        </div>
					        <div class="solution__image">
					          <picture>
					        	${item.image.map(image=>`<source media="(min-width:${image.breakPoint}px)" srcset="${image.url}" />`).join("")}
					            <img src="${item.image[0].url}" alt="${item.headline}" />
					          </picture>
					        </div>
					        <div class="solution__content">
					          <h2>${item.headline}</h2>
					          <p>${item.content}</p>
					          <div class="spz-ctas-wrap">
				         		${item.CTABlock.map(item=>`<a href=${item.CTAHref} class="${item.className}">${item.CTAText}</a>`).join('')}
				         	   </div>
					        </div>
					      </div>
			    		`
			    	}).join("")
			    	}
			    </div>
			  </div>
			</div>
			${
	         	content.CTABlock.length !== 0
	         	? `<div class="spz-ctas-wrap separate-block">
	         		${content.CTABlock.map(item=>`<a href=${item.CTAHref} class="${item.className}">${item.CTAText}</a>`).join('')}
	         	   </div>`
	         	: ""
	         }
		</div>`;
  document
    .querySelector(template_sectionSelector)
    .insertAdjacentHTML(whereToPut, formTemplate);
  // Start of Accordion Logic
        const DURATION = 7000; // 7 seconds
        const accordionNav = document.querySelector('.spz-solution-accordion__nav');
        const accordionContents = document.querySelector('.spz-solution-accordion__contents');
        const NoOfAccordion = content.accordionItems.length;
        let currentActive = 0;
        let currentSlideProgress = 0;
        let autoSlide = false;

        // Initialize Accordion active item 
        accordionNav.children[currentActive].classList.add('active');
        accordionContents.children[currentActive].classList.add('active');

        // Add event listeners to accordion navigation items for hover functionality
        Array.from(accordionNav.children).forEach((item, index) => {
            item.addEventListener('click', (e)=> {
                e.preventDefault();
                if(currentActive !== index){
                    changeAccordionActiveItem(index);
                }
            });
            // item.addEventListener('mouseenter', (e) => {
            //     e.preventDefault();
            //     if(currentActive === index){
            //         autoSlide = false;
            //     }
            // });
            // item.addEventListener('mouseleave', (e) => {
            //     e.preventDefault();
            //     if(currentActive === index){
            //         autoSlide = true;
            //     }
            // });
        });

         // Add event listeners to accordion content items for hover functionality
         Array.from(accordionContents.children).forEach((item, index) => {
            item.querySelector('.spz-solution-accordion__mobile').addEventListener('click', (e)=> {
                e.preventDefault();
                if(currentActive !== index){
                    changeAccordionActiveItem(index);
                }
            });
            // item.addEventListener('mouseenter', (e) => {
            //     e.preventDefault();
            //     if(currentActive === index){
            //         autoSlide = false;
            //     }
            // });
            // item.addEventListener('mouseleave', (e) => {
            //     e.preventDefault();
            //     if(currentActive === index){
            //         autoSlide = true;
            //     }
            // });
        });

        // Running Interval
        const autoSlideInterval = setInterval(function(){
            if(!autoSlide) return;
            if(currentSlideProgress >= 100) {
                currentActive = (currentActive + 1 >= NoOfAccordion) ? 0 : (currentActive + 1);
                changeAccordionActiveItem(currentActive);
            } else {
                currentSlideProgress = currentSlideProgress + (100 * 200 / DURATION);
                progressBarWidthAnimation(currentActive, currentSlideProgress);
            }
        }, 200);

        // Methods
        function progressBarWidthAnimation(active, width){
            accordionNav.children[active].querySelector('.progress_bar').style.width = `${width}%`;
            accordionContents.children[active].querySelector('.progress_bar').style.width = `${width}%`;
        }
        function changeAccordionActiveItem(current){
            currentSlideProgress = 0;
            currentActive = current;
            // Remove all active classes
            for(let i = 0; i < NoOfAccordion; i++){
                accordionNav.children[i].classList.remove("active");
                accordionContents.children[i].classList.remove("active");
                progressBarWidthAnimation(i, currentSlideProgress);
            }
            // Add active class to current item
            accordionNav.children[current].classList.add('active');
            accordionContents.children[current].classList.add("active");
            
        }
}
addHorizontalAccordion(
	template_sectionContent, //object with the data
  template_position, //any value you pass using insertAdjacentHTML
  template_sectionSelector
);
