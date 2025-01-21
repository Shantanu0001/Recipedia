const mongoose = require('mongoose');

// Recipe schema
const RecipeSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },  
    ingredients: { type: [String], required: true },  
    instructions: { type: String, required: true },  
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to the User who created the recipe
    image: { type: String },  
    prepTime: { type: Number }, 
    cookTime: { type: Number },  
    servings: { type: Number }, 
    tags: [String],  // Optional tags array
}, { timestamps: true });

module.exports = mongoose.model('Recipe', RecipeSchema);
