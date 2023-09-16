var express = require('express');
var router = express.Router();
var bookController = require('../../controllers/api/booksControllerAPI');

router.get('/', bookController.book_list);

module.exports = router;