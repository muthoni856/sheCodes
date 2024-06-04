function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }
  
  // Display current date and time
  let currentDateElement = document.querySelector("#current-date");
  let currentDate = new Date();
  currentDateElement.innerHTML = formatDate(currentDate);
  
  // Weather API
  function showTemperature(response) {
    let temperature = Math.round(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temperature-value");
    temperatureElement.innerHTML = `${temperature}`;
  
    let city = response.data.city;
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = `${city}`;
  }
  
  function searchCity(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.value;
    let apiKey = "6b025c7d6331b719f34f6a74oab04ft9";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showTemperature);
  }
  
  // Set up event listener for form submission
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", searchCity);
  