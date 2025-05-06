const mongoose = require('mongoose')

const ConnectDB = async () => {


    const DB_URL = process.env.DB_URL
    const connection = await mongoose.connect(DB_URL)

    if (connection) {
        console.log('DB connected')
    }

}
module.exports = ConnectDB