//allowed grade inputs
let grades = [5, 6, 7, 8, 9, 10];
//number of exams
let numberOfExams = 5;
//grade needed to pass
let avarageToPass = 8;

function stedentHasPassed (allowedGradesArr, numberOfExamsVar, avarageToPassVar) {
    let studentGrades = [];
    let gradeSum = 0;
    let numberInput;

    // fill array with grade inputs and get their sum
    for(let i = 0; i < numberOfExamsVar; i++) {
        numberInput = inputNumberFunction(allowedGradesArr)
        studentGrades.push(numberInput)
        gradeSum += numberInput;
    }

    //grade avarage
    let studentAvarage = gradeSum/numberOfExamsVar;

    // case when the student fails
    if(avarageToPassVar > studentAvarage) {
        console.log('You failed')
        console.log(`Needed Avarage to Pass: ${avarageToPassVar}`)
        console.log(`Your Avarage to Pass: ${studentAvarage}`)
        return
    }
    
    // case when the student passes
    console.log(`You passed with an avarage of ${studentAvarage}`)

}

//prompt user for a grade
function inputNumberFunction (allowedGradesArr) {
    let input = +prompt("Please enter a grade");
    //validation check
    while (!allowedGradesArr.includes(input)) {
        input = +prompt("Invalid INPUT!! Valid Grades are [5, 6, 7, 8, 9, 10]");
    }
    return input
}

stedentHasPassed(grades, numberOfExams, avarageToPass);