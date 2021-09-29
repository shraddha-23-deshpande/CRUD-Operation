const express = require('express')
const router=express.Router()
const fs = require("fs");
import { strict } from "assert/strict";
import { Request, Response } from "express";

import {Employee,information} from "./emp_info";

router.post('/add', async(req : Request,res: Response) =>
{
    
    try {
       // "use strict";
        const { id, name, emplevel, mob, email, date_of_join } = req.body;
        let emp = fs.readFileSync("employee_data.js");
        emp = JSON.parse(emp);

        
        emp.push(req.body);
        //Save data
        const stringifyData = JSON.stringify(emp);
        fs.writeFileSync("employee_data.js", stringifyData);
       // console.log(data);

        //res.send("successfully added");
        res.send({
            message :"Added successfully",
        });

    } catch (err) {
        res.send({
            message: `Error.`,
            response: null,
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
        res.send({
            message :"All Employee Info",
            response: emp
        });
        } 
    catch (err) {
        res.send({
            message: `Error.`,
            response: null,
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
			res.send({
                message: "founded.",
				response: employee,
			});
    //     const Id = await (req.params.id)	
		}
		//console.log(employee)
         catch (err) {
			res.send({
                message: `Error.`,
                response: null,
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
                    message :"deleted successfully",
					response: filtered
				});


		}
		catch (err) {
			res.send({
                message: `Error.`,
                response: null,
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
            message: `Error.`,
            response: null,
        });
		}
    
})

 module.exports = router
