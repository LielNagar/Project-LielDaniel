const express=require('express')
const Car = require('../models/car')
const router= new express.Router()

router.post('/cars', async (req,res)=>{
    const car= new Car(req.body)
    try{
        await car.save()
        res.status(201).send(car)
    }catch(error){
        res.status(400).send(error)
    }
})

router.get('/cars', async (req,res)=>{
    try{
        const cars= await Car.find({})
        res.send(cars)
    }catch(error){
        res.status(500).send()
    }
})

router.get('/cars/AC', async (req,res)=>{
    try{
        const cars= await Car.find({AC:true})
        res.send(cars)
    }catch(error){
        res.status(500).send()
    }
})

router.get('/cars/:id', async (req,res)=>{
    const _id=req.params.id
    try{
        const car= await Car.findById(_id)
        if(!car) return res.status(404).send()
        res.send(car)
    }catch(error){
        res.status(500).send(error)
    }
})

router.patch('/cars/:id', async(req,res)=>{
    const updatesParams= Object.keys(req.body)
    const vaildUpdates= ['gear','AC','GPS','blueTooth','numOfBaggage','rating','isAvail','carURL']
    const isVaild= updatesParams.every((item)=> vaildUpdates.includes(item))
    if(!isVaild) return res.status(400).send({Error:"Update params are invalid"})
    try{
        const car= await Car.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!car) return res.send(404).send()
        res.send(car)
    }catch(error){
        res.status(400).send(error)
    }
})

router.delete('/cars/:id', async(req,res)=>{
    try{
        const car= await Car.findByIdAndDelete(req.params.id)
        if(!car) return res.status(404).send()
        res.send(car)
    }catch(error){
        res.status(500).send()
    }
})

module.exports=router