const express=require("express");
const port=3000;
const app=express()
const connect=require("./src/configs/db")

const healthsyDoctorController=require("./src/controller/healthysynergy.controller");
app.use(express.json());
app.use("/",healthsyDoctorController)
app.listen(port,async()=>{
    try{
        console.log("listening to the port")
        await connect.main()
        console.log("db is connected")
    }
   catch(err){
    console.log(err)
   }
})

