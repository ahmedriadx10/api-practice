

const loadData=(getData)=>{

  const getUsersCardContainer=document.getElementById('users-card-container')
  // getUsersCardContainer.innerHTML=''



  /**
   {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
            "lat": "24.6463",
            "lng": "-168.8889"
        }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
    }
}
   */
  getData.forEach(x=>{
console.log(x)
    const {name,email,address:{street,city,zipcode},phone,website,company:{name:companyName,catchPhrase,bs}}=x

const userCard=document.createElement('div')

userCard.innerHTML=`

 <h2>Name: ${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Website: ${website}</p>
        <fieldset class="border p-2 border-gray-200">
          <legend>Adress</legend>

          <p>Street: ${street}</p>
          <p>City: ${city}</p>
          <p>Zipcode: ${zipcode}</p>
        </fieldset>
        <fieldset class="border border-gray-200 p-2">
          <legend>Copany</legend>
          <p>Name: ${companyName}</p>
          <p>${catchPhrase}</p>
          <p>${bs}</p>
        </fieldset>

`

userCard.classList.add('user-card')


getUsersCardContainer.appendChild(userCard)

  })


}


const getUserData=()=>{

  const url='https://jsonplaceholder.typicode.com/users'
  fetch(url).then(response=>response.json()).then(data=>loadData(data))

}

getUserData()

