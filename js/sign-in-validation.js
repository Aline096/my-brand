var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var passwordRegex= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
document.querySelector('#form_login').addEventListener('submit', (event) => {
    event.preventDefault()
    const email = event.target.elements['email'].value;
    const password = event.target.elements['password'].value;
    // if (email.includes('@')) {
        if (email.match(emailRegex)) {
        document.querySelector(".email_error").textContent = ""
        console.log(email)
        
    } else if(email.length == 0){
        document.querySelector(".email_error").textContent = "Enter your email"
    }else{
        document.querySelector(".email_error").textContent = "Email is Invalid"
    }

    
        if (password.match(passwordRegex)) {
        document.querySelector(".password_error").textContent = ""
        console.log(password)
        
    } else if(password.length == 0){
        document.querySelector(".password_error").textContent = "Enter your password, Minimum 8 characters with at least one letter,one digit and one special character "
    } else {
        document.querySelector(".password_error").textContent = " Password is Invalid";
    }

})