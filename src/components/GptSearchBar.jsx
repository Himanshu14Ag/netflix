import React from "react";
import { useSelector } from "react-redux";
import lang from '../utils/LanguageConstants';

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);

  return (
    <div className="pt-[8%] flex justify-center">
      <form action="" className="w-1/2 bg-black grid grid-cols-12 rounded-lg">
        <input
          type="text"
          className="m-4 col-span-10 rounded-full text-center"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          type="button"
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-2"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
