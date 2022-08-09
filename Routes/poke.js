const express = require('express')
const app = express()
const axios = require("axios")

app.get('/list', async (req, res)=>{
    const response = await axios('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    res.json(response.data.results)
})

app.get('/:id', async (req,res)=> {
    const id = req.params.id
    const response = await axios (` https://pokeapi.co/api/v2/pokemon/${id}`)
    res.json(response.data)
})

module.exports = app