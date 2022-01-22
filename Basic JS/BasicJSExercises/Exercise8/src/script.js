$(document).ready(function() {
 let myForm = $('#form');
 let firstName = $('#firstName');
 let myTable = $("#myTable")
 let lastName = $('#lastName');
 let phoneNumber = $('#phoneNumber');

 let contacts = []
 function Contact (fName, lName, pNumber) {
    this.firstName = fName,
    this.lastName = lName,
    this.phoneNumber = pNumber
 }

 function renderPhoneBook() {
  myTable.empty()
  myTable.append(`<tr><td>Fist Name</td><td>Last Name</td><td>Phone Number</td><td>Delete</td><td>Edit</td></tr>`);
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
    renderPhoneBook()
  })

  $(".edit").click(function(e) {
    let index = e.target.id
     firstName.val(contacts[index].firstName),
     lastName.val(contacts[index].lastName),
     phoneNumber.val(contacts[index].phoneNumber)
 
      $('#sbt').val(`${index}`)
  })
 }

 function phoneBook(fName, lName, pNumber) {
   if($('#sbt').val() == 'save') {
    contacts.push(new Contact(fName, lName, pNumber))
    renderPhoneBook()
    firstName.val("")
    lastName.val("")
    phoneNumber.val("")
   }
   else{
     let index = $('#sbt').val()
    contacts[index].firstName = fName
    contacts[index].lastName = lName
    contacts[index].phoneNumber = pNumber
    renderPhoneBook()
    firstName.val("")
    lastName.val("")
    phoneNumber.val("")
    $('#sbt').val('save')
   }

 }

 myForm.submit(function(e) {
   e.preventDefault();

   phoneBook(firstName.val(), lastName.val(), phoneNumber.val())
 })
})

