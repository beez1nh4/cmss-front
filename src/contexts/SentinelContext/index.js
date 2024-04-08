import React, { useState } from "react";
import { createContext } from 'react';
import useGetCurrent from "../../hooks/api/useGetCurrent";

export const SentinelsContext = createContext({});

export const SentinelProvider = (props) => {
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png");
  const [selectedSentinel, setSelectedSentinel] = useState(undefined);
  const [getSentinel, setGetSentinel] = useState(false);
/*   const getCurrent = useGetCurrent();
  console.log(getCurrent) */
  const [sentinels, setSentinels] = useState([]);

  return (
    <SentinelsContext.Provider value={
      {image, 
      setImage, 
      sentinels,
      setSentinels,
      selectedSentinel,
      setSelectedSentinel,
      getSentinel,
      setGetSentinel
      }}>
      {props.children}
    </SentinelsContext.Provider>
  );
};

export const useSentinel = () => React.useContext(SentinelsContext);