console.log('Hello, World!');

document.addEventListener('DOMContentLoaded', function () {

    // --- Element Selections ---
    const industryFilter = {
        button: document.getElementById('industryFilterButton'),
        menu: document.getElementById('industryFilterMenu'),
        text: document.getElementById('industryFilterButton').querySelector('.filter-dropdown__text'),
        items: document.querySelectorAll('#industryFilterMenu .filter-dropdown__item')
    };

    const sizeFilter = {
        button: document.getElementById('sizeFilterButton'),
        menu: document.getElementById('sizeFilterMenu'),
        text: document.getElementById('sizeFilterButton').querySelector('.filter-dropdown__text'),
        items: document.querySelectorAll('#sizeFilterMenu .filter-dropdown__item')
    };

    const searchInput = document.getElementById('searchInput');
    const searchClearBtn = document.querySelector('.search-bar__clear');
    const searchForm = document.getElementById('searchForm');

    const cardGrid = document.getElementById('cardGrid');
    const allCards = document.querySelectorAll('.card');
    const noResultsMessage = document.getElementById('noResultsMessage');

    const activeFilters = {
        industry: 'all',
        size: 'all',
        search: ''
    };

    // --- Dropdown Logic ---
    function setupDropdown(filter) {
        filter.button.addEventListener('click', (e) => {
            e.stopPropagation();
            // Close other dropdowns
            [industryFilter, sizeFilter].forEach(f => {
                if (f !== filter) {
                    f.menu.classList.remove('is-open');
                    f.button.classList.remove('is-open');
                }
            });
            // Toggle current dropdown
            filter.menu.classList.toggle('is-open');
            filter.button.classList.toggle('is-open');
        });

        filter.items.forEach(item => {
            item.addEventListener('click', () => {
                filter.text.textContent = item.textContent;
                const currentSelected = filter.menu.querySelector('.is-selected');
                if (currentSelected) {
                    currentSelected.classList.remove('is-selected');
                }
                item.classList.add('is-selected');

                // Update active filters
                if (filter === industryFilter) {
                    activeFilters.industry = item.dataset.value;
                } else if (filter === sizeFilter) {
                    activeFilters.size = item.dataset.value;
                }

                applyFilters();
            });
        });
    }

    setupDropdown(industryFilter);
    setupDropdown(sizeFilter);

    // Close dropdowns when clicking outside
    window.addEventListener('click', () => {
        [industryFilter, sizeFilter].forEach(f => {
            f.menu.classList.remove('is-open');
            f.button.classList.remove('is-open');
        });
    });

    // --- Search Logic ---
    searchInput.addEventListener('input', () => {
        activeFilters.search = searchInput.value.toLowerCase().trim();
        searchClearBtn.classList.toggle('is-visible', searchInput.value.length > 0);
        applyFilters();
    });

    searchForm.addEventListener('submit', (e) => e.preventDefault()); // Prevent form submission
    searchForm.addEventListener('reset', () => { // Handles the clear button
        activeFilters.search = '';
        searchClearBtn.classList.remove('is-visible');
        applyFilters();
        searchInput.focus();
    });

    // --- Core Filtering Function ---
    function applyFilters() {
        let visibleCardCount = 0;

        allCards.forEach(card => {
            const industryMatch = activeFilters.industry === 'all' || card.dataset.industry === activeFilters.industry;
            const sizeMatch = activeFilters.size === 'all' || card.dataset.size === activeFilters.size;
            const searchMatch = activeFilters.search === '' || card.dataset.title.toLowerCase().includes(activeFilters.search);

            if (industryMatch && sizeMatch && searchMatch) {
                card.style.display = ''; // Use default display (flex)
                visibleCardCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Toggle no results message
        noResultsMessage.style.display = visibleCardCount === 0 ? 'block' : 'none';

        // Ensure grid layout is preserved
        cardGrid.style.display = visibleCardCount === 0 ? 'block' : 'grid';
    }
});