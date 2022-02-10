let lists = [];


const input = document.querySelector('#text');
const section = document.querySelector('section')
const button = document.querySelector('#submit')
const alertMsg = document.querySelector('.alert')
const clear =document.querySelector('#clear')
const grocery =document.querySelector('.menu')

button.addEventListener('click',()=>{
    let item = input.value;
    
    if(item.length){
        lists.push(item)
        alertMsg.textContent = 'item added to the list'
        clear.textContent ='Clear items'
    } else{ alertMsg.textContent = 'please enter a value'}
    section.innerHTML= lists.map((list)=>{
        return `
            <div>
                <p>${list}</p>
                <span><i id='edit' class="far fa-edit"></i>
                <i id='delete' class="fas fa-trash-alt"></i></span> 
            </div>`
    }).join('');
    console.log(item,lists)
})

grocery.addEventListener('click', (e)=>{
    let id = e.target.id
    console.log(id)
    if(id === 'clear'){
        alertMsg.textContent = 'grocery cleared'
        section.innerHTML = null
        clear.textContent =null
    } else if( id === 'delete'){
        lists.pop()
    } 
})