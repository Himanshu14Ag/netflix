import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMovies, tmdbResults } = useSelector((store) => store.gpt);
  if (!gptMovies) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <div>
        {gptMovies.map((movie, index) => (
          <MovieList
            key={movie}
            title={movie}
            movies={tmdbResults[index]}
          ></MovieList>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
