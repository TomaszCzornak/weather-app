const button = document.querySelector("button");
const diva = document.getElementsByClassName("module module__form");
const allDivs = document.querySelectorAll('div');
const key = 'bb553cb315dd4c3abce131522221208';
const search = document.getElementsByClassName("material-icons");
// http://api.weatherapi.com/v1/forecast.json?key=bb553cb315dd4c3abce131522221208&q=Wroclaw&days=5

allDivs.forEach(el=>{
    console.log(el);
})

button.addEventListener("click", (event) => {
allDivs[2].style.display = 'block';

})
    document.getElementById('cos').addEventListener('submit', (event) => {

    event.preventDefault();

    const nazwa_miasta = document.getElementById("search").value;
    allDivs[4].style.display = 'block';

    console.log(nazwa_miasta);
fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${nazwa_miasta}&days=5`)
    .then(response => {
        return response.json();
    })
    .then(data => {
    console.log(data.location.localtime);
   })
    .catch(error => {
        console.error(error);
    })})
