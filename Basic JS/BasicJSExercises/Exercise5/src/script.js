let gradesArr = [10, 6, 8, 9, 6];
let gradeToPass = 8;

function gradesCheck(grades, minGradeToPass) {
  let sum = 0;
  for (let grade of grades) {
    sum += grade;
  }
  console.log(sum / grades.length);
  sum / grades.length >= minGradeToPass
    ? alert("You Passed")
    : alert("You Failed");
}

gradesCheck(gradesArr, gradeToPass);
