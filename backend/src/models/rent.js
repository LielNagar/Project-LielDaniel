const mongoose = require('mongoose')

const rentSchema = new mongoose.Schema({
    vehicle: {
        type : String,
        required: true,
    },
    owner : {
        type: String,
        required: true
    }

})



const rentVehicle = mongoose.model('rentVehicle', rentSchema)

module.exports = rentVehicle