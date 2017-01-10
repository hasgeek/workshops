//Display Map
  $(function initLeaflets() {
    $('.leaflet-map').each(function initLeafletMap () {
        var   $container = $(this)
            , defaults = {
                  zoom: 17
                , marker: [12.9615312, 77.6443048] // bangalore
                , label: 'HasGeek House'
                , maxZoom: 20
                , attribution: '<a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>'
                , subdomains: ['a','b','c']
                , scrollWheelZoom: false
            }
            , args
            , options
            , map
            , marker
            ;
        
        // remove any child elements from the container
        $container.empty();
        
        args = $container.data();
        if (args.marker) { args.marker = args.marker.split(','); }
        options = $.extend({}, defaults, args);
        
        map = new L.Map($container[0], {
              center: options.center || options.marker
            , zoom: options.zoom
            , scrollWheelZoom: options.scrollWheelZoom
        });
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: options.maxZoom
            , attribution: options.attribution
            , subdomains: options.subdomains
        }).addTo(map);
        
        
        marker = new L.marker(options.marker).addTo(map);
        if (options.label) marker.bindPopup(options.label).openPopup();
    })
});

$(document).ready(function() {

  $('.smooth-scroll').click(function(event) {
    event.preventDefault();
    var section = $(this).attr('href');
    var sectionPos = $(""+section).offset().top;
    $('html,body').animate({scrollTop:sectionPos}, '900');
  });

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
    setTimeout(function() { 
      if ($("#dns-worksop-ticket .ticket-price").length > 0) {
        $(".header .price").html('<i class="fa fa-inr"></i>' + $("#dns-worksop-ticket .ticket-price").text());
      }
    }, 10000);
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