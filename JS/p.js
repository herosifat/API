function prac(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
 .then (data => loadPost(data))
}

function loadPost(data){
const postContain =document.getElementById('post-contain');

for(const post of data){
    const divPost =document.createElement('div')
    divPost.classList.add('post')
    divPost.innerHTML =`
    <h5>post - ${post.id} </h5>
    <h3> post title ${post.title}
    `;
    postContain.appendChild(divPost)
    }
}

// for(const pst of post){
//     const postDiv = document.createElement('div');
//     postDiv.classList.add('post')
//     postDiv.innerHTML =`
//     <h4>user -${pst.userId} </h4>
//     <h5> title - ${pst.title}</h5>
//     <p>post-description - ${pst.body}</p>
    
//     `;
//     postContainer.appendChild(postDiv)
 
//  }
//  }