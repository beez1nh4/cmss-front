import dayjs from "dayjs"
import styled from "styled-components"
import swal from "sweetalert";
import { sentinels_labels } from "../../constants/sentinelsLabels";
import { useEffect, useState } from "react";
import { EventLogos } from "../../constants/eventLogos";

export default function NotificationItem({notification}) {
    const [sentinel, setSentinel] = useState({sentinel_id: 0, didDocument: "did", vehicle: "NA"});
    const [logo, setLogo] = useState()
    const [plate, setPlate] = useState("-")

    useEffect(() => {
        if (sentinels_labels.find((sentinel) => sentinel.didDocument === notification.remote.didDocument.id)){
            setSentinel(sentinels_labels.find((sentinel) => sentinel.didDocument === notification.remote.didDocument.id))
            setLogo(EventLogos[notification.notification_object.events[0].type])

            if(notification.notification_object.events[0].triggered_sensors[0].value){
                setPlate(notification.notification_object.events[0].triggered_sensors[0].value)
            }

        }
        
    }, [sentinel, notification.remote.didDocument.id, notification.notification_object.events])
    
    async function searchSentinel(notification){
        const sentinel = sentinels_labels.find((sentinel) => sentinel.didDocument === notification.remote.didDocument.id);
        swal({
            
            title: `Sentinel ${sentinel.sentinel_id} - Vehicle ${sentinel.vehicle}`,
            text: `Type: ${notification.notification_object.events[0].type}

            Value: ${plate}

            Confidence: ${notification.notification_object.events[0].accuracy}`,
            content:`<img src=${EventLogos.crowding} alt="" />`,
          });
    }

    return(
        <>
            <HoverDiv onClick={() => searchSentinel(notification)}>
            <StatusContainer>

                    <img src={logo} height={"20px"} width={"20px"} alt={EventLogos.crowding} />
                    <p>{dayjs(notification.server_timestamp).format('DD/MM - HH:mm:ss')}</p>
                    <p>{sentinel.vehicle}</p>
                    <p>{notification.remote.didDocument.id}</p>
                    <p>{notification.notification_object.events[0].type}</p>
                    <p>{notification.notification_object.events[0].accuracy}</p>
                    
            </StatusContainer>
            <ItemSeparator/>
            </HoverDiv>
        </>
    )
}

const StatusContainer = styled.div`
    display: flex;
    justify-content: space-around;

`
const ItemSeparator = styled.div`
    height: 3px;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    background-color: #f5f5f5;
`
const HoverDiv = styled.div`
    :hover{
        background-color: lightgray;
        cursor: pointer;
    }

`