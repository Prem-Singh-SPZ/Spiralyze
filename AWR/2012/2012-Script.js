var cookieName = "#2012_AWR_Product_List_Show_product_info_on_hover",
    cookieValue = "1",
    myDate = new Date();
myDate.setDate(myDate.getDate() + 30), (document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate);

const comboManagement = [
    { comboName: "Water Line and Sewer Line Protection Program", comboProducts: ["Water Line Protection Program", "Sewer Line Protection Program"] },
    { comboName: "Water Line and Sewer Line Unlimited Protection Program", comboProducts: ["Water Line Unlimited Protection Program", "Sewer Line Unlimited Protection Program"] },
    { comboName: "Water Line and Sewer Line Insurance Policy", comboProducts: ["Water Line Insurance Policy", "Sewer Line Insurance Policy"] },
    { comboName: "Water Line & Sewer Line Insurance Policy", comboProducts: ["Water Line Insurance Policy", "Sewer Line Insurance Policy"] },
    { comboName: "Water Line, Sewer Line and In-Home Plumbing Insurance Policy", comboProducts: ["Water Line Insurance Policy", "Sewer Line Insurance Policy", "In-Home Plumbing Insurance Policy"] },
    { comboName: "Water Line, Sewer Line & In-Home Plumbing Insurance Policy", comboProducts: ["Water Line Insurance Policy", "Sewer Line Insurance Policy", "In-Home Plumbing Insurance Policy"] },
    { comboName: "Heating & Cooling System Repair Program", comboProducts: ["Heating System Repair Program", "Cooling System Repair Program"] },
    { comboName: "Heating and Cooling System Repair Program", comboProducts: ["Heating System Repair Program", "Cooling System Repair Program"] },
    { comboName: "Water Line, Sewer Line and In-Home Plumbing Emergency Program", comboProducts: ["Water Line Protection Program", "Sewer Line Protection Program", "In-Home Plumbing Emergency Program"] },
];

