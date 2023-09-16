class Book {
    constructor(id, author, title, reviews) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.reviews = reviews;
    }
}

Book.prototype.toString = function () {
    return 'id: ' + this.id + " | author: " + this.author + " | title: " + this.title + " | reviews: " + this.reviews;
}

Book.allBooks = []
Book.add = function(aBook){
    Book.allBooks.push(aBook);
}

Book.findById = function(aBookId){
    var aBook = Book.allBooks.find(x => x.id == aBookId);
    if (aBook)
        return aBook;
    else 
        throw new Error(`No existe un libro con el id ${aBookId}`);
}

var a = new Book(1, 'Romulo Gallegos', 'la luna', 4000);
var b = new Book(2, 'Santa Barbara', 'el sol', 3000);

module.exports = Book;
