import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DefinitionSearch = () => {
  const [firstWord, setFirstWord] = useState("");
  const navigate = useNavigate();
  return (
    <section className="animate__animated animate__slideInUp">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          We invest in the world’s knowledge
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
          Here at Dictionary.io we focus on the meaning of words, good english
          phrases and sentences that can unlock good communicative excellence
        </p>
        <div class="w-full max-w-md mx-auto">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"></div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate(`/${firstWord}`);
              }}
            >
              <input
                onChange={(e) => {
                  setFirstWord(e.target.value);
                }}
                type="text"
                name="search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter a word to get the meaning..."
                required
              />
            </form>

            {/* <button
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefinitionSearch;
