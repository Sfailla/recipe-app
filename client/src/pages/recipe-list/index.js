import React from 'react'
import './style.css'
import { Heading, Section, RecipeItemCard, Loader } from '../../components'
import { useRecipe } from '../../hooks'
import { Link } from 'react-router-dom'
import { ReactComponent as PlusIcon } from '../../assets/svg/plus.svg'

export default function RecipeListPage() {
  const { recipes, loading } = useRecipe()

  return (
    <div className="recipe-list">
      <div className="recipe-list__button-container">
        <Link to="/add-recipe" className="add-recipe-button">
          <PlusIcon width={28} height={28} fill="white" />
          <span>Add</span>
        </Link>
      </div>
      <Heading title="World Class Recipes" />
      <Section className="recipe-list__section">
        <ul className="recipe-list__container">
          {loading ? (
            <Loader />
          ) : recipes.length > 0 ? (
            recipes.map(recipe => <RecipeItemCard key={recipe.uuid} recipe={recipe} />)
          ) : (
            <EmptyListMessage />
          )}
        </ul>
      </Section>
    </div>
  )
}

function EmptyListMessage() {
  return <p className="recipe-list__none">No recipes found</p>
}
