document.addEventListener('DOMContentLoaded', function() {

    // --- Element Selections ---
    const filterBar = document.querySelector('.filter-bar'); // Get the main filter bar
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
    const searchSubmitBtn = document.querySelector('.search-bar__submit'); // Get the search icon button

    const cardGrid = document.getElementById('cardGrid');
    const allCards = document.querySelectorAll('#cardGrid .card');
    const noResultsMessage = document.getElementById('noResultsMessage');

    const activeFilters = {
        industry: 'all',
        size: 'all',
        search: ''
    };

    // --- Dropdown Logic (no changes here) ---
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

    window.addEventListener('click', () => {
        [industryFilter, sizeFilter].forEach(f => {
            f.menu.classList.remove('is-open');
            f.button.classList.remove('is-open');
        });
    });

    // --- Updated Search Logic ---

    // On tablet/mobile, this button opens the search view
    searchSubmitBtn.addEventListener('click', (e) => {
        // Only activate search mode if the input is not visible (i.e., on tablet/mobile)
        if (window.getComputedStyle(searchInput).display === 'none') {
            e.preventDefault(); // Prevent form submission
            filterBar.classList.add('search-mode-active');
            searchInput.focus();
        }
    });

    searchInput.addEventListener('input', () => {
        activeFilters.search = searchInput.value.toLowerCase().trim();
        searchClearBtn.classList.toggle('is-visible', searchInput.value.length > 0);
        applyFilters();
    });

    searchForm.addEventListener('submit', (e) => e.preventDefault()); 
    
    // The reset button now also closes the search mode view on tablet/mobile
    searchForm.addEventListener('reset', () => { 
        activeFilters.search = '';
        searchClearBtn.classList.remove('is-visible');
        
        // Deactivate search mode to show filters again
        if (filterBar.classList.contains('search-mode-active')) {
            filterBar.classList.remove('search-mode-active');
        }
        
        applyFilters();
        // Don't focus if we are closing the search bar on mobile
        if (window.getComputedStyle(searchInput).display !== 'none') {
            searchInput.focus();
        }
    });
    
    // --- Core Filtering Function (no changes here) ---
    function applyFilters() {
        let visibleCardCount = 0;

        allCards.forEach(card => {
            const industryMatch = activeFilters.industry === 'all' || card.dataset.industry === activeFilters.industry;
            const sizeMatch = activeFilters.size === 'all' || card.dataset.size === activeFilters.size;
            const searchMatch = activeFilters.search === '' || card.dataset.title.toLowerCase().includes(activeFilters.search);

            if (industryMatch && sizeMatch && searchMatch) {
                card.style.display = '';
                visibleCardCount++;
            } else {
                card.style.display = 'none';
            }
        });

        noResultsMessage.style.display = visibleCardCount === 0 ? 'block' : 'none';
        cardGrid.style.display = visibleCardCount === 0 ? 'block' : 'grid';
    }
});