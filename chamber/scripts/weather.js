// select HTML elements in the document
const currenttemp = document.querySelector('#currenttemp');
const weathericon = document.querySelector('#weathericon');
const captiondesc = document.querySelector('#desc');
const windspedd = document.querySelector('#speed');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Maputo&appid=1487ae7a572f75dcef89502fe056cea9&units=metric';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currenttemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const wind = weatherData.wind.speed;

    windspedd.innerHTML = wind;

    weathericon.setAttribute('src', iconsrc);
    weathericon.setAttribute('alt', desc);
    captiondesc.textContent = desc;
  }

/*dmubai
Ormosias241*/
