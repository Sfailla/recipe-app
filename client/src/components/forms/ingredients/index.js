import React from 'react'
import './style.css'

export default function IngredientsForm({ ingredients, handleAddIngredient, handleArrayChange }) {
  return (
    <React.Fragment>
      <div className="label-wrapper">
        <label className="form-label" htmlFor="ingredient-name">
          Ingredients
        </label>
        <button onClick={handleAddIngredient}>Add Ingredient</button>
      </div>
      {ingredients.map((ingredient, index) => (
        <div className="form-group multiple-group" key={index}>
          <input
            type="number"
            placeholder="amount..."
            className="form-input form-input-short"
            onChange={event => handleArrayChange(event, index)}
            name="amount"
            value={ingredient.amount}
          />

          <input
            type="text"
            placeholder="measurement..."
            className="form-input form-input-short"
            onChange={event => handleArrayChange(event, index)}
            name="measurement"
            value={ingredient.measurement}
          />

          <input
            type="text"
            placeholder="name..."
            className="form-input"
            onChange={event => handleArrayChange(event, index)}
            name="name"
            value={ingredient.name}
          />
        </div>
      ))}
    </React.Fragment>
  )
}
