const { Router } = require("express")
const express = require(`express`)
const morgan = require(`morgan`)
const methodOverride = require(`method-override`)
const session = require(`express-session`)
const MongoStore = require(`connect-mongo`)(session)
const app = express()
const port = 3000

//routers
const homeRouter = require(`./routes/home`)

//db commection 
require(`./models`)

app.set(`view engine`, `ejs`)

//middleware
app.use(methodOverride(`_method`))
app.use(morgan(`dev`))
app.use(express.static(`public`))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(session({
    store: new MongoStore({url: `mongodb://localhost/foodie`}),
    secret: `shush`,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

app.use(`/`, homeRouter)



app.listen(port, function() {
    console.log(`app is listening at port ${port}: https://localhost:${port}`)
})

