const info = document.querySelector('.gift-info h3');
const deadline = document.querySelectorAll('.deadline h2');

let tDate = new Date();
let presentYear=tDate.getFullYear();
let presentMonth=tDate.getMonth();
let presentDate=tDate.getDate();

let futureDate = new Date( presentYear, presentMonth ,presentDate + 10, 11, 30, 0 )

info.innerHTML = ` Giveaway ends on ${futureDate}`;

function deadlineTs(){
    let today = new Date().getTime() ;
    let futureMs = futureDate.getTime();
    let deadlineTime = futureMs - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;
    const oneSec = 1000;
    let days =Math.floor(deadlineTime/oneDay);

    let hours =Math.floor((deadlineTime % oneDay) / oneHour); 
    let mins =Math.floor((deadlineTime % oneHour) / oneMin); 
    let secs =Math.floor((deadlineTime % oneMin) / oneSec); 

    let deadlineValues= [days, hours, mins, secs];

    function format(item) {
        if (item < 10) {
          return (item = `0${item}`);
        }
        return item;
    }

    deadline.forEach((timing,index)=>{
        timing.textContent = format(deadlineValues[index]);
    });

    if (deadlineTime < 0) {
        clearInterval(countdown);
      }
}
let countdown = setInterval(deadlineTs, 1000);


deadlineTs();
