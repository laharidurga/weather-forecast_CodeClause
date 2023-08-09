const weatherInfo = document.querySelector('.weather-info');

async function getWeatherData() {
    const apiKey = '99d765df0e0b7bf7a870d3b442472a3b'; // Replace with your actual OpenWeatherMap API key
    const city = 'guntur'; // Replace with the desired city name
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;

        weatherInfo.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Weather: ${weatherDescription}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = '<p>Error fetching weather data</p>';
    }
}

getWeatherData();
