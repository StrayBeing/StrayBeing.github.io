
const currency1 = require('./currency1');
const { CurrencyConverter, exchangeRates } = require('./currency2');
const amounts = [100, 150, 200];
const currencies = ['USD', 'EUR', 'GBP', 'CAD', 'CHF'];

console.log('Testowanie currency1.js:');
amounts.forEach(amount => {
    currencies.forEach(currency => {
        try {
            const converted = currency1.convertToPLN(amount, currency);
            console.log(`${amount} ${currency} to PLN: ${converted}`);
        } catch (error) {
            console.error(error.message);
        }
    });
});

console.log('\nTestowanie currency2.js:');
const currency2 = new CurrencyConverter(exchangeRates);
amounts.forEach(amount => {
    currencies.forEach(currency => {
        try {
            const converted = currency2.convertToPLN(amount, currency);
            console.log(`${amount} ${currency} to PLN: ${converted}`);
        } catch (error) {
            console.error(error.message);
        }
    });
});
