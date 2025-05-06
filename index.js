const express = require('express')
const dotenv = require('dotenv')
const ConnectDB = require('./config/connectDB')

dotenv.config()

// manoj@webteampl.com

const app = express()

app.use(express.json())

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('Server is up at ', PORT)
    ConnectDB()
})

const booksRoutes = require('./routes/books.routes')

app.use('/api/books', booksRoutes)