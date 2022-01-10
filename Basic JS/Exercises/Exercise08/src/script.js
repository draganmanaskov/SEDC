//user input function
function inputNumberFunction () {
    let input = +prompt("Please enter a random number to win a prize");
    //validation check
    while (isNaN(input)) {
        input = +prompt("Invalid INPUT!! Enter a valid number");
    }
    return input
}

//user input
let number1 = inputNumberFunction();
let number2 = inputNumberFunction();

//check conditions
function numberCheck (numberOne, numberTwo) {
    if(numberOne > 30 || numberTwo > 30 || numberOne + numberTwo === 50) return true
    return false
}

//store function result
let result =  numberCheck(number1, number2)

//print if contidions are met
if(result) {
    console.log("A secret condition has been met! YOU WON!")
}
//print if contidions are not met
else {
    console.log("None of the conditions were met, please try again.")
}