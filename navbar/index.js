const toggle = document.querySelector('#toggle')
const list = document.querySelector('.list')

toggle.addEventListener('click',()=>{
    list.classList.toggle('show')
})