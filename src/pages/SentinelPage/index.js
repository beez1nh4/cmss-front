import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { notificationTypes } from "../../constants/subtitles";
import { useSentinel } from "../../contexts/SentinelContext";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

//page with sentinel info
export default function SentinelPage() {
    const { sentinels, selectedSentinel, setSelectedSentinel } = useSentinel();
    const location = useLocation();
    const [color, setColor] = useState(notificationTypes[1].color)
    const [meaning, setMeaning] = useState(notificationTypes[1].meaning)
    const [date, setDate] = useState("")
    
    useEffect(() => {
        if (selectedSentinel !== undefined) {
            const notification = notificationTypes.find((type) => type.id === selectedSentinel.notificationType);
            setColor(notification.color);
            setMeaning(notification.meaning);

            const convertDate = dayjs.unix(selectedSentinel.timestamp);
            const dateBR = dayjs(convertDate).locale('pt-BR').format('dddd, DD/MM, YYYY, HH:mm:ss');
            setDate(dateBR[0].toUpperCase() + dateBR.substring(1));

        } else {
            const sentinelName = location.pathname.replace('/sentinel/', '')
            const sentinel = sentinels.find((sentinel) => sentinel.name === sentinelName);
            //console.log(sentinel)
            setSelectedSentinel(sentinel);
        }
    }, [selectedSentinel, location.pathname, setSelectedSentinel, sentinels])
    return (


        <>
            <NavBar color={color} />
            <Content>
                <DisplayContainer>
                <p>teste</p>
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
    background-color: white;

    @media (max-width: 900px) {
      height: calc(100vh - 80px);
      width: calc(80vh - 40px);
      padding: 20px;
    }
`