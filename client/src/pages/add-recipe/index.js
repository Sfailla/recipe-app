import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import './style.css'
import { Heading, Section, IngredientForm, RecipeForm, DirectionForm } from '../../components'
import { useFormValidation, useRecipe } from '../../hooks'
import validateForm from './validateForm'

const initialValues = {
  title: '',
  description: '',
  servings: '',
  prepTime: '',
  cookTime: '',
  images: { full: null, medium: null, small: null }
}

const initialIngredient = { id: uuidv4(), amount: '', measurement: '', name: '' }
const initialDirection = { id: uuidv4(), instructions: '', optional: false }

export default function AddRecipe() {
  const [ingredients, setIngredients] = React.useState([initialIngredient])
  const [directions, setDirections] = React.useState([initialDirection])

  const handleChangeIngredient = (event, index) => {
    const newIngredients = [...ingredients]
    newIngredients[index][event.target.name] = event.target.value
    setIngredients(newIngredients)
  }

  const handleChangeDirection = (event, index) => {
    const newDirections = [...directions]
    newDirections[index][event.target.name] = event.target.value
    setDirections(newDirections)
  }

  const handleAddIngredient = () => {
    const ingredient = { id: uuidv4(), amount: '', measurement: '', name: '' }
    const newIngredients = [...ingredients, ingredient]
    setIngredients(newIngredients)
  }

  const handleAddDirection = () => {
    const newDirection = [...directions]
    newDirection.push({ id: uuidv4(), instructions: '', optional: false })
    setDirections(newDirection)
  }

  const { values, formErrors, handleChange, handleSubmit } = useFormValidation(
    initialValues,
    validateForm,
    submitForm
  )

  const { addRecipe } = useRecipe()

  function submitForm() {
    const formFields = {
      ...values,
      ingredients,
      directions
    }

    setDirections([initialDirection])
    setIngredients([initialIngredient])

    addRecipe(formFields)
  }

  return (
    <div>
      <Heading title="Add Recipe" align="left" />
      <Section className="add-recipe-section">
        <div className="wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <RecipeForm values={values} error={formErrors} handleChange={handleChange} />
            <div className="add-recipe-form__button-wrapper">
              <button className="button submit-button" type="submit">
                Submit
              </button>
              <button
                onClick={() => window.location.reload()}
                className="button cancel-button"
                type="button"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className="wrapper">
          <IngredientForm
            ingredients={ingredients}
            handleAddIngredient={handleAddIngredient}
            handleArrayChange={handleChangeIngredient}
          />

          <DirectionForm
            directions={directions}
            handleAddDirection={handleAddDirection}
            handleChangeDirection={handleChangeDirection}
          />
        </div>
      </Section>
    </div>
  )
}
