
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const comfirmPassword = document.querySelector("#comfirmPassword");
const form = document.querySelector("#form");


const checkError = (input,message) =>{
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control error';
    let successIcon = parentElement.querySelectorAll("i")[0];
    let errorIcon = parentElement.querySelectorAll("i")[1];
    let small = parentElement.querySelector("small");
    errorIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden';
    small.innerText = message;
}
const checkSuccess = (input) =>{
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control success';
    let successIcon = parentElement.querySelectorAll("i")[0];
    let errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible';
}

const checkEmpty = (elements)=>{
    elements.forEach(element => {
        if(element.value === ""){
            checkError(element, "Input Required");
        }else{
            checkSuccess(element);
        }
    });
}
const checkEmail = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!reg.test(email.value)){
        checkError(email, "Invalid Email");
    }else{
        checkSuccess(email);
    }
}
const checkPass =(input,min,max) => {

    if(input.value.length < min) {
        checkError(input,`password at least ${min} characters required`);
    }else if(input.value.length > max) {
     checkError(input,`password at most ${max} characters required`);
   }else{
    checkSuccess(input);
   }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkEmpty([username,email,password,comfirmPassword]);
    checkEmail(email);
    checkPass(password,6,12);
    checkPass(comfirmPassword,6,12);

});



