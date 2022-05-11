import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerMinas from './markerMinas.js'
import Markerimasd from './markerimasd.js'
import MarkerServiciosMultiples from './markerServiciosMultiples.js'

const MapView = () => {
    return (
        <MapContainer center={{ lat: '-35.002798502697445  ', lng: '-71.22985801427023' }} zoom={20}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
            <Markerimasd/>
            <MarkerMinas/>
            <MarkerServiciosMultiples/>
            

        </MapContainer>
    )
}
export default MapView