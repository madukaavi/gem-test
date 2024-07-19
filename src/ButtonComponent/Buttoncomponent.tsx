import { useState } from "react";

function Buttoncomponent() {
    const [countery] = useState('Sri Lankan');
    const [Gemname] = useState('BLUE SAPPHIRE');

  return (
    <>
    <h4 className="font-sans text-lg font-semibold text-blue-400 z-10 ">{countery}</h4>
    <h2 className="font-sans text-2xl font-bold text-black">{Gemname}</h2>
    <div className="flex gap-2 relative top-5">
     <button className="text-white bg-gradient-to-r hover:bg-pink-200 from-pink-500 to-pink-800 p-2 font-sans">EXPORE MORE</button>
     <button className="text-pink-800 hover:bg-pink-400 hover:text-white border-pink-800 font-sans font-semibold p-2 border-[2px] bg-none">EXPORE MORE</button>

    </div>
    </>
  )
}

export default Buttoncomponent