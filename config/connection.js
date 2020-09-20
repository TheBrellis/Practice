const mysql = require("mysql");
const sequelize = require("sequelize");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Briguy_131",
    database: "practice_db"
});

connection.connect((err) => {
    if (err) {
        throw err;
    }

    console.log("Database connected!");
});

module.exports = sequelize;