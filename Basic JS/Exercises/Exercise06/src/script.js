function calculateSum () {
    let input1 = inputNumberFunction();
    let input2 = inputNumberFunction();

    let sumVar = input1 + input2;
    //checks to see if the inputs are the same number
    if(input1 === input2) {
        console.log(`The two numbers are the same`)
        console.log(`Regular Sum: ${sumVar}`)
        sumVar *= 3;
        console.log(`Transformed Sum: ${sumVar}`)
        return
    } 
    console.log(`Sum: ${sumVar}`)

};

//prompt user for positiv number
function inputNumberFunction () {
    let input = +prompt("Please enter a number");
    //validation check
    while (isNaN(input)) {
        input = +prompt("Incorect INPUT!! Please enter a number");
    }
    return input
}

//Call closer to number function with argument number
calculateSum();