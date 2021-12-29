console.log("START")

let fistArray = [1, 5, 6, 7, 23, 3, 5 ,2 ,6 , 5, '' ,1, 5, 3];
let secongArray = [2, 5, 6, 7, 23, 3, 5 ,1 ,2 , 67, false, 34, 6, 5];
let thridArray = [1, 5, 6, 34, 23, 5, 11 ,2 ,5 , 3 , 5 , 5, 'false', 5];

let constantNumber = 5;

function findNumber (number, myArray) {
    let numberOfTimes = 0;
    // if the number argument is the same with item of the array add 1 to the counter
    for(let item of myArray) {
        if(item == number) {
            numberOfTimes++;
        }
    }
    return numberOfTimes
}

let nubmerOfRepeats = findNumber(constantNumber, fistArray);
console.log("===Firs===")
console.log(`There are ${nubmerOfRepeats} occurrences of number ${constantNumber} in the array`);

nubmerOfRepeats = findNumber(constantNumber, secongArray);
console.log("===Second===")
console.log(`There are ${nubmerOfRepeats} occurrences of number ${constantNumber} in the array`);

nubmerOfRepeats = findNumber(constantNumber, thridArray);
console.log("===Third===")
console.log(`There are ${nubmerOfRepeats} occurrences of number ${constantNumber} in the array`);

console.log("END")