function searchBooks() {
  let query = document.getElementById("search").value.toLowerCase();
  let books = document.querySelectorAll(".book");
  books.forEach((book) => {
    let title = book.querySelector(".book-title").innerText.toLowerCase();
    if (title.includes(query)) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
}

function showSuggestions() {
  let query = document.getElementById("search").value.toLowerCase();
  let suggestionsBox = document.getElementById("suggestions");
  let books = [
    "The Art of Thinking Clearly",
    "The Republic",
    "Story: Substance, Structure, Style",
    "Salt, Fat, Acid, Heat",
  ];
  let filteredBooks = books.filter((book) =>
    book.toLowerCase().includes(query)
  );
  suggestionsBox.innerHTML = filteredBooks
    .map((book) => `<div onclick="selectSuggestion('${book}')">${book}</div>`)
    .join("");
  suggestionsBox.style.display = filteredBooks.length ? "block" : "none";
}

function selectSuggestion(book) {
  document.getElementById("search").value = book;
  document.getElementById("suggestions").style.display = "none";
  searchBooks();
}
