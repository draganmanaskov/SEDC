console.log("START")

let initalArr = ["Hello", "there", "students", "of", "SEDC", "!"];

function concatenateStrings (myArray) {
    // Add first element of array from the string
    let stringVar = myArray[0]

    //start from second element
    let i = 1;
    while(i < myArray.length) {
        stringVar += ' ' + myArray[i]
        i++
    }
    console.log(`Result: ${stringVar}`)
};

concatenateStrings(initalArr);

//whith user inpit
let inputArray = [];
let userInput = prompt("Enter a string, to end the program enter 0")
while (userInput != '0') {
    inputArray.push(userInput);
    userInput = prompt("Enter a string, to end the program enter 0")
}

concatenateStrings(inputArray);

console.log("END")