const int6009 = setInterval(() => {
    if (document.querySelectorAll('.hbspt-form form').length > 0) {
        clearInterval(int6009);

        createTest();

        document.body.classList.add('spz-6009');
        appendPreload();
    }
}, 100);

function createTest() {
    document.querySelector('.hbspt-form .hs-form-spz').insertAdjacentHTML('beforebegin', `
        <div class="form-step-1 active">
            <div class="sub-desc">What compliance frameworks are you interested in?</div>
            <div class="framework-wrapper-spz"></div>
            <div class="actions">
                <button class="hs-button-spz primary large" type="button">Next</button>
            </div>
        </div>`);

    // Add class '.form-step-2' on '.hbspt-form .hs-form-spz'
    document.querySelector('.hbspt-form .hs-form-spz').classList.add('form-step-2');

    // Append 'PCI DSS' after second '.hs_demo_product_of_interest .inputs-list.multi-container label'
    // FYI, this is added because the 'PCI DSS' checkbox is not available in the form
    document.querySelector('.hs_demo_product_of_interest .inputs-list.multi-container li:nth-child(2)').insertAdjacentHTML('afterend', `
        <li class="hs-form-checkbox" role="checkbox">
            <label class="hs-form-checkbox-display" for="demo_product_of_interest6-pci-dss-1">
                <input class="hs-input" type="checkbox" name="demo_product_of_interest" value="PCI DSS">
                <span>PCI DSS</span>
            </label>
        </li>
    `);

    // Hide '.hs_demo_product_of_interest' and its parent 'fieldset'
    document.querySelector('.hs_demo_product_of_interest').parentElement.style.display = 'none';


    stepOneCheckboxes();
    openNextStep();
}

function stepOneCheckboxes() {
    // Get all the text from '.hs_demo_product_of_interest .inputs-list.multi-container label span' and append to '.framework-wrapper-spz'
    const checkboxes = document.querySelectorAll('.hs_demo_product_of_interest .inputs-list.multi-container label');
    let checkboxesArr = Array.from(checkboxes);
    let checkboxesText = checkboxesArr.map((item) => {
        return { label: item.textContent, for: item.getAttribute('for') };
    });
    let checkboxesTextArr = checkboxesText.filter((item) => {
        return item != '';
    });
    let checkboxesTextArrUnique = [...new Set(checkboxesTextArr)];
    checkboxesTextArrUnique.forEach((item) => {
        // Convert to lowercase and replace space with underscore
        const lbl = item.label.trim();
        const lci = lbl.toLowerCase().replace(/\s/g, '_');

        document.querySelector('.form-step-1 .framework-wrapper-spz').insertAdjacentHTML('beforeend', `
            <label class="custom-checkbox-spz with-icons" for="${item.for}" data-for="${item.for}">
                <div class="ccs-icon-wrap">
                    <img src="${getIconByLabel(lbl)}" alt="${lbl}" class="ccs-icon">
                </div>
                <div class="ccs-wrap">
                    <div class="ccs-label">
                        <div class="ccs-checkbox">
                            <input type="checkbox" id="${lci}" name="${lci}">
                            <span class="ccs-box"></span>
                        </div>
                        ${lbl}
                    </div>
                </div>
            </label>`);
    });

    checkboxEvents()
}

function getIconByLabel(label) {
    const baseURl = 'https://res.cloudinary.com/spiralyze/image/upload/';
    const icons = [
        {
            ico: 'v1690459033/drata/6009/soc_2.svg',
            label: 'SOC 2'
        },
        {
            ico: 'v1690459081/drata/6009/iso_webp_1.webp',
            label: 'ISO 27001'
        },
        {
            ico: 'v1690971738/drata/6009/pci_1.svg',
            label: 'PCI DSS'
        },
        {
            ico: 'v1690459033/drata/6009/hipaa.svg',
            label: 'HIPAA'
        },
        {
            ico: 'v1690459033/drata/6009/gdpr.svg',
            label: 'GDPR'
        },
        {
            ico: 'v1690459079/drata/6009/custom_frameworks_1.svg',
            label: 'Other'
        }
    ];

    let icon = icons.find((item) => {
        return item.label == label;
    });

    if (icon == undefined) {
        return false;
    }

    return baseURl + icon.ico;
}

function checkboxEvents() {
    document.querySelectorAll('.form-step-1 .custom-checkbox-spz').forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
            // Add active class and checked attribute to clicked checkbox
            if (!checkbox.classList.contains('active') && checkbox.getAttribute('for')) {
                checkbox.querySelector('input').setAttribute('checked', true);
                document.querySelector(`[data-for='${checkbox.getAttribute('for')}']`).classList.toggle('active');
            } else {
                // Remove active class and checked attribute from clicked checkbox
                checkbox.classList.remove('active');
                checkbox.querySelector('input').removeAttribute('checked');
            }
        });
    });
}

function openNextStep() {
    // on click of '.hs-button-spz' button open next step
    document.querySelector('.hs-button-spz').addEventListener('click', () => {
        document.querySelector('.form-step-1').classList.remove('active');
        document.querySelector('.form-step-2').classList.add('active');

        // smooth scroll to .contact-form-section
        document.querySelector('.hero-right-section').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

function appendPreload() {
    document.querySelector('head').insertAdjacentHTML("afterbegin", `
        <link rel="preload" href="//res.cloudinary.com/spiralyze/image/upload/v1690976787/drata/6009/checked_mark.svg" as="image">`
    );
}
