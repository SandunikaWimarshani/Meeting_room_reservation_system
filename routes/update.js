const express = require('express')
const router = express.Router()
const Book = require('../models/reservation')
const methodoverride = require('method-override')


router.get('/updateBooking', (req,res) => {
    Book.findOne({empName: req.query.empName}, function(err, book){
        if(err){
            res.render('./book', {message: err})
        }else{
            res.render('./admin/update', {book: book})
        }
    })
})

router.patch('/updateBooking', (req,res) => {
    
    Book.updateMany({'empName': req.body.empName}, req.body,
        function(err, succ){
            if(err){
                res.render('./book', {message: err})
            }else{
                res.redirect('/book/book')
            }
        })
})



module.exports = router;