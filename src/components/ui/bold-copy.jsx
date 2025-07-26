import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export default function BoldCopy({ text = "", className, textClassName, backgroundTextClassName }) {
  if (!text?.length) {
    return null;
  }

  return (
    <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={cn("group relative font-tourney  flex items-center justify-center px-2 py-2  md:px-6 md:py-4", className,)}>
      <motion.h1 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={cn("text-xl font-bold font-tourney title uppercase  bg-clip-text text-transparent bg-gradient-to-r sm:block hidden from-primary/10 to-secondary/10 opacity-30 transition-all group-hover:opacity-50 md:text-4xl", backgroundTextClassName)}>
        {text}
      </motion.h1>
      <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={cn("text-3xl sm:absolute  font-bold font-tourney uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary transition-all group-hover:sm:text-2xl md:text-3xl group-hover:md:text-4xl", textClassName)}>
        {text}
      </motion.div>
    </motion.div>
  );
}
