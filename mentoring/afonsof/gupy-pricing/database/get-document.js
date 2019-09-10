const gupyDB = require('./connect-gupy');

const getDocuments = (collection) => {
    return new Promise((resolve, reject) => {
        gupyDB.connectGupyDB().then(gupy => {
            resolve(gupy.collection(collection).find({}).toArray());
        });
    })
}

const getDocument = (collection, query_object) => {
    return new Promise((resolve, reject) => {
        gupyDB.connectGupyDB().then(gupy => {
            resolve(gupy.collection(collection).find(query_object).toArray());
        });
    })
}

const getCompany = (subdomain) => {
    return getDocument('companies', {'subdomain': subdomain});
}

const getJobs = (job_ids) => {
    return getDocuments('jobs', {_id: {$in: job_ids} });
} 

const getCompanyJobs = (company_id) => {
    return getDocument('companyJobs', {companyId: parseInt(company_id)});
}

const getCompanies = () => {
    return getDocuments('companies');
}

const getJobsDTO = async (job_ids) => {
    const jobs = await getJobs(job_ids);
    return jobs.reduce((acc, cur) => {
        acc[cur._id] = { name: cur.name, type: cur.type}
        return acc;
    }, {});
};

const getCompanyJobsDTO = async (company_id) => {
    return getCompanyJobs(company_id);
};

const getCompaniesDTO = async () => {
    const companies = await getCompanies();
    return companies.reduce((acc, cur) => {
        acc[cur._id] = { subdomain: cur.subdomain }
        return acc;
    }, {})
}

const getCompanyDTO = async (subdomain) => {
    const companies = await getCompany(subdomain);
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
    getCompaniesDTO,
    getCompany,
    getCompanyDTO
}