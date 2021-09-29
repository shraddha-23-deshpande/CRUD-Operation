const express = require('express')
const router=express.Router()
const fs = require("fs");
import { Request, Response } from "express";
const emp = require('emp_info');

router.post('/add', async(req : Request,res: Response) =>
{
    
    try {
        const { id, name, emplevel, mob, email, date_of_join } = req.body;
        

        let emp = fs.readFileSync("employee_data.js");
        emp = JSON.parse(emp);

       // if (req.body.id == null || req.body.name == null || req.body.emplevel == null || req.body.emp.mob == null) {
           // return res.status(401).send({error: true, msg: 'User data missing'})
        //}
        
    
        //Save data
        const stringifyData = JSON.stringify(emp);
       const userdata = fs.writeFileSync("employee_data.js", stringifyData);
       // console.log(data);
       //check if the username exist already
       const findExist = userdata.find( (user: { id: any; }) => user.id === emp.id)
        if (findExist) {
            return res.send({
                error: true, 
                msg: 'username already exist'
            })
        }
        emp.push(req.body);

        res.send("successfully added");

    } catch (err) {
        res.send({
            message: "data can not be added",
            response: err,
        });
    }
 })

 router.get('/all', async(req: Request,res: Response) =>{
      
    //     // console.log(employees)
    //     res.json(employees)
    // }   
    // catch(err){
    //         res.send('Error '+ err)
    // }

    try {
        let emp = fs.readFileSync("employee_data.js");
        emp = JSON.parse(emp);
        // res.send("Employees Details");
        //res.json(emp)
        res.send(emp);
        } 
    catch (err) {
        res.send({
            message: "Sorry data is not found",
            response: err,
        });
    }
})

router.get('/find/:id', async(req: Request,res: Response) =>{
      
        try {
			//Get data
			const Id = await (req.params.id)
			let emp = fs.readFileSync("employee_data.js");
			emp = JSON.parse(emp);
			//console.log(emp);
			//find id
			const employee = emp.filter((e: { id: string; })=> e.id == Id )
		
			res.json({
				response: employee,
			});
    //     const Id = await (req.params.id)	
		}
		//console.log(employee)
         catch (err) {
			res.send({
                message: "No data found",
                response: err,
            });
		}
})
router.delete('/delete/:id',async(req: Request,res: Response)=>{
    try{
        const Id = await (req.params.id)
        let data = fs.readFileSync("employee_data.js");
			data = JSON.parse(data);

			// const filter = data.filter( (user:any) => user.id != req.query.id );
            var filtered = data.filter(function(item: { id: string; }) { 
                return item.id != Id;  
             });
             //console.log(filtered);

			//Save data
			const stringifyData = JSON.stringify(filtered);
			fs.writeFileSync("employee_data.js", stringifyData);

			res.send({
                message: "Deleted Successfully",
                response: filtered,
            });


		}
		catch (err) {
			res.send({
                message: "can not be deleted",
                response: err,
            });
		}

})

router.patch('/update/:id',async(req: Request,res:Response)=>{

    try{
        var employee=req.body
        const Id = await (req.params.id)

        let emp = fs.readFileSync("employee_data.js");
			emp = JSON.parse(emp);

			//const filtered = emp.filter((user: any) => user.id != Id);
             var filtered = emp.filter(function(item:any ) { 
                return item.id != Id ;  
             });
			filtered.push(employee);
			// console.log(filtered);

			//Save data
			const stringifyData = JSON.stringify(filtered);
			fs.writeFileSync("employee_data.js", stringifyData);

			res.send({
				message: "employee data successfully Updated",
				response: filtered,
			});
			// const data = await db.findByIdAndUpdate(req.query.id, req.body, {
			// 	new: true,
			// });
			// // emp.name=req.body.name
			// const result = await data.save();
		} catch (err) {
		// console.log(err)
			res.send({
                message: "can not be updated",
                response: err,
            });
		}
    
})



 module.exports = router
