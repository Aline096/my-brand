var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var textRegex= /^[a-zA-Z]+ [a-zA-Z]+$/;
var required=20;
document.querySelector('#contact-form').addEventListener('submit', (event) => {
    event.preventDefault()
    const name = event.target.elements['sender-name'].value;
    const email = event.target.elements['sender-email'].value;
    const message = event.target.elements['message'].value;
    
    if (name.match(textRegex)) {
        document.querySelector(".name_error").textContent = ""
        console.log(name)
        
    } else if(name.length == 0){
        document.querySelector(".name_error").textContent = "Enter your full name"
    } else {
        document.querySelector(".name_error").textContent = "Enter your name"
    }
    
    if (email.match(emailRegex)) {
        document.querySelector(".email_error").textContent = ""
        console.log(email)
        
    } else if(email.length == 0){
        document.querySelector(".email_error").textContent = "Enter your email"
    } else {
        document.querySelector(".email_error").textContent = "Email is Invalid"
    }

    
    if (message.length-required>=0) {
        document.querySelector(".message_error").textContent = ""
        console.log(message)
        
    } else if(message.length == 0){
        document.querySelector(".message_error").textContent = "Enter The message, Minimum 20 characters"
    } else {
        document.querySelector(".message_error").textContent = "Enter the message, Minimum 20 characters ";
    }

})