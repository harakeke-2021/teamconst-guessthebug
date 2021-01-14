const express = require('express')
const utils = require('./utils')
const router = express.Router()
const path = require('path')
const server = require('./server')


const home = path.join(__dirname, 'home')

router.use(express.urlencoded({
  extended: false
}))


router.get('/', (req, res) => {
  const viewData = utils.exampleData 
  res.render('home')
})

router.post('/add', (req, res) => {
  
})

module.exports = router