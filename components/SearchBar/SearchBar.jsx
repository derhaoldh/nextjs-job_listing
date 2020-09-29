import React from "react";
const SearchBar = ({ updateQuery }) => {
  return (
    <input
      name="search"
      type="text"
      onChange={(e) => updateQuery(e.target.value)}
      className="w-full rounded rouded bg-indigo-200 border-solid border-2 border-blue-600 placeholder-blue-600 border border-black"
      placeholder=" Search..."
    />
  );
};
export default SearchBar;
