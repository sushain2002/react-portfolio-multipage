import React from "react";
import { motion } from "framer-motion";

const Home = () => (
  <motion.div
    className="flex flex-col items-center justify-center h-[80vh]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-4xl font-bold text-indigo-600">Hi, I'm sushain verma 👋</h1>
    <p className="mt-4 text-lg">A passionate web developer creating modern web experiences.</p>
  </motion.div>
);

export default Home;
