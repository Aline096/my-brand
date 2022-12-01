const accessToken = localStorage.getItem('mora')
const isLoggedIn = localStorage.getItem('isLoggedIn')
if(!isLoggedIn && !accessToken){
    window.location.assign('/html/signup.html')
}

    fetch('https://mybrand-api-uwera.herokuapp.com/api/message',{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('mora'))}`,
            Accept: 'application.json',
            'Content-Type': 'application/json'
    }
    })
    .then(response => response.json())
    .then((data) => {
        result = data.payload
        console.log(data.status);
        if (data.status === 200) {
            let tbody= document.querySelector('tbody')
            for(let i=0;i<result.length;i++){
            let d1 = document.createElement("td")
            let d2 = document.createElement("td")
            let d3 = document.createElement("td")
            d1.innerText = result[i].name;
            d2.innerText = result[i].email;
            d3.innerText = result[i].message;

            let  row = document.createElement("tr")
            row.appendChild(d1)
            row.appendChild(d2)
            row.appendChild(d3)
            tbody.appendChild(row)
            }
        } 
    })
    .catch(error => console.error('Error:', error));