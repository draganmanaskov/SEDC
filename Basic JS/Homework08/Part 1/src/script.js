$(document).ready(function() {
    let myForm = $('#form');
    let animalName = $('#animal-name');
    let animalType = $('#animal-type');
    let animalAge = $('#animal-age');

    //our ul elemnt
    let ulList = $('#zoo-list').css({
        'background-color': 'lightgreen',
        'list-style': 'none'
    })


    //our array of zoo animals
    let myZooArray = [];

    // Constructor Notation 
    function Animal(aName, aType, aAge) {
        this.name = aName
        this.type = aType
        this.age = aAge
    }

    //create object 
    function formHandler(e) {
        //prevent form from submiting
        e.preventDefault();

        //add array elemnt
        myZooArray.push(new Animal(animalName.val(), animalType.val(), animalAge.val()))

        //clear form inputs
        animalName.val('')
        animalType.val('')
        animalAge.val('')

        //call DOM changer function
        changeDOM(myZooArray)
    }

    //add ul elemnts to the DOM
    function changeDOM(zooArr) {
        //when its the first time, add a padding to the ul elemnt
        if(zooArr.length == 1){
            ulList.css('padding', '15px')
        }
        //clear list every time
        ulList.empty()
        let index = 1;
        for(let animal of zooArr){
            //create empty li
            let liElement = $(`<li></li>`)
            // add info to the li element
            liElement.append(`<h3>Animal ${index}</h3>`)
            liElement.append(`<span>Name: ${animal.name}</span> <span>Type: ${animal.type}</span> <span>Age: ${animal.age}</span>`)
            // add css to the li elemnt
            liElement.css({
                'width' : '90%',
                'border': '1px solid black',
                'background-color': 'aqua',
                'margin': '20px auto',
                'padding-bottom': '10px'
            //add css to the spans in the li elemt
            }).find('span').css({
                'display': 'block'
            })    
            // append li to the list
            ulList.append(liElement)
            index++;
        }

    }
    //handle submit event on the form
    myForm.submit(formHandler)

})




