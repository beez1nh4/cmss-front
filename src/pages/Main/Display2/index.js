import styled from "styled-components"
import { useTrafficLight } from "../../../contexts/TrafficLightContext"
import { mainColor } from "../../../constants/colors";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import TrafficLightItem from "../../../components/TrafficLightItem";
import { Tooltip } from "@material-ui/core"
import { useNavigate } from "react-router-dom";
import pedestrian_in_crosswalk from "../../../assets/images/PedestrianInCrosswalk.gif"
import pedestrian_on_sidewalk_red from "../../../assets/images/PedestrianOnSidewalkRed.gif"

export default function Display2() {
    //const { selectedTrafficLight, setSelectedTrafficLight} = useTrafficLight();
    const { trafficLights, selectedTrafficLight } = useTrafficLight();

    const [date, setDate] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedTrafficLight !== undefined){

            const convertDate = dayjs.unix(selectedTrafficLight.timestamp);
            setDate(dayjs(convertDate).locale('pt-br').format('HH:mm:ss'))

        }
    }, [selectedTrafficLight])

    return (
        <>
            <DisplayContainer>

                {selectedTrafficLight === undefined ?
                <>
                <Title>Planos Semafóricos atuais</Title>
                <ItemSeparator/>
                <Item>
                <p>ID</p>
                <p>Nome do semáforo</p>
                <p>Plano</p>
                </Item>
                <ItemSeparator/>
                {trafficLights.map((trafficLight)=> <TrafficLightItem key={trafficLight.id} id={trafficLight.id} trafficLight={trafficLight} type={1}></TrafficLightItem>)}
                </>
                :
                <>
                <Title>Pedestres: {selectedTrafficLight.name}</Title>
                <p>Horário da informação: {date}</p>
                <Tooltip arrow placement="top" title={<>Simulação ilustrativa <br/> <img src={pedestrian_in_crosswalk} width="280px" alt="pedestrian" /></>}>
                <TextIcon>
                    <img src="https://static.thenounproject.com/png/35166-200.png" width="30px" alt="pedestrian" />
                    <p>Quantidade máxima na área de influência da faixa de pedestres: {selectedTrafficLight.maxPedestrianInCrosswalk} pedestres</p>
                </TextIcon>
                </Tooltip>
                <Tooltip arrow placement="top" title={<>Simulação ilustrativa <br/> <img src={pedestrian_on_sidewalk_red} width="280px" alt="pedestrian"/></>}>
                <TextIcon>
                    <img src="https://cdn-icons-png.flaticon.com/512/32/32441.png" width="30px" alt="waiting" />
                    <p>Quantidade máxima que aguardou na área de espera com semáforo fechado para pedestres: {selectedTrafficLight.maxPedestrianOnSidewalk} pedestres</p>
                </TextIcon>
                </Tooltip>
                <Tooltip arrow placement="top" title={<>Simulação ilustrativa <br/> <img src={pedestrian_on_sidewalk_red} width="280px" alt="pedestrian"/></>}>
                <TextIcon>
                    <img src="https://cdn0.iconfinder.com/data/icons/zeir-miscellaneous-013/64/waiting_wait_in_process-512.png" width="30px" alt="waiting" />
                    <p>Tempo médio de espera na área de espera com semáforo vermelho para pedestres: {selectedTrafficLight.avgWaitingTime_Red} segundos</p>
                </TextIcon>
                </Tooltip>
                <MoreButton onClick={()=>{
                navigate(`/pedestrian`);
                }}
                >Acessar mais informações sobre pedestres do semáforo {selectedTrafficLight.name}</MoreButton>

{/*                 <PedestrianInfoContainer>
                <div>
                    <div>Quantidade máxima na área de influência da faixa de pedestres</div>
                    <div>{selectedTrafficLight.maxPedestrianInCrosswalk} pedestres</div>
                </div>
                <div>
                    <div>Quantidade média atravessando fora da faixa de pedestres com semáforo aberto para pedestres</div>
                    <div>{selectedTrafficLight.numPedestrianOutCrosswalk_Green} pedestres</div>
                </div>
                <div>
                    <div>Quantidade média atravessando fora da faixa de pedestres com semáforo fechado para pedestres</div>
                    <div>{selectedTrafficLight.numPedestrianOutCrosswalk_Red } pedestres</div>
                </div>
                <div>
                    <div>Quantidade média que aguardou na área de espera com semáforo fechado para pedestres</div>
                    <div>{selectedTrafficLight.numPedestrianOnSidewalk} pedestres</div>
                </div>
                <div>
                    <div>Quantidade máxima que aguardou na área de espera com semáforo fechado para pedestres</div>
                    <div>{selectedTrafficLight.maxPedestrianOnSidewalk } pedestres</div>
                </div>
                <div>
                    <div>Quantidade média na calçada fora da área de espera</div>
                    <div>{selectedTrafficLight.numPedestrianWalkingOnSideWalk} pedestres</div>
                </div>
                <div>
                    <div>Quantidade média na faixa de pedestres com semáforo aberto para pedestres</div>
                    <div>{selectedTrafficLight.numPedestrianInCrosswalk_Green} pedestres</div>
                </div>
                <div>
                    <div>Quantidade média na faixa de pedestres com semáforo fechado para pedestres</div>
                    <div>{selectedTrafficLight.numPedestrianInCrosswalk_Red} pedestres</div>
                </div>
                <div>
                    <div>Tempo médio de espera na área de espera com semáforo verde para pedestres</div>
                    <div>{selectedTrafficLight.avgWaitingTime_Green } segundos</div>
                </div>
                <div>
                    <div>Tempo médio de espera na área de espera com semáforo vermelho para pedestres</div>
                    <div>{selectedTrafficLight.avgWaitingTime_Red} segundos</div>
                </div>
                </PedestrianInfoContainer> */}
                {/* <BackButton onClick={()=> setSelectedTrafficLight(undefined)}>Return</BackButton> */}
                </>
                }
           
           </DisplayContainer>
            
        </>
        
    )
}

