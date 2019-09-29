const { formatBRL } = require('../utils/format-currency.js');

const printAmountTxt = ({ jobName, cost, applicationCount }) =>
    `  ${jobName}: ${formatBRL(cost / 100)} (${applicationCount} inscrições)`;

const printTxt = ({ companySubdomain, credits, totalAmount, companyPricingData }) => {
    return `Custo das vagas para ${companySubdomain}
${companyPricingData.map(printAmountTxt).join('\n')}
  Total devido ${formatBRL(totalAmount / 100)}
Você ganhou ${credits} na Gupy
`
};

const printAmountHtml = ({ jobName, cost, applicationCount }) =>
    `<li>${jobName}: ${formatBRL(cost / 100)} (${applicationCount} inscrições)</li>`;

const printHtml = ({ companySubdomain, credits, totalAmount, companyPricingData }) => {
    return `<h1>Custo das vagas para ${companySubdomain}</h1>
            ${companyPricingData.map(printAmountHtml).join('')}
            Total devido <b>${formatBRL(totalAmount / 100)}</b>
            Você ganhou <b>${credits}</b> na Gupy
            `
};

module.exports = {
    printAmountTxt,
    printAmountHtml,
    printTxt,
    printHtml
}