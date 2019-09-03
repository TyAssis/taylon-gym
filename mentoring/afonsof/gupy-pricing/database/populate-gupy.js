const gupyDB = require('./connect-gupy');

gupyDB.connectGupyDB()
.then(client => {
    gupy = client.db('gupy')
    const companies = gupy.collection('companies');
    const jobs = gupy.collection('jobs');
    const companyJobs = gupy.collection('companyJobs');

    companies.insertOne({
        _id: 119, subdomain: 'ambev'
    }, (err, result) => {
        if (err) throw err;
    });

    jobs.insertMany([
        {_id: 123, name: "Dev Back End", type: "effective"},
        {_id: 456, name: "Banco de Talentos", type: "talentPool"},
        {_id: 789, name: "Dev Front End", type: "effective"}
    ], (err, result) => {
        if (err) throw err;   
    });

    companyJobs.insertOne({
        companyId: 119,
        jobs: [
            { jobId: 123, applicationCount: 55 },
            { jobId: 456, applicationCount: 35 },
            { jobId: 789, applicationCount: 40 }
        ]
    }, (err, result) => {
        if (err) throw err;
    });
})
.catch(err => { throw err });
    // company.find().toArray((err, items) => {
    //     console.log(items)
    // })
    // jobs.find().toArray((err, items) => {
    //     console.log(items)
    // })
    // companyJobs.find().toArray((err, items) => {
    //     console.log(items)
    // })