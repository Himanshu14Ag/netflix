import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const isUpcomingMovies = useSelector(store => store.movies.upcomingMovies);


  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !isUpcomingMovies && getUpcomingMovies();
  }, []);
};


export default useUpcomingMovies;