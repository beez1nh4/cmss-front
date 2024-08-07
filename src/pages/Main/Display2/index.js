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
import Geohash from "../../../constants/geohash";

export default function Display2() {
    const {sentinels, selectedSentinel, setSelectedSentinel, notifications, setNotifications} = useSentinel();

    const [color, setColor] = useState(notificationTypes[1].color)
    const [meaning, setMeaning] = useState(notificationTypes[1].meaning)
    const [date, setDate] = useState("")
    const navigate = useNavigate();

    //const promise = axios.get(process.env.REACT_APP_API_BASE_URL + '/pedestrian/b27edc2baccd0826');
    //const promise = axios.get(process.env.REACT_APP_API_BASE_URL + '/pedestrian/d2c79348ec4542e1');
    const refresh = () => { 
        const promise = axios.get(process.env.REACT_APP_API_BASE_URL + '/notification');
        promise.then((res) => {
            
            setNotifications(res.data);
        });
    
        promise.catch((err) => {
            console.log('err', err.response.data);
        });
     }
    useEffect(() => {
        const promise = axios.get(process.env.REACT_APP_API_BASE_URL + '/notification');
        //http://localhost:4000/notification/did:sw:3MCaQEkPdtfdiySyprzrym
        promise.then((res) => {
            //console.log(res.data[0].notification_object.timestamp);
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
                    <FunctionP onClick={()=>refresh()}>⟳</FunctionP>
                    <p style={{width: '12.5%'}}>Date & Time</p>
                    <p style={{width: '10%'}}>Id</p>
                    <p style={{width: '23.5%'}}>didDocument</p>
                    <p style={{width: '7.5%'}}>Type</p>
                    <p style={{width: '7.5%'}}>Confidence</p>
                </StatusContainer>
                <ItemSeparator/>
                {notifications.map((notification)=> <NotificationItem key={notification._id} id={notification.id} notification={notification} ></NotificationItem>)}
        </>
        
    )
}



const Title = styled.div`
    font-size: 22px;
    margin-bottom: 10px;
    color: ${mainColor};
    font-weight: bold;
    margin-bottom: 20px;
`

const ItemSeparator = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    height: 3px;
    width: 100%;
    background-color: #f5f5f5;
`

const StatusContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    @media (max-width: 1750px) {
      padding: 20px;
      font-size: small;
    }

    @media (max-width: 900px) {
      height: calc(60vh - 20px);
      padding: 20px;
      font-size: x-small;
    }
`
const SpecialP = styled.div`
    margin-left: 110px;
`
const FunctionP = styled.div`
    width: 10px;
    height: 10px;
    color: orange;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`