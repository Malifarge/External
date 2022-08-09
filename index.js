const express = require('express')
const app = express()
const port = 5000
const gotRoutes = require("./Routes/got")
const pokeRoutes = require("./Routes/poke")

app.use("/game-of-thrones",gotRoutes)
app.use("/pokemon",pokeRoutes)

app.get("/", (req,res)=>{
    res.send('Got/poke API')
})

app.get("*", (req, res)=> {
    res.status(404).send("Not Found")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})