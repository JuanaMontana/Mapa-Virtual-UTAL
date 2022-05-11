import { popup } from 'leaflet';
import React from 'react';
import { Marker , Popup } from 'react-leaflet';
import {IconLocation} from './iconLocation';



const Markers = () => {
    return(
        <Marker position={{ lat: '-35.001167421929125 ', lng: '-71.23100837318432' }} icon={IconLocation}>
        <Popup>
        Edificio Minas
      </Popup>
        </Marker>
        
    );
};
export default Markers;