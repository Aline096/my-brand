let url=location.href
let id= url.split('=')[1]

const apiUrl = `https://mybrand-api-uwera.herokuapp.com/api/articles/${id}`;

const renderArticle = (article) => {
    document.querySelector('.box-container').innerHTML = `
    <div class="image">
        <img src="${article.picture}" alt="">
    </div>              
    <div class="content">
        <h3 >${article.title}</h3>
        <p>${article.description}</p> 
    </div> `

    document.querySelector('#likes').innerHTML = `${article.likes}`
    document.querySelector('#comments').innerHTML = `${article.comments.length}`

    let comments = '';
    for (const comment of article.comments) {
        comments = comments + `<h3>${comment.commentor}</h3><p>${comment.comment}</p>
        <hr>`
    }
    document.querySelector('.comments').innerHTML = comments
}

// fetch(apiUrl, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })
// .then((response) => response.json())
// .then((data) => {
//     if(data.status === 200) {
//         renderArticle(data.payload)
//     } else {
//         throw new Error(data.message)
//     }
// })
// .catch((error) => {
//     console.error('Error:', error.message);
// });


//like 
const likeButton = document.querySelector('#like-btn');
likeButton.addEventListener('click', () =>{

fetch(`https://mybrand-api-uwera.herokuapp.com/api/like/${id}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then((response) => response.json())
.then((data) => {
    console.log(data);
    if(data.message === 'liked') {
        location.reload()
    } else {
        throw new Error(data.message)
    }
})
.catch((error) => {
    console.error('Error:', error.message);
});
})


