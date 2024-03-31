import React from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from '../../../components/Markers';

const position = [-23.5613, -46.735]

//render map USP position
export class TrafficLightsMap extends React.Component {


    render() {
        

        return (
            <MapContainer center={position} zoom={15} scrollWheelZoom={true} style={{ height: '76.5vh', width: '112vh' }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            <Markers/>

            </MapContainer>
        );
    }
}

