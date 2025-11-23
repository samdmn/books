let filteredBooks = [];
let currentGenreFilter = 'all';
let currentYearFilter = 'all';
let currentSearchTerm = '';
let currentPage = 1;
let booksPerPage = 5;

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        filteredBooks = [...books];
        renderBooks();
        updateStats();
        generateFilters();
        setupEventListeners();
        renderRatingsChart();
    }, 500);
});

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const genreSelect = document.getElementById('genreSelect');
    const yearSelect = document.getElementById('yearSelect');
    const clearFiltersBtn = document.getElementById('clearFilters');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentSearchTerm = e.target.value.toLowerCase();
            currentPage = 1;
            filterBooks();
        });
    }

    if (genreSelect) {
        genreSelect.addEventListener('change', function(e) {
            currentGenreFilter = e.target.value;
            currentPage = 1;
            filterBooks();
        });
    }

    if (yearSelect) {
        yearSelect.addEventListener('change', function(e) {
            currentYearFilter = e.target.value;
            currentPage = 1;
            filterBooks();
        });
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            if (genreSelect) genreSelect.value = 'all';
            if (yearSelect) yearSelect.value = 'all';
            if (searchInput) searchInput.value = '';
            currentGenreFilter = 'all';
            currentYearFilter = 'all';
            currentSearchTerm = '';
            currentPage = 1;
            filterBooks();
        });
    }
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('page-link')) {
            currentPage = parseInt(e.target.dataset.page);
            renderBooks();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

function generateFilters() {
    if (!books || books.length === 0) return;
    
    const genres = [...new Set(books.map(book => book.genre).filter(genre => genre))];
    const genreSelect = document.getElementById('genreSelect');
    
    if (genreSelect) {
        genres.sort().forEach(genre => {
            const option = document.createElement('option');
            option.value = genre;
            option.textContent = genre;
            genreSelect.appendChild(option);
        });
    }

    const years = [...new Set(books.map(book => book.year).filter(year => year))];
    const yearSelect = document.getElementById('yearSelect');
    
    if (yearSelect) {
        years.sort((a, b) => b - a).forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        });
    }
}

function filterBooks() {
    if (!books || books.length === 0) {
        filteredBooks = [];
        renderBooks();
        return;
    }
    
    filteredBooks = books.filter(book => {
        const title = book.title || '';
        const author = book.author || '';
        const description = book.description || '';
        const matchesSearch = title.toLowerCase().includes(currentSearchTerm) ||
                            author.toLowerCase().includes(currentSearchTerm) ||
                            description.toLowerCase().includes(currentSearchTerm);
        const matchesGenre = currentGenreFilter === 'all' || book.genre === currentGenreFilter;
        const matchesYear = currentYearFilter === 'all' || book.year == currentYearFilter;
        return matchesSearch && matchesGenre && matchesYear;
    });
    renderBooks();
}

function updateStats() {
    if (!books || books.length === 0) return;
    
    const totalBooks = books.length;
    const totalBooksEl = document.getElementById('totalBooks');
    if (totalBooksEl) totalBooksEl.textContent = totalBooks;

    const avgRatingEl = document.getElementById('avgRating');
    if (avgRatingEl) avgRatingEl.textContent = '-';

    const genreCounts = books.reduce((acc, book) => {
        if (book.genre) {
            acc[book.genre] = (acc[book.genre] || 0) + 1;
        }
        return acc;
    }, {});
    
    const topGenre = Object.keys(genreCounts).length > 0
        ? Object.keys(genreCounts).reduce((a, b) => genreCounts[a] > genreCounts[b] ? a : b)
        : '-';
    const topGenreEl = document.getElementById('topGenre');
    if (topGenreEl) topGenreEl.textContent = topGenre;
}

function renderRatingsChart() {
    const chartEl = document.getElementById('ratingsChart');
    if (!chartEl) return;
    
    chartEl.innerHTML = '<div style="text-align: center; color: #feca57;">Aucune note disponible</div>';
}

