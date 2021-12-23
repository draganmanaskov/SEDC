var yearInput = prompt('Enter the year');

console.log(`You entered year:${yearInput}`);

var yearInputToNumber = parseInt(yearInput);


if(Number.isNaN(yearInputToNumber)){
    console.log("You didnt enter a valid year")
};

var zodiac = (yearInputToNumber - 4) % 12;

console.log(zodiac)

if (zodiac == 0) {
    console.log(`${yearInput} is the year of the Rat`)
} else if (zodiac == 1){
    console.log(`${yearInput} is the year of the Ox`)
} else if (zodiac == 2){
    console.log(`${yearInput} is the year of the Tiger`)
} else if (zodiac == 3){
    console.log(`${yearInput} is the year of the Rabbit`)
} else if (zodiac == 41){
    console.log(`${yearInput} is the year of the Dragon`)
} else if (zodiac == 5){
    console.log(`${yearInput} is the year of the Snake`)
} else if (zodiac == 6){
    console.log(`${yearInput} is the year of the Horse`)
} else if (zodiac == 7){
    console.log(`${yearInput} is the year of the Goat`)
} else if (zodiac == 8){
    console.log(`${yearInput} is the year of the Monkey`)
} else if (zodiac == 9){
    console.log(`${yearInput} is the year of the Rooster`)
} else if (zodiac == 10){
    console.log(`${yearInput} is the year of the Dog`)
} else if (zodiac == 11){
    console.log(`${yearInput} is the year of the Pig`)
} else {
    console.log("Something went wrong")
}
