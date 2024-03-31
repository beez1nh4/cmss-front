import styled from "styled-components"
import { useTrafficLight } from "../../../contexts/TrafficLightContext"
import { mainColor } from "../../../constants/colors";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import TrafficLightItem from "../../../components/TrafficLightItem";
import { useNavigate } from "react-router-dom";
import imageTest from "../../../assets/images/PedestrianInCrosswalk.gif"
import initial_situation from "../../../assets/images/initial_situation.gif"
import pedestrian_in_crosswalk from "../../../assets/images/PedestrianInCrosswalk.gif"
import pedestrian_on_sidewalk_green from "../../../assets/images/PedestrianOnSidewalkGreen.gif"
import pedestrian_on_sidewalk_red from "../../../assets/images/PedestrianOnSidewalkRed.gif"
import pedestrian_out_crosswalk_green from "../../../assets/images/PedestrianOutCrosswalkGreen.gif"
import pedestrian_out_crosswalk_red from "../../../assets/images/PedestrianOutCrosswalkRed.gif"
import pedestrian_walking_on_sidewalk from "../../../assets/images/PedestrianWalkingOnSideWalk.gif"
import areas from "../../../assets/images/areas.gif"
import waiting_area_1 from "../../../assets/images/WaitingArea1.gif"
import waiting_area_2 from "../../../assets/images/WaitingArea2.gif"
import waiting_area_3 from "../../../assets/images/WaitingArea3.gif"
import waiting_area_4 from "../../../assets/images/WaitingArea4.gif"
import crossing_walk_1 from "../../../assets/images/Crossing1.gif"
import crossing_walk_2 from "../../../assets/images/Crossing2.gif"
import { PedestrianChart } from "../Chart";
import { Tooltip } from "@material-ui/core"

