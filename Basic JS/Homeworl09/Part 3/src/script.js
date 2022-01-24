$(document).ready(function() {
    let toDosBtn = $('#get-todos');
    let list = $('#todo').css({
        'list-style': 'none'
    });

    //on click send request
    toDosBtn.on('click', ()=> {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            success: (res) => {
                //on success run printToDos functon
                printToDos(res)
            },
            error: (err) => {
                console.log(err)
            }
        })
    })

    function printToDos(todoList) {
        // clear the ul el for rerendering
        list.empty();

        for(let todoItem of todoList) {
            //create a li for every array elemnt
            let li = $('<li></li>').css({
                'font-size': '0.6em',
                'border': '1px solid black',
                'margin': '5px'
            })
            //add p fields 
            li.append(`<p>Title: ${todoItem.title}</p>`)
            li.append(`<p>ID: ${todoItem.id}</p>`)
            //check the status of the todoItem
            todoItem.completed?li.append(`<p>Completed</p>`):li.append(`<p>Not Completed</p>`)
            list.append(li).find('p').css({
                'margin': '2px'
            })
        }
    }
    
})

