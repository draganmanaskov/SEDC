//get the current year
let currentYearVar = new Date().getFullYear();


function calculateAge (birthYear, currentYear) {
    //calulate age
    let userAge = currentYear - birthYear
    console.log(`===Age====`)
    console.log(`You are ${userAge} years old`)
}

//ask user for a birth year 3 times
for(let i = 0; i < 3; i++) {
    calculateAge( +prompt("Enter birth year"), currentYearVar)
}
