console.log("START");
let correctInput = [2, 4, 5, 34, 1];
let incorrectInput = ['2', true, 3 ,5 ,6]

function sumOfArr(myArray) {
    let i = 0
    let sum = 0
    while(i < myArray.length){
        // if the current element of the arry is not a number cosole.log an error and exit the function
        if(!validateNumber(myArray[i])){
            console.log("There was an error")
            return;
        }
        sum += myArray[i]
        i++
    }
    //otherwise print the sum
    console.log(`The sum is: ${sum}`)
}

function validateNumber(element) {
    //if the argument is of type 'number' return true 
    if(typeof(element) == 'number') {
        return true
    }
    //otherwise return false 
    return false
}

//An array with valid elements as input
sumOfArr(correctInput);

//An array with invalid elements as input
sumOfArr(incorrectInput);

console.log("END");