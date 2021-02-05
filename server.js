const express = require(`express`)
const morgan = require(`morgan`)
const methodOverride = require(`method-override`)
const session = require(`express-session`)
const passport = require(`passport`)
const app = express()
const port = 3000

//routers
const homeRouter = require(`./routes/home`)
const indexRouter = require(`./routes/index`)
const feedRouter = require(`./routes/feed`)

//connections
require(`./models`)
require(`dotenv`).config()
require(`./config/passport`)

app.set(`view engine`, `ejs`)

//middleware
app.use(methodOverride(`_method`))
app.use(morgan(`dev`))
app.use(express.static(`public`))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//create cookie
app.use(session({
    secret: `shush`,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))
//When a request is sent from an authenticated user, Passport's middleware will automatically add a user object to the req object
app.use(passport.initialize())
app.use(passport.session())

app.use(`/`, indexRouter)
app.use(`/home`, homeRouter)
app.use(`/feed`, feedRouter)



app.listen(port, function() {
    console.log(`app is listening at port ${port}: https://localhost:${port}`)
})

