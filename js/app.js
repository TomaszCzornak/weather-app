const button = document.querySelector("button");
const diva = document.getElementsByClassName("module module__form");
const allDivs = document.querySelectorAll('div');
const key = 'bb553cb315dd4c3abce131522221208';
const search = document.getElementsByClassName("material-icons");
// http://api.weatherapi.com/v1/forecast.json?key=bb553cb315dd4c3abce131522221208&q=Parczew&days=5
let cityName = document.getElementsByClassName("city__name")[0];

const d = new Date();
let day1 = d.getDay() + 1;
let day2 = d.getDay() + 2;
let day3 = d.getDay() + 3;
let day4 = d.getDay() + 4;
let day5 = d.getDay() + 5;

let arrayOfWeekdays = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];


allDivs.forEach(el => {
    console.log(el);
})

button.addEventListener("click", (event) => {
    allDivs[2].style.display = 'block';

})
document.getElementById('cos').addEventListener('submit', (event) => {

    event.preventDefault();

    const nazwa_miasta = document.getElementById("search").value;
    allDivs[4].style.display = 'block';
    allDivs[2].style.display = 'none';

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${nazwa_miasta}&days=6`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            cityName.innerHTML = data.location.name;
            document.getElementsByClassName("temperature")[0].innerHTML = data.current.temp_c;
            document.getElementsByClassName("pressure__value")[0].innerHTML = data.current.pressure_mb + " hPa";
            document.getElementsByClassName("humidity__value")[0].innerHTML = data.current.humidity + " %";
            document.getElementsByClassName("wind-speed__value")[0].innerHTML = data.current.wind_kph + " kph";
            document.getElementsByClassName("day")[0].innerHTML = arrayOfWeekdays[day1];
            document.getElementsByClassName("day")[1].innerHTML = arrayOfWeekdays[day2];
            document.getElementsByClassName("day")[2].innerHTML = arrayOfWeekdays[day3];
            document.getElementsByClassName("day")[3].innerHTML = arrayOfWeekdays[day4];
            document.getElementsByClassName("day")[4].innerHTML = arrayOfWeekdays[day5];
            if (data.current.condition.text === "Partly cloudy") {
                document.querySelectorAll(".weather__icon > img")[0].src = "//cdn.weatherapi.com/weather/64x64/day/116.png";
            } else if (data.current.condition.text === "Patchy rain possible") {
                document.querySelectorAll(".weather__icon > img")[0].src = "//cdn.weatherapi.com/weather/64x64/day/176.png";
            } else if (data.current.condition.text === "Sunny") {
                document.querySelectorAll(".weather__icon > img")[0].src = "//cdn.weatherapi.com/weather/64x64/day/113.png";
            }

            if (data.forecast.forecastday[1].day.condition.text === "Patchy rain possible") {
                document.querySelectorAll('ul')[1].querySelectorAll('img')[0].src = "//cdn.weatherapi.com/weather/64x64/day/176.png";
            }
               document.querySelectorAll('ul')[1].getElementsByClassName("temperature__value")[0].innerHTML = data.forecast.forecastday[1].day.maxtemp_c;
               document.querySelectorAll('ul')[1].getElementsByClassName("temperature__value")[1].innerHTML = data.forecast.forecastday[2].day.maxtemp_c;
               document.querySelectorAll('ul')[1].getElementsByClassName("temperature__value")[2].innerHTML = data.forecast.forecastday[3].day.maxtemp_c;
               document.querySelectorAll('ul')[1].getElementsByClassName("temperature__value")[3].innerHTML = data.forecast.forecastday[4].day.maxtemp_c;
               document.querySelectorAll('ul')[1].getElementsByClassName("temperature__value")[4].innerHTML = data.forecast.forecastday[5].day.maxtemp_c;

        })
        .catch(error => {
            console.error(error);
        })
})
//git test