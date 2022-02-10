const articles = document.querySelectorAll('article')

articles.forEach((article)=>{
    const button = article.querySelector('button');
    const text = article.querySelector('p')
    console.log(button,text)
    button.addEventListener('click',()=>{
        text.classList.toggle('show')
    })
    
})