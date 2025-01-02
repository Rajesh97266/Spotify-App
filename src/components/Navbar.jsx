import { assets } from "../assets/assets"


const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            src={assets.arrow_left}
            alt=""
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          />
          <img
            src={assets.arrow_right}
            alt=""
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15]x] px-4 py-1 rounded-2xl hidden md:block cursor-pointer select-none">
            Explore Premium
          </p>
          <p className="bg-[#1ED760] text-black text-[15]x] px-4 py-1 rounded-2xl hidden md:block cursor-pointer select-none">
            Install App
          </p>
          <p className="bg-purple-300 text-black text-[15]x] w-7 h-7 rounded-full items-center flex justify-center cursor-pointer select-none">
            R
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
        <p className="bg-black  px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black  px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>
      </div>
    </>
  );
}

export default Navbar