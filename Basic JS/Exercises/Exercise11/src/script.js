function stringCheck (stringVar) {
    //check for empty string
    if(!stringVar) {
        return 'No string'
    }
    //check if the string ends with "na"
    if(stringVar.toLowerCase().endsWith('na')) {
        return 'Hit' 
    }
    //doesnt end with "na"
    return "No hit"
}

let stringInput = prompt("Enter something!");
    

let resultString = stringCheck(stringInput);
console.log(`Original Input: ${stringInput}`)
console.log(`Does it end with "na": ${resultString}`)