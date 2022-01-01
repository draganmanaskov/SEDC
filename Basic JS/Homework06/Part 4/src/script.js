let containerDiv = document.querySelector('.container');


//create button
function createButton (container) {
    let buttonAlert = document.createElement('button');
    buttonAlert.innerText = "Alert";
    
    // click event 
    greeting (buttonAlert);

    //append button to DOM
    container.appendChild(buttonAlert)
}

// click event 
function greeting (btn) {
    btn.addEventListener('click', function (){
            alert('Hello Dragan')
    })
};

//call create button
createButton (containerDiv);