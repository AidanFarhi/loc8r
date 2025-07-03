const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

/* GET homepage. */
router.get('/', indexController)

module.exports = router
