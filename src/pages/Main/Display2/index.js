import styled from "styled-components"
import { useSentinel } from "../../../contexts/SentinelContext";
import { mainColor } from "../../../constants/colors";
import { useEffect, useState } from "react";
import { notificationTypes } from "../../../constants/subtitles";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NotificationItem from "../../../components/NotificationItem";

export default function Display2() {
    const {sentinels, selectedSentinel, setSelectedSentinel, notifications, setNotifications} = useSentinel();

    const [color, setColor] = useState(notificationTypes[1].color)
    const [meaning, setMeaning] = useState(notificationTypes[1].meaning)
    const [date, setDate] = useState("")
    const navigate = useNavigate();

    //const promise = axios.get(process.env.REACT_APP_API_BASE_URL + '/pedestrian/b27edc2baccd0826');
    //const promise = axios.get(process.env.REACT_APP_API_BASE_URL + '/pedestrian/d2c79348ec4542e1');

    useEffect(() => {
        const promise = axios.get(process.env.REACT_APP_API_BASE_URL + '/notification');
        //http://localhost:4000/notification/did:sw:3MCaQEkPdtfdiySyprzrym
        promise.then((res) => {
            //console.log(res.data[0]);
            setNotifications(res.data);
        });
    
        promise.catch((err) => {
            console.log('err', err.response.data);
        });


        if (selectedSentinel !== undefined){
            const notification = notificationTypes.find((type) => type.id === selectedSentinel.notificationType);
            setColor(notification.color);
            setMeaning(notification.meaning);

            const convertDate = dayjs.unix(selectedSentinel.timestamp);
            const dateBR = dayjs(convertDate).locale('pt-BR').format('dddd, DD/MM, YYYY, HH:mm:ss');
            setDate(dateBR[0].toUpperCase() + dateBR.substring(1));

        }
    }, [selectedSentinel])

    return (
        <>
                <Title>Notifications</Title>
                <StatusContainer>
                    <SpecialP>Date & Time</SpecialP>
                    <p>Id</p>
                    <SpecialP>didDocument</SpecialP>
                    <SpecialP>Type</SpecialP>
                    <p>Confidence</p>
                </StatusContainer>
                <ItemSeparator/>
                {notifications.map((notification)=> <NotificationItem key={notification._id} id={notification.id} notification={notification} ></NotificationItem>)}
        </>
        
    )
}


const DisplayContainer = styled.div`
    display: block;
    height: 86vh;
    width: 600px;
    padding: 25px;
    margin: 20px;
    margin-left: 0px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    @media (max-width: 1050px) {
      height: calc(100vh - 80px);
      width: 60vh;
      height: 40vh;
      padding: 20px;
      font-size: x-small;
    }

    @media (max-width: 900px) {
      height: calc(60vh - 20px);
      width: calc(80vh - 40px);
      padding: 20px;
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
    margin-top: 5px;
    margin-bottom: 5px;
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
    justify-content: space-around;
    font-weight: bold;
`
const SpecialP = styled.div`
    margin-left: 90px;
`
