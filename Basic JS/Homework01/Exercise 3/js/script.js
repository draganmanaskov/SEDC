var numberOfPhones = 30;
var priceOfPhone = 119.95;
var taxRate = 5;

// Base price pre tax
var pricePreTax = numberOfPhones * priceOfPhone

// The tax procent amount
var taxProcent = pricePreTax * (taxRate/100)

//Final price with included tax
var finalPrice = pricePreTax + taxProcent

console.log("Without inpit")
console.log(`The price of ${numberOfPhones} phones worth $${priceOfPhone} with a tax rate of %${taxRate} is:`)
console.log(`Pre Tax: $${pricePreTax}`)
console.log(`Post Tax: $${finalPrice}`)


// BONUS

// A regular expression for finding a positive float number
var regexFloat = /^[+]?\d+(\.\d+)?$/;

// A regular expression for finding a whole number
var regexWhole=/^[0-9]+$/;

var inputPriceOfPhones = prompt('Please enter the price of the phone');
//If the input is not a positive float number, it will promot the user until he enters a positive float number
while(inputPriceOfPhones.match(regexFloat) == null) {
    inputPriceOfPhones = prompt('Please enter the price of the phone(Must be a float number)')
}

var inputTaxRate = prompt('Please enter the tax rate amount');
//If the input is not a whole number, it will promot the user until he enters a whole number
while(inputTaxRate.match(regexWhole) == null) {
    inputTaxRate = prompt('Please enter the tax rate amount(Must be a whole number)')
}

// Base price pre tax
pricePreTax = numberOfPhones * inputPriceOfPhones

// The tax procent amount
taxProcent = pricePreTax * (inputTaxRate/100)

//Final price with included tax
finalPrice = pricePreTax + taxProcent


console.log("BONUS")
console.log("Whith inpit")
console.log(`The price of ${numberOfPhones} phones worth $${inputPriceOfPhones} with a tax rate of %${inputTaxRate} is:`)
console.log(`Pre Tax: $${pricePreTax}`)
console.log(`Post Tax: $${finalPrice}`)

