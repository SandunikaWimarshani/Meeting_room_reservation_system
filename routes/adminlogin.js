const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')


router.get('/adminlogin', (req, res) => {
    res.render('./adminlogin')
})

router.post('/adminlogin', (req, res) => {
    if(req.body.username == "admin" && req.body.pswd == "admin123"){
        res.redirect('/book/book')

    }else{
        res.render('./adminlogin', {message: "Error.. Invalid Sign In"})
    }
});


module.exports = router