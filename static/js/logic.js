// ****************************************************************
// Get your data set
// ****************************************************************

// USGS.gov - All 2.5+ earthquakes in the last 7 days:
// https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson

// ****************************************************************
// Import and Visualize the Data
// ****************************************************************

// 1. Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.
// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
    center: [0, 0],
    zoom: 13
  });

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  // accessToken: API_KEY
}).addTo(myMap);

// 2. Your data markers should reflect the magnitude of the earthquake in their size and color (opacity fine?). Earthquakes with higher magnitudes should appear larger and darker in color.

// 17.1 Activity 07- radius based on data
// // Loop through the cities array and create one marker for each city object
// for (var i = 0; i < countries.length; i++) {

//     // Conditionals for countries points
//     var color = "";
//     if (countries[i].points > 200) {
//       color = "yellow";
//     }
//     else if (countries[i].points > 100) {
//       color = "blue";
//     }
//     else if (countries[i].points > 90) {
//       color = "green";
//     }
//     else {
//       color = "red";
//     }
  
//     // Add circles to map
//     L.circle(countries[i].location, {
//       fillOpacity: 0.75,
//       color: "white",
//       fillColor: color,
//       // Adjust radius
//       radius: countries[i].points * 1500
//     }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Points: " + countries[i].points + "</h3>").addTo(myMap);
//   }
  

// 3. Include popups that provide additional information about the earthquake when a marker is clicked.
    // code: markerVariableName.bindPopup('whatever you want the popup to say')
        // see 17.1 Activity 3
    // also integrated into code above

// 4. Create a legend that will provide context for your map data.


// ****************************************************************
// Bonus
// ****************************************************************

// The USGS wants you to plot a second data set on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in a second data set and visualize it along side your original set of data. Data on tectonic plates can be found at https://github.com/fraxen/tectonicplates.
    // aka overlay layer - see 17.1 Activities 08 & 09

// Plot a second data set on our map.


// Add a number of base maps to choose from as well as separate out our two different data sets into overlays that can be turned on and off independently.


// Add layer controls to our map.