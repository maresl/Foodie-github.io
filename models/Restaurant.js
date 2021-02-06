const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const addressSchema = new Schema ({
    street: String, 
    city: String, 
    state: String,
    zip: Number
})

const restaurantSchema = new Schema ({
    restaurantName: {
        type: String, 
        required: true
    },
    address: addressSchema,
    posts:[{
        type: mongoose.Types.ObjectId, 
        ref: `Post`
    }]
},
{
    timestamps: true
})

module.exports = mongoose.model(`Restaurant`, restaurantSchema)