//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
const drinks = document.querySelector('#drinks')

document.querySelector('button').addEventListener('click', getDrink)


function getDrink(){
    drinks.classList.toggle('carousel')

    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('.drinkZero').src = data.drinks[0].strDrinkThumb
      document.querySelector('.drinkOne').src = data.drinks[1].strDrinkThumb
      document.querySelector('.drinkTwo').src = data.drinks[2].strDrinkThumb
      document.querySelector('.drinkThree').src = data.drinks[3].strDrinkThumb
      document.querySelector('.drinkFour').src = data.drinks[4].strDrinkThumb

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// Carousel 

const cocktail = document.getElementById("cocktail");

const img = document.querySelectorAll("#cocktail img");

let idx = 0;

function run() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    cocktail.style.transform = `translateX(${-idx * 300}px)`;
}

setInterval(run, 2000);

