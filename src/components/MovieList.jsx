import React from "react";
import MovieCard from "./MovieCard";
import { useDispatch} from "react-redux";
import { addTrailerVideo, movieCardKey } from "../utils/movieSlice";

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();


  const handleCardClick = (movieId) => {
    dispatch(movieCardKey(movieId));
    dispatch(addTrailerVideo(null));
  };

  return (
    <div className="p-3">
      <h1 className="font-bold text-xl md:text-3xl py-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className="flex">
          {movies?.map(movie => <MovieCard key = {movie.id} posterPath={movie.poster_path} movieId = {movie.id} onCardClick={handleCardClick} /> )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
