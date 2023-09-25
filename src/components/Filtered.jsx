import React from "react";
import { useEffect } from "react";

const Filtered = ({
  filtered,
  popular,
  setFiltered,
  activeGenre,
  setActiveGenre,
}) => {

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    } else {
      const filteredMovie = popular.filter((movie) =>
        movie.genre_ids.includes(activeGenre)
      );
      setFiltered(filteredMovie);
    }
  }, [activeGenre]);

  return (
    <div className=" mt-10 ml-5 flex gap-5">
      <button
        onClick={() => setActiveGenre(0)}
        className=" bg-gray-400 px-8 py-2 text-white rounded shadow"
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className=" bg-gray-400 px-8 py-2 text-white rounded shadow"
      >
        Action
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className=" bg-gray-400 px-8 py-2 text-white rounded shadow"
      >
        Comedy
      </button>
    </div>
  );
};

export default Filtered;