const DisplayContainer = styled.div`
    display: block;
    height: 400px;
    width: 600px;
    padding: 25px;
    margin: 20px;
    margin-left: 0px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    @media (max-width: 1050px) {
      height: calc(100vh - 80px);
      width: 60vh;
      height: 55vh;
      padding: 20px;
    }

    @media (max-width: 900px) {
      height: calc(60vh - 20px);
      width: calc(80vh - 40px);
      padding: 20px;
    }
`
const Title = styled.div`
    font-size: 22px;
    margin-bottom: 10px;
    color: ${mainColor};
    font-weight: bold;
    margin-bottom: 20px;
`
const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    padding-bottom: 20px;
    font-weight: bold;
`
const ItemSeparator = styled.div`
    height: 3px;
    width: 100%;
    background-color: #f5f5f5;
`
const PedestrianInfoContainer = styled.div`
    font-size: 12px;
    margin-top: 15px;
    & div{
        display: flex;
        justify-content: space-between;
        padding: 2px;
        border: 1px solid darkgray;
        & div:first-child{
            width: 84%;
            text-align: justify;
            padding: 1px 15px 0px 0px;
            border-right: 1px solid darkgray;
        } & div {
            border: 0;
        } & div:last-child{
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding-right: 5px;
        }
    }& div:hover{
            background-color: lightgray;
            font-size: 12.5px;
            font-weight: bold;
        }

    @media (max-width: 1050px) {
      font-size: x-small;
    }
`
const TextIcon = styled.div`
    display: flex;
    flex-direction: row;
    margin: 25px 10px 0 0;
    font-size: 13.5px;
    align-items: center;
    & img {
        margin-right: 4px;
    }
`
const MoreButton = styled.button`
    height: 15%;
    width: 95%;
    padding: 10px;
    margin: 20px;
    margin-top: 5%;
    font-family: "Lexend Deca", sans-serif;
    background-color: ${mainColor};
    color: white;
    font-weight: bold;
    font-size: 15px;
    border: 0;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    &:hover {
    background-color: lightblue;
    cursor: pointer;
    opacity: 0.7;
    }
    @media (max-width: 1050px) {
      font-size: x-small;
    }
`