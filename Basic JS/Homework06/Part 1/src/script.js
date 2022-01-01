let containerDiv = document.querySelector(".container");

let numberArray = [2, 5, 4, 12, 23, 3];

// create ul element
let unorderedList = document.createElement('ul');

let listElement = ''
let sumPrint = '';
let sum = 0; 
//create and uppend the <li> to the <ul>
for(let number of numberArray) {
    listElement = document.createElement('li');
    listElement.innerHTML = number;
    unorderedList.appendChild(listElement);
    sumPrint += `${number} + `;
    sum += number;
}

// add <ul> to the DOM
containerDiv.appendChild(unorderedList)

//replace the extra '+' with a '=' and add the sum
let replaceChar = sumPrint.length - 2;
let newSumPrint = sumPrint.substring(0, replaceChar) + '=' + sumPrint.substring( replaceChar + 1);
newSumPrint += sum

//create <p> and add the sum string
let sumParagraph = document.createElement('p');
sumParagraph.innerText = newSumPrint;

// add the sum to the DOM
containerDiv.appendChild(sumParagraph);