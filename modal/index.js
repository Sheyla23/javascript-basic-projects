const button = document.querySelector('button');
const cancel = document.querySelector('#cancel');
const div = document.querySelector('div');

button.addEventListener('click',()=>{
    div.classList.add('show')
})
cancel.addEventListener('click',()=>{
    div.classList.remove('show')
})