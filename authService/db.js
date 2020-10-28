const Sequelize = require("sequelize");

const sequelize = new Sequelize("microservice", "postgres", "root", {
    dialect: "postgres",
    host: "localhost",
    port: 5432
});

module.exports = sequelize
