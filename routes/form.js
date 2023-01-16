const express = require('express')
const router = express.Router()
const Book = require('../models/reservation')

router.get('/form', (req, res) => {
    res.render('form')
})


router.post('/form', function(req, res){
   Book.insertMany(
    new Book({
        roomNo: req.body.room_no,
        empName:req.body.emp_name,
        empEmail:req.body.emp_email,
        empPhone: req.body.emp_phone,
        date:req.body.date,
        startTime:req.body.st_time,
        endTime:req.body.end_time,
    }), function(err, msg){
        if(err){
            console.log(err)
            res.render('./book', {messeage:err})
        }else{
            res.render('./form', {messeage:"Reservation Complete"})
        }
    }
   )
})
module.exports = router