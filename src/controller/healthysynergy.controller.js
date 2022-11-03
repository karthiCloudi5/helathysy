const express = require("express");
const router = express.Router();
const HealthsyDoctor = require("../model/healthysynrgy.model");

router.post("/healthsyDoctor", async(req, res) => {
    try{
        const healthsydoctor = await HealthsyDoctor.create(req.body);
        return res.status(201).send(healthsydoctor);
    }catch(err){
        return res.status(500).send({message: err.message}) 
    }
})

//filter by gender
router.get("/healthsyDoctor",async(req,res)=>{
    try{
     const healthsyDoctor=await HealthsyDoctor.find({ gender: req.body.gender }).exec();
     return res.status(200).send(healthsyDoctor);
    }
    catch(err){
        console.log(err)
    }
})

//sort by username ascending
router.get("/healthsyDoctor/username/Ascending",async(req,res)=>{
    try{
      const healthsyDoctor=await HealthsyDoctor.find().sort({name:1}).exec();
      return res.status(200).send(healthsyDoctor)
    }
    catch(err){
        console.log(err)
    }
})

//sort by username descending
router.get("/healthsyDoctor/username/descending",async(req,res)=>{
    try{
      const healthsyDoctor=await HealthsyDoctor.find().sort({name:-1}).exec();
      return res.status(200).send(healthsyDoctor)
    }
    catch(err){
        console.log(err)
    }
})

//sort by id ascending

router.get("/healthsyDoctor/id/ascending",async(req,res)=>{
    try{
      const healthsyDoctor=await HealthsyDoctor.find().sort({id:1}).exec();
      return res.status(200).send(healthsyDoctor)
    }
    catch(err){
        console.log(err)
    }
})
//sort by id descending
router.get("/healthsyDoctor/id/descending",async(req,res)=>{
    try{
      const healthsyDoctor=await HealthsyDoctor.find().sort({id:-1}).exec();
      return res.status(200).send(healthsyDoctor)
    }
    catch(err){
        console.log(err)
    }
})
module.exports=router;