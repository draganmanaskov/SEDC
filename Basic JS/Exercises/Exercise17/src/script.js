let randomArray = ["13313", 23, false, "ewg2", "Hello" ,,'no', "yes", "This is my"]

function concatenateString (myArray) {
    // shortests and longest string.length
    let shortestString = +Infinity;
    let longestString = 0;

    // shortests and longest string text
    let shortestStringValue = '';
    let longestStringValue = '';

    for ( let item of myArray) {
        //remove all non string items
        if (typeof item != 'string') {
            continue;
        }
        //if item is smaller than the current one
        if(item.length < shortestString) {
            shortestString = item.length
            shortestStringValue = item
        }
        //if item is larger than the current one
        if(item.length > longestString) {
            longestString = item.length
            longestStringValue = item
        }
    }
    //return concatenation
   return `${shortestStringValue} ${longestStringValue}`
}

let result = concatenateString(randomArray);
console.log(result)