import styled from "styled-components"
import { useSentinel } from "../../../contexts/SentinelContext";
import { mainColor } from "../../../constants/colors";
import { useEffect, useState } from "react";
import { notificationTypes } from "../../../constants/subtitles";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SentinelItem from "../../../components/SentinelItem";
import { sentinels_labels } from "../../../constants/sentinelsLabels";

export default function Display1() {
    const {sentinels, selectedSentinel, setSelectedSentinel, notifications, setNotifications} = useSentinel();

    const [color, setColor] = useState(notificationTypes[1].color)
    const [meaning, setMeaning] = useState(notificationTypes[1].meaning)
    const [date, setDate] = useState("")
    const navigate = useNavigate();

    
    return (
        <>
            <DisplayContainer>
                <Title>Vehicles</Title>
                <StatusContainer>
                    <p>Sentinel</p>
                    <p>didDocument</p>
                    <p>Vehicle</p>
                </StatusContainer>
                <ItemSeparator/>
                {sentinels_labels.map((sentinel)=> <SentinelItem key={sentinel.sentinel_id} id={sentinel.sentinel_id} sentinel={sentinel}></SentinelItem>)}
           </DisplayContainer>
            
        </>
        
    )
}


const DisplayContainer = styled.div`
    display: block;
    height: 86vh;
    width: 600px;
    padding: 25px;
    margin: 20px;
    margin-right: 20px;
    background-color: white;
    border-radius: 15px;
    overflow-y: scroll;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    @media (max-width: 1350px) {
      font-size: x-small;
      width: 400px;

    }

    @media (max-width: 900px) {
      height: 80%/* calc(60vh - 20px) */;
    }
`
const Title = styled.div`
    font-size: 22px;
    margin-bottom: 10px;
    color: ${mainColor};
    font-weight: bold;
    margin-bottom: 20px;
`
const MoreButton = styled.button`
    height: 18%;
    width: 95%;
    padding: 10px;
    margin: 20px;
    margin-top: 5%;
    font-family: "Lexend Deca", sans-serif;
    background-color: ${mainColor};
    color: white;
    font-weight: bold;
    font-size: 15px;
    border: 0;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    &:hover {
    background-color: lightblue;
    cursor: pointer;
    opacity: 0.7;
    }
    @media (max-width: 1050px) {
      font-size: x-small;
    }
`
const BackButton = styled.button`
    height: 15%;
    width: 95%;
    padding: 10px;
    margin: 20px;
    margin-top: 2%;
    font-family: "Lexend Deca", sans-serif;
    background-color: ${mainColor};
    color: white;
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 20px;
    border: 0;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    &:hover {
    background-color: lightblue;
    cursor: pointer;
    opacity: 0.7;
    }

    @media (max-width: 1050px) {
      font-size: small;
    }
`
const ItemSeparator = styled.div`
    height: 3px;
    width: 100%;
    background-color: #f5f5f5;
`
const ItemColor = styled.div`

    @keyframes blinker {
        50% {
            opacity: 0;
        }
    }
    width: 20px;
    height: 20px;
    margin-right: 30px;
    background: ${props => props.color};
    border-radius: 12px;
    border: 0;
    animation: blinker 1s linear infinite;
`
const StatusContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    height: 20px;
`