const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      startValue: 509, 
      allowNull: false},
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    description:{
      type:DataTypes.STRING,
      allowNull:false
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false
    },
    nationality:{
      type:DataTypes.STRING,
      allowNull:false
    },
    birth_date:{
      type:DataTypes.STRING,
      allowNull:false
    }
    

  });
};