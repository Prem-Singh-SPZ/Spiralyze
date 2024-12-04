//DEV 1/5. Put your asana task URL here
const asana_URL = `https://app.asana.com/0/1202434538289854/1208642778589288/f`;
//DEV 2/5. Find the class or ID of the control hero section and place it below in "#change_me".  e.g. "#form_123456" or ".form_123456"
const template_heroSelector = `.hero-generic`;
//DEV 3/5. Choose where you redesigned hero section should appear accroding to control hero section row #4
const template_position = "afterbegin"; //"beforebegin", "beforeend", "afterend"
//DEV 4/5. Fill hero content object values. See comments inside for details
const template_heroContent = {
  //[1] Hero eyebrow https://share.cleanshot.com/F7hVvW3B
  contentSuperHeading: "Billing and Financial Reporting Software",
  //[2] TrustBadge https://share.cleanshot.com/z57hpqZD
  trustBadge: [],
  //[3] Hero heading https://share.cleanshot.com/phmyLc70
  contentHeading: "Grow Revenue 14% by Optimizing <br>Subscription Management",
  //[4] Hero subheading https://share.cleanshot.com/QcDrCXGs
  contentSubHeading:"",
  //[5] Tiles section
  tiles: {
	// Tiles section heading
    tilesHeading: `How can we help?`,
    tilesItems: [
      {
        tileImageURL: `//res.cloudinary.com/spiralyze/image/upload/v1731431132/maxio/1002/lucidecalendar-check_3.svg`,
        imageAlt: `Billing`,
        tileHeading: `Billing`,
        tileDescription: ``,
      },
      {
        tileImageURL: `https://res.cloudinary.com/spiralyze/image/upload/v1727717212/Code_Templates_assets/Hero_Tiles/iconoir_network.svg`,
        imageAlt: `some alt`,
        tileHeading: `Headline`,
        tileDescription: `Duis aute irure dolor in reprehenderit`,
      },
      {
        tileImageURL: `https://res.cloudinary.com/spiralyze/image/upload/v1727717211/Code_Templates_assets/Hero_Tiles/hugeicons_security-lock.svg`,
        imageAlt: `some alt`,
        tileHeading: `Headline`,
        tileDescription: `Duis aute irure dolor in reprehenderit`,
      },
      {
        tileImageURL: `https://res.cloudinary.com/spiralyze/image/upload/v1727717212/Code_Templates_assets/Hero_Tiles/iconamoon_profile-light.svg`,
        imageAlt: `some alt`,
        tileHeading: `Headline`,
        tileDescription: `Duis aute irure dolor in reprehenderit`,
      },
      {
        tileImageURL: `https://res.cloudinary.com/spiralyze/image/upload/v1727717213/Code_Templates_assets/Hero_Tiles/solar_key-linear.svg`,
        imageAlt: `some alt`,
        tileHeading: `Headline`,
        tileDescription: `Duis aute irure dolor in reprehenderit`,
      },
      {
        tileImageURL: `https://res.cloudinary.com/spiralyze/image/upload/v1727717212/Code_Templates_assets/Hero_Tiles/iconamoon_cloud.svg`,
        imageAlt: `some alt`,
        tileHeading: `Headline`,
        tileDescription: `Duis aute irure dolor in reprehenderit`,
      },
    ],
  },
  //[6] Hero CTA
  heroCTA: {
    CTAText: "Primary CTA",
    CTAHref: "spiralyze.com",
  },
};
const template_additionalSection = {
  //[7] Interface image after the hero section https://share.cleanshot.com/SR5ZgNQ1
  interfaceImage: [
    {
      breakPoint: 992,
      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/maxio/1002/image_ui.webp",
    },
    {
      breakPoint: 768,
      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/baseline_ui-tablet.png",
    },
    {
      breakPoint: 320,
      url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/baseline_ui-mobile.png",
    },
  ],
  //[8] Social proof logos with heading after interface image https://share.cleanshot.com/7VMjQr0J
  socialProofLogos: {
    socialProofHeading:
      "Over 400,000 Customers from Small Business to Enterprise",
    socialProofImages: [
      {
        breakPoint: 992,
        url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/baseline_socialproof-desktop.png",
      },
      {
        breakPoint: 768,
        url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/baseline_socialproof-tablet.png",
      },
      {
        breakPoint: 320,
        url: "https://res.cloudinary.com/spiralyze/image/upload/f_auto/Code_Templates_assets/SPZ_Baseline/baseline_socialproof-mobile.png",
      },
    ],
  },
};

