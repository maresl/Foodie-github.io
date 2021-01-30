const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema ({
    userName: String
})

module.exports = mongoose.models(`User`, userSchema)