import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { notificationTypes } from "../../constants/subtitles";
import { useSentinel } from "../../contexts/SentinelContext";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import NotificationChart from "./Chart";

//page with sentinel info
export default function SentinelPage() {
    const { sentinels, selectedSentinel, setNotificationWeek, notificationWeek } = useSentinel();
    const location = useLocation();
    const [color, setColor] = useState(notificationTypes[1].color)
    const [meaning, setMeaning] = useState(notificationTypes[1].meaning)
    const [date, setDate] = useState("")
    
    useEffect(() => {
        const promise = axios.get(process.env.REACT_APP_API_BASE_URL + '/notificationweek/2024-07-15');
        promise.then((res) => {
            console.log(res.data);
            setNotificationWeek(res.data);
        });
    
        promise.catch((err) => {
            console.log('err', err.response.data);
        });
         
    }, [])

    return (


        <>
            <NavBar color={color} />
            <Content>
                <DisplayContainer>
                <p>teste</p>
                <NotificationChart data={notificationWeek.notification}/>
                </DisplayContainer>
            </Content>
        </>


    )
}

const Content = styled.div`
    display: flex;
    @media (max-width: 900px) {
      display: block;
    }
`
const DisplayContainer = styled.div`
    display: block;
    height: 86vh;
    width: 600px;
    padding: 25px;
    margin: 20px;
    margin-right: 20px;
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