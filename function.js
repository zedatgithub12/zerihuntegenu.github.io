// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


modal.onclick = function(){
    modal.style.display="none";
}
//subscibe button
var subcribe = document.getElementById('subscribebtn');
//subcribe modal
var subscribe_modal =document.getElementById("subscription_modal");
//onclick btn event
subcribe.onclick = function(){
    subscribe_modal.style.display="block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    subscribe_modal.style.display = "none";
  } 

  // for drop message section on form submit the following code validate user input

  var first_name = document.getElementById('fname');
  var middle_name = document.getElementById('mname');
  var last_name = document.getElementById('lname');
 // email attributes
  var email = document.getElementById('e_mail');
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;
  var error = document.getElementById('prompt');
 
  var numbers= /^[0-9@#$%^&*()]+$/;
var letters = /^[A-Za-z]+$/;
  function validate(){
      if(first_name.value=="" || first_name==null){
           first_name.style.border = "1px solid #f37272";
           error.setAttribute("class","text-danger");
           error.innerHTML = "Please Enter first name";
           return false;
      }
      else if(first_name.value.length<3){
        first_name.style.border = "1px solid #f37272";
        error.setAttribute("class","text-danger");
        error.innerHTML = "name can't be less than 3 letters";
     return false;
    }
    else if(first_name.value.length>30){
        first_name.style.border = "1px solid #f37272";
        error.setAttribute("class","text-danger");
        error.innerHTML = "name can't be more than 30 letters";
     return false;
    }
    else if(first_name.value.match(numbers)){
        first_name.style.border = "1px solid #f37272";
        error.setAttribute("class","text-danger");
        error.innerHTML = "name can be only letters";
     return false;
    }
    else {
        first_name.style.border = "1px solid teal";
        middle_name.focus();
    
    }
// validation for middle name
if(middle_name.value=="" || middle_name==null){
    middle_name.style.border = "1px solid #f37272";
    error.setAttribute("class","text-danger");
    error.innerHTML = "Please Enter Middle name";
    return false;
}
else if(middle_name.value.length<3){
 middle_name.style.border = "1px solid #f37272";
 error.setAttribute("class","text-danger");
 error.innerHTML = "name can't be less than 3 letters";
return false;
}
else if(middle_name.value.length>30){
 middle_name.style.border = "1px solid #f37272";
 error.setAttribute("class","text-danger");
 error.innerHTML = "name can't be more than 30 letters";
return false;
}
else if(middle_name.value.match(numbers)){
 middle_name.style.border = "1px solid #f37272";
 error.setAttribute("class","text-danger");
 error.innerHTML = "name can be only letters";
return false;
}
else {
    middle_name.style.border = "1px solid teal";
    last_name.focus();

}
// last name validation
if(last_name.value=="" || last_name==null){
    last_name.style.border = "1px solid #f37272";
    error.setAttribute("class","text-danger");
    error.innerHTML = "Please Enter Last name";
    return false;
}
else if(last_name.value.length<3){
 last_name.style.border = "1px solid #f37272";
 error.setAttribute("class","text-danger");
 error.innerHTML = "name can't be less than 3 letters";
return false;
}
else if(last_name.value.length>30){
 last_name.style.border = "1px solid #f37272";
 error.setAttribute("class","text-danger");
 error.innerHTML = "name can't be more than 30 letters";
return false;
}
else if(last_name.value.match(numbers)){
 last_name.style.border = "1px solid #f37272";
 error.setAttribute("class","text-danger");
 error.innerHTML = "name can be only letters";
return false;
}
else {
    last_name.style.border = "1px solid teal";
    email.focus();

}
// email address validation
if(email==null || email== ""){
    email.style.border = "1px solid #f37272";
    error.setAttribute("class","text-danger");
    error.innerHTML = "enter email address";
   return false;
}
else {
    email.style.border = "1px solid teal";
    phone.focus();

}
  }
