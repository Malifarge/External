const express = require('express')
const app = express()
const axios = require("axios")

app.get('/list', async (req, res)=>{
    const response = await axios('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    res.json(response.data.results)
})

module.exports = app