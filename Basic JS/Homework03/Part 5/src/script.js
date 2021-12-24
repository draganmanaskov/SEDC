function calulateAge(birthYear, currentYear) {
    let yourAge = currentYear - birthYear
    console.log(`You are ${yourAge} years old`)
}

calulateAge(1995, 2021);
calulateAge(1845, 1961);
calulateAge(305, 1560);

//Bonus
console.log('Bonus')

let currentYear = new Date().getFullYear();
calulateAge(1995, currentYear);
