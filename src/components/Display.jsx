import { Route, Routes } from "react-router-dom"
import HomeDisplay from "./HomeDisplay"


const Display = () => {
  return (
    <div className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] ml-0">
        <Routes>
            <Route path="/" element={<HomeDisplay />} />
        </Routes>
    </div>
  )
}

export default Display