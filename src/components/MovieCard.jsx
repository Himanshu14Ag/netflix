import React from "react";
import { IMG_URL } from "../utils/constants";
import { toggleMovieView } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ movieId, posterPath, onCardClick }) => {
  if (!posterPath) return null;
  const dispatch = useDispatch();

  const handleMovieView = () => {
    dispatch(toggleMovieView());
    onCardClick(movieId);
  };

  return (
    <div
      id={movieId}
      className="w-36 md:w-48 pr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      onClick={handleMovieView}
    >
      <img src={IMG_URL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
