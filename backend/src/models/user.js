const mongoose= require('mongoose')
const validator= require('validator')
const bcrypt=require('bcryptjs') //for encrypt user password
const jwt=require('jsonwebtoken') //for login and more
//const Reservation = require('./Reservation)---> a model to be added


const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true
    },
    password:{
        type: String,
        required:true,
        trim: true,
        minlength:7,
        validate(value){
            if(value.toLowerCase().includes('password')) throw new Error('Password must not contain "password"')
        }
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim: true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('Email is not valid!')
        }
    },
    age: {
        type:Number,
        default:0,
        validate(value){
            if(value<0) throw new Error('Age must be a positive number')
            if(value<18) throw new Error('Age must be above 18')
        }
    },
    income:{
        type:Number,
        default:0,
        validate(value){
            if(value<0) throw new Error('Income must be a positive number')
        }
    },
    totalReservations:{
        type:Number,
        default:0,
        validate(value){
            if(value<0) throw new Error('Total must be a positive number')
        }
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }],
    avatar:{
        type: Buffer
    }
},{
    timestamps:true //created and updated at..
})

// A REF TO BE ADDED FOR USER RESERVATIONS (AND ANOTHER ONE FOR CARS?)
// userSchema.virtual('reservations',{
//     ref:'Reservation',
//     localField:'_id',
//     foreignField:'owner'
// })

userSchema.methods.toJSON= function(){
    const user=this
    const userObj= user.toObject()
    delete userObj.password
    delete userObj.tokens
    delete userObj.avatar
    return userObj
}

userSchema.methods.generateAuthToken= async function(){
    const user= this
    const token= jwt.sign({_id:user.id.toString()}, 'thisismycourse')
    user.tokens= user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.statics.findByCredentials= async (email,password)=>{
    const user = await User.findOne({email})
    if(!user) throw new Error('Unable to login')
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch) throw new Error('Something is wrong')
    return user
}

userSchema.pre('save', async function(next){
    const user=this
    if(user.isModified('password')) user.password = await bcrypt.hash(user.password,8)
    next()
})

userSchema.pre('remove', async function(next){
    const user=this
    await Task.deleteMany({owner:user._id})
    next()
})

const User=mongoose.model('User', userSchema)

module.exports=User