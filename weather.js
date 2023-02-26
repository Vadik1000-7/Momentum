const city = document.querySelector('.city');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=e914fe01a1d7a7fe9b6bb3646a0878f8&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    console.log(url);

    if(res.ok){
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `Wind speed: ${data.wind.speed}m/s`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
    }
    // Функция для сохранения данных введеные пользователем
function setLocalStorage() {
    let city = url;
    localStorage.setItem('city', city.value);
    console.lpg(weather)
}
window.addEventListener('beforeunload', setLocalStorage)

// Функция для вывода сохраненных данных пользователя на страницу
function getLocalStorage() {
    let city = url;
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
}
window.addEventListener('load', getLocalStorage)
}
getWeather()

city.addEventListener('keypress', setCity);
function setCity(event) {
    if (event.code === 'Enter') {
        getWeather();
        city.blur();
    }
}

document.addEventListener('DOMContentLoaded', getWeather);


// Функция для сохранения данных введеные пользователем
function setLocalStorage() {
    let city = document.querySelector('.weather');
    localStorage.setItem('city', city.value);
    console.lpg(weather)
}
window.addEventListener('beforeunload', setLocalStorage)

// Функция для вывода сохраненных данных пользователя на страницу
function getLocalStorage() {
    let city = document.querySelector('.city');
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
}
window.addEventListener('load', getLocalStorage)





