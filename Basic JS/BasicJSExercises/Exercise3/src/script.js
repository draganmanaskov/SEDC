let constantNumber = 13;

function getNumber(myInput, constantNum) {
    if(isNaN(myInput)) return
    //subract user input and constant
    let sub = myInput - constantNum
    
    //if user input is largrer than the constant double the result
    if(myInput > constantNum) {
        sub *= 2
    }
    //return result
    return sub

}

let userInput = +prompt('Enter a number')
let result = getNumber(userInput, constantNumber)


console.log(`Input:${userInput} => Output:${result}`)