import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[15%] p-8 md:px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="my-4 md:my-0">
        <button
          type="button"
          className="bg-white py-1 md:py-4 text-xl text-bold rounded-lg text-black px-2 md:px-12 hover:bg-opacity-80"
        >
          ▶️ Play
        </button>
        <button
          type="button"
          className="mx-3 bg-gray-500 py-1 md:py-4 text-xl bg-opacity-50 text-bold rounded-lg text-white px-2 md:px-12 hover:bg-opacity-20"
        >
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
