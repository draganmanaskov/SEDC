let myButton = document.getElementById('call_api');
let list = document.getElementById('todo')
list.style.listStyle = "none";


myButton.addEventListener('click', ()=> {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => printToDos(data))
    .catch(err => {
        console.log(err)
    });
})


function printToDos(todoList) {
    // clear the ul el for rerendering
    list.innerHTML = "";

    for(let todoItem of todoList) {
        let li = document.createElement("li");
        li.style.fontSize = '0.6em'
        li.style.border = '1px solid black'
        li.style.margin = '5px'

        //title
        let title = document.createElement("p");
        title.innerText = `Title: ${todoItem.title}`
        title.style.margin = "2px";

        //id
        let id = document.createElement("p");
        id.innerText = `ID: ${todoItem.id}`
        id.style.margin = "2px";

        // is it completed
        let completed = document.createElement("p");
        todoItem.completed?completed.innerText = "Completed" : completed.innerText = "Not Completed"
        completed.style.margin = "2px";

        //append to the li elemnt
        li.appendChild(title)
        li.appendChild(id)
        li.appendChild(completed)

        
        // append to the list
        list.appendChild(li);
        }
    }

