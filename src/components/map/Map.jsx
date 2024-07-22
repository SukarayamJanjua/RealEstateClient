import { MapContainer, TileLayer } from 'react-leaflet'
import './map.scss'
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';
import L from 'leaflet';
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';
// import {ImageOverlay } from 'react-leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


// Set default icon for Leaflet
const DefaultIcon = L.icon({
  iconUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41], // Default size
  iconAnchor: [12, 41] // Point of the icon which will correspond to marker's location
});

L.Marker.prototype.options.icon = DefaultIcon;


function Map({items}){
  const defaultCenter = [20.5937, 78.9629];
  
  return (
    <MapContainer center={items.length === 1 ?
     [items[0].latitude, items[0].longitude] 
      : defaultCenter
    } 
     zoom={5} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {items.map(item=>(
      <Pin item={item} key={item.id}/>
    ))}
  </MapContainer>
  )
}

export default Map