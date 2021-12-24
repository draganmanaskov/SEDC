function countChildren(girls, boys) {
    console.log(`${girls} girls ${boys} boys`)
}
countChildren(4, 7);

console.log('Bonus*')
function countChildrenBonus(girls, boys) {
    //a type of validation check 
    if(girls < 0 || boys < 0) {
        console.log("Invalid input")
        return
    }

    let girlsTemp = girls
    let boysTemp = boys
    
    if (girls < 10) {
        girlsTemp = '0' + girls
    }
    if (boys < 10) {
        boysTemp = '0' + boys
    }

    console.log(`${girlsTemp} girls ${boysTemp} boys`)
}

countChildrenBonus(4, 7);


//User input for bonus part
let numOfGirls = prompt("Number of girls in the team")
let numOfBoys = prompt("Number of boys in the team")

countChildrenBonus(numOfGirls, numOfBoys);