import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const defaultIcon= new L.Icon({
    iconUrl: markerIconPng,
    shadowUrl: markerShadowPng,
    iconSize:[25,41],
    iconAnchor:[12,41],
    popupAnchor:[0,-41]
})

function Mapa({lat,lon, city}){
    return(
        <div className="mapa-container" style={{height: '400px', width:'100%', marginTop:'20px'}}>
            <MapContainer center={[lat,lon]} zoom={10} scrollWheelZoom={true} style={{height:'100%',width:'100%'}}>
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                ></TileLayer>
                <Marker position={[lat,lon]} icon={defaultIcon}>
                    <Popup>
                        <strong>{city}</strong> <br/> Lokacija grada
                    </Popup>
                </Marker>
            </MapContainer>

        </div>
    )
}
export default Mapa;