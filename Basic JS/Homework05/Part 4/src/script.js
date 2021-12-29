console.log("START")

let unputArray = []

//Array input
let numberInput = prompt("Enter a number (to end enter 'end')"); 
while(numberInput != 'end') {
    unputArray.push(parseInt(numberInput));
    numberInput =prompt("Enter a number (to end enter 'end')"); 
}

// tpey input 'odd' or 'even'
let typeInput = prompt("Enter 'odd' or 'even'.")

function findNumber (myArray, type) {
    let transformedArr = [];
    for(let item of myArray) {
        //depending on the type it will check only one case the entire for loop
        switch(type) {
            case 'odd':
                if(item % 2 != 0)
                transformedArr.push(item)
                break;
            case 'even':
                if(item % 2 == 0)
                transformedArr.push(item)
                break;
            default:
                transformedArr.push("Invalid input")
                return transformedArr
                break;    
        }
    }
    return transformedArr;
}

let result = findNumber(unputArray, typeInput);

console.log(`Numbers of type ${typeInput} in the array ${unputArray} are:`)
console.log(result)

console.log("END")