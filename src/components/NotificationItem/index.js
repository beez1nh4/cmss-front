import dayjs from "dayjs"
import styled from "styled-components"

export default function NotificationItem({notification}) {
    console.log('notif', notification)
    return(
        <>
            <HoverDiv>
            <StatusContainer>
                    <p>{dayjs(notification.server_timestamp).format('DD/MM - HH:mm:ss')}</p>
                    <p>{notification._id}</p>
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