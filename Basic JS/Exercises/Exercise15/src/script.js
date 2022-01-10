let numberArr = [1, 4, 56, 76, 2, 42, 31];

function transformArray (myArray) {
    let transformed = [];
    for(let item of myArray) {
        //even
        if(item%2 == 0) {
            transformed.push(item * 2);
            continue;
        }
        //odd
        transformed.push(item * 3);
    }
    //old arr
    console.log(myArray)
    //new arr
    console.log(transformed)
}

//call function
transformArray(numberArr)
