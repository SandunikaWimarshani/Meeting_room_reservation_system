const express = require('express')
const router = express.Router()

router.get('/userlogin', (req, res) => {
    res.render('./userlogin')
})

router.post('/userlogin', (req, res) => {
    if(req.body.username == "" && req.body.pswd == ""){
        res.render('./view')

    }else{
        res.render('./userlogin', {message: "Error.. Invalid Sign In"})
    }
});

module.exports = router