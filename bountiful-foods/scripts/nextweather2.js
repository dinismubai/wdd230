const currenttemp2 = document.querySelector('#currenttemp2');
const weathericon2 = document.querySelector('#weathericon2');
const captiondesc2 = document.querySelector('#desc2');
const humidity2 = document.querySelector('#humidity2');

const url2 = 'https://api.openweathermap.org/data/2.5/weather?q=München&appid=7b933fdd7bdddc97de6412a297b9165a&units=metric';

async function apiFetch2() {
    try {
      const response = await fetch(url2);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults2(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch2();

  function displayResults2(weatherData) {
    const temp2 = weatherData.main.temp.toFixed(0);
    const iconsrc2 = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc2 = weatherData.weather[0].description;
    const humid2 = weatherData.main.humidity;

    currenttemp2.innerHTML = `<strong>${temp2}</strong>`;
    weathericon2.setAttribute('src', iconsrc2);
    captiondesc2.innerHTML = desc2;
    humidity2.innerHTML = humid2;
    

    /*windspedd.innerHTML = wind;*/

    
  }

/*dmubai
Ormosias241*/