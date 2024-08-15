const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel.js')
const productRoute = require('./routes/product.route.js')
const app = express()
const port = 3000


//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//routes
app.use('/api/products', productRoute)


app.get('/', (req, res) => {
    res.send('hello express')
})


//jangan di hek flish T_T
mongoose.connect("mongodb+srv://alphari:Siz1n1SirZ944QQ3@expresscrud.ls5l6.mongodb.net/Express-CRUD?retryWrites=true&w=majority&appName=expressCrud")
.then(() => {
    console.log('Connected to database')
    app.listen(port, () => {
        console.log(`server running on port ${port}`)
    })
})
.catch(() => {
    console.log('Connection failed')
})