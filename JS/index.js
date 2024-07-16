var searchInput = document.getElementById('searchInput');
var weatherData
let date = new Date()
async function getData(key) {
    var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=875e272397d64fbaa3144723240105&q=${key}&days=3`)
    var finaldata = await response.json();
    return finaldata
}
async function startapp(kay) {
    weatherData = await getData(kay);
    todayData();
    tommorwData()
    afterTomorrow()
}

function todayData() {
    let date = new Date(weatherData.location.localtime)
    document.getElementById('day').innerHTML = date.toLocaleDateString('en-US', { weekday: 'long' });
    document.getElementById('Month').innerHTML = date.toLocaleDateString('en-US', { month: 'short' });
    document.getElementById('date').innerHTML = date.toLocaleDateString('en-US', { day: '2-digit' });
    document.getElementById('city').innerHTML = weatherData.location.name;
    document.getElementById('degree').innerHTML = weatherData.current.temp_c + ' c';
    document.getElementById('todayImg').setAttribute('src', 'https:' + weatherData.current.condition.icon);
    document.getElementById('weatherCondition').innerHTML = weatherData.current.condition.text;
    document.getElementById('humidity').innerHTML = weatherData.current.wind_mph + '%';
    document.getElementById('winds').innerHTML = weatherData.current.wind_kph + 'Km/h';
    document.getElementById('weatherTrend').innerHTML = weatherData.current.wind_dir + '';
}

function tommorwData() {
    let date = new Date(weatherData.forecast.forecastday[1].date)
    document.getElementById('tommorowday').innerHTML = date.toLocaleDateString('en-US', { weekday: 'long' });
    document.getElementById('maxTemperature').innerHTML = weatherData.forecast.forecastday[1].day.maxtemp_c + ' c';
    document.getElementById('minTemperature').innerHTML = weatherData.forecast.forecastday[1].day.maxtemp_f + ' c';
    document.getElementById('tomImg').setAttribute('src', 'https:' + weatherData.forecast.forecastday[1].day.condition.icon);
    document.getElementById('weatherCondition').innerHTML = weatherData.forecast.forecastday[1].day.condition.text;
}
function afterTomorrow() {
    let date = new Date(weatherData.forecast.forecastday[2].date)
    document.getElementById('Aftertomorrowday').innerHTML = date.toLocaleDateString('en-US', { weekday: 'long' });
    document.getElementById('AftertomorrowmaxTemperature').innerHTML = weatherData.forecast.forecastday[2].day.maxtemp_c + ' c';
    document.getElementById('AftertomorrowminTemperature').innerHTML = weatherData.forecast.forecastday[2].day.maxtemp_f + ' c';
    document.getElementById('AftertomorrowweatherCondition').innerHTML = weatherData.forecast.forecastday[2].day.condition.text;
    document.getElementById('afterimage').setAttribute('src', 'https:' + weatherData.forecast.forecastday[2].day.condition.icon);

}
searchInput.addEventListener('keyup', function () {
    startapp(searchInput.value);
})