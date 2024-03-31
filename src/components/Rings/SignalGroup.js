import styled from "styled-components"
import pictogram0 from "../../assets/images/greentf.png"
import pictogram1 from "../../assets/images/redtf.png"
import pictogram2 from "../../assets/images/pedestriangreentf.png"
import pictogram3 from "../../assets/images/pedestrianredtf.png"
import { Tooltip } from "@material-ui/core"

export default function SignalGroup({signalGroup}) {
    return(
        <SignalGroupContainer>
                    <Tooltip title={`Grupo Focal ${signalGroup.groupNumber}`} >
                    <p>G{signalGroup.groupNumber}</p>
                    </Tooltip>
                    <InfoContainer1>
                    <img src={setPictogram(signalGroup.pictogram)} alt="pictogram" height={100} />
                    {(signalGroup.pictogram === 0 || signalGroup.pictogram === 2) ?
                        <InfoContainer2>
                        <InfoContainer3>
                        <Tooltip title="Duração de um período com indicação luminosa verde." arrow>
                        <p>VERDE</p>
                        </Tooltip>
                        <Tooltip title="Valor mínimo admissível para a duração do tempo de verde que atende a um grupo de movimentos, por razões de segurança." arrow>
                        <p>Segurança: {signalGroup.securityTime} s</p>
                        </Tooltip>
                        {signalGroup.pictogram === 0 ?
                            <Tooltip title="Duração de um período com indicação luminosa verde do Estágio A." arrow>
                            <p>Duração A→B: {signalGroup.duration} s</p>
                            </Tooltip>
                            :
                            <Tooltip title="Duração de um período com indicação luminosa verde do Estágio B." arrow>
                            <p>Duração B→A: {signalGroup.duration} s</p>
                            </Tooltip>
                        }
                        </InfoContainer3>
                        <InfoContainer3>
                        <Tooltip title="Intervalo de tempo compreendido entre o final do verde de um estágio e o início do verde do estágio subsequente inserido com o propósito de evitar acidentes entre os usuários que estão perdendo seu direito de passagem e aqueles que vão passar a ganhá-lo." arrow>
                        <p>ENTREVERDES</p>
                        </Tooltip>
                        <Tooltip title="Duração de um período com indicação luminosa amarela." arrow>
                        <p>Amarelo: {signalGroup.intergreenYellow} s</p>
                        </Tooltip>
                        <Tooltip title="Intervalo de tempo entre o final do amarelo (ou do vermelho intermitente) de um estágio e o início do verde do próximo estágio em que todos os grupos focais apresentam indicação luminosa vermelha." arrow>
                        <p>Verm limpeza: {signalGroup.intergreenRed} s</p>
                        </Tooltip>
                        </InfoContainer3>
                        </InfoContainer2>
                           :
                        <BlankContainer></BlankContainer>               
                    }         
                    </InfoContainer1>
        </SignalGroupContainer>
    )
}

const SignalGroupContainer = styled.div`
    padding: 15px;
    align-items: center;
    justify-content: space-around;
    margin-right: 18px;
    margin-bottom: 30px;
    & p:hover{
        font-size: 12px;
        font-weight: bold;
        color: darkgray;
    }
`
const InfoContainer1 = styled.div`
    margin-top: 10px;
    display: flex;
`
const InfoContainer2 = styled.div`
    display: block;
    font-size: small;
    margin-top: 10px;
    margin-left: 10px;
`
const InfoContainer3 = styled.div`
    background-color: white;
    margin-bottom: 5px;
    padding: 4px;
    border-radius: 5px;
    border: 1px solid darkgray;
    & p:first-child{
        font-weight: bold;
    }
`
const BlankContainer = styled.div`
    width: 140px;
`
function setPictogram(number){
    const pictograms = [pictogram0, pictogram1, pictogram2, pictogram3];
    return pictograms[number];
}