const express = require('express');
let books = require("../models/booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  res.send(JSON.stringify({books},null,4));
});

// Get book details based on ISBN
public_users.get("/books/:id", async (req,res)=> {
  try {
    const id = req.params.id;
    const book = await books.findById(id).populate("author");
    if (!books) {
      return res.status(404).json({error: "Book not found"});
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({error: err.message });
  }  
});
  
/* // Get book details based on author
public_users.get('/books/author/:id', (req,res)=>{
  const author = req.params.author;
  let filtered_author = books.filter((book) => book.author === author);
  res.send(filtered_author);
}); */

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
