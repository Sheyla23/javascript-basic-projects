const toggle = document.querySelector('#toggle');
const cancel = document.querySelector('#cancel');
const sidebar = document.querySelector('.side-bar');

toggle.addEventListener('click',()=>{
    sidebar.classList.toggle('show');
})

cancel.addEventListener('click',()=>{
    sidebar.classList.toggle('show');
})