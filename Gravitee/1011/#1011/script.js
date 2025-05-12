// review-tab section
waitForElm('.tab-container .tab').then(() => {
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

  // tab-section for desktop
  document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      // Remove 'active' class from all tab links
      document.querySelectorAll('.tab-link').forEach(el => el.classList.remove('active'));
      this.classList.add('active');

      // Get target section selector from href (e.g., "#create-api")
      const targetSelector = this.getAttribute('button-value');
      const targetContent = document.querySelector('[content-value="' + targetSelector + '"]');

      if (targetContent) {
        // Scroll into view smoothly
        const targetPosition = targetContent.offsetTop;
        const newPosition = targetPosition - 100;

        setTimeout(() => {
          window.scrollTo({
            top: newPosition,
            behavior: 'smooth'
          });
          // targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 10);
      }
    });
  });


  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // tab-section for tablet and moblie
  const dropdown = document.querySelector('.custom-dropdown');
  const selected = dropdown.querySelector('.selected');
  const options_1 = dropdown.querySelectorAll('.dropdown-options li');
  const contentSections = document.querySelectorAll('[content-value]');

  // Function to update the selected dropdown item based on the visible section
  // function updateSelectedBasedOnViewport() {
  //   contentSections.forEach(section => {
  //     console.log('Section:', section);
  //     if (isInViewport(section)) {
  //       console.log('In viewport:', section);
  //       const sectionId = section.getAttribute('content-value');
  //       options_1.forEach(option => {
  //         if (option.getAttribute('button-value') === sectionId) {
  //           selected.textContent = option.textContent;
  //         }
  //       });
  //     }
  //   });
  // }

  // Handle option click (your existing code)
  options_1.forEach(option => {
    option.addEventListener('click', () => {
      selected.textContent = option.textContent;
      dropdown.classList.remove('open');

      const targetId = option.getAttribute('button-value');
      const targetEl = document.querySelector("[content-value=" + targetId + "]");
      if (targetEl) {
        const targetPosition = targetEl.offsetTop;
        const newPosition = targetPosition - 100;

        window.scrollTo({
          top: newPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // // Listen for scroll events to update the selected dropdown item
  // window.addEventListener('scroll', updateSelectedBasedOnViewport);

  // // Initial call to set the selected item on page load
  // updateSelectedBasedOnViewport();

  // Toggle dropdown
  selected.addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });

  const sections = document.querySelectorAll('.hiw-content-section');
  const navLinks = document.querySelectorAll('.tab-link'); // Assuming your nav links have this class

  const navBar = document.querySelector('.hiw-tab-section');
  const stickyPoint = navBar.offsetTop;
  const body = document.body;
  const highlightedSection = document.querySelector('.sticky_header_and_accordian_section');
  let highlightedSectionBottom = 0;

  if (highlightedSection) {
    highlightedSectionBottom = highlightedSection.offsetTop + highlightedSection.offsetHeight;
  }

  function handleScroll() {
    if (window.scrollY >= stickyPoint && (highlightedSection ? window.scrollY < highlightedSectionBottom : true)) {
      body.classList.add('sticky-nav');
    } else {
      body.classList.remove('sticky-nav');
    }
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

          options_1.forEach(option => {
            if (option.getAttribute('button-value') === sectionId) {
              selected.textContent = option.textContent;
            }
          });
        }

      }
    });
  }

  // this is to prevent the scroll event from firing too frequently
  let isScrolling = false;
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        updateNavLinkActiveClass();
      }, 700);
    }
  });

  window.addEventListener('scroll', () => {
    handleScroll();
  });

  // Initial call on load
  updateNavLinkActiveClass();
  handleScroll();
});

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