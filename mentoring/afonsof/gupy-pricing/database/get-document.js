const gupyDB = require('./connect-gupy');

const getConnection = async () => {
    return await gupyDB.getDatabaseConnection();
};

const getDocuments = async (collection, query_object) => {
    return (await getConnection()).collection(collection).find(query_object).toArray();
}

const getDocument = async (collection, query_object) => {
    return (await getConnection()).collection(collection).findOne(query_object);
}

// Q: Não sei o nome dessas funções, DAO?
const getCompany = (subdomain) => {
    return getDocument('companies', {'subdomain': subdomain});
}

const getJobs = (job_ids) => {
    return getDocuments('jobs', {_id: {$in: job_ids} });
} 

const getCompanyJobs = (company_id) => {
    return getDocuments('companyJobs', {companyId: parseInt(company_id)});
}

module.exports = {
    getJobs,
    getCompanyJobs,
    getCompany
}