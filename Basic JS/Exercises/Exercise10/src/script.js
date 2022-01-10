let vowels = ['a', 'e', 'i', 'o', 'u'];

function stringCheck (stringVar, vowelsArr) {
    //check for empty string
    if(!stringVar) {
        return 'No string'
    }
    //check if the first char is included in the wovels array
    if(vowelsArr.includes(stringVar[0].toLowerCase())) {
        return 'Hit' + stringVar + 'Hit'
    }
    //doesnt start with a vowel
    return stringVar
}

let stringInput = prompt("Enter something!");
    

let resultString = stringCheck(stringInput, vowels);
console.log(`Original Input: ${stringInput}`)
console.log(`Transformed Input: ${resultString}`)