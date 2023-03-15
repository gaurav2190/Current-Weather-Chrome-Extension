async function fetchData() {
    const API_KEY = '';
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
    var lat = '';
    var long = '';
    navigator.geolocation.getCurrentPosition(async function(position){
        const res = await fetch (API_URL+'lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&units=metric&appid='+API_KEY);
        const weather = await res.json();
        console.log(weather);
        document.getElementById("temperature").innerHTML = weather['main'].temp; 
        document.getElementById("humidity").innerHTML = weather['main'].humidity; 
    })
}

fetchData();