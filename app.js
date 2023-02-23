const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

const PORT = process.env.PORT || 5000

app.use(express.static('./public'));

// middleware for json
app.use(express.json())

// Route for API 
app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandler)

// Written in start function as we want to spin up the server only if the db is connected
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)

        // If the DB connection is successful then server will start listen
        app.listen(PORT, () => {
            console.log(`server is listening on ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

// Invoking the start function for connect the db and start the server
start();