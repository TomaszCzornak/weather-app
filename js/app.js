const button = document.querySelector("button");
const diva = document.getElementsByClassName("module module__form");
const allDivs = document.querySelectorAll('div');
const key = 'bb553cb315dd4c3abce131522221208';
const search = document.getElementsByClassName("material-icons");




button.addEventListener("click", (event) => {
allDivs[2].style.display = 'block';

})

document.querySelector('button').addEventListener('submit', (event) => {

    event.preventDefault();

    const nazwa_miasta = document.querySelector('input').value;


fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${nazwa_miasta}&days=5`)
    .then(response => {
        return response.json();
    })
    .then(data => {
   data.forEach(el=>{
    console.log(el);
   })
    })
    .catch(error => {
        console.error(error);
    })})
