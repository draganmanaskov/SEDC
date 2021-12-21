 var pi = 3.14
 var r = prompt("Please enter the radis")

// A regular expression for finding a whole number
var regex=/^[0-9]+$/;

//If the input is not a whole number, it will promot the user until he enters a whole number
 while (r.match(regex) == null) {
     r = prompt("Please enter the radis")
 }

 var area = pi * r * 2

 console.log(`The are for a circle with radis of ${r} is ${area}`)