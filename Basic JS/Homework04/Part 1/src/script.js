console.log("START")

function tellStory(myArray) {
    return `This is ${myArray[0]}. ${myArray[0]} is a nice person. Today they are ${myArray[1]}. They are ${myArray[2]} all day. The end.`
}

let story = tellStory(['Dragan', 'happy', 'gaming']);
console.log(story)

console.log("END")