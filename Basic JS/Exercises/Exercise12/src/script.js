function checkGrade (grade) {
    //switch case for grade result
    switch (grade) {
        case "A":
            console.log("Excellent job!")
            break;
        case "B":
            console.log("Good job!")
            break;
        case "C":
            console.log("Passed")
            break;
        case "D":
            console.log("Not so good!")
            break;
        case "F":
            console.log("Failed!")
            break;
        default:
            console.log("Unknown grade!")
            break;
    }
};

//user input 
let gradeInput = prompt('Please enter your grade (A, B, C, D or F)').toUpperCase();

//call grade check function
checkGrade(gradeInput);