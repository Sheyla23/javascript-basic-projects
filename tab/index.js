const buttons = document.querySelectorAll('button');
const articles = document.querySelectorAll('.content');

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        const id = e.target.dataset.id;
        buttons.forEach((button)=>{
            button.classList.remove('active');
        })
     button.classList.add('active');
    const article = document.querySelector(`#${id}`);
        articles.forEach((content)=>{
            content.classList.remove('active')
        })
        article.classList.add('active');
    
    })
})