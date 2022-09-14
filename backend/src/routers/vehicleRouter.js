const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const Vehicle = require('../models/vehicle')
const mongoose= require('mongoose')

// TASKS ENDPOINTS REQUESTS

router.post('/vehicles' ,async (req, res) => {
    const vehicle = new Vehicle({
        licensePlate:req.body.licensePlate,
        description: req.body.description,
        manufacturer: req.body.manufacturer,
        owner: req.body.owner
    })
    try {
        await vehicle.save()
        res.status(201).send(vehicle)
    } catch (e) {
        res.status(400).send(e)
    }

 })
// GET /tasks?completed=false will get back the incomplete tasks
// GET /tasks?limit=10 for ten results &skip=0 for the first ten results 
// GET /tasks?sortBy=createdAt_des {field and then order}
//  router.get('/vehicles' , auth , async (req, res) => {
//     const match = {}
//     const sort = {}
    
//     if (req.query.completed) {
//         match.createdAt = req.query.completed === 'true'
//     }

//     if (req.query.sortBy) {
//         const parts = req.query.sortBy.split(':')
//         sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
//     }

//     try { 
//          await req.user.populate({
//             path: 'vehicles',
//             match,
//             options: {
//                 limit: parseInt(req.query.limit),
//                 skip: parseInt(req.query.skip),
//                 sort
//             }
//          }).execPopulate()
//          res.send(req.user.)
//     } catch (e) {
//         res.status(500).send()
//     }

   
// })

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

// router.patch('/vehcles/:id', auth, async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['description' , 'completed']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    
//     if(!isValidOperation) {
//         return res.status(400).send({error: 'Invalid updates!'})
//     }

//     try {
//         const task = await Task.findOne({_id: req.params.id, owner: req.user._id})

//         if (!task) {
//             return res.status(404).send()
//         }
//         updates.forEach((update) => task[update] = req.body[update])
//         await task.save()
//         res.send(task)
//     } catch (e) {
//         res.status(500).send(e)
//     }
// })

router.delete('/vehciles/:id', auth, async (req, res) => {

    try {
        const vehicle = await Vehicle.findOneAndDelete({_id: req.params.id, owner: req.user._id})

        if (!vehicle) {
            return res.status(404).send()
        }
        res.send(vehicle)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
