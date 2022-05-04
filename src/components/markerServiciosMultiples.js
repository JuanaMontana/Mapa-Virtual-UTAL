import { popup } from 'leaflet';
import React from 'react';
import { Marker , Popup } from 'react-leaflet';
import {IconLocation} from './iconLocation';



const Markers = () => {
    return(
        <Marker position={{ lat: '-35.002070 ', lng: '-71.230187' }} icon={IconLocation}>
        <Popup>
        Servicios Multiples
      </Popup>
        </Marker>
        
    );
};
export default Markers;