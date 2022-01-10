let reference = 100;

function closerTo (closerToNumber) {
    let input1 = inputNumberFunction();
    let input2 = inputNumberFunction();

    //calulate the distance from the desired number
    let input1Closer = Math.abs(closerToNumber - input1);
    let input2Closer = Math.abs(closerToNumber - input2);

    //if unput1 is closer
    if(input1Closer < input2Closer) {
        console.log(`Output: ${input1} is closer to ${closerToNumber}`)
    //if unput2 is closer    
    } else if ( input2Closer < input1Closer){
        console.log(`Output: ${input2} is closer to ${closerToNumber}`)
    //if both are equally close
    } else {
        console.log(`Output: Both numbers(${input1}, ${input2}) are equally close to ${closerToNumber}`)
    }
};

//prompt user for positiv number
function inputNumberFunction () {
    let input = +prompt("Please enter a positiv number");
    //validation check
    while (input < 0 || isNaN(input)) {
        input = +prompt("Incorect INPUT!! Please enter a positiv number");
    }
    return input
}

//Call closer to number function with argument number
closerTo(reference);