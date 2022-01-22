$(document).ready(function() {
    let myForm = $('#form');
    //create the h1 element with jquery
    $('.container').append(`<h1 id="header1"></h1>`);
    // get the newly created h1
    let h1Elemnt = $('#header1');
    let messageInput = $('#message');
    
    function printMessage(e) {
        // prevent form submit
        e.preventDefault();

        //change the text of the h1 element with our input
        h1Elemnt
            .text(`${messageInput.val()}`)
            .css({
                'font-size': '2em',
            })
        //clear input    
        messageInput.val('');
    }

    //call when submit
    myForm.submit(function (e) {
        printMessage(e)
    })

})