const productDescription = [
    { pName: "Water_Line_Protection_Program", pDescription: "Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear." },
    { pName: "Sewer_Line_Protection_Program", pDescription: "Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear." },
    { pName: "Water_Line_and_Sewer_Line_Protection_Program", pDescription: "Cover your repairs to leaks and breaks of a covered water line, or repairs to leaks, clogs and blockages of a covered sewer line caused by normal wear and tear." },
    { pName: "Water_Line__Sewer_Line_and_In_Home_Plumbing_Emergency_Program", pDescription: "Protect 3 service lines in 1 plan and save on your monthly cost \u2013 and get protection for water line, sewer line, or in-home plumbing." },
    { pName: "In_Home_Plumbing_Emergency_Program", pDescription: "Cover your home interior water and sewer pipes, including overflowing toilets and broken water pipes under your sink or behind the walls." },
    { pName: "Heating_and_Cooling_System_Repair_Program", pDescription: "Protect the heating and cooling systems and avoid the hassle and cost of repairs." },
    { pName: "Heating_System_Repair_Program", pDescription: "Get protection for your heating system including labor and materials for those repairs." },
    { pName: "Cooling_System_Repair_Program", pDescription: "Protect your cooling system including labor and materials for those repairs." },
    { pName: "Water_Heater_Repair_and_Replacement_Program", pDescription: "Cover your water heater fails due to normal wear and tear. Get replacement through one of our service providers." },
    { pName: "Gas_Line_Protection_Program", pDescription: "Get repairs from leaks in the exposed interior natural gas pipes running through your house as well as the flexible connectors due to normal wear or defects." },
    { pName: "Interior_Electric_Line_Protection_Program", pDescription: "Get protected from interior electric line failures including costs like contractor, labor, parts, and even paperwork." },
    { pName: "Exterior_Electric_Line_Protection_Program", pDescription: "Cover your repairs to overhead and underground exterior electric lines, including the permanent wiring to fixtures such as light posts, detached garages and pool pumps." },
    { pName: "In_Home_Plumbing_Plus_Program", pDescription: "Protect your home\u2019s interior water supply and wastewater drainage systems. Think overflowing toilet, broken water pipe under your sink (or behind the walls)." },
    { pName: "Water_Line_and_Sewer_Line_Unlimited_Protection_Program", pDescription: "Bundle your protection on your home\u2019s water and sewer lines and save on your monthly payment." },
    { pName: "Water_Line_Unlimited_Protection_Program", pDescription: "Get coverage for repairs to a broken or leaking water pipe. Normal wear and tear, corrosion, or even soil conditions." },
    { pName: "Sewer_Line_Unlimited_Protection_Program", pDescription: "Cover your repairs to a clogged, blocked, or leaking sewer pipe." },
    { pName: "Surge_Protection_Program", pDescription: "Our Surge Protection Program gives you financial protection for all your home\u2019s electronics and electric appliances valued at $100 or more." },
    { pName: "Power_Surge_Protection_Program", pDescription: "Power surges can happen at any time & lead to sudden death for your appliances. It's not always covered by homeowners insurance. With AWR your appliances are protected." },
    { pName: "Cooling_Repair_Plan___Primary_System", pDescription: "With the Cooling Repair Plan, you\u2019ll have peace of mind if your air conditioner or heat pump needs to be repaired." },
    { pName: "Cooling_Repair_Plan___Secondary_System", pDescription: "With the Cooling Repair Plan, you\u2019ll have peace of mind if your air conditioner or heat pump needs to be repaired." },
    { pName: "Preferred_Cooling_Protection_Plan___Primary_System", pDescription: "With Preferred Cooling Protection, you\u2019ll be protected against the unexpected if your air conditioner or heat pump needs to be repaired or replaced." },
    { pName: "Preferred_Cooling_Protection_Plan___Secondary_System", pDescription: "With Preferred Cooling Protection, you\u2019ll be protected against the unexpected if your air conditioner or heat pump needs to be repaired or replaced." },
    { pName: "In_Home_Plumbing_Clog_Protection_Program", pDescription: "With this protection program, help is just a phone call away. We\u2019ll send out a pre-qualified local service provider to clear any clogs or blockages you can\u2019t prevent." },
    { pName: "Energy_Essentials_Protection_Program", pDescription: "This valuable bundled package provides repair coverage for gas lines, electric lines, and expense of damage to electronics from electric surges. " },
    { pName: "Well_System_and_Septic_Line_Protection_Program", pDescription: "This combo plan offers the best value and covers everything covered under Septic line and Well line protection." },
    { pName: "Well_Line_and_Pump_Protection_Program", pDescription: "The plan covers the line from the house to the well tank, Pressure tank, Well pump, shutoff valves, Pressure gauges, & Electric cable." },
    { pName: "Septic_Line_Protection_Program", pDescription: "Avoid Unexpected, Costly Repairs to Your Home's Septic System. The plan covers clogs and blockages." },
    { pName: "Water_Line_Insurance_Policy", pDescription: "Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear." },
    { pName: "Sewer_Line_Insurance_Policy", pDescription: "Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear." },
    { pName: "Water_Line_and_Sewer_Line_Insurance_Policy", pDescription: "Cover your repairs to leaks and breaks of a covered water line, or repairs to leaks, clogs and blockages of a covered sewer line caused by normal wear and tear." },
    { pName: "Water_Line__Sewer_Line_and_In_Home_Plumbing_Insurance_Policy", pDescription: "Protect 3 service lines in 1 plan and save on your monthly cost \u2013 and get protection for water line, sewer line, or in-home plumbing." },
    { pName: "In_Home_Plumbing_Insurance_Policy", pDescription: "Cover your homeÃ¢â‚¬â„¢s interior water and sewer pipes including overflowing toilets, and broken water pipes under your sink or behind the walls." },
    { pName: "Water_Service_Line_Protection_Program", pDescription: "Covers the cost of repairing the residential water line to your house and basic restoration to the repair site." },
    { pName: "Sewer_Service_Line_Protection_Program", pDescription: "It\u2019s a protection plan that covers repairs to a clogged, blocked, or leaking sewer pipe including basic site restoration." },
];

async function getPrice(title, price) {
    return '<span class="price">' + price + '</span> <span id="savetext">per month</span>';
}

