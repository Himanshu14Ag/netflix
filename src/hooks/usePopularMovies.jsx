import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


export const usePopularMovies = () => {
  const dispatch = useDispatch();

  const isPopularMovies = useSelector(store => store.movies.popularMovies);


  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !isPopularMovies && getPopularMovies();
  }, []);
};


export default usePopularMovies;