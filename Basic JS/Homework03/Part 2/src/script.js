
function getParameterType (variable) {
    let varType = typeof(variable)
    console.log("Console.log from inside of the function")
    console.log(`Parameter type: ${varType}`)
    console.log("Console.log from outisde of the function")
    return varType
};

console.log('--Object--')
console.log(`Parameter type: ${getParameterType([1,2,3])}`)

console.log('--Boolean--')
console.log(`Parameter type: ${getParameterType(true)}`)

console.log('--Number--')
console.log(`Parameter type: ${getParameterType(7)}`)

console.log('--String--')
console.log(`Parameter type: ${getParameterType("Hello")}`)

console.log('--Undefined--')
console.log(`Parameter type: ${getParameterType(undefined)}`)