/***********************************
************************************
DO NOT TOUCH
BEYOND THIS LINE
******************************
************************/
function addHero(formData, whereToPut, template_heroSelector, template_additionalSection) {
  const formTemplate = `
		<div class="spz-bg-wrap">
			  <div class="content-section">
	            ${
                formData.contentSuperHeading.replace(/\s/g, "").length !== 0
                  ? `<div class="content-superheading">${formData.contentSuperHeading}</div>`
                  : ""
              }
	            ${
                formData.trustBadge.length !== 0
                  ? `<div class="trust-badge">
	            	<picture>
		              ${formData.trustBadge
                    .map(
                      (item) =>
                        `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`
                    )
                    .join("")}
		              <img src="${formData.trustBadge[0].url}" alt="trust badge" />
		            </picture>
	            </div>`
                  : ""
              }
	            ${
                formData.contentHeading.replace(/\s/g, "").length !== 0
                  ? `<h1 class="content-heading">${formData.contentHeading}</h1>`
                  : ""
              }
	            ${
                formData.contentSubHeading.replace(/\s/g, "").length !== 0
                  ? `<div class="content-subheading">${formData.contentSubHeading}</div>`
                  : ""
              }
	          </div>
	          ${
              formData.tiles.length !== 0
                ? `<div class="tiles-wrap">
	            			<div class="tiles-heading">${formData.tiles.tilesHeading}</div>
	            			<div class="tiles-items">
	            				${formData.tiles.tilesItems
                        .map((item) => {
                          return `<div class="tile-item">
	            						<img src="${item.tileImageURL}" class="tile-image" alt="${item.imageAlt}"/>
	            						<div class="wrap-tile-info">
		            						<div class="tile-heading">${item.tileHeading}</div>
		            						<div class="tile-description">${item.tileDescription}</div>
		            					</div>
	            					</div>`;
                        })
                        .join("")}
	            			</div>
	            		</div>`
                : ``
            }
	            ${
                typeof formData.heroCTA !== "undefined"
                  ? `<div class="hero-cta-wrap">
	                	<input type="email" id="spz-email" placeholder="Email"/>
	                	<a href=${formData.heroCTA.CTAHref} class="hero-cta">${formData.heroCTA.CTAText}</a>
	                </div>`
                  : ""
              }
	        ${
            typeof template_additionalSection.interfaceImage !== "undefined"
              ? `<div class="interface-image-wrap">
	        	<picture>
	        		${template_additionalSection.interfaceImage
                .map(
                  (item) =>
                    `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`
                )
                .join("")}
	        		<img src="${
                template_additionalSection.interfaceImage[0].url
              }" alt="Interface Image" />
	        	</picture>
	        </div>
	        `
              : ``
          }
	        ${
            typeof template_additionalSection.socialProofLogos !== "undefined"
              ? `<div class="social-proof-logos">
	        	<div class="social-proof-heading">${
              template_additionalSection.socialProofLogos.socialProofHeading
            }</div>
	        	<picture>
	        		${template_additionalSection.socialProofLogos.socialProofImages
                .map(
                  (item) =>
                    `<source media="(min-width:${item.breakPoint}px)" srcset="${item.url}">`
                )
                .join("")}
	        		<img src="${
                template_additionalSection.socialProofLogos.socialProofImages[0].url
              }" alt="Interface Image" />
	        	</picture>
	        </div>
	        `
              : ``
          }
	  </div>`;
  document
    .querySelector(template_heroSelector)
    .insertAdjacentHTML(whereToPut, formTemplate);
  document.querySelectorAll(".tiles-items .tile-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      if (e.target.classList.contains("tile-item")) {
        e.target.classList.toggle("active");
      } else {
        if (e.target.parentElement.classList.contains("tile-item")) {
          e.target.parentElement.classList.toggle("active");
        } else {
          e.target.parentElement.parentElement.classList.toggle("active");
        }
      }
    });
  });
}
addHero(
  template_heroContent, //object with the data
  template_position, //any value you pass using insertAdjacentHTML
  template_heroSelector,
  template_additionalSection
);
