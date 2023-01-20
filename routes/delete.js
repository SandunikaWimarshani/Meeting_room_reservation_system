const express = require('express')
const router = express.Router()
const Book = require('../models/reservation')
const methodoverride = require('method-override')


router.get('/delete', (req, res) => {
    res.render('./delete')
})

router.get('/deleteBooking', (req,res)=> {
    Book.deleteMany({'empName': req.query.empName}, function(err, success){
        if(err){
            res.render('./book', {message:err})
        }else{
            res.render('./view', {message: "Successfully Deleted"})
        }
    })
})

module.exports = router