const express = require('express')
const router = express.Router()

router.get('/joinChat', (req, res) => {
    res.render('./joinChat')
})


module.exports = router