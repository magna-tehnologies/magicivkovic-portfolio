"use client";

import { useState } from "react";

const CTAButton = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  function handleClick() {
    setButtonClicked((prevState) => !prevState);
  }
  return (
    <button
      onClick={() => handleClick()}
      className={`hover:bg-red-700 flex fixed bottom-5 left-1/2  -translate-x-1/2  bg-red-600 pr-1.5 pl-6 py-1 rounded-2xl 
        text-white items-center text-[1.5vw] ${buttonClicked ? "h-3/10 w-4/10" : "h-1/15 w-2/10"}
        `}
    >
      <span>Šta ti je potrebno?</span>
      <div className="flex flex-col justify-center items-center  gap-1.5 rounded-2xl bg-black w-2/10 h-10/10 ml-auto">
        <span className="block w-5 h-0.5 bg-white rounded"></span>
        <span className="block w-5 h-0.5 bg-white rounded"></span>
        <span className="block w-5 h-0.5 bg-white rounded"></span>
      </div>
    </button>
  );
};

export default CTAButton;

//hover:
