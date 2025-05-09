document.addEventListener("DOMContentLoaded", function() {
    var comparisonSections = document.querySelectorAll('.hero-section');
    comparisonSections.forEach(function(section) {
        var closestRow = section.closest('.row-fluid-wrapper.dnd-section');
        if (closestRow) {
            closestRow.classList.add('hs_hero_three_cards_row');
        }
    });
});

// tab-section for dektop
document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Remove 'active' class from all tab links
        document.querySelectorAll('.tab-link').forEach(el => el.classList.remove('active'));
        this.classList.add('active');

        // Get target section selector from href (e.g., "#create-api")
        const targetSelector = this.getAttribute('button-value');
        const targetContent = document.querySelector('[content-value="'+ targetSelector +'"]');

        if (targetContent) {
            // Scroll into view smoothly
            setTimeout(() => {
                targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 10);
        }
    });
});


// tab-section for tablet and moblie
const dropdown = document.querySelector('.custom-dropdown');
const selected = dropdown.querySelector('.selected');
const options = dropdown.querySelectorAll('.dropdown-options li');

// Toggle dropdown
selected.addEventListener('click', () => {
    dropdown.classList.toggle('open');
});

// Handle option click
options.forEach(option => {
    option.addEventListener('click', () => {
        selected.textContent = option.textContent;
        dropdown.classList.remove('open');

        // Navigate or trigger content logic
        const targetId = option.getAttribute('data-value');
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Close dropdown on outside click
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
    }
});


// review-tab section
document.querySelectorAll('.tab-container').forEach(container => {
    const tabs = container.querySelectorAll('.tab');
    const contents = container.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs in this container
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Hide all contents in this container
            contents.forEach(t => t.classList.remove('active'));

            // Show selected content
            const targetId = tab.getAttribute('data-tab');
            container.querySelector(`#${targetId}`).classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const navBars = document.querySelectorAll('.tab-desktop'); // Target all navigation bars
  const sections = document.querySelectorAll('.hiw-content-section');
  const navLinks = document.querySelectorAll('.tab-link'); // Assuming your nav links have this class
  
  const navBar = document.querySelector('.hiw-tab-section');
  const stickyPoint = navBar.offsetTop - 24;
  const body = document.body;
  const highlightedSection = document.querySelector('.sticky_header_and_accordian_section');
  let highlightedSectionBottom = 0;

  if (highlightedSection) {
    highlightedSectionBottom = highlightedSection.offsetTop + highlightedSection.offsetHeight - 80;
  }

  function handleScroll() {
    if (window.scrollY >= stickyPoint && (highlightedSection ? window.scrollY < highlightedSectionBottom : true)) {
      body.classList.add('sticky-nav');
    } else {
      body.classList.remove('sticky-nav');
    }
  }

  window.addEventListener('scroll', handleScroll);

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function updateNavLinkActiveClass() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.id;
      const correspondingNavLink = document.querySelector(`.tab-link[button-value="${sectionId}"]`);

      if (scrollY >= sectionTop - (window.innerHeight / 3) && scrollY < sectionTop + sectionHeight - (window.innerHeight / 3)) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (correspondingNavLink) {
          correspondingNavLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', () => {
    updateNavLinkActiveClass();
  });

  // Initial call on load
  updateNavLinkActiveClass();
});