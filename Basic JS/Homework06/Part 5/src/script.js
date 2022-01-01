let containerDiv = document.querySelector('.container');

//user input
let columnNum = parseInt(prompt('Number of columns:'))
let rowNum = parseInt(prompt('Number of rows:'))

function createTable (container,columns, rows) {
    let table = document.createElement('table');
    let newRow = '';

    // 1st for create rows
    for( let i = 0; i < rows; i++) {
        newRow = table.insertRow();
        //2nd for create coulms
        for( let j = 0; j < columns; j++) {
            let cell = document.createElement('td');
            cell.innerText = `Row-${i} Column-${j}`
            cell.style.border = '1px solid black'
            newRow.appendChild(cell)
        }
        table.appendChild(newRow);
    }
    table.style.border = '1px solid black'
    container.appendChild(table)
}

createTable (containerDiv, columnNum, rowNum);
