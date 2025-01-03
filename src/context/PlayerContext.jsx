/* eslint-disable react/prop-types */
import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";


export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  // Correctly destructuring children
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[1]);
 
  
  const [playerStatus, setPlayerStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayerStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayerStatus(false);
  };

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    playerStatus,
    time,
    setTrack,
    setPlayerStatus,
    setTime,
    play,
    pause
}

    

  return (
    <PlayerContext.Provider value={{ contextValue}}>
      {children} {/* Correctly using children here */}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
