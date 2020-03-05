const express = require('express')
const router = express.Router()

const {
    userStatus,
    userLogout
} = require('../controller/user')

router
    .put('/', userStatus)
    .delete('/', userLogout)
module.exports = router