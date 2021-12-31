export default function validateForm(values) {
  let errors = {}

  if (!values.title) {
    errors.title = 'title field is required'
  }

  if (!values.description) {
    errors.description = 'description field is required'
  }

  if (!values.servings) {
    errors.servings = 'servings field is required'
  }

  if (!values.prepTime) {
    errors.prepTime = 'prepTime field is required'
  }

  if (!values.cookTime) {
    errors.cookTime = 'cookTime field is required'
  }

  return errors
}
