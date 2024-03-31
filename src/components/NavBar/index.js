import styled from "styled-components"
import { mainColor } from "../../constants/colors"
import { useTrafficLight } from "../../contexts/TrafficLightContext";
import { useNavigate } from "react-router-dom";

export default function NavBar() {

    const navigate = useNavigate();
    const {setChosenTrafficLight} = useTrafficLight();

    return (
        <NavBarItem>
            <Title onClick={()=>{
                navigate(`/`);
                setChosenTrafficLight(undefined);
                }}>Tracking: Sentinels </Title>
        </NavBarItem>
    )
}

const NavBarItem = styled.div`
    width: 100%;
    height: 70px;
    //position: fixed;
    background-color: ${mainColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 900px) {
      height: calc(10vh);
      width: calc(100vh);
      padding: 20px;
    }
`
const Title = styled.div`
    color: #000000ff;
    font-size: 25px;
    font-weight: bold;
    margin-left: 10px;
`