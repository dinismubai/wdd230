    const d = new Date();
    let year = d.getFullYear();
    let weekday = d.getDay();
    //let fulldate = new Date().toLocaleDateString('en-us', { weekday:"long", day:"numeric", month:"long", year:"numeric"}) 
    //document.getElementById("fulldate").innerHTML = fulldate;
    document.getElementById("year").innerHTML = year;

    