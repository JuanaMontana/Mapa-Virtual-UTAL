import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Markers from './markers.js'



const MapView = () => {
    return (
        <MapContainer center={{ lat: '-35.001185  ', lng: '-71.230944' }} zoom={20}>
            
            secondary
            dsa
            sad
            das
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />

            <Markers/>
        </MapContainer>
    )
}
export default MapView