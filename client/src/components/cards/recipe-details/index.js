import React from 'react'
import './style.css'
import defaultImage from '../../../assets/img/default-recipe.png'
import { MetaItems } from '../..'

export default function RecipeDetailsCard({ recipe }) {
  return (
    <div className="details__card">
      <div className="details__image">
        <img src={recipe.images?.full || defaultImage} alt={recipe.title} />
      </div>
      <div className="details__content">
        <div className="details__header">
          <h2 className="title">{recipe.title}</h2>
          <div className="details__meta">
            <MetaItems items={recipe} />
          </div>
        </div>
        <div className="details__main">
          <div className="details__ingredients">
            <h3 className="details__subtitle">Ingredients</h3>
            <ul className="details__list">
              {recipe.ingredients.map(ingredient => (
                <li key={ingredient.uuid} className="details__ingredient">
                  <span className="details__ingredient-items">{`${ingredient.amount} ${ingredient.measurement} ${ingredient.name}`}</span>
                  {ingredient.type && ingredient.title && ingredient.text && (
                    <React.Fragment>
                      <span className="details__ingredient--nested">-{ingredient.title}</span>
                      <span className="details__ingredient--nested">-{ingredient.type}</span>
                      <span className="details__ingredient--nested">-{ingredient.text}</span>
                    </React.Fragment>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="details__instructions">
            <h3 className="details__subtitle">Directions</h3>
            <ol className="details__list">
              {recipe.directions.map(({ instructions, optional }, index) => (
                <li key={index} className="details__instruction">
                  <span className="details__instruction-text">{instructions}</span>
                  {optional && <span className="details__instruction-optional">(optional)</span>}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
