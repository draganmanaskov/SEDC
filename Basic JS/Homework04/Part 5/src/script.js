console.log("START");

function sumOfMaxAndMin (myArray) {
    let min = +Infinity;
    let max = -Infinity;

    let i = 0;
    while(i < myArray.length) {
        //turn every element that can be transformed into a number
        let parseNum = Number(myArray[i])

        //if an item cant be transformed skipp it
        if(isNaN(parseNum)){
            console.log("An item was skipped")
        }
        //compare to max and min
        else {
            if(parseNum > max) {
                max = parseNum
            }
            if(parseNum < min) {
                min = parseNum
            }
        }
        i++;
    }
    console.log(`Max: ${max}, Min: ${min}, Sum: ${max + min}`)
}

console.log('====ONLY NUMBERS====')
let arr = [3, 5, 6, 8, 11]
sumOfMaxAndMin(arr);

console.log('====WITH OTHER TYPES INCLUDED====')
let arr2 = [3, 5, 'string', '25', '3A', 6, 8, 11 , false, -1]  
sumOfMaxAndMin(arr2);



console.log("END");