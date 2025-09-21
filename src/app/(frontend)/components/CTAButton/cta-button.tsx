"use client";
import { AnimatePresence, motion } from "framer-motion";
import { TextAlignJustify } from "lucide-react";
import { useState } from "react";

const CTAButton = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  function handleClick() {
    setButtonClicked((prevState) => !prevState);
  }

  return (
    <motion.div
      className=" flex bg-red-500 rounded-2xl"
      animate={{
        width: buttonClicked ? 600 : 289,
        height: buttonClicked ? 370 : 69,
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <AnimatePresence mode="wait">
        {buttonClicked ? (
          <motion.div
            key="expanded"
            className="flex flex-col justify-between items-start pr-1.5 pl-6 py-1  w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="text-left text-black m-0 text-[32px]">
              <p>Hajde da počnemo!</p>
              <p>
                Podeli sa mnom nekoliko osnovnih detalja i započinjemo priču.
              </p>
              <button className="rounded-2xl bg-black text-white p-2 ">
                Započni
              </button>
            </div>
            <div
              onClick={handleClick}
              className="flex flex-col self-end justify-center  p-[15]  ml-auto px-3"
            >
              <TextAlignJustify />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            onClick={handleClick}
            className="hover:bg-red-700 rounded-2xl flex items-center  pr-1.5 pl-6 py-1 w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <span className="text-black text-[20px]">Šta ti je potrebno?</span>
            <div className="flex flex-col justify-center items-center gap-1.5 rounded-2xl h-[60px] bg-black ml-auto self-stretch px-3">
              <TextAlignJustify />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CTAButton;
