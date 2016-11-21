//Display Map
$(document).ready(function() {
  // Create the map
  var map = L.map('map').setView([12.9615312, 77.6443048], 13);
  // Set up the OSM layer
  L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {maxZoom: 18, attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  // add a marker in the given location
  L.marker([12.9615312, 77.6443048]).addTo(map)
    .bindPopup('HasGeek House')
    .openPopup();

  //Boxoffice tickets
  var boxofficeUrl = "https://boxoffice.hasgeek.com";  
  $.get({   
    url: boxofficeUrl+"/api/1/boxoffice.js",
    crossDomain: true   
  }).done(function(data) {    
    var boxofficeScript = document.createElement('script');   
    boxofficeScript.innerHTML = data.script;    
    document.getElementsByTagName('body')[0].appendChild(boxofficeScript);    
    window.Boxoffice.init({   
      org: 'hasgeek',   
      itemCollection: '8d3d8842-ad7a-11e6-9dd6-99b5cec2b75f', 
      paymentDesc: 'HasGeek'    
    });   
  }).fail(function(response) {    
    var error_msg;
    if (response.readyState === 4) {
      error_msg = "Server error, please try again later";
    }
    else if (response.readyState === 0) {
      if(!navigator.onLine) {
        error_msg = "Unable to connect. There is no network!";
      }
      else {
        error_msg = "<p>Unable to connect. If you are behind a firewall or using any script blocking extension (like Privacy Badger).<p></p> Please ensure your browser can load boxoffice.hasgeek.com, api.razorpay.com and checkout.razorpay.com</p>";
      }
    }
    $('#boxoffice-widget p').html(error_msg);
  });

});