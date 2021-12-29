console.log("START")

let firstNames  = ["Bob", "Jill", "Leeroy "];
let lastNames = ["Gregory", "Wurtz", "Jenkins"];

function getFullName ( first, last ) {
    let fullNames = [];

    //check if the two lists are of the same size
    if(first.length != last.length) {
        fullNames.push("The two lists are not the same size")
        return fullNames
    }

    for(let index in first) {
        //adds the index + 1 
        fullNames.push(`${+index + 1}. ${first[index]} ${last[index]}`)
    }
    return fullNames
}

let fullNamesArr = getFullName(firstNames, lastNames);

console.log('The full names are:')
for(let fullName of fullNamesArr) [
    console.log(fullName)
]

console.log("END")