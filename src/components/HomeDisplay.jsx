import Navbar from "./Navbar"
import {albumsData} from "../assets/assets"
import AlbumItem from "./AlbumItem"
import {songsData} from "../assets/assets"
import SongItem from "./SongItem"


const HomeDisplay = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4 ">
        <h1 className="text-2xl font-semibold my-5">Featured Charts</h1>
        <div className="flex overflow-auto ">
          {albumsData.map((album) => (
            <AlbumItem key={album.id} {...album} />
          ))}
        </div>
      </div>
      <div className="mb-4 ">
        <h1 className="text-2xl font-semibold my-5">Today&apos;s biggest hits</h1>
        <div className="flex overflow-auto ">
          {songsData.map((song) => (
            <SongItem key={song.id} {...song} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeDisplay  