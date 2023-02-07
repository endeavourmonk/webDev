// Book Class
class Book {
  constructor(book, author, isbn) {
    this.title = book;
    this.author = author;
    this.ISBN = isbn;
  }
}

// UI : Handle UI tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  // Add books to list
  static addBookToList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.ISBN}</td>
    <td><a href="#" class="delete-btn delete"><i class="fa-solid fa-square-xmark delete" ></i></a></td>
    `;

    list.appendChild(row);
  }

  // Delete a book
  static deleteBooks(ele) {
    if (ele.classList.contains("delete")) {
      ele.parentElement.parentElement.parentElement.remove();
    }
  }

  // Show alerts - Success, Removed, warning
  static showAlert(msg, className) {
    const div = document.createElement("div");
    div.className = `alert-box alert-${className}`;
    div.innerHTML = `${msg}`;
    // const container = document.querySelector(".container");
    // const form = document.querySelector("#book-form");
    // container.insertBefore(div, form);

    document.querySelector(".heading").appendChild(div);

    setTimeout(() => {
      div.remove();
    }, 1000);
  }

  // clear Input fields
  static clearField() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

// Store Class: Handle Local Storages
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.ISBN === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

// Handling events......

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Event: Add a book
const formData = document.querySelector("#book-form");
formData.addEventListener("submit", (e) => {
  // Prevent default submit
  e.preventDefault();

  // Get values from form
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // Validate input
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please fill the fields before submitting", "warning");
  } else {
    // Instantiate book
    const book = new Book(title, author, isbn);
    // Add book to UI
    UI.addBookToList(book);
    // Add Books to store
    Store.addBook(book);
    // Show success Message
    UI.showAlert(`${title} added`, "added");
    // Clear fields
    UI.clearField();
  }
});

//Event: Remove a book
document.querySelector("#book-list").addEventListener("click", (e) => {
  // Remove from UI
  UI.deleteBooks(e.target);
  // Remove book from Storage
  Store.removeBook(
    e.target.parentElement.parentElement.parentElement.cells[2].innerText
  );
  // Show alert message
  UI.showAlert(
    `${e.target.parentElement.parentElement.parentElement.cells[0].innerText} Removed`,
    "removed"
  );
});
