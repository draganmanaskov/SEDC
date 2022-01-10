let arrayOfItems = ['Heloo', "bad", "apple", 'blue', "good", 'orange'];

function convertToString( myArray ) {
    //add first item to the new string
    let joinedString = myArray[0];
    //remove first item from array
    myArray.shift();
    //loop array
    for(let item of myArray) {
        //add a white space + the current item
        joinedString += ` ${item}`
    }
    console.log("The joined string is:")
    console.log(joinedString)
}

//call function
convertToString(arrayOfItems)