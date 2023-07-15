import { Store } from "./store.js";
// UI CLASS DEFINITION
export class UI {

  static displayBooks () {
    const books = Store.getBooks();
    books.forEach((book) => { UI.addBookToList(book);})

  }

  static addBookToList(book) {

    const bookList = document.getElementById('book-list');
    const row = document.createElement('tr');

    //row too be added
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td>`;

    //delete button creation and styling
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.style.cssText = 'height: 25px; width: 25px; color: white; background-color: red; border: none ;border-radius: 5px; '

    //putting the button inside the last table cell to be added to the row
    const td = document.createElement('td');
    td.appendChild(deleteBtn);
    row.appendChild(td);

    //adding the book to the list
    bookList.appendChild(row);
  }

  static deleteBookFromList(){
    const button = document.querySelector('.delete-btn');
    button.parentElement.parentElement.remove();
  }

  static showAlert() {
    const formContainer = document.querySelector('.form-container');
    const bookForm = document.getElementById('book-form');
    const div = document.createElement('div');
    const alertText = document.createTextNode('please fill in all fields');
    div.appendChild(alertText);
    div.className = "alert-msg";
    formContainer.insertBefore(div,bookForm)

    //the alert message will vanish after 3 seconds
    setTimeout(() => document.querySelector('.alert-msg').remove(),3000)
  }

  static validation(msg) {
    const formContainer = document.querySelector('.form-container');
    const bookForm = document.getElementById('book-form');
    const div = document.createElement('div');
    if(msg === 'added'){
      const Text = document.createTextNode('Book added');
      div.appendChild(Text);
      div.className = "book-added";
      formContainer.insertBefore(div,bookForm);

    setTimeout(() => document.querySelector('.book-added').remove(),3000);
    }
    else if(msg === 'removed'){
      const Text = document.createTextNode('Book removed');
      div.appendChild(Text);
      div.className = "book-removed";
      formContainer.insertBefore(div,bookForm);

    setTimeout(() => document.querySelector('.book-removed').remove(),3000);
    }
  }
  
  static clearFields() {
    const title = document.getElementById('title').value="";
    const author = document.getElementById('author').value="";
    const isbn = document.getElementById('isbn').value="";
  }

}