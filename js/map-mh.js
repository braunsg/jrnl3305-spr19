
d3.csv("./data/mh100-data.csv").then(function(data) {
  var map = L.map('map').setView([42.332566, -71.100384],16);

  var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  data.forEach(function(d) {
    var lat = d["Latitude"];
    var lon = d["Longitude"];

    var circle = L.circle([lat,lon], {
      color: '#fdd869',
      fillColor: '#fdd869',
      fillOpacity: 0.5,
      radius: 12
    }).addTo(map);

  })

});
