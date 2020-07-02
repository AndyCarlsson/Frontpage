function showDate() {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dec',
  ];
  const d = new Date();
  document.getElementById('month').innerHTML = monthNames[d.getMonth()] + ' ';
  document.getElementById('day').innerHTML = d.getDate();
}
showDate();

function clock() {
  var fullTime = new Date();
  var hours = fullTime.getHours();
  var minutes = fullTime.getMinutes();
  var seconds = fullTime.getSeconds();

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
}
setInterval(clock, 1000);

function getWeather() {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Gothenburg&units=metric&appid=09b64160c45d82d5322b8d503c8b309d'
  )
    .then((response) => response.json())
    .then((data) => {
      var tempValue = data['main']['temp'];

      document.getElementById('degrees').innerHTML = tempValue;
      document.getElementById('weather-icon').src =
        'http://openweathermap.org/img/wn/10d@2x.png';
    });
}
getWeather();
