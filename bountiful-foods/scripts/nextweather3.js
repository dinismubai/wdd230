const currenttemp3 = document.querySelector('#currenttemp3');
const weathericon3 = document.querySelector('#weathericon3');
const captiondesc3 = document.querySelector('#desc3');
const humidity3 = document.querySelector('#humidity3');

const url3 = 'https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=7b933fdd7bdddc97de6412a297b9165a&units=metric';

async function apiFetch3() {
    try {
      const response = await fetch(url3);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults3(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch3();

  function displayResults3(weatherData) {
    const temp3 = weatherData.main.temp.toFixed(0);
    const iconsrc3 = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc3 = weatherData.weather[0].description;
    const humid3 = weatherData.main.humidity;

    currenttemp3.innerHTML = `<strong>${temp3}</strong>`;
    weathericon3.setAttribute('src', iconsrc3);
    captiondesc3.innerHTML = desc3;
    humidity3.innerHTML = humid3;
    

    /*windspedd.innerHTML = wind;*/

    
  }

/*dmubai
Ormosias241*/