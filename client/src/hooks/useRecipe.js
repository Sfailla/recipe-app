import React from 'react'
import { useNavigate } from 'react-router-dom'

const baseUrl = 'http://localhost:3001'

export default function useRecipe() {
  const [recipes, setRecipes] = React.useState([])
  const [specials, setSpecials] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const navigate = useNavigate()

  const getRecipes = React.useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${baseUrl}/recipes`)
      const data = await response.json()
      setRecipes(data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  const getSpecials = React.useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${baseUrl}/specials`)
      const data = await response.json()
      setSpecials(data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  const addSpecialsToRecipe = React.useCallback(() => {
    setLoading(true)
    const recipesWithSpecials = recipes.map(recipe => {
      const ingredientsWithSpecials = recipe.ingredients.map(ingredient => {
        const special = specials.find(special => special.ingredientId === ingredient.uuid)
        if (special) {
          return {
            ...ingredient,
            title: special.title,
            type: special.type,
            text: special.text
          }
        }
        return ingredient
      })
      return {
        ...recipe,
        ingredients: ingredientsWithSpecials
      }
    })

    setRecipes(recipesWithSpecials)
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specials])

  const addRecipe = React.useCallback(
    async formFields => {
      setLoading(true)
      try {
        const options = {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(formFields)
        }
        const response = await fetch(`${baseUrl}/recipes`, options)
        const data = await response.json()
        setRecipes([...recipes, data])
        navigate('/')
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    },
    [recipes, navigate]
  )

  React.useEffect(() => addSpecialsToRecipe(), [addSpecialsToRecipe])

  React.useEffect(() => {
    getRecipes()
    getSpecials()
  }, [getRecipes, getSpecials])

  return {
    recipes,
    loading,
    error,
    addSpecialsToRecipe,
    addRecipe
  }
}
