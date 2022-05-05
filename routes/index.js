const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("welcome to my application!")
})

const locationRoutes = require("./locationRoutes");
router.use("/api/locations",locationRoutes)

const travelerRoutes = require("./travelerRoutes");
router.use("/api/travelers",travelerRoutes)

const tripsRoutes = require("./tripsRoutes");
router.use("/api/trips",tripsRoutes)

module.exports = router;