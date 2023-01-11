const express = require('express')
const router = express.Router()

router.get('/book', (req, res) => {
    res.render('./book')
})


module.exports = router