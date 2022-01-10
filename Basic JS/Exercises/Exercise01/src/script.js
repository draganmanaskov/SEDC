let variable = 10;
console.log('-------')
console.log(`The type of ${variable} is: ${typeof(variable)}`)

variable += '1'
console.log('-------')
console.log(`The type of ${variable} is: ${typeof(variable)}`)

variable = null
console.log('-------')
console.log(`The type of ${variable} is: ${typeof(variable)}`)

variable = undefined
console.log('-------')
console.log(`The type of ${variable} is: ${typeof(variable)}`)

variable = isNaN(variable)
console.log('-------')
console.log(`The type of ${variable} is: ${typeof(variable)}`)

variable = NaN
console.log('-------')
console.log(`The type of ${variable} is: ${typeof(variable)}`)

