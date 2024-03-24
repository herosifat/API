function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>display(data))
}
function display(post){
    const postContainer = document.getElementById('post-container');

for(const pst of post){
   const postDiv = document.createElement('div');
   postDiv.classList.add('post')
   postDiv.innerHTML =`
   <h4>user -${pst.userId} </h4>
   <h5> title - ${pst.title}</h5>
   <p>post-description - ${pst.body}</p>
   
   `;
   postContainer.appendChild(postDiv)

}
}


loadPost();