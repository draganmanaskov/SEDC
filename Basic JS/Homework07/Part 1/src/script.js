let myForm = document.getElementById("form");
let dogName = myForm.children[0];
let dogKind = myForm.children[1];
let dogMessage = myForm.children[2];


let newDog;

// Constructor Notation 
function Dog(dName, dKind) {
    this.name = dName
    this.kind = dKind
    this.speak = function (message) {
        console.log(`${this.name} says: ${message}`)
    }
}

//create object 
function formHandler(e) {
    //prevent form from submiting
    e.preventDefault();
    
    // if there is no Object or if the input for the Object has changed create a NEW Object
    if(newDog == undefined || dogName.value != newDog.name || dogKind.value != newDog.kind) {
        newDog =  new Dog(dogName.value, dogKind.value);
        console.log('Created new Dog Object');
        console.log(`Name:${newDog.name}`);
        console.log(`Kind:${newDog.kind}`);
    }

    //print out the message
    newDog.speak(dogMessage.value);

    //clear message input field 
    dogMessage.value = '';
}

//handle submit event on the form
myForm.addEventListener('submit',formHandler);


