var inputNumber1 = parseFloat(prompt("Enter the first number"));
var inputNumber2 = parseFloat(prompt("Enter the second number"));
var inputNumber3 = parseFloat(prompt("Enter the third number"));
var inputNumber4 = parseFloat(prompt("Enter the fourth number"));
var inputNumber5 = parseFloat(prompt("Enter the fifth number"));


var max = -Infinity

if (inputNumber1 > max) {
    max = inputNumber1
}
if (inputNumber2 > max) {
    max = inputNumber2
}
if (inputNumber3 > max) {
    max = inputNumber3
}
if (inputNumber4 > max) {
    max = inputNumber4
}
if (inputNumber5 > max) {
    max = inputNumber5
}

console.log(`The maximum number is ${max}`);
alert(`The maximum number is ${max}`);