function refreshWeather(response) {
  let temperatureElement = document.querySelector("#current-temp");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let cityHeading = document.querySelector("#city-heading");
  cityHeading.innerHTML = response.data.city;
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
