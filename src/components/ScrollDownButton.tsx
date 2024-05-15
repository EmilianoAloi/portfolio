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
            <Link href="#experience" className="hover:text-zinc-500">  <FaChevronDown size={50} /> </Link>
        </motion.div>
    );
};

export default ScrollDownButton;