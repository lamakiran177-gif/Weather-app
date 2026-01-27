const inputbox = document.querySelector(".input-box");
const searchBtn = document.getElementById("search-Btn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windspeed = document.getElementById("wind_speed");

const location_not_found = document.querySelector(".location-not-found");

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "f489036a6bf9fb589672061ad2445a9b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

        const weather_data = await fetch(`${url}`).then(response => response.json());

          if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

 console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
   windspeed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "image/p1.png";
            break;
        case 'Clear':
            weather_img.src = "image/p3.png";
            break;
        case 'Rain':
            weather_img.src = "image/p2.png";
            break;
        case 'Mist':
            weather_img.src = "image/p4.png";
            break;
        case 'Snow':
            weather_img.src = "image/p5.png";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputbox.value);
});
