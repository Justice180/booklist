class Book{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI{
  addBookToList(book){
    const list = document.getElementById('book-list');

  //Create tr element
  const row = document.createElement('tr');
  //Insert Cols
  row.innerHTML = `
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td>${book.isbn}</td>
   <td><a href ="#" class="delete">X</a></td>
  `
  list.appendChild(row)
  }

  showAlert(message, className){
    //Create div element
   const div = document.createElement('div');
   //Add className
   div.className = `alert ${className}`;
   //Create text node
   div.appendChild(document.createTextNode(message));
   //Get parent
   const container = document.querySelector('.container');
   //Get form
   const form = document.querySelector('#book-form');
   //Insert before
   container.insertBefore(div, form);

   //Time out after 3 sec
   setTimeout(function(){
    document.querySelector('.alert').remove();
   }, 3000)
  }

  deleteBook(target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
   }
  }

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

//Local Storage Clases
class Store{
  static getBooks(){
    let books;

    if(localStorage.getItem(books) === null){
      books = [];
    } else{
      books = JSON.parse(localStorage.getItem(books));
    }

    return books;
  }

  static displayBooks(){
    const books = Store.getBooks();

    books.forEach(function(book){
      const ui = new UI();

      ui.addBookToList(book);
    })
  }

  static addBook(book){
    const books = Store.getBooks()
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books))
  }

  static removeBook(isbn){
    const books = Store.getBooks();

    books.forEach(function(book, index){
     if(book.isbn === isbn){
       books.splice(index, 1)
     }
    })

    localStorage.setItem('books', JSON.stringify(books));
  }
}

//DOM Content Loaded
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//Event Listeners for add book
document.getElementById('book-form').addEventListener('submit', function(e){
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  //Instantiate Book
  const book = new Book(title, author, isbn);

  //Instantiate UI
  const ui = new UI()

  //Validate
  if(title === '' || author  === '' || isbn === ''){
    ui.showAlert('Please fill in the fields', 'error')
  } else{
    //Add book to list
    ui.addBookToList(book);

    //Add to LS
    Store.addBook(book);

    ui.showAlert('Book Added!', 'success')

    ui.clearFields();

  }

  e.preventDefault();
})

document.getElementById('book-list').addEventListener('click', function(e){
  //Instantiate UI
  const ui = new UI;

  //Delete book
  ui.deleteBook(e.target);

  //Remove from LS
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  ui.showAlert('Book Removed!', 'success')
  
  e.preventDefault()
})