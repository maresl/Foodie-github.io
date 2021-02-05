const express = require(`express`)
const router = express.Router()
const passport = require(`passport`)
const indexCtrl = require(`../controllers/index`)

router.get(`/`, indexCtrl.index)

//google oauth login route
router.get(`/auth/google`, passport.authenticate(
    `google`, {scope: [`profile`, `email`]}
))

//google oauth callback route
router.get(`/oauth2callback`, passport.authenticate(
    `google`,
    {
        successRedirect: `/feed`,
        failureRedirect: `/`
    }
))

//google oauth logout route
router.get(`/logout`, function(req, res){
    req.logout()
    res.redirect(`/`)
})

module.exports = router