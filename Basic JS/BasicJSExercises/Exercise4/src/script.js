let constantNum = 100

function checkNumber(number1, number2, constNum) {
    let res1 = constNum - number1
    let res2 = constNum - number2

    if(res1 < 0) {
        res1 *= -1
    }
    if(res2 < 0) {
        res2 *= -1
    }

    if(res1 > res2) {
        console.log(`${number2} is closer to ${constNum}`) 
    }
    else if(res2 > res1){
        console.log(`${number1} is closer to ${constNum}`) 
    } else {
        console.log(`${number1} and ${number2} are equally close to ${constNum}`)
    }
}

function getUserUserInput() {
    let num = +prompt('Enter a number')
    while(isNaN(num) || num < 0) {
        num = +prompt('Enter a POSITIVE number')
    }
    return num
}

let num1 = getUserUserInput();
let num2 = getUserUserInput();

checkNumber(num1, num2, constantNum);