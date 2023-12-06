import L from 'leaflet';
import MarkerIcon from './../images/icon-location.svg';


export const createMap = (mapInstance, setMapInstance, latitude, longitude, index) => {

    /* Instatiating the map */
    var map = mapInstance;

    if (index === 0) {
        map = L.map('map').setView([latitude, longitude], 13);
        setMapInstance(map);
    } else {
        map.setView(new L.LatLng(latitude, longitude), 13);
    }

    /* Add a tile layer(map) */
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    const circle = L.circle([latitude, longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    const iconOptions = {
        iconUrl: MarkerIcon,
        iconSize: [20, 20]
    }

    const customIcon = L.icon(iconOptions);

    const markerOptions = {
        title: "MyLocation",
        clickable: true,
        draggable: true,
        icon: customIcon
    }

    const marker = L.marker([latitude, longitude], markerOptions);
    marker.addTo(map)
}