import React from 'react'
import './style.css'
import { useLocation } from 'react-router-dom'
import { useRecipe } from '../../hooks'
import { Heading, Section, RecipeDetailsCard, Loader } from '../../components'

function RecipeDetailsPage() {
  const { state: recipe } = useLocation()
  const { loading } = useRecipe()

  return (
    <div>
      <Heading title="Recipe Instructions" align="left" />
      <Section>{loading ? <Loader /> : <RecipeDetailsCard recipe={recipe} />}</Section>
    </div>
  )
}

export default RecipeDetailsPage
