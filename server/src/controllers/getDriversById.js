const {Driver}=require("../db")
const axios=require("axios")
const getDriversById=async(req,res)=>{

 try {
    const {id} =req.params   
    const driver=await Driver.findByPk(id)
    if(!driver){
        const {data}=await axios.get(`http://localhost:5000/drivers/${id}`)
        res.status(200).json(data)
    }
    else res.status(200).json(driver)
 
 } catch (error) {
    console.log(error.message);
    res.status(404).json({error:"driver not found"})
 }
 
}
module.exports=getDriversById