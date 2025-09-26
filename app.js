import books from './books.js';
document.addEventListener('DOMContentLoaded', function() {
    const collection = document.getElementById("collection");
    
    setTimeout(() => {
        displayBooks();
    }, 300);

    function displayBooks() {
        books.forEach((book, index) => {
            const bookDiv = document.createElement("div");
            bookDiv.id = `${index + 1}`;
            bookDiv.className = "book";
            bookDiv.style.animationDelay = `${(index + 1) * 0.15}s`;
            
            bookDiv.innerHTML = `
                <div class="book-cover">
                    <img src="${book.cover}" alt="Couverture de '${book.title}'">
                </div>
                <div class="book-info">
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">${book.author}</div>
                    <div class="book-year">${book.year}</div>
                </div>
            `;
            
            collection.appendChild(bookDiv);
        });
    }
});

