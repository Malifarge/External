const express = require('express')
const app = express()
const port = 5000
const gotRoutes = require("./Routes/got")

app.use("/game-of-thrones",gotRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})