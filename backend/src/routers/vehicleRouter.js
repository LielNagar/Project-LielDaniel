const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const Vehicle = require('../models/vehicle')
const mongoose= require('mongoose')
// VEHICLE ENDPOINTS REQUESTS

//----------POST METHODS----------//
// POST A NEW VEHICLE TO THE SITE ROUTE
router.post('/vehicles', auth ,async (req, res) => {
    const vehicle = new Vehicle({
        ...req.body,
    })
    console.log(vehicle)
    try {
        await vehicle.save()
        res.status(201).send(vehicle)
    } catch (e) {
        res.status(400).send(e)
    }
 })

//----------GET METHODS----------//
// GET ALL USER VEHICLES LIST ROUTE
// SOME OPTIONS
// GET /vehicles?completed=false will get back the incomplete tasks
// GET /vehicles?limit=10 for ten results &skip=0 for the first ten results 
// GET /vehicles?sortBy=createdAt_des {field and then order}
 router.get('/myvehicles' , auth , async (req, res) => {
    let skip= parseInt(req.query.skip) || 0
    let limit= parseInt(req.query.limit) || 12
    console.log(req.user._id)

    try { 
        const vehicles = await Vehicle.find({owner:req.user._id}).limit(limit).skip(skip)
        const count = await Vehicle.countDocuments({owner:req.user._id})
        if(!vehicles) return res.status(404).send()
        res.send({vehicles,count})
    } catch (e) {
        res.status(500).send()
    }
})

//GET VEHICLES BY SKIP AND LIMIT FOR PAGINATION
router.get('/vehicles', async(req,res) => {
    let skip= parseInt(req.query.skip) || 0
    let limit= parseInt(req.query.limit) || 12
    try{
        const vehicles = await Vehicle.find({isAvail:true}).limit(limit).skip(skip)
        const count = await Vehicle.countDocuments({isAvail:true})
        if(!vehicles) return res.status(404).send()
        res.send({vehicles,count})
    } catch(e){
        res.status(500).send()
    }
})

// GET SPECIFIC VEHICLE BY ID DATA ROUTE
router.get('/vehicles/:id' , auth , async (req, res) => {
    const _id = req.params.id
    try {
        const vehicle = await Vehicle.findOne({_id, owner: req.user._id})
        if(!vehicle) {
            return res.status(404).send()
        }
        res.send(vehicle)
    } catch (e) {
        res.status(500).send()
    }
})

//GET DISTINCT MANUFACTURERS
router.get('/vehicles/details/distinctmanufacturers', async(req,res)=>{
    try{
        const manufacutrers= await Vehicle.distinct("manufacturer")
        res.send(manufacutrers)
    }catch(error){
        res.status(404).send(error)
    }
})

router.get('/vehicles/details/distinctgears', async(req,res)=>{
    try{
        const gears = await Vehicle.distinct("gear")
        res.send(gears)
    }catch(error){
        res.status(404).send(error)
    }
})

router.get('/vehicles/details/distinctyears', async(req,res)=>{
    try{
        const years = await Vehicle.distinct("year")
        res.send(years)
    }catch(error){
        res.status(404).send(error)
    }
})

//----------DELETE METHODS----------//
// DELETE A LISTED VEHICLE ROUTE
router.delete('/vehicle', auth , async (req, res) => {
    try {
        const vehicle = await Vehicle.findOneAndDelete({_id : req.query._id})
        if (!vehicle) {
            return res.status(404).send()
        }
        res.status(200).send(vehicle)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router