const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv =require('dotenv')
const connectDB = require('./config/db')
const path  = require('path')



//env config 
dotenv.config()
//route 
const userRoutes = require('./routes/userRoutes')
//mongodb 
connectDB();
//rest object
const app = express()

//middelwares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/api/v1/user', userRoutes);
//port 
const PORT = process.env.PORT || 8080

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


//listen
app.listen(8080, ()=>{
    console.log(`server Running on ${ process.env.DEV_MODE} port no ${PORT}`.bgCyan.white)
})

