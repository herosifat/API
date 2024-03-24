function SPA(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => usersLoad(json))
}

function usersLoad(data){
    const ul =document.getElementById('user-list')
   for (const use of data){
    console.log(use.id)
    const li =document.createElement('li')
    li.innerText =use.id;
    ul.appendChild(li)


   }
}