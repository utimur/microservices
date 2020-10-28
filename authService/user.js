const { DataTypes } = require('sequelize');
const sequelize = require('./db');

module.exports = sequelize.define('User', {
    username: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
})
