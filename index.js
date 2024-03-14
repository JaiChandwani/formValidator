function formValidator() {
    let nameValue = document.querySelector(".name").value
    let nameError = document.getElementsByClassName("error")[0]
    let nameParameters = /[0-9]/
    if (nameValue.length < 5 && nameValue.length > 0) {
        nameError.innerHTML = "* Name is too short *"
    }
    else if(nameValue.length==0){
        nameError.innerHTML = "*Enter Name*"
    }
    else if(nameValue.match(nameParameters)){
        nameError.innerHTML = "*Name can not be in number*"
    }
    else {
        nameError.innerHTML = " "
    }

    let email = document.querySelector(".email").value
    let emailError = document.getElementsByClassName("error")[1]
    let emailParameters = /[a-zA-Z0-9.!@#$%^&*]/
    let attherateParameter = /[@]/
    if (email.match(emailParameters)) {
        if (email.match(attherateParameter)) {
            emailError.innerHTML = ""
        }
        else {
            emailError.innerHTML = "*Invalid Email*"
        }
    }
    else if(email.length==0){
        emailError.innerHTML = "*Enter Email*"
    }
    else {
        emailError.innerHTML = "*Invalid Email*"
    }

    let contact = document.querySelector(".contact").value
    let contactError = document.getElementsByClassName("error")[2]
    let contactValue = /[A-Za-z]/
    if (contact.length < 10 &&contact.length> 10) {
        contactError.innerHTML = "*Invalid Contact*"
    }
    else if(contact.length==0){
        contactError.innerHTML = "*Enter Contact*"
    }
    else if(contact.match(contactValue)){
        contactError.innerHTML = "*Invalid Contact*"
    }
    else if (contact.length > 10) {
        contactError.innerHTML = "*Invalid Contact*"
    }
    else if (contact == "1234567890" || contact == "0123456789") {
        contactError.innerHTML = "*Invalid Contact*"
    }
    else {
        contactError.innerHTML = ""
    }

    let password = document.querySelector(".password").value
    let passwordError = document.getElementsByClassName("error")[3]
    if (password.length > 8) {
        passwordError.innerHTML = "*Password does not meet the required parameters*"
    }
    else if (password == nameValue) {
        passwordError.innerHTML = "*Password can not be same as the username*"
    }
    else if (password == "password") {
        passwordError.innerHTML = `*Password can not 'password'*`
    }
    else{
        password.innerHTML = ""
    }
    return false
}
