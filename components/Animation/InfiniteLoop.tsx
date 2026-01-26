import { motion } from "framer-motion";

interface InfiniteLoop {
  img: string;
}

const InfiniteLoop: React.FC<InfiniteLoop> = ({ img }) => {
  return (
    <motion.div className="relative overflow-hidden h-[200px] min-w-[200px]" style={{ width: "max-content" }}>
      <img src={img} alt={img} className="w-full h-full object-cover" />
    </motion.div>
  );
};

export default InfiniteLoop;
