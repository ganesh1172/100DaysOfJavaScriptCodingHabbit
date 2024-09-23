/** 
 *  -------------------------------------------------------
 *  Programming Question : Simple Currency Calculator
 *  -------------------------------------------------------
**/


// Q. wAF to convert an amount from one currency to another using static exchange to rates.

// Requirement:-
//? WAF named convertCurrency that takes three parameter: amount, fromCurrency, and toCurrency.
//? Use a fixed object to store exchange rates relative to a base currency (e.g. USD).
//? The function should return the converted amount in the target currency.
//? Handle conversion through USD as a base, meaning if converting from GBP to EUR, first convert GBP to USD, then USD to EUR.

const rates = {
   USD: 1, // Base Currency
   EUR: 0.9, // 1 USD = 0.9 EUR
   GBP: 0.8, // 1 USD = 0.8 GBP
   INR: 82 // 1 USD = 82 INR
}

function convertCurrency(amount, from, to) {

}

console.log(convertCurrency(100, "GBP", "EUR"));
// console.log(convertCurrency();

