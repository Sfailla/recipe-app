import React from 'react'
import './style.css'

export default function Heading({ title, align = 'center' }) {
  return (
    <div className={`heading heading-${align}`}>
      <h2 className="title">{title}</h2>
    </div>
  )
}
