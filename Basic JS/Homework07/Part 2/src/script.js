let myForm = document.getElementById("form");
let bookTitle = myForm.children[0];
let bookAuthor = myForm.children[1];
let bookReadingStatus = document.getElementById("readingStatus");

let libraryBtn = document.getElementById("library");

// our book array
let books = [];

// Constructor Notation 
function Book(bTitle, bAuthor, bReadingStatus) {
    this.title = bTitle
    this.author = bAuthor
    this.readingStatus = bReadingStatus;
    this.bookFunction = function() {
        if (this.readingStatus) {
            return`Already read "${this.title}" by "${this.author}".`
        } else {
            return`You still need to read "${this.title}" by "${this.author}".`
        }
    }
}

//create object 
function formHandler(e) {
    //prevent form from submiting
    e.preventDefault();
    //create a new book object and push it into the array
    books.push(new Book(bookTitle.value, bookAuthor.value, bookReadingStatus.checked))

    //clear the input fields
    bookTitle.value = '';
    bookAuthor.value = '';
    bookReadingStatus.checked = false;
}

function libraryStatus() {
    for(let index in books) {
        console.log(`Book ${+index + 1}`)
        //call the current book function
        console.log(books[index].bookFunction())
    }
}

//handle submit event on the form
myForm.addEventListener('submit',formHandler);

// check the status of every entered book
libraryBtn.addEventListener("click", libraryStatus)
