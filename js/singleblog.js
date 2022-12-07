let title= document.querySelector('.content h3')
let content= document.querySelector('.content p')
let image = document.querySelector('.image img')

 
window.addEventListener('DOMContentLoaded',() => {
let url=location.href
let id= url.split('=')[1]
let article= JSON.parse(localStorage.getItem('articles'))
let n= article.find()
})
