function Niket(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res =>res.json())
    .then(json => console.log((json)))
}
function sifat(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(recap => recap.json())
    .then(data => console.log(data))
}