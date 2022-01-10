function rectanglePerimeterCalculator () {
    let widthVar = parseFloat(prompt("Enter width of rectangle:"));
    let heightVar = parseFloat(prompt("Enter height of rectangle:"));
    if(isNaN(widthVar) || isNaN(heightVar)) {
        console.log(`Invalid input`) 
        return
    };
    let perimeterVar = 2 * (widthVar + heightVar);
    console.log(`The perimeter of a rectangle with a width of ${widthVar} and a height of ${heightVar} is: ${perimeterVar}`);
}

rectanglePerimeterCalculator();