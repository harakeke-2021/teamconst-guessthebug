const bugs = require('./bugs.json')
const express = require('express')
const hbs = require('express-handlebars')

//function


// './' get route
// './' post route for handling the guess, and redirecting to correct/wrong answer page.

server.post('/moth/:id/', function (req, res) {
    const theMoth = req.body
    if (bugs.bugs.id = theMoth.id){
        const winorlose = win
    } else 
    const winorlose = lose
    res.send(`/${winorlose}`)
}




// './:id' for just displaying the moths not required for MVP but should be easy enough to implement very quickly.
