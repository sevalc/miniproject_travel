const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveler extends Model {}

Traveler.init({
    // add properites here, ex:
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        unique:true,
        allowNull:false,
        validate: {

        }
    }
    
},{
    sequelize
});

module.exports=Traveler