/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const SongItem = ({ image, name, desc, id }) => {
  return (
    <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img src={image} alt="" className="rounded" />
      <p className="text-sm mt-2 mb-1 font-semibold">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;
