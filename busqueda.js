const apiKey = "7b15c87e66d2f4f17e2265957ac167b5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const city = "puebla";

async function checkWeather() {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    let data = await response.json();

    console.log(data.main.temp);

    document.querySelector('.temp').innerHTML = data.main.temp.toFixed(0)  + '°c';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
    document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
}

checkWeather();
