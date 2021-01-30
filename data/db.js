const mongoose = require(`mongoose`)
mongoose.connect(`mongodb://localhost/foodie`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true})

const db = mongoose.connection
db.on(`connected`, function() {
    console.log(`Mongoose is connected`)
})

