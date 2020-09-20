const connection = require("./connection");

const orm = {
    selectAll: (table, callback) => {
        const query = "SELECT * FROM ??;";

        connection.query(query, [table], (err, result) => {
            if (err) {
                throw err;
            }
            // get result back to user
            callback(result);
        });
    },
    insertOne: (table, data, callback) => {
        const query = "INSERT INTO ?? SET ?;";
        connection.query(query, [table, id], (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        })
    },
    updateOne: (table, data, id, callback) => {
        const query = "UPDATE ?? SET ? WHERE id = ?;";
        connection.query(query, [table, data, id], (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        })
    }
};

module.exports = orm
