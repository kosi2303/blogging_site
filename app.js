const ejs = require('ejs')
const mongoose = require('mongoose')
const express = require('express')
const blog_schema = require('./blog_schema')

const app = express()
mongoose.connect('mongodb+srv://MyFirstBlog:vZs0o6hON2A5i2ZP@nodeapps.izxa8u1.mongodb.net/blog')
.then(()=>{
    app.listen(3000, ()=>{
        console.log("App started on port 3000");
    })
}).catch((err) => {
    console.log(err, "Database connection failed")
})

app.set('view engine', 'ejs')

app.use('/assets', express.static('assets'))


//creating the home route
app.get('/', (req, res)=>{
    res.render('index')
})

app.use(express.urlencoded({extended: true}));
//sending the blog details to the database
app.post('/success', (req, res)=>{
    const details = req.body

    run()
    async function run(){
        const blogs = new blog_schema({
            name: details.username,
            title: details.true,
            body: details.body
        })
        await blogs.save
    }

    res.render('success')
    console.log(details)
})

app.get('/blogs', async (req, res) => {
    const allPosts = await blog_schema.find()

    res.render('blogs', {posts: allPosts})
})