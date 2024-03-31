import styled from "styled-components"
import { mainColor } from "../../constants/colors"
import SignalGroup from "./SignalGroup"

export default function Rings({ring}) {
    return(
        <>
        <RingContainer>
        <Title>Anel {ring.number}</Title>
                <ItemSeparator/>
                <StageTitle>
                    <p>Estágio A</p>
                    <p>Entreverdes A→B: {ring.betweenGreensAB} s</p>
                </StageTitle>              
                <AlignContainer>
                {ring.stageA.map((signalGroup)=> <SignalGroup key={signalGroup.groupNumber} id={signalGroup.id} signalGroup={signalGroup}></SignalGroup>)}
                </AlignContainer>
                <ItemSeparator/>
                <StageTitle>
                    <p>Estágio B</p>
                    <p>Entreverdes B→A: {ring.betweenGreensBA} s</p>
                </StageTitle>
                <AlignContainer>
                {ring.stageB.map((signalGroup)=> <SignalGroup key={signalGroup.groupNumber} id={signalGroup.id} signalGroup={signalGroup}></SignalGroup>)}
                </AlignContainer>
        </RingContainer>
        </>
    )
}

const RingContainer = styled.div`
    display: block;
    background-color: #f5f5f5;
    padding: 20px;
    margin-top: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
`
const AlignContainer = styled.div`
    display: flex;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
    color: ${mainColor};
`
const ItemSeparator = styled.div`
    height: 1px;
    margin-bottom: 15px;
    width: 100%;
    background-color: darkgray;
`
const StageTitle = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    & p:first-child{
        font-size: 17px;
        font-weight: bold;
        color: ${mainColor};
    }
`