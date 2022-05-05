const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Traveler = require("./Traveler");
const Location = require("./Location");

class Trip extends Model {}

Trip.init({
    // add properites here, ex:
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    },
    trip_budget: {
        type: DataTypes.FLOAT,
        allowNull:false
    },
    traveler_amount: {
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 1
    },
    traveler_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Traveler",
            key: "id"
        },
    },
    location_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Traveler",
            key: "id"
        }
    }
    
},
{
    sequelize
})
;

module.exports=Trip