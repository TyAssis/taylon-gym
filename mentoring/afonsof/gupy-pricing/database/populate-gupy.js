const gupyDB = require('./connect-gupy');
const Companies = require('./models/companiesModel.js');
const Jobs = require('./models/jobsModel.js');
const CompanyJobs = require('./models/companyJobsModel.js');

(async () => {
    const ambev = new Companies({ subdomain: 'ambev' });

    const ambevJobs = [
        { insertOne: { document: { name: "Dev Back End", type: "effective" }}},
        { insertOne: { document: { name: "Banco de Talentos", type: "talentPool" }}},
        { insertOne: { document: { name: "Dev Front End", type: "effective" }}}
    ];

    const ambevDoc = await ambev.save();
    const ambevId = ambevDoc._id;
    const ambevJobsDoc = await Jobs.bulkWrite(ambevJobs);
    const ambevJobsIds = Object.values(ambevJobsDoc.insertedIds).map(val => val);

    const ambevCompanyJobs = ambevJobsIds.map(val => {
        return {
            insertOne: {
                document: {
                    companyId: ambevId,
                    jobs: {
                        jobId: val,
                        applicationCount: Math.random() * (100 - 1) + 1
                    }
                }
            }
        }
    });

    const ambevCompanyJobsDoc = await CompanyJobs.bulkWrite(ambevCompanyJobs);

})();