const { getCompany } = require('../database/get-document.js');

const getCompanyDTO = async (subdomain) => {
    const company = await getCompany(subdomain);
    return {
        [company._id]: { subdomain: company.subdomain }
    }
}

module.exports = getCompanyDTO;
