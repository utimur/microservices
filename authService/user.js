const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const {roles} = require('./consts')


const User =  sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
},)


const Roles = sequelize.define('role', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    value: {type: DataTypes.ENUM(roles.USER, roles.ADMIN), defaultValue: roles.USER},
    userId: {type:DataTypes.INTEGER, references: {model: User, key: 'id'}},
}, {
    timestamps:false,
})


User.hasMany(Roles, {

})
Roles.belongsTo(User, {foreignKey: 'userId'})

module.exports = {User, Roles}
