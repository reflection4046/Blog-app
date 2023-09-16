const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv =require('dotenv')
const connectDB = require('./config/db')




//env config 
dotenv.config()
//mongodb 
connectDB();
//rest object
const app = express()

//middelwares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//routes
app.get('/', (req,res)=>{
    res.status(200).send ({
        "message": "Node Server"
    })
})
//port
const PORT = process.env.PORT || 8080


//listen
app.listen(8080, ()=>{
    console.log(`server Running on ${ process.env.DEV_MODE} port no ${PORT}`.bgCyan.white)
})

