
function clock(){

  var fullDate = new Date();
  var hours = fullDate.getHours();
  var minutes = fullDate.getMinutes();

  if (hours < 10){
    hours = "0" + hours;
  }
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minutes').innerHTML = ":" + minutes;
}

setInterval(clock, 1000);
