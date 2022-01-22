$(document).ready(function() {
 let myForm = $('#form');
 let firstName = $('#firstName');
 let myTable = $("#myTable").append(`<tr><td>Fist Name</td><td>Last Name</td><td>Phone Number</td><td>Delete</td><td>Edit</td></tr>`).css({
  'border': '1px solid black'
})
 let lastName = $('#lastName');
 let phoneNumber = $('#phoneNumber');

 let globalIndex = 'save'
 let state = 'save'

 let contacts = []
 function Contact (fName, lName, pNumber) {
    this.firstName = fName,
    this.lastName = lName,
    this.phoneNumber = pNumber
 }

 function renderPhoneBook() {
  myTable.empty()
  myTable.append(`<tr><td>Fist Name</td><td>Last Name</td><td>Phone Number</td><td>Delete</td><td>Edit</td></tr>`).css({
    'border': '1px solid black'
  })
  for(let index in contacts) {
    myTable.append(`<tr>
      <td>${contacts[index].firstName}</td>
      <td>${contacts[index].lastName}</td>
      <td>${contacts[index].phoneNumber}</td>
      <td><button class="delete" id="${index}" >Delete</button></td>
      <td><button class="edit" id="${index}" >Edit</button></td>
    </tr>`);
  }
  $(".delete").click(function(e) {
    contacts.splice(e.target.id, 1)
    globalIndex = 'save'
    renderPhoneBook()
  })

  $(".edit").click(function(e) {
    $(".cancel").remove()
    myForm.after(`<button class="cancel">Cancel</button>`)

    $(".cancel").click(function(e) {
      renderPhoneBook()
      $(".cancel").remove()
      globalIndex = 'save'
    })

    if(globalIndex != 'save') {
      $( `#myTable tr:eq(${globalIndex + 1})`).css("background-color", "")
    }

    let index = +e.target.id
     firstName.val(contacts[index].firstName),
     lastName.val(contacts[index].lastName),
     phoneNumber.val(contacts[index].phoneNumber)

     console.log(index + 1)
     $( `#myTable tr:eq(${+index + 1})`).css('background-color', 'lightgreen')
     globalIndex = index
  })

  firstName.val("")
  lastName.val("")
  phoneNumber.val("")
  myTable.find('td').css({
    'border': '1px solid black'
  })
 }

 function phoneBook(fName, lName, pNumber) {
   if(globalIndex == 'save') {
    contacts.push(new Contact(fName, lName, pNumber))
    renderPhoneBook()
   }
   else{
    contacts[globalIndex].firstName = fName
    contacts[globalIndex].lastName = lName
    contacts[globalIndex].phoneNumber = pNumber
    renderPhoneBook()
    globalIndex = 'save'
   }

 }

 myForm.submit(function(e) {
   e.preventDefault();

   phoneBook(firstName.val(), lastName.val(), phoneNumber.val())
 })
})

