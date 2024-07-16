import styled from "styled-components"
import { mainColor } from "../../constants/colors"
import { useSentinel } from "../../contexts/SentinelContext";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/69012384.png"
import axios from "axios";

export default function NavBar() {

    const navigate = useNavigate();
    const {setSelectedSentinel, setNotifications} = useSentinel();

    return (
        <NavBarItem>
            <img src={logo} alt="logo" width="40px"/>
            <Title onClick={()=>{
                navigate(`/`);
                setSelectedSentinel(undefined);
                const promise = axios.get(process.env.REACT_APP_API_BASE_URL + '/notification');
                promise.then((res) => {
                    //console.log(res.data[0]);
                    setNotifications(res.data);
                });
            
                promise.catch((err) => {
                    console.log('err', err.response.data);
                });
                }}>CMSS Tracking: Sentinels </Title>
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
    justify-content: left;
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