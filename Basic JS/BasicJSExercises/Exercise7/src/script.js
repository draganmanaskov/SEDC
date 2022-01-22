$(document).ready(function() {
 let myForm = $('#form');
 let storyDiv = $('#story');
 let whoInput = $('#who');
 let whatInput = $('#what');
 let whenInput = $('#when');

 function tellStory(who, what, when) {
  storyDiv.empty().append(`<p>${who} ${what} ${when}</p>`)
  whoInput.val("")
  whatInput.val("")
  whenInput.val("")
 }

 myForm.submit(function(e) {
   e.preventDefault();
   tellStory(whoInput.val(), whatInput.val(), whenInput.val())
 })
})

