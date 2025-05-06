const express = require('express')
const { addBooks, getAllBooks, updateBooks } = require('../controller/books.controller')

const route = express.Router()

route.post('/add', addBooks)

route.get('/get-all-books', getAllBooks)

route.put('/update-book/:id', updateBooks)


module.exports = route