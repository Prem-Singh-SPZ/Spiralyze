document.addEventListener('DOMContentLoaded', function () {

    // --- Element Selections ---
    // Added initial checks for critical elements.
    // If a primary element isn't found, log an error and potentially return early to prevent further issues.
    const filterBar = document.querySelector('.filter-bar');
    if (!filterBar) {
        console.error("Critical Error: '.filter-bar' element not found. Filtering functionality may be impaired.");
        // Depending on criticality, you might want to return here: return;
    }

    const industryFilter = {
        button: document.getElementById('industryFilterButton'),
        menu: document.getElementById('industryFilterMenu'),
        // Safely access querySelector result, providing default for chaining
        text: document.getElementById('industryFilterButton')?.querySelector('.filter-dropdown__text'),
        items: document.querySelectorAll('#industryFilterMenu .filter-dropdown__item')
    };

    // More robust checks for filter components
    if (!industryFilter.button || !industryFilter.menu || !industryFilter.text) {
        console.warn("Warning: Industry filter components (button, menu, or text) not fully found.");
    }


    const sizeFilter = {
        button: document.getElementById('sizeFilterButton'),
        menu: document.getElementById('sizeFilterMenu'),
        // Safely access querySelector result
        text: document.getElementById('sizeFilterButton')?.querySelector('.filter-dropdown__text'),
        items: document.querySelectorAll('#sizeFilterMenu .filter-dropdown__item')
    };

    if (!sizeFilter.button || !sizeFilter.menu || !sizeFilter.text) {
        console.warn("Warning: Size filter components (button, menu, or text) not fully found.");
    }

    const searchInput = document.getElementById('searchInput');
    const searchClearBtn = document.querySelector('.search-bar__clear');
    const searchForm = document.getElementById('searchForm');
    const searchSubmitBtn = document.querySelector('.search-bar__submit');

    // Checks for search elements
    if (!searchInput || !searchClearBtn || !searchForm || !searchSubmitBtn) {
        console.warn("Warning: One or more search bar components not found. Search functionality may be impaired.");
    }


    const cardGrid = document.getElementById('cardGrid');
    // allCards might be an empty NodeList, which is fine, no need to check length here.
    const allCards = document.querySelectorAll('#cardGrid .card');
    const noResultsMessage = document.getElementById('noResultsMessage');

    // Checks for results display elements
    if (!cardGrid || !noResultsMessage) {
        console.warn("Warning: Card grid or no results message element not found. Display may be affected.");
    }


    const activeFilters = {
        industry: 'all',
        size: 'all',
        search: ''
    };

    // --- Dropdown Logic ---
    function setupDropdown(filter) {
        // Ensure filter.button exists before adding event listener
        if (filter.button) {
            filter.button.addEventListener('click', (e) => {
                e.stopPropagation();
                // Close other dropdowns
                [industryFilter, sizeFilter].forEach(f => {
                    // Ensure filter menu and button exist before attempting to modify classes
                    if (f !== filter && f.menu && f.button) {
                        f.menu.classList.remove('is-open');
                        f.button.classList.remove('is-open');
                    }
                });
                // Toggle current dropdown - ensure menu and button exist
                if (filter.menu) filter.menu.classList.toggle('is-open');
                if (filter.button) filter.button.classList.toggle('is-open');
            });
        } else {
            console.warn("Cannot set up dropdown: Filter button missing for", filter);
            return; // Exit if button is missing, no point in setting up items
        }


        filter.items.forEach(item => {
            // Ensure item exists before adding event listener
            if (!item) {
                console.warn("Undefined item found in dropdown items. Skipping.");
                return; // Skip this iteration if item is null/undefined
            }
            item.addEventListener('click', () => {
                // Ensure filter.text exists before setting textContent
                if (filter.text) {
                    // Provide default empty string if item.textContent is null/undefined
                    filter.text.textContent = item.textContent || '';
                } else {
                    console.warn("Filter text element missing for dropdown item:", item);
                }

                // Check if currentSelected exists before removing class
                const currentSelected = filter.menu?.querySelector('.is-selected'); // Use optional chaining
                if (currentSelected) {
                    currentSelected.classList.remove('is-selected');
                }
                item.classList.add('is-selected');

                // Safely access item.dataset.value, providing a default
                if (filter === industryFilter) {
                    activeFilters.industry = item.dataset.value || 'all';
                } else if (filter === sizeFilter) {
                    activeFilters.size = item.dataset.value || 'all';
                }

                applyFilters();
            });
        });
    }

    // Call setupDropdown only if the primary filter components are available
    if (industryFilter.button && industryFilter.menu && industryFilter.text && industryFilter.items.length > 0) {
        setupDropdown(industryFilter);
    } else {
        console.warn("Industry filter setup skipped due to missing components.");
    }

    if (sizeFilter.button && sizeFilter.menu && sizeFilter.text && sizeFilter.items.length > 0) {
        setupDropdown(sizeFilter);
    } else {
        console.warn("Size filter setup skipped due to missing components.");
    }


    // Ensure filter objects have menu and button before adding global click listener
    window.addEventListener('click', () => {
        [industryFilter, sizeFilter].forEach(f => {
            if (f.menu && f.button) {
                f.menu.classList.remove('is-open');
                f.button.classList.remove('is-open');
            }
        });
    });

    // --- Updated Search Logic ---

    // On tablet/mobile, this button opens the search view
    // Ensure searchSubmitBtn and searchInput and filterBar exist
    if (searchSubmitBtn && searchInput && filterBar) {
        searchSubmitBtn.addEventListener('click', (e) => {
            // Only activate search mode if the input is not visible (i.e., on tablet/mobile)
            // Use window.getComputedStyle safely
            const searchInputStyle = window.getComputedStyle(searchInput);
            if (searchInputStyle && searchInputStyle.display === 'none') {
                e.preventDefault(); // Prevent form submission
                filterBar.classList.add('search-mode-active');
                searchInput.focus();
            }
        });
    } else {
        console.warn("Search submit button, input, or filter bar missing. Search mode activation may not work.");
    }


    // Ensure searchInput and searchClearBtn exist
    if (searchInput && searchClearBtn) {
        searchInput.addEventListener('focus', () => {
            searchClearBtn.classList.add('is-visible');
        });
        searchInput.addEventListener('input', () => {
            // Ensure searchInput.value is a string before calling methods
            activeFilters.search = (searchInput.value || '').toLowerCase().trim();
            // searchClearBtn.classList.toggle('is-visible', activeFilters.search.length > 0);
            applyFilters();
        });
    } else {
        console.warn("Search input or clear button missing. Search input logic disabled.");
    }


    // Ensure searchForm exists
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => e.preventDefault());
    } else {
        console.warn("Search form missing. Form submission prevention disabled.");
    }


    // The reset button now also closes the search mode view on tablet/mobile
    // Ensure searchForm, searchClearBtn, filterBar, and searchInput exist
    if (searchForm && searchClearBtn && filterBar && searchInput) {
        searchForm.addEventListener('reset', () => {
            activeFilters.search = '';
            searchClearBtn.classList.remove('is-visible');

            // Deactivate search mode to show filters again
            if (filterBar.classList.contains('search-mode-active')) {
                filterBar.classList.remove('search-mode-active');
            }

            applyFilters();
            // Don't focus if we are closing the search bar on mobile
            const searchInputStyle = window.getComputedStyle(searchInput);
            if (searchInputStyle && searchInputStyle.display !== 'none') {
                searchInput.blur();
            }
        });
    } else {
        console.warn("Search form, clear button, filter bar, or search input missing. Search reset logic disabled.");
    }


    // --- NEW HELPER FUNCTION ---
    /**
     * Normalizes a string by removing commas and converting to lowercase.
     * @param {string} str The input string.
     * @returns {string} The normalized string.
     */
    function normalizeSizeValue(str) {
        if (typeof str !== 'string') {
            return ''; // Handle non-string inputs gracefully
        }
        return str.replace(/,/g, '').toLowerCase();
    }

    // --- Core Filtering Function ---
    function applyFilters() {
        let visibleCardCount = 0;

        // Ensure allCards is a valid NodeList before iterating
        if (!allCards || allCards.length === 0) {
            console.warn("No cards found to filter.");
            // Hide card grid and show no results if no cards are present at all
            if (cardGrid) cardGrid.style.display = 'none';
            if (noResultsMessage) noResultsMessage.style.display = 'block';
            return; // Exit function if no cards to process
        }

        allCards.forEach(card => {
            // Critical check: Ensure the 'card' element itself is not null/undefined within the loop
            if (!card) {
                console.warn("Encountered a null/undefined card element in the collection. Skipping.");
                return; // Skip this iteration
            }

            // Normalize card data attributes. Use `|| ''` for robustness.
            // Optional chaining (`?.`) could also be used here if preferred: `card.dataset.industry?.toLowerCase() || ''`
            const normalizedCardIndustry = (card.dataset.industry || '').toLowerCase();
            const normalizedCardSize = normalizeSizeValue(card.dataset.size); // normalizeSizeValue already handles non-strings
            const normalizedCardTitle = (card.dataset.title || '').toLowerCase();

            // Active filter values are set programmatically and should be safe.
            const filterIndustry = activeFilters.industry.toLowerCase();
            const filterSize = normalizeSizeValue(activeFilters.size);
            const filterSearch = activeFilters.search;

            // Determine matches using normalized values
            const industryMatch = (filterIndustry === 'all' || normalizedCardIndustry === filterIndustry);
            const sizeMatch = (filterSize === 'all' || normalizedCardSize === filterSize);
            const searchMatch = (filterSearch === '' || normalizedCardTitle.includes(filterSearch));

            // Ensure card.style exists before attempting to change display
            if (card.style) {
                if (industryMatch && sizeMatch && searchMatch) {
                    card.style.display = ''; // Show the card (uses default display property)
                    visibleCardCount++;
                } else {
                    card.style.display = 'none'; // Hide the card
                }
            } else {
                console.warn("Card element has no 'style' property (unexpected):", card);
            }
        });

        // Ensure noResultsMessage and cardGrid exist before manipulating their display
        if (noResultsMessage) {
            noResultsMessage.style.display = visibleCardCount === 0 ? 'block' : 'none';
        } else {
            console.warn("noResultsMessage element not found. Cannot update its display.");
        }

        if (cardGrid) {
            cardGrid.style.display = visibleCardCount === 0 ? 'block' : 'grid';
        } else {
            console.warn("cardGrid element not found. Cannot update its display.");
        }
    }

    // Call applyFilters initially to set correct display based on default filters
    applyFilters();
});