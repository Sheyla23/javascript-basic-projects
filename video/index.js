const button = document.querySelector('button');
const myVideo = document.querySelector('.video-container')

button.addEventListener('click',(e)=>{
    let control =e.target.textContent;
    if(control === 'pause'){
        e.target.classList.add('slide');
        e.target.previousElementSibling.classList.remove('slide');
    } else{
        e.target.classList.add('slide');
        e.target.nextElementSibling.classList.remove('slide');   
    }
      
    if(control === 'pause'){
      myVideo.pause();
    } else{ myVideo.play();}
})