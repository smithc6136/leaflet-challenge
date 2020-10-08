// notes: does use api key with same setup that we've seen
// like 17.3 activity with tile layer and adding map (copy and paste- start here)
// has some styling
// switch statement to color it if above/between/etc a certain number
// geojson function 

// ****************************************************************
// Get your data set
// ****************************************************************

// USGS.gov - All 2.5+ earthquakes in the last 7 days:
// https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson

// ****************************************************************
// Import and Visualize the Data
// ****************************************************************
// 1. Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.
// 2. Your data markers should reflect the magnitude of the earthquake in their size and color (opacity fine?). Earthquakes with higher magnitudes should appear larger and darker in color.
// 3. Include popups that provide additional information about the earthquake when a marker is clicked.
    // code: markerVariableName.bindPopup('whatever you want the popup to say')
        // see 17.1 Activity 3
    // also integrated into code above
// 4. Create a legend that will provide context for your map data.
    // advanced portion of 17.3 Activity 1 has a legend I think!

// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createMap(data.features);
  console.log(data.features.geometry.coordinates);
});


//  17.3 Activity 01 Stu City bike - adapt:
function createMap(weeklyEarthquakes) {

      

// Create the tile layer that will be the background of our map
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  }).addTo(map);

//   // Create a baseMaps object to hold the lightmap layer
//   var baseMaps = {
//     "Light Map": lightmap
//   };

//   // Create an overlayMaps object to hold the weeklyEarthquakes layer
//   var overlayMaps = {
//     "Weekly Earthquakes": weeklyEarthquakes
//   };

//   // Create the map object with options
//   var map = L.map("map", {
//        // Used coordinates for center of the United States
//     center: [39.8283, -98.5795],
//     zoom: 4.3,
//     layers: [lightmap, weeklyEarthquakes]
//   });

//   // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
//   L.control.layers(baseMaps, overlayMaps, {
//   // L.control.layers(baseMaps, {
//     collapsed: false
//   }).addTo(map);
}


// function createMarkers(response) {

//   // Pull the "stations" property off of response.data - (pull features then geometry off of response.type in my case?)
    // so var geometry = response.type.features.geometry; in this case???
//   var stations = response.data.stations;

//   // Initialize an array to hold earthquake markers
//   var earthquakeMarkers = [];

//   // Loop through the stations array - will I need to do this to get length of coordinates?
    // Do I need to parse something to separate lat and lon since not labeled in geojson file???
//   for (var index = 0; index < geometry.coordinates; index++) {
//     var geometry = geometry[index];

//     // For each station, create a marker and bind a popup with the station's name
//     var earthquakeMarker = L.marker([geometry.lat, geometry.lon])
//       .bindPopup("<h3>" + geometry.name + "<h3><h3>Capacity: " + geometry.capacity + "</h3>");

//     // Add the marker to the bikeMarkers array
//     earthquakeMarkers.push(earthquakeMarker);
//   }

//   // Create a layer group made from the bike markers array, pass it into the createMap function
//   createMap(L.layerGroup(bikeMarkers));
// }

// // Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
// d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson", createMarkers);

// createMap();


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
  




// ****************************************************************
// Bonus
// ****************************************************************

// The USGS wants you to plot a second data set on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in a second data set and visualize it along side your original set of data. Data on tectonic plates can be found at https://github.com/fraxen/tectonicplates.
    // aka overlay layer - see 17.1 Activities 08 & 09

// Plot a second data set on our map.


// Add a number of base maps to choose from as well as separate out our two different data sets into overlays that can be turned on and off independently.


// Add layer controls to our map.