function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(36.778259,-119.417931),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }