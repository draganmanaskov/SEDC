
function numberPosition () {
    let number = +prompt('Enter a number:')
    if (isNaN(number)) {
        console.log('Invalid input')
        return;
    }
    
    let predecessor = number - 1;
    let successor = number + 1;
    console.log(`Input number: ${number}`);
    console.log(`Predecessor: ${predecessor}`);
    console.log(`Successor: ${successor}`);
};

numberPosition();