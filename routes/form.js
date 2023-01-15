const express = require('express')
const router = express.Router()

router.get('/form', (req, res) => {
    res.render('form')
})

router.post('/form', function(req, res){
   Book.insertMany(
    new Book({
        empname: req.body.empname,
        roomno: req.body.roomno,
        date: req.body.date,
        starttime: req.body.starttime,
        endtime: req.body.endtime,
        avaliability: req.body.avaliability
    }), function(err, msg){
        if(err){
            console.log(err)
            res.render('./form', {messeage:err})
        }else{
            res.render('/book', {messeage:"Reservation Complete"})
        }
    }
   )
})
module.exports = router