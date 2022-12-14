const currenttemp1 = document.querySelector('#currenttemp1');
const weathericon1 = document.querySelector('#weathericon1');
const captiondesc1 = document.querySelector('#desc1');
const humidity1 = document.querySelector('#humidity1');

const url1 = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=7b933fdd7bdddc97de6412a297b9165a&units=metric';

async function apiFetch1() {
    try {
      const response = await fetch(url1);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults1(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch1();

  function displayResults1(weatherData) {
    const temp1 = weatherData.main.temp.toFixed(0);
    const iconsrc1 = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc1 = weatherData.weather[0].description;
    const humid1 = weatherData.main.humidity;

    currenttemp1.innerHTML = `<strong>${temp1}</strong>`;
    weathericon1.setAttribute('src', iconsrc1);
    captiondesc1.innerHTML = desc1;
    humidity1.innerHTML = humid1;
    

    /*windspedd.innerHTML = wind;*/

    
  }

/*dmubai
Ormosias241*/