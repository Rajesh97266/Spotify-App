import { Route, Routes, useLocation } from "react-router-dom";
import HomeDisplay from "./HomeDisplay";
import DisplayAlbum from "./DisplayAlbum";
import { useState, useEffect } from "react";
import { albumsData } from "../assets/assets";

const Display = () => {
  const location = useLocation();
  const [bgColor, setBgColor] = useState("#121212"); // Default background color
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split("/").pop() : null;

  useEffect(() => {
    if (isAlbum && albumsData[Number(albumId)]) {
      setBgColor(
        `linear-gradient(to bottom, ${
          albumsData[Number(albumId)].bgColor
        }, #121212)`
      );
    } else {
      setBgColor("#121212");
    }
  }, [albumId, isAlbum]);

  return (
    <div
      style={{ background: bgColor }}
      className="w-[100%] m-2 px-6 pt-4 rounded text-white overflow-auto lg:w-[75%] ml-0"
    >
      <Routes>
        <Route path="/" element={<HomeDisplay />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