function noProducts() {
    if (jQuery(".page-wrap.product-list > div:first-child").html() === "There are currently no additional protection plans available in your area. Please continue to check back for new programs.") {
        return true;
    }
    return false;
}
setInterval(function() {
    if (noProducts()) {
        jQuery(".products-wrapper").remove();
        if (jQuery(".noproducts-wrapper").length === 0) {
            jQuery("header").after('<div class="noproducts-wrapper"><div class="noproducts-inner"> <p>There are currently no additional protection plans available in your area. Please continue to check back for new programs.</p> </div></div>');
        }
    } else {
        jQuery(".noproducts-wrapper").remove();
    }
}, 1000);
async function createTest() {
    jQuery("body").addClass("spzproducts");
    jQuery("body").addClass("spzproducts_2012");
    var productslist = null;
    var titlestocheck = ["water line protection program", "sewer line protection program", "water line and sewer line protection program", "water service line protection program", "sewer service line protection program"];
    let ourproducts = [];
    var productscheck = setInterval(async function() {
        if (jQuery(".page-wrap.product-list .product-item .card").length !== 0) {
            clearInterval(productscheck);
            await jQuery(".products-wrapper").remove();
            jQuery("header").after('<div class="products-wrapper"><div class="products-inner"><div class="products-title"><h2>Repair Plans</h2></div> <div class="products-boxes"> </div></div></div>');
            await jQuery(".products-wrapper .products-boxes").html("");
            var products = await jQuery(".page-wrap.product-list .product-item .card");
            let priority = 10;

            let pageUrl = location.href;
            pageUrl = pageUrl.replace("products", "product") + "/";
            for await (product of products) {
                const singleproduct = {};
                let name = jQuery(product).find(".program-name").html().trim();
                let price = jQuery(product).find(".price-cls .notranslate").html().trim();
                let icon = jQuery(product).find(".product-icon").attr('src');
                let pricetoshow = await getPrice(name.replace(/[^\w\s]/gi, '_').replaceAll(" ", "_"), price);
                let imagename = name.replace(" &amp; ", " ").replace(/[^\w\s]/gi, "_").replaceAll(" ", "_").replaceAll("-", "_");
                let image = "//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/PRODUCTPAGE/" + imagename + ".png";
                // let image = await getImage(name);
                singleproduct["target"] = name.replaceAll("&amp;", "&");
                let newName = name.replaceAll("Protection Program", "").replace("Program", "").replaceAll("Repair", "");
                if (newName.indexOf("Policy") > -1) {
                    newName = newName;
                } else {
                    newName = newName + " Repair Plan"
                }

                if (newName == 'Water Heater  and Replacement  Repair Plan') {
                    newName = name.replace("Program", "Plan");
                } else {
                    newName = newName;
                }

                singleproduct["name"] = newName;
                singleproduct["productclass"] = name.replace(/[^\w\s]/gi, '_').replaceAll(" ", "_");
                singleproduct["price"] = price;
                singleproduct["icon"] = icon;
                singleproduct["pricetoshow"] = pricetoshow;
                singleproduct["image"] = image;
                if (name.toLowerCase() === "water line and sewer line protection program" || name.toLowerCase() === "water line and sewer line insurance policy") {
                    singleproduct["priority"] = 0;
                } else {
                    singleproduct["priority"] = priority;
                }
                priority += 1;
                ourproducts.push(singleproduct);
            }
            jQuery(".product-list-header .zipcode-box button.change-link").text("Change");
            jQuery(".spzproducts .product-list-area > .page-wrap.set-pad > .product-list-header .zipcode-box button.product-page-search > span:first-child").text("Search");
            const sortedproducts = ourproducts.slice().sort(function(a, b) { return a.priority - b.priority; });
            if (sortedproducts.length < 3) {
                jQuery(".products-boxes").addClass("justify-content-center");
            }
            jQuery.each(sortedproducts, function(index, value) {
                jQuery(".products-wrapper .products-boxes").append(
                    '<div data-targettitle="' +
                    value.target +
                    '" class="products-single-box ' +
                    value.productclass +
                    '"><div class="product-image" style="background-image:url(' +
                    value.image +
                    ')"><div class="product-icon" style="background-image:url(' +
                    value.icon +
                    ')"> </div></div> <div class="product-text"><h1>' +
                    value.name +
                    '</h1><div class="product-cart-info"><div class="product-pricing">' +
                    value.pricetoshow +
                    '</div> <button>Enroll Now <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 9L5.5 5L1.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div></div></div>'
                );

                let name = value.target.replaceAll(",", " ");
                const productUrl = pageUrl + name.replaceAll(" ", "-").replaceAll("--", "-").toLowerCase();

                var clsName = name.replaceAll(" ", "_").replaceAll("-", "_").replaceAll("&", "_amp_");
                var className = "." + clsName;

                if (value.productclass == clsName) {
                    if (productDescription.find(({ pName }) => pName === clsName)) {
                        productSingleBoxDescription = productDescription.find(({ pName }) => pName === clsName).pDescription;
                    } else {
                        productSingleBoxDescription = 'Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.';
                    }
                    var productDesc =
                        '<div class="awr_product_description"><p>' + productSingleBoxDescription + '</p><span class="awr_learn_more">Learn More</span></div>';

                    if (jQuery(window).width() >= 1024) {
                        jQuery(className + " .product-image").append("<div class='productDesc'></div>");
                        jQuery(className + " .product-image .productDesc").append(jQuery(className + " h1"));
                        jQuery(className + " .product-image .productDesc").append(productDesc);
                    } else {
                        jQuery(className + ".product-cart-info").before(jQuery(className + " .product-image .productDesch1"));
                        jQuery(className + " .product-image .productDesc").remove();
                        jQuery("body").removeClass("spzproducts_2012");

                        jQuery(".products-boxes .products-single-box .product-text h1").click(async function(e) {
                            e.preventDefault();
                            const linksControl = await jQuery(".page-wrap.product-list .product-item .card");
                            for await (const link of linksControl) {
                                if ($(this).closest(".products-single-box").attr("data-targettitle") === $(link).find(".program-name").html().trim().replaceAll("&amp;", "&")) {
                                    $(link).find(".program-name").click();
                                    return;
                                }
                            }
                        });

                        jQuery(".products-boxes .products-single-box .product-image").click(async function(e) {
                            e.preventDefault();
                            const linksControl = await jQuery(".page-wrap.product-list .product-item .card");
                            for await (const link of linksControl) {
                                if ($(this).closest(".products-single-box").attr("data-targettitle") === $(link).find(".program-name").html().trim().replaceAll("&amp;", "&")) {
                                    $(link).find(".program-name").click();
                                    return;
                                }
                            }
                        });
                    }
                }
            });

            jQuery.each(comboManagement, function(index, cmbo) {
                let totalprice = 0;
                let comboPrice = 0;
                if (document.querySelector('div[data-targettitle="' + cmbo.comboName + '"] .product-pricing > span:first-child')) {
                    comboPrice = document.querySelector('div[data-targettitle="' + cmbo.comboName + '"] .product-pricing > span:first-child').innerHTML;
                    comboPrice = Number(comboPrice.replaceAll("$", ""));
                }
                jQuery.each(cmbo.comboProducts, function(ind, intProduct) {
                    if (document.querySelector('div[data-targettitle="' + intProduct + '"] .product-pricing > span:first-child')) {
                        const singlePrice = document.querySelector('div[data-targettitle="' + intProduct + '"] .product-pricing > span:first-child').innerHTML;
                        totalprice += Number(singlePrice.replaceAll("$", ""));
                        const finalprice = (totalprice - comboPrice).toFixed(2);
                        if (comboPrice > 0 && finalprice >= 1) {
                            jQuery('div[data-targettitle="' + cmbo.comboName + '"] .product-pricing span#savetext').html('per month (save $' + finalprice + ')');
                        }
                    }

                })
            });
            $(".products-single-box .product-text button").on("click", async function(e) {
                e.preventDefault();
                const linksControl = await jQuery(".page-wrap.product-list .product-item .card");
                for await (const link of linksControl) {
                    if ($(this).closest(".products-single-box").attr("data-targettitle") === $(link).find(".program-name").html().trim().replaceAll("&amp;", "&")) {
                        $(link).find(".enroll-now").click();
                        return;
                    }
                }
            });
        }

        jQuery(".spzproducts_2012 .products-boxes .products-single-box .product-image .productDesc h1").click(async function(e) {
            e.preventDefault();
            const linksControl = await jQuery(".page-wrap.product-list .product-item .card");
            for await (const link of linksControl) {
                if ($(this).closest(".products-single-box").attr("data-targettitle") === $(link).find(".program-name").html().trim().replaceAll("&amp;", "&")) {
                    $(link).find(".program-name").click();
                    return;
                }
            }
        });

        jQuery(".spzproducts_2012 .products-boxes .products-single-box .product-image").click(async function(e) {
            e.preventDefault();
            const linksControl = await jQuery(".page-wrap.product-list .product-item .card");
            for await (const link of linksControl) {
                if ($(this).closest(".products-single-box").attr("data-targettitle") === $(link).find(".program-name").html().trim().replaceAll("&amp;", "&")) {
                    $(link).find(".program-name").click();
                    return;
                }
            }
        });
        jQuery(".spzproducts_2012 .products-boxes .products-single-box .product-image .awr_product_description .awr_learn_more").click(async function(e) {
            e.preventDefault();
            const linksControl = await jQuery(".page-wrap.product-list .product-item .card");
            for await (const link of linksControl) {
                if ($(this).closest(".products-single-box").attr("data-targettitle") === $(link).find(".program-name").html().trim().replaceAll("&amp;", "&")) {
                    $(link).find(".program-name").click();
                    return;
                }
            }
        });

        var hoverEffect = setInterval(async function() {
            $(".products-single-box").find(".product-image") &&
                (clearInterval(hoverEffect),
                    $(".products-single-box").mouseenter(function() {
                        $(this).find(".product-image").css("transition", "0.3s all ease");
                        $(this).find(".product-image.productDesc").css("transition", "0.5s all ease");
                        let titleHeight = $(this).find(".productDesc h1").height();
                        let descHeight = $(this).find(".productDesc .awr_product_description").height();
                        let priceHeight = $(this).find(".product-text .product-pricing").height();
                        let mainHeight = titleHeight + descHeight;
                        mainHeight = Math.round(mainHeight);
                        priceHeight = Math.round(priceHeight);

                        $(this).find(".productDesc .awr_product_description").css("display", "block");
                        if (mainHeight <= 129) {
                            if (priceHeight >= 40 && priceHeight <= 50) {
                                $(this).find(".product-image").addClass("active11");
                            } else if (priceHeight >= 70 && priceHeight <= 80) {
                                $(this).find(".product-image").addClass("active12");
                            }
                        } else if (mainHeight > 130 && mainHeight <= 140) {
                            if (priceHeight >= 40 && priceHeight <= 50) {
                                if ($(this).find(".product-image").hasClass('active11')) {
                                    $(this).find(".product-image").removeClass("active11");
                                    $(this).find(".product-image").addClass("active");
                                } else {
                                    $(this).find(".product-image").addClass("active")
                                }
                            } else if (priceHeight >= 70 && priceHeight <= 80) {
                                $(this).find(".product-image").addClass("active2");
                            }
                        } else if ((mainHeight > 140 && mainHeight <= 147) || (mainHeight > 151 && mainHeight <= 172)) {
                            if (priceHeight >= 40 && priceHeight <= 50) {
                                $(this).find(".product-image").addClass("active2");
                            } else if (priceHeight >= 70 && priceHeight <= 80) {
                                $(this).find(".product-image").addClass("active3");
                            }
                        } else if (mainHeight > 147 && mainHeight <= 150) {
                            if (priceHeight >= 40 && priceHeight <= 50) {
                                $(this).find(".product-image").addClass("active7");
                            } else if (priceHeight >= 70 && priceHeight <= 80) {
                                $(this).find(".product-image").addClass("active8");
                            }
                        } else if (mainHeight > 173 && mainHeight <= 196) {
                            if (priceHeight >= 40 && priceHeight <= 50) {
                                $(this).find(".product-image").addClass("active4");
                            } else if (priceHeight >= 70 && priceHeight <= 80) {
                                $(this).find(".product-image").addClass("active5");
                            }
                        } else if (mainHeight > 196 && mainHeight <= 200) {
                            if (priceHeight >= 40 && priceHeight <= 50) {
                                $(this).find(".product-image").addClass("active3");
                            } else if (priceHeight >= 70 && priceHeight <= 80) {
                                $(this).find(".product-image").addClass("active6");
                            }
                        } else if (mainHeight > 201 && mainHeight <= 219) {
                            if (priceHeight >= 40 && priceHeight <= 50) {
                                $(this).find(".product-image").addClass("active9");
                            } else if (priceHeight >= 70 && priceHeight <= 80) {
                                $(this).find(".product-image").addClass("active10");
                            }
                        } else if (mainHeight >= 220 && mainHeight <= 227) {
                            if (priceHeight >= 40 && priceHeight <= 50) {
                                $(this).find(".product-image").addClass("active12");
                            } else if (priceHeight >= 70 && priceHeight <= 80) {
                                $(this).find(".product-image").addClass("active13");
                            }
                        } else if (mainHeight > 227) {
                            if (priceHeight >= 40 && priceHeight <= 50) {
                                $(this).find(".product-image").addClass("active14");
                            } else if (priceHeight >= 70 && priceHeight <= 80) {
                                $(this).find(".product-image").addClass("active15");
                            }
                        }
                    }),
                    $(".products-single-box").mouseleave(function() {
                        $(this).find(".product-image").css("transition", "0.3s all ease"),
                            $(this).find(".product-image.productDesc").css("transition", "0.5s all ease"),
                            $(this).find(".productDesc .awr_product_description").css("display", "none"),
                            $(this).find(".product-image").removeClass("active"),
                            $(this).find(".product-image").removeClass("active2"),
                            $(this).find(".product-image").removeClass("active3"),
                            $(this).find(".product-image").removeClass("active4"),
                            $(this).find(".product-image").removeClass("active5"),
                            $(this).find(".product-image").removeClass("active6"),
                            $(this).find(".product-image").removeClass("active7"),
                            $(this).find(".product-image").removeClass("active8"),
                            $(this).find(".product-image").removeClass("active9"),
                            $(this).find(".product-image").removeClass("active10"),
                            $(this).find(".product-image").removeClass("active11");
                        $(this).find(".product-image").removeClass("active12");
                        $(this).find(".product-image").removeClass("active13");
                        $(this).find(".product-image").removeClass("active14");
                        $(this).find(".product-image").removeClass("active15");
                    }));
        }, 100);
    }, 100);
    // jQuery(window).load(function() {
    //     if (document.querySelector('.products-wrapper')) {
    //         jQuery('.products-wrapper').scrollTop();
    //     }
    // });
    jQuery(document).ready(function() {
        jQuery(this).scrollTop(0);
    });
}

