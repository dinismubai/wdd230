const d = new Date();
    let year = d.getFullYear();
    /*let month = d.getMonth() + 1;*/
    let weekday = d.getDay();
    let fulldate = new Date().toLocaleDateString('en-us', { weekday:"long", day:"numeric", month:"long", year:"numeric"}) 
    document.getElementById("fulldate").innerHTML = fulldate;
    document.getElementById("year").innerHTML = year;

    if(weekday == 2){
        document.getElementById("banner").style.display = "unset";
        document.getElementById("banner").style.display = "block";
    }
    else {
        document.getElementById("banner").style.display = "none";
    }