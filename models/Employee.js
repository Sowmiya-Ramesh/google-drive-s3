const mongoose= require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
      name:{
          type: String
      },
      email:{
        type: String
    },
    phone:{
        type: String
    },
    avatar:{
        type: String  //install multer to manage files in nodejs
    }

},{timestamps : true})

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee