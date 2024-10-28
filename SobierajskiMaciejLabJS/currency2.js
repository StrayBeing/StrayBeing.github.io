
class CurrencyConverter {
    constructor(exchangeRates) {
        this.exchangeRates = exchangeRates;
    }

    roundTwoDecimals(amount) {
        return Math.round(amount * 100) / 100;
    }

    convertToPLN(amount, currency) {
        if (!this.exchangeRates[currency]) {
            throw new Error(`Nieznana waluta: ${currency}`);
        }
        return this.roundTwoDecimals(amount * this.exchangeRates[currency]);
    }
}

const exchangeRates = {
    USD: 4.02,
    EUR: 4.35,
    GBP: 5.22,
    CAD: 2.89,
    CHF: 4.64
};

module.exports = { CurrencyConverter, exchangeRates };
