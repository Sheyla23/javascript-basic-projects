let hex=['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F'];
const colorSpan = document.querySelector('#color');
const button = document.querySelector('button');



let randomNumber = ()=>{
return Math.floor(Math.random()*hex.length); 
}


button.addEventListener('click',()=>{
  hexColor ='#'
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomNumber()]
  }
  colorSpan.textContent = hexColor;
  document.body.style.backgroundColor= hexColor;
})

