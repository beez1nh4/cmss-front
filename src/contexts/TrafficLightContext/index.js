import React, { useState } from "react";
import { createContext } from 'react';
import citi from '../../assets/images/citiusp.jpg'
import hu from '../../assets/images/hu.png'
import useGetCurrent from "../../hooks/api/useGetCurrent";

export const TrafficLightContext = createContext({});

export const TrafficLightProvider = (props) => {
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png");
  const [selectedTrafficLight, setSelectedTrafficLight] = useState(undefined);
  const [getPedestrian, setGetPedestrian] = useState(false);
/*   const getCurrent = useGetCurrent();
  console.log(getCurrent) */



  const [chosenTrafficLight, setChosenTrafficLight] = useState({
    id: 2,
    name: "CITI",
    senderId: "e8feb8f994fd88b2",
    position: [-23.55621111111111, -46.72972222222222],
    notificationType: 2,
	  maxPedestrianInCrosswalk: 3,
	  numPedestrianOutCrosswalk_Green: 2.3,
    numPedestrianOutCrosswalk_Red: 4.5,
    numPedestrianOnSidewalk: 0,
    maxPedestrianOnSidewalk: 3,
    numPedestrianWalkingOnSideWalk: 1,
    numPedestrianInCrosswalk_Green: 2.5,
    numPedestrianInCrosswalk_Red: 4.7,
    avgWaitingTime_Green: 1,
    avgWaitingTime_Red: 6,
    image: citi,
    plan: 1,
    timestamp: 1710855841
});
  const [trafficLights, setTrafficLights] = useState([
    {
        id: 1,
        name: "HU",
        senderId: "d2c79348ec4542e1",
        position: [-23.56388888888889, -46.740833333333335],
        notificationType: 3,
        maxPedestrianInCrosswalk: 5,
        numPedestrianOutCrosswalk_Green: 4.3,
        numPedestrianOutCrosswalk_Red: 5.5,
        numPedestrianOnSidewalk: 2,
        maxPedestrianOnSidewalk: 2,
        numPedestrianWalkingOnSideWalk: 5,
        numPedestrianInCrosswalk_Green: 3.5,
        numPedestrianInCrosswalk_Red: 4.8,
        avgWaitingTime_Green: 1,
        avgWaitingTime_Red: 6,
        image: hu,
        plan: 1,
        timestamp: 1710855641,
    },
    {
        id: 2,
        name: "CITI",
        senderId: "42a890f441adf18b",//"e8feb8f994fd88b2",
        position: [-23.55621111111111, -46.72972222222222],
        notificationType: 2,
        maxPedestrianInCrosswalk: 5,
        numPedestrianOutCrosswalk_Green: 2.3,
        numPedestrianOutCrosswalk_Red: 4.5,
        numPedestrianOnSidewalk: 2,
        maxPedestrianOnSidewalk: 3,
        numPedestrianWalkingOnSideWalk: 4,
        numPedestrianInCrosswalk_Green: 2.5,
        numPedestrianInCrosswalk_Red: 4.7,
        avgWaitingTime_Green: 1,
        avgWaitingTime_Red: 6,
        image: citi,
        plan: 1,
        timestamp: 1711399200,
    }
])

  return (
    <TrafficLightContext.Provider value={
      {image, 
      setImage, 
      selectedTrafficLight, 
      setSelectedTrafficLight,
      chosenTrafficLight,
      setChosenTrafficLight,
      trafficLights,
      setTrafficLights,
      getPedestrian,
      setGetPedestrian
      }}>
      {props.children}
    </TrafficLightContext.Provider>
  );
};

export const useTrafficLight = () => React.useContext(TrafficLightContext);