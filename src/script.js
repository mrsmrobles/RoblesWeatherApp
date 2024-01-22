function refreshWeather(response) {
  let temperatureElement = document.querySelector("#current-temp");
  let temperature = response.data.temperature.current;
  let cityHeading = document.querySelector("#city-heading");
  let descriptionElement = document.querySelector("#description");
  let description = response.data.condition.description;
  cityHeading.innerHTML = response.data.city;
  descriptionElement.innerHTML = description
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "0afcd2ao9bb24495ta6dd7a01113764b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#city-search");
  searchCity(citySearch.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);

searchCity("San Diego");
