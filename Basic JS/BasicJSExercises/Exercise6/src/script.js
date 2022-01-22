let myArray = ['hello','test', 3, 8, null, undefined, NaN, "", false, 9, 'hi'];

function arrayClear(myArr) {

  let transformedArr = []
  for (let element of myArr) {
    if(element) {
      transformedArr.push(element)
    }
  }
  console.log(`Transformed Array: ${transformedArr}`)
}

arrayClear(myArray);
