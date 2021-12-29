console.log("START")

let startNumber = 1;
let endNumber = 20;

function oddEvenPrint (start, end) {

    while(start <= end) {
        //if even
        if(start%2 == 0){
            console.log(`${start}\n `)
        } 
        //if odd
        else {
            console.log(` ${start}`)
        }
        start++
    }
}

oddEvenPrint(startNumber, endNumber)

console.log("END")