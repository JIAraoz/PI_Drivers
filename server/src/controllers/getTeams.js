const {Team}=require("../db")
const getTeams=async(req,res)=>{
  try {
    const teams= await Team.findAll()
    res.json(teams)
  } catch (error) {
    console.log(error.message);
}}
module.exports=getTeams