const { Router } = require("express");
const postDriver=require("../controllers/postDriver")
const getDrivers=require("../controllers/getDrivers")
const getTeams=require("../controllers/getTeams")
const getDriversById=require("../controllers/getDriversById")
const getDriverByName=require("../controllers/getDriversByName")
const router = Router();

router.get("/drivers/all",getDrivers)
router.get("/drivers/:id",getDriversById)
router.get("/drivers/",getDriverByName)
router.get("/teams",getTeams )
router.post("/drivers",postDriver)


module.exports = router;
