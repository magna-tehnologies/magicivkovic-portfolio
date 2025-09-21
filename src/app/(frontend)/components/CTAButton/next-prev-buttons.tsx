import { AnimatePresence, motion } from "framer-motion";

export default function NextPrevButton() {
  return (
    <motion.div
      key="arrows"
      className="bg-gray-700 p-3 rounded-2xl gap-2 flex w-fit h-fit justify-between"
      initial={{ opacity: 0, width: 269 }}
      animate={{ opacity: 1, width: "auto" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <AnimatePresence mode="wait">
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
      </AnimatePresence>
    </motion.div>
  );
}
