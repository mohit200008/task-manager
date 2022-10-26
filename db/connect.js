const mongoose = require('mongoose')

// const connectionStr = 'mongodb+srv://admin:admin@task.gf7ifn1.mongodb.net/?retryWrites=true&w=majority'

const connectDB =(url) => {
    return mongoose
    .connect(url)
}

module.exports = connectDB