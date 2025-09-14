"use client";
import { TextAlignJustify } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const CTAButton = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  function handleClick() {
    setButtonClicked((prevState) => !prevState);
  }
  return (
    <button
      onClick={handleClick}
      className={twMerge(
        "hover:bg-red-700 flex fixed bottom-5 left-1/2 z-100  -translate-x-1/2 bg-red-600 pr-1.5 pl-6 py-1 rounded-2xl text-white items-center text-[20px]",
        buttonClicked ? "h-3/10 w-4/10" : "h-[69px] w-[289px]"
      )}
    >
      <span className={"text-black text-[20px]"}>Šta ti je potrebno?</span>
      <div className="flex flex-col justify-center items-center gap-1.5 rounded-2xl bg-black ml-auto self-stretch px-3">
        <TextAlignJustify></TextAlignJustify>
      </div>
    </button>
  );
};

export default CTAButton;
