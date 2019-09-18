const { getCompany } = require('../database/get-document.js');

const getCompanyDTO = async (subdomain) => {
    const company = await getCompany(subdomain);
    return company;
}

module.exports = getCompanyDTO;
