//Book Constructor
function Book (title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Constructor
function UI (){}

//Add book to list
UI.prototype.addBookToList = function(book){
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

UI.prototype.showAlert = function(message, className){
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

//Delete book
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
     target.parentElement.parentElement.remove();
  }
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

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

  ui.showAlert('Book Removed!', 'success')
  
  e.preventDefault()
})