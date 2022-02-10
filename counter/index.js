const buttons = document.querySelectorAll('button');
const counter = document.querySelector('h2');


let count = 0;

buttons.forEach((button)=> {
  button.addEventListener('click',e=>{
      if(e.target.textContent === 'DECREASE'){
          count -=1;
      } else if(e.target.textContent === 'INCREASE'){
        count +=1;
      } else{
        count = 0;
      }

    counter.textContent = count;
    if(count < 0) {counter.style.color = 'red'}
    else{counter.style.color = 'green'}
  })
});

