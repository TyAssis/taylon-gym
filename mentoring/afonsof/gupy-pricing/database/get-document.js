const gupyDB = require('./connect-gupy');

const getDocument = async(document) => {
    return new Promise((resolve, reject) => {
        gupyDB.connectGupyDB().then(client => {
            gupy = client.db('gupy');
            resolve(gupy.collection(document).find({}));
        });
    })
}

const getJobs = async () => {
    return await getDocument('jobs');
} 

module.exports = {
    getJobs
}