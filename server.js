const bugs = require('./bugs.json')
const express = require('express')
const hbs = require('express-handlebars')

const server = express()

//function

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here


module.exports = server

// './' get route
server.use('/', routes)
// './' post route for handling the guess, and redirecting to correct/wrong answer page.
// './:id' for just displaying the moths not required for MVP but should be easy enough to implement very quickly.