function truncateText(text, maxLength = 300) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        lightbox.style.display = 'flex';
    }
}

const lightbox = document.getElementById('lightbox');
if (lightbox) {
    lightbox.addEventListener('click', function() {
        this.style.display = 'none';
    });
}

function addCoverLightboxEvents() {
    document.querySelectorAll('.book-cover img').forEach(img => {
        img.style.cursor = 'pointer';
        img.removeEventListener('click', img.lightboxHandler);
        img.lightboxHandler = () => openLightbox(img.src);
        img.addEventListener('click', img.lightboxHandler);
    });
}

function renderBooks() {
    const container = document.getElementById('booksContainer');
    if (!container) return;
    
    if (!filteredBooks || filteredBooks.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>Aucun résultat trouvé</h3>
                <p>Essayez de modifier vos critères de recherche ou de filtrage.</p>
            </div>
        `;
        const paginationEl = document.getElementById('pagination');
        if (paginationEl) paginationEl.innerHTML = '';
        return;
    }
    
    filteredBooks.sort((a, b) => (b.id || 0) - (a.id || 0));

    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const booksToDisplay = filteredBooks.slice(startIndex, endIndex);
    
    container.innerHTML = `
        <div class="books-grid">
            ${booksToDisplay.map(book => `
                <div class="book-card">
                    <div class="book-cover">
                        ${book.cover ? 
                            `<img src="${book.cover}" alt="${book.title || 'Livre'}">` : 
                            `<div style="text-align: center; padding: 20px; background: rgba(255, 255, 255, 0.1); border-radius: 8px;">
                                <div style="font-size: 3rem; margin-bottom: 10px;">📚</div>
                                <div>${book.title || 'Sans titre'}</div>
                            </div>`
                        }
                    </div>
                    <div class="book-info">
                        <h3 class="book-title">${book.title || 'Sans titre'}</h3>
                        ${book.author ? `<p class="book-author">Par ${book.author}</p>` : ''}
                        <div class="book-meta">
                            <div class="book-details">
                                <span>${book.year || 'Année inconnue'}</span>
                                ${book.genre ? `<span class="genre-tag">${book.genre}</span>` : ''}
                            </div>
                        </div>
                        ${book.description ? `
                            <div class="book-review">
                                <div class="review-text-${book.id}">
                                    <b>Synopsis :</b> ${truncateText(book.description)}
                                    ${book.description.length > 300 ? `
                                        <span class="review-toggle" onclick="toggleDescription(${book.id})">
                                            Lire plus
                                        </span>
                                    ` : ''}
                                </div>
                            </div>
                        ` : ''}
                        ${book.quotes && book.quotes.length > 0 && book.quotes[0] !== '' ? `
                            <div class="book-quotes">
                                <h4 style="color: #feca57; font-size: 0.9rem; margin-bottom: 8px;">Citation :</h4>
                                ${book.quotes.map(quote => `
                                    <blockquote style="border-left: 3px solid #feca57; padding-left: 12px; margin: 8px 0; font-style: italic; color: rgba(255,255,255,0.9);">
                                        "${quote}"
                                    </blockquote>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    addCoverLightboxEvents();
    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let buttons = '';
    for (let i = 1; i <= totalPages; i++) {
        buttons += `<button class="page-link ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    pagination.innerHTML = buttons;
}

function toggleDescription(id) {
    const reviewDiv = document.querySelector(`.review-text-${id}`);
    if (!reviewDiv) return;
    const book = books.find(b => b.id === id);
    if (!book || !book.description) return;

    if (reviewDiv.textContent.includes('Lire plus')) {
        reviewDiv.innerHTML = book.description + ` <span class="review-toggle" onclick="toggleDescription(${id})">Lire moins</span>`;
    } else {
        reviewDiv.innerHTML = truncateText(book.description) + ` <span class="review-toggle" onclick="toggleDescription(${id})">Lire plus</span>`;
    }
}