const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const gupyDBURI = 'mongodb://localhost:27017/gupy';
mongoose.connect(gupyDBURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    //mongoose.connection.db.dropDatabase(); // Q: Como dropo isso em outro lugar?
    console.log('Mongoose default connection open to ' + gupyDBURI);
});

mongoose.connection.on('error',  (err) => {
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected',  () => {
    console.log('Mongoose default connection disconnected');
});