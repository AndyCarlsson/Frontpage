function showDate() {
  const d = new Date();

  const dayName = ['Sön', 'Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör'];
  const monthName = [
    'Januari',
    'Februari',
    'Mars',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'Augusti',
    'September',
    'Oktober',
    'November',
    'December',
  ];

  document.getElementById('day').innerHTML = dayName[d.getDay()] + '\xa0';
  document.getElementById('day-date').innerHTML = d.getDate() + '\xa0';
  document.getElementById('month-name').innerHTML = monthName[d.getMonth()];
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
  document.getElementById('hour').innerHTML = hours + ':';
  document.getElementById('minutes').innerHTML = minutes;
  // document.getElementById('seconds').innerHTML = seconds;
}
setInterval(clock, 1000);

function getWeather() {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Gothenburg&units=metric&appid=09b64160c45d82d5322b8d503c8b309d'
  )
    .then((response) => response.json())
    .then((data) => {
      var tempValue = data['main']['temp'];
      var logoId = data['weather'][0]['icon'];

      document.getElementById('degrees').innerHTML =
        Math.round(tempValue) + '°C';
      document.getElementById('weather-icon').src =
        'http://openweathermap.org/img/wn/' + logoId + '@2x.png';
    });
}
getWeather();
