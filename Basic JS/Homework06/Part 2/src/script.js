document.title = 'Weight calculator in chickens';
let containerDiv = document.querySelector('.container');

let userInput = parseFloat(prompt("Enter your weight:"));

function weightInChickens (weight) {
    let result = document.createElement('p');
    result.innerText = `Your weight in chickens: ${weight * 2} chickens`;
    containerDiv.appendChild(result);
};

weightInChickens(userInput);