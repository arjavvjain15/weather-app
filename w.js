
const apikey="46d9c6f46a323fddb715231e22a80d47";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".searchbtn input");
const searchclick=document.querySelector(".searchbtn button");

async function checkWeather(city){
    const response=await fetch(apiurl + city +`&appid=${apikey}`);
    var data = await response.json();

    document.querySelector(".result").innerHTML= `Weather Information for ${(data.name).toUpperCase()}`;

    document.querySelector("#tempp").innerHTML=`${Math.round(data.main.temp)}°C`;
    document.querySelector("#fl").innerHTML=`Feels like ${Math.round(data.main.feels_like)}°C`;
    document.querySelector("#ti").innerHTML=`Temperature is ${Math.round(data.main.temp)}°C`;

    document.querySelector("#humid").innerHTML=`${data.main.humidity}%`;
    document.querySelector("#atm").innerHTML=`Pressure is ${data.main.pressure} mbar`;
    document.querySelector("#hi").innerHTML=`Humidity is ${data.main.humidity}%`;

    document.querySelector("#wind").innerHTML=`${data.wind.speed} Km/Hr`;
    let sunrise = data.sys.sunrise;
    let sunset = data.sys.sunset;

    let date = new Date(sunrise * 1000);
    let date1 = new Date(sunset * 1000);

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let hours1 = date1.getHours();
    let minutes1 = date1.getMinutes();

    minutes = minutes < 10 ? '0' + minutes : minutes;
    minutes1 = minutes1 < 10 ? '0' + minutes1 : minutes1;

    let period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    let formattedTime = hours + ':' + minutes;

    let period1 = hours1 >= 12 ? 'PM' : 'AM';
    hours1 = hours1 % 12 || 12; 
    let formattedTime1 = hours1 + ':' + minutes1;

    document.querySelector("#sr").innerHTML = `Sunrise at ` + formattedTime + " " + period;
    document.querySelector("#ss").innerHTML = `Sunset at ` + formattedTime1 + " " + period1;
}

searchclick.addEventListener("click", () => {
    const city = searchbox.value;
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name");
    }
});
