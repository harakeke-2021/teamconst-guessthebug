const express = require('express')
const utils = require('./utils')

const router = express.Router()

module.exports = router

router.use(express.urlencoded({
  extended: false
}))


router.get('/', (req, res) => {

})

router.post('/add', (req, res) => {
  
})