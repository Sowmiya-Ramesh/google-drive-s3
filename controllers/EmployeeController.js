const Employee = require('../models/Employee')

//Show the list of employee
const index =(req, res,  next) =>{  //it will take request and provide response.If evrthg ok ,it will execute next
    Employee.find()  //if this query is ok,it will provide response orelse error
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "An error occured !"
        })
    })
}

const show= (req, res, next)=>{
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: "Error occured"
        })
      
    })
}

//to add new person

const store =(req, res, next) => {
    let employee = new Employee({
        name: req.body.name ,
        email: req.body.email ,
        phone: req.body.phone 
    })
    if(req.file){
        employee.avatar = req.file.path
    }
    employee.save()
    .then(response =>{
        res.json({
            message :"Person added successfully!"
        })
    })
    .catch(error =>{
        res.json({
            message: "Error occured"
        })
      
    })
}

//update the details

const update =(req, res, next)=>{
    let employeeID = req.body.employeeID

    let updateData ={        //update data will be  replaced
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    }

    Employee.findByIdAndUpdate(employeeID, {$set: updatedData})
    .then(()=>{
        res.json({
            message: "Employee updated successfully"
        })
    })
    .catch(error =>{
        res.json({
            message: "An error occured"
        })
    })
}

//delete an employee data

const destroy =(req, res, next )=>{
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(()=> {
        req.json({
            message: "Employee deleted successfully"
        })
    }).catch(error =>{
        res.json({
            message: "An error occured"
        })
    })

}

module.exports= {
    index, show, store, update, destroy
}