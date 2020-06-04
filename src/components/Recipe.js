import React, { useEffect, useState } from "react";

function Recipe() {
  const APP_ID = "148c80ab";
  const APP_KEYS = "18d53552327e835dfc6652d12da43341";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const recipesReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`;

  const handleSearch = e => setSearch(e.target.value);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getSearch = e => {
    if (e) e.preventDefault();
    setQuery(search);
  };

  const getRecipes = async () => {
    const res = await fetch(recipesReq);
    const data = await res.json();
    setRecipes(data.hits);
  };

  return (
    <div className="Recipe">
      <h3>Search a Recipe</h3>
      <form onSubmit={getSearch}>
        <input
          type="text"
          placeholder="Eg. Chicken, Peanut, ..."
          value={search}
          onChange={handleSearch}
          className="search-bar"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="recipes-list">
        {recipes.map(rcp => (
          <div>
            <h2>{rcp.recipe.label}</h2>
            <p>{rcp.recipe.calories}</p>
            <img src={rcp.recipe.image} alt={rcp.recipe.label} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
