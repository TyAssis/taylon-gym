const gupyDB = require('./connect-gupy');

const getDocument = (document) => {
    return new Promise((resolve, reject) => {
        gupyDB.connectGupyDB().then(client => {
            gupy = client.db('gupy');
            resolve(gupy.collection(document).find({}).toArray());
        });
    })
}

const getJobs = () => {
    return getDocument('jobs');
} 

const getCompanyJobs = () => {
    return getDocument('companyJobs');
}

const getCompanies = () => {
    return getDocument('companies');
}


////////////////////////////////////////////

const getJobsDTO = async () => {
    const jobs = await getJobs();
    return jobs.reduce((acc, cur) => {
        acc[cur._id] = { name: cur.name, type: cur.type}
        return acc;
    }, {});
};

const getCompanyJobsDTO = async () => {
    return getCompanyJobs();
};

const getCompaniesDTO = async () => {
    const companies = await getCompanies();
    return companies.reduce((acc, cur) => {
        acc[cur._id] = { subdomain: cur.subdomain }
        return acc;
    }, {})
}

module.exports = {
    getJobs,
    getCompanyJobs,
    getCompanies,
    getJobsDTO,
    getCompanyJobsDTO,
    getCompaniesDTO
}