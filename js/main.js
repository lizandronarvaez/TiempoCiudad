// ELEMENTOS IDENTIFICADOS DEL DOM
const search_city = document.getElementById('buscar');
const city = document.getElementById('ciudad');
const temperatureAct = document.getElementById('temperatura');
const temperatureMinMax = document.getElementById('temperaturas');
const humidity = document.getElementById('humedad')
const description = document.getElementById('descripcion')
const cities = document.getElementById('ciudades')
const hour = document.getElementById('hora')

// CLAVE APIKEY
const apiKey = '237d6f5dd8ff023845666cb58f2b92bf';
const icon = 'http://openweathermap.org/img/wn/'

// FUNCION PARA RELIZAR LA LLAMADA A FECHT
const datesWeather = () => {
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&lang=es`;
    if (!city.value) alert('Introduce una ciudad');
    // PETICION FETCH
    fetch(weather)
        .then(response => { return response.json() })
        .then(dates => {
            //DATAS ACCESO ALA API
            const nameCity = dates.name
            const tempActual = (dates.main.temp - 273.15).toFixed();
            const tempMin = (dates.main.temp_min - 273.15).toFixed();
            const tempMax = (dates.main.temp_max - 273.15).toFixed();
            const _humidity = dates.main.humidity;
            const iconUrl = `${icon}${dates.weather[0].icon}.png`;
            const _description = `<img src='${iconUrl}'/>` + dates.weather[0].description;
            // RENDERIZACIONES AL DOM
            description.innerHTML = `${_description}`;
            cities.textContent = `${nameCity}`;
            temperatureAct.textContent = `${tempActual}ºC`;
            temperatureMinMax.innerHTML = `Temperatura Min: ${tempMin}ºC </br>
                                            Temperatura Max: ${tempMax}ºC`;
            humidity.textContent = `Humedad: ${_humidity}%`;
            // 
            setInterval(()=>{
                const dateTime = new Date()
            hour.innerHTML=dateTime.toLocaleTimeString()
            },1000)
        })
}
// CALLBACK AL EVENTO Y EJECUCION
search_city.addEventListener('click', datesWeather)
