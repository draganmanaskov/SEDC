let yearInput = prompt('Enter the year');

console.log(`You entered year:${yearInput}`);

let yearInputToNumber = parseInt(yearInput);


let zodiac = (yearInputToNumber - 4) % 12;


switch (zodiac) {
    case 0:
        console.log(`${yearInput} is the year of the Rat`)
        break;
    case 1:
        console.log(`${yearInput} is the year of the Ox`)
        break;
    case 2:
        console.log(`${yearInput} is the year of the Tiger`)
        break;
    case 3:
        console.log(`${yearInput} is the year of the Rabbit`)
        break;
    case 4:
        console.log(`${yearInput} is the year of the Dragon`)
        break;
    case 5:
        console.log(`${yearInput} is the year of the Snake`)
        break;
    case 6:
        console.log(`${yearInput} is the year of the Horse`)
        break;
    case 7:
        console.log(`${yearInput} is the year of the Goat`)
        break;
    case 8:
        console.log(`${yearInput} is the year of the Monkey`)
        break;
    case 9:
        console.log(`${yearInput} is the year of the Rooster`)
        break;
    case 10:
        console.log(`${yearInput} is the year of the Dog`)
        break;
    case 11:
        console.log(`${yearInput} is the year of the Pig`)
        break;
    default:
        console.log("Invalid Input!")
        break;    
}
