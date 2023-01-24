if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const Book = require('./models/reservation')
const cors = require('cors')
const methodoverride = require('method-override')
const socket = require('socket.io')

const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);


var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(methodoverride("_method"))


const indexRouter =require('./routes/index')
const adminloginRouter =require('./routes/adminlogin')
const userloginRouter =require('./routes/userlogin')
const viewRouter =require('./routes/view')
const formRouter = require('./routes/form')
const bookRouter =require('./routes/book')
const logoutRouter =require('./routes/logout')
const deleteRouter =require('./routes/delete')
const updateRouter =require('./routes/update')

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
app.use('/adminlogin', adminloginRouter)
app.use('/userlogin', userloginRouter)
app.use('/view', viewRouter)
app.use('/form', formRouter)
app.use('/book', bookRouter)
app.use('/logout',logoutRouter)
app.use('/delete', deleteRouter)
app.use('/update', updateRouter)



server.listen(3000, () => console.log('Server started at 3000'));

io.on('connection', (socket) =>{
  console.log('user is viewing reservation room list')
  socket.on('disconnect', () => {
    console.log('user exited from viewing reservation room list');
  });
}) ;
  

module.exports = server