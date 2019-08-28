const formatBRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
}).format;

module.exports = {
    formatBRL
}