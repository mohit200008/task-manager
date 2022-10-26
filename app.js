const connectDB = require('./db/connect')
const express = require('express')
const app = express();
const notFound = require('./middleware/not-found')
const tasks = require("./routes/tasks")
const ErrorHandler = require('./middleware/error-handler')
require('dotenv').config()
app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(ErrorHandler)

const port = 3000;

const start = async () => {
    try {
        await connectDB('mongodb+srv://admin:admin@task.gf7ifn1.mongodb.net/tasks?retryWrites=true&w=majority')
        app.listen(port, console.log(`Server is listening on ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()