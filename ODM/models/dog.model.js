const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
    name: String,
    color: String,
    age: Number,
    adopted: Boolean
})

const Dog = mongoose.model('dog', dogSchema)

module.exports = Dog