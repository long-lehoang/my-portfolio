import { motion } from "framer-motion";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <div className="relative h-2.5 rounded-full bg-gray-100 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 h-full bg-primary rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
};

export default ProgressBar;
