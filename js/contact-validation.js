const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const emailRegex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const nameRegex= /^[a-zA-Z]+ [a-zA-Z]+$/;
const required=10;
let isFormValidated =false

document.querySelector('#contact-form').addEventListener('submit', (event) => {
    event.preventDefault() 

    let name= document.getElementById('name');
    let email= document.getElementById('email');
    let message= document.getElementById('message');

    name.addEventListener('input', () =>{
        validatename();
    })
    email.addEventListener('input', () =>{
        validateemail();
    })
    message.addEventListener('input', () =>{
        validatemessage();
    })
    validate();

    const url='https://mybrand-api-uwera.herokuapp.com/api/message/'
    const query={
        name: name.value ,
        email: email.value,
        message: message.value
    };
       
    if(name.value.match(nameRegex)&& email.value.match(emailRegex1)&& message.value.length-required>0 ){
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.status);
            if(data.status === 200) {
                location.reload()
                alert('Query Sent Successfully')
            } else {
                throw new Error(data.message)
            }
        })
        .catch(error => console.error(error));
        document.getElementById('name').value = "";
        document.getElementById('email').value ="";
        document.getElementById('message').value ="";
    }
    
    })


    function validatename(){
        const name= document.getElementById('name').value;
        
            if (name.match(nameRegex)) {
                document.querySelector(".name_error").textContent = ""
            } else if(name.length == 0){
                document.querySelector(".name_error").textContent = "Enter your full name"
            } else {
                document.querySelector(".name_error").textContent = "Enter your name"
            }
        }

        function validateemail(){
            const email= document.getElementById('email').value;
           
              if (email.match(emailRegex1)) {
                    document.querySelector(".email_error").textContent = ""
                } else if(email.length == 0){
                    document.querySelector(".email_error").textContent = "Enter your email"
                } else {
                    document.querySelector(".email_error").textContent = "Email is Invalid"
                } 
            }


            function validatemessage(){
                const message= document.getElementById('message').value;
                     
                  if (message.length-required>0) {
                        document.querySelector(".message_error").textContent = ""   
                    } else if(message.length == 0){
                        document.querySelector(".message_error").textContent = "Enter The message, Minimum 10 characters"
                    } else {
                        document.querySelector(".message_error").textContent = "Enter the message, Minimum 10 characters ";
                    }
                }
    
    function validate(){
    const name= document.getElementById('name').value;
    const email= document.getElementById('email').value;
    const message= document.getElementById('message').value;
        if (name.match(nameRegex)) {
            document.querySelector(".name_error").textContent = ""
        } else if(name.length == 0){
            document.querySelector(".name_error").textContent = "Enter your full name"
        } else {
            document.querySelector(".name_error").textContent = "Enter your name"
        }
        
      if (email.match(emailRegex1)) {
            document.querySelector(".email_error").textContent = ""
        } else if(email.length == 0){
            document.querySelector(".email_error").textContent = "Enter your email"
        } else {
            document.querySelector(".email_error").textContent = "Email is Invalid"
        }   
      if (message.length-required>0) {
            document.querySelector(".message_error").textContent = ""  
        } else if(message.length == 0){
            document.querySelector(".message_error").textContent = "Enter The message, Minimum 10 characters"
        } else {
            document.querySelector(".message_error").textContent = "Enter the message, Minimum 10 characters ";
        }
    }



