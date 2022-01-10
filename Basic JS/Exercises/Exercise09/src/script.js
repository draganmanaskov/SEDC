let divisor = 3;

//user input function
function inputNumberFunction () {
    let input = +prompt("Please enter a random number to win a prize");
    //validation check
    while (isNaN(input)) {
        input = +prompt("Invalid INPUT!! Enter a valid number");
    }
    return input
}

//number input
let numberInput = inputNumberFunction();

function divisibleBy(number, div) {
    console.log("Starting...")

    // transform to string and add all numbers 
    let numberString = number.toString().replace(".", "");
    let sumOfNumbers = 0;
    for (let number of numberString) {
        sumOfNumbers += +number
    }

    //check if the sum of all the numbers is divisible by the divisor
    if(sumOfNumbers%div == 0) {
        console.log(`${number} is divisible by ${div}`) 
        return
    }  
    console.log(`${number} is not divisible by ${div}`)
}

//call function with a dividend and the divisor
divisibleBy(numberInput, divisor);