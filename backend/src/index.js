const express=require('express')
require('./db/mongoose')
const cors = require('cors');
const userRouter= require('./routers/usersRouter')
const carRouter= require('./routers/carsRouter')

const app=express()
const port= process.env.PORT || 4000

app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  ); 
app.use(express.json())
app.use(userRouter)
app.use(carRouter)

app.listen(port,()=>{
    console.log('Server is up on port', port)
})