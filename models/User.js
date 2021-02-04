const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema ({
    userName: {
        type: String,
        required: true
    },
    posts: [{
        type: mongoose.Types.ObjectId, 
        ref: `Post`
    }],
    followers: [{
        type: mongoose.Types.ObjectId,
        ref: `User`
    }],
    googleId: String,
    email: String
})

module.exports = mongoose.model(`User`, userSchema)