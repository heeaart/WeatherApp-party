<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Weather app
      <a href="https://github.com/heeaart/WeatherApp-party" target="_blank" rel="noopener">GitHub</a> Autor
      <a href="https://github.com/heeaart" target="_blank" rel="noopener">heeaart</a>.
    </h3>
  </div>

  <div class="container">
    <div class="weather-card" id="monday">
      <h1>Poniedziałek</h1>
      <img src="" alt="Ikona pogodowa">
      <p class="location"></p>
      <p class="temperature"></p>
      <p class="description"></p>
      <p class="humidity"></p>
      <p class="wind"></p>
      <p class="pressure"></p>
    </div>
    <div class="weather-card" id="tuesday">
      <h1>Wtorek</h1>
      <img src="" alt="Ikona pogodowa">
      <p class="location"></p>
      <p class="temperature"></p>
      <p class="description"></p>
      <p class="humidity"></p>
      <p class="wind"></p>
      <p class="pressure"></p>
    </div>
    <div class="weather-card" id="wednesday">
      <h1>Środa</h1>
      <img src="" alt="Ikona pogodowa">
      <p class="location"></p>
      <p class="temperature"></p>
      <p class="description"></p>
      <p class="humidity"></p>
      <p class="wind"></p>
      <p class="pressure"></p>
    </div>
    <div class="weather-card" id="thursday">
      <h1>Czwartek</h1>
      <img src="" alt="Ikona pogodowa">
      <p class="location"></p>
      <p class="temperature"></p>
      <p class="description"></p>
      <p class="humidity"></p>
      <p class="wind"></p>
      <p class="pressure"></p>
    </div>
    <div class="weather-card" id="friday">
      <h1>Piątek</h1>
      <img src="" alt="Ikona pogodowa">
      <p class="location"></p>
      <p class="temperature"></p>
      <p class="description"></p>
      <p class="humidity"></p>
      <p class="wind"></p>
      <p class="pressure"></p>
    </div>
    <div class="weather-card" id="saturday">
      <h1>Sobota</h1>
      <img src="" alt="Ikona pogodowa">
      <p class="location"></p>
      <p class="temperature"></p>
      <p class="description"></p>
      <p class="humidity"></p>
      <p class="wind"></p>
      <p class="pressure"></p>
    </div>
    <div class="weather-card" id="sunday">
      <h1>Niedziela</h1>
      <img src="" alt="Ikona pogodowa">
      <p class="location"></p>
      <p class="temperature"></p>
      <p class="description"></p>
      <p class="humidity"></p>
      <p class="wind"></p>
      <p class="pressure"></p>
    </div>
  </div>


  <footer>© 2023 WeatherAPP </footer>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}

.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.weather-card {
  margin-right: 30px;
}

.weather-card:last-child {
  margin-right: 0;
}


.weather-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0ac29;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.44);
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  margin-right: 10px;
}
.weather-card img {
  width: 150px;
  margin-bottom: 1rem;
}
.weather-card p {
  margin: 0.5rem;
}
</style>

<script>
// zdefiniuj zmienne
const weatherCard = document.querySelector('.weather-card');
const weatherCard1 = document.querySelector('.weather-card');
const locationEl = document.querySelector('.location');
const temperatureEl = document.querySelector('.temperature');
const descriptionEl = document.querySelector('.description');
const humidityEl = document.querySelector('.humidity');
const windEl = document.querySelector('.wind');
const pressureEl = document.querySelector('.pressure');
const iconEl = document.querySelector('img');

// pobierz dane pogodowe dla wybranej lokalizacji
const getWeatherData = async () => {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Krakow&units=metric&appid=e4ddb9cbca1a003ff97b420be34cf94d');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// wyświetl dane pogodowe na stronie
const weatherCards = document.querySelectorAll('.weather-card');

const displayWeatherData = async () => {
  for (let i = 0; i < weatherCards.length; i++) {
    const weatherCard = weatherCards[i];
    const day = weatherCard.id;

    const data = await getWeatherData(day);

    weatherCard.innerHTML = `
      <h1>${day}</h1>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
      <p class="location">${data.name}, ${data.sys.country}</p>
      <p class="temperature">${data.main.temp}°C</p>
      <p class="description">${data.weather[0].description}</p>
      <p class="humidity">Wilgotność: ${data.main.humidity}%</p>
      <p class="wind">Wiatr: ${data.wind.speed} m/s</p>
      <p class="pressure">Ciśnienie: ${data.main.pressure} hPa</p> <br>
      <p class="pressure">Stan: Dobry</p>
    `;
  }
};

displayWeatherData();

</script>