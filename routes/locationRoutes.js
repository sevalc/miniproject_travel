const express = require("express");
const router = express.Router();
const {Location, Trip, Traveler} = require("../models/");


//find all
router.get("/", (req, res) => {
  Location.findAll({
    include:[Trip, Traveler]

  })
    .then(dbLocations => {
      res.json(dbLocations);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
//find one
router.get("/:id", (req, res) => {
  Location.findByPk(req.params.id)
    .then(dbLocations => {
      res.json(dbLocations);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//create user
router.post("/", (req, res) => {
  Location.create(req.body)
    .then(newLocation => {
      res.json(newLocation);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//delete a user
router.delete("/:id", (req, res) => {
  Location.destroy({
    where: {
      id: req.params.id
    }
  }).then(delLocation => {
    res.json(delLocation);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;
