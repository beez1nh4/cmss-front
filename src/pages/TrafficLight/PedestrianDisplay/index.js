import styled from "styled-components"
import { useTrafficLight } from "../../../contexts/TrafficLightContext"
import { mainColor } from "../../../constants/colors";
import Input from "../../../components/Form/Input";
import Button from "../../../components/Form/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";
import HourItem from "../../../components/HourItem";

const pedestrianDay = {
	id: 1,
    name: "CITI",
	senderId: "e8feb8f994fd88b2",
	day: 26,
	month: 10,
	year: 2023,
	data:[{startDate: 1698278400,
  endDate: 1698282000,
  numPedestrianInCrosswalk: 10
},
{startDate: 1698282000,
  endDate:1698285600,
  numPedestrianInCrosswalk: 15
},
{startDate: 1698285600,
  endDate:1698289200,
  numPedestrianInCrosswalk: 17
},
{startDate: 1698289200,
  endDate:1698292800,
  numPedestrianInCrosswalk: 14
},
{startDate: 1698292800,
  endDate:1698296400,
  numPedestrianInCrosswalk: 17
},
{startDate: 1698296400,
  endDate:1698300000,
  numPedestrianInCrosswalk: 22
},
{startDate: 1698300000,
  endDate:1698303600,
  numPedestrianInCrosswalk: 14
},
{startDate: 1698303600,
  endDate:1698307200,
  numPedestrianInCrosswalk: 10
},
{startDate:1698307200,
  endDate:1698310800,
  numPedestrianInCrosswalk: 15
},
{startDate: 1698310800,
  endDate:1698314400,
  numPedestrianInCrosswalk: 17
},
{startDate:1698314400,
  endDate:1698318000,
  numPedestrianInCrosswalk: 14
},
{startDate:1698318000,
  endDate:1698321600,
  numPedestrianInCrosswalk: 17
},
{startDate:1698321600,
  endDate:1698325200,
  numPedestrianInCrosswalk: 18
},
{startDate:1698325200,
  endDate:1698328800,
  numPedestrianInCrosswalk: 14
},
{startDate: 1698328800,
  endDate:1698332400,
  numPedestrianInCrosswalk: 10
},
{startDate:1698332400,
  endDate:1698336000,
  numPedestrianInCrosswalk: 15
},
{startDate:1698336000,
  endDate:1698339600,
  numPedestrianInCrosswalk: 17
},
{startDate:1698339600,
  endDate:1698343200,
  numPedestrianInCrosswalk: 14
},
{startDate:1698343200,
  endDate:1698346800,
  numPedestrianInCrosswalk: 17
},
{startDate:1698346800,
  endDate:1698350400,
  numPedestrianInCrosswalk: 18
},
{startDate:1698350400,
  endDate:1698354000,
  numPedestrianInCrosswalk: 14
},
{startDate:1698354000,
  endDate:1698357600,
  numPedestrianInCrosswalk: 10
},
{startDate:1698357600,
  endDate:1698361200,
  numPedestrianInCrosswalk: 15
}]
}

export default function PedestrianDisplay() {
    const {trafficLights, selectedTrafficLight, setSelectedTrafficLight, setGetPedestrian, getPedestrian} = useTrafficLight();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [year, setYear] = useState('');
    const navigate = useNavigate();
  
    async function submit(event) {
      event.preventDefault();
      console.log(name, password)
      try {
        /* const userData = await signIn(email, password);
  
        setUserData(userData);
  
        toast('Login realizado com sucesso!');
        navigate('/dashboard'); */
      } catch (err) {
        /* toast('Não foi possível fazer o login!'); */
      }
    }
    return (
        <>
            <DisplayContainer>
                {getPedestrian==true ? 
                <>
                <Title>Obter volumes de pedestres</Title>
                <p>Insira a data desejada:</p>
                <form onSubmit={submit}>
                <Input label="Dia" type="text" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
                <Input
                  label="Mês"
                  type="text"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input label="Ano" type="text" fullWidth value={year} onChange={(e) => setYear(e.target.value)} />
{/*                 <Button type="submit" color="primary" fullWidth  >
                  Obter
                </Button>  */}         
                <GetButton onClick={()=>setGetPedestrian(true)}>Obter</GetButton>
                </form>
                </>
                :
                <>
                <Title>Volumes de Pedestres</Title>
                <Item>
                <p>Hora</p>
                <p>Nº de pedestres</p>
                </Item>
                <ItemSeparator/>
                {pedestrianDay.data.map((hourItem)=> <HourItem key={hourItem.id} id={hourItem.id} hourItem={hourItem} ></HourItem>)}
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
    overflow-y: scroll;

    @media (max-width: 1050px) {
      height: calc(100vh - 80px);
      width: 60vh;
      height: 40vh;
      padding: 20px;
      font-size: x-small;
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
const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    padding-bottom: 20px;
`
const ItemSeparator = styled.div`
    height: 3px;
    width: 100%;
    background-color: #f5f5f5;
`

