import React from "react";
import { motion } from "framer-motion";

const Movie = ({ title, poster_path }) => {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <p className=" text-sm">{title}</p>
      <img src={"https://image.tmdb.org/t/p/w300" + poster_path} alt="" />
    </motion.div>
  );
};

export default Movie;
