import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchQuery = useRef(null);
  
  const handleGptSearch = async () => {
    const query = searchQuery.current.value;
    console.log("Searching GPT for query: ", query);

    const gptQuery = "Act as a movie recommendation engine. Suggest me some movies similar to " + query + ". Only give me names of 5 movies in a comma separated like the example: Movie1, Movie2, Movie3, Movie4, Movie5. ";
    const gptResult = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user", 
          content: gptQuery,
        },
      ]
    });
    console.log(gptResult.choices)
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchQuery}
        />
        <button
          className="py-2 px-4 bg-red-600 text-white rounded-lg col-span-3 m-4"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
