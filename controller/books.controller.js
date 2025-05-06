const bookModel = require("../models/books.model")

const addBooks = async (req, res) => {

    try {

        const { title, author, yearOfPub } = req.body

        console.log(req.body)

        const book = new bookModel({ title, author, yearOfPub })

        await book.save()

        res.status(201).json({ messag: "book saved" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

const getAllBooks = async (req, res) => {

    try {

        const books = await bookModel.find()

        res.status(200).json({ books })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

const updateBooks = async (req, res) => {

    const bookId = req.params.id
    console.log(bookId, req.body)

    const { title, author, yearOfPub } = req.body
    const book = await bookModel.findOneAndUpdate({ _id: bookId }, { title, author, yearOfPub })

    res.status(200).json({ message: "Book updated successfully " })

}

module.exports = {

    addBooks,
    getAllBooks,
    updateBooks
}