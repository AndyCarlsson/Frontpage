

function showDate(){
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
  const d = new Date();
  document.getElementById("month").innerHTML = monthNames[d.getMonth()] + " ";
  document.getElementById("day").innerHTML = d.getDate();
}
showDate();

function clock(){
  var fullTime = new Date();
  var hours = fullTime.getHours();
  var minutes = fullTime.getMinutes();
  var seconds = fullTime.getSeconds();

  if (hours < 10){
    hours = "0" + hours;
  }
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  if(seconds < 10){
    seconds = "0" + seconds
  }
  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
};
setInterval(clock, 1000)




