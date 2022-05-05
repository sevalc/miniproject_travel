const Traveler = require("./Traveler")
const Trip = require("./Trip")
const Location = require("./Location")

Traveler.hasMany(Trip, {
    foreignKey: "traveler_id",
    unique:false
});


Location.hasMany(Trip, {
    foreignKey: "location_id",
    unique:false
});

module.exports = {
    Traveler:Traveler,
    Trip:Trip,
    Location:Location
}