import React, { useState } from "react";

const Search = () => {
  const [list, setList] = useState(["apple", "orange", "mango", "grapes"]);
  const [search, setSearch] = useState("");

  const filterSearch = list.filter((item) => {
    return item.toLowerCase().includes(search.toLocaleLowerCase());
  });
  return (
    <div className="container">
      <h1>Search</h1>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {filterSearch.map((item, index) => (
        <>
          <ul>
            <li key={index}>{item}</li>
          </ul>
        </>
      ))}
    </div>
  );
};

export default Search;
