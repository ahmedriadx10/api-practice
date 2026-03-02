const getCommentsData=()=>{

const url='https://jsonplaceholder.typicode.com/comments'

fetch(url).then(res=>res.json()).then(x=>{
return loadData(x)
}).catch(error=>console.log(error))

}

/**
 * 
 * 
    "postId": 100,
    "id": 498,
    "name": "dolores minus aut libero",
    "email": "Davion@eldora.net",
    "body": "aliquam pariatur suscipit fugiat eos sunt\noptio voluptatem eveniet rerum dignissimos\nquia aut beatae\nmodi consequatur qui rerum sint veritatis deserunt est"
}} comments 
 */


const loadData=(comments)=>{

  const getPostContainer=document.getElementById('comment-container')

// getPostContainer.innerHTML=''





  comments.forEach(x=>{

const {name,email,body:postData}=x


const commentDiv=document.createElement('div')

commentDiv.innerHTML=`
<h2 class="font-bold text-3xl">${name}</h2>
<p class="text-sm italic text-gray-500">${email}</p>
<p class="font-medium text-gray-700 ">${postData}</p>

`
commentDiv.setAttribute('class','border border-gray-200 p-3 rounded-lg shadow-lg')



getPostContainer.appendChild(commentDiv)

  })



}


getCommentsData()


