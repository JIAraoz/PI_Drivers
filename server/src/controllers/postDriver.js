const {Driver}=require("../db")
const postDriver=async(req, res)=>{
  try {
    const driver=req.body
    const newDrive=await Driver.create(driver)
   res.json(newDrive)
  
  } catch (err) {
    console.log(err.message);
  }
  }

module.exports=postDriver