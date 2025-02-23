function showSidebar()
{
    const sidebar=document.querySelector('.slidebar')
    sidebar.style.display='flex'
}
function hidesidebar(){
     const sidebar=document.querySelector('.slidebar')
    sidebar.style.display='none'

}

// sign in:-
function openModal()
{   
  const show1=document.querySelector('.main-form-2')
    const show=document.querySelector('.main-form')
    show1.style.display='none'
    show.style.display='flex'
    
}
function closeModal(){
     const close=document.querySelector('.main-form')
    close.style.display='none'

}

// sigin2

function openModal_2()
{
    const show=document.querySelector('.main-form-2')
    show.style.display='flex'
}
function closeModal_2(){
     const close=document.querySelector('.main-form-2')
    close.style.display='none'

}

// signin-2
let fullname = document.getElementById("fname");
let name_err = document.getElementById("error1");

function fullnameCheck() {
    let data = fullname.value;
    if (data.length < 1) {
      name_err.innerHTML = "***All Field Required***";
    }
    else if (data.length < 4)
      name_err.innerHTML = "***Minimum 4 Character Required***";
    else
      name_err.innerHTML = "";
  
  }
fname.addEventListener("input", fullnameCheck);

// name-check2

let fullname1 = document.getElementById("fname1");
let name_err1 = document.getElementById("error01");

function fullnameCheck1() {
    let data = fullname1.value;
    if (data.length < 1) {
      name_err1.innerHTML = "***All Field Required***";
    }
    else if (data.length < 4)
      name_err1.innerHTML = "***Minimum 4 Character Required***";
    else
      name_err1.innerHTML = "";
  
  }
fname1.addEventListener("input", fullnameCheck1);


// email check
let email=document.getElementById("email");
let email_err = document.getElementById("error2");


function emailCheck() {
  let data = email.value.trim();
  
  if (!/^(?=.*[0-9])(?=.*[\W_]).{6,}$/.test(data)) {
    email_err.innerHTML = "***Email must contain at least one special character, one number, and be at least 6 characters long***";
    // email.style.borderColor = "red";
  } else {
    email_err.innerHTML = "";
    // email.style.borderColor = "black";
  }
}

email.addEventListener("input", emailCheck);

// emailcheck2

let email1=document.getElementById("email1");
let email_err1 = document.getElementById("error02");


function emailCheck1() {
  let data = email1.value.trim();
  
  if (!/^(?=.*[0-9])(?=.*[\W_]).{6,}$/.test(data)) {
    email_err1.innerHTML = "***Email must contain at least one special character, one number, and be at least 6 characters long***";
    // email.style.borderColor = "red";
  } else {
    email_err1.innerHTML = "";
    // email.style.borderColor = "black";
  }
}
email1.addEventListener("input", emailCheck1);


// contact check
let phone= document.getElementById("phone");
let contact_err = document.getElementById("error3");

function contactCheck() {
  let data = phone.value;
  if (isNaN(data))
    contact_err.innerHTML = "***Please enter a valid contact number***";

  else if (data.length < 10) {
    contact_err.innerHTML = "***Please enter at least  10 digit***";
  
  } else {
    contact_err.innerHTML = "";
  
  }

}
phone.addEventListener("input", contactCheck);

// contact-check2
let phone1= document.getElementById("phone1");
let contact_err1 = document.getElementById("error03");

function contactCheck1() {
  let data = phone1.value;
  if (isNaN(data))
    contact_err1.innerHTML = "***Please enter a valid contact number***";

  else if (data.length < 10) {
    contact_err1.innerHTML = "***Please enter at least  10 digit***";
  
  } else {
    contact_err1.innerHTML = "";
  
  }

}
phone1.addEventListener("input", contactCheck1);



// pass
let pass = document.getElementById("password");
let pass_err = document.getElementById("error4");
function passcheck() {

  let data = pass.value;

  if (!/^(?=.*[0-9])(?=.*[\W_]).{6,}$/.test(data)) {
    pass_err.innerHTML = "***Password must contain at least one special character, one number, and be at least 6 characters long***";
    // email.style.borderColor = "red";
  } else {
    pass_err.innerHTML = "";
    // email.style.borderColor = "black";
  }
}
password.addEventListener("input", passcheck);

// pass2
let pass1 = document.getElementById("password1");
let pass_err1 = document.getElementById("error04");
function passcheck1() {

  let data = pass1.value;

  if (!/^(?=.*[0-9])(?=.*[\W_]).{6,}$/.test(data)) {
    pass_err1.innerHTML = "***Password must contain at least one special character, one number, and be at least 6 characters long***";
    // email.style.borderColor = "red";
  } else {
    pass_err1.innerHTML = "";
    // email.style.borderColor = "black";
  }
}
password1.addEventListener("input", passcheck1);


// All field required
function data()
{
  let fullname_01= document.getElementById("fname").value;
  let con_01 = document.getElementById("phone").value;
  let pass_01 = document.getElementById("password").value;
  let email_01=document.getElementById("email").value;

  if((fullname_01=="")||(email_01=="")||(con_01=="")||(pass_01==""))
  {
    alert("All field Required");
    return false;
  }
  else
  {
    alert('Data submitted successfully!');
    return true;
  }


}

function data1()
{
  let fullname_01= document.getElementById("fname1").value;
  let con_01 = document.getElementById("phone1").value;
  let pass_01 = document.getElementById("password1").value;
  let email_01=document.getElementById("email1").value;

  if((fullname_01=="")||(email_01=="")||(con_01=="")||(pass_01==""))
  {
    alert("All field Required");
    return false;
  }
  else
  {
    alert('Data submitted successfully!');
    return true;
  }


}

// show popup
