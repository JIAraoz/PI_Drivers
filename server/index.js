const axios = require("axios");
const {Team}=require("./src/db.js")
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const aux=true 


conn.sync({ force: aux }).then(() => {
  if(aux){
    axios.get("http://localhost:5000/drivers").then(({ data }) => {
    const equiposUnicos = new Set(); 
    data.forEach(element => {
      if (element.teams) {
        const equipos = element.teams.split(',');
        equipos.forEach(equipo => equiposUnicos.add(equipo.trim())); 
      }
    });
    const equiposArray = [...equiposUnicos];
    Team.bulkCreate(equiposArray.map(name => ({ name })))
    console.log('Equipos creados exitosamente en la base de datos.');
  })
  .then(() => {
        server.listen(PORT, () => {
          console.log(`Server listening on port ${PORT}`);
        })
      })
      .catch(error => {
        console.error('Error al crear equipos en la base de datos:', error);
      });
  }
}
)
.catch(error => console.error(error));
