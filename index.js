mapboxgl.accessToken = 'pk.eyJ1Ijoic2Jsb2NoIiwiYSI6ImNqZ2w0azZrMDA3MHoyeG8ybmlldGE5bmgifQ.Mh_N_CrwuUwLe7DNFAv8pQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [-73.95, 40.7], // starting position
  zoom: 10.75 // starting zoom
});



map.on('load', function () {
  ////////////////////////////////////////////////////////////////////////////////
  map.addLayer({
    "id": "points",
    "type": "symbol",
    "source": {
      "type": "geojson",
      "data": "http://192.168.1.10:8080/locations.geojson"
      //      "data": "http://http://s-j-b.github.io/locations.geojson"
    },
    "layout": {
      "icon-image": "{icon}-15",
      "text-field": "{title}",
      "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      "text-offset": [0, 0.6],
      "text-anchor": "top"
    }
  });
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
});
