const { getCompany } = require('../database/get-document.js');

const getCompanyDTO = async (subdomain) => {
    const companies = await getCompany(subdomain);
    return companies.reduce((acc, cur) => {
        acc[cur._id] = { subdomain: cur.subdomain }
        return acc;
    }, {})
}

module.exports = getCompanyDTO;