async function removetest() {
    jQuery("body").removeClass("spzproducts");
    jQuery("body").removeClass("spzproducts_2012");
    jQuery(".products-wrapper").remove();
    jQuery(".noproducts-wrapper").remove();
}

history.pushState = (function(f) {
    return function pushState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("pushstate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
    };
})(history.pushState);
history.replaceState = (function(f) {
    return function replaceState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("replacestate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
    };
})(history.replaceState);
window.addEventListener("popstate", function() {
    window.dispatchEvent(new Event("locationchange"));
});
window.addEventListener("locationchange", function() {
    url = location.href;
    urlCheck(url);
});


var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            createTest();
        }
    };
})();

// jQuery(document).on('DOMSubtreeModified', "article.page-wrap.product-list.row", function() {
//     createTest();
// });

url = location.href;
urlCheck(url);

jQuery(document).on('click', '.product-page-search', function() {
    something();
});

function urlCheck(url) {
    var allblogsurlstring = "";
    if (window.location.pathname.indexOf("/products/") > -1) {
        allblogsurlstring = window.location.href;
    }
    if (isSameUrl(url, allblogsurlstring, true)) {
        createTest();
    } else {
        removetest();
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
$(window).resize(createTest);


// const paceDone = setInterval(function() {
//     if(document.querySelector('.products-boxes').clientHeight > 1000) {
//         window.scrollTo(0, 0);
//         clearInterval(paceDone);
//     }
// }, 500)