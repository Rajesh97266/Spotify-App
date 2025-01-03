import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { useContext } from "react";
import { PlayerContext } from "./context/PlayerContext";
import { songsData } from "./assets/assets";

const App = () => {
  const { audioRef , track } = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio preload="auto" ref={audioRef} ></audio>
    </div>
  );
};

export default App;
