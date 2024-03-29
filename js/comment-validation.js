const nameRegex= /^[a-zA-Z]+ [a-zA-Z]+$/;
const required= 10;


document.querySelector('#comment-form').addEventListener('submit', (event) => {
    event.preventDefault() 
    const user1= document.getElementById('user')
    const comment1= document.getElementById('comment')

    user1.addEventListener('input', ()=>{
        validate();
    })
    comment1.addEventListener('input', ()=>{
        validate();
    })
    validate();
    let user= document.getElementById('user').value;
    let comment= document.getElementById('comment').value;
    if(user.match(nameRegex)&& comment.length-required>0 ){

    const commentData={
        commentor:user,
        comment:comment

    }

    fetch(`https://mybrand-api-uwera.herokuapp.com/api/comment/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if(data.message === 'comment added') {
            location.reload()
            alert('Comment Added Successfully')
        } else {
            throw new Error(data.message)
        }
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
    


        user1.value= "";
        comment1.value ="";
        
    }

})

function validate(){
    const user= document.getElementById('user').value;
    if (user.match(nameRegex)) {
        document.querySelector(".name_error").textContent = ""  
    } else if(user.length == 0){
        document.querySelector(".name_error").textContent = "Enter your name"
    } else {
        document.querySelector(".name_error").textContent = "Enter your name ";
    }

    const comment= document.getElementById('comment').value;
    if (comment.length-required>0) {
        document.querySelector(".comment_error").textContent = ""
    } else if(comment.length == 0){
        document.querySelector(".comment_error").textContent = "Enter The comment, Minimum 10 characters"
    } else {
        document.querySelector(".comment_error").textContent = "Enter the comment, Minimum 10 characters ";
    }
}