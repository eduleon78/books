var Book = require('../../models/book');

exports.book_list = function(req, res){
    res.status(200).json({
        books: Book.allBooks
    })
}