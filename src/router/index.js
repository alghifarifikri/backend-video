const express = require('express')
const router = express.Router()
const users = require('./user')
const share = require('./video')

router.use('/user', users)
router.use('/video', share)
router.get('/', (req, res)=>{
    res.send('Hello World !')
})

module.exports = router