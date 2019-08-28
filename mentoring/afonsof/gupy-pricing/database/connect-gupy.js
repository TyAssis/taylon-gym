const mongo = require('mongodb').MongoClient;

const CONNECTION_STRING = 'mongodb://localhost:27017';
let connection;

const connectGupyDB = () => {
    return new Promise((resolve, reject) => {
        if (connection) {
            resolve(connection);
        }
        const options = { useNewUrlParser: true, useUnifiedTopology: true };
        mongo.connect(CONNECTION_STRING, options, (err, client) => {
            if (err) throw reject(err);
            connection = client;
            resolve(connection);
        });
    });
};

module.exports = {
    connectGupyDB
}