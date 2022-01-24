$(document).ready(function() {
    let myForm = $("#form");
    let todoInput = $("#todo_input");
    let todoList = $('#todo_list').hide().css({
        'list-style-type': 'none',
        'background-color': 'lightblue',
        'padding': '15px',
        'border-radius': '15px',
    })
    
    let todoArray = [];

    //todo Object
    function ToDoItem(name) {
        this.name = name;
        this.isCompleted = false;
    }

    myForm.on('submit', (e)=> {
        //prevent form submit
        e.preventDefault();

        renderToDos(todoInput.val())
        todoInput.val('')
    })

    function renderToDos(item) {
        // clear the dom ul
        todoList.empty()

        //run on the first call
        if(todoArray.length == 0) {
            todoList.show()
        }

        //add new object to the array
        todoArray.push(new ToDoItem(item))

        for(let index in  todoArray) {
            //create new li elemnt
            let li = $('<li></li>').css({
                'font-size': '0.6em',
                'border': '1px solid white',
                'border-radius': '15px',
                'display': 'flex',
                'justify-content': 'space-between',
                'padding': '0 5px',
                'margin': '3px',
                'background-color': '#aee5f5',
            })

            //add p elemnt 
            let p =  $(`<p>${todoArray[index].name}</p>`).css('font-size', '2em')
            //if isCompleted is true set the text-decoration to line-through, if false to none
            todoArray[index].isCompleted ? p.css('text-decoration', 'line-through'):  p.css('text-decoration', 'none')
            //apend the p elemnt to the li
            li.append(p)

            //create a checkbox
            let checkbox = $('<input />', { type: 'checkbox', id: index, value: false }).css({
                'transform': 'scale(2)',
                'padding': '10px'
            })
            //if isCompleted is true set its state and value to true
            if(todoArray[index].isCompleted) {
                checkbox.prop('checked', true);
                checkbox.val(true)
            }
            
            //add on change listener on the checkbox
            checkbox.on('change', (e) => {
                // get the curent bool value after clicking
                let isTrueSet = !(e.target.value === 'true');
                //change the clicked checkbox value
                $(`#${e.target.id}`).val(isTrueSet)

                //update the array with the changed status
                let currentItem = todoArray[e.target.id]
                currentItem.isCompleted = isTrueSet;
                todoArray[e.target.id] = currentItem

                //get the coresponding li 
                let selected = todoList.children('li').eq(e.target.id);
                //change the text style depending on the checkbox 
                if(isTrueSet) {               
                    selected.find('p').first().css({
                        'text-decoration': 'line-through'
                    })
                } else {
                    selected.find('p').first().css({
                        'text-decoration': 'none'
                    })
                }
            })

            //append the checkbox to the li
            li.append(checkbox)

            //append the li
            todoList.append(li)
        }
    }
})