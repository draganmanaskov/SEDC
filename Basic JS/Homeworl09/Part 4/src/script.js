$(document).ready(function() {
    let myForm = $("#form");
    let number1 = $("#number_1");
    let number2 = $("#number_2");
    let number3 = $("#number_3");
    let result = $('#result');
    let errorMsg = $('#error').text('Invalid Inputs! Enter only numbers').hide();

    myForm.on('submit', (e)=> {
        //prevent form submit
        e.preventDefault();

        //validation check
        checkInputs(+number1.val(), +number2.val(), +number3.val())
    })

    function checkInputs() {
        //if there is an invalid input show error msg
        for(let input of arguments) {
            if(isNaN(input)){
                errorMsg.show();
                //remove error msg
                setTimeout(()=> {
                    errorMsg.hide()
                }, 4000)
                //end
                return
            }
        }
        //call avarage function
        calcAvarage(...arguments)
    }

    function calcAvarage() {
        let sum = 0;
        //calulate sum
        for(let number of arguments) {
            console.log(number)
            sum += number
        }
        //calulate avarage
        let avarage = sum/arguments.length
        //set h1 text 
        result.text(`${avarage}`)
        // check if the avarage is greater than 10
        avarage >= 10 ? result.css('color', 'green') : result.css('color', 'red')
    }

})

