const currenttemp = document.querySelector('#currenttemp');
const weathericon = document.querySelector('#weathericon');
const captiondesc = document.querySelector('#desc');
const humidity = document.querySelector('#humidity');

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
    const temp = weatherData.main.temp.toFixed(0);
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const humid = weatherData.main.humidity;

    currenttemp.innerHTML = `<strong>${temp}</strong>`;
    weathericon.setAttribute('src', iconsrc);
    captiondesc.innerHTML = desc;
    humidity.innerHTML = humid;
    

    /*windspedd.innerHTML = wind;*/

    
  }

/*dmubai
Ormosias241*/