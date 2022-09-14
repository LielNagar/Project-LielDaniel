// const { url } = require('inspector')
// const mongoose= require('mongoose')
// const validator= require('validator')

// const carSchema = new mongoose.Schema({
//     carNumber:{
//         type: String,
//         required:true,
//         trim: true
//     },
//     manufacturer:{
//         type: String,
//         required:true,
//         trim: true
//     },
//     model:{
//         type: String,
//         required:true,
//         trim: true
//     },
//     year:{
//         type: Date,
//         required:true,
//         validate(value){
//             if(value>Date.now()) throw new Error('Vehicle year cannot be above this year')
//         }
//     },
//     engineSize:{
//         type: Number,
//         validate(value){
//             if(value<0) throw new Error('Engine size must be positive')
//         }
//     },
//     engineType:{
//         type: String,
//         required:true,
//         trim: true
//     },
//     gear:{
//         type: String,
//         required:true,
//         trim: true
//     },
//     seats:{
//         type: Number,
//         required:true,
//         validate(value){
//             if(value<0) throw new Error('Seats must be positive')
//         }
//     },
//     doors:{
//         type: Number,
//         required:true,
//         validate(value){
//             if(value<0) throw new Error('Doors must be positive')
//         }
//     },
//     AC:{
//         type:Boolean
//     },
//     GPS:{
//         type:Boolean
//     },
//     blueTooth:{
//         type:Boolean
//     },
//     numOfBaggage:{
//         type:Number,
//         validate(value){
//             if(value<0) throw new Error('Baggage number must be positive')
//         }
//     },
//     rating:{
//         type:Number,
//         validate(value){
//             if(value<0 || value>10) throw new Error('Rating must be between 0-10')
//         }
//     },
//     isAvail:{
//         type:Boolean,
//         required:true
//     },
//     carURL:{
//         type: String,
//     }
// })


// const Car = mongoose.model('Car', carSchema)
// module.exports=Car