var providers = {};

providers['OSM'] = {
    title: 'OSM',
    icon: 'img/layers-osm.png',
    layer: L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    })
};

providers['Satellite'] = {
    title: 'MODIS',
    icon: 'img/layers-satellite.png',
    layer: L.tileLayer('http://{s}.sat.owm.io/sql/{z}/{x}/{y}?select=b1,b4,b3&from=modis&order=last&color=modis&appid=d22d9a6a3ff2aa523d5917bbccc89211', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://owm.io">VANE</a>'
    })
};

var map = L.map('map').setView([60, 50], 3);

        
//http://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=d9cfe451d5a775abaf178aec4951b4b0

var Temp = L.tileLayer('http://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=d22d9a6a3ff2aa523d5917bbccc89211', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://owm.io">VANE</a>',
    id: 'temp'
}),

Precipitation = L.tileLayer('http://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=d22d9a6a3ff2aa523d5917bbccc89211', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://owm.io">VANE</a>'
}),

Wind = L.tileLayer('http://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=d22d9a6a3ff2aa523d5917bbccc89211', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://owm.io">VANE</a>'
}),

Pressure = L.tileLayer('http://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=d22d9a6a3ff2aa523d5917bbccc89211', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://owm.io">VANE</a>'
}),


Clouds = L.tileLayer('http://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=d22d9a6a3ff2aa523d5917bbccc89211', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://owm.io">VANE</a>'
});

var owm = new L.OWMLayer({key: 'b1b15e88fa797225412429c1c50c122a1'});
map.addLayer(owm);

Temp.addTo(map);

var overlays = {"Temperature": Temp, "Precipitation": Precipitation, "Clouds": Clouds, "Pressure": Pressure, "Wind": Wind};
L.control.layers(overlays, null, {collapsed:false}).addTo(map);

var layers = [];
    for (var providerId in providers) {
        layers.push(providers[providerId]);
    }

L.control.iconLayers(layers).addTo(map);