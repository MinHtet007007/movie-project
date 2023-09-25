import React, { useEffect, useState } from "react";
import Filtered from "./components/Filtered";
import Movie from "./components/Movie";
import { motion } from "framer-motion";

const App = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=131a25ae5110449f16f035c20219786e&language=en-US&page=1`
    );
    const { results } = await api.json();
    setPopular(results);
    setFiltered(results);
    // console.log(results);
  };
  return (
    <div>
      <Filtered
        filtered={filtered}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        popular={popular}
      />
      <motion.div layout className=" flex flex-wrap gap-10 justify-center mt-20">
        {filtered.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
      </motion.div>
    </div>
  );
};

export default App;
