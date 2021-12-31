import React from 'react'
import './style.css'
import defaultImage from '../../../assets/img/default-recipe.png'
import { Link } from 'react-router-dom'
import { MetaItems } from '../..'

export default function RecipeItemCard({ recipe }) {
  return (
    <li className="item">
      <div className="item__image">
        <img src={recipe.images?.medium || defaultImage} alt={recipe.title} />
      </div>
      <div className="item__content">
        <div className="item__title-wrapper">
          <h4 className="item__title">{recipe.title}</h4>
          <div className="item__description">
            <p>{recipe.description}</p>
          </div>
        </div>
        <div className="item__meta-section">
          <MetaItems items={recipe} />
        </div>
        <div className="item__button-container">
          <Link to={`/recipe/${recipe.uuid}`} state={recipe} className="item__button-link">
            View Recipe
          </Link>
        </div>
      </div>
    </li>
  )
}
