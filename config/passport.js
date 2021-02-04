const passport = require(`passport`)
const User = require(`../models/index`)
const GoogleStrategy = require(`passport-google-oauth`).OAuth2Strategy

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, 
//verify callback function will be called when a user has logged in with Oauth
function(accessToken, refreshToken, profile, cb){
    User.findOne({googlId: profile.id}, function(err, student) {
        if(err) return cb(err)
        //if user is already in db then fetch the user and provide them back to Passport by calling the cb callback method
        if(user){
            return cb(null, student)
        //If the user does not exist, we have a new user! We will add them to the database and pass along this new user in the cb callback method
        } else {
            console.log(profile._json)
            const newUser = new User({
                userName: profile.displayName,
                googleId: profile.id,
                email:  profile.emails[0].value
            })
            newUser.save(function(err){
                if(err) return cb(err)
                return cb(null, newUser)
            })
        }
    })
}))

//the passport.serializeUser method is called in order to set up the session
passport.serializeUser(function(user, done){
    done(null, user.id)
})
//passport.deserializeUser method is called everytime a request comes in from an existing logged in user - it is this method where we return what we want passport to assign to the req.user object
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, student)
    })
})