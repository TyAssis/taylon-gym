const gupyDB = require('./connect-gupy');

gupyDB.connectGupyDB()
.then(client => {
    gupy = client.db('gupy');
    gupy.dropDatabase();
})
.catch(err => { throw err });