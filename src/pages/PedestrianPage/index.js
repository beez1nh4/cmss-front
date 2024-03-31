import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { notificationTypes } from "../../constants/subtitles";
import { useTrafficLight } from "../../contexts/TrafficLightContext";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ClockDisplay from "./ClockDisplay";
import CrosswalkDisplay from "./CrossWalkDisplay";

//page with pedestrian info
export default function PedestrianPage() {
    const { trafficLights, chosenTrafficLight, setChosenTrafficLight } = useTrafficLight();
    const location = useLocation();
    const [color, setColor] = useState(notificationTypes[1].color)
    const [meaning, setMeaning] = useState(notificationTypes[1].meaning)
    const [date, setDate] = useState("")
    
    useEffect(() => {
        if (chosenTrafficLight !== undefined) {
            const notification = notificationTypes.find((type) => type.id === chosenTrafficLight.notificationType);
            setColor(notification.color);
            setMeaning(notification.meaning);

            const convertDate = dayjs.unix(chosenTrafficLight.timestamp);
            const dateBR = dayjs(convertDate).locale('pt-BR').format('dddd, DD/MM, YYYY, HH:mm:ss');
            setDate(dateBR[0].toUpperCase() + dateBR.substring(1));

        } else {
            const trafficLightName = location.pathname.replace('/trafficlight/', '')
            const trafficLight = trafficLights.find((trafficLight) => trafficLight.name === trafficLightName);
            console.log(trafficLight)
            setChosenTrafficLight(trafficLight);
        }
    }, [chosenTrafficLight, location.pathname, setChosenTrafficLight, trafficLights])
    return (


        <>
            <NavBar color={color} />
            <Content>
                <ClockDisplay/>
                <CrosswalkDisplay/>
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

    @media (max-width: 900px) {
      height: calc(100vh - 80px);
      width: calc(80vh - 40px);
      padding: 20px;
    }
`