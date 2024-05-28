import dayjs from "dayjs"
import styled from "styled-components"
import Swal from "sweetalert2";
import { sentinels_labels } from "../../constants/sentinelsLabels";
import { useEffect, useState } from "react";
import { EventLogos } from "../../constants/eventLogos";
import { SensorsLogos } from "../../constants/sensorsLogos";
import { mainColor } from "../../constants/colors";

export default function NotificationItem({notification}) {
    const [sentinel, setSentinel] = useState({sentinel_id: 0, didDocument: "did", vehicle: "NA"});
    const [logo, setLogo] = useState()
    const [plate, setPlate] = useState("-")
    const [sensor, setSensor] = useState()

    useEffect(() => {
        if (sentinels_labels.find((sentinel) => sentinel.didDocument === notification.remote.didDocument.id)){
            setSentinel(sentinels_labels.find((sentinel) => sentinel.didDocument === notification.remote.didDocument.id))
            setLogo(EventLogos[notification.notification_object.events[0].type])

            if(notification.notification_object.events[0].triggered_sensors[0].type){
                setSensor(SensorsLogos[notification.notification_object.events[0].triggered_sensors[0].type])
                if(notification.notification_object.events[0].triggered_sensors[0].value){
                    setPlate(notification.notification_object.events[0].triggered_sensors[0].value.substring(0,3)+"-"+notification.notification_object.events[0].triggered_sensors[0].value.substring(3))
                }
            }

        }
        
    }, [sentinel, notification.remote.didDocument.id, notification.notification_object.events])
    
    async function searchSentinel(notification){
        const sentinel = sentinels_labels.find((sentinel) => sentinel.didDocument === notification.remote.didDocument.id);
        Swal.fire({
            
            title: `Sentinel ${sentinel.sentinel_id} - Vehicle ${sentinel.vehicle}`,
            html: `<p style="margin-top:20px;"><strong>Type:</strong> ${notification.notification_object.events[0].type}</p>

            <p style="margin-top:10px;"><strong>Value:</strong> ${plate}</p>

            <p style="margin-top:10px; margin-bottom:20px"><strong>Confidence:</strong> ${notification.notification_object.events[0].accuracy}</p>

            <img src=${sensor} height="30px" alt="sensor_img"/>
            <p style="margin-top:20px;"><strong>Sensor type:</strong> ${notification.notification_object.events[0].triggered_sensors[0].type}</p>
        
            `,
            
            confirmButtonColor: mainColor,
            allowOutsideClick:true,
            imageUrl: logo,
            imageHeight: 50,
            imageAlt: "type_icon"
            //html:`<img src=${sensor} height="20px" width="20px" alt="" />`,
            
            /* content:`<img src=${sensor} height="20px" width="20px" alt="" />`, */
          });
    }

    return(
        <>
            <HoverDiv onClick={() => searchSentinel(notification)}>
            <StatusContainer>
                    {/* <img src={sensor} height={"20px"} width={"20px"} alt={""} /> */}
                    <img src={logo} height={"20px"} width={"20px"} alt={""} />
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