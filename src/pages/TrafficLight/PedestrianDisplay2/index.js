import styled from "styled-components"
import { useTrafficLight } from "../../../contexts/TrafficLightContext"
import { mainColor } from "../../../constants/colors";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import TrafficLightItem from "../../../components/TrafficLightItem";
import { useNavigate } from "react-router-dom";
import imageTest from "../../../assets/images/PedestrianInCrosswalk.gif"

export default function PedestrianDisplay2() {
    //const { selectedTrafficLight, setSelectedTrafficLight} = useTrafficLight();
    const { chosenTrafficLight, getPedestrian, setGetPedestrian } = useTrafficLight();
    const navigate = useNavigate();
    const [date, setDate] = useState("")

    useEffect(() => {
        if (chosenTrafficLight !== undefined){

            const convertDate = dayjs.unix(chosenTrafficLight.timestamp);
            setDate(dayjs(convertDate).locale('pt-br').format('HH:mm:ss'))

        }
    }, [chosenTrafficLight])

    return (
        <>
            <DisplayContainer>

                {getPedestrian===true ?
                 <>
                <Title>Pedestres: {chosenTrafficLight.name}</Title>
                <p>Horário da informação: {date}</p>
                <PedestrianInfoContainer>
                <div>
                    <div>Quantidade máxima na área de influência da faixa de pedestres</div>
                    <div>{chosenTrafficLight.maxPedestrianInCrosswalk} pedestres</div>
                </div>
                <div>
                    <div>Quantidade média atravessando fora da faixa de pedestres com semáforo aberto para pedestres</div>
                    <div>{chosenTrafficLight.numPedestrianOutCrosswalk_Green} pedestres</div>
                </div>
                <div>
                    <div>Quantidade média atravessando fora da faixa de pedestres com semáforo fechado para pedestres</div>
                    <div>{chosenTrafficLight.numPedestrianOutCrosswalk_Red } pedestres</div>
                </div>
                <div>
                    <div>Quantidade média que aguardou na área de espera com semáforo fechado para pedestres</div>
                    <div>{chosenTrafficLight.numPedestrianOnSidewalk} pedestres</div>
                </div>
                <div>
                    <div>Quantidade máxima que aguardou na área de espera com semáforo fechado para pedestres</div>
                    <div>{chosenTrafficLight.maxPedestrianOnSidewalk } pedestres</div>
                </div>
                <div>
                    <div>Quantidade média na calçada fora da área de espera</div>
                    <div>{chosenTrafficLight.numPedestrianWalkingOnSideWalk} pedestres</div>
                </div>
                <div>
                    <div>Quantidade média na faixa de pedestres com semáforo aberto para pedestres</div>
                    <div>{chosenTrafficLight.numPedestrianInCrosswalk_Green} pedestres</div>
                </div>
                <div>
                    <div>Quantidade média na faixa de pedestres com semáforo fechado para pedestres</div>
                    <div>{chosenTrafficLight.numPedestrianInCrosswalk_Red} pedestres</div>
                </div>
                <div>
                    <div>Tempo médio de espera na área de espera com semáforo verde para pedestres</div>
                    <div>{chosenTrafficLight.avgWaitingTime_Green } segundos</div>
                </div>
                <div>
                    <div>Tempo médio de espera na área de espera com semáforo vermelho para pedestres</div>
                    <div>{chosenTrafficLight.avgWaitingTime_Red} segundos</div>
                </div>
                </PedestrianInfoContainer>
                {/* <BackButton onClick={()=> setSelectedTrafficLight(undefined)}>Return</BackButton> */}
{/*                 <img src={imageTest} width="550px"alt="" />
 */}                </>
                
                :
                <>
                <Title>Mais opções: </Title>
{/*                 <GetButton onClick={()=>setGetPedestrian(false)}>Obter volume de outro dia</GetButton>
 */}                
                    <GetButton onClick={()=>navigate("/pedestrian")}>Obter mais informações sobre pedestres</GetButton>
                    <GetButton onClick={()=>navigate("/")}>Voltar ao painel principal</GetButton>
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
const GetButton = styled.button`
    height: 18%;
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