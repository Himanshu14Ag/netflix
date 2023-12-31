import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


export const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const isTopRatedMovies = useSelector(store => store.movies.topRatedMovies);


  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !isTopRatedMovies && getTopRatedMovies();
  }, []);
};


export default useTopRatedMovies;