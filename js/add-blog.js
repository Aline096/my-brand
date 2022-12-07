CKEDITOR.replace("editor1");
var textRegex= /^[a-zA-Z]+ [a-zA-Z]+$/;
// var textRegex= 20;
var required=100;
if(JSON.parse(localStorage.getItem('articles')) === null){
    localStorage.setItem('articles', JSON.stringify([])) 
}

let imageUrl = ''

document.querySelector('#picture').addEventListener('change', function () {
    const reader = new FileReader()
    reader.readAsDataURL(this.files[0])
    reader.addEventListener('load', () => {
      imageUrl = reader.result
    })
})

document.querySelector('#add-blog').addEventListener('submit', (e) => {
    e.preventDefault()
    const data = {
        id: self.crypto.randomUUID(),
        title: e.target.elements['title'].value,
        description: e.target.elements['description'].value,
        picture: imageUrl,
        // date: getToday(),
        comments: []
    }
    const existingArticle = JSON.parse(localStorage.getItem('articles'))
    existingArticle.push(data)
    localStorage.setItem('articles', JSON.stringify(existingArticle))
    e.target.elements['title'].value = ""
    e.target.elements['description'].value = ""
    e.target.elements['picture'].value = ""

    // const title = event.target.elements['title'].value;
    // const description = event.target.elements['description'].value;
    
    //     if (title.match(textRegex)) {
    //     document.querySelector(".title_error").textContent = ""
    //     console.log(title)
        
    // } else if(title.length == 0){
    //     document.querySelector(".title_error").textContent = "Enter The title"
    // }else{
    //     document.querySelector(".title_error").textContent = "Title is Invalid"
    // }

    //     if (description.length-required>0) {
    //     document.querySelector(".description_error").textContent = ""
    //     console.log(description)
        
    // } else if(description.length==0){
    //     document.querySelector(".description_error").textContent = "Enter your description, Minimum 100 characters "
    // } else {
    //     document.querySelector(".description_error").textContent = " description is Invalid, Minimum 100 characters";
    // }

})
// document.getElementById('add-blog').addEventListener('submit',(event)=>{
//     const title= document.querySelector('.blog-title').value;
//     const description= document.querySelector('#description').value;
//     const query={
//         title: title,
//         description: description,
//     };
//     const oldBlogs = JSON.parse(localStorage.getItem('blogs'))
//     oldBlogs.push(query)
//     localStorage.setItem('blogs', JSON.stringify(oldBlogs))
// })