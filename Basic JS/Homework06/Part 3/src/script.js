// parent div 
let containerDiv = document.querySelector('.container');

//user input , recipe name and number of ingridients
let recipeName = prompt("Recipe Name:");
let ingredientsAmount = parseInt(prompt('Ingredients Amount:'));

// create heading
let heading = document.createElement('h1');
heading.innerText = recipeName;
containerDiv.appendChild(heading);

// create unordered
function createIngridientList(container) {
    //create <ul>
    let unorderedList = document.createElement('ul');
    // create <table>
    let table = document.createElement('table');

    // ask for ingridients and place them in the right elemnt
    for(let i = 0; i < ingredientsAmount; i++) {
        let ingridient = prompt('Ingredient Name:');
        createLiElement(unorderedList, ingridient)
        createTrTd(table, ingridient , i);
    }
    //apend to the parent element
    container.appendChild(unorderedList);
    container.appendChild(table);
}

function createLiElement (ul, item) {
    let liElement = document.createElement('li');
    liElement.innerText = item
    ul.appendChild(liElement);
}

// Bonus
// create table 
function createTrTd(table, item, index) {
    // create row , row index, ingridient 
    let rowTable = document.createElement('tr');
    let cellRowIndex = document.createElement('td');
    let cellTable = document.createElement('td');

    //append index
    cellRowIndex.innerText = `${index + 1}.`;
    cellRowIndex.style.border = '1px solid black'
    rowTable.appendChild(cellRowIndex);

    
    //append ingridient
    cellTable.innerText = item;
    cellTable.style.border = '1px solid black'
    rowTable.appendChild(cellTable);

    //append row
    table.appendChild(rowTable)
    table.style.border = '1px solid black'
}

// call both functions
createIngridientList (containerDiv);


