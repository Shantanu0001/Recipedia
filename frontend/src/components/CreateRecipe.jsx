import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import api from "../utils/api";
import styles from "./CreateRecipe.module.css";

function CreateRecipe() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("http://localhost:5000/api/recipes", {
        title,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        instructions,
        prepTime: parseInt(prepTime),
        cookTime: parseInt(cookTime),
        servings: parseInt(servings),
        image,
      });
      console.log("Recipe Created:", response.data);

      // After successful creation, clear the form fields
      setTitle("");
      setIngredients("");
      setInstructions("");
      setPrepTime("");
      setCookTime("");
      setServings("");
      setImage("");

      // Navigate to the home page
      navigate("/"); // Redirect to the home page
    } catch (error) {
      setError("Error creating recipe");
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.createRecipe}>
      <h2>Create Your Recipe</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Ingredients (comma-separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
        <div className={styles.timeInputs}>
          <input
            type="number"
            placeholder="Prep Time (mins)"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Cook Time (mins)"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
            required
          />
        </div>
        <input
          type="number"
          placeholder="Number of Servings"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
          required
        />
        <div className={styles.imageContainer}>
          <input
            type="text"
            placeholder="Recipe Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <div className={styles.imagePreview}>
            {image ? (
              <img src={image} alt="Recipe" className={styles.previewImg} />
            ) : (
              <img
                src="https://www.simplyrecipes.com/thmb/CWzxvl8dpC_zkjjRqEE6fBCS6DQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg"
                alt="Recipe Placeholder"
                className={styles.previewImg}
              />
            )}
          </div>
        </div>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
}

export default CreateRecipe;
