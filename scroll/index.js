const menu = document.querySelector('.toggle');
const cancel = document.querySelector('.close');
const lists = document.querySelector('ul');
const nav= document.querySelector('nav');
const BackToTop= document.querySelector('.top');
const bgImage= document.querySelector('.bg-image');
const ulLists = document.querySelectorAll('ul>li');


menu.addEventListener('click',()=>{
    lists.classList.add('show');
})

cancel.addEventListener('click',()=>{
    lists.classList.remove('show');
})

ulLists.forEach((list)=>{
    list.addEventListener('click',(e)=>{
        e.preventDefault()
        lists.classList.remove('show');
        // active link
        ulLists.forEach((link)=>{
            link.classList.remove('active');
        })
        list.classList.add('active');
        // scroll position
        let id = (e.target.getAttribute("href"))
        const element = document.querySelector(`${id}`);
        let position = element.offsetTop;
        let navHeight = nav.getBoundingClientRect().height
        window.scrollTo({
            top: position - navHeight,
            left:0   
        });
    })
})


window.addEventListener('scroll',()=>{
    let navHeight = nav.getBoundingClientRect().height
    let bgHeight = bgImage.getBoundingClientRect().height
    let windowHeight = scrollY

    if(windowHeight > bgHeight){
        BackToTop.classList.add('display')
    } else{
        BackToTop.classList.remove('display')
    }
    if (windowHeight > navHeight){
        nav.classList.add('nav');
    } else{nav.classList.remove('nav');} 
})

