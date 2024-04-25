const astUrl = '//res.cloudinary.com/spiralyze/image/upload';


const int_6013 = setInterval(() => {
    if (document.querySelectorAll('.integrations-section .integrations-logo-slider').length > 0) {
        clearInterval(int_6013);

        document.body.classList.add('spz-6013');
        createTest();
    }
}, 100);

function createTest() {
    //Rearrange the elements
    document.querySelector('.hero-section').insertAdjacentElement('afterend', document.querySelector('.how-works-section'));
    document.querySelector('.review-section.desk').insertAdjacentElement('beforebegin', document.querySelector(".integrations-section"));

    appendCaseStudies();
}

function appendCaseStudies() {
    const aUrl = astUrl + '/fl_sanitize/drata/2013/';
    const caseStudies = [
        {
            title: 'Lemonade',
            logo: aUrl + 'lemonade_logo.svg',
            number: '200',
            text: 'hours saved',
            arrow: 'down'
        },
        {
            title: 'Thnks',
            logo: aUrl + 'thnks_logo.svg',
            number: '100',
            text: 'hours saved',
            arrow: 'down'
        },
        {
            title: 'PolicyDock',
            logo: aUrl + 'policy_dock.svg',
            number: '24',
            text: 'weeks saved',
            arrow: 'down'
        },
        {
            title: 'Plane',
            logo: aUrl + 'plane.svg',
            number: '4x',
            text: 'faster compliance',
            arrow: 'up'
        },
        {
            title: 'Fivetran',
            logo: aUrl + 'fivetran.svg',
            number: '50%',
            text: 'time saved',
            arrow: 'down'
        },
        {
            title: 'Measurabl',
            logo: aUrl + 'measurable.svg',
            number: '80%',
            text: 'workload automated',
            arrow: 'down'
        },
        {
            title: 'Deeper Signals',
            logo: aUrl + 'deeper_signals.svg',
            number: '75%',
            text: 'time saved',
            arrow: 'down'
        },
        {
            title: 'Lucid Works',
            logo: aUrl + 'lucid.svg',
            number: '40%',
            text: 'workload automated',
            arrow: 'up'
        }
    ];

    if (document.querySelectorAll('.case-studies-section').length === 0) {
        document.querySelector('.hero-section').insertAdjacentHTML('afterend', `
        <section class="case-studies-section">
          <h3 class="cs-title">See How Companies are Automating Compliance with Drata</h3>
          <div class="cs-overflow">
            <div class="case-study-wrapper" id="mini-cs-wrapper">
            </div>
          </div>
        </section>`);

        caseStudies.forEach((cs, index) => {
            document.querySelector('#mini-cs-wrapper').insertAdjacentHTML('beforeend', `
          <div class="case-study ${cs.arrow}">
            <img class="cs-logo" src="${cs.logo}" alt="${cs.title}">
            <span class="cs-divider"></span>
            <div class="cs-details">
              <div class="cs-right">
                <div class="cs-numb">${cs.number} 
                  <img class="cs-arrow" src="${aUrl}arrow.svg" alt="Arrow ${cs.arrow}">
                </div>
                <div class="cs-text">${cs.text}</div>
              </div>
            </div>
          </div>`);
        });
    }
}