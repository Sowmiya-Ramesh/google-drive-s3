const express = require('express')   //framework for nodejs
const mongoose = require('mongoose')  //used to work with mongodb like connection,queries
const morgan = require('morgan')    //used to login console to which api has been called
const bodyParser = require('body-parser') //used to parse the request incoming ,inorder to get the submitted input

const EmployeeRoute = require('./routes/employee')
mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser : true,useUnifiedTopology : true})
const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',() =>{
    console.log('Database Connection Established')
})

const app=express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

const PORT=process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/employee',EmployeeRoute)