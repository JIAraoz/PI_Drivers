const axios=require('axios')
const getDrivers=async (req,res)=>{
try {
   const {data}=await axios.get("http://localhost:5000/drivers")
  
   let Drivers=[]
   data.forEach(element => {
    if (!element.image.url) {
     element.image.url="../utils/placeholder.webp"
    }
    Drivers.push(element)
  })
  res.json(Drivers)

} catch (error) {
    res.json({error:error.message}).status(500)
}
}
module.exports=getDrivers