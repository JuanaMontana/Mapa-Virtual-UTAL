import { popup } from 'leaflet';
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { IconLocation } from './iconLocation';



const Markers = () => {
    return (
        <Marker position={{ lat: '-35.003615 ', lng: '-71.229026' }} icon={IconLocation}>
            <Popup>
                I+D
            </Popup>
        </Marker>

    );
};
export default Markers;