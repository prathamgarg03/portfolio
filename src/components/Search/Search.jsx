import React from 'react';
import { IoIosSearch } from "react-icons/io";

function Search({ placeholder }) {
  return (
    <>
      <div className="relative w-full max-w-xs mx-auto">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IoIosSearch className="text-gray-400" />
        </span>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 rounded-full border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-500 text-base leading-6 sm:text-lg sm:leading-6"
          placeholder={placeholder || "I am a computer science student."}
          disabled
        />
      </div>
    </>
  );
}

export default Search;
