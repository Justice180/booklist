Book List App

A simple JavaScript book list application that allows users to add, display, and remove books from a list. This app is built using ES6 Classes and supports local storage to persist books even after the page is refreshed.

Features

Add new books with a title, author, and ISBN.

Display books in a table format.

Remove books from the list.

Save books to local storage so they persist across sessions.

Alerts for user actions (success/error messages).

Technologies Used

HTML

CSS

JavaScript (ES6)

How to Use

Clone this repository:

git clone https://github.com/your-username/book-list-app.git

Open index.html in a web browser.

Enter a book title, author, and ISBN, then click "Add Book".

Click the X button to remove a book from the list.

Project Structure

book-list-app/
│-- index.html   # Main HTML file
│-- style.css    # CSS styles
│-- app.js       # JavaScript logic
│-- README.md    # Documentation

Code Overview

Book Class: Represents a book object.

UI Class: Handles UI interactions (displaying books, showing alerts, clearing fields).

Store Class: Manages local storage operations.

Event Listeners: Handle adding and removing books.

Future Improvements

Add an edit feature for books.

Implement a search/filter function.

Improve UI with animations and better styling.

License

This project is open-source and available under the MIT License.

