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
      "file": 'locations.geojson'
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
  
  map.addLayer({
    'id': 'population',
    'type': 'circle',
    'source': {
      type: 'vector',
      url: 'mapbox://examples.8fgz4egr'
    },
    'source-layer': 'sf2010',
    'paint': {
      // make circles larger as the user zooms from z12 to z22
      'circle-radius': {
        'base': 1.75,
        'stops': [[12, 2], [22, 180]]
      },
      // color circles by ethnicity, using a match expression
      // https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
      'circle-color': [
        'match',
        ['get', 'ethnicity'],
        'White', '#fbb03b',
        'Black', '#223b53',
        'Hispanic', '#e55e5e',
        'Asian', '#3bb2d0',
        /* other */ '#ccc'
      ]
    }
  });
});
