import React from 'react';
const SearchBar = ({updateQuery}) =>
{
    return(
        <input name="search" type="text"  onChange={(e) => updateQuery(e.target.value)} className="w-full rounded rouded bg-indigo-200"/>
    )
}
export default SearchBar;