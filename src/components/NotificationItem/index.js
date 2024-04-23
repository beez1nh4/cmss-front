import dayjs from "dayjs"
import styled from "styled-components"
import swal from "sweetalert";
import { sentinels_labels } from "../../constants/sentinelsLabels";
import { useEffect, useState } from "react";

export default function NotificationItem({notification}) {
    const [sentinel, setSentinel] = useState({sentinel_id: 0, didDocument: "did", vehicle: "NA"});

    useEffect(() => {
        if (sentinels_labels.find((sentinel) => sentinel.didDocument === notification.remote.didDocument.id)){
            setSentinel(sentinels_labels.find((sentinel) => sentinel.didDocument === notification.remote.didDocument.id))
        }
    }, [sentinel])
    
    async function searchSentinel(notification){
        const sentinel = sentinels_labels.find((sentinel) => sentinel.didDocument === notification.remote.didDocument.id);
        swal({
            title: sentinel,
          });
    }

    return(
        <>
            <HoverDiv onClick={() => searchSentinel(notification)}>
            <StatusContainer>
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