const daysCard = document.querySelector('#days');
const hoursCard = document.querySelector('#hours');
const minutesCard = document.querySelector('#minutes');
const secondsCard = document.querySelector('#seconds');

let seconds = 1000;
let minutes = 60*seconds;
let hours = minutes*60;
let days = hours*24;
let countdown= new Date('Dec 24 ,2023 00:00:00').getTime();

let interval = setInterval(function(){
  let now = new Date().getTime();
  let distance = countdown - now; 
  if(distance<0){              
    daysCard.innerHTML="00"
    hoursCard.innerHTML="00"
    minutesCard.innerHTML="00"
    secondsCard.innerHTML="00"
  }else{
    let timedays = Math.floor(distance/(days));
    let timehours = Math.floor((distance%days)/(hours));
    let timeminutes = Math.floor((distance%hours)/(minutes));
    let timeseconds = Math.floor((distance%minutes)/(seconds));
    daysCard.innerHTML = timedays;
    hoursCard.innerHTML = timehours;
    minutesCard.innerHTML = timeminutes;
    secondsCard.innerHTML = timeseconds;
  }         
},1000)