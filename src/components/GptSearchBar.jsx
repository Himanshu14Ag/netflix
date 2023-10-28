import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/LanguageConstants";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB...
  const fetchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    // make an API call to get movie results.
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query " +
      searchText.current.value +
      ". Only give me names of 10 movies, seperated nby comma, like the example given ahead. Example - Movie 1, Movie 2, Movie 3";
    const gptpResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    // console.log(gptpResults.choices);
    const gptMovies = gptpResults.choices?.[0]?.message.content.split(",");

    // The function will return 5 promises due to async calls instead of data.
    const promiseArray = gptMovies.map(movie => fetchMovie(movie));

    const tmdbResults = await Promise.all(promiseArray); 
    dispatch(addGptMovieResult({gptMovies, tmdbResults}));

  };

  return (
    <div className="pt-[50%] md:pt-[8%] flex justify-center">
      <form
        action=""
        className="w-[90%] md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="m-4 col-span-9 md:col-span-10 rounded-full text-xs md:text-base text-center"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          type="button"
          className="py-2 px-4 m-4 bg-red-700 text-xs md:text-base text-white rounded-lg col-span-3 md:col-span-2"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
