if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter =require('./routes/index')
const loginRouter =require('./routes/login')
const viewRouter =require('./routes/view')
const bookRouter =require('./routes/book')
const logoutRouter =require('./routes/logout')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/view', viewRouter)
app.use('/book', bookRouter)
app.use('/logout', logoutRouter)


app.listen(3000, () => console.log('Server started at 3000'));


