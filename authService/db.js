const {Sequelize} = require("sequelize");


module.exports = new Sequelize("micro", "postgres", "root", {
    dialect: "postgres",
    host: "postgres",
    port: 5432
});
