var cookieName = "#2026_AWR_Product_List_Different_Size_Tile";
var cookieValue = "1";
var myDate = new Date();
myDate.setDate(myDate.getDate() + 30);
document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
var imgURL = '//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/2027';
const comboManagement = [{
    comboName: "Water Line and Sewer Line Protection Program",
    comboProducts: ["Water Line Protection Program", "Sewer Line Protection Program"]
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
    comboName: "Water Line, Sewer Line & In Home Plumbing Insurance Policy",
    comboProducts: ["Water Line Insurance Policy", "Sewer Line Insurance Policy", "In Home Plumbing Insurance Policy"]
},
{
    comboName: "Water Line, Sewer Line and In-Home Plumbing Insurance Policy",
    comboProducts: ["Water Line Insurance Policy", "Sewer Line Insurance Policy", "In-Home Plumbing Insurance Policy"]
},
{
    comboName: "Water Line, Sewer Line & In-Home Plumbing Insurance Policy",
    comboProducts: ["Water Line Insurance Policy", "Sewer Line Insurance Policy", "In-Home Plumbing Insurance Policy"]
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
},
{
    comboName: "Water Line, Sewer Line and In Home Plumbing Protection Program",
    comboProducts: ["Water Line Protection Program", "Sewer Line Protection Program", "In Home Plumbing Emergency Program"]
},
{
    comboName: "Water Line, Sewer Line and In-Home Plumbing Protection Program",
    comboProducts: ["Water Line Protection Program", "Sewer Line Protection Program", "In-Home Plumbing Emergency Program"]
},
{
    comboName: "Unlimited Water Line and Sewer Line Protection Program",
    comboProducts: ["Unlimited Water Line Protection Program", "Unlimited Sewer Line Protection Program"]
}
];
const relatedProducts = [{
    productFilterName: 'Water Line Protection Program',
    productImage: imgURL + '/products/Water_Line_Repair_Plan.png',
    productNewName: 'Water Line Repair Plan',
    coverSubheading: 'Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.',
    popularProduct: '',
    filterType: 'Water'
},
{
    productFilterName: 'Water Service Line Protection Program',
    productImage: imgURL + '/products/Water_Line_Repair_Plan.png',
    productNewName: 'Water Service Line Repair Plan',
    coverSubheading: 'Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.',
    popularProduct: '',
    filterType: 'Water'
},
{
    productFilterName: 'Unlimited Water Line Protection Program',
    productImage: imgURL + '/products/Water_Line_Repair_Plan.png',
    productNewName: 'Unlimited Water Line Protection Plan',
    coverSubheading: 'Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.',
    popularProduct: '',
    filterType: 'Water'
},
{
    productFilterName: 'Sewer Line Protection Program',
    productImage: imgURL + '/products/Sewer_Line_Insurance_Policy.png',
    productNewName: 'Sewer Line Repair Plan',
    coverSubheading: 'Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear.',
    popularProduct: '',
    filterType: 'Sewer'
},
{
    productFilterName: 'Sewer Service Line Protection Program',
    productImage: imgURL + '/products/Sewer_Line_Insurance_Policy.png',
    productNewName: 'Sewer Service Line Repair Plan',
    coverSubheading: 'Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear.',
    popularProduct: '',
    filterType: 'Sewer'
},
{
    productFilterName: 'Unlimited Sewer Line Protection Program',
    productImage: imgURL + '/products/Sewer_Line_Insurance_Policy.png',
    productNewName: 'Unlimited Sewer Line Protection Plan',
    coverSubheading: 'Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear.',
    popularProduct: '',
    filterType: 'Sewer'
},
{
    productFilterName: 'Water Line and Sewer Line Protection Program',
    productImage: imgURL + '/products/Water_Line___Sewer_Line_Repair_Plan.png',
    productNewName: 'Water Line & Sewer Line Repair Plan',
    coverSubheading: 'Cover your repairs to leaks and breaks of a covered water line, or repairs to leaks, clogs and blockages of a covered sewer line caused by normal wear and tear.',
    popularProduct: 'popular',
    filterType: 'Combo Plans'
},
{
    productFilterName: 'Unlimited Water Line and Sewer Line Protection Program',
    productImage: imgURL + '/products/Water_Line_and_Sewer_Line_Unlimited_Repair_Plan.png',
    productNewName: 'Unlimited Water Line and Sewer Line Repair Plan',
    coverSubheading: 'Cover your repairs to leaks and breaks of a covered water line, or repairs to leaks, clogs and blockages of a covered sewer line caused by normal wear and tear.',
    popularProduct: 'popular',
    filterType: 'Combo Plans'
},
{
    productFilterName: 'Water Line, Sewer Line and In Home Plumbing Emergency Program',
    productImage: imgURL + '/products/Water_Line_Sewer_Line_and_In-Home_Emergency_Plumbing_Repair_Plan.png',
    productNewName: 'Water Line, Sewer Line  and In-Home Emergency Plumbing Repair Plan',
    coverSubheading: 'Protect 3 service lines in 1 plan and save on your monthly cost - and get protection for water line, sewer line, or in-home plumbing.',
    popularProduct: 'bestvalue',
    filterType: 'Combo Plans'
},
{
    productFilterName: 'Water Line, Sewer Line and In-Home Plumbing Emergency Program',
    productImage: imgURL + '/products/Water_Line_Sewer_Line_and_In-Home_Emergency_Plumbing_Repair_Plan.png',
    productNewName: 'Water Line, Sewer Line  and In-Home Emergency Plumbing Repair Plan',
    coverSubheading: 'Protect 3 service lines in 1 plan and save on your monthly cost - and get protection for water line, sewer line, or in-home plumbing.',
    popularProduct: 'bestvalue',
    filterType: 'Combo Plans'
},
{
    productFilterName: 'In Home Plumbing Emergency Program',
    productImage: imgURL + '/products/In-Home_Plumbing_Emergency_Repair_Plan.png',
    productNewName: 'In-Home Plumbing Emergency Repair Plan',
    coverSubheading: 'Cover your home\'s interior water and sewer pipes including overflowing toilet, broken water pipe under your sink or behind the walls.',
    popularProduct: '',
    filterType: 'Plumbing'
},
{
    productFilterName: 'In-Home Plumbing Emergency Program',
    productImage: imgURL + '/products/In-Home_Plumbing_Emergency_Repair_Plan.png',
    productNewName: 'In-Home Plumbing Emergency Repair Plan',
    coverSubheading: 'Cover your home\'s interior water and sewer pipes including overflowing toilet, broken water pipe under your sink or behind the walls.',
    popularProduct: '',
    filterType: 'Plumbing'
},
{
    productFilterName: 'Heating and Cooling System Repair Program',
    productImage: imgURL + '/products/Heating_and_Cooling_System_Repair_Plan.png',
    productNewName: 'Heating and Cooling System Repair Plan',
    coverSubheading: 'Protect the heating and cooling systems and avoid the hassle and cost of repairs.',
    popularProduct: '',
    filterType: 'Combo Plans'
},
{
    productFilterName: 'Heating & Cooling System Repair Program',
    productImage: imgURL + '/products/Heating_and_Cooling_System_Repair_Plan.png',
    productNewName: 'Heating and Cooling System Repair Plan',
    coverSubheading: 'Protect the heating and cooling systems and avoid the hassle and cost of repairs.',
    popularProduct: '',
    filterType: 'Combo Plans'
},
{
    productFilterName: 'Heating System Repair Program',
    productImage: imgURL + '/products/Heating_System_Repair_Plan.png',
    productNewName: 'Heating System Repair Plan',
    coverSubheading: 'Get protection for your heating system including labor and materials for those repairs.',
    popularProduct: '',
    filterType: 'Heating'
},
{
    productFilterName: 'Cooling System Repair Program',
    productImage: imgURL + '/products/Cooling_System_Repair_Plan.png',
    productNewName: 'Cooling System Repair Plan',
    coverSubheading: 'Protect your cooling system  including labor and materials for those repairs.',
    popularProduct: '',
    filterType: 'Cooling'
},
{
    productFilterName: 'Water Heater Repair and Replacement Program',
    productImage: imgURL + '/products/Water_Heater_Repair_and_Replacement_Plan.png',
    productNewName: 'Water Heater Repair and Replacement Repair Plan',
    coverSubheading: 'Cover you water heater fails due to normal wear and tear. Get replacement through one of our service providers',
    popularProduct: '',
    filterType: 'Water Heater'
},
{
    productFilterName: 'Gas Line Protection Program',
    productImage: imgURL + '/products/Gas_Line_Repair_Plan.png',
    productNewName: 'Gas Line Repair Plan',
    coverSubheading: 'Get repairs from leaks in the exposed interior natural gas pipes running through your house as well as the flexible connectors due to normal wear or defects.',
    popularProduct: '',
    filterType: 'Gas'
},
{
    productFilterName: 'Interior Electric Line Protection Program',
    productImage: imgURL + '/products/Interior_Electric_Line_Repair_Plan.png',
    productNewName: 'Interior Electric Line Repair Plan',
    coverSubheading: 'Get protected from interior electric line failures including costs like contractor, labor, parts, and even paperwork.',
    popularProduct: '',
    filterType: 'Electrical'
},
{
    productFilterName: 'Exterior Electric Line Protection Program',
    productImage: imgURL + '/products/Exterior_Electric_Line_Repair_Plan.png',
    productNewName: 'Exterior Electric Line Repair Plan',
    coverSubheading: 'Cover your repairs to overhead and underground exterior electric lines, including the permanent wiring to fixtures such as light posts, detached garages and pool pumps.',
    popularProduct: '',
    filterType: 'Electrical'
},
{
    productFilterName: 'In Home Plumbing Plus Program',
    productImage: imgURL + '/products/In-Home_Plumbing_Plus_Repair_Plan.png',
    productNewName: 'In-Home Plumbing Plus Repair Plan',
    coverSubheading: 'Protect your home\'s interior water supply and wastewater drainage systems. Think overflowing toilet, broken water pipe under your sink (or behind the walls).',
    popularProduct: '',
    filterType: 'Plumbing'
},
{
    productFilterName: 'In-Home Plumbing Plus Program',
    productImage: imgURL + '/products/In-Home_Plumbing_Plus_Repair_Plan.png',
    productNewName: 'In-Home Plumbing Plus Repair Plan',
    coverSubheading: 'Protect your home\'s interior water supply and wastewater drainage systems. Think overflowing toilet, broken water pipe under your sink (or behind the walls).',
    popularProduct: '',
    filterType: 'Plumbing'
},
{
    productFilterName: 'Water Line and Sewer Line Unlimited Protection Program',
    productImage: imgURL + '/products/Water_Line_and_Sewer_Line_Unlimited_Repair_Plan.png',
    productNewName: 'Water Line and Sewer Line Unlimited Repair Plan',
    coverSubheading: 'Bundle your protection on your home\'s water and sewer lines and save on your monthly payment.',
    popularProduct: 'popular',
    filterType: 'Combo Plans'
},
{
    productFilterName: 'Water Line Unlimited Protection Program',
    productImage: imgURL + '/products/Water_Line_Unlimited_Repair_Plan.png',
    productNewName: 'Water Line Unlimited Repair Plan',
    coverSubheading: 'Get coverage for repairs to a broken or leaking water pipe. Normal wear and tear, corrosion, or even soil conditions.',
    popularProduct: '',
    filterType: 'Water'
},
{
    productFilterName: 'Sewer Line Unlimited Protection Program',
    productImage: imgURL + '/products/Sewer_Line_Insurance_Policy.png',
    productNewName: 'Sewer Line Unlimited Repair Plan',
    coverSubheading: 'Cover your repairs to a clogged, blocked, or leaking sewer pipe.',
    popularProduct: '',
    filterType: 'Sewer'
},
{
    productFilterName: 'Surge Protection Program',
    productImage: imgURL + '/products/Surge_Protection.png',
    productNewName: 'Surge Repair Plan',
    coverSubheading: 'Our Surge Protection Program gives you financial protection for all your home\'s electronics and electric appliances valued at $100 or more.',
    popularProduct: '',
    filterType: 'Electrical'
},
{
    productFilterName: 'Power Surge Protection Program',
    productImage: imgURL + '/products/Power_Surge_Protection.png',
    productNewName: 'Power Surge Repair Plan',
    coverSubheading: 'Power surges can happen at any time & lead to sudden death for your appliances. Its not always covered by homeowners insurance. With AWR your appliances are protected.',
    popularProduct: '',
    filterType: 'Electrical'
},
{
    productFilterName: 'Deviceless Surge Program',
    productImage: imgURL + '/products/Deviceless_Surge__Repair_Plan.png',
    productNewName: 'Deviceless Surge Repair Plan',
    coverSubheading: 'Power surges can happen at any time & lead to sudden death for your appliances. Its not always covered by homeowners insurance. With AWR your appliances are protected.',
    popularProduct: '',
    filterType: 'Electrical'
},
{
    productFilterName: 'In-Home Plumbing Clog Protection Program',
    productImage: imgURL + '/products/In-Home_Plumbing_Clog_Protection.png',
    productNewName: 'In-Home Plumbing Clog Repair Plan',
    coverSubheading: 'With this protection program, help is just a phone call away. We\'ll send out a pre-qualified local service provider to clear any clogs or blockages you can\'t prevent.',
    popularProduct: '',
    filterType: 'Plumbing'
},
{
    productFilterName: 'Energy Essentials Protection Program',
    productImage: imgURL + '/products/Energy_Essentials_Proteciton.png',
    productNewName: 'Energy Essentials Repair Plan',
    coverSubheading: 'This valuable bundled package provides repair coverage for gas lines, electric lines, and expense of damage to electronics from electric surges.',
    popularProduct: '',
    filterType: 'Electrical'
},
{
    productFilterName: 'Well System and Septic Line Protection Program',
    productImage: imgURL + '/products/Well_System_and_Septic_Line_Repair_Plan.png',
    productNewName: 'Well System and Septic Line Repair Plan',
    coverSubheading: 'This combo plan offers the best value and covers everything covered under Septic line and Well line protection.',
    popularProduct: '',
    filterType: 'Combo Plans'
},
{
    productFilterName: 'Well Line and Pump Protection Program',
    productImage: imgURL + '/products/Well_Line_and_Pump_Repair_Plan.png',
    productNewName: 'Well Line and Pump Repair Plan',
    coverSubheading: 'The plan covers the line from the house to the well tank, Pressure tank, Well pump, shutoff valves, Pressure gauges, & Electric cable.',
    popularProduct: '',
    filterType: 'Combo Plans'
},
{
    productFilterName: 'Septic Line Protection Program',
    productImage: imgURL + '/products/Septic_Line_Repair_Plan.png',
    productNewName: 'Septic Line Repair Plan',
    coverSubheading: 'Avoid Unexpected, Costly Repairs to Your Home\'s Septic System. The plan covers clogs and blockages',
    popularProduct: '',
    filterType: 'Sewer'
},
{
    productFilterName: 'Septic System Protection Program',
    productImage: imgURL + '/products/Septic_Line_Repair_Plan.png',
    productNewName: 'Septic System Repair Plan',
    coverSubheading: 'Avoid Unexpected, Costly Repairs to Your Home\'s Septic System. The plan covers clogs and blockages',
    popularProduct: '',
    filterType: 'Sewer'
},
{
    productFilterName: 'Water Line Insurance Policy',
    productImage: imgURL + '/products/Water_Line_Repair_Plan.png',
    productNewName: 'Water Line Insurance Policy',
    coverSubheading: 'Cover your repairs to leaks and breaks of a covered water line caused by normal wear and tear.',
    popularProduct: '',
    filterType: 'Water'
},
{
    productFilterName: 'Sewer Line Insurance Policy',
    productImage: imgURL + '/products/Sewer_Line_Insurance_Policy.png',
    productNewName: 'Sewer Line Insurance Policy',
    coverSubheading: 'Cover your repairs to clogs and blockages of a covered sewer line caused by normal wear and tear.',
    popularProduct: '',
    filterType: 'Sewer'
},
{
    productFilterName: 'Water Line and Sewer Line Insurance Policy',
    productImage: imgURL + '/products/Water_Line___Sewer_Line_Repair_Plan.png',
    productNewName: 'Water Line & Sewer Line Insurance Policy',
    coverSubheading: 'Cover your repairs to leaks and breaks of a covered water line, or repairs to leaks, clogs and blockages of a covered sewer line caused by normal wear and tear.',
    popularProduct: 'popular',
    filterType: 'Combo Plans'
},
{
    productFilterName: 'Water Line, Sewer Line and In-Home Plumbing Insurance Policy',
    productImage: imgURL + '/products/Water_Line_Sewer_Line_and_In-Home_Emergency_Plumbing_Repair_Plan.png',
    productNewName: 'Water Line, Sewer Line and In-Home Plumbing Insurance Policy',
    coverSubheading: 'Protect 3 service lines in 1 plan and save on your monthly cost - and get protection for water line, sewer line, or in-home plumbing.',
    popularProduct: 'bestvalue',
    filterType: 'Combo Plans'
},
{
    productFilterName: 'Water Line, Sewer Line and In Home Plumbing Insurance Policy',
    productImage: imgURL + '/products/Water_Line_Sewer_Line_and_In-Home_Emergency_Plumbing_Repair_Plan.png',
    productNewName: 'Water Line, Sewer Line and In-Home Plumbing Insurance Policy',
    coverSubheading: 'Protect 3 service lines in 1 plan and save on your monthly cost - and get protection for water line, sewer line, or in-home plumbing.',
    popularProduct: 'bestvalue',
    filterType: 'Combo Plans'
},
{
    productFilterName: 'In-Home Plumbing Insurance Policy',
    productImage: imgURL + '/products/In-Home_Plumbing_Emergency_Repair_Plan.png',
    productNewName: 'In-Home Plumbing Insurance Policy',
    coverSubheading: 'Cover your home\'s interior water and sewer pipes including overflowing toilet, broken water pipe under your sink or behind the walls.',
    popularProduct: '',
    filterType: 'Plumbing'
},
{
    productFilterName: 'In Home Plumbing Insurance Policy',
    productImage: imgURL + '/products/In-Home_Plumbing_Emergency_Repair_Plan.png',
    productNewName: 'In-Home Plumbing Insurance Policy',
    coverSubheading: 'Cover your home\'s interior water and sewer pipes including overflowing toilet, broken water pipe under your sink or behind the walls.',
    popularProduct: '',
    filterType: 'Plumbing'
},
{
    productFilterName: 'Water Line, Sewer Line and In Home Plumbing Protection Program',
    productImage: imgURL + '/products/Water_Line_Sewer_Line_and_In-Home_Emergency_Plumbing_Repair_Plan.png',
    productNewName: 'Water Line, Sewer Line and In-Home Plumbing Protection',
    coverSubheading: 'Protect 3 service lines in 1 plan and save on your monthly cost - and get protection for water line, sewer line, or in-home plumbing.',
    popularProduct: 'bestvalue',
    filterType: 'Combo Plans'
},
{
    productFilterName: 'Water Line, Sewer Line and In-Home Plumbing Protection Program',
    productImage: imgURL + '/products/Water_Line_Sewer_Line_and_In-Home_Emergency_Plumbing_Repair_Plan.png',
    productNewName: 'Water Line, Sewer Line and In-Home Plumbing Protection',
    coverSubheading: 'Protect 3 service lines in 1 plan and save on your monthly cost - and get protection for water line, sewer line, or in-home plumbing.',
    popularProduct: 'bestvalue',
    filterType: 'Combo Plans'
},
{
    productFilterName: 'Preferred Cooling Protection Plan - Primary System',
    productImage: imgURL + '/products/Preferred_Cooling_Protection_Plan_-_Primary_System.png',
    productNewName: 'Preferred Cooling Protection Plan - Primary System',
    coverSubheading: 'With Preferred Cooling Protection, you\'ll be protected against the unexpected if your air conditioner or heat pump needs to be repaired or replaced.',
    popularProduct: '',
    filterType: 'Cooling'
},
{
    productFilterName: 'Preferred Cooling Protection Plan - Secondary System',
    productImage: imgURL + '/products/Preferred_Cooling_Protection_Plan_-_Secondary_System.png',
    productNewName: 'Preferred Cooling Protection Plan - Secondary System',
    coverSubheading: 'With Preferred Cooling Protection, you\'ll be protected against the unexpected if your air conditioner or heat pump needs to be repaired or replaced.',
    popularProduct: '',
    filterType: 'Cooling'
},
{
    productFilterName: 'Cooling Repair Plan - Primary System',
    productImage: imgURL + '/products/Cooling_Repair_Plan_-_Primary_System.png',
    productNewName: 'Cooling Repair Plan - Primary System',
    coverSubheading: 'With the Cooling Repair Plan, you\'ll have peace of mind if your air conditioner or heat pump needs to be repaired.',
    popularProduct: '',
    filterType: 'Cooling'
},
{
    productFilterName: 'Cooling Repair Plan - Secondary System',
    productImage: imgURL + '/products/Cooling_Repair_Plan_-_Secondary_System.png',
    productNewName: 'Cooling Repair Plan - Secondary System',
    coverSubheading: 'With the Cooling Repair Plan, you\'ll have peace of mind if your air conditioner or heat pump needs to be repaired.',
    popularProduct: '',
    filterType: 'Cooling'
}
];
async function getPrice(title, price) {
    return '<span class="price">' + price + '</span> <span>per month<span id="savetext"></span></span>';
}

























