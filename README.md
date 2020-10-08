# Visualizing Data With Leaflet

## Background
Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. As a new hire, you will be helping them out with an exciting new project!

The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

## Tasks
*  Get your data set
    *  The USGS provides earthquake data in a number of different formats, updated every 5 minutes. I chose to use data on all 2.5+ earthquakes in the last 7 days. The following URL found on the USGS website will be used to pull in the data for the visualization: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson .

*  Import and visualize the data
    *  Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.
        *  Your data markers should reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes should appear larger and darker in color.
        *  Include popups that provide additional information about the earthquake when a marker is clicked.
        *  Create a legend that will provide context for your map data.