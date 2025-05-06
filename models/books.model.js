const {Schema, model} = require('mongoose')

const bookSchema = new Schema({

    title: String,
    author: String,
    yearOfPub: String
}, {timestamps: true})

const bookModel = model('Book', bookSchema)

module.exports = bookModel