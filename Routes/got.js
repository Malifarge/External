const express = require('express')
const app = express()

const characters = require('../got.json')

app.get('/json', (req, res) =>{
   
    res.json(characters)
})

module.exports = app