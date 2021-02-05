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
    connections: [{
        type: mongoose.Types.ObjectId,
        ref: `User`
    }],
    googleId: String,
    email: String,
    profilePicture: String
})

module.exports = mongoose.model(`User`, userSchema)