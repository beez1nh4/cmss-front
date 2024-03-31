import styled from "styled-components"
import { useTrafficLight } from "../../../contexts/TrafficLightContext"
import { mainColor } from "../../../constants/colors";
import Rings from "../../../components/Rings";

//render display with plan
export default function PlanDisplay() {
    const {trafficLights, chosenTrafficLight, setChosenTrafficLight} = useTrafficLight();

    const plan = {
        id: 1,
        senderId: "d2c79348ec4542e1",
        name: "Plano 1",
        startTime: "00:00:00",
        endTime: "23:59:59",
        rings: [{
            number: 1,
            betweenGreensAB: 39,
            betweenGreensBA: 12,
            stageA: [{
                groupNumber: 1,
                pictogram: 0,
                securityTime: 5,
                duration: 40,
                intergreenYellow: 3,
                intergreenRed: 2},
                {
                groupNumber: 2,
                pictogram: 0,
                securityTime: 5,
                duration: 40,
                intergreenYellow: 3,
                intergreenRed: 2},
                {groupNumber: 3,
                    pictogram: 3},
                {groupNumber: 4,
                    pictogram: 3},
                ],
            stageB: [{
                groupNumber: 1,
                pictogram: 1},
                {
                groupNumber: 2,
                pictogram: 1},{
                groupNumber: 3,
                pictogram: 2,
                securityTime: 5,
                duration: 12,
                intergreenYellow: 10,
                intergreenRed: 2},
                {
                groupNumber: 4,
                pictogram: 2,
                securityTime: 5,
                duration: 12,
                intergreenYellow: 10,
                intergreenRed: 2},]
        },
        {
            number: 2,
            betweenGreensAB: 37,
            betweenGreensBA: 10,
            stageA: [
                {groupNumber: 5,
                    pictogram: 3},
                ],
            stageB: [
                {
                groupNumber: 5,
                pictogram: 2,
                securityTime: 5,
                duration: 12,
                betweenGreensYellow: 10,
                betweenGreensRed: 2},]
        }
        ,
    ]       
    }

    return (
        <>
            <DisplayContainer>

                <>
                <Title>Plano Atual {chosenTrafficLight.name}: {plan.name}</Title>
                <p>Atuação do plano: {plan.startTime} - {plan.endTime}</p>
                {plan.rings.map((ring)=> <Rings key={ring.number} id={ring.number} ring={ring}></Rings>)}
                </>
           </DisplayContainer>
        
        </>
        
    )
}

const DisplayContainer = styled.div`
    padding: 25px;
    height: 86vh;
    width: 100%;
    overflow-y: scroll;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    margin: 20px;
    background-color: white;
  
    @media (max-width: 600px) {
      height: calc(100vh - 80px);
      padding: 20px;
    }
  `;
const Title = styled.div`
    font-size: 22px;
    margin-bottom: 10px;
    color: ${mainColor};
    font-weight: bold;
    margin-bottom: 20px;
`