function noProducts() {
    if (jQuery(".page-wrap.product-list > div:first-child").html() === "There are currently no additional protection plans available in your area. Please continue to check back for new programs.") {
        return true;
    }
    return false;
}
async function getImage(title) {
    // let imagename = title.replace(" &amp; ", " ").replace(/[^\w\s]/gi, '_').replaceAll(" ", "_").replaceAll("-", "_");
    // return "//res.cloudinary.com/spiralyze/image/upload/f_auto/AWR/PRODUCTPAGE/" + imagename + ".jpg";
    for (var i = 0; i < relatedProducts.length; i++) {
        var text = relatedProducts[i].productFilterName;
        if (text == title) {
            return relatedProducts[i].productImage;
        }
    }
}
async function getpopular(title) {
    for (var i = 0; i < relatedProducts.length; i++) {
        var text = relatedProducts[i].productFilterName;
        var popular = relatedProducts[i].popularProduct;
        if (text == title) {
            if (popular != undefined) {
                return relatedProducts[i].popularProduct;
            }
        }
    }
}
async function getbestvalue(title) {
    for (var i = 0; i < relatedProducts.length; i++) {
        var text = relatedProducts[i].productFilterName;
        var bestvalue = relatedProducts[i].BestValueProduct;
        if (text == title) {
            if (bestvalue != undefined) {
                return relatedProducts[i].BestValueProduct;
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
async function createTest() {
    jQuery("body").addClass("list_different_SPZ");


    //If you made silde then Use this Swiper slider
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick.min.css';
    document.getElementsByTagName('head')[0].appendChild(link);
    //Starting your code from here.


    var productslist = null;
    var titlestocheck = ["water line protection program", "sewer line protection program", "water line and sewer line protection program", "water service line protection program", "sewer service line protection program"];
    let ourproducts = [];
    var productscheck = setInterval(async function () {
        if (jQuery(".page-wrap.product-list .product-item .card").length !== 0) {
            clearInterval(productscheck);
            await jQuery(".products-wrapper").remove();
            //.product-list-area.content-section
            jQuery("header").after('<div class="products-wrapper"><div class="products-inner"><div class="products-title"><h2>Protection Plans</h2></div> <div class="products-boxes"> </div></div></div>');
            await jQuery(".products-wrapper .products-boxes").html("");
            var products = await jQuery(".page-wrap.product-list .product-item .card");

            let priority = 10;
            for await (product of products) {
                const singleproduct = {};
                let name = jQuery(product).find(".program-name").html().trim();
                let price = jQuery(product).find(".price-cls .notranslate").html().trim();
                // let icon = jQuery(product).find(".product-icon").attr('src');
                let pricetoshow = await getPrice(name.replace(/[^\w\s]/gi, '_').replaceAll(" ", "_"), price);
                let image = await getImage(name.replaceAll("&amp;", "&"));
                let popularitem = await getpopular(name);
                let bestvalueitem = await getbestvalue(name);
                singleproduct["target"] = name.replaceAll("&amp;", "&");
                let newName = name.replaceAll("Protection Program", "Protection Program").replace("Program", "Program").replaceAll("Repair", "Repair").replaceAll("and In Home", "and In-Home").replaceAll("In Home", "In-Home");
                if (newName.indexOf("Policy") > -1) {
                    newName = newName;
                } else {
                    // newName = newName + " Protection Program"
                }
                // singleproduct["name"] = newName;
                // let newName = name.replaceAll("Emergency Plumbing", "Plumbing Emergency").replaceAll("and In Home", "and In-Home").replaceAll("In Home", "In-Home");
                singleproduct["name"] = newName;
                //singleproduct["name"] = name;
                singleproduct["productclass"] = name.replace(/[^\w\s]/gi, '_').replaceAll(" ", "_");
                singleproduct["price"] = price;
                // singleproduct["icon"] = icon;
                singleproduct["pricetoshow"] = pricetoshow;
                singleproduct["image"] = image;
                singleproduct["popularitem"] = popularitem;
                singleproduct["bestvalueitem"] = bestvalueitem;
                if (name.toLowerCase() === "water line and sewer line protection program" || name.toLowerCase() === "water line and sewer line insurance policy") {
                    singleproduct["priority"] = 0;
                } else {
                    singleproduct["priority"] = priority;
                }
                priority += 1;
                ourproducts.push(singleproduct);
            }
            jQuery(".product-list-header .zipcode-box button.change-link").text("Change");
            jQuery(".list_different_SPZ .product-list-area > .page-wrap.set-pad > .product-list-header .zipcode-box button.product-page-search > span:first-child").text("Search");
            const sortedproducts = ourproducts.slice().sort(function (a, b) { return a.priority - b.priority });
            if (sortedproducts.length < 3) {
                jQuery(".products-boxes").addClass("justify-content-center");
            }
            jQuery.each(sortedproducts, function (index, value) {
                jQuery(".products-wrapper .products-boxes").append('<div data-targettitle="' + value.target + '" class="products-single-box ' + value.productclass + ' ' + value.popularitem + '"><div class="product-text"><h1>' + value.name + '</h1><div class="product-image" style="background-image:url(' + value.image + ')"></div><div class="product-cart-info"><div class="product-pricing">' + value.pricetoshow + '</div> <button>Enroll Now <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.80304 12.803C7.51015 13.0959 7.51015 13.5708 7.80304 13.8637C8.09594 14.1565 8.57081 14.1565 8.8637 13.8637L7.80304 12.803ZM11.6667 9.99999L12.197 10.5303C12.3377 10.3897 12.4167 10.1989 12.4167 9.99999C12.4167 9.80108 12.3377 9.61031 12.197 9.46966L11.6667 9.99999ZM8.8637 6.13633C8.57081 5.84343 8.09594 5.84343 7.80304 6.13633C7.51015 6.42922 7.51015 6.90409 7.80304 7.19699L8.8637 6.13633ZM8.8637 13.8637L12.197 10.5303L11.1364 9.46966L7.80304 12.803L8.8637 13.8637ZM12.197 9.46966L8.8637 6.13633L7.80304 7.19699L11.1364 10.5303L12.197 9.46966Z" fill="white"/></svg>');
            });
            jQuery.each(comboManagement, function (index, cmbo) {
                let totalprice = 0;
                let comboPrice = 0;
                if (document.querySelector('div[data-targettitle="' + cmbo.comboName + '"] .product-pricing > span:first-child')) {
                    comboPrice = document.querySelector('div[data-targettitle="' + cmbo.comboName + '"] .product-pricing > span:first-child').innerHTML;
                    comboPrice = Number(comboPrice.replaceAll("$", ""));
                }
                jQuery.each(cmbo.comboProducts, function (ind, intProduct) {
                    if (document.querySelector('div[data-targettitle="' + intProduct + '"] .product-pricing > span:first-child')) {
                        const singlePrice = document.querySelector('div[data-targettitle="' + intProduct + '"] .product-pricing > span:first-child').innerHTML;
                        totalprice += Number(singlePrice.replaceAll("$", ""));
                        const finalprice = (totalprice - comboPrice).toFixed(2);
                        if (comboPrice > 0 && finalprice >= 1) {
                            jQuery('div[data-targettitle="' + cmbo.comboName + '"] .product-pricing span#savetext').html('save $' + finalprice + '');
                            jQuery('div[data-targettitle="' + cmbo.comboName + '"] .product-pricing span#savetext').addClass('show-save');
                            jQuery('div[data-targettitle="' + cmbo.comboName + '"]').addClass('amount-save');
                        }
                    }

                })
            })
            jQuery(".products-single-box .product-text button").on("click", async function (e) {
                e.preventDefault();
                const linksControl = await jQuery(".page-wrap.product-list .product-item .card");
                for await (const link of linksControl) {
                    if (jQuery(this).closest(".products-single-box").attr("data-targettitle") === jQuery(link).find(".program-name").html().trim().replaceAll("&amp;", "&")) {
                        jQuery(link).find(".enroll-now").click();
                        return;
                    }
                }
            });


            // Detect mac or windows

            if (navigator.userAgent.indexOf('Mac OS X') != -1) {
                $("body").addClass("mac");
            } else {
                $("body").addClass("pc");
            }

            // Add browser class in body

            var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
            var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
            var is_chrome = !!window.chrome && !is_opera && !is_Edge;
            var is_explorer = typeof document !== 'undefined' && !!document.documentMode && !is_Edge;
            var is_firefox = typeof window.InstallTrigger !== 'undefined';
            var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            if (is_chrome) {
                $('body').addClass('chrome');
            } else if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                $('body').addClass('safari');
            } else if (is_firefox) {
                $('body').addClass('firefox');
            }







            // if ($(window).width() > 320) {
            if ($(window).width() <= 767) {
                jQuery(".products-boxes").prepend(jQuery(".products-single-box.Water_Line__Sewer_Line_and_In_Home_Plumbing_Emergency_Program"));
                jQuery(".products-boxes").prepend(jQuery(".products-single-box.Sewer_Line_Protection_Program"));
                jQuery(".products-boxes").prepend(jQuery(".products-single-box.Water_Line_Protection_Program"));
                jQuery(".products-boxes").prepend(jQuery(".products-single-box.Water_Line_and_Sewer_Line_Protection_Program"));
            } else { }


            if ($(window).width() > 767) {
                jQuery("<div class='products-boxes products_slider'></div>").insertBefore(".list_different_SPZ .products-boxes");
                jQuery(".list_different_SPZ .Water_Line_and_Sewer_Line_Protection_Program").appendTo(".products_slider")
                jQuery(".list_different_SPZ .products-single-box.Water_Line_Protection_Program").appendTo(".products_slider")
                jQuery(".list_different_SPZ .products-single-box.Sewer_Line_Protection_Program").appendTo(".products_slider")

                $(".list_different_SPZ .products_slider").slick({
                    slidesToShow: 3,
                    infinite: false,
                    slidesToScroll: 1,
                    autoplay: false,
                    arrows: true,
                    centerMode: false,

                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 1.5,
                            slidesToScroll: 1,
                            dots: false,
                            centerMode: true,
                            centerPadding: '20%'
                        }
                    },
                    {
                        breakpoint: 990,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                            centerMode: true,
                            centerPadding: '11%',
                            variableWidth: true
                        }
                    }
                    ]
                });
            } else {
                $(".products-boxes.products_slider").removeClass('products_slider');
            }
            // } 

            if ($(window).width() >= 1025) {
                $('.list_different_SPZ .products_slider').slick('unslick');

            } else { }
        }
        //Check if slider has content inside it
        if (jQuery('.products-inner .slick-list .slick-track').find('.products-single-box').length < 1 && jQuery('.products-inner .products-boxes').find('.no-slick-track.slick-track').length < 1) {
            jQuery('.products-inner .products-boxes').addClass('no-slick-track');
        }
    }, 100);
}
jQuery("body").on("click", ".products-single-box .product-image, .products-single-box .product-text > a, .products-single-box .product-text > h1", async function (e) {
    e.preventDefault();
    const linksControl = await jQuery(".page-wrap.product-list .product-item .card");
    for await (const link of linksControl) {
        if (jQuery(this).closest(".products-single-box").attr("data-targettitle") === jQuery(link).find(".program-name").html().trim().replaceAll("&amp;", "&")) {
            jQuery(link).find(".program-name").click();
            return;
        }
    }
});



async function removetest() {
    jQuery("body").removeClass("list_different_SPZ");
    jQuery(".products-wrapper").remove();
    jQuery(".noproducts-wrapper").remove();
}

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


var something = (function () {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true;
            createTest();
        }
    };
})();

// jQuery(document).on('DOMSubtreeModified', "article.page-wrap.product-list.row", function() {
//     createTest();
// });

// const prevWidth = window.width;
// console.log('prevWidth:' + prevWidth);
// window.addEventListener('resize', function (event) {
//     if (window.width !== prevWidth) {
// console.log('window.width:' + window.width);

//         url = location.href;
//         urlCheck(url);
//     }
// }, true);

window.onresize = function (event) {
    url = location.href;
    urlCheck(url);
};

url = location.href;
urlCheck(url);

jQuery(document).on('click', '.product-page-search', function () {
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

function waitForElm(selector) {
    return new Promise(function (resolve) {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(function (mutations) {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document, { attributes: true, childList: true, subtree: true, characterData: true });
    });
}

$(document).ready(function () {
    waitForElm(".products-wrapper .products-boxes .products-single-box").then(function (elm) {
        console.log("ready!");
        if (document.querySelector('.products-wrapper')) {
            document.querySelector('.products-wrapper').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    });
});