const express = require('express')
const app = express()
const axios = require("axios")
let limit = 151

app.get('/list', async (req, res)=>{
    const response = await axios(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
    res.json(response.data.results)
})

app.get('/:id', async (req,res)=> {
    const {id} = req.params
    if (Number (id) <=905){
        const response = await axios (` https://pokeapi.co/api/v2/pokemon/${id}`)
        res.json(response.data)
    }else {
        res.status(404).send("Not Found")
    }
})

module.exports = app