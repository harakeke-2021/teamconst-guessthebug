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

router.post('/', (req, res) => {
  const theMoth = req.body
  console.log(theMoth)
  const correctAnswer = theMoth.correctAnswer
  if (correctAnswer === theMoth.userSelection){
    //const strMoth = JSON.stringify(theMoth)
    console.log('correct moth')
    res.render('correct', theMoth)
  } else {
    //const strMoth = JSON.stringify(theMoth)
    console.log('incorrect moth')
    res.render('wrong', theMoth)
  } 
})


router.get('/', (req, res) => {
  const viewData = utils.getData()
  console.log(viewData)
  res.render('home', viewData)
})

router.post('/', (req, res) => {
//const theMoth = req.body
//console.log('test')


})

router.post('/correct', (req, res) => {
  res.render('')
})

router.post('/add', (req, res) => {
  
})

module.exports = router