import React from 'react'

export default function useFormValidation(initialValues = {}, validate, authenticate) {
  const [values, setValues] = React.useState(initialValues)
  const [errors, setErrors] = React.useState({})
  const [isSubmitting, setSubmitting] = React.useState(false)

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        authenticate()
        setSubmitting(false)
      } else {
        console.warn('form-errors')
        setSubmitting(false)
      }
    }
  }, [values, errors, isSubmitting, authenticate])

  function handleChange(event) {
    event.persist()
    setValues(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  function handleChangeNumber(event) {
    event.persist()
    setValues(prevState => ({
      ...prevState,
      [event.target.name]: parseInt(event.target.value)
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    let errors = validate(values)
    setErrors(errors)
    setSubmitting(true)
  }

  return {
    values,
    formErrors: errors,
    isSubmitting,
    handleChange,
    handleChangeNumber,
    handleSubmit
  }
}
