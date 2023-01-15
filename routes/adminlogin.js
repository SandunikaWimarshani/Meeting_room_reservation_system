const express = require('express')
const router = express.Router()

router.get('/adminlogin', (req, res) => {
    res.render('./adminlogin')
})

router.post('/adminlogin', (req, res) => {
    if(req.body.username=="admin" && req.body.pswd=="admin1234"){
        res.render('./adminlogin')

    }else{
        res.render('./adminlogin', {message: "Error.. Invalid Sign In"})
    }
});


module.exports = router