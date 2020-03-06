const express = require('express')
const router = express.Router()

const {
    readVid,
    addVid
} = require('../controller/video')

router
    .get('/', readVid)
    .post('/', addVid)
module.exports = router