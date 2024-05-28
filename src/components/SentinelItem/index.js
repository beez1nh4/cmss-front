import dayjs from "dayjs"
import styled from "styled-components"
import swal from "sweetalert";
import { useSentinel } from "../../contexts/SentinelContext";
import axios from "axios";

export default function SentinelItem({sentinel}) {
    const {sentinels, selectedSentinel, setSelectedSentinel, notifications, setNotifications} = useSentinel();
    const getNotificationByDidDocument = (didDocument) => {
        const promise = axios.get(process.env.REACT_APP_API_BASE_URL + '/notification/'+ didDocument);
        promise.then((res) => {
            //console.log(res.data);
            setNotifications(res.data);
        });
    
        promise.catch((err) => {
            console.log('err', err.response.data);
        }); 
    }

    return(
        <>
            <HoverDiv onClick={() => getNotificationByDidDocument(sentinel.didDocument)}>
            <StatusContainer>
                    <p>{sentinel.sentinel_id}</p>
                    <p>{sentinel.didDocument}</p>
                    <p>{sentinel.vehicle}</p>
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