//render different crosswalk situations
export default function CrosswalkDisplay() {
    //const { selectedTrafficLight, setSelectedTrafficLight} = useTrafficLight();
    const { chosenTrafficLight, getPedestrian, setGetPedestrian } = useTrafficLight();
    const navigate = useNavigate();
    const [date, setDate] = useState("")
    const [image, setImage] = useState(initial_situation)

    useEffect(() => {
        if (chosenTrafficLight !== undefined){

            const convertDate = dayjs.unix(chosenTrafficLight.timestamp);
            setDate(dayjs(convertDate).locale('pt-br').format('HH:mm:ss'))

        }
    }, [chosenTrafficLight])

    return (
        <>
            <DisplayContainer>

                {getPedestrian==true ?
                 <>
                <Title>Pedestres: {chosenTrafficLight.name}</Title>
                <p>Horário da informação: {date}</p>
                <PedestrianInfoContainer>
                <div>
                    <div>Quantidade máxima na área de influência da faixa de pedestres</div>
                    <div>{chosenTrafficLight.maxPedestrianInCrosswalk} pedestres</div>
                </div>
                </PedestrianInfoContainer>
                {/* <BackButton onClick={()=> setSelectedTrafficLight(undefined)}>Return</BackButton> */}
{/*                 <img src={imageTest} width="550px"alt="" />
 */}                </>
                
                :
                <>
                <Title style={{marginBottom: "10px"}}>Informações </Title>
                
                <InfoContainer >
                <ButtonContainer style={{marginRight: "15px"}}>
                <p >Situação ilustrativa</p>
                    <img src={image}  width="600px" alt="simulation" />
                    <p>Situações</p>
                    <ButtonContainer2>
                        <div>
                        <Button color={mainColor} onClick={()=> setImage(pedestrian_in_crosswalk)}>Pedestres atravessando</Button>
                        <Button color="green" onClick={()=> setImage(pedestrian_on_sidewalk_green)}>Pedestres na área de espera: Verde</Button>
                        <Button color="red" onClick={()=> setImage(pedestrian_on_sidewalk_red)}>Pedestres na área de espera: Vermelho</Button>
                        <Button color="gray" onClick={()=> setImage(initial_situation)}>Situação estática</Button>
                        </div>
                        <div>
                        <Button color={mainColor} onClick={()=> setImage(pedestrian_walking_on_sidewalk)}>Pedestres na calçada</Button>
                        <Button color="green" onClick={()=> setImage(pedestrian_out_crosswalk_green)}>Pedestres atravessando fora: Verde</Button>
                        <Button color="red" onClick={()=> setImage(pedestrian_out_crosswalk_red)}>Pedestres atravessando fora: Vermelho</Button>
                        <Button color="gray" onClick={()=> setImage(areas)}>Indicações de áreas</Button>
                        </div>
                    </ButtonContainer2>
                </ButtonContainer>
                <ChartContainer>
                { image === initial_situation &&
                <>
                <Tooltip arrow placement="top" title={<>Simulação ilustrativa <br/> <img src={pedestrian_in_crosswalk} width="280px" alt="pedestrian" /></>}>
                <TextIcon>
                    <img src="https://static.thenounproject.com/png/35166-200.png" width="30px" alt="pedestrian" />
                    <p>Quantidade máxima na área de influência da faixa de pedestres: 4 pedestres</p>
                </TextIcon>
                </Tooltip>
                <Tooltip arrow placement="top" title={<>Simulação ilustrativa <br/> <img src={pedestrian_on_sidewalk_red} width="280px" alt="pedestrian"/></>}>
                <TextIcon>
                    <img src="https://cdn-icons-png.flaticon.com/512/32/32441.png" width="30px" alt="waiting" />
                    <p>Quantidade máxima que aguardou na área de espera com semáforo fechado para pedestres: 5 pedestres</p>
                </TextIcon>
                </Tooltip>
                <Tooltip arrow placement="top" title={<>Simulação ilustrativa <br/> <img src={pedestrian_on_sidewalk_red} width="280px" alt="pedestrian"/></>}>
                <TextIcon>
                    <img src="https://cdn0.iconfinder.com/data/icons/zeir-miscellaneous-013/64/waiting_wait_in_process-512.png" width="30px" alt="waiting" />
                    <p>Tempo médio de espera na área de espera com semáforo vermelho para pedestres: 6 segundos</p>
                </TextIcon>
                </Tooltip>  
                </>
                }
                { image === pedestrian_in_crosswalk &&
                <>
                <Tooltip arrow placement="top" title={<>Simulação ilustrativa <br/> <img src={crossing_walk_1} width="280px" alt="pedestrian" /></>}>
                <TextIcon>
                    <img src="https://static.thenounproject.com/png/35166-200.png" width="30px" alt="pedestrian" />
                    <p>Quantidade máxima na área de influência - Faixa de pedestres 1: 3 pedestres</p>
                </TextIcon>
                </Tooltip>
                <Tooltip arrow placement="top" title={<>Simulação ilustrativa <br/> <img src={crossing_walk_2} width="280px" alt="pedestrian" /></>}>
                <TextIcon>
                    <img src="https://static.thenounproject.com/png/35166-200.png" width="30px" alt="pedestrian" />
                    <p>Quantidade máxima na área de influência - Faixa de pedestres 2: 4 pedestres</p>
                </TextIcon>
                </Tooltip>
                </>
                }
                { image === pedestrian_on_sidewalk_red &&
                <>
                <Tooltip arrow placement="top" title={<>Simulação ilustrativa <br/> <img src={waiting_area_1} width="280px" alt="pedestrian" /></>}>
                <TextIcon>
                    <img src="https://cdn-icons-png.flaticon.com/512/32/32441.png" width="30px" alt="pedestrian" />
                    <p>Quantidade média na área de espera com semáforo fechado para pedestres - Área 1 : 1 pedestre</p>
                </TextIcon>
                </Tooltip>
                <Tooltip arrow placement="top" title={<>Simulação ilustrativa <br/> <img src={waiting_area_1} width="280px" alt="pedestrian" /></>}>
                <TextIcon>
                    <img src="https://cdn0.iconfinder.com/data/icons/zeir-miscellaneous-013/64/waiting_wait_in_process-512.png" width="30px" alt="pedestrian" />
                    <p>Tempo médio de espera na área de espera com semáforo vermelho para pedestres - Área 1: 4 segundos </p>
                </TextIcon>
                </Tooltip>
                <Tooltip arrow placement="top" title={<>Simulação ilustrativa <br/> <img src={waiting_area_2} width="280px" alt="pedestrian" /></>}>
                <TextIcon>
                    <img src="https://cdn-icons-png.flaticon.com/512/32/32441.png" width="30px" alt="pedestrian" />
                    <p>Quantidade média na área de espera com semáforo fechado para pedestres - Área 2 : 0 pedestres</p>
                </TextIcon>
                </Tooltip>
                <Tooltip arrow placement="top" title={<>Simulação ilustrativa <br/> <img src={waiting_area_2} width="280px" alt="pedestrian" /></>}>
                <TextIcon>
                    <img src="https://cdn0.iconfinder.com/data/icons/zeir-miscellaneous-013/64/waiting_wait_in_process-512.png" width="30px" alt="pedestrian" />
                    <p>Tempo médio de espera na área de espera com semáforo vermelho para pedestres - Área 2: 3 segundos </p>
                </TextIcon>
                </Tooltip>
                <Tooltip arrow placement="top" title={<>Simulação ilustrativa <br/> <img src={waiting_area_3} width="280px" alt="pedestrian" /></>}>
                <TextIcon>
                    <img src="https://cdn-icons-png.flaticon.com/512/32/32441.png" width="30px" alt="pedestrian" />
                    <p>Quantidade média na área de espera com semáforo fechado para pedestres - Área 3 : 1 pedestre</p>
                </TextIcon>
                </Tooltip>
                <Tooltip arrow placement="top" title={<>Simulação ilustrativa <br/> <img src={waiting_area_3} width="280px" alt="pedestrian" /></>}>
                <TextIcon>
                    <img src="https://cdn0.iconfinder.com/data/icons/zeir-miscellaneous-013/64/waiting_wait_in_process-512.png" width="30px" alt="pedestrian" />
                    <p>Tempo médio de espera na área de espera com semáforo vermelho para pedestres - Área 3: 4 segundos </p>
                </TextIcon>
                </Tooltip>
                <Tooltip arrow placement="top" title={<>Simulação ilustrativa <br/> <img src={waiting_area_4} width="280px" alt="pedestrian" /></>}>
                <TextIcon>
                    <img src="https://cdn-icons-png.flaticon.com/512/32/32441.png" width="30px" alt="pedestrian" />
                    <p>Quantidade média na área de espera com semáforo fechado para pedestres - Área 4 : 2 pedestres</p>
                </TextIcon>
                </Tooltip>
                <Tooltip arrow placement="top" title={<>Simulação ilustrativa <br/> <img src={waiting_area_4} width="280px" alt="pedestrian" /></>}>
                <TextIcon>
                    <img src="https://cdn0.iconfinder.com/data/icons/zeir-miscellaneous-013/64/waiting_wait_in_process-512.png" width="30px" alt="pedestrian" />
                    <p>Tempo médio de espera na área de espera com semáforo vermelho para pedestres - Área 4: 1 segundo </p>
                </TextIcon>
                </Tooltip>
                
                </>
                }

                <Title style={{marginTop: "10px"}}>Gráfico</Title>
                <PedestrianChart />
                </ChartContainer>
                </InfoContainer>
                </>
                }
           
           </DisplayContainer>
            
        </>
        
    )
}

const DisplayContainer = styled.div`
    display: block;
    height: 800px;
    width: 1350px;
    padding: 25px;
    margin: 20px;
    margin-left: 0px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    overflow-y: scroll;

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
const Button = styled.button`
    height: 25%;
    width: 90%;
    padding: 10px;
    margin-top: 7px;
    margin-bottom: 2%;
    font-family: "Lexend Deca", sans-serif;
    background-color: ${(props)=>props.color};
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
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    & p {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: medium;
        color: ${mainColor};
        font-weight: bold;
    }
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const ButtonContainer2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 630px;
`
const TextIcon = styled.div`
    width: 630px;
    display: flex;
    flex-direction: row;
    margin: 10px 10px 0 0;
    font-size: 13.5px;
    align-items: center;
    & img {
        margin-right: 4px;
    }
`
const ChartContainer = styled.div`
    width: 500px;
`