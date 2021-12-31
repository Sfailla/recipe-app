import React from 'react'

export default function RecipeForm({ values, error, handleChange }) {
  return (
    <React.Fragment>
      <div className="form-group">
        <label aria-label="title" className="form-label" htmlFor="recipe-title">
          Title
        </label>
        <input
          id="recipe-title"
          placeholder="please enter a title..."
          className={`form-input ${error.title ? 'form-input-error' : ''}`}
          type="text"
          onChange={handleChange}
          name="title"
          value={values.title}
        />
        {error.title && <p className="form-error">{error.title}</p>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="recipe-description">
          Description
        </label>
        <input
          id="recipe-description"
          placeholder="please enter a description..."
          className={`form-input ${error.description ? 'form-input-error' : ''}`}
          type="text"
          onChange={handleChange}
          name="description"
          value={values.description}
        />
        {error.description && <p className="form-error">{error.description}</p>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="recipe-serving">
          Servings
        </label>
        <input
          id="recipe-serving"
          placeholder="serving amount..."
          className={`form-input ${error.servings ? 'form-input-error' : ''}`}
          type="number"
          onChange={handleChange}
          name="servings"
          values={values.servings}
        />
        {error.servings && <p className="form-error">{error.servings}</p>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="recipe-prep-time">
          Prep Time
        </label>
        <input
          id="recipe-prep-time"
          placeholder="time to prep..."
          className={`form-input ${error.prepTime ? 'form-input-error' : ''}`}
          type="number"
          onChange={handleChange}
          name="prepTime"
          values={values.prepTime}
        />
        {error.prepTime && <p className="form-error">{error.prepTime}</p>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="recipe-cook-time">
          Cook Time
        </label>
        <input
          id="recipe-cook-time"
          placeholder="time to cook..."
          className={`form-input ${error.cookTime ? 'form-input-error' : ''}`}
          type="number"
          onChange={handleChange}
          name="cookTime"
          values={values.cookTime}
        />
        {error.cookTime && <p className="form-error">{error.cookTime}</p>}
      </div>
    </React.Fragment>
  )
}
