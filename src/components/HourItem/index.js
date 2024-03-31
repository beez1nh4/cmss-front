import styled from "styled-components"
import { useTrafficLight } from "../../contexts/TrafficLightContext"
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export default function HourItem({hourItem}) {
    
    const {setChosenTrafficLight} = useTrafficLight();
    const navigate = useNavigate();

    return (
        <>
            <Item>
            <p>{dayjs(dayjs.unix(hourItem.startDate).add(3,'h')).format('HH:mm')} - {dayjs(dayjs.unix(hourItem.endDate).add(3,'h')).format('HH:mm')}</p>
            {/*       {dayjs(dayjs.unix(pedestrianDay.data[1].startDate)).locale('pt-BR').format('dddd, DD/MM, YYYY, HH:mm:ss')} */} 
            <p>{hourItem.numPedestrianInCrosswalk}</p>   
            </Item>
            <ItemSeparator/>
        </>
    )
}

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    padding-bottom: 20px;
    &:hover {
    background-color: lightblue;
    opacity: 0.5;
  }
`
const ItemSeparator = styled.div`
    height: 3px;
    width: 100%;
    background-color: #f5f5f5;
`

