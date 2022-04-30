import React from 'react';
import { Marker } from 'react-leaflet';
import {IconLocation} from './iconLocation';


const Markers = () => {
    return(
        <Marker position={{ lat: '-35.002798502697445 ', lng: '-71.22985801427023' }} icon={IconLocation}/>
    );
};
export default Markers;