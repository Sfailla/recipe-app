import React from 'react'

export default function DirectionForm({ directions, handleAddDirection, handleChangeDirection }) {
  return (
    <React.Fragment>
      <div className="label-wrapper">
        <label className="form-label" htmlFor="ingredient-name">
          Directions
        </label>
        <button onClick={handleAddDirection}>Add Direction</button>
      </div>
      {directions.map((directions, index) => (
        <div className="form-group multiple-group" key={index}>
          <input
            type="text"
            placeholder="instructions..."
            className="form-input form-input-short"
            onChange={event => handleChangeDirection(event, index)}
            name="instructions"
            value={directions.instructions}
          />

          <select
            className="select-option"
            name="optional"
            value={directions.optional}
            onChange={event => handleChangeDirection(event, index)}
          >
            <option value={true}>true</option>
            <option value={false}>false</option>
          </select>
        </div>
      ))}
    </React.Fragment>
  )
}
