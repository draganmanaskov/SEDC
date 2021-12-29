console.log("START")

//selectors
let paragraphs = document.getElementsByTagName('p');
let headersOne = document.getElementsByTagName('h1');
let headersThree = document.getElementsByTagName('h3');

//change text for <p>
paragraphs[0].innerText = 'This is the first paragraph. It is changed!'
paragraphs[1].innerText = 'This is the second paragraph. It is also changed!'

//change text for <h1>
headersOne[0].innerText = 'This is pretty neat!'
headersOne[1].innerText = "That's pretty neat!"

//change text for <h3>
headersThree[0]. innerText = 'Thats all folks!'

console.log("END")