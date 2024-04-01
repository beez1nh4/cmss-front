import styled from "styled-components";
import { TrafficLightsMap } from "./Map";
import NavBar from "../../components/NavBar";
import Display1 from "./Display1";
import { mainColor } from "../../constants/colors";
import Display2 from "./Display2";

//main page calling the components
export default function MainPage() {
  
    return (
        <>
            <NavBar/>
            <Content>
            <DisplayContainer>
                <Display1/>
            </DisplayContainer>
            <Container>
                <Display2/>
            </Container>  
            </Content>
               
        </>      
    );
  }
  
const Container = styled.div`
    padding: 25px;
    height: 86vh;
    width: 100%;
    overflow-y: auto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    margin: 20px;
    background-color: white;
    border-radius: 15px;
  
    @media (max-width: 900px) {
      height: calc(100vh - 80px);
      width: calc(100vh - 40px);
      padding: 20px;
    }
  `;

const Title = styled.div`
    font-size: 22px;
    margin-bottom: 10px;
    color: ${mainColor};
    font-weight: bold;
`
const Content = styled.div`
    display: flex;
    @media (max-width: 900px) {
      display: block;
    }
`

const DisplayContainer = styled.div`
    display: block;
    margin-left: 20px;

    @media (max-width: 900px) {
      height: calc(100vh - 80px);
      width: calc(80vh - 40px);
      padding: 20px;
    }
`