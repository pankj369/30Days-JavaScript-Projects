const apiKey = "5bb8f6de01fe8623df8d8cd2466b3290";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  //display data on screen

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "°c ";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h ";

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/cloudy.png";
  }else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/sun.png";
  }else if(data.weather[0].main == "Rain"){
    weatherIcon.src= "images/rain.png";
}else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src="images/drizzle.png";
}else if(data.wweather[0].main =="Mist"){
    weatherIcon.src="images/mist.png";
}
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
