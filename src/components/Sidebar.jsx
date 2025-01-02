import { assets } from "../assets/assets";
const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex ">
      {/* Home and search */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around ">
        <div className="flex items-center  gap-3 pl-8 cursor-pointer">
          <img src={assets.home_icon} alt="logo" className="w-6" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center  gap-3 pl-8 cursor-pointer">
          <img src={assets.search_icon} alt="logo" className="w-6" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      {/* Remaining  */}
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} className="w-8" alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={assets.arrow_right} className="w-5" alt="" />
            <img src={assets.plus_icon} className="w-5" alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light">It&apos;s easy, we&apos;ll help you</p>
          <button className="bg-[#1ED760] text-black px-4 py-2 mt-4 rounded-full text-[15px]">
            Create playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1>Let&apos;s find some podcasts to follow</h1>
          <p className="font-light">We&apos;ll keep you updated on new episodes</p>
          <button className="bg-white text-black px-4 py-2 mt-4 rounded-full text-[15px]">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
