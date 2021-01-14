const express = require('express')
const utils = require('./utils')
const router = express.Router()
const path = require('path')
const server = require('./server')


const home = path.join(__dirname, 'home')

router.use(express.urlencoded({
  extended: false
}))

router.post('/', (req, res) => {
  console.log(req.body)
})


router.get('/', (req, res) => {
  const viewData = utils.exampleData()
  console.log(viewData)
  res.render('home', viewData)
})

router.post('/add', (req, res) => {
  
})

module.exports = router