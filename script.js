const alertBox =document.getElementById("alert")
const formElement=document.getElementById("myForm")

formElement.addEventListener('submit',function(event){
    const isValid =
        validationEmpty() &&
        vaildPass() &&
        validEmail()&&
        confirmPassword();

    if (!isValid) {
        event.preventDefault(); 
    }
    

})

function showAlert(message){
    alertBox.textContent=message;
    alertBox.classList.remove("hidden")
    setTimeout(()=>{
        alertBox.classList.add("hidden")
    },3000)
}

function validEmail(){
    let emailInput=document.getElementById("email")
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailPattern.test(emailInput.value)){
        showAlert("Please enter a valid email address.")
        emailInput.style.borderBottom="red solid 2px"
        return false
    }
    else{
        emailInput.style.borderBottom="white solid 2px"
        return true
    }
}


function validationEmpty(){
    const firstEl = document.getElementById("first-name");
    const lastEl = document.getElementById("last-name");
    const emailEl = document.getElementById("email");

    if ((firstEl && firstEl.value.trim() === "") || 
        (lastEl && lastEl.value.trim() === "") ||
        (emailEl && emailEl.value.trim() === "")) {
        showAlert("Field required");
        return false
    }
    return true
}

function vaildPass(){
    let pass=document.getElementById("input-password").value 
if(pass.length<10){
        console.log("error")
        document.getElementById("input-password").style.borderBottom="red solid 2px"
        showAlert("Invalid password it must be more than 10 numbers or characters")
        return false
    }
    else{
        document.getElementById("input-password").style.borderBottom="white solid 2px"
        return true
    }
}

function confirmPassword(){
let pass=document.getElementById("input-password").value 
let confrimPass =document.getElementById("confirm-password").value
    if(pass!=confrimPass){
        document.getElementById("input-password").style.borderBottom="red solid 2px"
        document.getElementById("confirm-password").style.borderBottom="red solid 2px"  
        showAlert("The password doesnot match")
        return false
    }
    else{
        document.getElementById("input-password").style.borderBottom="white solid 2px"
        document.getElementById("confirm-password").style.borderBottom="white solid 2px"
        return true
    }
}
