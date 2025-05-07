// tab-section for dektop
document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Remove 'active' class from all tab links
        document.querySelectorAll('.tab-link').forEach(el => el.classList.remove('active'));
        this.classList.add('active');

        // Get target section selector from href (e.g., "#create-api")
        const targetSelector = this.getAttribute('href');
        const targetContent = document.querySelector(targetSelector);

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
            contents.forEach(c => c.style.display = 'none');

            // Show selected content
            const targetId = tab.dataset.tab;
            container.querySelector(`#${targetId}`).style.display = 'block';
        });
    });
});



