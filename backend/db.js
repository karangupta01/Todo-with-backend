const mongoose = require('mongoose')
require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL) 
.then(() => {
    console.log('MongoDB connected')
}).catch((err) => {
    console.log(err)
})

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})
const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo: todo
}