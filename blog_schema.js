const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://MyFirstBlog:vZs0o6hON2A5i2ZP@nodeapps.izxa8u1.mongodb.net/blog')

const blog_schema = new mongoose.Schema({
    name: String,
    title: String,
    body: String
})

module.exports = mongoose.model('post', blog_schema)