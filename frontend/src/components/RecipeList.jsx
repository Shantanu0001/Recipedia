import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./RecipeList.module.css";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=12&apiKey=2d7e059b576944d886cc59bd7f395f14`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch random recipes");
        }
        const data = await response.json();
        setRandomRecipes(data.recipes);
      } catch (error) {
        setError("Error fetching random recipes");
      }
    };
    fetchRandomRecipes();
  }, []);

  const fetchRecipes = async (query) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=12&apiKey=2d7e059b576944d886cc59bd7f395f14`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      setError("Error fetching recipes");
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.trim() !== "") {
      fetchRecipes(event.target.value);
    } else {
      setRecipes([]);
    }
  };

  return (
    <div className={styles.recipeList}>
      <h2>Recipe Collection</h2>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.recipeGrid}>
        {recipes.length === 0 && searchTerm === "" ? (
          randomRecipes.map((recipe) => (
            <div key={recipe.id} className={styles.recipeCard}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className={styles.recipeImage}
              />
              <div className={styles.recipeInfo}>
                <h3>{recipe.title}</h3>
                <Link
                  to={`/recipes/${recipe.id}`}
                  className={styles.viewButton}
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))
        ) : recipes.length === 0 ? (
          <div className={styles.loading}>No recipes found...</div>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id} className={styles.recipeCard}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className={styles.recipeImage}
              />
              <div className={styles.recipeInfo}>
                <h3>{recipe.title}</h3>
                <Link
                  to={`/recipes/${recipe.id}`}
                  className={styles.viewButton}
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RecipeList;
