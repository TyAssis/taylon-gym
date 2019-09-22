const { getCompany } = require('../database/get-document.js');

const getCompanyDTO = async (subdomain) => {
    return await getCompany(subdomain);
}

module.exports = getCompanyDTO;
