import dayjs from "dayjs"
import styled from "styled-components"

export default function SentinelItem({sentinel}) {
    return(
        <>
            <HoverDiv>
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