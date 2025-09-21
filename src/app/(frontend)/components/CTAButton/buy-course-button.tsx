import { motion } from "framer-motion";
import { BookOpenCheck } from "lucide-react";

export default function BuyCourseButton() {
  return (
    <motion.div
      key="course"
      className="hover:bg-red-700 bg-red-500 rounded-2xl flex items-center   pr-1.5 pl-6 py-1 w-[289px]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
    >
      <span className="text-black text-[20px]">Prijavi se na kurs</span>
      <div className="flex flex-col justify-center items-center gap-1.5 rounded-2xl h-[60px] bg-black ml-auto self-stretch px-3">
        <BookOpenCheck />
      </div>
    </motion.div>
  );
}
