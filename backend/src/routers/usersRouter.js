const express=require('express')
const User= require('../models/user')
// const upload=multer({ FOR USER AVATAR UPLOAD
//     limits:{
//         fileSize: 1000000
//     },
//     fileFilter(req,file,cb){
//         if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
//             return cb(new Error('Please upload a .jpg/.jpeg/.png file'))
//         }
//         return cb(undefined,true)
//     }
// })
const router= new express.Router()

router.post('/users/signUp', async (req,res)=>{
    const user= new User(req.body)
    try{
        await user.save()
        const token= await user.generateAuthToken()
        res.status(201).send({user,token})
    }catch(error){
        res.status(400).send(error)
    }
})

router.post('/users', async (req,res)=>{
    const user= new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }catch(error){
        res.status(400).send(error)
    }
})

router.get('/users', async (req,res)=>{
    try{
        const users= await User.find({})
        res.send(users)
    }catch(error){
        res.status(500).send()
    }

})

router.get('/users/:id', async (req,res)=>{
    const _id=req.params.id
    try{
        const user = await User.findById(_id)
        if(!user) return res.status(404).send()
        res.send(user)
    }catch(error){
        res.status(500).send()
    }
})

router.patch('/users/:id', async(req,res)=>{
    const updatesParams= Object.keys(req.body)
    const vaildUpdates= ['name','email','password','age']
    const isVaild= updatesParams.every((item)=> vaildUpdates.includes(item))
    if(!isVaild) return res.status(400).send({Error:"Update params are invalid"})
    try{
        const user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!user) return res.send(404).send()
        res.send(user)
    }catch(error){
        res.status(400).send(error)
    }
})

router.delete('/users/:id', async(req,res)=>{
    try{
        const user= await User.findByIdAndDelete(req.params.id)
        if(!user) return res.status(404).send()
        res.send(user)
    }catch(error){
        res.status(500).send()
    }
})

module.exports= router