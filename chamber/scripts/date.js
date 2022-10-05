const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    document.getElementById("fulldate").innerHTML = day+ " "+ month+ " "+year;
    document.getElementById("year").innerHTML = year;