function calulateInDogYears(humanYears) {
    let inDogYears = humanYears * 7
    console.log(`Your dog's age is ${humanYears} in human years. ${inDogYears} is the calculated age`)
};

calulateInDogYears(10);

//Bonus*
console.log("Bonus*")

function calulateInHumanYears(dogYears) {
    let inHumanYears = dogYears / 7
    console.log(`Your dog's age is ${dogYears} in dog years. ${inHumanYears} is the calculated age`)
};

calulateInHumanYears(70)

//Bonus **
console.log("Bonus**")

function ageCalculator(ageNumber, type) {
    switch(type) {
        case "human":
            let inHumanYears = ageNumber / 7
            console.log(`Your dog's age is ${ageNumber} in dog years. ${inHumanYears} is the calculated age`)
            break;
        case "dog":
            let inDogYears = ageNumber * 7
            console.log(`Your dog's age is ${ageNumber} in human years. ${inDogYears} is the calculated age`)
            break;
        default:
            console.log('Unsuported argument value')        
    }
}
// Enter the age number and the type you want to transform the age to
ageCalculator(7,'dog')