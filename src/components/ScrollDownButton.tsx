"use client"

import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const ScrollDownButton = () => {
    return (
        <motion.div
            className="scroll-down-button text-zinc-700"
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
        >
            <FaChevronDown size={50} />
        </motion.div>
    );
};

export default ScrollDownButton;