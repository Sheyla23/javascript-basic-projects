let simpleColors=['red','#fff3b0','coral','rgb(220, 150, 20)','#f9c74f'];
const colorSpan = document.querySelector('#color');
const button = document.querySelector('button');



button.addEventListener('click',()=>{
    console.log('you clicked me');
    let randomNumber = Math.floor(Math.random()*simpleColors.length)
    colorSpan.textContent=simpleColors[randomNumber]
    document.body.style.backgroundColor=simpleColors[randomNumber]
})