import React from 'react';
import { Marker } from 'react-leaflet';
import {IconLocation} from './iconLocation';


const Markers = () => {
    return(
        <Marker position={{ lat: '-35.001167421929125 ', lng: '-71.23100837318432' }} icon={IconLocation}/>
    );
};
export default Markers;