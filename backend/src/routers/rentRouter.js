const express=require('express')
const rentVehicle = require('../models/rent')
const router= new express.Router()
const auth = require('../middleware/auth')

router.post('/rentvehicle', auth , async (req, res) => {
    const rent = new rentVehicle({
        owner : req.user._id,
        vehicle: req.body
    })
    
    try {
        await rent.save()
        res.status(201).send(rent)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router