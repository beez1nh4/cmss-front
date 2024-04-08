import { Marker, Popup } from "react-leaflet";
import { useSentinel } from "../../contexts/SentinelContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Markers() {
    
    const {sentinels, setSelectedSentinel} = useSentinel();
    const navigate = useNavigate();

    return (
        <>
        {sentinels.map((sentinel)=> <Marker 
        key={sentinel.id} 
        id={sentinel.id} 
        position={sentinel.position} 
        eventHandlers={{click: (e) => { setSelectedSentinel(sentinel)}}}
        ><Popup 
        >{sentinel.name} <MoreInfoParagraph onClick={()=>{
            navigate(`/sentinel/${sentinel.name}`);
            setSelectedSentinel(sentinel);
            }}>Ver mais informações</MoreInfoParagraph> 
            <img src={sentinel.image} width="150px" alt="sentinel_image" />
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
