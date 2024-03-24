function user(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>userLoad2(data))
}
function userLoad2(data){
    const uls =document.getElementById('user');
     for (const us of data){
        console.log(us.name)
        const li =document.createElement('li');
        li.innerText=us.name;
        uls.appendChild(li)
    }
    
}

