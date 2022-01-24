$(document).ready(function() {
    let container = $('.container');
    let myForm = $('#form');
    let textInput =$('#text-input');
    let colorInput =$('#color-input');
    let errorMsg = $('#error-message').text("ERROR!!! Invalid Input!").hide();

    myForm.on('submit', function(e) {
        e.preventDefault();
        let message = textInput.val()
        let color = colorInput.val()


        errorMsg.hide();
        //if there is no error prosseed
        if(errorHandler(message, color)){ 
            // if this is the first time the function is run
            if($('.created').length === 0) {
                let h1 = $('<h1 class="created"></h1>').text(`${message}`).css({
                    'color': `${color}`
                })
                container.append(h1)
            }
            //every other time select the previously created h1 and change content
            else {
                $('.created').first().text(`${message}`).css({
                    'color': `${color}`
                })
            }

        }
    })

    function errorHandler (text, color) {
        let s = new Option().style;
        s.color = color;

        // if text input is empty or if the color does not exist 
        if(!s.color || !text) {
            //show the hiiden message
            errorMsg.show()
            setTimeout(()=> {
                //after 5 sec hide the message
                errorMsg.hide()
            }, 5000)
            return false
        }
        return true
    }
})

