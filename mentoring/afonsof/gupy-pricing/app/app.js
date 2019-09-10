const express = require('express');
const app = express();

const { getCompaniesDTO, getJobs } = require('../database/get-document');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.listen(3000);

app.get('/', (req, res) => {  
    res.render('index');
});

app.get('/calculate-pricing', async (req, res) => {  
    let company = req.query.company_name;
    res.send(company);
});

module.exports = app;