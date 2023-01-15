const express = require('express')
const router = express.Router()

router.get('/userlogin', (req, res) => {
    res.render('./userlogin')
})


module.exports = router