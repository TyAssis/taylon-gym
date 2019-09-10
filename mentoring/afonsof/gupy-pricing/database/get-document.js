const gupyDB = require('./connect-gupy');

const getDocument = (collection, query_object) => {
    return new Promise((resolve, reject) => {
        gupyDB.connectGupyDB().then(gupy => {
            resolve(gupy.collection(collection).find(query_object).toArray());
        });
    })
}


// Q: Não sei o nome dessas funções, DAO?
const getCompany = (subdomain) => {
    return getDocument('companies', {'subdomain': subdomain});
}

const getJobs = (job_ids) => {
    return getDocument('jobs', {_id: {$in: job_ids} });
} 

const getCompanyJobs = (company_id) => {
    return getDocument('companyJobs', {companyId: parseInt(company_id)});
}

module.exports = {
    getJobs,
    getCompanyJobs,
    getCompany
}