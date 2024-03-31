import { Marker, Popup } from "react-leaflet";
import { useTrafficLight } from "../../contexts/TrafficLightContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Markers() {
    
    const {trafficLights, setSelectedTrafficLight, setChosenTrafficLight} = useTrafficLight();
    const navigate = useNavigate();

    return (
        <>
        {trafficLights.map((trafficLight)=> <Marker 
        key={trafficLight.id} 
        id={trafficLight.id} 
        position={trafficLight.position} 
        eventHandlers={{click: (e) => { setSelectedTrafficLight(trafficLight)}}}
        ><Popup 
        >{trafficLight.name} <MoreInfoParagraph onClick={()=>{
            navigate(`/trafficlight/${trafficLight.name}`);
            setChosenTrafficLight(trafficLight);
            }}>Ver mais informações</MoreInfoParagraph> 
            <img src={trafficLight.image} width="150px" alt="traffic_image" />
            </Popup></Marker>)}
        </>
    )
}

const MoreInfoParagraph = styled.p`
    font-family: "Lexend Deca", sans-serif;
    font-size: 12px;
    &:hover{
        opacity: 80%;
        font-weight: bold;
        cursor: pointer;
        font-size: 11px;
        color: lightgray;
    }
`
