const { Driver } = require("../db");
const Sequelize = require('sequelize');
const axios = require("axios");

const getDriversByName = async (req, res) => {
  try {
    const { name } = req.query;

    
    let dbDrivers = await Driver.findAll({
      where: {
        name: {
          [Sequelize.Op.iLike]: `%${name}%`
        }
      },
      limit: 15 
    });

    
    if (dbDrivers.length < 15) {
      const remainingLimit = 15 - dbDrivers.length;
      const response = await axios.get(`http://localhost:5000/drivers?name.forename=${name}&limit=${remainingLimit}`);
      const apiDrivers = response.data;

      
      dbDrivers = dbDrivers.concat(apiDrivers);
    }

    if (dbDrivers.length > 0) {
   
      res.status(200).json(dbDrivers);
    } else {
      
      res.status(404).json({ message: "No drivers found with that name" });
    }
  } catch (error) {
    console.error(error.message); 
    res.status(500).json({ error: "Internal Server Error" }); 
  }
};

module.exports = getDriversByName; 