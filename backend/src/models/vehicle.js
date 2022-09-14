const mongoose = require('mongoose')

const vehicleScheme = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    manufacturer: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
        ref: 'User'
    },
    licensePlate: {
        type:String,
        required: true
    },
    sDate: {
        type:Date, 
        required: false
    },
    eDate: {
        type:Date, 
        required: false
    },
    duration: {
        type: Number,
        required: false
    }

},
{
    timestamps: true
})

const Vehicle = mongoose.model('Vehicle', vehicleScheme)

module.exports = Vehicle