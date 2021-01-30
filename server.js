const { Router } = require("express")
const express = require(`express`)
const app = express()
const port = 3000

//routers
const homeRouter = require(`./routes/home`)

//db commection 
require(`./data/db`)

app.set(`view engine`, `ejs`)

app.use(`/`, homeRouter)



app.listen(port, function() {
    console.log(`app is listening at port ${port}`)
})

