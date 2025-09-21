"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BookOpenCheck, TextAlignJustify } from "lucide-react";
import { useEffect, useState } from "react";

export default function ButtonsContainer() {
  const [button, setButton] = useState(1);
  const [ctaClicked, setCtaClicked] = useState(false);

  // Automatic button switch every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setButton((prev) => (prev === 2 ? 1 : prev + 1));
      setCtaClicked(false); // reset CTA when switching
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="flex fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-2xl text-white"
      layout
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {button === 1 && (
        <div
          key="course"
          className="bg-red-500 rounded-2xl flex items-center pr-1.5  py-1 w-full"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key="buy-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-black text-[20px] px-[32px]"
            >
              Prijavi se na kurs
            </motion.span>
          </AnimatePresence>
          <div className="flex flex-col justify-center items-center gap-1.5 rounded-2xl h-[60px] bg-black ml-auto self-stretch px-3 ">
            <BookOpenCheck />
          </div>
        </div>
      )}

      {button === 2 && (
        <div key="cta" className="bg-red-500 rounded-2xl w-full">
          {!ctaClicked ? (
            <div
              className="flex items-center pr-1.5  py-1 w-full"
              onClick={() => setCtaClicked(true)}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key="buy-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-black text-[20px] px-[32px]"
                >
                  Sta ti je potrebno?
                </motion.span>
              </AnimatePresence>
              <div className="flex flex-col justify-center items-center gap-1.5 rounded-2xl h-[60px] bg-black ml-auto self-stretch px-3">
                <TextAlignJustify />
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-between items-start pr-1.5 pl-6 py-1 w-full">
              <div className="text-left text-black text-[32px]">
                <p>Hajde da počnemo!</p>
                <p>
                  Podeli sa mnom nekoliko osnovnih detalja i započinjemo priču.
                </p>
                <button
                  className="rounded-2xl bg-black text-white p-2"
                  onClick={() => setCtaClicked(false)}
                >
                  Započni
                </button>
              </div>
              <div
                onClick={() => setCtaClicked(false)}
                className="flex flex-col self-end justify-center p-[15] ml-auto px-3 "
              >
                <TextAlignJustify />
              </div>
            </div>
          )}
        </div>
      )}

      {/* {button === 3 && (
          <div
            key="nextprev"
            className="bg-gray-700 p-3 rounded-2xl gap-2 flex w-fit h-fit justify-between"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center items-center rounded-2xl h-[60px] w-[60px] bg-black px-3"
            >
              {"<"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center items-center rounded-2xl h-[60px] w-[60px] bg-black px-3"
            >
              {">"}
            </motion.div>
          </div>
        )} */}
    </motion.div>
  );
}
