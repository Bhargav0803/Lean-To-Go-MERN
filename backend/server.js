require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

// global middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//route handler
// app.get('/', (req,res)=> {
//     res.json({msg:"Welcome to the app"})
// })

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log('connected to db and listening on port', process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })

//we use the router ie workoutrouter
app.use('/api/workouts', workoutRoutes)




