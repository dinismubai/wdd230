const currentDate = new Date();
let weekday = 0;
weekday = currentDate.getDay();

const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById("current").innerHTML = day[weekday];
document.getElementById("day1").innerHTML = day[weekday+1];
document.getElementById("day2").innerHTML = day[weekday+2];
document.getElementById("day3").innerHTML = day[weekday+3];