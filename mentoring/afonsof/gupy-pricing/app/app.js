const express = require('express');
const app = express();

const { calculatePricingData } = require('../gupyPricing.js');
const { printHtml } = require('../output/printer.js');
const { getCompanyDTO, getJobsDTO, getCompanyJobsDTO } = require('../database/get-document');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.listen(3000);

app.get('/', (req, res) => {  
    res.render('index');
});

app.get('/calculate-pricing', async (req, res) => {  
    let company = req.query.company_name;
    const companies = await getCompanyDTO(company);
    const companyJobs = await getCompanyJobsDTO(Object.keys(companies)[0]);
    const jobs = await getJobsDTO(Object.values(companyJobs[0].jobs).map(job => job.jobId));
    const pricingData = calculatePricingData(companyJobs[0], jobs, companies);
    res.send(printHtml(pricingData));
});

module.exports = app;