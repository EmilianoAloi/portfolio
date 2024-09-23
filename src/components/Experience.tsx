import Timeline from "./Timeline";
import { FC } from "react";
import { motion } from "framer-motion";

const Experience: FC = () => {
  return (
    <motion.section
      id="experience"
      className="mx-4 lg:max-w-screen-lg lg:mx-auto mb-28 flex flex-col mt-10 "
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <h2 className="text-4xl lg:text-5xl font-bold mb-14">Experiencia </h2>
      <Timeline />
    </motion.section>
  );
};

export default Experience;
