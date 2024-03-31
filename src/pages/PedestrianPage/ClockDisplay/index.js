import styled from "styled-components"
import { useTrafficLight } from "../../../contexts/TrafficLightContext"
import { mainColor } from "../../../constants/colors";
import Input from "../../../components/Form/Input";
import Button from "../../../components/Form/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HourItem from "../../../components/HourItem";
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import defineQuarter from "../../../constants/functions/defineQuarter";
import axios from "axios";
import formatTime from "../../../constants/functions/formatTime";
import swal from "sweetalert";

export default function ClockDisplay() {
    const {trafficLights, selectedTrafficLight, setSelectedTrafficLight, setGetPedestrian, getPedestrian} = useTrafficLight();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [pageDate, setPageDate] = useState('Terça-feira, 19/3, 2024, 14:14:15')
    const navigate = useNavigate();

    async function submit(event) {
      event.preventDefault();
      console.log('date:',new Date(date).toLocaleDateString('pt-US'))
      console.log('time:',new Date(time).getHours(), new Date(time).getMinutes())
      const quarter = defineQuarter(new Date(time).getHours(), new Date(time).getMinutes());
      const formattedTime = formatTime(new Date(date).toLocaleDateString('pt-US'));
      swal({
        title: "Esse período não existe!",
      });
/*       const promise = axios.get(process.env.REACT_APP_API_BASE_URL + `/pedestrianquarter/${quarter}${formattedTime}`);
      promise.then((res) => {
        console.log(res.data);
        console.log('start', res.data[0].startDate)
        console.log('end', res.data[0].endDate)

        const dateBR = dayjs(res.data[0].startDate).locale('pt-BR').format('dddd, DD/MM, YYYY, HH:mm:ss');
        const dateBR2 = dayjs(res.data[0].endDate).locale('pt-BR').format('HH:mm:ss');
        setPageDate(dateBR[0].toUpperCase() + dateBR.substring(1) + ' - ' +dateBR2);
      });  */
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
                <>
                <Title>Informações sobre pedestres</Title>
                <p>Data e horário: {pageDate}</p>
                <Title style={{marginTop: "50px", fontSize: "14px"}}>Obter informações de uma data específica</Title>
                <p>Insira a data e horário desejados:</p>
                <form onSubmit={submit}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Escolha a data" defaultValue={dayjs()} selected={date} onChange={(e) => setDate(e)} /> 
                  <StaticTimePicker label="Escolha o horário" sx={{ width: "100% " }} selected={time} onChange={(e) => setTime(e)}/>
                </LocalizationProvider>        
              <GetButton type="submit">Obter</GetButton>
              </form>
              </>
           </DisplayContainer>
            
        </>
        
    )
}


const DisplayContainer = styled.div`
    display: block;
    height: 800px;
    width: 420px;
    padding: 25px;
    margin: 20px;
    margin-left: 20px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    overflow-y: none;
    & p{
      font-size: 14px;
      margin-bottom: 15px;
    }

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
    font-size: 18px;
    margin-bottom: 10px;
    color: ${mainColor};
    font-weight: bold;
    margin-bottom: 20px;
`
const GetButton = styled.button`
    height: 6%;
    width: 90%;
    padding: 10px;
    margin: 20px;
    margin-top: 5%;
    font-family: "Lexend Deca", sans-serif;
    background-color: ${mainColor};
    color: white;
    font-weight: bold;
    font-size: 13px;
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

