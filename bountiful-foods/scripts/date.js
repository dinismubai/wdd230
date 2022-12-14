const currentDate = new Date();
let weekday = -1;
weekday = currentDate.getDay();
/*let day = "";*/

/*switch(weekday) {
    case 0: day = "Sunday"; break;
    case 1: day = "Monday"; break;
    case 2: day = "Tuesday"; break;
    case 3: day = "Wednesday"; break;
    case 4: day = "Thursday"; break;
    case 5: day = "Friday"; break;
    case 6: day = "Saturday"; break;
}*/
const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById("current").innerHTML = day[weekday];
document.getElementById("day1").innerHTML = day[weekday+1];
document.getElementById("day2").innerHTML = day[weekday+2];
document.getElementById("day3").innerHTML = day[weekday+3];