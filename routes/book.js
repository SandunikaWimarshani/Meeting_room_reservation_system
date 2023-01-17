const express = require('express')
const router = express.Router()
const Book = require('../models/reservation')

router.get('/book', (req, res) => {
    Book.find((err, docs) => {
        if(!err){
            res.render('./book', {data:docs})
        }else{
            console.log('Failed' + err);
        }
    })
    
})


module.exports = router

