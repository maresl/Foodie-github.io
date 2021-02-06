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
    googleId: String,
    email: String,
    profilePicture: {
        type: String,
        default: `https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg`
    },
    bio: String
},
{
    timestamps:true
})

module.exports = mongoose.model(`User`, userSchema)