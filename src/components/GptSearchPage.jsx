import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="height-screen object-cover"
          style={{ width: "300vh", height: "100vh" }}
          src={BACKGROUND_IMG}
          alt="background"
        />
      </div>
      <div className="">
        <GptSearchBar></GptSearchBar>
        <GptMovieSuggestions></GptMovieSuggestions>
      </div>
    </>
  );
};

export default GptSearch;
