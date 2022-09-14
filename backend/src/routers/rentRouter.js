const express=require('express')
const rentCar = require('../models/rent')
const router= new express.Router()

router.get('/rent:id' , async (req, res) => {
    try {
        const rentals = await rentCar.findById(req.params.id)
        if(!rentals) {
            res.status(404).send('No rentals found')
        }
        res.send(rentals)
    } catch (e) {
        res.status(500)
    }
})

router.post('/rent:id' , async (req, res) => {
    try {
        const rent = new rentCar(req.body)
          await rentCar.save()
          res.status(201).send(rent)
    } catch (e) {
          res.status(400).send(e)
    }
})

module.exports = router