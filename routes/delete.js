const express = require('express')
const router = express.Router()

router.get('/delete', (req, res) => {
    res.render('./delete')
})


module.exports = router