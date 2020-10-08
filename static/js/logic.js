// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl, function (data) {
    // Once we get a response, send the data.features object to the createFeatures function
    createFeatures(data.features);
});

function createFeatures(earthquakeData) {

    // Define a function we want to run once for each feature in the features array
    // Give each feature a popup describing the place and time of the earthquake
    function onEachFeature(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.place +
            "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
    }

    // Create a GeoJSON layer containing the features array on the earthquakeData object
    // Run the onEachFeature function once for each piece of data in the array
    var earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: onEachFeature
    });

    // Sending our earthquakes layer to the createMap function
    createMap(earthquakes);
}

function createMap(earthquakes) {

    // Define streetmap and darkmap layers
    var grayscalemap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "light-v10",
        accessToken: API_KEY
    });

    var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "dark-v10",
        accessToken: API_KEY
    });

    // Define a baseMaps object to hold our base layers
    var baseMaps = {
        "grayscale Map": grayscalemap,
        "Dark Map": darkmap
    };

    // Create overlay object to hold our overlay layer
    var overlayMaps = {
        Earthquakes: earthquakes
    };

    // Create our map, giving it the streetmap and earthquakes layers to display on load
    var myMap = L.map("map", {
        center: [
            37.09, -95.71
        ],
        zoom: 5,
        layers: [grayscalemap, earthquakes]
    });

    // Create a layer control
    // Pass in our baseMaps and overlayMaps
    // Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);
}

// // Create a legend to display information about our map
// var info = L.control({
//     position: "bottomright"
// });

// // When the layer control is added, insert a div with the class of "legend"
// info.onAdd = function () {
//     var div = L.DomUtil.create("div", "legend");
//     return div;
// };
// // Add the info legend to the map
// info.addTo(map);


// Documentation on radius, color, (and opacity if needed):
// https://leafletjs.com/reference-1.7.1.html#circlemarker

// map base layer types: need satellite, grayscale, outdoors?

// add legend
// see 17.3 Advanced Citi Bike activity


// // 17.1 Activity 07- radius based on data
// // Loop through the cities array and create one marker for each city object
// // color code reference: https://www.rapidtables.com/web/color/RGB_Color.html
// for (var i = 0; i < features.properties; i++) {

//     // Conditionals for magnitude
//     var color = "";
//     // Mag description link: http://www.geo.mtu.edu/UPSeis/magnitude.html
//     // Mag 2.5 to 5.4: Often felt, but only causes minor damage.
//     if (features.properties[i].mag < 5.5) {
//         color = "#FFFF99";
//     }
//     // Mag 5.5 to 6.0: Slight damage to buildings and other structures.
//     else if (features.properties[i].mag < 6.1) {
//         color = "#FFFF66";
//     }
//     // Mag 6.1 to 6.9: May cause a lot of damage in very populated areas.
//     else if (features.properties[i].mag < 7) {
//         color = "#FFFF33";
//     }
//     // Mag 7.0 to 7.9: Major earthquake. Serious damage.
//     else if (features.properties[i].mag < 8) {
//         color = "#FFFF00";
//     }
//     // Mag 8.0 or greater: Great earthquake. Can totally destroy communities near the epicenter.
//     else {
//         color = "#CCCC00";
//     }

//     // Add circles to map
//     L.circle(features.properties[i].mag, {
//         fillOpacity: 0.75,
//         color: "white",
//         fillColor: color,
//         // Adjust radius
//         radius: features.properties[i].mag * 20
//     })// .bindPopup("<h1>" + features.properties[i].place + "</h1> <hr> <h3>Points: " + features.properties[i].time + "</h3>").addTo(myMap);
// }


//     // Call the updateLegend function, which will... update the legend!
//     updateLegend(updatedAt, stationCount);
//   });
// });

// // Update the legend's innerHTML with the last updated time and station count
// function updateLegend(time, stationCount) {
//   document.querySelector(".legend").innerHTML = [
//     "<p>Updated: " + moment.unix(time).format("h:mm:ss A") + "</p>",
//     "<p class='out-of-order'>Out of Order Stations: " + stationCount.OUT_OF_ORDER + "</p>",
//     "<p class='coming-soon'>Stations Coming Soon: " + stationCount.COMING_SOON + "</p>",
//     "<p class='empty'>Empty Stations: " + stationCount.EMPTY + "</p>",
//     "<p class='low'>Low Stations: " + stationCount.LOW + "</p>",
//     "<p class='healthy'>Healthy Stations: " + stationCount.NORMAL + "</p>"
//   ].join("");
// }
