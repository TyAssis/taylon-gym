const mongo = require('mongodb').MongoClient;

const CONNECTION_STRING = 'mongodb://localhost:27017';

const connectGupyDB = (callback) => {
    const options = { useNewUrlParser: true, useUnifiedTopology: true };
    mongo.connect(CONNECTION_STRING, options, (err, client) => {
        if (err) throw err;
        return(callback(client.db('gupy')));
    });
};

const closeGupyDB = (gupy) => {
    gupy.close();
}

module.exports = {
    connectGupyDB,
    closeGupyDB
}