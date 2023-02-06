(function () {
    const cookieName = "#2041_AWR_Product_List";
    const cookieValue = "1";
    const myDate = new Date();
    const imgURL = '//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/2041/Product_Images/';
    const baseUrl = 'https://scpprd.prod.apimanagement.us10.hana.ondemand.com/api/hos/api';
    const apiKey = 'Ng0glnSyFyARBd7AGghwnAAjV1ORz5Vp';

    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;

    const comboManagement = [{
        comboName: "Water Line and Sewer Line Protection Program",
        comboProducts: ["Water Line Protection Program", "Sewer Line Protection Program"]
    },
    {
        comboName: "Unlimited Water Line and Sewer Line Protection Program",
        comboProducts: ["Unlimited Water Line Protection Program", "Unlimited Sewer Line Protection Program"]
    },
    {
        comboName: "Water Line and Sewer Line Unlimited Protection Program",
        comboProducts: ["Water Line Unlimited Protection Program", "Sewer Line Unlimited Protection Program"]
    },
    {
        comboName: "Water Line and Sewer Line Insurance Policy",
        comboProducts: ["Water Line Insurance Policy", "Sewer Line Insurance Policy"]
    },
    {
        comboName: "Water Line & Sewer Line Insurance Policy",
        comboProducts: ["Water Line Insurance Policy", "Sewer Line Insurance Policy"]
    },
    {
        comboName: "Water Line, Sewer Line and In Home Plumbing Insurance Policy",
        comboProducts: ["Water Line Insurance Policy", "Sewer Line Insurance Policy", "In Home Plumbing Insurance Policy"]
    },
    {
        comboName: "Water Line, Sewer Line and In-Home Plumbing Insurance Policy",
        comboProducts: ["Water Line Insurance Policy", "Sewer Line Insurance Policy", "In-Home Plumbing Insurance Policy"]
    },
    {
        comboName: "Water Line, Sewer Line & In Home Plumbing Insurance Policy",
        comboProducts: ["Water Line Insurance Policy", "Sewer Line Insurance Policy", "In Home Plumbing Insurance Policy"]
    },
    {
        comboName: "Water Line, Sewer Line & In-Home Plumbing Insurance Policy",
        comboProducts: ["Water Line Insurance Policy", "Sewer Line Insurance Policy", "In-Home Plumbing Insurance Policy"]
    },
    {
        comboName: "Water Line, Sewer Line and In-Home Plumbing Protection Program",
        comboProducts: ["Water Line Protection Program", "Sewer Line Protection Program", "In-Home Plumbing Emergency Program"]
    },
    {
        comboName: "Water Line, Sewer Line and In Home Plumbing Protection Program",
        comboProducts: ["Water Line Protection Program", "Sewer Line Protection Program", "In Home Plumbing Emergency Program"]
    },
    {
        comboName: "Heating and Cooling System Repair Program",
        comboProducts: ["Heating System Repair Program", "Cooling System Repair Program"]
    },
    {
        comboName: "Heating & Cooling System Repair Program",
        comboProducts: ["Heating System Repair Program", "Cooling System Repair Program"]
    },
    {
        comboName: "Water Line, Sewer Line and In Home Plumbing Emergency Program",
        comboProducts: ["Water Line Protection Program", "Sewer Line Protection Program", "In Home Plumbing Emergency Program"]
    },
    {
        comboName: "Water Line, Sewer Line and In-Home Plumbing Emergency Program",
        comboProducts: ["Water Line Protection Program", "Sewer Line Protection Program", "In-Home Plumbing Emergency Program"]
    }
    ];
    const relatedProducts = [
        {
            productFilterName: 'Water Line and Sewer Line Protection Program',
            productImage: imgURL + 'Water_Line___Sewer_Line_Protection_Program.png',
            popularProduct: 'popular',
        },
        {
            productFilterName: 'Unlimited Water Line and Sewer Line Protection Program',
            productImage: imgURL + 'Water_Line___Sewer_Line_Protection_Program.png',
        },
        {
            productFilterName: 'Water Line, Sewer Line and In-Home Plumbing Emergency Program',
            productImage: imgURL + 'Water_Line_Sewer_Line_and_In-Home_Plumbing.png',
            bestProduct: 'best-product'
        },
        {
            productFilterName: 'Water Line, Sewer Line and In Home Plumbing Emergency Program',
            productImage: imgURL + 'Water_Line_Sewer_Line_and_In-Home_Plumbing.png',
            bestProduct: 'best-product'
        },
        {
            productFilterName: 'Water Line, Sewer Line and In-Home Plumbing Protection Program',
            productImage: imgURL + 'Water_Line_Sewer_Line_and_In-Home_Plumbing.png',
            bestProduct: 'best-product'
        },
        {
            productFilterName: 'Water Line, Sewer Line and In Home Plumbing Protection Program',
            productImage: imgURL + 'Water_Line_Sewer_Line_and_In-Home_Plumbing.png',
            bestProduct: 'best-product'
        },
        {
            productFilterName: 'Water Line, Sewer Line and In Home Plumbing Insurance Policy',
            productImage: imgURL + 'Water_Line_Sewer_Line_and_In-Home_Plumbing.png',
            bestProduct: 'best-product'
        },
        {
            productFilterName: 'Water Line, Sewer Line and In-Home Plumbing Insurance Policy',
            productImage: imgURL + 'Water_Line_Sewer_Line_and_In-Home_Plumbing.png',
            bestProduct: 'best-product'
        },
        {
            productFilterName: 'Water Line Protection Program',
            productImage: imgURL + 'Water_Line_Protection_Program.png',
        },
        {
            productFilterName: 'Unlimited Water Line Protection Program',
            productImage: imgURL + 'Water_Line_Protection_Program.png',
        },
        {
            productFilterName: 'Sewer Line Protection Program',
            productImage: imgURL + 'Sewer_Line_Protection_Program.png',
        },
        {
            productFilterName: 'Unlimited Sewer Line Protection Program',
            productImage: imgURL + 'Sewer_Line_Protection_Program.png',
        },
        {
            productFilterName: 'In-Home Plumbing Emergency Program',
            productImage: imgURL + 'In-Home_Plumbing_Emergency_Program.png',
        },
        {
            productFilterName: 'In Home Plumbing Emergency Program',
            productImage: imgURL + 'In-Home_Plumbing_Emergency_Program.png',
        },
        {
            productFilterName: 'Heating and Cooling System Repair Program',
            productImage: imgURL + 'Heating_and_Cooling_System_Repair_Program.png',
        },
        {
            productFilterName: 'Heating System Repair Program',
            productImage: imgURL + 'Heating_System_Repair_Program.png',
        },
        {
            productFilterName: 'Cooling System Repair Program',
            productImage: imgURL + 'Cooling_System_Repair_Program.png',
        },
        {
            productFilterName: 'Water Heater Repair and Replacement Program',
            productImage: imgURL + 'Water_Heater_Repair_and_Replacement_Program.png',
        },
        {
            productFilterName: 'Gas Line Protection Program',
            productImage: imgURL + 'Gas_Line_Protection_Program.png',
        },
        {
            productFilterName: 'Interior Electric Line Protection Program',
            productImage: imgURL + 'Interior_Electric_Line_Protection_Program.png',
        },
        {
            productFilterName: 'Exterior Electric Line Protection Program',
            productImage: imgURL + 'Exterior_Electric_Line_Protection_Program.png',
        },
        {
            productFilterName: 'In-Home Plumbing Plus Program',
            productImage: imgURL + 'In-Home_Plumbing_Plus_Program.png',
        },
        {
            productFilterName: 'In Home Plumbing Plus Program',
            productImage: imgURL + 'In-Home_Plumbing_Plus_Program.png',
        },
        {
            productFilterName: 'Water Line and Sewer Line Unlimited Protection Program',
            productImage: imgURL + 'Water_Line_and_Sewer_Line_Unlimited_Protection....png',
        },
        {
            productFilterName: 'Water Line Unlimited Protection Program',
            productImage: imgURL + 'Water_Line_Unlimited_Protection_Program.png',
        },
        {
            productFilterName: 'Sewer Line Unlimited Protection Program',
            productImage: imgURL + 'Sewer_Line_Unlimited_Protection_Program.png',
        },
        {
            productFilterName: 'Surge Protection Program',
            productImage: imgURL + 'Surge_Protection_Program.png',
        },
        {
            productFilterName: 'Power Surge Protection Program',
            productImage: imgURL + 'Power_Surge_Protection_Program.png',
        },
        {
            productFilterName: 'Preferred Home Protection Plan',
            productImage: imgURL + 'Product%20Images/Preferred_Home_Protection_Plan.png',
        },
        {
            productFilterName: 'In-Home Plumbing Clog Protection Program',
            productImage: imgURL + 'In-Home_Plumbing_Clog_Protection_Program.png',
        },
        {
            productFilterName: 'In Home Plumbing Clog Protection Program',
            productImage: imgURL + 'In-Home_Plumbing_Clog_Protection_Program.png',
        },
        {
            productFilterName: 'Preferred Exterior Electric Line Protection',
            productImage: imgURL + 'Product%20Images/Preferred_Exterior_Electric_Line_Protection.png',
        },
        {
            productFilterName: 'Energy Essentials Protection Program',
            productImage: imgURL + 'Energy_Essentials_Protection_Program.png',
        },
        {
            productFilterName: 'Well System and Septic Line Protection',
            productImage: imgURL + 'Well_System_and_Septic_Line_Protection.png',
        },
        {
            productFilterName: 'Well Line and Pump Protection Program',
            productImage: imgURL + 'Well_System_and_Septic_Line_Protection.png',
        },
        {
            productFilterName: 'Well System and Septic Line Protection Program',
            productImage: imgURL + 'Well_System_and_Septic_Line_Protection_Program.png',
        },
        {
            productFilterName: 'Septic Line Protection Program',
            productImage: imgURL + 'Septic_Line_Protection.png',
        },
        {
            productFilterName: 'Septic Line Protection',
            productImage: imgURL + 'Septic_Line_Protection.png',
        },
        {
            productFilterName: 'Water Line Insurance Policy',
            productImage: imgURL + 'Water_Line_Insurance_Policy.png',
        },
        {
            productFilterName: 'Sewer Line Insurance Policy',
            productImage: imgURL + 'Sewer_Line_Insurance_Policy.png',
        },
        {
            productFilterName: 'Water Line & Sewer Line Insurance Policy',
            productImage: imgURL + 'Water_Line___Sewer_Line_Insurance_Policy.png',
            popularProduct: 'popular',
        },
        {
            productFilterName: 'Water Line and Sewer Line Insurance Policy',
            productImage: imgURL + 'Water_Line___Sewer_Line_Insurance_Policy.png',
            popularProduct: 'popular',
        },
        {
            productFilterName: 'In Home Plumbing Insurance Policy',
            productImage: imgURL + 'In-Home_Plumbing_Plus_Program.png',
        },
        {
            productFilterName: 'In-Home Plumbing Insurance Policy',
            productImage: imgURL + 'In-Home_Plumbing_Plus_Program.png',
        },
        {
            productFilterName: 'Cooling - Primary Repair Plan',
            productImage: imgURL + 'Cooling_-_Primary_Repair_Plan.png',
        },
        {
            productFilterName: 'Cooling Repair Plan - Primary System',
            productImage: imgURL + 'Cooling_-_Primary_Repair_Plan.png',
        },
        {
            productFilterName: 'Cooling - Secondary Repair Plan',
            productImage: imgURL + 'Cooling_-_Secondary_Repair_Plan.png',
        },
        {
            productFilterName: 'Cooling Repair Plan - Secondary System',
            productImage: imgURL + 'Cooling_-_Secondary_Repair_Plan.png',
        },
        {
            productFilterName: 'Preferred Cooling - Primary System Protection Plan',
            productImage: imgURL + 'Preferred_Cooling_-_Primary_System_Protection_Plan.png',
        },
        {
            productFilterName: 'Preferred Cooling Protection Plan - Primary System',
            productImage: imgURL + 'Preferred_Cooling_-_Primary_System_Protection_Plan.png',
        },
        {
            productFilterName: 'Water Service Line Protection Program',
            productImage: imgURL + 'Water_Service_Line_Protection_Program.png',
        },
        {
            productFilterName: 'Sewer Service Line Repair Plan',
            productImage: imgURL + 'Sewer_Service_Line_Repair_Plan.png',
        },
        {
            productFilterName: 'Sewer Service Line Protection Program',
            productImage: imgURL + 'Sewer_Service_Line_Repair_Plan.png',
        },
        {
            productFilterName: 'Preferred Cooling - Secondary System Protection Plan',
            productImage: imgURL + 'Preferred_Cooling_-_Secondary_System.png',
            popularProduct: 'popular',
        },
        {
            productFilterName: 'Preferred Cooling Protection Plan - Secondary System',
            productImage: imgURL + 'Preferred_Cooling_-_Secondary_System.png',
            popularProduct: 'popular',
        },
    ];
    async function getPrice(price) {
        return '<div class="price">' + price + '<span class="per-month"> / Month</span></div> <span id="savetext"></span>';
    }

    function noProducts() {
        if (jQuery(".page-wrap.product-list > div:first-child").html() === "There are currently no additional protection plans available in your area. Please continue to check back for new programs.") {
            return true;
        }
        return false;
    }
    async function getImage(title) {
        for (let i = 0; i < relatedProducts.length; i++) {
            let text = relatedProducts[i].productFilterName;
            if (text == title) {
                return relatedProducts[i].productImage;
            }
        }
    }
    async function getPopular(title) {
        for (let i = 0; i < relatedProducts.length; i++) {
            const text = relatedProducts[i].productFilterName;
            const popular = relatedProducts[i].popularProduct;
            if (text == title) {
                if (popular != undefined) {
                    return relatedProducts[i].popularProduct;
                }
            }
        }
    }

    async function getBest(title) {
        for (let i = 0; i < relatedProducts.length; i++) {
            const text = relatedProducts[i].productFilterName;
            const popular = relatedProducts[i].bestProduct;
            if (text == title) {
                if (popular != undefined) {
                    return relatedProducts[i].bestProduct;
                }
            }
        }
    }
    setInterval(function () {
        if (noProducts()) {
            jQuery(".products-wrapper").remove();
            if (jQuery(".noproducts-wrapper").length === 0) {
                jQuery("header").after('<div class="noproducts-wrapper"><div class="noproducts-inner"> <p>There are currently no additional protection plans available in your area. Please continue to check back for new programs.</p> </div></div>');
            }
        } else {
            jQuery(".noproducts-wrapper").remove();
        }
    }, 1000);
    function createTest() {
        if (navigator.userAgent.indexOf('Mac OS X') != -1) {
            jQuery("body").addClass("mac");
        }
        jQuery("body").addClass("spz-2041");

        let ourProducts = [];
        const productsCheck = setInterval(async function () {
            if (jQuery(".page-wrap.product-list .product-item .card").length != 0) {
                await jQuery(".products-wrapper").remove();
                //.product-list-area.content-section
                jQuery("hos-products .product-list-area.content-section").after('<div class="products-wrapper"><div class="products-inner"> <div class="products-boxes"> </div></div></div>');
                await jQuery(".products-wrapper .products-boxes").html("");
                const products = await jQuery(".page-wrap.product-list .product-item .card");
                if (document.querySelector('.products-wrapper')) {
                    document.querySelector('.product-list-area.content-section').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                }
                let priority = 10;
                for await (product of products) {
                    const singleProduct = {};
                    let name = jQuery(product).find(".program-name").html().trim();
                    let price = jQuery(product).find(".price-cls .notranslate").html().trim();
                    // let icon = jQuery(product).find(".product-icon").attr('src');
                    let priceToShow = await getPrice(price);
                    let image = await getImage(name.replaceAll("&amp;", "&"));
                    let popularItem = await getPopular(name);
                    let bestProductItem = await getBest(name);
                    singleProduct["target"] = name.replaceAll("&amp;", "&");
                    // let newName = name.replaceAll("Protection Program", "").replace("Program", "").replaceAll("Repair", "");
                    // if (newName.indexOf("Policy") > -1) {
                    //     newName = newName;
                    // } else {
                    //     newName = newName + " Repair Plan"
                    // }
                    // singleProduct["name"] = newName;
                    let newName = name.replaceAll("Emergency Plumbing", "Plumbing Emergency").replaceAll("and In Home", "and In-Home").replaceAll("In Home", "In-Home");
                    singleProduct["name"] = newName;
                    //singleProduct["name"] = name;
                    singleProduct["productClass"] = name.replace(/[^\w\s]/gi, '_').replaceAll(" ", "_");
                    singleProduct["price"] = price;
                    // singleProduct["icon"] = icon;
                    singleProduct["priceToShow"] = priceToShow;
                    singleProduct["image"] = image;
                    singleProduct["popularItem"] = popularItem;
                    singleProduct["bestProductItem"] = bestProductItem;
                    if (name.toLowerCase() === "water line and sewer line protection program" || name.toLowerCase() === "water line and sewer line insurance policy") {
                        singleProduct["priority"] = 0;
                    } else {
                        singleProduct["priority"] = priority;
                    }
                    priority += 1;
                    ourProducts.push(singleProduct);
                }
                jQuery(".product-list-header .zipcode-box button.change-link").text("Change");
                jQuery(".spz-2041 .product-list-area > .page-wrap.set-pad > .product-list-header .zipcode-box button.product-page-search > div.price").text("Search");
                const sortedProducts = ourProducts.slice().sort(function (a, b) { return a.priority - b.priority });
                if (sortedProducts.length < 3) {
                    jQuery(".products-boxes").addClass("justify-content-center");
                }
                jQuery.each(sortedProducts, function (index, value) {
                    jQuery(".products-wrapper .products-boxes").append(`
                    <div data-targettitle="${value.target}" class="products-single-box product-card-spz ${value.productClass} ${value.popularItem} ${value.bestProductItem}">
                        <div class="product-text prod-card">
                        <div class="product-image" style="background-image:url(${value.image})"> <button class="prod-info"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1675407979/AWR/2041/2041-After-Control-Update/assets/info-icon.svg" class="info-blue" alt="get-coverage"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1675420458/AWR/2041/2041-After-Control-Update/assets/info_hover.svg" class="info-hover" alt="get-coverage"></img></button></div>
                        <div class=" prod-feature">
                        <button class="prod-cross"><img src="https://res.cloudinary.com/spiralyze/image/upload/v1675407994/AWR/2041/2041-After-Control-Update/assets/cross-icon.svg" alt="get-card"></img></button>
                        <div class="product-feature">
                        <ul class="product-feature-list"><p>What's Covered</p></ul>
                            </div>
                           </div>
                        <div class="product-title">
                        <h1>${value.name}</h1>
                        </div>
                            <div class="product-cart-info">
                                <div class="product-pricing">${value.priceToShow}</div>
                                <button class="enroll-now-spz">Enroll Now 
                                    </button></div></div>

                                    
                                    `);

                });
                jQuery.each(comboManagement, function (index, cmbo) {
                    let totalprice = 0;
                    let comboPrice = 0;
                    if (document.querySelector('div[data-targettitle="' + cmbo.comboName + '"] .product-pricing > div.price')) {
                        comboPrice = document.querySelector('div[data-targettitle="' + cmbo.comboName + '"] .product-pricing > div.price').innerText;
                        comboPrice = Number(comboPrice.replaceAll("$", "").replace(" / Month",""));
                    }
                    jQuery.each(cmbo.comboProducts, function (ind, intProduct) {
                        if (document.querySelector('div[data-targettitle="' + intProduct + '"] .product-pricing > div.price')) {
                            const singlePrice = document.querySelector('div[data-targettitle="' + intProduct + '"] .product-pricing > div.price').innerText;
                            totalprice += Number(singlePrice.replaceAll("$", "").replace(" / Month",""));
                            const finalprice = (totalprice - comboPrice).toFixed(2);
                            if (comboPrice > 0 && finalprice >= 1) {
                                // console.log(finalprice)
                                jQuery('div[data-targettitle="' + cmbo.comboName + '"] .product-pricing #savetext').html('save $' + finalprice + '');
                                jQuery('div[data-targettitle="' + cmbo.comboName + '"] .product-pricing #savetext').addClass('show-save');
                                jQuery('div[data-targettitle="' + cmbo.comboName + '"]').addClass('amount-save');
                            }
                        }

                    })
                })
                jQuery(".products-single-box .product-text button.enroll-now-spz").on("click", async function (e) {
                    e.preventDefault();
                    const linksControl = await jQuery(".page-wrap.product-list .product-item .card");
                    for await (const link of linksControl) {
                        if (jQuery(this).closest(".products-single-box").attr("data-targettitle") === jQuery(link).find(".program-name").html().trim().replaceAll("&amp;", "&")) {
                            jQuery(link).find(".enroll-now").click();
                            return;
                        }
                    }
                });

                if (jQuery(window).width() > 1023) {
                    jQuery(".products-single-box .prod-card .prod-info").on("click mouseenter", function (e) {
                        e.stopPropagation();
                        setTimeout(() => {
                            jQuery(this).closest(".products-single-box").addClass('active');
                        }, 500);
                    });

                    jQuery(".products-single-box .prod-feature .prod-cross").on("click", function (e) {
                        e.stopPropagation();
                        jQuery(this).closest(".products-single-box").removeClass('active');
                    });
                }
                else {
                    jQuery(".products-single-box .prod-card .prod-info").on("click", function (e) {
                        jQuery(this).closest(".products-single-box").addClass('active');
                        e.stopPropagation();
                    });

                    jQuery(".products-single-box .prod-feature .prod-cross").on("click", function (e) {
                        jQuery(this).closest(".products-single-box").removeClass('active');
                        e.stopPropagation();
                    });
                }


                clearInterval(productsCheck);
                console.log('interval removed')
                if (document.querySelector('.product-card-spz') && document.querySelectorAll('.product-card-spz[data-program-id]').length == 0) {
                    await getProducts();
                }
            }

        }, 100);

    }

    // // Open PDP on card click
    jQuery("body").on("click", ".products-single-box .product-image, .products-single-box .product-text > a, .products-single-box .product-text .product-title > h1", async function (e) {
        e.preventDefault();

        // const programId = jQuery(this).parents('.product-card-spz').data("program-id");
        // console.log('Clicked: ', programId);
        // console.log(await getProductDetails(programId));
        const linksControl = await jQuery(".page-wrap.product-list .product-item .card");
        for await (const link of linksControl) {
            if (jQuery(this).closest(".products-single-box").attr("data-targettitle") === jQuery(link).find(".program-name").html().trim().replaceAll("&amp;", "&")) {
                jQuery(link).find(".program-name").click();
                return;
            }
        }
    });

    // jQuery(window).on('resize', function () {
    //     url = location.href;
    //     urlCheck(url);
    // });

    async function removeTest() {
        jQuery("body").removeClass("spz-2041");
        jQuery(".products-wrapper").remove();
        jQuery(".noproducts-wrapper").remove();
    }

    history.pushState = (function (f) {
        return function pushState() {
            const ret = f.apply(this, arguments);
            window.dispatchEvent(new Event("pushstate"));
            window.dispatchEvent(new Event("locationchange"));
            return ret;
        };
    })(history.pushState);
    history.replaceState = (function (f) {
        return function replaceState() {
            const ret = f.apply(this, arguments);
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


    let something = (function () {
        let executed = false;
        return function () {
            if (!executed) {
                executed = true;
                url = location.href;
                urlCheck(url);
            }
        };
    })();

    url = location.href;
    urlCheck(url);

    jQuery(document).on('click', '.product-page-search', function () {
        if (jQuery('hos-google-places .search-field.is-invalid').length == 0 && jQuery('hos-google-places .search-zipcode').val().length > 4) {
            something();
        }
    });

    function urlCheck(url) {
        let allBlogsUrlString = "";
        if (window.location.pathname.indexOf("/products/") > -1) {
            allBlogsUrlString = window.location.href;
        }
        if (isSameUrl(url, allBlogsUrlString, true)) {
            createTest();
        } else {
            removeTest();
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

    // Functions regarding API calls
    async function getProducts() {
        let zipCode;
        if (JSON.parse(localStorage.getItem('selectedAddress')) == null || JSON.parse(localStorage.getItem('selectedAddress')) == '') {
            let getPinLength = location.href.split('/').indexOf('products') + 1;
            zipCode = +location.href.split('/')[getPinLength];
        } else {
            zipCode = JSON.parse(localStorage.getItem('selectedAddress')).zipcode;
        }
        try {
            const zipResult = await getZipCode(zipCode);
            // const locResult = await getLocationCode(zipResult.locationCodeId);
            // const microSiteResult = await getMicroSite(locResult.locationCode);
            const defaultCodes = await getDefaultCodes(
                zipResult.locationCodeId,
                zipResult.syncSource
            );

            //  console.log(defaultCodes);

            defaultCodes.result.forEach((prodList, k) => {

                document.querySelectorAll(".products-wrapper .products-boxes .product-card-spz").forEach((viewProd, i) => {
                    let prName = viewProd.getAttribute('data-targettitle');
                    // prodList.customerProgramName = prodList.customerProgramName.replaceAll("-", "");
                    // console.log(prName, '=' + prodList.webProgramName);
                    // console.log('prName: ', prName);
                    if (prodList.webProgramName == prName && viewProd.querySelectorAll('.product-feature-list li').length < 1) {
                        // console.log('viewProd: ', viewProd.getAttribute('data-targettitle'))
                        prodList.coveredRepairs.forEach((feature) => {
                            viewProd.querySelector('.product-feature-list').insertAdjacentHTML('beforeend', '<li>' + feature.value + '</li>');
                        });
                    }

                });
            });
        } catch (error) {
            if (error.status === 404) {
                return { status: 'error', error: 'Zipcode not found' };
            } else if (error.status === 500) {
                return { status: 'error', error: 'No marketing codes found' };
            } else {
                return;
            }
        }
    }

    async function getZipCode(zipCode) {
        const result = await fetch(`${baseUrl}/location/zip_codes/${zipCode}?APIKey=${apiKey}`);
        if (result.status === 404) {
            throw { status: 404 };
        }

        return result.json();
    }

    async function getDefaultCodes(locationId, syncSource) {
        const urlSplit = location.href.split('/');
        const proSelDetail = JSON.parse(localStorage.getItem('providerSelectionDetails'));
        const isProSel = proSelDetail && (undefined != proSelDetail.providerValue && proSelDetail.providerValue == 'no');
        let migrateToOracle = syncSource === 'oracle' ? 'true' : 'false';
        let dcUrl = `${baseUrl}/product/marketing-codes/default-codes?location_code=${locationId}&allProducts=true&APIKey=${apiKey}`;

        if (isProSel) {
            const locCode = proSelDetail.locationCodeId || localStorage.getItem('location_code');
            if ((urlSplit.indexOf('products') > -1) && (location.href.indexOf('150') > -1)) {
                migrateToOracle = true;
            }
            dcUrl = `${baseUrl}/product/marketing-codes/default-codes?contact_type=1&allProducts=true&location_code=${locCode}&APIKey=${apiKey}`;
        }

        const result = await fetch(dcUrl,
            {
                headers: {
                    'Migrated-To-Oracle': migrateToOracle,
                },
                method: 'GET',
            }
        );
        if (result.status === 500) {
            throw { status: 500 };
        }
        return result.json();
    }
})();