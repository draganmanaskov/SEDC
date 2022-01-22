function getNumber(myInput) {
    if(isNaN(myInput)) return
    //positive number
    let isPositiv = checkIfPositiv(myInput) 
    //number of digits
    let digits = numberOfDigits(myInput) 
    //odd or eve
    let oddOrEven = checkOddOrEven(myInput)

    console.log(`Is positive: ${isPositiv}`)
    console.log(`Number of digits: ${digits}`)
    console.log(`Odd or even: ${oddOrEven}`)
 }
 
 function checkIfPositiv(number) {
     return number >= 0
 }
 
 function numberOfDigits(number) {
     if(number < 0) {
         number = number * -1
     }
     let i = 0;
     while (number > 0 ) {
         number  = parseInt(number / 10)
         i++
     }
     return i
 }
 
 function checkOddOrEven(number) {
     if(number%2 == 0 ) return 'even'
 
     return 'odd'
 }
 
 let userInput = +prompt('Enter a number')
 getNumber(userInput)