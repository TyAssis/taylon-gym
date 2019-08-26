const gupyDB = require('./gupy-db');

gupyDB.connectGupyDB((gupy) => {
    if(typeof(gupy) !== 'object') throw new Error('Gupy database was not instantiated');
    gupy.dropDatabase();
});