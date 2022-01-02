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
    errors.prepTime = 'prep time field is required'
  }

  if (!values.cookTime) {
    errors.cookTime = 'cook time field is required'
  }

  return errors
}
