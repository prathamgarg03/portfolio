import React from 'react'
import { IoIosSearch } from "react-icons/io";

function Search({ placeholder}) {
  return (
    <>
        <input
            type="text"
            className="block w-full rounded-full border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-500 sm:text-lg sm:leading-6"
            placeholder={placeholder || "I am a computer science student."}
            disabled
        />
    </>
  )
}

export default Search