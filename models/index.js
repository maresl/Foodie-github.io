const mongoose = require(`mongoose`)
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false })

const db = mongoose.connection
db.on(`connected`, function() {
    console.log(`Mongoose is connected`)
})

module.exports = {
    User: require(`./User`),
    Post: require(`./Post`),
    Restaurant: require(`./Restaurant`)
}

