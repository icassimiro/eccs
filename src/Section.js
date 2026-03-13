
import { motion } from "framer-motion";

export default function Section({ id, children }) {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.4 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.section>
  );
}
