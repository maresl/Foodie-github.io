const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const addressSchema = new Schema ({
    street: String, 
    city: String, 
    state: String,
    zip: Number
})

const restaurantSchema = new Schema ({
    name: {
        type: String, 
        required: true
    },
    address: addressSchema,
})

module.exports = mongoose.model(`Restaurant`, restaurantSchema)