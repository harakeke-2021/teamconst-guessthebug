const express = require('express')
const utils = require('./utils')
const router = express.Router()
const path = require('path')
const server = require('./server')
const { route } = require('./server')


const home = path.join(__dirname, 'home')

router.use(express.urlencoded({
  extended: false
}))


router.get('/', (req, res) => {
  res.render('home')
})

router.post('/', (req, res) => {
const theMoth = req.body
console.log(theMoth)

})

router.post('/correct', (req, res) => {
  res.render('')
})

router.post('/add', (req, res) => {
  
})

module.exports = router