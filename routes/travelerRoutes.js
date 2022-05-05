const express = require("express");
const router = express.Router();
const {Traveler, Trip, Location} = require("../models/");


//find all
router.get("/", (req, res) => {
  Traveler.findAll({
      include:[Location, Trip]
  
  })
    .then(dbTraveler => {
      res.json(dbTraveler);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
//find one
router.get("/:id", (req, res) => {
  Traveler.findByPk(req.params.id,{
    include:[{
      model:Trip,
      include:[Location]
    }]
  })
    .then(dbTraveler => {
      res.json(dbTraveler);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//create user
router.post("/", (req, res) => {
  Traveler.create(req.body)
    .then(newTraveler => {
      res.json(newTraveler);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//delete a user
router.delete("/:id", (req, res) => {
  Traveler.destroy({
    where: {
      id: req.params.id
    }
  }).then(delTraveler => {
    res.json(delTraveler);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;
