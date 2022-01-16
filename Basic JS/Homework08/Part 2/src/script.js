$(document).ready(function() {
    let containerDiv = $('.container');
    let myForm = $('#form');
    let textInput = $('#text-input');
    let colorInput = $('#color-input');
    
    //create and append an empty h3 elemnt
    let h3 = $(`<h3></h3>`)
    containerDiv.append(h3)

    //create and append a div elemnt
    let randomDiv = $('<div></div>').css({
        'background-color': 'aqua'
    })
    randomDiv.append('<h2>jquery div</h2>').find('h2').css('color', 'blue')
    randomDiv.append('<p>This is a div created via jquery</p>').find('p').css('color', 'red')
    containerDiv.append(randomDiv)


    function formHandler(e) {
        //prevent form from submiting
        e.preventDefault();

        //add the text input in the h3 elemnt and make the text color = to the color input
        h3.empty().text(textInput.val()).css('color', `${colorInput.val()}`)

        //clear form inputs
        textInput.val('')
        colorInput.val('')
    }

    myForm.submit(formHandler)
})

