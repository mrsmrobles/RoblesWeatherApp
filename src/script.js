function handleSearch(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#city-search");
  console.log(citySearch.value);
  let cityHeading = document.querySelector("#city-heading")
  cityHeading.innerHTML = citySearch.value;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
