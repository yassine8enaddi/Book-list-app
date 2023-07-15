import { Book } from "./book.js";
import { UI } from "./UI.js";
import { Store } from "./store.js";

//DISPLAY BOOK LIST
document.addEventListener('DOMContentLoaded',UI.displayBooks());


//ADD BOOK EVENT

const form = document.getElementById('book-form');
form.addEventListener('submit',e => {

  //prevent the default behavior
  e.preventDefault();

  //getting the form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert();
  }

  else {
    const book = new Book(title, author, isbn);

  // add book to the UI
  UI.addBookToList(book);

  // add book to the store
  Store.addBook(book);
  UI.validation('added');
  }

  UI.clearFields();

});

//DELETE BOOK EVENT

const table = document.querySelector('table');

table.addEventListener('click', e => {
  if (e.target.classList.contains('delete-btn')) {
    //delete book from the UI
    UI.deleteBookFromList();
    //delete book from the store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    UI.validation('removed');
  }
})